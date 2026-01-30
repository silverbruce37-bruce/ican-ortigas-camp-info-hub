import React from 'react';
import { motion } from 'framer-motion';
import {
    BookOpen, Mic, Activity, Zap, MessageCircle, Layers, Lightbulb,
    Database, Network, Cpu, ArrowRight
} from 'lucide-react';

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

                {/* 2. PROCESS: AI Core */}
                <div className="mb-20">
                    <div className="relative bg-black rounded-3xl p-8 md:p-12 overflow-hidden text-white shadow-2xl">
                        {/* Background Grid */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                            {/* Left: Engine Visual */}
                            <div className="flex-1 flex justify-center">
                                <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping"></div>
                                    <div className="absolute inset-4 bg-blue-600/20 rounded-full animate-pulse"></div>
                                    <div className="relative z-10 flex flex-col items-center justify-center text-center">
                                        <Cpu size={64} className="text-blue-400 mb-2" />
                                        <h4 className="text-2xl font-black tracking-tighter">PAUL SAM<br />AI ENGINE</h4>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Process Description */}
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl font-bold mb-4 text-blue-300">STEP 2 : 데이터 통합 및 결핍 분석</h3>
                                <ul className="space-y-4 text-gray-300">
                                    <li className="flex items-start gap-3">
                                        <Database className="mt-1 text-blue-500 shrink-0" size={20} />
                                        <span className="text-left">캠프 내의 <strong className="text-white">정형/비정형 데이터</strong> 실시간 수집</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Network className="mt-1 text-purple-500 shrink-0" size={20} />
                                        <span className="text-left">관계형 데이터 통합 및 <strong className="text-white">발달/결핍 상태</strong> 즉각 파악</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ArrowRight className="mt-1 text-green-500 shrink-0" size={20} />
                                        <span className="text-left">미래 교육과 연결된 <strong className="text-white">새로운 창발 교육</strong> 제안</span>
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
