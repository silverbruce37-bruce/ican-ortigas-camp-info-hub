
import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: ReactNode;
}

export interface CurriculumItem {
  id: string;
  title: string;
  target: string;
  description: string[];
  image: string;
}

export interface CostItem {
  duration: string;
  tuition: string;
  materialFee: string;
}

export interface VisaCostItem {
  item: string;
  cost: string;
  note: string;
}

export interface LivingInfoItem {
  category: 'rent' | 'food' | 'grocery' | 'shopping' | 'mobile' | 'activity' | 'medical' | 'church' | 'korean_church';
  title: string;
  description: string;
  details?: (string | { text: string; url?: string })[]; // Updated to support links
  location?: string; // e.g., "Online" or "3F Megamall"
  coordinates?: { lat: number; lng: number }; // Added for Map
  type?: 'online' | 'offline';
  link?: string; // Optional link for external resources
  linkLabel?: string; // Optional label for the link button
  rating?: number; // 0 to 5
  priceLevel?: number; // 1: $, 2: $$, 3: $$$
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Supports paragraphs for now
  date: string;
  category: string;
  image: string;
  galleryImages?: string[]; // Collection of images for the post
  author: string;
  tags: string[];
}

export interface MediaItem {
  id: string;
  url: string;
  name: string;
  date: string;
}

// --- Chatbot Types ---
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface KnowledgeItem {
  id: string;
  title: string;
  content: string;
  date: string;
  source: 'user' | 'system';
}

// --- OltiCarrot Types ---
export interface CarrotItem {
  id: string;
  title: string;
  category: string;
  price: number;
  currency: string;
  location: string;
  time: string;
  image: string;
  additionalImages?: string[]; // NEW: Array for extra images (Max 5)
  likes: number;
  chats: number;
  seller: string;
  sellerKakaoId?: string; // Verification ID (Personal)
  sellerVerified?: boolean; // NEW: Seller Verification Status (Google Email Linked)
  openChatUrl?: string; // Specific Open Chat Room for this item
  description?: string; // Added for details
  status: 'sale' | 'reserved' | 'sold';
  buyerId?: string; // ID of the user who bought the item
  temperature?: number; // Manner Temperature (Base 36.5)
  sharingTemperature?: number; // NEW: Sharing/Devotion Temperature (Base 36.5)
}

// --- Carrot Internal Chat (Backup) ---
export type MessageType = 'text' | 'image' | 'offer' | 'appointment' | 'system';

export interface CarrotMessage {
  id: string;
  senderId: string; // User ID or 'seller' or 'system'
  text: string; // For offer, this might be "Offered 500 PHP"
  type: MessageType;
  timestamp: number;
  // Payload for special types
  offerAmount?: number;
  offerStatus?: 'pending' | 'accepted' | 'declined';
  appointmentTime?: string;
  appointmentLocation?: string;
}

export interface CarrotChatRoom {
  id: string;
  itemId: string;
  itemTitle: string;
  itemImage: string;
  itemPrice: number; // Snapshot of price
  sellerId: string; // To identify if user is seller
  buyerId: string;
  buyerName: string;
  lastMessage: string;
  updatedAt: number;
  messages: CarrotMessage[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  kakaoId: string;
  profileImage?: string;
  likedItems?: string[]; // IDs of liked items
  role: 'user' | 'admin'; // NEW: User Role
  status: 'active' | 'banned'; // NEW: User Status
  joinedAt: string; // NEW: Join Date
}
