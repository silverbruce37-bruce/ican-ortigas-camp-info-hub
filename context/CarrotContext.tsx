import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { CarrotItem, CarrotChatRoom, CarrotMessage, MessageType } from '../types';
import { useAuth } from './AuthContext';
import { db, storage, collection, addDoc, updateDoc, doc, onSnapshot, query, orderBy, setDoc, getDoc, ref, uploadString, getDownloadURL } from '../mockFirebase';


interface CarrotContextType {
  items: CarrotItem[];
  addItem: (item: CarrotItem) => Promise<void>;
  updateItemStatus: (itemId: string, status: 'sale' | 'reserved' | 'sold', buyerId?: string) => Promise<void>;
  toggleLike: (itemId: string) => void;
  praiseSeller: (sellerName: string) => void;

  // Chat / Backup Functions
  chatRooms: CarrotChatRoom[];
  createOrGetChat: (item: CarrotItem) => Promise<string>; // Returns chatRoomId
  sendMessage: (chatRoomId: string, text: string, type?: MessageType, payload?: Partial<CarrotMessage>) => Promise<void>;
  updateMessage: (chatRoomId: string, messageId: string, updates: Partial<CarrotMessage>) => Promise<void>;
  getChatRoom: (chatRoomId: string) => CarrotChatRoom | undefined;
}

const CarrotContext = createContext<CarrotContextType | undefined>(undefined);

export const CarrotProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [items, setItems] = useState<CarrotItem[]>([]);
  const [chatRooms, setChatRooms] = useState<CarrotChatRoom[]>([]);

  // 1. Sync Items
  useEffect(() => {
    const q = query(collection(db, 'products'), orderBy('time', 'desc'));

    const unsubscribe = onSnapshot(collection(db, 'products'), (snapshot: any) => {
      const productList: CarrotItem[] = [];
      snapshot.forEach((doc: any) => {
        productList.push({ ...doc.data(), id: doc.id } as CarrotItem);
      });
      setItems(productList);
    }, (error: any) => {
      console.error("Error fetching products:", error);
    });
    return () => unsubscribe();
  }, []);

  // 2. Sync Chats (User Specific)
  useEffect(() => {
    if (!user) {
      setChatRooms([]);
      return;
    }

    const unsubscribe = onSnapshot(collection(db, 'chats'), (snapshot: any) => {
      const chats: CarrotChatRoom[] = [];
      snapshot.forEach((doc: any) => {
        const chatData = doc.data() as CarrotChatRoom;
        // Only include if user involved OR Admin? 
        if (chatData.buyerId === user.id || chatData.sellerId === user.id || chatData.sellerId === user.name) {
          chats.push({ ...chatData, id: doc.id });
        }
      });
      setChatRooms(chats.sort((a, b) => b.updatedAt - a.updatedAt));
    });

    return () => unsubscribe();
  }, [user]);

  // --- Helpers ---
  const uploadImageToStorage = async (base64Data: string, path: string): Promise<string> => {
    if (!base64Data || !base64Data.startsWith('data:')) return base64Data;

    const storageRef = ref(storage, path);
    await uploadString(storageRef, base64Data, 'data_url');
    return await getDownloadURL(storageRef); // This mock returns whatever we need
  };

  // --- Item Actions ---
  const addItem = async (item: CarrotItem) => {
    try {
      // Upload Main Image
      let imageUrl = item.image;
      if (item.image.startsWith('data:')) {
        imageUrl = await uploadImageToStorage(item.image, `products/${item.id}/main.jpg`);
      }

      // Upload Additional Images
      let additionalUrls: string[] = [];
      if (item.additionalImages && item.additionalImages.length > 0) {
        additionalUrls = await Promise.all(item.additionalImages.map(async (img, idx) => {
          if (img.startsWith('data:')) {
            return await uploadImageToStorage(img, `products/${item.id}/extra_${idx}.jpg`);
          }
          return img;
        }));
      }

      const newItem = {
        ...item,
        image: imageUrl,
        additionalImages: additionalUrls,
        createdAt: Date.now() // Add timestamp for sorting
      };

      // Use custom ID if provided or let Firestore generate
      await setDoc(doc(db, 'products', item.id), newItem);

    } catch (error) {
      console.error("Error adding item:", error);
      alert("Failed to post item.");
    }
  };

  const updateItemStatus = async (itemId: string, status: 'sale' | 'reserved' | 'sold', buyerId?: string) => {
    const docRef = doc(db, 'products', itemId);
    await updateDoc(docRef, { status, buyerId: buyerId || null });
  };

  const toggleLike = async (itemId: string) => {
    // Optimistic or real update
    // Requires tracking liked items in UserProfile
    // For now, just increment counter in doc
    const item = items.find(i => i.id === itemId);
    if (item) {
      const newLikes = item.likes + 1; // Logic is simplified
      await updateDoc(doc(db, 'products', itemId), { likes: newLikes });
    }
  };

  const praiseSeller = async (sellerName: string) => {
    // Find items by seller and update
    // Inefficient, but matches current logic
    items.filter(i => i.seller === sellerName).forEach(async (item) => {
      const currentTemp = item.temperature || 36.5;
      const newTemp = Math.min(99.9, currentTemp + 0.5);
      await updateDoc(doc(db, 'products', item.id), { temperature: parseFloat(newTemp.toFixed(1)) });
    });
  };

  // --- Chat Actions ---
  const createOrGetChat = async (item: CarrotItem): Promise<string> => {
    if (!user) return '';

    // Check existing in memory (synced)
    const existingChat = chatRooms.find(c => c.itemId === item.id && c.buyerId === user.id);
    if (existingChat) return existingChat.id;

    const newChatId = `chat-${Date.now()}`;
    const newChat: CarrotChatRoom = {
      id: newChatId,
      itemId: item.id,
      itemTitle: item.title,
      itemImage: item.image,
      itemPrice: item.price,
      sellerId: item.seller, // sellerName actually
      buyerId: user.id,
      buyerName: user.name,
      lastMessage: 'Conversation started',
      updatedAt: Date.now(),
      messages: []
    };

    await setDoc(doc(db, 'chats', newChatId), newChat);
    return newChatId;
  };

  const sendMessage = async (chatRoomId: string, text: string, type: MessageType = 'text', payload: Partial<CarrotMessage> = {}) => {
    const chatDocRef = doc(db, 'chats', chatRoomId);
    const chatSnap = await getDoc(chatDocRef);

    if (!chatSnap.exists()) return;
    const chatData = chatSnap.data() as CarrotChatRoom;

    const senderId = type === 'system' ? 'system' : (user ? user.id : 'unknown');

    const newMessage: CarrotMessage = {
      id: `msg-${Date.now()}`,
      senderId: senderId,
      text,
      type,
      timestamp: Date.now(),
      ...payload
    };

    const updatedMessages = [...chatData.messages, newMessage];

    await updateDoc(chatDocRef, {
      messages: updatedMessages,
      lastMessage: type === 'image' ? '(Photo)' : text,
      updatedAt: Date.now()
    });
  };

  const updateMessage = async (chatRoomId: string, messageId: string, updates: Partial<CarrotMessage>) => {
    const chatDocRef = doc(db, 'chats', chatRoomId);
    const chatSnap = await getDoc(chatDocRef);
    if (!chatSnap.exists()) return;

    const chatData = chatSnap.data() as CarrotChatRoom;
    const updatedMessages = chatData.messages.map(msg =>
      msg.id === messageId ? { ...msg, ...updates } : msg
    );

    await updateDoc(chatDocRef, { messages: updatedMessages });
  }

  const getChatRoom = (chatRoomId: string) => {
    return chatRooms.find(c => c.id === chatRoomId);
  };

  return (
    <CarrotContext.Provider value={{
      items, addItem, updateItemStatus, toggleLike, praiseSeller,
      chatRooms, createOrGetChat, sendMessage, updateMessage, getChatRoom
    }}>
      {children}
    </CarrotContext.Provider>
  );
};

export const useCarrot = () => {
  const context = useContext(CarrotContext);
  if (context === undefined) {
    throw new Error('useCarrot must be used within a CarrotProvider');
  }
  return context;
};