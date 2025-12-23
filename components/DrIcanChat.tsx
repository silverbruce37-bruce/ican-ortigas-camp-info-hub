import React, { useRef, useEffect, useState } from 'react';
import { useChat } from '../context/ChatContext';
import { MessageCircle, X, Send, Bot, Loader2, Sparkles, Paperclip, FileText, CheckCircle, UploadCloud } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DrIcanChat: React.FC = () => {
  const { isOpen, toggleChat, messages, sendMessage, isLoading, addKnowledge, addLocalMessage } = useChat();
  const inputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current && inputRef.current.value.trim()) {
      sendMessage(inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  const processFile = (file: File) => {
     const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const content = event.target?.result as string;
        let title = file.name;
        let finalContent = content;

        // Simple JSON heuristic
        if (file.name.endsWith('.json')) {
            try {
                const json = JSON.parse(content);
                // Try to extract useful parts if it's structured
                if (json.title) title = json.title;
                finalContent = JSON.stringify(json, null, 2);
            } catch (err) {
                // Keep as raw text if parse fails
            }
        }

        addKnowledge(`File: ${title}`, finalContent);
        
        // Notify via Chat
        addLocalMessage({
            role: 'model',
            text: `📁 I have ingested "${file.name}" into my knowledge base. You can now ask me questions about it!`,
            timestamp: Date.now()
        });
        
        setToastMessage(`Ingested ${file.name}`);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);

        // Clear input
        if (fileInputRef.current) fileInputRef.current.value = '';
        
      } catch (err) {
        console.error("Failed to read file", err);
        setToastMessage("Failed to read file.");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      }
    };
    
    if (file.name.endsWith('.txt') || file.name.endsWith('.json') || file.name.endsWith('.md')) {
        reader.readAsText(file);
    } else {
        setToastMessage("Only .txt, .md, or .json files supported.");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  return (
    <>
      {/* Floating Button - High Z-Index to prevent hiding */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-[100] p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center border border-white/20 ${
          isOpen ? 'bg-slate-800 rotate-90' : 'bg-gradient-to-r from-ican-600 to-indigo-600'
        } text-white`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-8 h-8" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-[100] w-[90vw] md:w-[400px] h-[600px] max-h-[75vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {/* Drag Overlay */}
            {isDragging && (
                <div className="absolute inset-0 z-50 bg-ican-600/90 backdrop-blur-sm flex flex-col items-center justify-center text-white animate-fade-in">
                    <UploadCloud className="w-16 h-16 mb-4 animate-bounce" />
                    <h3 className="text-xl font-bold">Drop Knowledge Here</h3>
                    <p className="text-sm opacity-80">.txt, .json, .md files supported</p>
                </div>
            )}

            {/* Header */}
            <div className="bg-gradient-to-r from-ican-800 to-indigo-900 p-4 flex items-center justify-between shadow-md relative overflow-hidden shrink-0">
               {/* Toast Notification */}
               <AnimatePresence>
                {showToast && (
                    <motion.div 
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        className="absolute inset-x-0 top-0 bottom-0 bg-emerald-600 flex items-center justify-center gap-2 text-white text-sm font-bold z-20"
                    >
                        <CheckCircle className="w-4 h-4" />
                        {toastMessage}
                    </motion.div>
                )}
               </AnimatePresence>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg leading-tight">Dr. ICAN</h3>
                  <p className="text-blue-200 text-xs flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> AI Consultant
                  </p>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      msg.role === 'user'
                        ? 'bg-ican-600 text-white rounded-br-none'
                        : 'bg-white text-slate-800 border border-gray-100 rounded-bl-none'
                    }`}
                  >
                     <div className="whitespace-pre-wrap">{msg.text}</div>
                     <div className={`text-[10px] mt-1 text-right opacity-70 ${msg.role === 'user' ? 'text-blue-100' : 'text-gray-400'}`}>
                        {new Date(msg.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                     </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl rounded-bl-none border border-gray-100 shadow-sm flex gap-2 items-center">
                    <Loader2 className="w-4 h-4 animate-spin text-ican-600" />
                    <span className="text-xs text-gray-500 font-medium">Dr. ICAN is thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 shrink-0">
              <div className="relative flex items-center gap-2">
                <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="p-3 text-gray-400 hover:text-ican-600 hover:bg-gray-100 rounded-xl transition-colors"
                    title="Upload Knowledge (.txt, .json)"
                >
                    <Paperclip className="w-5 h-5" />
                </button>
                <input 
                    type="file" 
                    ref={fileInputRef}
                    className="hidden"
                    accept=".txt,.json,.md"
                    onChange={handleFileUpload}
                />
                
                <div className="relative flex-1">
                    <input
                    ref={inputRef}
                    type="text"
                    placeholder="Ask or teach me something..."
                    className="w-full pl-4 pr-12 py-3 bg-gray-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-ican-500 focus:bg-white transition-all"
                    disabled={isLoading}
                    />
                    <button
                    type="submit"
                    disabled={isLoading}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-ican-600 text-white rounded-lg hover:bg-ican-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                    <Send className="w-4 h-4" />
                    </button>
                </div>
              </div>
              <div className="mt-2 text-center flex justify-between items-center px-1">
                 <p className="text-[10px] text-gray-400">AI can make mistakes.</p>
                 <p className="text-[10px] text-ican-500 font-medium cursor-help" title="Upload .txt files to teach Dr. ICAN new facts instantly.">Tip: Drag & Drop files supported</p>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DrIcanChat;