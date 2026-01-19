import React, { useState, useEffect, useMemo } from 'react';
import { Home, ShoppingBag, Utensils, Wifi, MapPin, Dumbbell, HeartPulse, Church, Star, Download, Carrot, Search, Sparkles, Megaphone } from 'lucide-react';
import { LivingInfoItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import OrtigasMap from '../components/OrtigasMap';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LivingInfo: React.FC = () => {
  const { content } = useLanguage();
  const { living } = content;
  const [activeTab, setActiveTab] = useState<'all' | 'rent' | 'food' | 'grocery' | 'shopping' | 'mobile' | 'activity' | 'medical' | 'church' | 'korean_church'>('all');
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  const filteredItems = activeTab === 'all'
    ? living.items
    : living.items.filter(item => item.category === activeTab);

  return (
    <div className="bg-[#F5F5F7] min-h-screen pt-24 pb-24 font-sans text-[#1d1d1f]">
      <div className="max-w-[1024px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold tracking-tight mb-4">{living.title}</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium mb-8">
            {living.subtitle}
          </p>

          {/* Ad Banner Carousel (5 Items) */}
          <AdBannerCarousel items={living.items} />
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          {/* Categories - Colorful Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide max-w-full">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap shadow-sm ${activeTab === 'all' ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}`}
            >
              ✨ All
            </button>
            {living.tabs.map(tab => {
              const tabColors: Record<string, { active: string, icon: string }> = {
                rent: { active: 'bg-gradient-to-r from-blue-500 to-blue-600', icon: '🏠' },
                food: { active: 'bg-gradient-to-r from-orange-400 to-red-500', icon: '🍽️' },
                grocery: { active: 'bg-gradient-to-r from-green-500 to-emerald-600', icon: '🥬' },
                shopping: { active: 'bg-gradient-to-r from-pink-500 to-rose-500', icon: '🛍️' },
                mobile: { active: 'bg-gradient-to-r from-violet-500 to-purple-600', icon: '📱' },
                activity: { active: 'bg-gradient-to-r from-cyan-500 to-teal-500', icon: '🎯' },
                medical: { active: 'bg-gradient-to-r from-red-500 to-rose-600', icon: '🏥' },
                church: { active: 'bg-gradient-to-r from-amber-500 to-yellow-500', icon: '⛪' },
                korean_church: { active: 'bg-gradient-to-r from-indigo-500 to-blue-600', icon: '🇰🇷' },
                golf_tour: { active: 'bg-gradient-to-r from-emerald-500 to-green-600', icon: '⛳' }
              };
              const colors = tabColors[tab.id] || { active: 'bg-gradient-to-r from-gray-600 to-gray-700', icon: '📌' };

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap shadow-sm flex items-center gap-1.5 ${activeTab === tab.id ? `${colors.active} text-white shadow-lg scale-105` : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'}`}
                >
                  <span>{colors.icon}</span>
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* View Toggle */}
          <div className="bg-[#E5E5EA] p-1 rounded-lg flex shrink-0">
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-1 text-xs font-semibold rounded-md transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-gray-700'}`}
            >
              List
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`px-4 py-1 text-xs font-semibold rounded-md transition-all ${viewMode === 'map' ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Map
            </button>
          </div>
        </div>

        {/* Content */}
        {viewMode === 'list' ? (
          <div className="space-y-8">
            {/* Emergency Banner */}
            {activeTab === 'medical' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#FF3B30] rounded-3xl p-8 text-white shadow-lg overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">Emergency Contacts</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <EmergencyContact number="911" label="National Emergency" />
                    <EmergencyContact number="8643-0000" label="Pasig Rescue" />
                    <EmergencyContact number="02-8635-6789" label="Medical City ER" />
                    <EmergencyContact number="0917-817-5703" label="Korean Embassy" />
                  </div>
                </div>
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <InfoCard key={index} item={item} />
              ))}
            </div>

            {/* Apps Grid */}
            <div className="mt-16 pt-16 border-t border-gray-200">
              <h3 className="text-2xl font-bold mb-8 text-center">필수 설치 앱 (Essential Apps)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    name: "Grab (그랩)",
                    desc: "필리핀 생활의 필수품. 안전한 택시 호출(GrabCar)부터 음식 배달(GrabFood), 장보기(GrabMart)까지 하나로 해결됩니다.",
                    link: "https://www.grab.com/ph/download/",
                    color: "bg-[#00B14F]"
                  },
                  {
                    name: "GCash (지캐시)",
                    desc: "필리핀판 카카오페이. 편의점, 쇼핑몰, 식당 등 어디서나 QR로 간편 결제할 수 있으며 송금도 수수료 없이 무료입니다.",
                    link: "https://www.gcash.com/",
                    color: "bg-[#007DFE]"
                  },
                  {
                    name: "Google Maps (구글맵)",
                    desc: "마닐라의 복잡한 교통 상황을 실시간으로 확인하고, 가장 빠른 경로와 주변 맛집 정보를 찾아보세요.",
                    link: "https://www.google.com/maps",
                    color: "bg-[#EA4335]"
                  },
                  {
                    name: "Papago (파파고)",
                    desc: "네이버가 만든 AI 통번역기. 현지인과의 소통이 막막할 때 음성 대화 기능과 이미지 번역을 활용해보세요.",
                    link: "https://papago.naver.com/",
                    color: "bg-[#00C73C]"
                  },
                  {
                    name: "Lazada (라자다)",
                    desc: "필리핀 최대 온라인 쇼핑몰. 무거운 생수, 휴지 등 생필품을 저렴하게 구매하여 숙소 로비까지 배달 받으세요.",
                    link: "https://www.lazada.com.ph/",
                    color: "bg-[#0f146d]"
                  },
                  {
                    name: "Foodpanda (푸드판다)",
                    desc: "그랩보다 배달비가 저렴하고 프로모션이 많은 배달 앱입니다. 간단한 간식이나 야식을 주문할 때 유용합니다.",
                    link: "https://www.foodpanda.ph/",
                    color: "bg-[#D70F64]"
                  }
                ].map((app, i) => (
                  <a
                    key={i}
                    href={app.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
                  >
                    <div className={`w-12 h-12 rounded-xl shrink-0 flex items-center justify-center text-white font-bold text-lg shadow-sm ${app.color}`}>
                      {app.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                        {app.name.split('(')[0]}
                        <span className="text-xs font-normal text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded-md border border-gray-100">Download</span>
                      </h4>
                      <p className="text-sm text-gray-500 mt-1.5 leading-snug break-keep">{app.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-sm overflow-hidden h-[600px] border border-gray-200">
            <OrtigasMap items={filteredItems} activeCategory={activeTab} />
          </div>
        )}
      </div>
    </div>
  );
};

const InfoCard: React.FC<{ item: LivingInfoItem }> = ({ item }) => {
  // Category-specific colors
  const categoryStyles: Record<string, { bg: string, text: string, border: string, icon: string }> = {
    rent: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-l-blue-500', icon: '🏠' },
    food: { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-l-orange-500', icon: '🍽️' },
    grocery: { bg: 'bg-green-100', text: 'text-green-700', border: 'border-l-green-500', icon: '🥬' },
    shopping: { bg: 'bg-pink-100', text: 'text-pink-700', border: 'border-l-pink-500', icon: '🛍️' },
    mobile: { bg: 'bg-violet-100', text: 'text-violet-700', border: 'border-l-violet-500', icon: '📱' },
    activity: { bg: 'bg-cyan-100', text: 'text-cyan-700', border: 'border-l-cyan-500', icon: '🎯' },
    medical: { bg: 'bg-red-100', text: 'text-red-700', border: 'border-l-red-500', icon: '🏥' },
    church: { bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-l-amber-500', icon: '⛪' },
    korean_church: { bg: 'bg-indigo-100', text: 'text-indigo-700', border: 'border-l-indigo-500', icon: '🇰🇷' },
    golf_tour: { bg: 'bg-emerald-100', text: 'text-emerald-800', border: 'border-l-emerald-600', icon: '⛳' }
  };

  const style = categoryStyles[item.category] || { bg: 'bg-gray-100', text: 'text-gray-600', border: 'border-l-gray-400', icon: '📌' };

  /* 
   * SIMPLIFIED LOGIC:
   * InfoCard simply checks if the link starts with '#' or '/' to decide target.
   * Internal links (HashRouter) should use target="_self".
   */
  const navigate = useNavigate();
  // Check for both hash-style internal links and absolute path internal links
  const isInternal = item.link && (item.link.startsWith('/') || item.link.startsWith('#'));

  const handleClick = (e: React.MouseEvent) => {
    if (isInternal) {
      e.preventDefault();
      // Remove hash if present to get the clean path for navigate
      const cleanPath = item.link!.replace(/^#/, '');
      navigate(cleanPath);
    }
  };

  return (
    <motion.a
      href={item.link}
      target={isInternal ? "_self" : "_blank"}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all cursor-pointer flex flex-col h-full border border-gray-100 border-l-4 ${style.border}`}
    >
      <div className="flex justify-between items-start mb-4">
        <span className={`text-[10px] uppercase font-bold tracking-wide px-2.5 py-1 rounded-full flex items-center gap-1 ${style.bg} ${style.text}`}>
          <span>{style.icon}</span>
          {item.category.replace('_', ' ')}
        </span>
        {(item.rating || item.priceLevel) && (
          <div className="flex items-center gap-2">
            {item.priceLevel && <span className="text-xs text-gray-400 font-medium">{"$".repeat(item.priceLevel)}</span>}
            {item.rating && (
              <div className="flex items-center gap-0.5 bg-yellow-400/20 px-2 py-0.5 rounded-full text-yellow-600 text-xs font-bold">
                <Star className="w-3 h-3 fill-current" /> {item.rating}
              </div>
            )}
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold text-[#1d1d1f] mb-2 leading-tight">{item.title}</h3>

      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-auto max-h-40 object-cover rounded-xl mb-4 border border-gray-100"
        />
      )}

      {item.location && (
        <div className="flex items-start gap-1.5 text-xs text-gray-500 font-medium mb-4">
          <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-gray-400" />
          <span className="line-clamp-1">{item.location}</span>
        </div>
      )}

      <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
        {item.description}
      </p>

      {item.details && (
        <div className={`space-y-1.5 pt-4 border-t ${style.bg}/30 -mx-6 -mb-6 p-4 rounded-b-3xl`}>
          {item.details.slice(0, 3).map((detail, i) => (
            <div key={i} className="text-xs text-gray-600 truncate flex items-start gap-1.5">
              <span className={`${style.text} font-bold`}>•</span>
              <span>{typeof detail === 'object' ? detail.text : detail}</span>
            </div>
          ))}
        </div>
      )}
    </motion.a>
  );
};

const EmergencyContact: React.FC<{ number: string, label: string }> = ({ number, label }) => (
  <a href={`tel:${number}`} className="block bg-white/10 rounded-2xl p-4 hover:bg-white/20 transition-colors text-center backdrop-blur-sm">
    <div className="text-xl font-bold mb-1">{number}</div>
    <div className="text-xs opacity-70 font-medium uppercase tracking-wide">{label}</div>
  </a>
)

const AdBannerCarousel: React.FC<{ items: LivingInfoItem[] }> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Logic to select 5 unique items based on the date
  const today = new Date();
  const dateSeed = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  // Simple hash function
  const getHash = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  };

  const seed = getHash(dateSeed);

  // Select 5 distinct items using the seed
  // We'll create a shuffled copy of indices then pick first 5
  // Note: For a truly stable daily shuffle without full re-render issues, use memoization usually,
  // but here inside component is fine if we assume seed doesn't change.
  const selectedItems = useMemo(() => {
    const shuffled = [...items].sort((a, b) => {
      // Consistent random sort based on seed and item content properties
      return (getHash(dateSeed + a.title) % 100) - (getHash(dateSeed + b.title) % 100);
    });
    return shuffled.slice(0, 5);
  }, [items, dateSeed]);


  // Auto-play effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % selectedItems.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(timer);
  }, [selectedItems.length]);

  if (selectedItems.length === 0) return null;

  const currentItem = selectedItems[currentIndex];

  return (
    <div className="max-w-3xl mx-auto mt-8 relative group">
      {/* Banner Container */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[3px]">
        {/* Floating Badge */}
        <div className="absolute top-0 left-0 z-20 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-br-xl shadow-sm">
          SPONSORED AD
        </div>

        <div className="bg-white rounded-xl overflow-hidden relative h-[100px]">
          <AnimatePresence mode='wait'>
            <motion.a
              key={currentIndex}
              href={currentItem.link}
              target="_blank"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-5 p-4 h-full w-full cursor-pointer hover:bg-gray-50 transition-colors"
            >
              {/* Icon/Image Area */}
              <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 text-3xl shadow-sm overflow-hidden">
                {currentItem.image ? (
                  <img src={currentItem.image} alt="" className="w-full h-full object-cover" />
                ) : (
                  <span>
                    {currentItem.category === 'food' ? '🍔' :
                      currentItem.category === 'shopping' ? '🛍️' :
                        currentItem.category === 'mobile' ? '📱' :
                          currentItem.category === 'rent' ? '🏠' :
                            currentItem.category === 'activity' ? '🎡' :
                              currentItem.category === 'medical' ? '🏥' :
                                currentItem.category === 'golf_tour' ? '⛳' : '💡'}
                  </span>
                )}
              </div>

              {/* Text Area */}
              <div className="text-left flex-grow min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 border border-gray-200 px-1.5 py-0.5 rounded">
                    {currentIndex + 1}/5
                  </span>
                  <h3 className="font-bold text-lg text-gray-900 truncate">
                    {currentItem.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-500 line-clamp-1">
                  {currentItem.description}
                </p>
              </div>

              {/* CTA Button */}
              <div className="shrink-0 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600">
                <Megaphone className="w-5 h-5" />
              </div>
            </motion.a>
          </AnimatePresence>
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-3">
        {selectedItems.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-gray-800 w-6' : 'bg-gray-300 hover:bg-gray-400'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default LivingInfo;