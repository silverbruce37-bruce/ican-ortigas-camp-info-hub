import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { UserProfile } from '../types';
import { auth, db, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User as FirebaseUser, doc, getDoc, setDoc, updateDoc, onSnapshot, collection, query, deleteDoc } from '../mockFirebase';


interface AuthContextType {
  user: UserProfile | null;
  allUsers: UserProfile[]; // DB Access for Admin
  isInitialized: boolean;
  loginWithGoogle: () => Promise<void>; // New Google Login
  updateProfile: (data: Partial<UserProfile>) => Promise<void>; // Update add'l info like KakaoID
  loginAdmin: (id: string, password: string) => Promise<boolean>; // Keep for legacy/backdoor access if needed
  logout: () => void;
  updateUserRole: (userId: string, role: 'user' | 'admin') => void;
  updateUserStatus: (userId: string, status: 'active' | 'banned') => void;
  deleteUser: (userId: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Admin Password Storage (Legacy/Fallback)
const ADMIN_PWD_KEY = 'ican-admin-pwd-v1';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [allUsers, setAllUsers] = useState<UserProfile[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);

  // 1. Listen for Auth Changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser: FirebaseUser | null) => {
      setFirebaseUser(authUser);
      if (authUser) {
        // Fetch User Profile from Firestore
        const userRef = doc(db, 'users', authUser.uid);
        try {
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            const userData = userSnap.data() as UserProfile;
            if (userData.status === 'banned') {
              alert("This account has been banned.");
              signOut(auth);
              setUser(null);
            } else {
              // Ensure ID matches
              setUser({ ...userData, id: authUser.uid });
            }
          } else {
            // First time login, create profile
            const newUser: UserProfile = {
              id: authUser.uid,
              name: authUser.displayName || 'New User',
              email: authUser.email || '',
              kakaoId: '', // To be filled
              profileImage: authUser.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(authUser.displayName || 'U')}`,
              role: 'user',
              status: 'active',
              joinedAt: new Date().toISOString().split('T')[0],
              likedItems: []
            };
            await setDoc(userRef, newUser);
            setUser(newUser);
          }
        } catch (error) {
          console.error("Error fetching user profile:", error);
          // Fallback for when Firestore rules fail or network error
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setIsInitialized(true);
    });

    return () => unsubscribe();
  }, []);

  // 2. Real-time Listeners (Sync User Data & All Users for Admin)
  useEffect(() => {
    if (!firebaseUser) return;

    // Listen to my own profile changes
    const userRef = doc(db, 'users', firebaseUser.uid);
    const unsubUser = onSnapshot(userRef, (docSnap: any) => {
      if (docSnap.exists()) {
        const data = docSnap.data() as UserProfile;
        // Prevent ban bypass
        if (data.status === 'banned') {
          signOut(auth);
          setUser(null);
        } else {
          setUser({ ...data, id: firebaseUser.uid });
        }
      }
    }, (error: any) => {
      console.error("User snapshot error:", error);
    });

    let unsubAllUsers = () => { };

    // If I am admin, listen to all users
    if (user?.role === 'admin') {
      const q = query(collection(db, 'users'));
      unsubAllUsers = onSnapshot(q, (snapshot: any) => {
        const users: UserProfile[] = [];
        snapshot.forEach((docSnap: any) => {
          users.push({ ...docSnap.data(), id: docSnap.id } as UserProfile);
        });
        setAllUsers(users);
      }, (error: any) => {
        console.error("All users snapshot error:", error);
      });
    } else {
      setAllUsers([]);
    }

    return () => {
      unsubUser();
      unsubAllUsers();
    };
  }, [firebaseUser, user?.role]);


  // Login with Google
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // Redirect or state update handled by onAuthStateChanged
    } catch (error) {
      console.error("Google Login Failed", error);
      alert("Login failed. Please check your configuration and try again.");
    }
  };

  // Update Profile (e.g. adding Kakao ID)
  const updateProfile = async (data: Partial<UserProfile>) => {
    if (!user) return;
    const userRef = doc(db, 'users', user.id);
    await updateDoc(userRef, data);
  };

  // Legacy Admin Login (keeps working for 'admin' fallback if needed, but creates a session)
  const loginAdmin = async (id: string, password: string): Promise<boolean> => {
    const storedPwd = localStorage.getItem(ADMIN_PWD_KEY) || '1441';

    if (id === 'admin' && password === storedPwd) {
      // Create a mock admin user (Firebase User structure)
      const adminFirebaseUser: FirebaseUser = {
        uid: 'admin-master',
        displayName: 'Master Admin',
        email: 'admin@ican.com',
        photoURL: 'https://ui-avatars.com/api/?name=Admin&background=000&color=fff'
      };

      // 1. Persist to Mock Auth (LocalStorage) so it survives refresh
      localStorage.setItem('mock_auth_user', JSON.stringify(adminFirebaseUser));

      // 2. Persist Profile to DB with Admin Role
      const adminProfile: UserProfile = {
        id: 'admin-master',
        name: 'Master Admin',
        email: 'admin@ican.com',
        kakaoId: 'ican_admin',
        role: 'admin',
        status: 'active',
        joinedAt: new Date().toISOString().split('T')[0],
        profileImage: adminFirebaseUser.photoURL || '',
        likedItems: []
      };
      await setDoc(doc(db, 'users', 'admin-master'), adminProfile);

      // 3. Trigger Mock Auth Change
      window.dispatchEvent(new Event('storage'));

      return true;
    }
    return false;
  };

  const logout = () => {
    signOut(auth);
    setUser(null);
  };

  // --- Admin Functions ---

  const updateUserRole = async (userId: string, role: 'user' | 'admin') => {
    if (user?.role !== 'admin') return;
    await updateDoc(doc(db, 'users', userId), { role });
  };

  const updateUserStatus = async (userId: string, status: 'active' | 'banned') => {
    if (user?.role !== 'admin') return;
    await updateDoc(doc(db, 'users', userId), { status });
  };

  const deleteUser = async (userId: string) => {
    if (user?.role !== 'admin') return;
    if (confirm("Are you sure? This will delete the user profile from database.")) {
      await deleteDoc(doc(db, 'users', userId));
    }
  };

  return (
    <AuthContext.Provider value={{ user, allUsers, isInitialized, loginWithGoogle, updateProfile, loginAdmin, logout, updateUserRole, updateUserStatus, deleteUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};