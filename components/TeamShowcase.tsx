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

                        {/* Gradient Overlay - ONLY at the bottom for text readability */}
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none"></div>

                        {/* Team Roles Legend */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5 text-white grid grid-cols-2 gap-8">

                            {/* LEFT: Virtual Team */}
                            <div className="border-r border-white/20 pr-4 flex flex-col justify-end">
                                <div className="grid grid-cols-5 gap-1 md:gap-2">
                                    <div className="text-center">
                                        <p className="font-bold text-[9px] md:text-xs text-cyan-200 shadow-black drop-shadow-md">Bezaleel</p>
                                        <div className="h-0.5 w-full bg-cyan-400 rounded-full mt-1 opacity-70"></div>
                                    </div>
                                    <div className="text-center">
                                        <p className="font-bold text-[9px] md:text-xs shadow-black drop-shadow-md">Stephen</p>
                                        <div className="h-0.5 w-full bg-indigo-500 rounded-full mt-1 opacity-70"></div>
                                    </div>
                                    <div className="text-center">
                                        <p className="font-bold text-[9px] md:text-xs shadow-black drop-shadow-md">Timothy</p>
                                        <div className="h-0.5 w-full bg-sky-500 rounded-full mt-1 opacity-70"></div>
                                    </div>
                                    <div className="text-center">
                                        <p className="font-bold text-[9px] md:text-xs shadow-black drop-shadow-md">Dr. iCAN</p>
                                        <div className="h-0.5 w-full bg-blue-500 rounded-full mt-1 opacity-70"></div>
                                    </div>
                                    <div className="text-center">
                                        <p className="font-bold text-[9px] md:text-xs text-yellow-300 shadow-black drop-shadow-md">Paul Sam</p>
                                        <div className="h-1 w-full bg-yellow-400 rounded-full mt-1 shadow-[0_0_8px_rgba(250,204,21,0.8)]"></div>
                                    </div>
                                </div>
                                <p className="text-[8px] md:text-[10px] text-center text-blue-200 mt-2 tracking-widest uppercase opacity-80">Virtual Command Center</p>
                            </div>

                            {/* RIGHT: Human Team */}
                            <div className="pl-4 flex flex-col justify-end">
                                <div className="grid grid-cols-4 gap-1 md:gap-2">
                                    <div className="text-center">
                                        <p className="font-bold text-[9px] md:text-xs text-amber-300 shadow-black drop-shadow-md">Moon-sik</p>
                                        <div className="h-1 w-full bg-amber-500 rounded-full mt-1 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></div>
                                    </div>
                                    <div className="text-center">
                                        <p className="font-bold text-[9px] md:text-xs shadow-black drop-shadow-md">Edward</p>
                                        <div className="h-0.5 w-full bg-orange-400 rounded-full mt-1 opacity-70"></div>
                                    </div>
                                    <div className="text-center">
                                        <p className="font-bold text-[9px] md:text-xs shadow-black drop-shadow-md">Esra</p>
                                        <div className="h-0.5 w-full bg-pink-400 rounded-full mt-1 opacity-70"></div>
                                    </div>
                                    <div className="text-center">
                                        <p className="font-bold text-[9px] md:text-xs shadow-black drop-shadow-md">Min</p>
                                        <div className="h-0.5 w-full bg-green-400 rounded-full mt-1 opacity-70"></div>
                                    </div>
                                </div>
                                <p className="text-[8px] md:text-[10px] text-center text-amber-200 mt-2 tracking-widest uppercase opacity-80">Real-World Education Field</p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Bottom Caption */}
                <div className="text-center mt-3 px-4">
                    <p className="text-[10px] md:text-xs text-gray-400 font-medium">
                        Developing the 'Space Orienteering' AI Education System based on 20 years of expertise.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default TeamShowcase;
