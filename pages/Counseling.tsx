
import React, { useEffect, useState } from 'react';
import { Share2, Sun, Sunset, Moon, Sunrise, PlayCircle, HeartHandshake, CheckCircle, ExternalLink, ChevronLeft, ChevronRight, BookOpen, Compass, Heart, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Data Structure for Journal Entries ---
const JOURNAL_ENTRIES = [
    {
        id: 2,
        date: "2026.02.05 • Thu",
        title: "무의미의 시대, 나침반이 되어",
        subtitle: "Paul Sam Project: AI 시대, 아이들의 길을 묻다",
        themeChip: "Future Vision",
        morning: {
            title: "지식(Knowledge)을 넘어 지혜(Wisdom)로",
            content: "AI는 인류의 모든 지식을 순식간에 학습합니다. 이제 '지식의 축적'은 더 이상 인간만의 경쟁력이 아닙니다. 바울 사도가 당시 최고의 석학 가말리엘 문하에서 율법을 배웠으나, 그 지식에 갇히지 않고 세상을 꿰뚫어 보는 '해석의 눈'을 가졌던 것처럼, 우리 아이들에게도 단순한 암기가 아닌 깊은 통찰과 해석 능력이 필요합니다.",
            quote: "우리가 이것을 말하거니와 사람의 지혜가 가르친 말로 아니하고 오직 성령께서 가르치신 것으로 하니 (고전 2:13)",
            mission: "Mission: 아이가 오늘 학교나 학원에서 배운 '사실'이 아니라, 그것을 통해 무엇을 '느꼈는지' 물어봐 주세요.",
            icon: BookOpen,
            color: "blue"
        },
        noon: {
            title: "텐트메이커의 영성: 노동의 재정의",
            content: "노동이 사라지는 시대, 많은 이들이 무기력에 빠질 수 있습니다. 하지만 바울은 천막을 짓는 고된 노동 속에서도 자신의 사명(Mission)을 잃지 않았습니다. 일이 생계를 위한 수단을 넘어, 자신의 가치를 실현하고 이웃을 섬기는 통로가 될 때 비로소 우리는 AI가 대체할 수 없는 '의미 있는 삶'을 살 수 있습니다.",
            quote: "너희에게 폐를 끼치지 아니하려고 밤낮으로 일하면서 너희에게 하나님의 복음을 전파하였노라 (살전 2:9)",
            warning: "주의하세요: '나중에 AI가 다 해줄 텐데 뭐하러 고생해?'라는 말은 아이의 동기를 꺾는 말입니다.",
            icon: Compass,
            color: "emerald"
        },
        evening: {
            title: "공존의 기술: 사랑받는 아이",
            content: "바울은 유대인에게는 유대인처럼, 이방인에게는 이방인처럼 다가가며 모든 세대와 계층을 아울렀습니다. 미래 사회의 핵심 능력은 기계와 대화하는 코딩 능력이 아니라, 사람과 기계 모두에게 '사랑받고', 그들을 연결하는 '공감의 리더십'입니다. 폴샘 프로젝트는 바로 이 따뜻한 변증의 힘을 기르는 과정입니다.",
            actionTitle: "함께 걷는 기도를 해주세요",
            actionContent: "잠든 아이의 머리맡에서 기도해주세요.\n\"변화하는 세상 속에서도 변치 않는 사랑으로, 사람들의 마음을 얻는 지혜로운 아이가 되게 하소서.\"",
            icon: Heart,
            color: "indigo"
        },
        media: {
            title: "AI & The Future of Work",
            url: "https://www.ted.com/talks/kai_fu_lee_how_ai_can_save_our_humanity",
            image: "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/248cfa0b-0442-4e48-8df2-06830a68f001/KaiFuLee_2018-embed.jpg",
            desc: "How AI can save our humanity - Kai-Fu Lee",
            icon: Cpu
        }

    },
    {
        id: 1,
        date: "2026.01.30 • Fri",
        title: "일어나 걸으라",
        subtitle: "Rise and Walk: 오늘의 희망과 좌절, 그리고 기적",
        themeChip: "Parenting Wisdom",
        morning: {
            title: "희망의 눈으로: \"우리를 보라\"",
            content: "아침 해가 떠오르듯, 우리 아이들도 매일 새로운 가능성으로 눈을 뜹니다. 어제의 실수나 부족함은 간밤의 어둠과 함께 사라졌습니다.",
            quote: "\"베드로가 요한과 더불어 주목하여 이르되 우리를 보라 하니\" (행 3:4)",
            mission: "Mission: 아이를 깨울 때, \"너는 오늘 무엇이든 할 수 있어\"라는 믿음의 눈빛을 보내주세요.",
            icon: Sunrise,
            color: "orange"
        },
        noon: {
            title: "현실의 무게: \"왜 나는 안 될까?\"",
            content: "해가 중천에 뜨고 활동이 왕성해지면, 아이들은 현실의 벽에 부딪힙니다. 성적, 친구 관계, 뜻대로 되지 않는 꿈... \"남들은 다 잘 뛰는데, 왜 나만 걷지도 못할까?\"",
            quote: null,
            warning: "주의하세요: \"빨리 일어나! 남들은 벌써 저기 갔잖아.\" (비교와 재촉은 금물입니다)",
            icon: Sun,
            color: "blue"
        },
        evening: {
            title: "기적의 시작: \"일어나 걸으라\"",
            content: "은과 금은 내게 없으나 내게 있는 이것을 네게 주노니... 세상이 말하는 스펙(은과 금)이 없어서 좌절한 아이들에게, 진짜 필요한 건 부모의 따뜻한 손길(일어설 힘)입니다.",
            actionTitle: "오른손을 잡아 일으키세요",
            actionContent: "오늘 밤, 잠든 아이의 손을 잡고 조용히 기도하거나 말해주세요.\n\"네가 가진 것이 없어도, 너는 그 자체로 소중하단다.\"",
            icon: Moon,
            color: "indigo"
        },
        media: {
            title: "The Power of Yet (아직의 힘)",
            url: "https://www.ted.com/talks/carol_dweck_the_power_of_believing_that_you_can_improve",
            image: "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/770e0f6d-741c-4b53-9092-22441b8c3817/CarolDweck_2014S-embed.jpg",
            desc: "Carol Dweck • TED Talk",
            icon: PlayCircle
        }
    }
];

const Counseling: React.FC = () => {
    const [currentEntryIndex, setCurrentEntryIndex] = useState(0);
    const [theme, setTheme] = useState<'morning' | 'noon' | 'evening'>('morning');
    const [isTransitioning, setIsTransitioning] = useState(false);

    const entry = JOURNAL_ENTRIES[currentEntryIndex];

    // Scroll Observer for Theme Switching
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY < 400) {
                setTheme('morning');
            } else if (scrollY < 1000) {
                setTheme('noon');
            } else {
                setTheme('evening');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Theme Styles
    const getThemeStyles = () => {
        switch (theme) {
            case 'noon':
                return 'bg-[#E0F7FA] text-[#1D1D1F]';
            case 'evening':
                return 'bg-[#1e293b] text-white';
            case 'morning':
            default:
                return 'bg-[#Fdfbfb] text-[#1D1D1F]';
        }
    };

    const handlePrev = () => {
        if (currentEntryIndex < JOURNAL_ENTRIES.length - 1) {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentEntryIndex(prev => prev + 1);
                window.scrollTo(0, 0);
                setIsTransitioning(false);
            }, 300);
        }
    };

    const handleNext = () => {
        if (currentEntryIndex > 0) {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentEntryIndex(prev => prev - 1);
                window.scrollTo(0, 0);
                setIsTransitioning(false);
            }, 300);
        }
    };


    const shareContent = () => {
        if (navigator.share) {
            navigator.share({ title: `iCan Counseling - ${entry.title}`, text: entry.subtitle, url: window.location.href }).catch(console.error);
        } else {
            alert('Link copied to clipboard!');
        }
    };

    return (
        <div className={`min-h-screen transition-colors duration-700 ease-in-out ${getThemeStyles()}`}>

            {/* Navigation Bar (Floating) */}
            <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center gap-4">
                <button
                    onClick={handlePrev}
                    disabled={currentEntryIndex === JOURNAL_ENTRIES.length - 1}
                    className={`p-3 rounded-full backdrop-blur-md shadow-lg transition-all ${currentEntryIndex === JOURNAL_ENTRIES.length - 1
                            ? 'bg-gray-200/50 text-gray-400 cursor-not-allowed'
                            : 'bg-white/80 hover:scale-110 text-gray-800'
                        }`}
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="px-4 py-3 rounded-full bg-black/80 text-white backdrop-blur-md shadow-lg text-xs font-bold flex items-center">
                    JOURNAL {JOURNAL_ENTRIES.length - currentEntryIndex} / {JOURNAL_ENTRIES.length}
                </div>
                <button
                    onClick={handleNext}
                    disabled={currentEntryIndex === 0}
                    className={`p-3 rounded-full backdrop-blur-md shadow-lg transition-all ${currentEntryIndex === 0
                            ? 'bg-gray-200/50 text-gray-400 cursor-not-allowed'
                            : 'bg-white/80 hover:scale-110 text-gray-800'
                        }`}
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>


            <AnimatePresence mode='wait'>
                {!isTransitioning && (
                    <motion.div
                        key={entry.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Hero Section */}
                        <section className="pt-10 pb-20 px-6 text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className={`inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-white rounded-full ${entry.id === 2 ? 'bg-indigo-600' : 'bg-black'}`}>
                                    {entry.themeChip}
                                </span>
                                <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight word-keep-all">
                                    {entry.title}
                                </h1>
                                <p className={`text-lg md:text-xl font-medium word-keep-all px-4 ${theme === 'evening' ? 'text-gray-300' : 'text-gray-500'}`}>
                                    {entry.subtitle}
                                </p>
                                <p className="mt-2 text-sm opacity-60">{entry.date}</p>
                            </motion.div>
                        </section>

                        {/* Timeline Container */}
                        <div className="max-w-3xl mx-auto px-6 relative pb-40">
                            {/* Vertical Line */}
                            <div className={`absolute left-9 top-0 bottom-0 w-0.5 ${theme === 'evening' ? 'bg-gray-700' : 'bg-gray-200'}`}></div>

                            {/* 1. Morning */}
                            <motion.div
                                className="relative pl-12 mb-32"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ margin: "-20%" }}
                            >
                                <div className="absolute left-0 top-0 w-10 h-10 bg-white border rounded-full flex items-center justify-center shadow-sm z-10 transition-colors">
                                    <entry.morning.icon className={`w-5 h-5 text-${entry.morning.color}-500`} />
                                </div>
                                <div className={`p-8 rounded-3xl shadow-sm border backdrop-blur-md transition-all ${theme === 'evening' ? 'bg-white/10 border-white/10' : 'bg-white/80 border-white/60'}`}>
                                    <div className={`text-xs font-bold text-${entry.morning.color}-500 tracking-widest mb-2`}>MORNING</div>
                                    <h2 className="text-2xl font-bold mb-4 word-keep-all">{entry.morning.title}</h2>
                                    <p className="leading-relaxed opacity-90 mb-4 word-keep-all">
                                        {entry.morning.content}
                                    </p>
                                    {entry.morning.quote && (
                                        <blockquote className={`border-l-4 border-${entry.morning.color}-400 pl-4 italic opacity-70 word-keep-all`}>
                                            "{entry.morning.quote}"
                                        </blockquote>
                                    )}
                                    <div className={`mt-4 p-4 bg-${entry.morning.color}-50 rounded-xl text-${entry.morning.color}-900 text-sm font-medium word-keep-all`}>
                                        {entry.morning.mission}
                                    </div>
                                </div>
                            </motion.div>

                            {/* 2. Noon */}
                            <motion.div
                                className="relative pl-12 mb-32"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ margin: "-20%" }}
                            >
                                <div className="absolute left-0 top-0 w-10 h-10 bg-white border rounded-full flex items-center justify-center shadow-sm z-10">
                                    <entry.noon.icon className={`w-5 h-5 text-${entry.noon.color}-500`} />
                                </div>
                                <div className={`p-8 rounded-3xl shadow-sm border backdrop-blur-md transition-all ${theme === 'evening' ? 'bg-white/10 border-white/10' : 'bg-white/80 border-white/60'}`}>
                                    <div className={`text-xs font-bold text-${entry.noon.color}-500 tracking-widest mb-2`}>NOON</div>
                                    <h2 className="text-2xl font-bold mb-4 word-keep-all">{entry.noon.title}</h2>
                                    <p className="leading-relaxed opacity-90 mb-4 word-keep-all">
                                        {entry.noon.content}
                                    </p>
                                    {entry.noon.quote && (
                                        <blockquote className="border-l-4 border-blue-400 pl-4 italic opacity-70 mb-4 word-keep-all">
                                            "{entry.noon.quote}"
                                        </blockquote>
                                    )}
                                    {entry.noon.warning && (
                                        <p className="opacity-80 text-sm word-keep-all">
                                            {entry.noon.warning}
                                        </p>
                                    )}
                                </div>
                            </motion.div>

                            {/* 3. Evening */}
                            <motion.div
                                className="relative pl-12 mb-20"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ margin: "-20%" }}
                            >
                                <div className="absolute left-0 top-0 w-10 h-10 bg-indigo-900 border border-indigo-700 rounded-full flex items-center justify-center shadow-sm z-10">
                                    <entry.evening.icon className="w-5 h-5 text-indigo-300" />
                                </div>
                                <div className={`p-8 rounded-3xl shadow-xl border ${theme === 'evening' ? 'bg-indigo-900/50 border-indigo-500/30' : 'bg-indigo-900 text-white'}`}>
                                    <div className="text-xs font-bold text-indigo-300 tracking-widest mb-2">EVENING</div>
                                    <h2 className="text-2xl font-bold mb-4 text-white word-keep-all">{entry.evening.title}</h2>
                                    <p className="leading-relaxed text-indigo-100 mb-6 word-keep-all">
                                        {entry.evening.content}
                                    </p>

                                    {/* Action Card */}
                                    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-2xl text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
                                        <div className="flex items-center gap-2 mb-3 opacity-90">
                                            <HeartHandshake className="w-5 h-5" />
                                            <span className="text-xs font-bold uppercase">{entry.id === 2 ? "Mom's Prayer" : "Tonight's Action"}</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 word-keep-all">{entry.evening.actionTitle}</h3>
                                        <p className="text-sm opacity-90 mb-4 whitespace-pre-line word-keep-all">
                                            {entry.evening.actionContent}
                                        </p>
                                        <button
                                            onClick={shareContent}
                                            className="w-full bg-white text-indigo-600 font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-opacity-90 transition"
                                        >
                                            <Share2 className="w-4 h-4" />
                                            Share with Parents
                                        </button>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Media Section */}
                            <div className="pl-12">
                                <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${theme === 'evening' ? 'text-white' : 'text-gray-900'}`}>
                                    <entry.media.icon className="text-red-500" /> Recommended Watch
                                </h3>
                                <a
                                    href={entry.media.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block group relative overflow-hidden rounded-2xl shadow-lg aspect-video bg-black"
                                >
                                    <img
                                        src={entry.media.image}
                                        alt={entry.media.desc}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                                    />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                                        <div className="bg-white/20 backdrop-blur-md p-4 rounded-full mb-3 group-hover:scale-110 transition-transform">
                                            <PlayCircle className="w-8 h-8 text-white fill-current" />
                                        </div>
                                        <span className="text-white font-bold text-lg drop-shadow-md word-keep-all">{entry.media.title}</span>
                                        <span className="text-white/80 text-sm">{entry.media.desc}</span>
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-black/50 px-2 py-1 rounded text-xs text-white font-mono flex items-center gap-1">
                                        Watch Video <ExternalLink className="w-3 h-3" />
                                    </div>
                                </a>
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Counseling;
