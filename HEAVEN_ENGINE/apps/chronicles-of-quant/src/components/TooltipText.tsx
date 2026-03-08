import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipTextProps {
    text: string;
    tooltipText: string;
}

export default function TooltipText({ text, tooltipText }: TooltipTextProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <span
            className="relative inline-block cursor-pointer font-bold text-amber-400 hover:text-amber-300 transition-colors underline decoration-dotted underline-offset-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsHovered(!isHovered)}
        >
            {text}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 md:w-80 p-4 bg-neutral-900 border border-amber-500/30 rounded-xl shadow-[0_0_30px_rgba(245,158,11,0.2)] text-sm font-medium text-neutral-200 z-50 overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-500" />
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 text-lg">
                                👨‍🏫
                            </div>
                            <div>
                                <span className="block text-amber-400 font-bold mb-1 text-xs uppercase tracking-wider">일타강사 쌤의 족집게 설명</span>
                                <p className="leading-relaxed whitespace-pre-wrap">{tooltipText}</p>
                            </div>
                        </div>
                        {/* Arrow */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-neutral-900 border-r border-b border-amber-500/30 rotate-45" />
                    </motion.div>
                )}
            </AnimatePresence>
        </span>
    );
}
