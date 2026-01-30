
import React, { useEffect, useState } from 'react';
import { Share2, Sun, Sunset, Moon, Sunrise, PlayCircle, HeartHandshake, CheckCircle, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Counseling: React.FC = () => {
    const [theme, setTheme] = useState<'morning' | 'noon' | 'evening'>('morning');

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
                return 'bg-[#E0F7FA] text-[#1D1D1F]'; // Light Blue
            case 'evening':
                return 'bg-[#1e293b] text-white'; // Dark Blue/Slate
            case 'morning':
            default:
                return 'bg-[#Fdfbfb] text-[#1D1D1F]'; // White/Warm
        }
    };

    const shareContent = () => {
        const textToShare = "일어나 걸으라: 학부모 상담 일지 - iCan Ortigas";
        if (navigator.share) {
            navigator.share({ title: 'iCan Counseling', text: textToShare, url: window.location.href }).catch(console.error);
        } else {
            alert('Link copied to clipboard!');
            // In a real app, copy to clipboard logic here
        }
    };

    return (
        <div className={`min-h-screen transition-colors duration-700 ease-in-out ${getThemeStyles()}`}>

            {/* Hero Section */}
            <section className="pt-10 pb-20 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-white bg-black rounded-full">
                        Parenting Wisdom
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
                        일어나 걸으라
                    </h1>
                    <p className={`text-lg md:text-xl font-medium ${theme === 'evening' ? 'text-gray-300' : 'text-gray-500'}`}>
                        Rise and Walk: 오늘의 희망과 좌절, 그리고 기적
                    </p>
                    <p className="mt-2 text-sm opacity-60">2026.01.30 • Fri</p>
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
                    <div className="absolute left-0 top-0 w-10 h-10 bg-white border rounded-full flex items-center justify-center shadow-sm z-10">
                        <Sunrise className="w-5 h-5 text-orange-500" />
                    </div>
                    <div className={`p-8 rounded-3xl shadow-sm border backdrop-blur-md ${theme === 'evening' ? 'bg-white/10 border-white/10' : 'bg-white/80 border-white/60'}`}>
                        <div className="text-xs font-bold text-orange-500 tracking-widest mb-2">MORNING</div>
                        <h2 className="text-2xl font-bold mb-4">희망의 눈으로: "우리를 보라"</h2>
                        <p className="leading-relaxed opacity-90 mb-4">
                            아침 해가 떠오르듯, 우리 아이들도 매일 새로운 가능성으로 눈을 뜹니다.
                            어제의 실수나 부족함은 간밤의 어둠과 함께 사라졌습니다.
                        </p>
                        <blockquote className="border-l-4 border-orange-400 pl-4 italic opacity-70">
                            "베드로가 요한과 더불어 주목하여 이르되 우리를 보라 하니" (행 3:4)
                        </blockquote>
                        <div className="mt-4 p-4 bg-orange-50 rounded-xl text-orange-800 text-sm font-medium">
                            🌱 <strong>Mission:</strong> 아이를 깨울 때, "너는 오늘 무엇이든 할 수 있어"라는 믿음의 눈빛을 보내주세요.
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
                        <Sun className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className={`p-8 rounded-3xl shadow-sm border backdrop-blur-md ${theme === 'evening' ? 'bg-white/10 border-white/10' : 'bg-white/80 border-white/60'}`}>
                        <div className="text-xs font-bold text-blue-500 tracking-widest mb-2">NOON</div>
                        <h2 className="text-2xl font-bold mb-4">현실의 무게: "왜 나는 안 될까?"</h2>
                        <p className="leading-relaxed opacity-90 mb-4">
                            해가 중천에 뜨고 활동이 왕성해지면, 아이들은 현실의 벽에 부딪힙니다.
                            성적, 친구 관계, 뜻대로 되지 않는 꿈...
                        </p>
                        <div className="bg-blue-50/50 p-4 rounded-xl mb-4">
                            <p className="font-semibold text-blue-900">"남들은 다 잘 뛰는데, 왜 나만 걷지도 못할까?"</p>
                        </div>
                        <p className="opacity-80 text-sm">
                            ⚠️ <strong>주의하세요:</strong> "빨리 일어나! 남들은 벌써 저기 갔잖아." (비교와 재촉은 금물입니다)
                        </p>
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
                        <Moon className="w-5 h-5 text-indigo-300" />
                    </div>
                    <div className={`p-8 rounded-3xl shadow-xl border ${theme === 'evening' ? 'bg-indigo-900/50 border-indigo-500/30' : 'bg-indigo-900 text-white'}`}>
                        <div className="text-xs font-bold text-indigo-300 tracking-widest mb-2">EVENING</div>
                        <h2 className="text-2xl font-bold mb-4 text-white">기적의 시작: "일어나 걸으라"</h2>
                        <p className="leading-relaxed text-indigo-100 mb-6">
                            은과 금은 내게 없으나 내게 있는 이것을 네게 주노니...
                            세상이 말하는 스펙(은과 금)이 없어서 좌절한 아이들에게, 진짜 필요한 건 부모의 따뜻한 손길(일어설 힘)입니다.
                        </p>

                        {/* Action Card */}
                        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-2xl text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="flex items-center gap-2 mb-3 opacity-90">
                                <HeartHandshake className="w-5 h-5" />
                                <span className="text-xs font-bold uppercase">Tonight's Action</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">오른손을 잡아 일으키세요</h3>
                            <p className="text-sm opacity-90 mb-4">
                                오늘 밤, 잠든 아이의 손을 잡고 조용히 기도하거나 말해주세요.<br />
                                "네가 가진 것이 없어도, 너는 그 자체로 소중하단다."
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
                        <PlayCircle className="text-red-500" /> Recommended Watch
                    </h3>
                    <a
                        href="https://www.ted.com/talks/carol_dweck_the_power_of_believing_that_you_can_improve"
                        target="_blank"
                        rel="noreferrer"
                        className="block group relative overflow-hidden rounded-2xl shadow-lg aspect-video bg-black"
                    >
                        <img
                            src="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/770e0f6d-741c-4b53-9092-22441b8c3817/CarolDweck_2014S-embed.jpg"
                            alt="Carol Dweck TED Talk"
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                            <div className="bg-white/20 backdrop-blur-md p-4 rounded-full mb-3 group-hover:scale-110 transition-transform">
                                <PlayCircle className="w-8 h-8 text-white fill-current" />
                            </div>
                            <span className="text-white font-bold text-lg drop-shadow-md">The Power of Yet (아직의 힘)</span>
                            <span className="text-white/80 text-sm">Carol Dweck • TED Talk</span>
                        </div>
                        <div className="absolute bottom-4 right-4 bg-black/50 px-2 py-1 rounded text-xs text-white font-mono flex items-center gap-1">
                            Watch Video <ExternalLink className="w-3 h-3" />
                        </div>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Counseling;
