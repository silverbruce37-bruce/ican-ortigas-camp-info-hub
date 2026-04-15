
import React, { useEffect, useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { 
    Share2, Sun, Sunset, Moon, Sunrise, PlayCircle, HeartHandshake, 
    ExternalLink, ChevronLeft, ChevronRight, BookOpen, Compass, 
    Heart, Cpu, Hammer, Rocket, Target, List, HelpCircle 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import JOURNAL_ENTRIES_RAW from '../src/data/counseling.json';

// --- Data Structure for Journal Entries ---
const JOURNAL_ENTRIES = JOURNAL_ENTRIES_RAW as any[];

const IconMapper = (name: string) => (LucideIcons as any)[name] || LucideIcons.HelpCircle;

const Counseling: React.FC = () => {
    const [currentEntryIndex, setCurrentEntryIndex] = useState(0);
    const [theme, setTheme] = useState<'morning' | 'noon' | 'evening'>('morning');
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isIndexOpen, setIsIndexOpen] = useState(false);

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

    const handleJumpToEntry = (index: number) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentEntryIndex(index);
            window.scrollTo(0, 0);
            setIsTransitioning(false);
            setIsIndexOpen(false);
        }, 300);
    };

    const JournalIndex = () => (
        <div className={`fixed right-0 top-16 bottom-0 w-80 z-30 transform transition-transform duration-500 ease-in-out ${isIndexOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'} ${theme === 'evening' ? 'bg-[#0f172a]/90 text-white' : 'bg-white/90 text-[#1D1D1F]'} backdrop-blur-xl border-l ${theme === 'evening' ? 'border-white/10' : 'border-gray-200'} overflow-y-auto hidden lg:block shadow-2xl`}>
            <div className="p-6">
                <h3 className="text-xs font-black tracking-[0.2em] uppercase mb-8 opacity-50">Timeline Index</h3>
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-pink-500/50" />

                    <div className="space-y-6">
                        {JOURNAL_ENTRIES.map((item, idx) => (
                            <button
                                key={item.id}
                                onClick={() => handleJumpToEntry(idx)}
                                className={`relative pl-8 text-left group transition-all w-full ${currentEntryIndex === idx ? 'opacity-100 scale-105' : 'opacity-40 hover:opacity-80'}`}
                            >
                                <div className={`absolute left-0 top-1.5 w-5 h-5 rounded-full border-4 flex items-center justify-center transition-all ${currentEntryIndex === idx ? 'bg-indigo-500 border-indigo-200' : 'bg-white border-gray-300 group-hover:border-indigo-300'}`}>
                                    {currentEntryIndex === idx && <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] font-bold tracking-wider opacity-60 font-mono italic">
                                        {item.date.split(' • ')[0]}
                                    </span>
                                    <span className={`text-xs font-bold leading-tight line-clamp-2 ${currentEntryIndex === idx ? 'text-indigo-500' : ''}`}>
                                        {item.title.replace(/\[.*?\]\s*/, '')}
                                    </span>
                                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full w-fit ${theme === 'evening' ? 'bg-white/10' : 'bg-gray-100'} font-bold`}>
                                        {item.themeChip}
                                    </span>
                                </div>
                                {currentEntryIndex === idx && (
                                    <div className="absolute -left-12 top-0 bottom-0 flex items-center">
                                        <div className="h-0.5 w-8 bg-indigo-500/30" />
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const MobileToggle = () => (
        <button
            onClick={() => setIsIndexOpen(!isIndexOpen)}
            className={`fixed top-4 right-16 z-50 p-2 rounded-xl backdrop-blur-md lg:hidden transition-all ${isIndexOpen ? 'bg-red-500 text-white' : theme === 'evening' ? 'bg-white/10 text-white' : 'bg-black/5 text-gray-900'}`}
        >
            <List className="w-5 h-5" />
        </button>
    );

    const MobileDrawer = () => (
        <AnimatePresence>
            {isIndexOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsIndexOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
                    />
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className={`fixed right-0 top-0 bottom-0 w-[85%] max-w-sm z-[70] p-8 overflow-y-auto lg:hidden ${theme === 'evening' ? 'bg-[#0f172a] text-white' : 'bg-white text-[#1D1D1F]'}`}
                    >
                        <div className="flex justify-between items-center mb-10">
                            <h3 className="text-sm font-black tracking-widest uppercase opacity-40">INDEX</h3>
                            <button onClick={() => setIsIndexOpen(false)} className="text-xs font-bold opacity-60">CLOSE</button>
                        </div>
                        <div className="space-y-8 relative">
                            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-200/20" />
                            {JOURNAL_ENTRIES.map((item, idx) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleJumpToEntry(idx)}
                                    className={`relative pl-8 text-left w-full transition-all ${currentEntryIndex === idx ? 'scale-105' : 'opacity-60'}`}
                                >
                                    <div className={`absolute left-0 top-1 w-4 h-4 rounded-full border-2 ${currentEntryIndex === idx ? 'bg-indigo-500 border-indigo-200' : 'bg-gray-300 border-transparent'}`} />
                                    <div className="flex flex-col gap-1.5">
                                        <span className="text-[10px] font-bold opacity-50 font-mono italic">{item.date}</span>
                                        <span className={`text-sm font-bold leading-tight ${currentEntryIndex === idx ? 'text-indigo-400' : ''}`}>{item.title}</span>
                                        <span className={`text-[10px] px-2 py-0.5 rounded-md w-fit bg-indigo-500/10 text-indigo-400 font-bold`}>{item.themeChip}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );

    // Dynamic Icons via IconMapper
    const MorningIcon = IconMapper(entry.morning.icon);
    const NoonIcon = IconMapper(entry.noon.icon);
    const EveningIcon = IconMapper(entry.evening.icon);
    const MediaIcon = IconMapper(entry.media.icon);

    return (
        <div className={`min-h-screen transition-colors duration-700 ease-in-out ${getThemeStyles()}`}>

            {/* Top Navigation Bar for Counseling Page */}
            <div className={`fixed top-0 left-0 right-0 z-40 p-4 flex justify-between items-center transition-colors duration-500 ${theme === 'evening' ? 'text-white bg-black/50 backdrop-blur-md' : 'text-gray-900 bg-white/50 backdrop-blur-md'}`}>
                <a href="/" className="flex items-center gap-2 font-bold hover:opacity-70 transition-opacity">
                    <ChevronLeft className="w-5 h-5" />
                    <span className="text-sm">BACK TO HOME</span>
                </a>
                <div className="flex gap-4 text-xs font-semibold opacity-70">
                    <span className="hidden md:inline">COUNSELING JOURNAL</span>
                </div>
            </div>

            <MobileToggle />
            <MobileDrawer />
            <JournalIndex />

            {/* Navigation Bar (Floating - Bottom) */}
            <div className="fixed bottom-8 left-0 right-0 lg:right-80 z-50 flex justify-center gap-4 transition-all duration-500">
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
                        className="lg:mr-80 transition-all duration-500"
                    >
                        {/* Waymaker Series Banner */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="pt-24 px-6 md:px-0 max-w-3xl mx-auto mb-8"
                        >
                            <a href="/series" className="block relative overflow-hidden rounded-3xl bg-[#0f1014] border border-gray-800 shadow-2xl group hover:border-gray-600 transition-colors">
                                {/* Stars / Space Effect Background */}
                                <div className="absolute inset-0">
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 animate-pulse"></div>
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-900/20 rounded-full blur-3xl filter mix-blend-screen"></div>
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-900/20 rounded-full blur-3xl filter mix-blend-screen"></div>
                                </div>

                                <div className="relative p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div className="flex items-start md:items-center gap-5">
                                        <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg ring-4 ring-white/5">
                                            <Rocket className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="text-left">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-[10px] font-bold text-indigo-400 tracking-[0.2em] uppercase border border-indigo-500/30 px-2 py-0.5 rounded-full bg-indigo-500/10">New Campaign</span>
                                            </div>
                                            <h3 className="text-2xl font-black text-white tracking-tight mb-1">The Waymaker Series</h3>
                                            <p className="text-gray-400 text-sm font-medium">불확실한 미래, 아이캔이 새로운 길을 제시합니다</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-white font-bold text-sm bg-white/10 pr-3 pl-5 py-3 rounded-full backdrop-blur-md group-hover:bg-white/20 transition-all group-hover:pr-2">
                                        우주 정거장 입장 <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </a>
                        </motion.div>

                        {/* Hero Section */}
                        <section className="pt-4 pb-12 px-6 text-center">
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
                                    <MorningIcon className={`w-5 h-5 text-${entry.morning.color}-500`} />
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
                                    <NoonIcon className={`w-5 h-5 text-${entry.noon.color}-500`} />
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
                                    <EveningIcon className="w-5 h-5 text-indigo-300" />
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
                                    <MediaIcon className="text-red-500" /> Recommended Watch
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
