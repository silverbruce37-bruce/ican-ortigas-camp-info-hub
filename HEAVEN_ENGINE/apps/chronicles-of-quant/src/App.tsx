import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { chapters } from './data/story';
import Chapter from './components/Chapter';
import { Network, ActivitySquare } from 'lucide-react';

export default function App() {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  const handleNext = () => {
    if (currentChapterIndex < chapters.length - 1) {
      setCurrentChapterIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex(prev => prev - 1);
    }
  };

  const currentChapter = chapters[currentChapterIndex];

  if (!isStarted) {
    return (
      <div className="min-h-screen bg-neutral-950 text-neutral-200 flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-neutral-950 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_20%,#000_100%)]"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center max-w-2xl"
        >
          <div className="inline-flex items-center justify-center p-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl mb-8">
            <Network className="w-8 h-8 text-amber-500 mr-3" />
            <span className="font-mono text-amber-500 tracking-widest font-bold">HEAVEN PROJECT</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-neutral-200 to-neutral-600">
            Chronicles of <span className="text-amber-500">Quant</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 mb-10 font-light max-w-xl mx-auto leading-relaxed">
            금융 역사를 관통하는 수학적 아름다움의 탐험. 오픈 소스의 정신으로 엮어낸 첫 번째 튜토리얼.
          </p>

          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl text-left mb-10 shadow-2xl relative">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <ActivitySquare className="w-24 h-24" />
            </div>
            <h3 className="text-amber-500 font-bold mb-2 uppercase tracking-wide text-sm">Welcome Collaborator</h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              "우리는 Sisyphus와 함께 일합니다. 모든 지식은 투명하게 공개되며, 협력과 공유를 통해 더 나은 세계를 구축합니다. 이 튜토리얼 앱은 과거의 지혜를 모아 우주시대로 나아가는 헤븐 프로젝트의 첫 걸음입니다."
            </p>
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-neutral-800/50">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-xs font-mono text-neutral-500">System Ready • No Human Bottleneck</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsStarted(true)}
            className="px-10 py-5 bg-gradient-to-r from-amber-600 to-amber-500 text-white text-xl font-bold rounded-full shadow-[0_0_40px_rgba(245,158,11,0.4)] hover:shadow-[0_0_60px_rgba(245,158,11,0.6)] transition-all flex items-center mx-auto gap-3"
          >
            역사의 도서관 입장하기
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 flex flex-col font-sans selection:bg-amber-500/30">
      {/* Ambient background glows */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[50%] rounded-full bg-amber-500/5 blur-[120px]" />
        <div className="absolute bottom-[0%] right-[0%] w-[40%] h-[60%] rounded-full bg-orange-500/5 blur-[120px]" />
      </div>

      <nav className="fixed top-0 left-0 w-full p-6 z-50 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center opacity-70 border-b border-neutral-800/50 pb-4">
          <div className="font-bold tracking-widest text-sm flex items-center gap-2 pointer-events-auto cursor-pointer" onClick={() => setIsStarted(false)}>
            <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,1)]"></div>
            CHRONICLES OF QUANT
          </div>
          <div className="font-mono text-xs text-neutral-500">
            VOL {currentChapter.volume} / {chapters.length}
          </div>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center pt-16 z-10 w-full">
        <AnimatePresence mode="wait">
          <Chapter
            key={currentChapterIndex}
            chapter={currentChapter}
            onNext={handleNext}
            onPrev={handlePrev}
            isFirst={currentChapterIndex === 0}
            isLast={currentChapterIndex === chapters.length - 1}
            totalChapters={chapters.length}
          />
        </AnimatePresence>
      </main>
    </div>
  );
}
