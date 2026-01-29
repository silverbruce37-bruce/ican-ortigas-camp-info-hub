
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { COMMUNITY_DATA } from '../constants_community';
import { Users, Store, Heart, MessageCircle, ArrowRight, BookOpen, Compass, Map, ExternalLink } from 'lucide-react';
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
        <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
            <Store className="w-16 h-16 mx-auto text-blue-300 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Comming Soon</h3>
            <p className="text-gray-500">학부모님들의 비즈니스 파트너 목록이 곧 오픈됩니다.</p>
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
                            href="https://pauline-epistles-viewer.vercel.app/"
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

const TentmakerStories = () => {
    const [view, setView] = useState<'list' | 'paul_journey' | 'paul_epistles'>('list');

    if (view === 'paul_journey') {
        return <MissionaryJourneyPost onBack={() => setView('list')} />;
    }
    if (view === 'paul_epistles') {
        return <PaulEpistlesAppPost onBack={() => setView('list')} />;
    }

    return (
        <div className="space-y-8">
            {/* Paul's Journey Card */}
            <div
                onClick={() => setView('paul_journey')}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group border border-gray-100"
            >
                <div className="md:flex">
                    <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
                        <img
                            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
                            alt="Ancient Map"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                            Devotion & Tech
                        </div>
                    </div>
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                            바울과 함께 한 40일간의 선교여행
                        </h3>
                        <p className="text-gray-600 mb-6 line-clamp-3">
                            지도를 펼치고 바울의 발자취를 따라가며 오늘 나의 삶을 비추어보는 영적 순례의 길입니다.
                        </p>
                        <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                            이야기 읽기 <ArrowRight size={16} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Paul's Epistles App Card */}
            <div
                onClick={() => setView('paul_epistles')}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group border border-gray-100"
            >
                <div className="md:flex flex-row-reverse">
                    <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
                        <img
                            src="https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=2070&auto=format&fit=crop"
                            alt="Reading Bible"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 right-4 bg-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                            New App
                        </div>
                    </div>
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                            바울 서신서 깊이 읽기
                        </h3>
                        <p className="text-gray-600 mb-6 line-clamp-3">
                            2천 년 전의 편지가 오늘 당신에게 말을 겁니다. 심사숙고하여 만든 묵상 앱을 통해 바울의 깊은 영성을 만나보세요.
                        </p>
                        <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm">
                            앱 소개 보기 <ArrowRight size={16} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center py-10 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                <MessageCircle className="w-12 h-12 mx-auto text-gray-300 mb-3" />
                <p className="text-gray-400">더 많은 텐트메이커들의 이야기가 준비 중입니다.</p>
            </div>
        </div>
    );
};

const Community: React.FC = () => {
    const { language } = useLanguage();
    // Default to 'story' to show the new content
    const [activeTab, setActiveTab] = useState<'market' | 'help' | 'business' | 'story'>('story');
    const t = language === 'ko' ? COMMUNITY_DATA.ko : COMMUNITY_DATA.en;

    const tabs = [
        { id: 'story', label: t.tabs.story, icon: MessageCircle },
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
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Community;
