import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Star, ShieldCheck, Clock, Users, Calendar, ArrowRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const GolfTour: React.FC = () => {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1d1d1f]">
            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
                <div className="max-w-[1024px] mx-auto px-6 h-16 flex items-center justify-between">
                    <Link to="/living" className="flex items-center gap-1 text-gray-600 hover:text-black transition-colors">
                        <ChevronLeft className="w-5 h-5" />
                        <span className="font-medium">Back to Living Info</span>
                    </Link>
                    <span className="font-bold text-lg">Alex Lee Tour</span>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative pt-32 pb-16 px-6 overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
                <div className="max-w-[1024px] mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wide mb-6">
                            PREMIUM RENT & TOUR
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                            가족과 함께하는<br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
                                가장 완벽한 여행
                            </span>
                        </h1>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                            최신형 스타리아와 한국인 기사님의 안전한 운행.<br className="hidden md:block" />
                            골프 투어부터 공항 픽업까지, VIP 서비스를 경험해보세요.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://open.kakao.com/o/s..." target="_blank" rel="noreferrer" className="bg-[#FAE100] text-[#371D1E] px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                <MessageCircle className="w-6 h-6 fill-current" /> 카카오톡 예약하기
                            </a>
                            <a href="tel:09176801238" className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                <Phone className="w-5 h-5" /> 0917-680-1238
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Image Area - User requested Staria photo */}
                <div className="max-w-[1024px] mx-auto mt-16 relative">
                    <div className="aspect-video bg-gray-100 rounded-3xl overflow-hidden shadow-2xl relative">
                        {/* Placeholder for Staria Image - will replace with real asset */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                            <img src="/assets/nanobanana_staria_tour_family.png" alt="Staria Tour" className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.src = "https://images.unsplash.com/photo-1599905273760-705b76ec528a?q=80&w=2000&auto=format&fit=crop"; // Fallback
                                }}
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8 md:p-12">
                            <div className="text-white">
                                <p className="font-bold text-lg mb-1">Hyundai Staria 2024</p>
                                <p className="text-white/80 text-sm">최상의 안락함을 제공하는 프리미엄 미니밴</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trust Indicators */}
            <div className="py-16 bg-white border-y border-gray-100">
                <div className="max-w-[1024px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 rounded-2xl bg-gray-50">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">100% 한국인 기사</h3>
                            <p className="text-gray-500 text-sm">의사소통 걱정 NO!<br />현지 꿀팁까지 전해드립니다.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-gray-50">
                            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">최신형 차량 & 안전</h3>
                            <p className="text-gray-500 text-sm">정기 점검된 최신 스타리아로<br />안전하게 모십니다.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-gray-50">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Star className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">프리미엄 투어</h3>
                            <p className="text-gray-500 text-sm">뻔한 관광이 아닌<br />고객 맞춤형 VIP 투어</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="py-24 px-6 bg-[#F5F5F7]">
                <div className="max-w-[1024px] mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">제공 서비스 안내</h2>

                    <div className="space-y-8">
                        {/* Service 1: Airport */}
                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-16">
                            <div className="flex-1 space-y-4">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 rounded-lg bg-orange-100 text-orange-600"><Clock className="w-5 h-5" /></div>
                                    <h3 className="text-2xl font-bold">공항 픽업 & 샌딩</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    복잡한 마닐라 공항에서도 편안하게.<br />
                                    약속된 시간에 정확히 도착하여 짐 운반부터 숙소 이동까지 책임집니다.
                                </p>
                                <ul className="space-y-2 pt-2">
                                    <li className="flex justify-between items-center border-b border-dashed border-gray-200 pb-2">
                                        <span className="font-medium text-gray-800">공항 픽업 (Pick-up)</span>
                                        <span className="font-bold text-emerald-600">4,900 PHP ~</span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-dashed border-gray-200 pb-2">
                                        <span className="font-medium text-gray-800">공항 샌딩 (Sending)</span>
                                        <span className="font-bold text-emerald-600">3,900 PHP ~</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/3 aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1000&auto=format&fit=crop" alt="Airport" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Service 2: Golf */}
                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
                            <div className="flex-1 space-y-4">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 rounded-lg bg-green-100 text-green-600"><span className="text-xl">⛳️</span></div>
                                    <h3 className="text-2xl font-bold">VIP 골프 투어</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    골프 백 수납에 최적화된 넓은 트렁크 공간.<br />
                                    단순 이동을 넘어 <strong>'골프 투어 전문가'</strong>의 원포인트 레슨 서비스까지 제공합니다.
                                </p>
                                <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                                    <h4 className="font-bold text-green-800 mb-1 flex items-center gap-2">⭐ GOLF SPECIAL</h4>
                                    <p className="text-sm text-green-700">픽업 & 드랍은 기본, 4인 기준 레슨 서비스 포함!</p>
                                    <p className="text-xs text-green-600 mt-1">* 레인지 레슨 별도 문의</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=1000&auto=format&fit=crop" alt="Golf" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Service 3: City Tour */}
                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-16">
                            <div className="flex-1 space-y-4">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 rounded-lg bg-blue-100 text-blue-600"><MapPin className="w-5 h-5" /></div>
                                    <h3 className="text-2xl font-bold">마닐라 근교 자유 여행</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    따가이따이, 팍상한 폭포, 히든 밸리 등 마닐라 근교의 명소들을<br />
                                    원하는 일정대로 자유롭게 여행하세요.
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {['따가이따이', '팍상한', '인트라무로스', '히든밸리', '바탕가스'].map(spot => (
                                        <span key={spot} className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600"># {spot}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1000&auto=format&fit=crop" alt="Tour" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA / Footer */}
            <div className="py-24 bg-gray-900 text-white text-center px-6">
                <h2 className="text-3xl font-bold mb-6">편안한 여행, 지금 예약하세요</h2>
                <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                    비교할 수 없는 쾌적함과 친절함으로 모시겠습니다.<br />
                    일정 문의 및 견적 상담은 언제든 환영합니다.
                </p>

                <div className="bg-white/10 rounded-2xl max-w-md mx-auto p-8 backdrop-blur-sm border border-white/10">
                    <h3 className="text-xl font-bold text-[#FAE100] mb-6">Reservation & Contact</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                            <span className="text-gray-300">KakaoTalk</span>
                            <span className="font-bold text-lg select-all">alexleepro83</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                            <span className="text-gray-300">Mobile</span>
                            <span className="font-bold text-lg select-all">0917-680-1238</span>
                        </div>
                    </div>

                    <a href="https://open.kakao.com/o/s..." className="mt-8 w-full bg-[#FAE100] text-[#371D1E] py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#ffe600] transition-colors">
                        상담 연결하기 <ArrowRight className="w-5 h-5" />
                    </a>
                </div>

                <p className="mt-12 text-sm text-gray-500">
                    Alex Lee Luxury Staria Rent & Tour @ Philippines
                </p>
            </div>
        </div>
    );
};

export default GolfTour;
