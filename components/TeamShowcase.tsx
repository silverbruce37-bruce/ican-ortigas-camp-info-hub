import React from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import teamImg from '../ican_team_24_9.png';

const TeamShowcase: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto px-4 mt-8 mb-16 relative z-10"
        >
            <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-amber-500 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

                {/* Card Container */}
                <div className="relative bg-white border border-gray-100 rounded-[1.8rem] shadow-xl overflow-hidden p-2">

                    {/* Header / Title Overlay */}
                    <div className="absolute top-6 left-0 right-0 z-20 text-center pointer-events-none">
                        <span className="inline-block py-1 px-3 rounded-full bg-black/5 backdrop-blur-sm border border-black/5 text-[10px] font-bold tracking-widest text-gray-800 mb-2">
                            VIRTUAL INTELLIGENCE  ×  HUMAN EXPERTISE
                        </span>
                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight drop-shadow-sm flex justify-center items-center gap-2">
                            <span className="text-blue-600">AI VIRTUAL TEAM</span>
                            <span className="text-gray-300">|</span>
                            <span className="text-amber-600">FIELD EXPERTS</span>
                        </h3>
                    </div>

                    {/* Image Area */}
                    <div className="aspect-[24/9] w-full bg-gray-50 rounded-2xl overflow-hidden relative">
                        <img
                            src={teamImg}
                            alt="Collaboration between Virtual AI Team (Paul Sam, Bezaleel, Stephen, Timothy, Dr. iCAN) and Human Experts"
                            className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                        />

                        {/* Gradient Overlay for Text Visibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-white/0 pointer-events-none"></div>

                        {/* Team Roles Legend (Split Layout) */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white grid grid-cols-2 gap-4 md:gap-8">

                            {/* LEFT: Virtual Team (5 Members) */}
                            <div className="border-r border-white/20 pr-4">
                                <h4 className="text-[10px] uppercase font-bold text-blue-300 mb-3 tracking-widest text-right md:text-center border-b border-blue-500/30 pb-1">Virtual Command Center</h4>
                                <div className="grid grid-cols-5 gap-1 md:gap-2">
                                    <div className="text-center group/member">
                                        <div className="h-1 w-full bg-cyan-400 rounded-full mb-1 opacity-50 group-hover/member:opacity-100"></div>
                                        <p className="font-bold text-[9px] md:text-xs text-cyan-200">Bezaleel</p>
                                        <p className="text-[7px] md:text-[8px] opacity-60">Design</p>
                                    </div>
                                    <div className="text-center group/member">
                                        <div className="h-1 w-full bg-indigo-500 rounded-full mb-1 opacity-50 group-hover/member:opacity-100"></div>
                                        <p className="font-bold text-[9px] md:text-xs">Stephen</p>
                                        <p className="text-[7px] md:text-[8px] opacity-60">Analyst</p>
                                    </div>
                                    <div className="text-center group/member">
                                        <div className="h-1 w-full bg-sky-500 rounded-full mb-1 opacity-50 group-hover/member:opacity-100"></div>
                                        <p className="font-bold text-[9px] md:text-xs">Timothy</p>
                                        <p className="text-[7px] md:text-[8px] opacity-60">Assistant</p>
                                    </div>
                                    <div className="text-center group/member">
                                        <div className="h-1 w-full bg-blue-500 rounded-full mb-1 opacity-50 group-hover/member:opacity-100"></div>
                                        <p className="font-bold text-[9px] md:text-xs">Dr. iCAN</p>
                                        <p className="text-[7px] md:text-[8px] opacity-60">AI Sys</p>
                                    </div>
                                    <div className="text-center group/member">
                                        <div className="h-1 w-full bg-yellow-400 rounded-full mb-1 opacity-100 shadow-[0_0_8px_rgba(250,204,21,0.8)]"></div>
                                        <p className="font-bold text-[9px] md:text-xs text-yellow-300">Paul Sam</p>
                                        <p className="text-[7px] md:text-[8px] opacity-80 font-bold">LEADER</p>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT: Human Team (4 Members) */}
                            <div className="pl-4">
                                <h4 className="text-[10px] uppercase font-bold text-amber-300 mb-3 tracking-widest text-left md:text-center border-b border-amber-500/30 pb-1">Real-World Education Field</h4>
                                <div className="grid grid-cols-4 gap-1 md:gap-2">
                                    <div className="text-center group/member">
                                        <div className="h-1 w-full bg-amber-500 rounded-full mb-1 opacity-100 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></div>
                                        <p className="font-bold text-[9px] md:text-xs text-amber-300">Moon-sik</p>
                                        <p className="text-[7px] md:text-[8px] opacity-80 font-bold">CEO</p>
                                    </div>
                                    <div className="text-center group/member">
                                        <div className="h-1 w-full bg-orange-400 rounded-full mb-1 opacity-50 group-hover/member:opacity-100"></div>
                                        <p className="font-bold text-[9px] md:text-xs">Edward</p>
                                        <p className="text-[7px] md:text-[8px] opacity-60">AI Edu</p>
                                    </div>
                                    <div className="text-center group/member">
                                        <div className="h-1 w-full bg-pink-400 rounded-full mb-1 opacity-50 group-hover/member:opacity-100"></div>
                                        <p className="font-bold text-[9px] md:text-xs">Esra</p>
                                        <p className="text-[7px] md:text-[8px] opacity-60">IT/Data</p>
                                    </div>
                                    <div className="text-center group/member">
                                        <div className="h-1 w-full bg-green-400 rounded-full mb-1 opacity-50 group-hover/member:opacity-100"></div>
                                        <p className="font-bold text-[9px] md:text-xs">Min</p>
                                        <p className="text-[7px] md:text-[8px] opacity-60">Curriculum</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Bottom Caption */}
                <div className="text-center mt-4 px-4">
                    <p className="text-xs text-gray-500 font-medium whitespace-pre-line md:whitespace-normal">
                        "Virtual Planning by Paul Sam's AI Team (with Bezaleel, Stephen, Timothy) {"\n"}× Field Execution by CEO Moon-sik's Expert Team"
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default TeamShowcase;
