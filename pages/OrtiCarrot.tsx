import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { CarrotItem } from '../types';
import { Search, Plus, X, Heart, MessageCircle, ChevronRight, Image as ImageIcon, Loader2, User, Sparkles, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCarrot } from '../context/CarrotContext';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import heic2any from 'heic2any';

const OrtiCarrot: React.FC = () => {
    const { user, loginWithGoogle, updateProfile } = useAuth();
    const { items, addItem, createOrGetChat } = useCarrot();
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Modals
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isSellModalOpen, setIsSellModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<CarrotItem | null>(null);

    // Login Form State
    const [loginStep, setLoginStep] = useState<'init' | 'kakao'>('init');
    const [kakaoIdInput, setKakaoIdInput] = useState('');

    useEffect(() => {
        if (user) {
            if (!user.kakaoId) {
                setLoginStep('kakao');
                setIsLoginModalOpen(true);
            } else {
                setIsLoginModalOpen(false);
                setLoginStep('init');
            }
        }
    }, [user]);

    // Sell Form State
    interface SellFormState {
        title: string;
        category: string;
        price: string;
        image: string;
        additionalImages: string[];
        description: string;
        openChatUrl: string;
        kakaoId: string;
    }

    const initialSellForm: SellFormState = {
        title: '',
        category: 'Book',
        price: '',
        image: '',
        additionalImages: [],
        description: '',
        openChatUrl: '',
        kakaoId: ''
    };
    const [sellForm, setSellForm] = useState<SellFormState>(initialSellForm);
    const [isFreeSharing, setIsFreeSharing] = useState(false);
    const [isMissionDonation, setIsMissionDonation] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const categories = ['All', 'Mission', 'Sharing', 'Book', 'Electronics', 'Digital', 'Clothing', 'Kitchen', 'Furniture'];
    const sellCategories = categories.filter(c => c !== 'All' && c !== 'Sharing' && c !== 'Mission');

    const filteredItems = items.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const handleStartGoogleLogin = async () => {
        await loginWithGoogle();
    };

    const handleFinalLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (kakaoIdInput.trim()) {
            await updateProfile({ kakaoId: kakaoIdInput });
        }
    };

    const closeLoginModal = () => {
        setIsLoginModalOpen(false);
        setLoginStep('init');
        setKakaoIdInput('');
    }

    const handleSellClick = () => {
        if (!user) {
            setIsLoginModalOpen(true);
        } else if (!user.kakaoId) {
            setLoginStep('kakao');
            setIsLoginModalOpen(true);
        } else {
            setSellForm({
                ...initialSellForm,
                kakaoId: user.kakaoId
            });
            setIsFreeSharing(false);
            setIsMissionDonation(false);
            setIsSellModalOpen(true);
        }
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const currentImages = sellForm.additionalImages || [];
        const currentCount = (sellForm.image ? 1 : 0) + currentImages.length;

        if (currentCount >= 5) {
            alert('최대 5장까지만 업로드 가능합니다.');
            return;
        }

        if (file.size > 10 * 1024 * 1024) {
            alert('파일이 너무 큽니다. 10MB 이하로 올려주세요.');
            return;
        }

        setIsUploading(true);

        try {
            let processedFile = file;

            if (file.type === 'image/heic' || file.name.toLowerCase().endsWith('.heic')) {
                try {
                    const convertedBlob = await heic2any({
                        blob: file,
                        toType: "image/jpeg",
                        quality: 0.8
                    });
                    const blob = Array.isArray(convertedBlob) ? convertedBlob[0] : convertedBlob;
                    processedFile = new File([blob], file.name.replace(/\.heic$/i, ".jpg"), { type: "image/jpeg" });
                } catch (err) {
                    console.error("HEIC conversion failed:", err);
                    alert("HEIC 이미지 변환에 실패했습니다.");
                    setIsUploading(false);
                    return;
                }
            }

            const reader = new FileReader();
            reader.onload = (event) => {
                const result = event.target?.result as string;
                setSellForm(prev => {
                    const validAdditional = Array.isArray(prev.additionalImages) ? prev.additionalImages : [];
                    if (!prev.image) {
                        return { ...prev, image: result, additionalImages: validAdditional };
                    } else {
                        return { ...prev, additionalImages: [...validAdditional, result] };
                    }
                });
                setIsUploading(false);
            };
            reader.onerror = () => {
                alert("이미지 로드 중 오류가 발생했습니다.");
                setIsUploading(false);
            }
            reader.readAsDataURL(processedFile);
        } catch (error) {
            console.error("Upload process error:", error);
            setIsUploading(false);
        }

        e.target.value = '';
    };

    const handleRemoveImage = (index: number) => {
        setSellForm(prev => {
            const all = [prev.image, ...prev.additionalImages].filter(Boolean);
            all.splice(index, 1);
            return {
                ...prev,
                image: all[0] || '',
                additionalImages: all.slice(1)
            };
        });
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleSellSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;
        if (!sellForm.image) {
            alert("사진을 최소 1장 올려주세요.");
            return;
        }
        setIsSubmitting(true);
        const newItem: CarrotItem = {
            id: `item-${Date.now()}`,
            title: isMissionDonation ? `[나눔] ${sellForm.title}` : sellForm.title,
            category: sellForm.category,
            price: parseInt(sellForm.price) || 0,
            currency: 'PHP',
            location: 'Ortigas Center',
            time: new Date().toISOString(),
            image: sellForm.image,
            additionalImages: sellForm.additionalImages,
            likes: 0,
            chats: 0,
            seller: user.name,
            sellerKakaoId: sellForm.kakaoId || user.kakaoId,
            sellerVerified: !!user.email,
            openChatUrl: sellForm.openChatUrl || undefined,
            description: sellForm.description,
            status: 'sale',
            temperature: 36.5
        };
        await addItem(newItem);
        setIsSubmitting(false);
        setIsSellModalOpen(false);
        setSellForm(initialSellForm);
        setIsFreeSharing(false);
        setIsMissionDonation(false);
    };

    const handleInternalChat = async () => {
        if (!user) {
            setIsLoginModalOpen(true);
            return;
        }
        if (selectedItem) {
            const chatId = await createOrGetChat(selectedItem);
            navigate('/mypage', { state: { activeTab: 'chats', chatId: chatId } });
        }
    };

    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const handleAIAnalysis = async () => {
        const validAdditional = Array.isArray(sellForm.additionalImages) ? sellForm.additionalImages : [];
        const allImages = [sellForm.image, ...validAdditional].filter(Boolean);

        if (allImages.length === 0) {
            alert("사진을 먼저 등록해주세요! (최소 1장)");
            return;
        }

        setIsAnalyzing(true);
        try {
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

            if (!apiKey) {
                alert("AI 설정 오류: API Key가 없습니다.");
                setIsAnalyzing(false);
                return;
            }

            const ai = new GoogleGenAI({ apiKey });

            const prompt = `
                당신은 '올티가스 캐롯마켓'의 전문 판매글 작성 도우미입니다.
                제공된 사진들을 보고 상세한 판매글을 작성해주세요.

                필수 요구사항 (JSON 포맷):
                {
                    "title": "눈길을 끄는 제목 (이모지 포함)",
                    "category": "[Mission, Sharing, Book, Electronics, Digital, Clothing, Kitchen, Furniture] 중 가장 적합한 것 하나",
                    "price": "예상 중고 가격 (숫자만, PHP). 나눔인 경우 0",
                    "description": "다정한 '당근' 말투로 제품의 특징, 상태(색상, 사용감 등), 매력을 3~4문장으로 작성. '올티가스 직거래', '쿨거래 환영' 등의 문구 포함."
                }
            `;

            const imageParts = allImages.map(img => {
                const base64Data = img.includes('base64,') ? img.split('base64,')[1] : img;
                return {
                    inlineData: {
                        mimeType: "image/jpeg",
                        data: base64Data
                    }
                };
            });

            const res = await ai.models.generateContent({
                model: 'gemini-flash-latest',
                contents: [
                    {
                        role: "user",
                        parts: [
                            { text: prompt },
                            ...imageParts
                        ]
                    }
                ],
                config: { responseMimeType: "application/json" }
            });

            const responseText = res.text;

            if (responseText) {
                const data = JSON.parse(responseText);
                let newCategory = data.category || 'Book';
                let isSharing = false;
                let isMission = false;
                let price = data.price ? String(data.price) : '';

                if (newCategory === 'Sharing' || parseInt(price) === 0) {
                    isSharing = true;
                    newCategory = 'Sharing';
                    price = '0';
                } else if (newCategory === 'Mission') {
                    isMission = true;
                    price = '0';
                }

                setIsFreeSharing(isSharing);
                setIsMissionDonation(isMission);

                setSellForm(prev => ({
                    ...prev,
                    title: data.title || prev.title,
                    category: newCategory,
                    price: price,
                    description: data.description || prev.description
                }));
            }
        } catch (error) {
            console.error("AI Analysis Error:", error);
            alert("AI 분석 실패");
        } finally {
            setIsAnalyzing(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20">
            {/* Header */}
            <header className="bg-white sticky top-0 z-30 shadow-sm">
                <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                    <h1 className="text-xl font-bold text-orange-500 tracking-tight">Orti Market</h1>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={handleSellClick}
                            className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow hover:bg-orange-600 transition-all flex items-center gap-1"
                        >
                            <Plus size={16} /> Sell
                        </button>
                        {!user ? (
                            <button onClick={() => setIsLoginModalOpen(true)} className="text-gray-500 hover:text-black">
                                <User size={24} />
                            </button>
                        ) : (
                            <Link to="/mypage">
                                <img src={user.profileImage} alt={user.name} className="w-8 h-8 rounded-full object-cover border border-gray-200" />
                            </Link>
                        )}
                    </div>
                </div>

                {/* Search Bar */}
                <div className="max-w-5xl mx-auto px-4 pb-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="우리 동네 중고 직거래"
                            className="w-full bg-gray-100 rounded-lg pl-10 pr-4 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-200"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Categories */}
                <div className="border-t border-gray-100 overflow-x-auto">
                    <div className="max-w-5xl mx-auto px-4 flex gap-6 py-3 whitespace-nowrap">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`text-sm font-medium transition-colors ${selectedCategory === cat ? 'text-orange-500' : 'text-gray-500 hover:text-black'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            {/* Item List */}
            <main className="max-w-5xl mx-auto px-4 py-6">
                {filteredItems.length === 0 ? (
                    <div className="text-center py-20 text-gray-400">
                        <p>No items found.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredItems.map(item => (
                            <motion.div
                                key={item.id}
                                layoutId={item.id}
                                onClick={() => setSelectedItem(item)}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                            >
                                <div className="aspect-[4/5] bg-gray-100 relative">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                    {item.status !== 'sale' && (
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                            <span className="text-white font-bold text-sm px-3 py-1 border border-white rounded-full">
                                                {item.status === 'reserved' ? 'Reserved' : 'Sold Out'}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h3 className="text-gray-900 font-medium text-base truncate mb-1">{item.title}</h3>
                                    <div className="text-gray-500 text-xs mb-2 flex items-center gap-1">
                                        <span className="truncate max-w-[80px]">{item.location}</span>
                                        <span>·</span>
                                        <span>{new Date(item.time).toLocaleDateString()}</span>
                                    </div>
                                    <div className="font-bold text-gray-900">
                                        {item.price === 0 ? '나눔 🧡' : `₱${item.price.toLocaleString()}`}
                                    </div>
                                    <div className="flex justify-between items-center mt-3 text-gray-400 text-xs">
                                        <div className="flex items-center gap-1">
                                            <Heart size={12} /> {item.likes}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </main>

            {/* Floating Action Button */}
            <button
                onClick={handleSellClick}
                className="fixed bottom-6 right-6 w-14 h-14 bg-orange-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-600 transition-colors z-40"
            >
                <Plus size={28} />
            </button>

            {/* Item Detail Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                        <div className="absolute inset-0" onClick={() => setSelectedItem(null)}></div>
                        <motion.div
                            layoutId={selectedItem.id}
                            className="bg-white w-full max-w-2xl max-h-[90vh] rounded-3xl overflow-hidden relative shadow-2xl flex flex-col md:flex-row"
                        >
                            <button onClick={() => setSelectedItem(null)} className="absolute top-4 right-4 z-10 bg-black/20 p-2 rounded-full text-white hover:bg-black/40"><X size={20} /></button>

                            {/* Visuals */}
                            <div className="md:w-1/2 bg-black h-64 md:h-auto relative">
                                <img src={selectedItem.image} className="w-full h-full object-cover" alt={selectedItem.title} />
                                {selectedItem.additionalImages?.length > 0 && (
                                    <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                                        + {selectedItem.additionalImages.length} more
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="md:w-1/2 p-6 flex flex-col h-full overflow-y-auto">
                                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                        <User className="text-gray-500" size={20} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm text-gray-900">{selectedItem.seller}</div>
                                        <div className="text-xs text-gray-500">Ortigas Center</div>
                                    </div>
                                    <div className="ml-auto text-right">
                                        <div className="text-sm font-bold text-emerald-500">{selectedItem.temperature}°C</div>
                                        <div className="text-[10px] text-gray-400 underline">Manner Temp</div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h2 className="text-xl font-bold mb-2">{selectedItem.title}</h2>
                                    <div className="text-gray-400 text-xs mb-4">{selectedItem.category} · {new Date(selectedItem.time).toLocaleString()}</div>
                                    <div className="text-base text-gray-700 whitespace-pre-wrap leading-relaxed">
                                        {selectedItem.description}
                                    </div>
                                </div>

                                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                                    <div className="font-bold text-xl">
                                        {selectedItem.price === 0 ? '나눔 🧡' : `₱${selectedItem.price.toLocaleString()}`}
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors">
                                            <Heart size={20} />
                                        </button>
                                        <button onClick={handleInternalChat} className="px-4 py-3 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors flex items-center gap-2">
                                            Chat Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Auth & Sell Modals (Simple) */}
            {isLoginModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center relative shadow-xl">
                        <button onClick={closeLoginModal} className="absolute top-4 right-4 text-gray-400 hover:text-black"><X size={20} /></button>
                        <h3 className="text-xl font-bold mb-2">Welcome to Orti Market</h3>
                        <p className="text-gray-500 text-sm mb-6">Join our community to start trading!</p>

                        {loginStep === 'init' ? (
                            <button onClick={handleStartGoogleLogin} className="w-full bg-blue-500 text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors">
                                Continue with Google
                            </button>
                        ) : (
                            <form onSubmit={handleFinalLogin} className="space-y-4">
                                <input
                                    type="text"
                                    className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="Enter your Kakao ID"
                                    value={kakaoIdInput}
                                    onChange={e => setKakaoIdInput(e.target.value)}
                                />
                                <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600">Complete Sign Up</button>
                            </form>
                        )}
                    </div>
                </div>
            )}

            {isSellModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white w-full max-w-lg rounded-2xl p-6 max-h-[90vh] overflow-y-auto relative">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold">Sell an Item</h3>
                            <button onClick={() => setIsSellModalOpen(false)}><X size={24} className="text-gray-500" /></button>
                        </div>

                        {/* Image Uploader */}
                        <div className="flex gap-4 overflow-x-auto pb-4 mb-6">
                            <div
                                onClick={() => fileInputRef.current?.click()}
                                className="w-20 h-20 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 cursor-pointer hover:border-orange-500 hover:text-orange-500 shrink-0"
                            >
                                {isUploading ? <Loader2 className="animate-spin" /> : <ImageIcon />}
                                <span className="text-xs mt-1">{(sellForm.image ? 1 : 0) + (sellForm.additionalImages?.length || 0)}/5</span>
                            </div>
                            {[sellForm.image, ...sellForm.additionalImages].filter(Boolean).map((img, idx) => (
                                <div key={idx} className="w-20 h-20 rounded-xl bg-gray-100 relative shrink-0 overflow-hidden">
                                    <img src={img} className="w-full h-full object-cover" />
                                    <button onClick={() => handleRemoveImage(idx)} className="absolute top-1 right-1 bg-black/50 text-white rounded-full p-1"><X size={12} /></button>
                                </div>
                            ))}
                        </div>
                        <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />

                        {/* AI Button */}
                        <button
                            onClick={handleAIAnalysis}
                            disabled={!sellForm.image || isAnalyzing}
                            className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 mb-6 transition-colors ${!sellForm.image || isAnalyzing ? 'bg-gray-100 text-gray-400' : 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:opacity-90'}`}
                        >
                            {isAnalyzing ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
                            {isAnalyzing ? 'Analyzing...' : 'Auto-fill with AI'}
                        </button>

                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Title"
                                className="w-full border-b border-gray-200 py-3 outline-none focus:border-orange-500 font-medium"
                                value={sellForm.title}
                                onChange={e => setSellForm({ ...sellForm, title: e.target.value })}
                            />
                            <div className="flex gap-2">
                                {['Sell', 'Share', 'Mission'].map(type => (
                                    <button
                                        key={type}
                                        type="button"
                                        onClick={() => {
                                            if (type === 'Sell') { setIsFreeSharing(false); setIsMissionDonation(false); }
                                            if (type === 'Share') { setIsFreeSharing(true); setIsMissionDonation(false); setSellForm(p => ({ ...p, price: '0' })); }
                                            if (type === 'Mission') { setIsFreeSharing(false); setIsMissionDonation(true); setSellForm(p => ({ ...p, price: '0' })); }
                                        }}
                                        className={`flex-1 py-2 rounded-lg text-sm font-medium border ${(type === 'Sell' && !isFreeSharing && !isMissionDonation) ||
                                            (type === 'Share' && isFreeSharing) ||
                                            (type === 'Mission' && isMissionDonation)
                                            ? 'bg-black text-white border-black' : 'border-gray-200 text-gray-500'
                                            }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                            <input
                                type="number"
                                placeholder="Price (PHP)"
                                className="w-full border-b border-gray-200 py-3 outline-none focus:border-orange-500 font-medium disabled:bg-gray-50"
                                value={sellForm.price}
                                onChange={e => setSellForm({ ...sellForm, price: e.target.value })}
                                disabled={isFreeSharing || isMissionDonation}
                            />
                            <select
                                className="w-full border-b border-gray-200 py-3 outline-none bg-transparent"
                                value={sellForm.category}
                                onChange={e => setSellForm({ ...sellForm, category: e.target.value })}
                            >
                                {sellCategories.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                            <textarea
                                placeholder="Description..."
                                className="w-full border border-gray-200 rounded-xl p-4 h-32 outline-none focus:border-orange-500 resize-none"
                                value={sellForm.description}
                                onChange={e => setSellForm({ ...sellForm, description: e.target.value })}
                            />
                            <button
                                onClick={handleSellSubmit}
                                disabled={isSubmitting}
                                className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-colors disabled:opacity-50"
                            >
                                {isSubmitting ? 'Posting...' : 'Post Item'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrtiCarrot;