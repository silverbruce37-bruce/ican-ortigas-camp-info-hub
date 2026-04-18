
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { COMMUNITY_DATA } from '../constants_community';
import { Users, Store, Heart, MessageCircle, ArrowRight, BookOpen, Compass, Map, ExternalLink, Rocket, Database, Cpu, TrendingUp, Newspaper, Globe } from 'lucide-react';
import OrtiCarrot from './OrtiCarrot';
import { motion, AnimatePresence } from 'framer-motion';

// --- World Smile & Help Components ---
// (WorldSmilePost component remains unchanged)
const WorldSmilePost = ({ onBack }: { onBack: () => void }) => {
    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 animate-fade-in">
            {/* Hero Image */}
            <div className="relative h-64 md:h-96 bg-gray-200">
                <img
                    src="/assets/worldsmile/youth_support.jpg"
                    alt="World Smile Charity"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-8 text-white">
                        <div className="bg-orange-500 text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">Partner NGO</div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-2">월드스마일 (World Smile)</h2>
                        <p className="text-lg md:text-xl opacity-90">청소년들의 꿈을 응원하고 소외된 이웃에게 희망을 전합니다.</p>
                    </div>
                </div>
                <button
                    onClick={onBack}
                    className="absolute top-6 left-6 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-bold transition-all"
                >
                    ← Back to List
                </button>
            </div>

            {/* Content Content - (Existing World Smile Content) */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Main Text */}
                    <div className="md:w-2/3 space-y-10">
                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-orange-500">01.</span> 청소년 꿈 지원 프로젝트
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                세상에는 수많은 꿈이 있습니다. 어떤 꿈은 아직 희미한 불빛 같지만, 누군가의 따뜻한 손길이 더해지면 밝게 빛나게 됩니다.
                                월드스마일은 <strong>"작은 도움 하나가 한 아이의 미래를 바꿀 수 있다"</strong>는 믿음으로, 꿈을 가진 청소년들에게 장학금과 재능 교육(미술, 예술 등)을 지원합니다.
                            </p>
                            <div className="mt-6 rounded-2xl overflow-hidden relative h-64 group">
                                <img src="/assets/worldsmile/art_dream.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Youth Art" />
                                <div className="absolute bottom-4 right-4 bg-white/90 text-xs font-bold px-3 py-1 rounded-full text-gray-800 shadow-sm">
                                    꿈을 그리는 아이들
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-orange-500">02.</span> 홀로 어르신 지원 캠페인
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                혼자 식사를 해결해야 하는 어르신들에게 도시락은 단순한 한 끼가 아닙니다.
                                <strong>"누군가 나를 기억하고 챙겨주고 있구나"</strong>라는 따뜻한 위로입니다.
                                매주 토요일, 월드스마일 봉사자들은 정성 담긴 반찬을 들고 골목길 계단을 오릅니다.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <img src="/assets/worldsmile/elderly_care.jpg" className="rounded-xl h-40 w-full object-cover" alt="Elderly Care" />
                                <img src="/assets/worldsmile/childrens_day.jpg" className="rounded-xl h-40 w-full object-cover" alt="Food Charity" />
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-orange-500">03.</span> 어린이날 선물 & 결식아동 지원
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                모든 어린이는 사랑받을 자격이 있습니다. 어린이날 선물 박스 전달과 국내 결식아동 지원을 통해 아이들의 입가에 미소를 선물합니다.
                            </p>
                        </section>

                        <section className="bg-orange-50/50 p-8 rounded-3xl border border-orange-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 border-b border-orange-200 pb-2">
                                📢 대표 인사말
                            </h3>
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-1/3">
                                    <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-sm relative group">
                                        <img
                                            src="/assets/worldsmile/ceo_message.jpg"
                                            alt="대표 윤영희"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                                            <p className="font-bold text-sm">대표 윤영희</p>
                                            <p className="text-xs opacity-80">2025년 5월</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-2/3 space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
                                    <p className="font-medium text-orange-600">"미소로 가득한 세상을 향한 희망찬 첫걸음"</p>
                                    <p>
                                        안녕하세요? 항상 따뜻한 마음으로 저희와 함께해 주신 후원자님께 진심으로 감사의 인사를 전합니다.
                                        후원자님의 소중한 사랑과 관심 덕분에 복지 사각지대에 놓인 가정의 아동과 청소년들이 희망을 품고 꿈을 향해 나아갈 수 있었습니다.
                                    </p>
                                    <p>
                                        한 해 동안 후원자님께서 보내주신 따뜻한 사랑과 응원의 힘으로 아이들은 학업을 이어가고, 다양한 경험을 하며 밝은 미래를 꿈꿀 수 있었습니다.
                                    </p>
                                    <div className="bg-white p-4 rounded-xl border-l-4 border-orange-400 italic text-gray-600 my-2 shadow-sm">
                                        "후원자님 덕분에 더 이상 혼자가 아니라는 것을 알게 되었어요. 저도 누군가를 돕는 사람이 되고 싶어요."
                                    </div>
                                    <p>
                                        이 모든 것이 후원자님의 사랑과 나눔이 있었기에 가능했습니다.
                                        앞으로도 우리 아이들이 더 나은 미래를 향해 나아갈 수 있도록 함께해주시길 부탁드립니다.
                                    </p>
                                    <p className="font-bold text-right pt-2 text-gray-800">
                                        사랑과 존경을 담아, 월드스마일 드림
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar / Call to Action */}
                    <div className="md:w-1/3">
                        <div className="sticky top-24 bg-orange-50 rounded-3xl p-8 space-y-6">
                            <h3 className="text-xl font-bold text-gray-900">함께 동역해주세요</h3>
                            <p className="text-gray-600 text-sm">
                                월드스마일은 여러분의 관심과 사랑으로 운영됩니다. 아이캔 올티가스 캠프 가족 여러분의 따뜻한 동참을 기다립니다.
                            </p>

                            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange-200 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                                <Heart className="fill-white" size={20} />
                                후원하기
                            </button>

                            <div className="pt-6 border-t border-orange-100">
                                <p className="text-xs text-gray-500 mb-2 font-bold uppercase tracking-wider">Contact & Donation</p>

                                <div className="space-y-3">
                                    {/* Phone & Email */}
                                    <div className="space-y-1">
                                        <p className="text-gray-700 text-sm flex justify-between">
                                            <span className="font-medium">후원문의</span>
                                            <span>051-634-0990</span>
                                        </p>
                                        <p className="text-gray-700 text-sm flex justify-between">
                                            <span className="font-medium">이메일</span>
                                            <span>ngoworldsmile@naver.com</span>
                                        </p>
                                    </div>

                                    {/* Bank Accounts */}
                                    <div className="bg-orange-50 p-3 rounded-xl border border-orange-100 text-xs text-gray-700 space-y-1">
                                        <p className="font-bold text-orange-600 mb-1">후원계좌 (사단법인월드스마일)</p>
                                        <p>하나은행: 309-910025-43905</p>
                                        <p>농협: 355-0077-9474-73</p>
                                        <p>국민: 556601-01-467146</p>
                                    </div>

                                    {/* Address */}
                                    <div className="text-xs text-gray-500 leading-relaxed border-t border-gray-100 pt-2">
                                        <span>주소: 부산광역시 남구 유엔로 39 성지고등학교, 실습동 2층 월드스마일 본부</span>
                                    </div>

                                    <a href="http://www.worldsmile.co.kr" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-600 hover:bg-blue-700 font-bold text-sm py-3 rounded-xl block text-center transition-colors shadow-sm">
                                        홈페이지 바로가기
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const HelpBoard = () => {
    const [view, setView] = useState<'list' | 'worldsmile'>('list');

    if (view === 'worldsmile') {
        return <WorldSmilePost onBack={() => setView('list')} />;
    }

    return (
        <div className="space-y-8">
            {/* Featured NGO Card */}
            <div
                onClick={() => setView('worldsmile')}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group border border-gray-100"
            >
                <div className="md:flex">
                    <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
                        <img
                            src="/assets/worldsmile/youth_support.jpg"
                            alt="World Smile Banner"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                            Featured Partner
                        </div>
                    </div>
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                            월드스마일 (World Smile)
                        </h3>
                        <p className="text-gray-600 mb-6 line-clamp-3">
                            청소년들의 꿈을 응원하고, 홀로 계신 어르신들께 따뜻한 도시락을 전합니다.
                            세상의 어려움 속에서도 포기하지 않는 아이들의 여정에 함께해주세요.
                        </p>
                        <div className="flex items-center gap-2 text-orange-500 font-bold text-sm">
                            자세히 보기 <ArrowRight size={16} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Help Items Grid (Mock) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 opacity-50 pointer-events-none filter grayscale">
                <div className="bg-white p-6 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded text-xs font-bold">I CAN HELP</span>
                        <span className="text-gray-400 text-xs">2 hours ago</span>
                    </div>
                    <h4 className="font-bold text-lg mb-1">아이들 영어 수학외 (재능기부)</h4>
                    <p className="text-gray-500 text-sm">올티가스 거주중입니다. 주말에 아이들 공부 봐줄 수...</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs font-bold">I NEED HELP</span>
                        <span className="text-gray-400 text-xs">5 hours ago</span>
                    </div>
                    <h4 className="font-bold text-lg mb-1">공항 픽업 도와주실 분 계신가요?</h4>
                    <p className="text-gray-500 text-sm">다음주 화요일 밤 비행기로 도착하는데 짐이 많아서...</p>
                </div>
            </div>
            <div className="text-center text-gray-400 text-sm mt-4">
                * 일반 도움 요청/제공 게시판은 곧 오픈됩니다.
            </div>
        </div>
    );
};

const BusinessDirectory = () => {
    return (
        <div className="space-y-8 animate-fade-in">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row">
                <div className="md:w-1/2 relative overflow-hidden min-h-[300px] md:min-h-0">
                    <img
                        src="/assets/partnership_handshake.png"
                        alt="Partnership Handshake"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40 p-10 flex flex-col justify-end">
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20">
                                <Users className="w-6 h-6 text-blue-300" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4 leading-tight text-white">
                                선한 영향력을 나누는<br />
                                <span className="text-blue-300">비즈니스 파트너십</span>
                            </h2>
                            <p className="text-slate-200 leading-relaxed font-medium text-shadow-sm">
                                "청년의 열정과 아이캔의 연륜이 만나<br />
                                더 큰 내일을 만들어갑니다."
                            </p>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                        Collaboration & Vision
                    </h3>

                    <p className="text-gray-600 leading-loose mb-6">
                        우리는 단순한 이익 창출을 넘어, <strong>"미래의 역군을 세우는 일"</strong>에 소명을 가진 분들을 기다립니다.<br /><br />
                        여러분이 가진 탁월한 능력과 아이캔의 교육 플랫폼이 만나면 세상에 더 놀라운 가치를 전할 수 있습니다.
                        서로의 강점을 나누고 협력하여 하나님이 기뻐하시는 선하고 복된 프로젝트를 함께 만들어갑시다.
                    </p>

                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6">
                        <div className="flex items-start gap-3">
                            <div className="bg-blue-100 p-2 rounded-full text-blue-600 mt-1">
                                <Store size={18} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm mb-1">열린 제휴 제안</h4>
                                <p className="text-xs text-gray-500">교육 콘텐츠, IT 기술, 문화 예술, 봉사 등 분야에 제한 없이 협력을 환영합니다.</p>
                            </div>
                        </div>
                    </div>

                    <a
                        href="mailto:partner@icancamp.com"
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                    >
                        제휴 제안하기 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-60">
                {[
                    { title: "교육 협력", desc: "커리큘럼 및 강사 교류" },
                    { title: "기술 제휴", desc: "IT 플랫폼 및 서비스 연동" },
                    { title: "문화 사역", desc: "전시, 공연, 캠프 기획" }
                ].map((item, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                        <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-xs text-gray-400">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- Missionary Journey & Story Components ---

const MissionaryJourneyPost = ({ onBack }: { onBack: () => void }) => {
    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 animate-fade-in">
            <div className="relative h-64 md:h-96 bg-gray-900">
                {/* Placeholder for Bible/Map image */}
                {/* Valid Ancient Map Image */}
                <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
                    alt="Missionary Journey Map"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex items-end">
                    <div className="p-8 text-white">
                        <div className="bg-blue-600 text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">Our Project</div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-2">바울과 함께 한 40일간의 선교여행</h2>
                        <p className="text-lg md:text-xl opacity-90">지도로 보는 성경, 삶으로 만나는 은혜. 당신의 인생이 선교지가 되는 기적.</p>
                    </div>
                </div>
                <button
                    onClick={onBack}
                    className="absolute top-6 left-6 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-bold transition-all"
                >
                    ← Back to Stories
                </button>
            </div>

            <div className="max-w-3xl mx-auto px-6 py-12">
                <div className="prose prose-lg mx-auto text-gray-700">
                    <p className="lead text-2xl font-medium text-gray-900 leading-relaxed mb-8">
                        2,000년 전, 한 남자가 길 위에서 평생을 보냈습니다.<br />
                        그의 발걸음이 닿는 곳마다 복음이 심어졌고, 역사가 바뀌었습니다.
                    </p>

                    <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 mt-10 mb-4">
                        <Map className="text-blue-600" /> 왜 지금 '바울'인가요?
                    </h3>
                    <p>
                        우리는 종종 성경을 문자로만 읽습니다. 하지만 바울의 서신서들은 그가 밟았던 땅, 만났던 사람들,
                        그리고 그가 겪었던 고난의 현장 속에서 피어난 고백들입니다.
                        <strong>"바울과 함께 한 40일간의 선교여행"</strong>은 단순한 성경 읽기가 아닙니다.
                        그의 험난한 여정을 3D 지도 위에서 따라가며, 오늘 나의 삶을 향한 하나님의 뜻을 발견하는 <strong>'영적 순례'</strong>입니다.
                    </p>

                    <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 mt-10 mb-4">
                        <Compass className="text-blue-600" /> 믿지 않는 이들에게 전하는 '길'의 이야기
                    </h3>
                    <p>
                        예수님을 믿지 않는 분들에게도 이 여행을 추천합니다.
                        종교적인 색채를 떠나, 한 인간이 자신의 신념을 위해 모든 것을 걸고 떠난 이 위대한 여정은
                        누구에게나 깊은 울림을 줍니다. 당신이 걷고 있는 인생의 길은 어디를 향하고 있나요?
                        바울의 여정을 통해 당신의 삶의 목적과 방향을 다시 점검해 보세요.
                    </p>

                    <div className="bg-blue-50 p-6 rounded-2xl my-8 border border-blue-100">
                        <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                            <BookOpen size={20} /> 프로젝트 주요 특징
                        </h4>
                        <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                            <li><strong>3D 지도로 보는 선교 여정:</strong> 당시 지형과 이동 경로를 생생하게 시각화</li>
                            <li><strong>40일 묵상 가이드:</strong> 매일 제공되는 말씀과 삶의 적용 포인트</li>
                            <li><strong>역사적/문화적 배경 해설:</strong> 초신자도 이해하기 쉬운 친절한 설명</li>
                        </ul>
                    </div>

                    <p className="text-center font-medium italic text-gray-500 mt-12">
                        "우리의 이야기가 당신의 이야기가 되기를 기도합니다."
                    </p>
                </div>
            </div>
        </div>
    )
}

const PaulEpistlesAppPost = ({ onBack }: { onBack: () => void }) => {
    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 animate-fade-in">
            <div className="relative h-64 md:h-96 bg-gray-900">
                <img
                    src="https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=2070&auto=format&fit=crop"
                    alt="Paul's Epistles"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <div className="p-8 text-white">
                        <div className="bg-indigo-500 text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">Deep Devotion</div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-2">바울 서신서 깊이 읽기</h2>
                        <p className="text-lg md:text-xl opacity-90">당신에게 보내는 2천 년 전의 편지. 삶을 관통하는 통찰을 만나다.</p>
                    </div>
                </div>
                <button
                    onClick={onBack}
                    className="absolute top-6 left-6 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-bold transition-all"
                >
                    ← Back to Stories
                </button>
            </div>

            <div className="max-w-3xl mx-auto px-6 py-12">
                <div className="prose prose-lg mx-auto text-gray-700">
                    <p className="lead text-2xl font-medium text-gray-900 leading-relaxed mb-8">
                        "내가 약할 때, 그때가 곧 강함이라."<br />
                        역설적인 이 고백 속에 담긴 진정한 자유를 경험해 보세요.
                    </p>

                    <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 mt-10 mb-4">
                        <BookOpen className="text-indigo-600" /> 신앙을 처음 접하는 분들에게
                    </h3>
                    <p>
                        바울 서신서는 단순한 종교 경전이 아닙니다. 감옥에 갇혀서도 기쁨을 노래하고,
                        죽음 앞에서도 소망을 잃지 않았던 한 인간의 치열한 삶의 기록입니다.
                        로마서, 고린도전후서, 갈라디아서... 이 오래된 편지들 속에 담긴 지혜는
                        혼란스러운 현대 사회를 살아가는 우리에게도 놀라운 통찰을 줍니다.
                    </p>

                    <div className="bg-indigo-50 p-8 rounded-2xl my-8 border border-indigo-100 text-center">
                        <h4 className="font-bold text-indigo-900 mb-4 text-xl">
                            📱 바울 서신서 묵상 앱 (웹)
                        </h4>
                        <p className="text-gray-600 mb-6">
                            복잡한 기능은 덜어내고, 오직 말씀과 묵상에만 집중할 수 있도록 만들었습니다.
                            언제 어디서든 바울의 편지를 꺼내 읽어보세요.
                        </p>
                        <a
                            href="https://returnhome-1.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all text-lg"
                        >
                            <ExternalLink size={20} />
                            서신서 묵상 시작하기
                        </a>
                    </div>

                    <p className="text-center font-medium italic text-gray-500 mt-12">
                        "오래된 편지가 당신의 삶을 새롭게 할 것입니다."
                    </p>
                </div>
            </div>
        </div>
    )
}

const OrtigasNewsPost = ({ onBack }: { onBack: () => void }) => {
    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 animate-fade-in">
            <div className="relative h-64 md:h-96 bg-emerald-900">
                <img
                    src="https://images.unsplash.com/photo-1518558997970-4ddc236affcd?q=80&w=2070&auto=format&fit=crop"
                    alt="Manila Skyline and Street"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 to-transparent flex items-end">
                    <div className="p-8 text-white">
                        <div className="flex gap-2 mb-3">
                            <div className="bg-emerald-600 text-xs font-bold px-3 py-1 rounded-full inline-block">Today's Insight</div>
                            <div className="bg-white/20 text-xs font-bold px-3 py-1 rounded-full inline-block backdrop-blur-md">2026.01.29</div>
                        </div>
                        <h2 className="text-2xl md:text-4xl font-bold mb-2 leading-tight">
                            오늘의 희망과 좌절: 올티가스의 두 얼굴,<br className="hidden md:block" />
                            그럼에도 우리는 내일을 심습니다.
                        </h2>
                    </div>
                </div>
                <button
                    onClick={onBack}
                    className="absolute top-6 left-6 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-bold transition-all"
                >
                    ← Back to Stories
                </button>
            </div>

            <div className="max-w-3xl mx-auto px-6 py-12">
                <div className="prose prose-lg mx-auto text-gray-700">
                    <p className="lead text-xl font-medium text-emerald-900 leading-relaxed mb-8 border-l-4 border-emerald-500 pl-4 py-1 bg-emerald-50 rounded-r-lg">
                        "높아지는 마천루의 그림자 아래에서도, 아이들의 웃음소리는 여전히 태양보다 밝게 빛납니다."
                    </p>

                    <h3 className="font-bold text-gray-900 mt-10 mb-4 text-lg">
                        🏙️ 올티가스의 아침: 성장통을 겪는 도시
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed mb-6">
                        오늘 아침, 올티가스 센터의 출근길은 여느 때보다 분주했습니다. 필리핀 경제지표가 상승 곡선을 그리고 있다는 뉴스가 들려옵니다.
                        새로 올라가는 거대한 빌딩들은 이 도시의 역동성을 증명하는 듯합니다. 글로벌 기업들이 입주하고, 젊은 인재들이 모여들고 있습니다.
                        <br /><br />
                        하지만 그 화려한 유리창 반대편, 좁은 골목길의 풍경은 여전한 숙제를 안고 있습니다.
                        치솟는 물가는 서민들의 장바구니를 가볍게 만들고, 여전히 학교 대신 거리로 나와야 하는 아이들이 눈에 밟힙니다.
                        성장의 빛이 강할수록, 소외의 그림자도 짙어지는 것이 현대 도시의 아픈 현실일지도 모릅니다.
                    </p>

                    <h3 className="font-bold text-gray-900 mt-10 mb-4 text-lg">
                        🌱 그럼에도 불구하고: 우리는 '오늘'을 사랑합니다
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed mb-6">
                        가끔은 이 거대한 빈부의 격차와 해결되지 않는 사회적 문제들 앞에서 무력감을 느끼기도 합니다.
                        "우리의 작은 노력이 과연 무엇을 바꿀 수 있을까?"라는 질문이 맴돌기도 합니다.
                        <br /><br />
                        하지만 오늘, 캠프에 도착해 아이들의 눈망울을 보았을 때 그 질문에 대한 답을 찾았습니다.
                        우리는 세상을 단번에 뒤집는 혁명가가 아닙니다. 우리는 <strong>오늘 하루, 한 아이의 마음에 '배움'과 '사랑'이라는 씨앗을 심는 농부</strong>입니다.
                    </p>

                    <div className="bg-gray-50 p-8 rounded-2xl my-10 border-t-2 border-emerald-500 text-center">
                        <h4 className="font-bold text-gray-900 mb-4">📢 오늘의 기도 제목</h4>
                        <p className="text-gray-600 italic mb-4">
                            "필리핀의 위정자들에게 지혜를 주셔서 경제 성장이 소외된 이들에게도 흘러가게 하소서.<br />
                            오늘 우리 아이들이 배우는 지식이, 훗날 이 땅을 치유하는 도구가 되게 하소서."
                        </p>
                    </div>

                    <p className="text-center font-medium text-gray-400 mt-12 text-sm">
                        Editor: Paul (Community Tentmaker)
                    </p>
                </div>
            </div>
        </div>
    )
}

const TovFootballClubPost = ({ onBack }: { onBack: () => void }) => {
    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 animate-fade-in">
            <div className="relative h-64 md:h-96 bg-gray-900">
                <img
                    src="/assets/sparta_field.png"
                    alt="Sparta Indoor Futsal Field"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                    <div className="p-8 text-white max-w-4xl w-full">
                        <div className="bg-green-600 text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">Sports & Community</div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-2 text-shadow-lg">올티가스 축구 모임 '토브(TOV)' ⚽</h2>
                        <p className="text-lg md:text-xl opacity-90 text-shadow-md">축구로 맺는 이웃과의 건강한 만남! 새로 단장한 스파르타 구장.</p>
                    </div>
                </div>
                <button
                    onClick={onBack}
                    className="absolute top-6 left-6 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-bold transition-all"
                >
                    ← Back to Stories
                </button>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Main Content */}
                    <div className="md:w-2/3 space-y-10">
                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-green-600">01.</span> 스파르타(Sparta) 실내구장의 변신
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                인조잔디를 새로 깔아서 푹신푹신하고 좋아졌습니다! 지붕이 덮여있어 비가 와도, 더워도 쾌적하게 뛸 수 있는 최고의 실내구장입니다.
                            </p>
                            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                                <img src="/assets/sparta_field.png" className="w-full h-auto object-cover" alt="Sparta Futsal Field" />
                            </div>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-green-600">02.</span> 함께 뛰며 맺어지는 이웃의 끈끈함
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                보통 같이 차시는 팀 단위로 오시면 <strong>2시간씩 예약</strong>해서 찹니다. <br />
                                <strong>7 대 7</strong> 공 차시는 게 사이즈에 제일 적합한 것 같습니다. <strong>8 대 8</strong>까지도 굿굿! <br />
                                인원이 많아 18명~22명 가시면 7명씩 3팀을 만들어서 차면 딱 좋습니다.
                            </p>

                            <div className="bg-green-100 border-l-4 border-green-600 p-6 my-6 rounded-r-2xl shadow-sm">
                                <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                                    ⚽ 오픈 축구 (현지인 교류 매치)
                                </h4>
                                <p className="text-green-800 leading-relaxed">
                                    <strong>화요일과 목요일</strong>에는 주로 <strong>'오픈 축구'</strong> 형식으로 진행됩니다! <br />
                                    현지에서 스태프가 7대7로 팀을 만들어 주어, 현지인 팀들과 함께 어울려 박진감 넘치고 재미있게 공을 찰 수 있습니다.
                                </p>
                            </div>

                            <div className="bg-gray-50 border-l-4 border-green-500 p-6 my-6 italic text-gray-700 rounded-r-2xl">
                                "안녕하세요, 2월 26일 (목) 축구 모임 있습니다.<br />
                                참석 원하시는 분들 명단 작성 부탁드립니다!"
                            </div>

                            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 mt-6">
                                <img src="/assets/tov_team.png" className="w-full h-auto object-cover" alt="TOV Football Team High Five" />
                            </div>
                        </section>
                    </div>

                    {/* Sidebar / Info */}
                    <div className="md:w-1/3">
                        <div className="sticky top-24 bg-green-50 rounded-3xl p-8 space-y-6 border border-green-100 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 border-b border-green-200 pb-3 flex items-center gap-2">
                                <span className="bg-white p-2 rounded-full shadow-sm">🗓️</span> 모임 참여 안내
                            </h3>

                            <div className="space-y-5">
                                <div className="flex gap-4 items-start">
                                    <span className="font-bold w-12 text-green-800 bg-white px-2 py-1 rounded text-center shadow-sm text-sm shrink-0">시간</span>
                                    <span className="text-gray-700 text-sm leading-relaxed font-medium">매주 화, 목요일<br />오후 8:30 - 오후 10:30</span>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <span className="font-bold w-12 text-green-800 bg-white px-2 py-1 rounded text-center shadow-sm text-sm shrink-0">장소</span>
                                    <span className="text-gray-700 text-sm leading-relaxed font-medium mt-1">Sparta (실내구장)</span>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <span className="font-bold w-12 text-green-800 bg-white px-2 py-1 rounded text-center shadow-sm text-sm shrink-0">회비</span>
                                    <span className="text-gray-700 text-sm leading-relaxed font-medium mt-1">350 페소</span>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <span className="font-bold w-12 text-green-800 bg-white px-2 py-1 rounded text-center shadow-sm text-sm shrink-0">예약</span>
                                    <span className="text-gray-700 text-sm leading-relaxed font-medium">0977-763-4402<br /><span className="text-gray-500 text-xs font-normal">가시기 전에 번호로 전화 예약 필수입니다.</span></span>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-green-200 mt-6">
                                <button className="w-full bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-bold py-4 rounded-xl transition-all shadow-md transform hover:-translate-y-1 flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 3.185-9 7.111 0 2.536 1.677 4.773 4.195 6.01L6.75 21l3.96-1.503c.414.072.842.115 1.29.115 4.97 0 9-3.185 9-7.111C21 6.185 16.97 3 12 3z" /></svg>
                                    카카오톡 그룹 참여하기
                                </button>
                                <p className="text-center text-xs text-gray-500 mt-3">투표 및 명단 작성을 위해 참여해주세요!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const TentmakerStories = () => {
    const [view, setView] = useState<'list' | 'paul_journey' | 'paul_epistles' | 'ortigas_news' | 'tov_football'>('list');

    if (view === 'paul_journey') {
        return <MissionaryJourneyPost onBack={() => setView('list')} />;
    }
    if (view === 'paul_epistles') {
        return <PaulEpistlesAppPost onBack={() => setView('list')} />;
    }
    if (view === 'ortigas_news') {
        return <OrtigasNewsPost onBack={() => setView('list')} />;
    }
    if (view === 'tov_football') {
        return <TovFootballClubPost onBack={() => setView('list')} />;
    }

    return (
        <div className="space-y-8">
            {/* Today's Insight (Featured) */}
            <div
                onClick={() => setView('ortigas_news')}
                className="bg-emerald-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group relative border border-emerald-800"
            >
                <div className="md:flex h-full">
                    <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
                        <img
                            src="https://images.unsplash.com/photo-1518558997970-4ddc236affcd?q=80&w=2070&auto=format&fit=crop"
                            alt="Manila City"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                        />
                    </div>
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-white relative z-10">
                        <div className="absolute top-0 right-0 p-32 bg-emerald-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-emerald-500 text-xs font-bold px-3 py-1 rounded-full">New</div>
                            <span className="text-emerald-200 text-xs">2026.01.29</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 leading-snug">
                            오늘의 희망과 좌절: 올티가스의 두 얼굴
                        </h3>
                        <p className="text-emerald-100/80 mb-6 line-clamp-2 text-sm">
                            변화하는 필리핀의 정세 속에서 우리는 무엇을 바라봐야 할까요? 그곳에 피어나는 작은 희망을 이야기합니다.
                        </p>
                        <div className="flex items-center gap-2 text-white font-bold text-sm group-hover:underline decoration-emerald-400 underline-offset-4">
                            칼럼 읽기 <ArrowRight size={16} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* TOV Football Club Card */}
                <div
                    onClick={() => setView('tov_football')}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group border border-gray-100 flex flex-col"
                >
                    <div className="h-48 overflow-hidden relative">
                        <img
                            src="/assets/tov_team.png"
                            alt="TOV Football Team"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                            Community
                        </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                            올티가스 축구 모임 '토브' ⚽
                        </h3>
                        <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-grow">
                            화, 목요일 현지인 매칭 오픈축구! 축구로 건강과 끈끈한 이웃의 정을 나눠요.
                        </p>
                        <div className="flex items-center justify-between text-xs mt-auto">
                            <span className="text-gray-400 font-medium">화,목 8:30 PM • 350 PHP</span>
                            <div className="flex items-center gap-1 text-green-600 font-bold">
                                Read More <ArrowRight size={14} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Paul's Journey Card */}
                <div
                    onClick={() => setView('paul_journey')}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group border border-gray-100 flex flex-col"
                >
                    <div className="h-48 overflow-hidden relative">
                        <img
                            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
                            alt="Ancient Map"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                            Devotion
                        </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            바울과 함께 한 40일
                        </h3>
                        <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-grow">
                            지도를 펼치고 떠나는 영적 순례의 길.
                        </p>
                        <div className="flex items-center gap-2 text-blue-600 font-bold text-xs mt-auto">
                            Read More <ArrowRight size={14} />
                        </div>
                    </div>
                </div>

                {/* Paul's Epistles App Card */}
                <div
                    onClick={() => setView('paul_epistles')}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group border border-gray-100 flex flex-col"
                >
                    <div className="h-48 overflow-hidden relative">
                        <img
                            src="https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=2070&auto=format&fit=crop"
                            alt="Reading Bible"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 bg-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                            App
                        </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                            바울 서신서 깊이 읽기
                        </h3>
                        <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-grow">
                            2천 년 전의 편지가 오늘 당신에게 말을 겁니다.
                        </p>
                        <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs mt-auto">
                            Check App <ArrowRight size={14} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center py-10 bg-gray-50 rounded-2xl border border-dashed border-gray-200 mt-6">
                <MessageCircle className="w-12 h-12 mx-auto text-gray-300 mb-3" />
                <p className="text-gray-400">더 많은 텐트메이커들의 이야기가 준비 중입니다.</p>
            </div>
        </div>
    );
};

const AiStartupIncubator = () => {
    return (
        <div className="space-y-8 animate-fade-in">
            {/* Hero Section */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row relative">
                <div className="md:w-1/2 relative overflow-hidden min-h-[350px] md:min-h-0">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                        alt="Teens and Twenties Startup Collaboration"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-900/80 to-transparent p-10 flex flex-col justify-end">
                        <div className="relative z-10 text-white">
                            <div className="flex gap-2 mb-4">
                                <span className="bg-indigo-600 text-xs font-bold px-3 py-1 rounded-full shadow-sm">AI Incubator</span>
                                <span className="bg-white/20 backdrop-blur-md text-xs font-bold px-3 py-1 rounded-full text-white">Teens & Twenties</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-3 leading-tight text-shadow-lg">
                                세상을 혁신하는<br />
                                <span className="text-indigo-300">AI 스타트업 인큐베이팅</span>
                            </h2>
                            <p className="text-indigo-100 leading-relaxed font-medium">
                                "청소년과 청년들이 모여 미래의 가치를 창출합니다. 기업을 만들고, AI로 데이터 중심의 결정을 내리는 법을 배웁니다."
                            </p>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 p-10 flex flex-col justify-center bg-gray-50">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <Rocket className="text-indigo-600" size={24} />
                        미래를 그리는 청년 창업가들
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6">
                        아이캔에서는 AI 스타트업에 관심이 많은 <strong>청소년(Teens)</strong>과 <strong>청년(Twenties)</strong>들을 육성합니다. 희망자가 많을 경우 기수를 나누어 오디션을 통해 선발하며, 매주 정기적인 모임을 통해 실전 창업과 비즈니스 모델 구축을 학습합니다.
                        <br /><br />
                        주변의 협력 업체를 선정하여 <strong>산학협동 체제</strong>로 기존의 전통적인 기업을 'AI로 운영되는 혁신 기업'으로 탈바꿈시키는 프로젝트를 주도합니다.
                        <br /><br />
                        <span className="inline-block bg-indigo-100/70 text-indigo-800 px-4 py-3 rounded-xl font-bold shadow-sm">
                            💡 전통적인 기업과 가게를 AI 시대에도 두려움 없이 발전하게 하는 원동력을 만들어 드립니다.
                        </span>
                    </p>

                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group">
                        스타트업 동호회 지원하기 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Core Strategy Area */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                        <Database size={24} strokeWidth={2.5} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">데이터 통합 및 분석</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        고객관리부터 광고까지 전 범위의 데이터를 통합하고, 비정형 데이터를 파이프라인으로 끌어옵니다. 오래된 관행을 깨고 '온톨로지형 데이터센터'를 구축하여 유효한 결정과 정확한 타겟팅을 이룹니다.
                    </p>
                    <div className="mt-4 rounded-xl overflow-hidden h-32">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Data Analytics" />
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                        <Cpu size={24} strokeWidth={2.5} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">전략 AI 에이전트</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        확보된 데이터를 기반으로 현재를 분명히 평가하고, 강화 전략을 수립합니다. AI 에이전트와 함께 다양한 시장 변화를 시뮬레이션하여 매출 및 수익률 상승을 위한 입체적 개선 방향을 세웁니다.
                    </p>
                    <div className="mt-4 rounded-xl overflow-hidden h-32">
                        <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="AI Agent & Code" />
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                        <TrendingUp size={24} strokeWidth={2.5} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">시나리오 기반 시장 장악</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        경쟁사를 분석하고 이길 수 있는 순차적 시나리오 전략을 준비합니다. 변화하는 판도에 따라 유연한 조치를 취해 타겟 상품 판매에 완전히 유리한 구조(알짜 수익 모델)로 재편합니다.
                    </p>
                    <div className="mt-4 rounded-xl overflow-hidden h-32">
                        <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Strategy Board" />
                    </div>
                </div>
            </div>

            {/* Quote / Conclusion */}
            <div className="bg-indigo-900 rounded-3xl p-10 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] opacity-10 blur-sm mix-blend-overlay bg-cover bg-center"></div>
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold text-white mb-4">"우리는 실패를 두려워하지 않는 데이터 탐험가입니다."</h3>
                    <p className="text-indigo-200">
                        Teens & Twenties Startup Club은 단순한 이론에 머물지 않습니다. 살아숨쉬는 기업의 생태계에 직접 뛰어들어, 데이터 파이프라인을 구축하고 AI와 함께 미래 산업의 승리 공식을 써내려갑니다.
                    </p>
                </div>
            </div>
        </div>
    );
};

interface HeraldArchiveEntry {
    date: string;
    vol: number;
    cover_en: string;
    cover_kr: string;
    tags?: string[];
}

const heraldCoverImage = (entry: HeraldArchiveEntry) => {
    const prompt = encodeURIComponent(`bold editorial vector illustration, flat graphic poster: ${entry.cover_en}`.slice(0, 250));
    const seedNum = parseInt(entry.date.replace(/-/g, ''), 10) % 100000;
    return `https://image.pollinations.ai/prompt/${prompt}?width=600&height=400&seed=${seedNum}&model=turbo&nologo=true`;
};

const HeraldSection: React.FC<{ language: string }> = ({ language }) => {
    const isKo = language === 'ko';
    const heraldUrl = 'https://ican-heralds.vercel.app/';
    const today = new Date().toLocaleDateString(isKo ? 'ko-KR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    const [archive, setArchive] = React.useState<HeraldArchiveEntry[] | null>(null);
    const [archiveError, setArchiveError] = React.useState<boolean>(false);

    React.useEffect(() => {
        const url = 'https://raw.githubusercontent.com/silverbruce37-bruce/ICAN-Heralds/main/data/archive-index.json';
        fetch(url)
            .then(r => {
                if (!r.ok) throw new Error(`HTTP ${r.status}`);
                return r.json();
            })
            .then((data: HeraldArchiveEntry[]) => {
                const sorted = [...data].sort((a, b) => b.date.localeCompare(a.date));
                setArchive(sorted.slice(0, 7));
            })
            .catch(() => setArchiveError(true));
    }, []);

    return (
        <div className="space-y-8 animate-fade-in">
            {/* Hero */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row relative">
                <div className="md:w-1/2 relative overflow-hidden min-h-[320px] md:min-h-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
                    <div className="absolute inset-0 p-10 flex flex-col justify-end">
                        <div className="relative z-10 text-white">
                            <div className="flex gap-2 mb-4">
                                <span className="bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">DAILY</span>
                                <span className="bg-white/20 backdrop-blur-md text-xs font-bold px-3 py-1 rounded-full text-white">
                                    {isKo ? '매일 오전 8시 (PHT)' : 'Daily 8AM PHT'}
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-3 leading-tight tracking-tight" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 300 }}>
                                iCAN <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">Herald</span>
                            </h2>
                            <p className="text-slate-200 leading-relaxed font-medium">
                                {isKo
                                    ? '"필리핀에 사는 한인 교민을 위한 매일 아침의 이중언어 신문 — 한-필 관계부터 생활 정보까지, TOP 20 뉴스를 영·한으로."'
                                    : '"Your daily bilingual briefing for Koreans in the Philippines — 20 curated stories in English and Korean, every morning."'}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 p-10 flex flex-col justify-center bg-gray-50">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <Newspaper className="text-amber-600" size={24} />
                        {isKo ? '아이캔 데일리 써머리 헤럴드' : 'iCAN Daily Summary Herald'}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6">
                        {isKo ? (
                            <>
                                필리핀 주요 언론(Philstar, Inquirer, Manila Bulletin 등)을 매일 새벽 크롤링해서 한-필 관계·교민 필수·교육·생활까지 <strong>TOP 20 뉴스</strong>로 추려냅니다.
                                <br /><br />
                                각 기사에는 <strong>배경지식 레이어(L1~L4)</strong>가 붙어 있어 영어 학습 교재로도 활용할 수 있고, 폴샘과의 Q&A 채팅으로 더 깊이 파고들 수 있습니다.
                                <br /><br />
                                <span className="inline-block bg-amber-100/70 text-amber-800 px-4 py-3 rounded-xl font-bold shadow-sm">
                                    📰 오늘의 발행: {today}
                                </span>
                            </>
                        ) : (
                            <>
                                Every dawn, we crawl major Philippine outlets (Philstar, Inquirer, Manila Bulletin) and curate <strong>TOP 20 stories</strong> across Korea-PH relations, expat essentials, education, and daily life.
                                <br /><br />
                                Each article ships with <strong>Background Layers (L1–L4)</strong> so it doubles as an English-learning resource, with an in-page Q&A chat for deeper exploration.
                                <br /><br />
                                <span className="inline-block bg-amber-100/70 text-amber-800 px-4 py-3 rounded-xl font-bold shadow-sm">
                                    📰 Today: {today}
                                </span>
                            </>
                        )}
                    </p>

                    <a
                        href={heraldUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                    >
                        {isKo ? '오늘자 헤럴드 읽기' : 'Read Today\'s Herald'}
                        <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                        <Globe size={24} strokeWidth={2.5} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{isKo ? '한-필 관계 최우선' : 'Korea-PH First'}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {isKo
                            ? '1~5위는 한-필 정치·경제·문화 이슈. 교민으로서 꼭 알아야 할 뉴스를 상단에 배치합니다.'
                            : 'The top 5 slots are reserved for Korea-Philippines politics, economy, and culture — must-know news for Korean residents.'}
                    </p>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                        <BookOpen size={24} strokeWidth={2.5} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{isKo ? '이중언어 + 학습 교재' : 'Bilingual Learning'}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {isKo
                            ? '모든 기사가 영·한 병기. 배경지식 레이어(L1~L4)와 단어장·Q&A로 iCAN 영어 교재 역할까지 합니다.'
                            : 'Every story in both English and Korean. Background layers (L1-L4), vocabulary, and Q&A chat turn news into iCAN learning material.'}
                    </p>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                        <Compass size={24} strokeWidth={2.5} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{isKo ? '생활 정보까지' : 'Life in PH'}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {isKo
                            ? '환율·날씨·치안부터 Food & Travel, 이벤트까지. 교민 생활에 바로 쓰이는 정보를 매일 업데이트합니다.'
                            : 'From FX rates and weather to Food & Travel and events — practical info for expat life, refreshed daily.'}
                    </p>
                </div>
            </div>

            {/* Recent 7 days — auto-fetched from Herald archive */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            {isKo ? '최근 1주일 커버 스토리' : 'This Week on the Herald'}
                        </h3>
                        <p className="text-sm text-gray-500">
                            {isKo ? '매일 아침 자동 업데이트됩니다.' : 'Auto-refreshed every morning.'}
                        </p>
                    </div>
                    <a
                        href={heraldUrl + 'archive.html'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1 group"
                    >
                        {isKo ? '아카이브 전체' : 'Full archive'}
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {archive === null && !archiveError && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="animate-pulse bg-gray-100 rounded-2xl h-56" />
                        ))}
                    </div>
                )}

                {archiveError && (
                    <div className="text-center py-10 text-gray-500">
                        {isKo
                            ? '최근 발행본을 불러오지 못했어요. 잠시 후 다시 시도해주세요.'
                            : 'Could not load recent issues. Please try again shortly.'}
                    </div>
                )}

                {archive && archive.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {archive.map((entry) => {
                            const dateObj = new Date(entry.date + 'T00:00:00');
                            const dateLabel = dateObj.toLocaleDateString(isKo ? 'ko-KR' : 'en-US', {
                                month: 'short', day: 'numeric', weekday: 'short'
                            });
                            const title = isKo ? entry.cover_kr : entry.cover_en;
                            return (
                                <a
                                    key={entry.date}
                                    href={heraldUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
                                >
                                    <div className="relative overflow-hidden" style={{ aspectRatio: '3 / 2' }}>
                                        <img
                                            src={heraldCoverImage(entry)}
                                            alt={title}
                                            loading="lazy"
                                            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                                        />
                                        <div className="absolute top-3 left-3 flex gap-2">
                                            <span className="bg-slate-900/85 text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider">
                                                VOL. {String(entry.vol).padStart(2, '0')}
                                            </span>
                                            <span className="bg-white/90 text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-md">
                                                {dateLabel}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <h4 className="font-bold text-gray-900 text-base leading-snug line-clamp-2 mb-2 group-hover:text-slate-700 transition-colors">
                                            {title}
                                        </h4>
                                        {entry.tags && entry.tags.length > 0 && (
                                            <div className="flex flex-wrap gap-1.5">
                                                {entry.tags.slice(0, 3).map((tag) => (
                                                    <span key={tag} className="text-[10px] font-semibold text-slate-500 bg-slate-50 px-2 py-0.5 rounded">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

const Community: React.FC = () => {
    const { language } = useLanguage();
    // Default to 'story' to show the new content
    const [activeTab, setActiveTab] = useState<'market' | 'help' | 'business' | 'story' | 'startup' | 'herald'>('story');
    const t = language === 'ko' ? COMMUNITY_DATA.ko : COMMUNITY_DATA.en;

    const tabs = [
        { id: 'story', label: t.tabs.story, icon: MessageCircle },
        { id: 'herald', label: (t.tabs as any).herald || '아이캔 헤럴드', icon: Newspaper },
        { id: 'startup', label: t.tabs.startup || 'AI 스타트업', icon: Rocket },
        { id: 'help', label: t.tabs.help, icon: Heart },
        { id: 'market', label: t.tabs.market, icon: Store },
        { id: 'business', label: t.tabs.business, icon: Users },
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
                        {activeTab === 'herald' && <HeraldSection language={language} />}
                        {activeTab === 'startup' && <AiStartupIncubator />}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Community;
