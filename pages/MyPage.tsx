import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useCarrot } from '../context/CarrotContext';
import { Navigate, useLocation } from 'react-router-dom';
import { MessageSquare, Heart, X, Plus, Package, MessageCircle, ChevronRight, User } from 'lucide-react';

const MyPage: React.FC = () => {
    const { user } = useAuth();
    const { items, updateItemStatus, chatRooms, sendMessage, updateMessage, getChatRoom } = useCarrot();
    const [activeTab, setActiveTab] = useState<'sales' | 'chats' | 'likes'>('sales');

    const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
    const [messageInput, setMessageInput] = useState('');
    const [showActionMenu, setShowActionMenu] = useState(false);
    const [showOfferModal, setShowOfferModal] = useState(false);
    const [offerAmount, setOfferAmount] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const location = useLocation();

    useEffect(() => {
        if (location.state) {
            const state = location.state as { activeTab?: string; chatId?: string };
            if (state.activeTab === 'chats') {
                setActiveTab('chats');
            }
            if (state.chatId) {
                setSelectedChatId(state.chatId);
            }
        }
    }, [location]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [selectedChatId, chatRooms]);

    if (!user) {
        return <Navigate to="/orticarrot" replace />;
    }

    const myItems = items.filter(item => item.seller === user.name);
    const myChats = chatRooms.filter(chat => chat.buyerId === user.id || chat.sellerId === user.name);

    const handleStatusChange = (itemId: string, newStatus: 'sale' | 'reserved' | 'sold') => {
        updateItemStatus(itemId, newStatus);
    };

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedChatId && messageInput.trim()) {
            sendMessage(selectedChatId, messageInput);
            setMessageInput('');
        }
    };

    const selectedChat = selectedChatId ? getChatRoom(selectedChatId) : null;
    const currentItem = selectedChat ? items.find(i => i.id === selectedChat.itemId) : null;
    const isSeller = selectedChat && user.name === selectedChat.sellerId;

    // Handlers
    const handleSendOffer = () => {
        if (!selectedChatId || !offerAmount) return;
        sendMessage(selectedChatId, `Offer: ₱${parseInt(offerAmount).toLocaleString()}`, 'offer', {
            offerAmount: parseInt(offerAmount),
            offerStatus: 'pending'
        });
        setOfferAmount('');
        setShowOfferModal(false);
        setShowActionMenu(false);
    };

    const handleAcceptOffer = (messageId: string, amount: number) => {
        if (!selectedChatId) return;
        updateMessage(selectedChatId, messageId, { offerStatus: 'accepted' });
        sendMessage(selectedChatId, `Offer accepted for ₱${amount.toLocaleString()}`, 'system');
    };

    const handleDeclineOffer = (messageId: string) => {
        if (!selectedChatId) return;
        updateMessage(selectedChatId, messageId, { offerStatus: 'declined' });
    };

    const handleConfirmTransaction = () => {
        if (!selectedChatId || !currentItem) return;
        if (confirm(`Mark as SOLD to ${selectedChat?.buyerName}?`)) {
            updateItemStatus(currentItem.id, 'sold', selectedChat?.buyerId);
            sendMessage(selectedChatId, `Transaction Confirmed.`, 'system');
        }
    };

    return (
        <div className="min-h-screen bg-[#F2F2F7] pt-20 pb-12 font-sans md:px-6">
            <div className="max-w-6xl mx-auto h-[85vh] flex flex-col md:flex-row gap-6">

                {/* Sidebar (Settings Style) */}
                <div className="w-full md:w-80 flex flex-col gap-6">
                    {/* Profile Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                            <img src={user.profileImage} alt={user.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-[#1d1d1f]">{user.name}</h2>
                            <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                    </div>

                    {/* Navigation List */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                        <button
                            onClick={() => setActiveTab('sales')}
                            className={`w-full flex items-center justify-between p-4 border-b border-gray-100 transition-colors ${activeTab === 'sales' ? 'bg-blue-50/50' : 'hover:bg-gray-50'}`}
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-100 text-[#0071E3] rounded-lg"><Package size={20} /></div>
                                <span className="font-medium text-[#1d1d1f]">My Listings</span>
                            </div>
                            <span className="text-gray-400 font-medium">{myItems.length}</span>
                        </button>
                        <button
                            onClick={() => { setActiveTab('chats'); setSelectedChatId(null); }}
                            className={`w-full flex items-center justify-between p-4 border-b border-gray-100 transition-colors ${activeTab === 'chats' ? 'bg-blue-50/50' : 'hover:bg-gray-50'}`}
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-100 text-green-600 rounded-lg"><MessageCircle size={20} /></div>
                                <span className="font-medium text-[#1d1d1f]">Messages</span>
                            </div>
                            <span className="text-gray-400 font-medium">{myChats.length}</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('likes')}
                            className={`w-full flex items-center justify-between p-4 transition-colors ${activeTab === 'likes' ? 'bg-blue-50/50' : 'hover:bg-gray-50'}`}
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-red-100 text-red-500 rounded-lg"><Heart size={20} /></div>
                                <span className="font-medium text-[#1d1d1f]">Wishlist</span>
                            </div>
                            <ChevronRight size={16} className="text-gray-300" />
                        </button>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 bg-white md:rounded-2xl shadow-sm overflow-hidden flex flex-col h-full rounded-t-2xl">

                    {/* === MY SALES === */}
                    {activeTab === 'sales' && (
                        <div className="h-full overflow-y-auto p-6">
                            <h2 className="text-2xl font-bold mb-6 text-[#1d1d1f]">Current Listings</h2>
                            {myItems.length === 0 ? (
                                <div className="text-center py-20 text-gray-400">No listings yet.</div>
                            ) : (
                                <div className="space-y-4">
                                    {myItems.map(item => (
                                        <div key={item.id} className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#0071E3]/30 transition-colors">
                                            <img src={item.image} alt={item.title} className="w-24 h-24 rounded-lg object-cover bg-gray-100" />
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start mb-1">
                                                    <span className="text-xs font-semibold uppercase text-gray-500">{item.category}</span>
                                                    <span className={`text-xs px-2 py-0.5 rounded-md font-medium ${item.status === 'sale' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                                                        {item.status === 'sale' ? 'Active' : item.status}
                                                    </span>
                                                </div>
                                                <h3 className="font-medium text-lg text-[#1d1d1f] mb-1">{item.title}</h3>
                                                <p className="font-semibold text-[#1d1d1f] mb-4">{item.price === 0 ? 'Free' : `₱${item.price.toLocaleString()}`}</p>

                                                <div className="flex gap-2">
                                                    <button onClick={() => handleStatusChange(item.id, 'sale')} className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg font-medium text-[#1d1d1f]">Active</button>
                                                    <button onClick={() => handleStatusChange(item.id, 'reserved')} className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg font-medium text-[#1d1d1f]">Reserved</button>
                                                    <button onClick={() => handleStatusChange(item.id, 'sold')} className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg font-medium text-[#1d1d1f]">Sold</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* === CHATS === */}
                    {activeTab === 'chats' && (
                        <div className="h-full flex overflow-hidden">
                            {/* Chat List */}
                            <div className={`${selectedChatId ? 'hidden md:block' : 'block'} w-full md:w-80 border-r border-gray-100 h-full overflow-y-auto`}>
                                <div className="p-4 border-b border-gray-100 font-bold text-lg sticky top-0 bg-white z-10">Messages</div>
                                {myChats.map(chat => (
                                    <div
                                        key={chat.id}
                                        onClick={() => setSelectedChatId(chat.id)}
                                        className={`p-4 border-b border-gray-50 cursor-pointer hover:bg-gray-50 transition-colors ${selectedChatId === chat.id ? 'bg-blue-50' : ''}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <img src={chat.itemImage} className="w-12 h-12 rounded-full object-cover bg-gray-200" />
                                            <div className="overflow-hidden">
                                                <div className="font-semibold text-sm text-[#1d1d1f] truncate">{user.id === chat.buyerId ? chat.sellerId : chat.buyerName}</div>
                                                <div className="text-xs text-gray-500 truncate">{chat.lastMessage}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Chat View (iMessage style) */}
                            <div className={`${!selectedChatId ? 'hidden md:flex' : 'flex'} flex-1 flex-col h-full bg-white`}>
                                {selectedChat ? (
                                    <>
                                        <div className="p-3 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-sm z-10">
                                            <button onClick={() => setSelectedChatId(null)} className="md:hidden text-[#0071E3] font-medium mr-2">Back</button>
                                            <div className="flex items-center gap-3">
                                                <img src={selectedChat.itemImage} className="w-8 h-8 rounded-md object-cover bg-gray-200" />
                                                <div>
                                                    <div className="text-xs font-semibold text-gray-500">{selectedChat.itemTitle}</div>
                                                    <div className="text-sm font-bold text-[#1d1d1f]">₱{selectedChat.itemPrice.toLocaleString()}</div>
                                                </div>
                                            </div>
                                            {isSeller && currentItem?.status !== 'sold' && (
                                                <button onClick={handleConfirmTransaction} className="text-xs bg-black text-white px-3 py-1.5 rounded-full font-medium">Mark Sold</button>
                                            )}
                                        </div>

                                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                            {selectedChat.messages.map(msg => {
                                                const isMe = msg.senderId === user.id;
                                                if (msg.type === 'system') return <div key={msg.id} className="text-center text-xs text-gray-400 my-2">{msg.text}</div>;

                                                return (
                                                    <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                                                        <div className={`max-w-[75%] px-4 py-2 rounded-2xl text-[15px] leading-snug ${isMe ? 'bg-[#0071E3] text-white rounded-br-none' : 'bg-[#E5E5EA] text-[#1d1d1f] rounded-bl-none'
                                                            }`}>
                                                            {msg.type === 'offer' && <div className="text-xs font-bold uppercase opacity-80 mb-1">Offer: ₱{msg.offerAmount}</div>}
                                                            {msg.text}
                                                            {msg.type === 'offer' && !isMe && isSeller && msg.offerStatus === 'pending' && (
                                                                <div className="mt-2 pt-2 border-t border-gray-300 flex gap-2">
                                                                    <button onClick={() => handleAcceptOffer(msg.id, msg.offerAmount!)} className="text-xs font-bold">Accept</button>
                                                                    <button onClick={() => handleDeclineOffer(msg.id)} className="text-xs opacity-50">Decline</button>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                            <div ref={messagesEndRef} />
                                        </div>

                                        <div className="p-4 border-t border-gray-100 bg-white">
                                            {showActionMenu && (
                                                <div className="absolute bottom-16 left-4 bg-white shadow-xl rounded-xl border border-gray-100 p-2 flex flex-col min-w-[140px]">
                                                    <button onClick={() => setShowOfferModal(true)} className="p-2 text-left hover:bg-gray-50 rounded-lg text-sm">Make Offer</button>
                                                </div>
                                            )}

                                            {showOfferModal && (
                                                <div className="mb-4 flex gap-2 bg-gray-50 p-2 rounded-xl">
                                                    <input type="number" autoFocus placeholder="Amount" className="flex-1 bg-transparent px-2 outline-none" value={offerAmount} onChange={e => setOfferAmount(e.target.value)} />
                                                    <button onClick={handleSendOffer} className="text-[#0071E3] font-semibold px-2">Send</button>
                                                    <button onClick={() => setShowOfferModal(false)}><X size={16} /></button>
                                                </div>
                                            )}

                                            <form onSubmit={handleSendMessage} className="flex gap-2 items-center">
                                                <button type="button" onClick={() => setShowActionMenu(!showActionMenu)} className="text-gray-400 hover:text-[#0071E3]"><Plus size={24} /></button>
                                                <input
                                                    type="text"
                                                    className="flex-1 bg-white border border-gray-300 rounded-full px-4 py-2 focus:border-[#0071E3] focus:outline-none"
                                                    placeholder="iMessage"
                                                    value={messageInput}
                                                    onChange={e => setMessageInput(e.target.value)}
                                                />
                                                <button type="submit" disabled={!messageInput.trim()} className="w-8 h-8 bg-[#0071E3] rounded-full flex items-center justify-center text-white disabled:bg-gray-300"><MessageSquare size={14} fill="currentColor" /></button>
                                            </form>
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex-1 flex flex-col items-center justify-center text-gray-300">
                                        <MessageCircle className="w-16 h-16 mb-4 opacity-20" />
                                        <p>Select a conversation</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === 'likes' && (
                        <div className="flex-1 flex items-center justify-center text-gray-400">
                            Coming Soon
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default MyPage;