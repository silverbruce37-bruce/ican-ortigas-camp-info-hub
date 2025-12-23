
// --- MOCK FIREBASE IMPLEMENTATION ---
// This file simulates the Firebase SDK using LocalStorage.

import { UserProfile, CarrotItem, BlogPost, MediaItem, CarrotChatRoom } from './types';
import { CARROT_ITEMS, BLOG_POSTS, LIVING_INFO_DATA_KO } from './constants';

// --- Types ---
type CollectionName = 'users' | 'posts' | 'products' | 'chats' | 'media';
type Listener = (snapshot: any) => void;

class MockFirestore {
    private listeners: { [key: string]: Listener[] } = {};

    constructor() {
        this.init();
    }

    private init() {
        // Always sync products with constants.tsx to ensure fixed image URLs are loaded
        localStorage.setItem('products', JSON.stringify(CARROT_ITEMS));

        // Always sync posts with constants.tsx to ensure new images are loaded
        localStorage.setItem('posts', JSON.stringify(BLOG_POSTS));
    }

    private getData(collection: CollectionName): any[] {
        const data = localStorage.getItem(collection);
        return data ? JSON.parse(data) : [];
    }

    private setData(collection: CollectionName, data: any[]) {
        localStorage.setItem(collection, JSON.stringify(data));
        this.notify(collection);
    }

    // Changed to public so separate functions can call it (by casting or if I export instance)
    public notify(collection: CollectionName) {
        if (this.listeners[collection]) {
            const data = this.getData(collection);
            // Simulate snapshot format
            const snapshot = {
                forEach: (callback: (doc: any) => void) => {
                    data.forEach(item => callback({ data: () => item, id: item.id }));
                },
                docs: data.map(item => ({ data: () => item, id: item.id }))
            };
            this.listeners[collection].forEach(cb => cb(snapshot));
        }
    }

    subscribe(collection: string, callback: Listener) {
        if (!this.listeners[collection]) this.listeners[collection] = [];
        this.listeners[collection].push(callback);
        // Initial call
        const data = this.getData(collection as CollectionName);
        const snapshot = {
            forEach: (cb: any) => data.forEach(item => cb({ data: () => item, id: item.id })),
            docs: data.map(item => ({ data: () => item, id: item.id }))
        };
        callback(snapshot);

        return () => {
            this.listeners[collection] = this.listeners[collection].filter(cb => cb !== callback);
        };
    }
}

const mockDb = new MockFirestore();
const mockAuth = { currentUser: null as any };

// --- FIRESTORE EXPORTS ---

export const db = mockDb;
export const auth = mockAuth;
export const storage = {};

export const collection = (db: any, name: string) => name;
export const doc = (db: any, col: string, id: string) => ({ col, id });

export const getDoc = async (docRef: any) => {
    const all = JSON.parse(localStorage.getItem(docRef.col) || '[]');
    const found = all.find((d: any) => d.id === docRef.id);
    return {
        exists: () => !!found,
        data: () => found
    };
};

export const setDoc = async (docRef: any, data: any) => {
    const all = JSON.parse(localStorage.getItem(docRef.col) || '[]');
    const index = all.findIndex((d: any) => d.id === docRef.id);
    if (index >= 0) all[index] = { ...data, id: docRef.id };
    else all.push({ ...data, id: docRef.id });
    localStorage.setItem(docRef.col, JSON.stringify(all));
    mockDb.notify(docRef.col as CollectionName);
};

export const updateDoc = async (docRef: any, data: any) => {
    const all = JSON.parse(localStorage.getItem(docRef.col) || '[]');
    const index = all.findIndex((d: any) => d.id === docRef.id);
    if (index >= 0) {
        all[index] = { ...all[index], ...data };
        localStorage.setItem(docRef.col, JSON.stringify(all));
        mockDb.notify(docRef.col as CollectionName);
    }
};

export const addDoc = async (colRef: any, data: any) => {
    const col = colRef as string;
    const id = `${col}-${Date.now()}`;
    const newItem = { ...data, id };
    const all = JSON.parse(localStorage.getItem(col) || '[]');
    all.push(newItem);
    localStorage.setItem(col, JSON.stringify(all));
    mockDb.notify(col as CollectionName);
    return { id };
};

export const deleteDoc = async (docRef: any) => {
    const all = JSON.parse(localStorage.getItem(docRef.col) || '[]');
    const newAll = all.filter((d: any) => d.id !== docRef.id);
    localStorage.setItem(docRef.col, JSON.stringify(newAll));
    mockDb.notify(docRef.col as CollectionName);
};

export const onSnapshot = (queryOrRef: any, callback: any, errorCb?: any) => {
    if (typeof queryOrRef === 'string') {
        return mockDb.subscribe(queryOrRef, callback);
    }
    if (queryOrRef.col && queryOrRef.id) {
        const timer = setInterval(() => {
            getDoc(queryOrRef).then(snap => callback(snap));
        }, 1000);
        return () => clearInterval(timer);
    }
    return () => { };
};

export const query = (colRef: any, ...args: any[]) => colRef;
export const orderBy = (field: string, dir: string) => ({ type: 'orderBy', field, dir });

// --- AUTH EXPORTS ---

export class GoogleAuthProvider { }

export const signInWithPopup = async (auth: any, provider: any) => {
    const randomName = prompt("Enter Name for Mock Google Login:", "Roy Kim") || "User";
    const user = {
        uid: `google-${Date.now()}`,
        displayName: randomName,
        email: `${randomName.toLowerCase().replace(/\s/g, '')}@gmail.com`,
        photoURL: `https://ui-avatars.com/api/?name=${encodeURIComponent(randomName)}&background=random`
    };
    localStorage.setItem('mock_auth_user', JSON.stringify(user));
    window.dispatchEvent(new Event('storage'));
    return { user };
};

export const signOut = async (auth: any) => {
    localStorage.removeItem('mock_auth_user');
    window.dispatchEvent(new Event('storage'));
};

export const onAuthStateChanged = (auth: any, callback: any) => {
    const checkUser = () => {
        const u = localStorage.getItem('mock_auth_user');
        callback(u ? JSON.parse(u) : null);
    };
    checkUser();
    window.addEventListener('storage', checkUser);
    return () => window.removeEventListener('storage', checkUser);
};

export type User = {
    uid: string;
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
}

// --- STORAGE EXPORTS ---

// Fallback memory storage for when LocalStorage is full
const memoryStorage: Record<string, string> = {};

export const ref = (storage: any, path: string) => path;

export const uploadString = async (ref: any, data: string, format: string) => {
    try {
        localStorage.setItem(`file:${ref}`, data);
    } catch (e) {
        console.warn("File too large for LocalStorage mock, using memory fallback");
        memoryStorage[`file:${ref}`] = data;
    }
    return;
};

export const uploadBytes = async (ref: any, file: File) => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
        reader.onload = (e) => {
            const data = e.target?.result as string;
            try {
                localStorage.setItem(`file:${ref}`, data);
            } catch (e) {
                console.warn("File too large for LocalStorage, using memory fallback");
                // Fallback to memory instead of rejecting
                try {
                    memoryStorage[`file:${ref}`] = data;
                } catch (err) {
                    reject(new Error("Memory full or upload failed"));
                    return;
                }
            }
            resolve(undefined);
        };
        reader.onerror = () => reject(new Error("File read error"));
        reader.readAsDataURL(file);
    });
};

export const getDownloadURL = async (path: string) => {
    let data = localStorage.getItem(`file:${path}`);
    if (!data) data = memoryStorage[`file:${path}`];
    return data || "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500";
};

export const deleteObject = async (ref: any) => {
    // clean up if possible
    localStorage.removeItem(`file:${ref}`);
    delete memoryStorage[`file:${ref}`];
    return;
};
