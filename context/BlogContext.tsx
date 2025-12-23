import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { BlogPost, MediaItem } from '../types';
import { db, storage, collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, query, orderBy, ref, uploadString, uploadBytes, getDownloadURL, deleteObject } from '../mockFirebase';


interface BlogContextType {
  posts: BlogPost[];
  addPost: (post: BlogPost) => Promise<void>;
  updatePost: (post: BlogPost) => Promise<void>;
  deletePost: (id: string) => Promise<void>;
  backupPosts: () => void;
  restorePosts: (file: File) => Promise<boolean>;
  mediaLibrary: MediaItem[];
  uploadImage: (file: File) => Promise<string>;
  deleteMedia: (id: string) => Promise<void>;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [mediaLibrary, setMediaLibrary] = useState<MediaItem[]>([]);

  // 1. Sync Posts
  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('date', 'desc'));
    const unsubscribe = onSnapshot(collection(db, 'posts'), (snapshot: any) => {
      const _posts: BlogPost[] = [];
      snapshot.forEach((doc: any) => {
        _posts.push({ ...doc.data(), id: doc.id } as BlogPost);
      });
      // Sort by date desc
      setPosts(_posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
    });
    return () => unsubscribe();
  }, []);

  // 2. Sync Media Library
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'media'), (snapshot: any) => {
      const _media: MediaItem[] = [];
      snapshot.forEach((doc: any) => {
        _media.push({ ...doc.data(), id: doc.id } as MediaItem);
      });
      setMediaLibrary(_media.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
    });
    return () => unsubscribe();
  }, []);

  const addPost = async (post: BlogPost) => {
    try {
      // If image is base64, upload it (Optional logic, usually handled by ImagePicker before this)
      // usage in Admin shows it uses URLs from ImagePicker.
      // But AI generation might return base64.
      let coverImage = post.image;
      if (coverImage.startsWith('data:')) {
        coverImage = await uploadImageString(coverImage, `covers/${Date.now()}.jpg`);
      }

      await addDoc(collection(db, 'posts'), { ...post, image: coverImage });
    } catch (e) {
      console.error("Add post failed", e);
      alert("Failed to save post");
    }
  };

  const updatePost = async (updatedPost: BlogPost) => {
    try {
      let coverImage = updatedPost.image;
      if (coverImage.startsWith('data:')) {
        coverImage = await uploadImageString(coverImage, `covers/${Date.now()}.jpg`);
      }
      await updateDoc(doc(db, 'posts', updatedPost.id), { ...updatedPost, image: coverImage });
    } catch (e) {
      console.error("Update post failed", e);
    }
  };

  const deletePost = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      await deleteDoc(doc(db, 'posts', id));
    }
  };

  // --- Backup (JSON Export) ---
  const backupPosts = () => {
    const backupData = {
      posts,
      mediaLibrary
    };
    const dataStr = JSON.stringify(backupData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = `ican-blog-backup-${new Date().toISOString().slice(0, 10)}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  // --- Restore (Import to Firestore) ---
  const restorePosts = (file: File): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (event) => {
        try {
          const json = JSON.parse(event.target?.result as string);
          if (json.posts && Array.isArray(json.posts)) {
            if (!confirm(`Found ${json.posts.length} posts. Import them to database?`)) {
              resolve(false);
              return;
            }
            // Import Posts
            for (const p of json.posts) {
              // remove ID collision risk by letting firestore gen new ID or check existence
              const { id, ...postData } = p;
              await addDoc(collection(db, 'posts'), postData);
            }
            alert("Posts imported successfully!");
            resolve(true);
          } else {
            alert("Invalid backup file format.");
            resolve(false);
          }
        } catch (e) {
          alert("Failed to parse file or upload.");
          resolve(false);
        }
      };
      reader.readAsText(file);
    });
  };

  // --- Media ---
  const uploadImageString = async (base64: string, path: string) => {
    const storageRef = ref(storage, path);
    await uploadString(storageRef, base64, 'data_url');
    return await getDownloadURL(storageRef);
  }

  const uploadImage = async (file: File): Promise<string> => {
    const storageRef = ref(storage, `blog-media/${Date.now()}_${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);

    // Add to Media Library Collection (may fail if LocalStorage quota exceeded)
    const newItem: MediaItem = {
      id: '', // Firestore will assign
      url,
      name: file.name,
      date: new Date().toISOString().split('T')[0]
    };
    try {
      await addDoc(collection(db, 'media'), newItem);
    } catch (e) {
      console.warn('Media library storage full, skipping persistence for this image.', e);
    }

    return url;
  };

  const deleteMedia = async (id: string) => {
    if (window.confirm("Remove this image from gallery?")) {
      // We need to get the media item first to delete from storage if we want to be clean
      // Simplified: just delete from DB list
      await deleteDoc(doc(db, 'media', id));
    }
  };

  return (
    <BlogContext.Provider value={{ posts, addPost, updatePost, deletePost, backupPosts, restorePosts, mediaLibrary, uploadImage, deleteMedia }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};