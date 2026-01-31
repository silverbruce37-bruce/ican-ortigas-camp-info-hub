import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Mic, Activity, Zap, MessageCircle, Layers, Lightbulb, Database, Network } from 'lucide-react';
import vectorBannerImg from '../src/assets/ican_curriculum_vector_32_9.png';
import vectorProcessImg from '../src/assets/ican_vector_process.png'; // Keep this for Step 2 internal if needed

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
        <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* 1. HERO VISUAL (Replacing Text Header) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100"
                >
                    <div className="aspect-[32/10] md:aspect-[32/9] w-full bg-gray-900 relative">
                        <img
                            src={vectorBannerImg}
                            alt="ICAN AI Education System Visual"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-sm p-4 text-white">
                            <h3 className="text-sm font-bold text-blue-300 mb-1">AI 기반 우주교육 시스템</h3>
                            <p className="text-[10px] md:text-xs text-gray-300 leading-tight">
                                에드워드 중심의 드림팀이 개발한 혁신적인 AI 교육시스템으로, 아이캔의 20년 교육 노하우를 학습한 '닥터아이캔'이 개인별 맞춤 강화학습을 제공합니다.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Text Title Section (Restored Below Image) */}
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
                        className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight"
                    >
                        데이터 기반의 <span className="text-ican-600">초개인화 커리큘럼</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 text-lg max-w-2xl mx-auto break-keep leading-relaxed"
                    >
                        정형/비정형 데이터가 결합된 벡터 DB 엔진을 통해,<br className="hidden md:block" />
                        아이의 숨겨진 잠재력과 미래 역량을 연결합니다.
                    </motion.p>
                </div>

                {/* 2. STEP 1: 7 Diagnosis (Input) */}
                <div className="mb-20">
                    <h3 className="text-xl md:text-2xl font-bold text-center mb-10 flex items-center justify-center gap-3">
                        <span className="w-12 h-1 bg-blue-500 rounded-full"></span>
                        <span className="text-gray-900">STEP 1 : 7가지 정밀 진단 (Input)</span>
                        <span className="w-12 h-1 bg-blue-500 rounded-full"></span>
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

                {/* 3. STEP 2: Vector Analysis (Process) */}
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
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f1014]/90"></div>
                            </div>

                            {/* Content Side - Detailed Text */}
                            <div className="p-8 md:p-12 flex flex-col justify-center text-left">
                                <h3 className="text-2xl font-bold mb-2 text-blue-400">STEP 2 : 벡터(Vector) 관계형 데이터 분석</h3>
                                <h4 className="text-white text-lg font-medium mb-8 leading-relaxed">
                                    "아이들의 구석구석 어렵고 힘든 부분과<br />강력한 힘들을 찾아내어 미래와 연결합니다"
                                </h4>

                                <ul className="space-y-6 text-gray-300">
                                    <li className="flex items-start gap-4">
                                        <div className="bg-blue-900/40 p-2 rounded-lg text-blue-400 mt-1 shrink-0">
                                            <Database size={22} />
                                        </div>
                                        <div>
                                            <strong className="block text-white text-lg mb-1">정형·비정형 데이터 통합</strong>
                                            <span className="text-sm text-gray-400 leading-relaxed block">
                                                캠프에서 모인 학습 데이터와 행동 데이터를 관계형 벡터 DB로 통합하여 다각도로 분석합니다.
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="bg-purple-900/40 p-2 rounded-lg text-purple-400 mt-1 shrink-0">
                                            <Network size={22} />
                                        </div>
                                        <div>
                                            <strong className="block text-white text-lg mb-1">잠재력 및 결핍 파악</strong>
                                            <span className="text-sm text-gray-400 leading-relaxed block">
                                                단순 점수로는 알 수 없는 아이의 숨겨진 재능과 보완이 필요한 부분을 즉각적으로 발견합니다.
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. STEP 3: Solution (Output) */}
                <div>
                    <h3 className="text-xl md:text-2xl font-bold text-center mb-10 flex items-center justify-center gap-3">
                        <span className="w-12 h-1 bg-amber-500 rounded-full"></span>
                        <span className="text-gray-900">STEP 3 : 폴샘의 맞춤형 솔루션 (Output)</span>
                        <span className="w-12 h-1 bg-amber-500 rounded-full"></span>
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg text-center"
                        >
                            <div className="w-16 h-16 mx-auto bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                                <Layers size={32} />
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-gray-900">필요한 모듈 학습 제공</h4>
                            <p className="text-gray-600 text-sm leading-relaxed break-keep">
                                분석된 결핍을 즉시 보완할 수 있는 개인별 학습 모듈을 제공하여 기초를 탄탄하게 다집니다.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-br from-ican-600 to-ican-800 text-white p-8 rounded-2xl shadow-xl text-center transform md:-translate-y-4 z-10"
                        >
                            <div className="w-16 h-16 mx-auto bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                                <Lightbulb size={32} className="text-yellow-300" />
                            </div>
                            <h4 className="text-xl font-bold mb-3">창발교육(Emergent) 제안</h4>
                            <p className="text-blue-100 text-sm leading-relaxed break-keep">
                                아이의 고유한 강점을 미래 교육과 연결하여 새로운 가능성을 열어주는 창발적 교육을 제안합니다.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg text-center"
                        >
                            <div className="w-16 h-16 mx-auto bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                                <BookOpen size={32} />
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-gray-900">폴샘 템플릿 & 가이드</h4>
                            <p className="text-gray-600 text-sm leading-relaxed break-keep">
                                학부모님과 아이가 함께 성장할 수 있도록 구체적인 실행 템플릿과 활용 방법을 폴샘이 직접 가이드합니다.
                            </p>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CurriculumSystem;
