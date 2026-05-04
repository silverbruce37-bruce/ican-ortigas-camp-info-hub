
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Newspaper, X, Calendar } from 'lucide-react';
import EDITORIALS_RAW from '../src/data/band-editorials.json';

interface Editorial {
    id: string;
    date: string;
    counseling_id: number;
    counseling_theme: string;
    counseling_title: string;
    herald_cover: string;
    editorial: string;
    image_url: string;
}

const EDITORIALS = EDITORIALS_RAW as Editorial[];

const ICAN_APP_URL = 'https://ican-ortigas-camp-info-hub.vercel.app';

function formatDate(dateStr: string): string {
    const d = new Date(dateStr);
    return d.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'short' });
}

function getPreview(text: string): string {
    const lines = text.split('\n').filter(l => l.trim());
    // Skip first line (title) and get next meaningful paragraph
    const body = lines.slice(1).join(' ');
    return body.slice(0, 120) + '…';
}

function getTitle(text: string): string {
    return text.split('\n')[0].replace(/[🌱🚀🌟💡📚✨🎓]/gu, '').trim();
}

// ── Card ──────────────────────────────────────────────────────────────────────
const EditorialCard: React.FC<{ item: Editorial; index: number; onOpen: () => void }> = ({ item, index, onOpen }) => (
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.07 }}
        onClick={onOpen}
        className="group cursor-pointer bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
        {item.image_url && (
            <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                <img
                    src={item.image_url}
                    alt={getTitle(item.editorial)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
            </div>
        )}
        <div className="p-6">
            <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="inline-block bg-indigo-50 text-indigo-600 text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full uppercase">
                    {item.counseling_theme}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
                    <Calendar className="w-3 h-3" />
                    {formatDate(item.date)}
                </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug line-clamp-2 word-keep-all">
                {getTitle(item.editorial)}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 word-keep-all">
                {getPreview(item.editorial)}
            </p>
            <div className="mt-4 flex items-center gap-1 text-xs font-bold text-indigo-500 group-hover:gap-2 transition-all">
                <span>전문 읽기</span>
                <ChevronRight className="w-4 h-4" />
            </div>
        </div>
    </motion.div>
);

// ── Detail Modal ──────────────────────────────────────────────────────────────
const EditorialDetail: React.FC<{ item: Editorial; onClose: () => void; onPrev: () => void; onNext: () => void; hasPrev: boolean; hasNext: boolean }> = ({
    item, onClose, onPrev, onNext, hasPrev, hasNext,
}) => {
    const paragraphs = item.editorial.split('\n').filter(l => l.trim());

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center overflow-y-auto py-8 px-4"
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden"
            >
                {/* Header bar */}
                <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="bg-indigo-50 text-indigo-600 text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full uppercase">
                            {item.counseling_theme}
                        </span>
                        <span className="text-xs text-gray-400">{formatDate(item.date)}</span>
                    </div>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* Image */}
                {item.image_url && (
                    <div className="aspect-[16/9] bg-gray-100">
                        <img src={item.image_url} alt={getTitle(item.editorial)} className="w-full h-full object-cover" />
                    </div>
                )}

                {/* Body */}
                <div className="px-8 py-8">
                    <div className="space-y-5">
                        {paragraphs.map((para, i) => (
                            <p
                                key={i}
                                className={`leading-relaxed word-keep-all ${i === 0
                                    ? 'text-2xl font-black text-gray-900 tracking-tight'
                                    : para.startsWith('━')
                                        ? 'text-xs text-gray-400 font-mono whitespace-pre-line border-t border-b border-gray-100 py-3'
                                        : 'text-[15px] text-gray-700'
                                    }`}
                            >
                                {para}
                            </p>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                        <a
                            href={ICAN_APP_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs text-indigo-500 font-bold hover:underline"
                        >
                            🎓 아이캔 올티가스 캠프 →
                        </a>
                        <div className="flex gap-2">
                            <button
                                onClick={onPrev}
                                disabled={!hasPrev}
                                className="p-2 rounded-full border border-gray-200 hover:border-indigo-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={onNext}
                                disabled={!hasNext}
                                className="p-2 rounded-full border border-gray-200 hover:border-indigo-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

// ── Main Page ─────────────────────────────────────────────────────────────────
const BandEditorial: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleOpen = (index: number) => setSelectedIndex(index);
    const handleClose = () => setSelectedIndex(null);
    const handlePrev = () => setSelectedIndex(i => (i !== null && i > 0 ? i - 1 : i));
    const handleNext = () => setSelectedIndex(i => (i !== null && i < EDITORIALS.length - 1 ? i + 1 : i));

    return (
        <div className="min-h-screen bg-[#fafaf9] font-sans">

            {/* Top Nav */}
            <div className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center gap-3">
                <a href="/" className="flex items-center gap-1.5 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                    홈으로
                </a>
                <span className="text-gray-200">|</span>
                <div className="flex items-center gap-2">
                    <Newspaper className="w-4 h-4 text-indigo-500" />
                    <span className="text-sm font-bold text-gray-800">밴드 에디토리얼</span>
                </div>
            </div>

            {/* Hero */}
            <div className="pt-24 pb-12 px-6 max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-600 text-xs font-bold tracking-widest uppercase mb-5">
                        <Newspaper className="w-3 h-3" />
                        BAND EDITORIAL ARCHIVE
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4 word-keep-all">
                        아이캔 에디토리얼
                    </h1>
                    <p className="text-gray-500 text-base leading-relaxed word-keep-all max-w-xl mx-auto">
                        매일 아침 헤럴즈 뉴스와 상담 저널이 만나 탄생하는 이야기.
                        네이버 밴드에 게시된 교육 에디토리얼을 한 곳에서 만나보세요.
                    </p>
                    <p className="mt-3 text-xs text-gray-400">
                        총 {EDITORIALS.length}편 · Herald × Counseling Journal
                    </p>
                </motion.div>
            </div>

            {/* Grid */}
            <div className="max-w-5xl mx-auto px-6 pb-24">
                {EDITORIALS.length === 0 ? (
                    <div className="text-center text-gray-400 py-24 text-sm">아직 게시된 에디토리얼이 없습니다.</div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {EDITORIALS.map((item, idx) => (
                            <EditorialCard key={item.id} item={item} index={idx} onOpen={() => handleOpen(idx)} />
                        ))}
                    </div>
                )}
            </div>

            {/* Detail Modal */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <EditorialDetail
                        item={EDITORIALS[selectedIndex]}
                        onClose={handleClose}
                        onPrev={handlePrev}
                        onNext={handleNext}
                        hasPrev={selectedIndex > 0}
                        hasNext={selectedIndex < EDITORIALS.length - 1}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default BandEditorial;
