import React from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import teamImg from '../ican_new_dream_team.png';

const TeamShowcase: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto px-4 mt-8 mb-16 relative z-10"
        >
            <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

                {/* Card Container */}
                <div className="relative bg-white border border-gray-100 rounded-[1.8rem] shadow-xl overflow-hidden p-2">

                    {/* Header / Title Overlay */}
                    <div className="absolute top-6 left-0 right-0 z-20 text-center pointer-events-none">
                        <span className="inline-block py-1 px-3 rounded-full bg-black/5 backdrop-blur-sm border border-black/5 text-[10px] font-bold tracking-widest text-gray-800 mb-2">
                            SPACE ORIENTEERING SQUAD
                        </span>
                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight drop-shadow-sm">
                            Dr. iCAN & THE DREAM TEAM
                        </h3>
                    </div>

                    {/* Image Area */}
                    <div className="aspect-[2.35/1] w-full bg-gray-50 rounded-2xl overflow-hidden relative">
                        <img
                            src={teamImg}
                            alt="iCAN Dream Team Collaboration"
                            className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                        />

                        {/* Gradient Overlay for Text Visibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-white/0 pointer-events-none"></div>

                        {/* Team Roles Legend (6-Grid for Real Human Experts + AI) */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 grid grid-cols-3 md:grid-cols-6 gap-2 text-center text-white">
                            {/* 1. Paul Sam */}
                            <div className="flex flex-col items-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-0">
                                <div className="h-1 w-8 bg-yellow-400 rounded-full mb-1 shadow-[0_0_8px_rgba(250,204,21,0.6)]"></div>
                                <p className="font-bold text-xs md:text-sm text-yellow-300">Paul Sam</p>
                                <p className="text-[8px] md:text-[10px] opacity-80 uppercase font-semibold">Conductor</p>
                            </div>
                            {/* 2. Dr. iCAN */}
                            <div className="flex flex-col items-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                <div className="h-1 w-8 bg-cyan-400 rounded-full mb-1 shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>
                                <p className="font-bold text-xs md:text-sm text-cyan-300">Dr. iCAN</p>
                                <p className="text-[8px] md:text-[10px] opacity-80 uppercase font-semibold">AI System</p>
                            </div>
                            {/* 3. Edward */}
                            <div className="flex flex-col items-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                                <div className="h-1 w-8 bg-blue-500 rounded-full mb-1 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                                <p className="font-bold text-xs md:text-sm text-blue-300">Edward</p>
                                <p className="text-[8px] md:text-[10px] opacity-80 uppercase font-semibold">CTO / AI Exp</p>
                            </div>
                            {/* 4. Esra */}
                            <div className="flex flex-col items-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                                <div className="h-1 w-8 bg-pink-500 rounded-full mb-1 shadow-[0_0_8px_rgba(236,72,153,0.6)]"></div>
                                <p className="font-bold text-xs md:text-sm text-pink-300">Esra</p>
                                <p className="text-[8px] md:text-[10px] opacity-80 uppercase font-semibold">IT / DATA Lead</p>
                            </div>
                            {/* 5. Min */}
                            <div className="flex flex-col items-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-300">
                                <div className="h-1 w-8 bg-green-500 rounded-full mb-1 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                                <p className="font-bold text-xs md:text-sm text-green-300">Min</p>
                                <p className="text-[8px] md:text-[10px] opacity-80 uppercase font-semibold">Curriculum Dir</p>
                            </div>
                            {/* 6. Moon-sik */}
                            <div className="flex flex-col items-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-300">
                                <div className="h-1 w-8 bg-purple-500 rounded-full mb-1 shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>
                                <p className="font-bold text-xs md:text-sm text-purple-300">Moon-sik</p>
                                <p className="text-[8px] md:text-[10px] opacity-80 uppercase font-semibold">Multimedia CEO</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Caption */}
                <div className="text-center mt-4 px-4">
                    <p className="text-xs text-gray-500 font-medium">
                        "Since Dec 2024: Developing the 'Space Orienteering' AI Education System based on 20 years of expertise."
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default TeamShowcase;
