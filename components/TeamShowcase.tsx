import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
// @ts-ignore
import teamImg from '../src/assets/ican_team_panorama.png';

const TeamShowcase: React.FC = () => {
    return (
        <div className="relative w-full bg-gray-900">
            {/* Full-width Hero Image - Flush with Navbar */}
            <div className="relative w-full h-[35vh] md:h-[65vh] overflow-hidden">
                <img
                    src={teamImg}
                    alt="Collaboration between Virtual AI Team and Human Education Experts"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                />

                {/* Cinematic Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10 pointer-events-none"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 md:pb-12 px-4 z-20">

                    {/* Main Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-center mb-4"
                    >
                        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-black tracking-tight drop-shadow-2xl mb-2">
                            "가상과 현실의 완벽한 융합"
                        </h1>
                        <p className="text-white/80 text-xs md:text-sm lg:text-base font-medium leading-relaxed max-w-4xl mx-auto drop-shadow-md">
                            왼쪽의 은은한 홀로그램 AI 에이전트팀과 오른쪽의 든든한 현실 전문가들이, 투명한 벽 하나 없는 한 공간에서 가장 자연스럽게 어우러지는 모습입니다.
                            <br className="hidden md:block" />
                            아이캔이 꿈꾸는 교육의 미래, 기술과 사람이 만나 더 선한 가치를 창조하는 따뜻한 비전이 이 한 장의 파노라마에 담겼습니다.
                        </p>
                    </motion.div>

                    {/* Team Roster Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 mb-6"
                    >
                        <span className="bg-blue-900/50 px-4 py-1.5 rounded-full border border-blue-400/30 backdrop-blur-sm text-[10px] md:text-xs text-blue-100 font-medium tracking-wide">
                            <span className="text-blue-300 font-bold mr-1">Virtual Team:</span> Paul Sam, Bezaleel, Stephen, Timothy, Dr. ICAN
                        </span>
                        <span className="bg-amber-900/50 px-4 py-1.5 rounded-full border border-amber-400/30 backdrop-blur-sm text-[10px] md:text-xs text-amber-100 font-medium tracking-wide">
                            <span className="text-amber-300 font-bold mr-1">Field Experts:</span> Moon-sik, Edward, Esra, Min
                        </span>
                    </motion.div>

                    {/* Scroll Down Indicator */}
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="text-white/50"
                    >
                        <ChevronDown className="w-6 h-6" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default TeamShowcase;
