
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { COMMUNITY_DATA } from '../constants_community';
import { Users, Store, Heart, MessageCircle } from 'lucide-react';
import OrtiCarrot from './OrtiCarrot';
import { motion, AnimatePresence } from 'framer-motion';

// Mock components for other tabs
const HelpBoard = () => {
    return (
        <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
            <Heart className="w-16 h-16 mx-auto text-pink-300 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Comming Soon</h3>
            <p className="text-gray-500">I Can Help / I Need Help 게시판이 곧 오픈됩니다.</p>
        </div>
    );
};

const BusinessDirectory = () => {
    return (
        <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
            <Store className="w-16 h-16 mx-auto text-blue-300 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Comming Soon</h3>
            <p className="text-gray-500">학부모님들의 비즈니스 파트너 목록이 곧 오픈됩니다.</p>
        </div>
    );
};

const TentmakerStories = () => {
    return (
        <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
            <MessageCircle className="w-16 h-16 mx-auto text-green-300 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Comming Soon</h3>
            <p className="text-gray-500">텐트메이커들의 진솔한 이야기가 곧 업데이트됩니다.</p>
        </div>
    );
};

const Community: React.FC = () => {
    const { language } = useLanguage();
    // Default to 'market' since it's the most feature-complete part right now
    const [activeTab, setActiveTab] = useState<'market' | 'help' | 'business' | 'story'>('market');
    const t = language === 'ko' ? COMMUNITY_DATA.ko : COMMUNITY_DATA.en;

    const tabs = [
        { id: 'market', label: t.tabs.market, icon: Store },
        { id: 'help', label: t.tabs.help, icon: Heart },
        { id: 'business', label: t.tabs.business, icon: Users },
        { id: 'story', label: t.tabs.story, icon: MessageCircle },
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-20 pb-20">
            {/* Community Header */}
            <div className="max-w-5xl mx-auto px-6 mb-10 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">{t.title}</h1>
                <p className="text-lg text-gray-600">{t.subtitle}</p>
            </div>

            {/* Navigation Tabs */}
            <div className="max-w-5xl mx-auto px-6 mb-10">
                <div className="flex p-1 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-x-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all whitespace-nowrap
                                ${activeTab === tab.id
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'text-gray-500 hover:bg-gray-50'
                                }`}
                        >
                            <tab.icon size={18} />
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="max-w-5xl mx-auto px-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {activeTab === 'market' && <OrtiCarrot embedded />}
                        {activeTab === 'help' && <HelpBoard />}
                        {activeTab === 'business' && <BusinessDirectory />}
                        {activeTab === 'story' && <TentmakerStories />}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Community;
