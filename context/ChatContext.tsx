import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ChatMessage, KnowledgeItem } from '../types';
import { KO_DATA, ACADEMY_INFO } from '../constants';

interface ChatContextType {
  isOpen: boolean;
  toggleChat: () => void;
  messages: ChatMessage[];
  sendMessage: (text: string) => Promise<void>;
  addLocalMessage: (message: ChatMessage) => void;
  isLoading: boolean;
  knowledgeBase: KnowledgeItem[];
  addKnowledge: (title: string, content: string) => void;
  importKnowledge: (items: { title: string, content: string }[]) => void;
  deleteKnowledge: (id: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

const KNOWLEDGE_STORAGE_KEY = 'ican-bot-knowledge-v1';

// Convert static app data to a string for the bot context
const generateSystemContext = () => {
  const staticData = JSON.stringify({
    academyInfo: ACADEMY_INFO,
    curriculum: KO_DATA.curriculum,
    fees: KO_DATA.fees,
    livingGuide: KO_DATA.living.items,
    faq: KO_DATA.faq.items,
    locationHighlights: KO_DATA.home.location,
    strengths: KO_DATA.strengths
  }, null, 2);

  return `
    You are "Dr. ICAN", an AI assistant for ICAN Ortigas Camp (아이캔 올티가스 캠프).
    Your role is to help parents and students with information about the academy, curriculum, fees, visa procedures, and living in Ortigas, Philippines.

    CORE KNOWLEDGE BASE:
    ${staticData}

    INSTRUCTIONS:
    1. Answer questions based ONLY on the provided knowledge base and any additional context provided below.
    2. If you don't know the answer, politely say "죄송합니다, 해당 정보는 학원에 직접 문의해주시기 바랍니다." (Sorry, please contact the academy directly).
    3. Be polite, professional, and encouraging.
    4. Provide answers in Korean unless the user asks in English.
    5. When discussing fees, mention that they are estimates and might change.
    6. Emphasize safety (24h security) and location (Ortigas Center) when relevant.
    7. Keep answers concise but informative. Use bullet points for lists.
  `;
};

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '안녕하세요! 아이캔 올티가스 캠프에 대해 궁금한 점이 있으신가요? 닥터 아이캔이 도와드리겠습니다.', timestamp: Date.now() }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [knowledgeBase, setKnowledgeBase] = useState<KnowledgeItem[]>([]);

  // Load Knowledge Base
  useEffect(() => {
    const saved = localStorage.getItem(KNOWLEDGE_STORAGE_KEY);
    if (saved) {
      try {
        setKnowledgeBase(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load knowledge base");
      }
    }
  }, []);

  // Save Knowledge Base
  useEffect(() => {
    localStorage.setItem(KNOWLEDGE_STORAGE_KEY, JSON.stringify(knowledgeBase));
  }, [knowledgeBase]);

  const toggleChat = () => setIsOpen(!isOpen);

  const addKnowledge = (title: string, content: string) => {
    const newItem: KnowledgeItem = {
      id: Date.now().toString(),
      title,
      content,
      date: new Date().toISOString().split('T')[0],
      source: 'user'
    };
    setKnowledgeBase(prev => [...prev, newItem]);
  };

  const importKnowledge = (items: { title: string, content: string }[]) => {
    const newItems: KnowledgeItem[] = items.map((item, idx) => ({
      id: `${Date.now()}-${idx}`,
      title: item.title,
      content: item.content,
      date: new Date().toISOString().split('T')[0],
      source: 'user'
    }));
    setKnowledgeBase(prev => [...prev, ...newItems]);
  };

  const deleteKnowledge = (id: string) => {
    setKnowledgeBase(prev => prev.filter(k => k.id !== id));
  };

  const addLocalMessage = (message: ChatMessage) => {
    setMessages(prev => [...prev, message]);
  };

  const sendMessage = async (text: string) => {
    // Add user message
    const userMsg: ChatMessage = { role: 'user', text, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

      if (!apiKey) {
        throw new Error("Gemini API Key (VITE_GEMINI_API_KEY) not found. Please check your environment variables.");
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash",
        systemInstruction: generateSystemContext() + "\n\nADDITIONAL KNOWLEDGE:\n" + knowledgeBase.map(k => `[Topic: ${k.title}]\n${k.content}`).join('\n\n')
      });

      // Construct history manually to ensure it starts with 'user'
      // We skip the first message if it's from the model (the default greeting)
      const history = messages
        .filter((msg, index) => index > 0 || msg.role === 'user')
        .map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.text }]
        }));

      // Robust check: Ensure history starts with 'user'
      while (history.length > 0 && history[0].role !== 'user') {
        history.shift();
      }

      // Final contents must start with 'user' and alternate.
      // Since we add a 'user' message now, history must end with 'model' or be empty.
      while (history.length > 0 && history[history.length - 1].role !== 'model') {
        history.pop();
      }

      const contents = [...history, { role: 'user', parts: [{ text }] }];

      const result = await model.generateContent({
        contents,
        generationConfig: {
          temperature: 0.7,
        }
      });

      const response = await result.response;
      const responseText = response.text();

      const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
      setMessages(prev => [...prev, botMsg]);

    } catch (error: any) {
      console.error("Dr. ICAN AI Error:", error);
      // Log more details if available
      if (error.response) console.error("Error Response:", error.response);

      setMessages(prev => [...prev, {
        role: 'model',
        text: '죄송합니다. 현재 AI 서버와 연결할 수 없습니다. 잠시 후 다시 시도해주시거나, 카카오톡으로 문의해주세요.',
        timestamp: Date.now()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ChatContext.Provider value={{
      isOpen, toggleChat, messages, sendMessage, addLocalMessage, isLoading,
      knowledgeBase, addKnowledge, importKnowledge, deleteKnowledge
    }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};