import React from 'react';
import { motion } from 'framer-motion';
import {
    BookOpen, Mic, Activity, Zap, MessageCircle, Layers, Lightbulb,
    Database, Network, Cpu, ArrowRight
} from 'lucide-react';
// @ts-ignore
import vectorProcessImg from '../src/assets/ican_vector_process.png';

const DiagnosisItem = ({ icon: Icon, title, delay }: { icon: any, title: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="flex flex-col items-center p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group"
    >
        <div className="p-3 bg-blue-50 text-blue-600 rounded-full mb-3 group-hover:bg-blue-100 transition-colors">
            <Icon size={24} strokeWidth={1.5} />
        </div>
        <h4 className="text-sm font-bold text-gray-800 break-keep leading-tight">{title}</h4>
    </motion.div>
);

const CurriculumSystem: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
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
                        className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight"
                    >
                        데이터 기반의 <span className="text-ican-600">초개인화 커리큘럼</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600 max-w-3xl mx-auto break-keep"
                    >
                        아이들의 모든 활동 데이터는 폴샘의 AI 엔진을 통해 분석되며, <br className="hidden md:block" />
                        단 한 명을 위한 최적의 학습 로드맵으로 재탄생합니다.
                    </motion.p>
                </div>

                {/* 1. INPUT: 7 Diagnosis */}
                <div className="mb-20">
                    <h3 className="text-xl font-bold text-center mb-8 flex items-center justify-center gap-2">
                        <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                        <span>STEP 1 : 7가지 정밀 진단 (Input)</span>
                        <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                        <DiagnosisItem icon={BookOpen} title="문해력 테스트" delay={0.1} />
                        <DiagnosisItem icon={Mic} title="조음력/인터뷰" delay={0.2} />
                        <DiagnosisItem icon={Activity} title="러닝습관/행동" delay={0.3} />
                        <DiagnosisItem icon={Zap} title="싸이트워즈 유창성" delay={0.4} />
                        <DiagnosisItem icon={MessageCircle} title="스토리텔링 파워" delay={0.5} />
                        <DiagnosisItem icon={Layers} title="코어 지식 빌드업" delay={0.6} />
                        <DiagnosisItem icon={Lightbulb} title="통합지식 아웃풋" delay={0.7} />
                    </div>
                </div>

                {/* STEP 2: Vector Data Intelligence */}
                <div className="mb-20">
                    <div className="relative bg-[#0f1014] rounded-3xl overflow-hidden shadow-2xl border border-gray-800">
                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Image Side */}
                            <div className="relative h-full min-h-[300px] md:min-h-[400px]">
                                <img
                                    src={vectorProcessImg}
                                    alt="ICAN Vector Data Process"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f1014]/90"></div>
                            </div>

                            {/* Content Side */}
                            <div className="p-8 md:p-10 flex flex-col justify-center text-left">
                                <h3 className="text-2xl font-bold mb-2 text-blue-400">STEP 2 : 벡터(Vector) 관계형 데이터 분석</h3>
                                <h4 className="text-white text-lg font-medium mb-6">
                                    "정형/비정형 데이터를 통합하여 아이의 숨겨진 잠재력을 발견합니다"
                                </h4>

                                <ul className="space-y-5 text-gray-300">
                                    <li className="flex items-start gap-4">
                                        <div className="bg-blue-900/50 p-2 rounded-lg text-blue-400 mt-1">
                                            <Database size={20} />
                                        </div>
                                        <div>
                                            <strong className="block text-white mb-1">데이터 벡터화 (Vectorization)</strong>
                                            <span className="text-sm text-gray-400 leading-snug">
                                                성적(정형)과 행동/감정(비정형) 데이터를 관계형 벡터 DB로 통합하여 입체적으로 분석합니다.
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="bg-purple-900/50 p-2 rounded-lg text-purple-400 mt-1">
                                            <Network size={20} />
                                        </div>
                                        <div>
                                            <strong className="block text-white mb-1">결핍과 강점의 정밀 탐지</strong>
                                            <span className="text-sm text-gray-400 leading-snug">
                                                겉으론 보이지 않는 구석구석의 약점과 숨겨진 강력한 힘을 AI가 찾아냅니다.
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="bg-green-900/50 p-2 rounded-lg text-green-400 mt-1">
                                            <ArrowRight size={20} />
                                        </div>
                                        <div>
                                            <strong className="block text-white mb-1">미래 역량 매칭 & 훈련</strong>
                                            <span className="text-sm text-gray-400 leading-snug">
                                                아이의 고유한 특성을 미래의 핵심 역량과 매칭하여, 가장 필요한 모듈 훈련을 제공합니다.
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. OUTPUT: Solution */}
                <div>
                    <h3 className="text-xl font-bold text-center mb-8 flex items-center justify-center gap-2">
                        <span className="w-8 h-1 bg-amber-500 rounded-full"></span>
                        <span>STEP 3 : 폴샘의 맞춤형 솔루션 (Output)</span>
                        <span className="w-8 h-1 bg-amber-500 rounded-full"></span>
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg text-center"
                        >
                            <div className="w-16 h-16 mx-auto bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                                <Layers size={32} />
                            </div>
                            <h4 className="text-xl font-bold mb-2">필요한 모듈 학습 제공</h4>
                            <p className="text-gray-500 text-sm break-keep">
                                약한 학습 능력을 보완하기 위한 개인별 모듈을 즉시 처방하여 학습 공백을 메웁니다.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-br from-ican-600 to-ican-700 text-white p-8 rounded-2xl shadow-xl text-center transform scale-105 z-10"
                        >
                            <div className="w-16 h-16 mx-auto bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                                <Lightbulb size={32} className="text-yellow-300" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">창발교육(Emergent) 제안</h4>
                            <p className="text-blue-100 text-sm break-keep">
                                단순 보충을 넘어, 아이의 잠재력이 미래 역량과 연결되도록 새로운 교육 틀을 제시합니다.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg text-center"
                        >
                            <div className="w-16 h-16 mx-auto bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                                <BookOpen size={32} />
                            </div>
                            <h4 className="text-xl font-bold mb-2">폴샘 템플릿 & 가이드</h4>
                            <p className="text-gray-500 text-sm break-keep">
                                구체적인 실행을 위한 템플릿과 활용 방법을 폴샘이 직접 가이드합니다.
                            </p>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CurriculumSystem;
