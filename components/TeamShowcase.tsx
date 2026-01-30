import React from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import teamImg from '../src/assets/ican_team_panorama.png';

const TeamShowcase: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-4 mt-8 mb-16 relative z-10"
        >
            <div className="relative group">
                {/* Glow Effect - Subtle */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-amber-200 rounded-[2rem] blur opacity-30"></div>

                {/* Card Container */}
                <div className="relative bg-white border border-gray-100 rounded-[1.8rem] shadow-2xl overflow-hidden p-1.5">

                    {/* Image Area - Sharp & Clear (Wider 32:9 Ratio) */}
                    <div className="aspect-[32/9] w-full bg-gray-50 rounded-2xl overflow-hidden relative">
                        <img
                            src={teamImg}
                            alt="Collaboration between Virtual AI Team and Human Education Experts"
                            className="w-full h-full object-cover object-center"
                            loading="eager"
                        />

                        {/* Gradient Overlay for Text Visibility */}
                        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"></div>

                        {/* Vision Text Overlay (On the Picture) */}
                        <div className="absolute bottom-6 left-0 right-0 px-6 text-center z-20">
                            <h4 className="text-white text-lg md:text-xl font-bold mb-2 drop-shadow-lg">
                                "가상과 현실의 완벽한 융합"
                            </h4>
                            <p className="text-white/90 text-xs md:text-sm font-medium leading-relaxed max-w-4xl mx-auto drop-shadow-md keep-all mb-4">
                                왼쪽의 은은한 홀로그램 AI 에이전트팀과 오른쪽의 든든한 현실 전문가들이, 투명한 벽 하나 없는 한 공간에서 가장 자연스럽게 어우러지는 모습입니다.
                                <br className="hidden md:block" />
                                아이캔이 꿈꾸는 교육의 미래, 기술과 사람이 만나 더 선한 가치를 창조하는 따뜻한 비전이 이 한 장의 파노라마에 담겼습니다.
                            </p>

                            {/* Team Roster */}
                            <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 text-[10px] md:text-xs text-blue-100 font-medium tracking-wide opacity-90">
                                <span className="bg-blue-900/40 px-3 py-1 rounded-full border border-blue-500/30 backdrop-blur-sm">
                                    <span className="text-blue-300 font-bold mr-1">Virtual Team:</span> Paul Sam, Bezaleel, Stephen, Timothy, Dr. iCAN
                                </span>
                                <span className="bg-amber-900/40 px-3 py-1 rounded-full border border-amber-500/30 backdrop-blur-sm">
                                    <span className="text-amber-300 font-bold mr-1">Field Experts:</span> Moon-sik, Edward, Esra, Min
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default TeamShowcase;
