
import React, { useEffect, useState } from 'react';
import { Share2, Sun, Sunset, Moon, Sunrise, PlayCircle, HeartHandshake, CheckCircle, ExternalLink, ChevronLeft, ChevronRight, BookOpen, Compass, Heart, Cpu, Hammer, Rocket, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Data Structure for Journal Entries ---
const JOURNAL_ENTRIES = [
    {
        id: 4,
        date: "2026.02.19 • Thu",
        title: "환골탈태(換骨脫胎): 두 개의 뇌를 장착하라",
        subtitle: "미들스쿨러의 위대한 전환: 고통스러운 적응인가, 확장인가?",
        themeChip: "Bilingual Brain",
        morning: {
            title: "지금 겪는 혼란은 '고장'이 아니라 '확장'입니다",
            content: "준혁(가명)이는 지금 혼란스럽습니다. 한국어로는 명확했던 개념들이 낯선 영어 옷을 입고 춤을 춥니다. 부모님, 걱정하지 마십시오. 이것은 '환골탈태(본질이 완전히 새로워짐)'의 시간입니다. 도교에서 신선이 되기 위해 뼈를 바꾸듯, 준혁이는 지금 한국어 뇌에서 '이중언어(Bilingual) 뇌'로 구조를 리모델링하고 있습니다. 고통스럽지만, 이 과정을 통과하면 준혁이는 남들이 볼 수 없는 '두 배 더 넓은 세상'을 보게 될 것입니다.",
            quote: "보라 내가 새 일을 행하리니 이제 나타낼 것이라 (사 43:19)",
            mission: "Mission: 아이가 영어 표현을 힘들어할 때, \"단어 몰라?\"라고 묻지 말고 \"네 머릿속에 있는 그 그림, 어떤 모양이니?\"라고 물어주세요.",
            icon: Target,
            color: "orange"
        },
        noon: {
            title: "건축가는 기초를 탓하지 않고 보강합니다",
            content: "국제학교 2년, 마음이 급해져서 어려운 단어만 외우게 하면 모래 위에 집을 짓는 격입니다. 아이캔의 해답은 '밸런싱(Balancing)'입니다. 맵테스트로 확인한 구멍 난 기초를 '퀵러닝'으로 메워야 합니다. 바울이 아덴에서 논쟁하기 위해 헬라 시와 철학을 깊이 팠듯, 준혁이에게 필요한 건 단순 회화가 아니라 '학습 도구로서의 문해력'입니다. 이 기초 공사 기간을 묵묵히 견뎌내는 힘, 그것이 바로 Grit(그릿)이고 회복탄력성입니다.",
            quote: null,
            warning: "주의하세요: \"한국에선 잘했는데 왜 여기선 못해?\" 과거의 영광은 독입니다. 지금은 '0'에서 다시 시작하는 용기가 필요한 때입니다.",
            icon: Hammer,
            color: "emerald"
        },
        evening: {
            title: "조음력(Articulation): 세상을 향해 쏘아 올리다",
            content: "영어를 잘한다는 것은 발음이 유창한 것이 아닙니다. 핵심은 '조음력(Articulation)'입니다. 내 안의 복잡한 생각과 감정을 상대가 이해하기 쉬운 논리로 구조화하여 전달하는 능력입니다. 이것이 없으면 AI 시대에 아무리 많은 지식을 가져도 소용이 없습니다. 준혁이는 이제 단순 답변을 넘어, 서술하고 묘사하며 자신의 논리를 증명하는 '크리티컬 씽킹'의 단계로 나아가야 합니다. 이것이 바로 닥터 아이캔이 지향하는 '우주적 사고'의 시작입니다.",
            actionTitle: "오늘의 기도: 환골탈태의 인내",
            actionContent: "잠든 아이의 머리맡에서 기도해주세요.\n\"주님, 우리 아이가 두 가지 언어라는 날개를 달고, 좁은 땅을 넘어 더 넓은 우주를 품는 아이가 되게 하소서. 뼈를 깎는 변화의 시간에 인내할 힘을 주소서.\"",
            icon: Rocket,
            color: "indigo"
        },
        media: {
            title: "이중언어 뇌의 이점 (The benefits of a bilingual brain)",
            url: "https://www.ted.com/talks/mia_nacamulli_the_benefits_of_a_bilingual_brain",
            image: "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/635336b9-f7c8-472d-9426-3a6f443574c3/MiaNacamulli_2015E-embed.jpg",
            desc: "Mia Nacamulli • TED-Ed",
            icon: PlayCircle
        }

    },
    {
        id: 3,
        date: "2026.02.12 • Thu",
        title: "거북이의 반란: 비대칭 전력(Asymmetric Power)",
        subtitle: "평균의 종말: AI와 함께 10배(10x) 더 높이 비상하라",
        themeChip: "Future Vision",
        morning: {
            title: "AI보다 빨리 읽으려 하지 마십시오",
            content: "오늘날 우리는 '광속의 시대'를 삽니다. 하지만 입력(Input)이 느리다는 것은, 역설적으로 '하나를 읽어도 멈춰 서서 곱씹는다'는 뜻입니다. AI가 1초에 수만 페이지를 읽는 시대에 속도 경쟁은 무의미합니다. 아이의 느린 읽기는 '뒤처짐'이 아니라 '깊이(Depth)'를 위한 거룩한 멈춤입니다.",
            quote: "내 은혜가 네게 족하도다 이는 내 능력이 약한 데서 온전하여짐이라 (고후 12:9)",
            mission: "Mission: 아이가 책을 읽다 멈칫거릴 때, \"왜 빨리 안 읽니?\" 대신 \"방금 읽은 장면을 네 말로 표현해줄래?\"라고 물어 아이의 강점(구어)을 켜주세요.",
            icon: Target,
            color: "orange"
        },
        noon: {
            title: "광야의 훈련: 나만의 무기 만들기",
            content: "태준(가명)이에게 글자는 감옥 같을 수 있습니다. 하지만 이 '미스매치'가 아이를 특별하게 만듭니다. 우리는 요행을 바라지 않습니다. 바울이 천막을 짓듯 기본기(해독/유창성)를 다지되, 남들과 똑같아지기 위함이 아닙니다. 남들이 갖지 못한 '비대칭 전력'을 기르기 위함입니다.",
            quote: null,
            warning: "주의하세요: \"옆집 애는 벌써 챕터북 읽는다던데...\" 비교의 말은 아이가 가진 고유한 무기를 녹슬게 합니다.",
            icon: Hammer,
            color: "emerald"
        },
        evening: {
            title: "평균의 종말: AI와 10x 업그레이드",
            content: "인공지능 시대는 '평균'이 설 자리가 없는 시대입니다. 자신의 부족함을 억지로 채워 평범해지려 하지 마십시오. AI의 인지적 지원(Cognitive Support)은 아이의 부족한 '읽기'를 채워주는 강력한 지팡이가 될 것입니다. 자신의 고유한 창의성에 AI 기술을 더해 인지 능력을 10배(10x) 확장하십시오. 그때 비로소 아이는 결핍을 넘어, 누구도 대체할 수 없는 '새로운 가능성'의 주인공이 될 것입니다.",
            actionTitle: "오늘의 기도: 10배의 비상",
            actionContent: "잠든 아이의 머리맡에서 기도해주세요.\n\"하나님, 우리 아이의 부족함이 AI라는 날개를 달고 10배 더 높이 비상하는 도약대가 되게 하소서.\"",
            icon: Rocket,
            color: "indigo"
        },
        media: {
            title: "약점이 강점이 되는 이유 (David and Goliath)",
            url: "https://www.ted.com/talks/malcolm_gladwell_the_unheard_story_of_david_and_goliath",
            image: "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/04902094-39cb-4ae0-90fe-7756f0821557/MalcolmGladwell_2013S-embed.jpg",
            desc: "Malcolm Gladwell • TED Talk",
            icon: PlayCircle
        }

    },
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
