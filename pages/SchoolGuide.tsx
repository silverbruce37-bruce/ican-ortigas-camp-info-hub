import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, GraduationCap, Globe, ExternalLink, Star, Crown, BookOpen, DollarSign, Shield, Heart, Church, Cross } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Important: Import Leaflet CSS
import L from 'leaflet';
import { useLanguage } from '../context/LanguageContext';

// Fix for default Leaflet markers in React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Component to fix map rendering issues (grey tiles / half map)
const MapRevalidator = () => {
    const map = useMap();
    useEffect(() => {
        setTimeout(() => {
            map.invalidateSize();
        }, 100);
    }, [map]);
    return null;
};

// Map Controller to handle view changes
const MapController: React.FC<{ filter: string }> = ({ filter }) => {
    const map = useMap();

    React.useEffect(() => {
        // Slight delay to ensure map is ready
        const timer = setTimeout(() => {
            if (filter === 'all') {
                map.flyTo([14.5800, 121.0550], 13);
            } else if (filter === 'ortigas') {
                map.flyTo([14.5850, 121.0610], 15);
            } else if (filter === 'greenhills') {
                map.flyTo([14.6000, 121.0450], 15);
            } else if (filter === 'bgc') {
                map.flyTo([14.5520, 121.0480], 14);
            }
        }, 100);
        return () => clearTimeout(timer);
    }, [filter, map]);

    return null;
};

// --- Types ---
interface School {
    id: string;
    name: string;
    location: 'ortigas' | 'greenhills' | 'bgc' | 'makati' | 'qc';
    type: 'international' | 'private_sectarian' | 'private_christian';
    religion?: 'catholic' | 'protestant'; // Catholic (가톨릭) vs Protestant (개신교)
    curriculum: string[];
    gradeLevel: string;
    fees: '$$' | '$$$' | '$$$$';
    website: string;
    tags: string[];
    paulSamPick?: boolean; // "Paul Sam's Pick" for balanced excellence
    topTier?: boolean; // Global Top Tier
    description: string;
    insight: string; // Paul Sam's spiritual/educational insight
    image?: string;
    coordinates: [number, number]; // [lat, lng]
}

// --- Data: The "Daniel's Academy" List ---
const SCHOOLS: School[] = [
    // 1. Ortigas & Pasig (The Hub) - Accessibility & Balance
    {
        id: 'poveda',
        name: 'Saint Pedro Poveda College',
        location: 'ortigas',
        type: 'private_sectarian',
        religion: 'catholic',
        curriculum: ['PAASCU', 'Personalized Education'],
        gradeLevel: 'K-12 (Girls)',
        fees: '$$',
        website: 'https://www.poveda.edu.ph',
        tags: ['Tradition', 'Girls School', 'Catholic'],
        topTier: true,
        description: "A prestigious Catholic school for girls, known for its Personalized Education Program (PEP) fostering individual strengths.",
        insight: "전통적인 가톨릭 명문 여학교로, 개별화 교육(PEP)이 강점입니다. 인성과 학업의 조화를 중시하는 학부모님께 추천합니다.",
        coordinates: [14.5925, 121.0603]
    },
    {
        id: 'stpaul',
        name: 'Saint Paul College Pasig',
        location: 'ortigas',
        type: 'private_sectarian',
        religion: 'catholic',
        curriculum: ['PAASCU', 'K-12'],
        gradeLevel: 'K-12 (Girls)',
        fees: '$$',
        website: 'https://www.spcpasig.edu.ph',
        tags: ['Catholic', 'Paulinian', 'Holistic'],
        description: "A premier Catholic educational institution known for forming integrated Paulinians with Christian Catholic values.",
        insight: "포베다와 더불어 올티가스 지역을 대표하는 가톨릭 명문 여학교입니다. 안정적인 교육 환경과 체계적인 학생 관리가 돋보입니다.",
        coordinates: [14.5775, 121.0634]
    },
    {
        id: 'gcf',
        name: 'GCF International Christian School',
        location: 'ortigas',
        type: 'private_christian',
        religion: 'protestant',
        curriculum: ['DepEd K-12', 'Scripture Integrated'],
        gradeLevel: 'K-12',
        fees: '$$',
        website: 'https://gcf-ics.edu.ph',
        tags: ['Protestant', 'Christ-centered', 'Garnet Road'],
        paulSamPick: true,
        description: "A Christ-centered school providing quality education integrated with biblical principles in the heart of Ortigas.",
        insight: "올티가스 중심(Garnet Rd)에 위치한 개신교 학교입니다. 성경 중심의 교육과 따뜻한 공동체 분위기가 강점입니다.",
        coordinates: [14.5872, 121.0620]
    },
    {
        id: 'ccf',
        name: 'CCF Life Academy',
        location: 'ortigas',
        type: 'private_christian',
        religion: 'protestant',
        curriculum: ['Christian', 'K-12'],
        gradeLevel: 'K-12',
        fees: '$$',
        website: 'https://lifeacademy.edu.ph',
        tags: ['Protestant', 'Character', 'Bible-based'],
        paulSamPick: true,
        description: "A school committed to Christ-centered education, focusing on academic excellence and spiritual maturity.",
        insight: "신앙 안에서 아이를 키우고 싶은 부모님께 최고의 선택입니다. 올바른 기독교 세계관과 성품 교육이 탁월합니다.",
        coordinates: [14.5888, 121.0688]
    },
    {
        id: 'domuschola',
        name: 'Domuschola International School',
        location: 'ortigas',
        type: 'international',
        curriculum: ['IB (PYP, DP)', 'K-12'],
        gradeLevel: 'K-12',
        fees: '$$$',
        website: 'https://domuschola.edu.ph',
        tags: ['IB World School', 'Progressive'],
        description: "An IB World School fostering inquiry-based learning and global citizenship in a close-knit community.",
        insight: "IB 커리큘럼을 합리적인 비용으로 경험할 수 있는 학교입니다. 탐구 중심 학습을 선호하는 학생에게 적합합니다.",
        coordinates: [14.5833, 121.0610]
    },
    {
        id: 'reedley',
        name: 'Reedley International School',
        location: 'ortigas',
        type: 'international',
        curriculum: ['US', 'Singapore Math'],
        gradeLevel: 'K-12',
        fees: '$$$',
        website: 'https://reedleyschool.edu.ph',
        tags: ['Anti-Bullying', 'Nurturing'],
        description: "Known for its 'Reap' program and strict anti-bullying policy, creating a safe and encouraging environment.",
        insight: "따뜻하고 안전한 환경을 최우선으로 여기는 학교입니다. 정서적 지지가 필요한 학생들에게 훌륭한 안식처가 됩니다.",
        coordinates: [14.5860, 121.0670]
    },

    // 2. Greenhills (The Heritage) - Tradition & Elite
    {
        id: 'xavier',
        name: 'Xavier School',
        location: 'greenhills',
        type: 'private_sectarian',
        religion: 'catholic',
        curriculum: ['IB (DP)', 'Jesuit', 'Chinese'],
        gradeLevel: 'K-12 (Boys)',
        fees: '$$$',
        website: 'https://www.xs.edu.ph',
        tags: ['Elite', 'Chinese-Filipino', 'Leadership'],
        topTier: true,
        description: "A Jesuit Catholic college preparatory school for boys, blending Chinese heritage with Jesuit formation.",
        insight: "필리핀 화교 상류층이 선호하는 최고의 명문 남학교입니다. 강력한 동문 네트워크와 엄격한 리더십 훈련이 특징입니다.",
        coordinates: [14.5985, 121.0435]
    },
    {
        id: 'ica',
        name: 'Immaculate Conception Academy',
        location: 'greenhills',
        type: 'private_sectarian',
        religion: 'catholic',
        curriculum: ['Catholic', 'Chinese'],
        gradeLevel: 'K-12 (Girls)',
        fees: '$$$',
        website: 'https://icagh.edu.ph',
        tags: ['Elite', 'Chinese-Filipino', 'Girls School'],
        topTier: true,
        description: "A premier Chinese-Filipino Catholic school for girls, known for academic rigor and values formation.",
        insight: "자비에러(Xavier)의 자매학교로, 화교 사회의 여성 리더를 배출하는 산실입니다. 학구열이 높고 전통을 중시합니다.",
        coordinates: [14.5995, 121.0450]
    },
    {
        id: 'makatihope',
        name: 'Makati Hope Christian School',
        location: 'greenhills',
        type: 'private_christian',
        religion: 'protestant',
        curriculum: ['DepEd K-12', 'Chinese'],
        gradeLevel: 'K-12',
        fees: '$$$',
        website: 'https://www.makatihope.edu.ph',
        tags: ['Protestant', 'Chinese Education', 'Academic Excellence'],
        description: "A Christian school known for its quality Chinese and Christian education, fostering holistic development.",
        insight: "기독교 가치관과 중국어 교육을 동시에 잡고 싶은 분들께 권합니다. 학업적 성취와 신앙 훈련의 밸런스가 좋습니다.",
        coordinates: [14.5866, 121.0538]
    },
    {
        id: 'lsgh',
        name: 'La Salle Green Hills',
        location: 'greenhills',
        type: 'private_sectarian',
        religion: 'catholic',
        curriculum: ['Lasallian', 'PAASCU'],
        gradeLevel: 'K-12 (Boys/Co-ed)',
        fees: '$$$',
        website: 'https://www.lsgh.edu.ph',
        tags: ['Lasallian', 'Tradition', 'Sports'],
        description: "A Lasallian institution known for prolonged excellence in holistic education and strong sports programs.",
        insight: "라살 대학교 재단의 명문교로, 공부뿐 아니라 운동과 활동을 통해 호연지기를 기르는 데 탁월합니다.",
        coordinates: [14.5960, 121.0560]
    },

    // 3. BGC & Makati (The Global Stage) - Innovation & World Class
    {
        id: 'ism',
        name: 'International School Manila',
        location: 'bgc',
        type: 'international',
        curriculum: ['IB', 'US', 'AP'],
        gradeLevel: 'K-12',
        fees: '$$$$',
        website: 'https://www.ismanila.org',
        tags: ['World Class', 'Diverse', 'Top Tier'],
        topTier: true,
        description: "The oldest and most prestigious international school in the Philippines, offering world-class facilities and IB/AP programs.",
        insight: "설명이 필요 없는 필리핀 최고의 국제학교입니다. 전 세계 100여 개국 학생들과 교류하며 진정한 글로벌 시민으로 성장합니다.",
        coordinates: [14.5510, 121.0490]
    },
    {
        id: 'bsm',
        name: 'British School Manila',
        location: 'bgc',
        type: 'international',
        curriculum: ['British', 'IB'],
        gradeLevel: 'K-12',
        fees: '$$$$',
        website: 'https://www.britishschoolmanila.org',
        tags: ['British', 'Holistic', 'Top Tier'],
        topTier: true,
        description: "Provides the highest standard of British education, focusing on holistic development and IB Diploma.",
        insight: "영국식 교육의 정수를 보여줍니다. 학문적 깊이와 인성 교육의 균형이 뛰어나며, 영국/유럽 대학 진학에 유리합니다.",
        coordinates: [14.5520, 121.0505]
    },
    {
        id: 'vcis',
        name: 'Victory Christian International School',
        location: 'bgc',
        type: 'private_christian',
        religion: 'protestant',
        curriculum: ['Christian', 'IB'],
        gradeLevel: 'K-12',
        fees: '$$',
        website: 'https://vcis.edu.ph',
        tags: ['Protestant', 'IB'],
        paulSamPick: true,
        description: "A Christian school in BGC offering the IB Diploma Programme with a strong biblical foundation.",
        insight: "BGC라는 현대적인 환경에서 기독교적 가치관과 IB 커리큘럼을 동시에 추구하는 학교입니다.",
        coordinates: [14.5505, 121.0450]
    }
];

const SchoolGuide: React.FC = () => {
    const [filter, setFilter] = useState<'all' | 'ortigas' | 'greenhills' | 'bgc'>('all');

    const filteredSchools = filter === 'all'
        ? SCHOOLS
        : SCHOOLS.filter(s => s.location === filter);

    return (
        <div className="bg-[#FAFAFA] min-h-screen pt-24 pb-32 font-sans text-[#1d1d1f]">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* Hero Section */}
                <div className="text-center mb-16">
                    <span className="text-[#0071E3] font-bold tracking-wider text-xs uppercase mb-3 block">Daniel's Academy Guide</span>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                        Global Education Roadmap
                    </h1>
                    <p className="text-xl text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed word-keep-all">
                        "다니엘이 바벨론의 학문을 익히되, 믿음의 정절을 지켰던 것처럼."<br />
                        우리 아이가 세상을 이끄는 <span className="text-[#1d1d1f] font-bold">실력</span>과 <span className="text-[#1d1d1f] font-bold">영성</span>을 겸비할 '배움의 터전'을 소개합니다.
                    </p>
                </div>


                {/* Map Section */}
                <div className="mb-16 bg-white rounded-[2.5rem] p-6 shadow-xl border border-gray-100 overflow-hidden">

                    {/* Zone Selectors */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <button onClick={() => setFilter('all')} className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${filter === 'all' ? 'bg-gray-900 text-white shadow-lg' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
                            Overall View
                        </button>
                        <button onClick={() => setFilter('greenhills')} className={`px-6 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${filter === 'greenhills' ? 'bg-amber-100 text-amber-800 ring-2 ring-amber-400' : 'bg-white border border-gray-200 text-gray-600 hover:bg-amber-50'}`}>
                            <Crown size={16} /> Greenhills (Tradition)
                        </button>
                        <button onClick={() => setFilter('ortigas')} className={`px-6 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${filter === 'ortigas' ? 'bg-blue-100 text-blue-800 ring-2 ring-blue-500' : 'bg-white border border-gray-200 text-gray-600 hover:bg-blue-50'}`}>
                            <MapPin size={16} /> Ortigas (Hub)
                        </button>
                        <button onClick={() => setFilter('bgc')} className={`px-6 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${filter === 'bgc' ? 'bg-indigo-100 text-indigo-800 ring-2 ring-indigo-400' : 'bg-white border border-gray-200 text-gray-600 hover:bg-indigo-50'}`}>
                            <Globe size={16} /> BGC/Makati (Global)
                        </button>
                    </div>

                    {/* Real Map */}
                    <div className="h-[500px] w-full rounded-3xl overflow-hidden relative z-0">
                        <MapContainer
                            center={[14.5800, 121.0550]}
                            zoom={13}
                            scrollWheelZoom={false}
                            className="h-full w-full"
                            style={{ height: "100%", width: "100%", zIndex: 0 }}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <MapRevalidator />
                            <MapController filter={filter} />

                            {filteredSchools.map(school => (
                                <Marker key={school.id} position={school.coordinates}>
                                    <Popup>
                                        <div className="text-center">
                                            <h3 className="font-bold text-base mb-1">{school.name}</h3>
                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                                                {school.location.toUpperCase()}
                                            </span>
                                            <a href={school.website} target="_blank" rel="noreferrer" className="block mt-2 text-blue-600 text-xs font-bold hover:underline">
                                                Visit Website
                                            </a>
                                        </div>
                                    </Popup>
                                </Marker>
                            ))}
                        </MapContainer>
                    </div>
                </div>

                {/* School Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    <AnimatePresence mode='popLayout'>
                        {filteredSchools.map((school) => (
                            <motion.div
                                key={school.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className={`bg-white rounded-3xl overflow-hidden border transition-all hover:shadow-2xl hover:-translate-y-1 flex flex-col ${school.topTier ? 'border-amber-200 shadow-amber-50 ring-1 ring-amber-100' : 'border-gray-100 shadow-sm'}`}
                            >
                                {/* Badge Header */}
                                <div className="p-6 pb-0 flex justify-between items-start">
                                    <div className="flex gap-2 flex-wrap">
                                        {school.topTier && (
                                            <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                                <Crown size={12} className="fill-amber-600 stroke-none" /> Top Tier
                                            </span>
                                        )}
                                        {school.paulSamPick && (
                                            <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                                <Shield size={12} className="fill-blue-600 stroke-none" /> Paul Pick
                                            </span>
                                        )}
                                        {school.religion === 'protestant' && (
                                            <span className="bg-sky-50 text-sky-700 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 border border-sky-100">
                                                <Cross size={12} className="text-sky-600" /> 개신교
                                            </span>
                                        )}
                                        {school.religion === 'catholic' && (
                                            <span className="bg-purple-50 text-purple-700 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 border border-purple-100">
                                                <Church size={12} className="text-purple-600" /> 가톨릭
                                            </span>
                                        )}
                                        <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                                            {school.location.toUpperCase()}
                                        </span>
                                    </div>
                                    <span className="text-xs font-bold text-gray-400 tracking-wider">
                                        {school.fees}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-grow">
                                    <h3 className="text-2xl font-bold mb-2 text-[#1d1d1f] leading-tight">{school.name}</h3>
                                    <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
                                        {school.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {school.curriculum.slice(0, 3).map(tag => (
                                            <span key={tag} className="text-[10px] font-medium border border-gray-200 px-2 py-0.5 rounded text-gray-500">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Paul's Insight Box */}
                                    <div className="bg-gray-50 rounded-xl p-4 mb-2 relative">
                                        <div className="absolute -top-2 left-4 w-4 h-4 bg-gray-50 rotate-45 border-t border-l border-gray-50"></div>
                                        <div className="flex gap-2 items-start">
                                            <BookOpen className="w-4 h-4 text-[#0071E3] shrink-0 mt-0.5" />
                                            <p className="text-xs text-gray-600 font-medium leading-relaxed break-keep">
                                                "{school.insight}"
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer Action */}
                                <div className="p-4 bg-gray-50 border-t border-gray-100">
                                    <a
                                        href={school.website}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white border border-gray-200 text-sm font-bold text-gray-700 hover:bg-[#0071E3] hover:text-white hover:border-transparent transition-all group"
                                    >
                                        Visit Website
                                        <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Bottom Insight Section */}
                <div className="bg-[#1d1d1f] rounded-[2.5rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <Heart className="w-12 h-12 text-red-500 mx-auto mb-6 fill-current animate-pulse" />
                        <h2 className="text-3xl font-bold mb-6">"학교보다 중요한 것은 가정입니다"</h2>
                        <p className="text-lg text-gray-300 leading-relaxed mb-8 word-keep-all">
                            아무리 좋은 학교도 부모님의 사랑과 기도를 대신할 순 없습니다. <br />
                            학교는 지식을 가르치지만, 삶의 방향을 정하는 것은 가정입니다. <br />
                            아이캔은 학교 밖의 학교로서, 우리 아이들이 세상 속에서 길을 잃지 않도록 돕는 나침반이 되겠습니다.
                        </p>
                        <div className="inline-block border border-white/20 px-6 py-2 rounded-full text-sm font-medium text-gray-400">
                            From. Paul Sam
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SchoolGuide;
