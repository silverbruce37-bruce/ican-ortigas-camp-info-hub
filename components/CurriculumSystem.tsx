import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Mic, Activity, Zap, MessageCircle, Layers, Lightbulb, Database, Network, FileSpreadsheet, FileText } from 'lucide-react';
import vectorBannerImg from '../src/assets/curriculum_ontology_hero_v3.png';
import vectorProcessV2Img from '../src/assets/ican_vector_process_v2.png';

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
        <div className="w-full relative">
            {/* 1. HERO VISUAL (Full Width, Flush) */}
            <div className="relative w-full h-[35vh] md:h-[65vh] bg-gray-900 overflow-hidden">
                <img
                    src={vectorBannerImg}
                    alt="ICAN AI Education System Visual"
                    className="w-full h-full object-cover object-center"
                />

                {/* Cinematic Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent pointer-events-none"></div>

                {/* Bottom Text Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 z-20">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 inline-block max-w-4xl"
                        >
                            <h3 className="text-lg md:text-2xl font-bold text-blue-300 mb-2">AI 기반 우주교육 시스템</h3>
                            <p className="text-xs md:text-sm text-gray-200 leading-relaxed">
                                에드워드 중심의 드림팀이 개발한 혁신적인 AI 교육시스템으로, 아이캔의 20년 교육 노하우를 학습한 '닥터아이캔'이 개인별 맞춤 강화학습을 제공합니다.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto relative z-10">

                    {/* Text Title Section */}
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
                            <div className="grid md:grid-cols-5 h-full">
                                {/* Image Side - 3 Cols (Restrained Size, Reduced Min-Height) */}
                                <div className="md:col-span-3 relative h-[250px] md:h-auto min-h-[250px] bg-[#0f1014] overflow-hidden">
                                    <img
                                        src={vectorProcessV2Img}
                                        alt="ICAN Vector Data Process V2"
                                        className="w-full h-full object-cover shadow-2xl"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0f1014]/50"></div>
                                </div>

                                {/* Content Side - 2 Cols (Tighter Spacing) */}
                                <div className="md:col-span-2 p-6 md:py-8 md:px-10 flex flex-col justify-center relative z-10 bg-[#0f1014]">
                                    <h3 className="text-2xl font-bold mb-2 text-blue-400">STEP 2 : 벡터(Vector) 관계형 데이터 분석</h3>
                                    <h4 className="text-white text-lg font-medium mb-6 leading-relaxed break-keep">
                                        "수백만 개의 노드가 연결되어<br />아이만의 고유한 <strong>페르소나</strong>를 규정합니다"
                                    </h4>

                                    <ul className="space-y-4 text-gray-300">
                                        <li className="flex items-start gap-4">
                                            <div className="bg-blue-900/40 p-2 rounded-lg text-blue-400 mt-1 shrink-0">
                                                <Network size={22} />
                                            </div>
                                            <div>
                                                <strong className="block text-white text-lg mb-1">약점의 선명한 관찰</strong>
                                                <span className="text-sm text-gray-400 leading-relaxed block break-keep">
                                                    벡터 DB에 쌓인 수백만 개의 데이터 연결성이 아이의 학습 및 행동 패턴을 시각화하여, 감춰진 약점을 선명하게 드러냅니다.
                                                </span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <div className="bg-purple-900/40 p-2 rounded-lg text-purple-400 mt-1 shrink-0">
                                                <Database size={22} />
                                            </div>
                                            <div>
                                                <strong className="block text-white text-lg mb-1">강화학습(Reinforcement Learning)</strong>
                                                <span className="text-sm text-gray-400 leading-relaxed block break-keep">
                                                    구축된 개인 데이터베이스를 근거로 최적화된 강화학습을 제공하여, 아이를 우리가 원하는 이상적인 인재로 성장시킵니다.
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
            </section >
        </div >
    );
};

export default CurriculumSystem;
