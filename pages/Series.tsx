
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Star, Lock, PlayCircle, Calendar, ArrowRight, Rocket } from 'lucide-react';
import { WAYMAKER_SERIES } from '../constants';

const Series: React.FC = () => {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-indigo-500 selection:text-white overflow-hidden relative">

            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-[128px] animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[128px] animate-pulse delay-1000"></div>
            </div>

            {/* Navigation (Transparent) */}
            <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
                <Link to="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group">
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-bold tracking-widest text-xs">BACK TO HOME</span>
                </Link>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs font-bold text-green-400 tracking-widest">SERIES LIVE</span>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative z-10 pt-32 pb-20 px-6 text-center max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                        <Rocket className="w-3 h-3" />
                        Campaign 2026
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent transform scale-y-110">
                        THE WAYMAKER
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed word-keep-all">
                        불확실한 미래, 길이 보이지 않을 때<br />
                        <span className="text-white font-bold">아이캔 스페이스 캠프</span>가 <span className="text-indigo-400 font-bold">새로운 길(The Way)</span>을 제시합니다.
                    </p>
                </motion.div>
            </header>

            {/* Timeline Section */}
            <section className="relative z-10 max-w-4xl mx-auto px-6 pb-40">
                {/* Timeline Line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-900 to-transparent md:-translate-x-1/2"></div>

                <div className="space-y-24 md:space-y-32">
                    {WAYMAKER_SERIES.map((episode, index) => {
                        const isEven = index % 2 === 0;
                        const isPublished = episode.status === 'published';

                        return (
                            <motion.div
                                key={episode.step}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ margin: "-10%", once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
                                onMouseEnter={() => setHoveredStep(episode.step)}
                                onMouseLeave={() => setHoveredStep(null)}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-indigo-500 z-20 shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                                    {isPublished && <div className="absolute inset-0 bg-indigo-500 rounded-full animate-ping opacity-75"></div>}
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                                    <div className="group relative">
                                        <div className={`absolute -inset-4 bg-gradient-to-r ${isPublished ? 'from-indigo-500/10 to-purple-500/10' : 'from-gray-800/10 to-gray-900/10'} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>

                                        <div className="relative">
                                            <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:justify-end' : ''}`}>
                                                <span className={`text-sm font-bold tracking-widest ${isPublished ? 'text-indigo-400' : 'text-gray-600'}`}>
                                                    EPISODE 0{episode.step}
                                                </span>
                                                {isPublished ? (
                                                    <span className="px-2 py-0.5 text-[10px] font-bold bg-indigo-600 text-white rounded shadow-lg shadow-indigo-500/20">NOW PLAYING</span>
                                                ) : (
                                                    <span className="flex items-center gap-1 text-[10px] font-bold text-gray-500 border border-gray-800 px-2 py-0.5 rounded">
                                                        <Lock className="w-2.5 h-2.5" /> COMING SOON
                                                    </span>
                                                )}
                                            </div>

                                            <h2 className={`text-2xl md:text-3xl font-bold mb-3 leading-tight transition-colors duration-300 ${isPublished ? 'text-white group-hover:text-indigo-200' : 'text-gray-600'}`}>
                                                {episode.title}
                                            </h2>

                                            <p className={`text-sm md:text-base mb-4 font-medium ${isPublished ? 'text-indigo-300' : 'text-gray-700'}`}>
                                                {episode.subtitle}
                                            </p>

                                            <p className={`text-sm leading-relaxed mb-6 line-clamp-3 ${isPublished ? 'text-gray-400' : 'text-gray-800'}`}>
                                                {episode.summary}
                                            </p>

                                            <div className={`flex items-center gap-4 ${isEven ? 'md:justify-end' : ''}`}>
                                                {isPublished ? (
                                                    <Link to={episode.link} className="inline-flex items-center gap-2 bg-white text-black font-bold text-sm px-6 py-3 rounded-full hover:bg-indigo-50 transition-colors shadow-lg shadow-indigo-900/20 group-hover:shadow-indigo-500/30">
                                                        <PlayCircle className="w-4 h-4" />
                                                        지금 읽기
                                                    </Link>
                                                ) : (
                                                    <div className="inline-flex items-center gap-2 text-gray-600 text-sm font-medium cursor-not-allowed">
                                                        <Calendar className="w-4 h-4" />
                                                        {episode.date}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Date/Visual Decoration (Opposite Side) */}
                                <div className={`hidden md:block w-5/12 ${isEven ? 'text-left pl-12' : 'text-right pr-12'} pt-2`}>
                                    <span className="text-6xl font-black text-gray-900 select-none opacity-50 font-['Oswald']">
                                        0{episode.step}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Footer Sign-off */}
            <footer className="relative z-10 py-20 text-center border-t border-gray-900">
                <p className="text-gray-500 text-sm mb-4">ROY HOUSE CAMPAIGN</p>
                <div className="flex justify-center items-center gap-2 text-white font-bold tracking-widest text-lg">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    BE A WAYMAKER
                </div>
            </footer>
        </div>
    );
};

export default Series;
