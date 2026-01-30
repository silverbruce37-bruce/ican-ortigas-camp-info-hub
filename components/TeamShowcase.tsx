import React from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import teamImg from '../paul_sam_team.png';

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
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

                {/* Card Container */}
                <div className="relative bg-white border border-gray-100 rounded-[1.8rem] shadow-xl overflow-hidden p-2">

                    {/* Header / Title Overlay */}
                    <div className="absolute top-6 left-0 right-0 z-20 text-center pointer-events-none">
                        <span className="inline-block py-1 px-3 rounded-full bg-black/5 backdrop-blur-sm border border-black/5 text-[10px] font-bold tracking-widest text-gray-800 mb-2">
                            AI AGENT SQUAD
                        </span>
                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight drop-shadow-sm">
                            PAUL SAM'S ORCHESTRA
                        </h3>
                    </div>

                    {/* Image Area */}
                    <div className="aspect-[2.35/1] w-full bg-gray-50 rounded-2xl overflow-hidden relative">
                        <img
                            src={teamImg}
                            alt="Paul Sam and the AI Education Team"
                            className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                        />

                        {/* Gradient Overlay for Text Visibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-white/0 pointer-events-none"></div>

                        {/* Team Roles Legend */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 grid grid-cols-4 gap-2 text-center text-white">
                            <div className="flex flex-col items-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-0">
                                <div className="h-1 w-12 bg-yellow-400 rounded-full mb-2 shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
                                <p className="font-bold text-sm md:text-lg text-yellow-300">Paul Sam</p>
                                <p className="text-[10px] md:text-xs opacity-80 uppercase tracking-wider font-semibold">The Conductor</p>
                            </div>
                            <div className="flex flex-col items-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                <div className="h-1 w-12 bg-blue-400 rounded-full mb-2 shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
                                <p className="font-bold text-sm md:text-lg text-blue-300">Edward</p>
                                <p className="text-[10px] md:text-xs opacity-80 uppercase tracking-wider font-semibold">AI Architect</p>
                            </div>
                            <div className="flex flex-col items-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                                <div className="h-1 w-12 bg-pink-400 rounded-full mb-2 shadow-[0_0_10px_rgba(244,114,182,0.5)]"></div>
                                <p className="font-bold text-sm md:text-lg text-pink-300">Esra</p>
                                <p className="text-[10px] md:text-xs opacity-80 uppercase tracking-wider font-semibold">Data Lead</p>
                            </div>
                            <div className="flex flex-col items-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-300">
                                <div className="h-1 w-12 bg-green-400 rounded-full mb-2 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                                <p className="font-bold text-sm md:text-lg text-green-300">Min</p>
                                <p className="text-[10px] md:text-xs opacity-80 uppercase tracking-wider font-semibold">Curriculum</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Caption */}
                <div className="text-center mt-4">
                    <p className="text-xs text-gray-500 font-medium">
                        "We orchestrate wisdom, technology, and data to build the perfect education for your child."
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default TeamShowcase;
