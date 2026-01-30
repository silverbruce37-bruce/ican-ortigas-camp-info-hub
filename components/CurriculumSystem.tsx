import React from 'react';
import { motion } from 'framer-motion';
import vectorBannerImg from '../src/assets/ican_curriculum_vector_32_9.png';

const CurriculumSystem: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4 px-4 py-1 bg-ican-100 text-ican-800 rounded-full text-xs font-bold tracking-widest uppercase"
                    >
                        ICAN SYSTEM
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight"
                    >
                        데이터 기반의 <span className="text-ican-600">초개인화 커리큘럼</span>
                    </motion.h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto break-keep">
                        정형/비정형 데이터가 결합된 벡터 DB 엔진을 통해, 아이의 숨겨진 잠재력과 미래 역량을 연결합니다.
                    </p>
                </div>

                {/* Main Visual: 32:9 Cinematic Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 mb-12"
                >
                    {/* The Image */}
                    <div className="aspect-[32/12] md:aspect-[32/9] w-full bg-gray-900 relative">
                        <img
                            src={vectorBannerImg}
                            alt="ICAN AI Vector Process: Input -> Core -> Future"
                            className="w-full h-full object-cover"
                        />
                        {/* Subtle Gloss Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

                        {/* Overlay Text (Mobile Friendly) */}
                        <div className="absolute bottom-4 left-0 right-0 text-center text-white/80 text-[10px] md:text-sm font-light tracking-wider md:hidden">
                            Input &rarr; AI Vector Core &rarr; Future Path
                        </div>
                    </div>
                </motion.div>

                {/* 3-Step Process Description (Below Image) */}
                <div className="grid md:grid-cols-3 gap-8 text-center px-4">
                    {/* Step 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                            <span className="font-bold text-lg">01</span>
                        </div>
                        <h3 className="font-bold text-xl mb-2 text-gray-900">1. 정형/비정형 데이터 수집</h3>
                        <p className="text-sm text-gray-600 leading-relaxed break-keep max-w-xs">
                            문해력, 성적 같은 <strong>정형 데이터</strong>와<br />
                            말투, 습관 같은 <strong>비정형 데이터</strong>를<br />
                            실시간으로 수집하고 분류합니다.
                        </p>
                    </motion.div>

                    {/* Step 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-12 h-12 bg-ican-50 text-ican-600 rounded-2xl flex items-center justify-center mb-4 shadow-sm relative">
                            <span className="font-bold text-lg">02</span>
                            <div className="absolute -inset-1 bg-ican-200/30 rounded-3xl animate-pulse"></div>
                        </div>
                        <h3 className="font-bold text-xl mb-2 text-gray-900">2. 벡터(Vector) 관계 분석</h3>
                        <p className="text-sm text-gray-600 leading-relaxed break-keep max-w-xs">
                            수집된 데이터를 <strong>3차원 벡터 코어</strong>에서 연결하여<br />
                            단편적으론 알 수 없는 아이의<br />
                            <strong>숨겨진 결핍과 강점</strong>을 찾아냅니다.
                        </p>
                    </motion.div>

                    {/* Step 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                            <span className="font-bold text-lg">03</span>
                        </div>
                        <h3 className="font-bold text-xl mb-2 text-gray-900">3. 미래 역량 매칭 솔루션</h3>
                        <p className="text-sm text-gray-600 leading-relaxed break-keep max-w-xs">
                            발견된 특성을 미래 인재상과 매칭하여<br />
                            가장 필요한 <strong>모듈 학습과 창발 교육</strong>을<br />
                            즉각적으로 처방합니다.
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default CurriculumSystem;
