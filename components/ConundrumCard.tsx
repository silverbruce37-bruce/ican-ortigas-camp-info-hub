import React, { useState } from 'react';
import { X, ArrowRight, BookOpen, Rocket, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ConundrumCardProps {
    title: string;
    subtitle: string;
    category: 'Future' | 'Finance' | 'Communication';
    icon?: React.ReactNode;
    description: string;
    details: string[];
}

const ConundrumCard: React.FC<ConundrumCardProps> = ({ title, subtitle, category, icon, description, details }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Category Styles
    const styles = {
        Future: { bg: 'bg-[#1C1C1E]', accent: 'text-purple-400', border: 'border-purple-500/20' },
        Finance: { bg: 'bg-[#1C1C1E]', accent: 'text-green-400', border: 'border-green-500/20' },
        Communication: { bg: 'bg-[#1C1C1E]', accent: 'text-blue-400', border: 'border-blue-500/20' }
    };
    const style = styles[category];

    return (
        <>
            <div
                onClick={() => setIsOpen(true)}
                className={`${style.bg} p-6 rounded-3xl w-full max-w-[320px] flex flex-col justify-between h-[280px] shadow-lg cursor-pointer transition-all hover:-translate-y-1 hover:shadow-2xl border ${style.border} group`}
            >
                <div>
                    <div className="flex justify-between items-start mb-4">
                        <div className={`p-3 rounded-2xl bg-white/5 ${style.accent}`}>
                            {icon || <Rocket />}
                        </div>
                        <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/10 text-white/50`}>
                            {category}
                        </div>
                    </div>
                    <h3 className="font-bold text-white text-2xl mb-2 leading-tight group-hover:text-white/90 transition-colors">{title}</h3>
                    <p className="text-sm font-medium text-gray-400 leading-relaxed mb-4">{subtitle}</p>
                    <p className="text-[13px] text-gray-500 hidden md:block">{description}</p>
                </div>

                <div className="flex items-center gap-2 text-[13px] font-semibold text-white/80 group-hover:text-white transition-colors">
                    Explore Class <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-[#1C1C1E] w-full max-w-lg rounded-3xl shadow-2xl p-8 relative margin-auto"
                        >
                            <button
                                onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-gray-400 hover:text-white hover:bg-white/20 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className={`text-sm font-bold uppercase tracking-widest mb-4 ${style.accent}`}>{category} CLASS</div>
                            <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
                            <p className="text-xl text-gray-400 font-medium mb-8 leading-relaxed">{subtitle}</p>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">Class Overview</h4>
                                    <p className="text-gray-300 leading-relaxed text-sm bg-white/5 p-4 rounded-xl">{description}</p>
                                </div>

                                <div>
                                    <h4 className="text-white font-bold mb-3">Key Learning Points</h4>
                                    <ul className="space-y-3">
                                        {details.map((detail, idx) => (
                                            <li key={idx} className="flex gap-3 text-gray-300 text-sm">
                                                <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${style.accent.replace('text', 'bg')}`}></div>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10 flex gap-4">
                                <button onClick={() => setIsOpen(false)} className="flex-1 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors">Close</button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ConundrumCard;
