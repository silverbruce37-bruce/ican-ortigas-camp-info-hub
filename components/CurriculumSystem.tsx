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
        <div className="w-full bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden relative mb-12">
            {/* 1. HERO VISUAL (Sleek Card Banner) */}
            <div className="relative w-full h-48 md:h-64 overflow-hidden bg-gray-900 group">
                <img
                    src={vectorBannerImg}
                    alt="ICAN AI Education System Visual"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 md:left-10 z-20">
                    <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-400/30 rounded-full text-xs font-bold tracking-widest uppercase mb-3 backdrop-blur-md">
                        FOUNDATION: ICAN DATA SYSTEM
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">데이터 기반 초개인화 엔진</h3>
                    <p className="text-sm text-gray-300 leading-relaxed max-w-2xl">
                        에드워드 드림팀이 설계한 혁신적인 AI 교육시스템. <br className="hidden md:block"/>아이캔의 20년 교육 노하우를 학습한 '닥터아이캔'이 모든 커리큘럼의 백엔드를 책임집니다.
                    </p>
                </div>
            </div>

            <div className="p-6 md:p-10 relative overflow-hidden bg-gradient-to-b from-[#fafafc] to-white">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10">
                    {/* 2. STEP 1: 7 Diagnosis (Input) */}
                    <div className="mb-14">
                        <h3 className="text-lg md:text-xl font-bold text-center mb-8 flex items-center justify-center gap-3">
                            <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                            <span className="text-gray-900 tracking-tight">STEP 1 : 7가지 정밀 진단 (Input)</span>
                            <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
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
                    <div className="mb-14">
                        <div className="relative bg-[#0f1014] rounded-3xl overflow-hidden shadow-xl border border-gray-800 md:h-[220px]">
                            <div className="grid md:grid-cols-5 h-full">
                                <div className="md:col-span-3 relative h-full min-h-[160px] bg-[#0f1014] overflow-hidden">
                                    <img
                                        src={vectorProcessV2Img}
                                        alt="ICAN Vector Data Process"
                                        className="w-full h-full object-cover object-center opacity-80 mix-blend-screen"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0f1014]"></div>
                                </div>

                                <div className="md:col-span-2 p-5 md:py-6 md:px-8 flex flex-col justify-center relative z-10 bg-[#0f1014]">
                                    <h3 className="text-sm font-bold mb-2 text-blue-400">STEP 2 : 데이터 융합 분석 (Process)</h3>
                                    <h4 className="text-white text-sm md:text-base font-semibold mb-4 leading-snug break-keep">
                                        "수백만 개의 노드가 연결되어 아이만의 고유한 패턴을 읽어냅니다."
                                    </h4>

                                    <ul className="space-y-3 text-gray-300">
                                        <li className="flex items-start gap-3">
                                            <Network size={16} className="text-blue-400 shrink-0 mt-0.5" />
                                            <span className="text-xs text-gray-400 leading-relaxed break-keep">
                                                정형/비정형 데이터를 결합해 눈에 보이지 않는 약점과 습관을 선명하게 도출합니다.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Database size={16} className="text-purple-400 shrink-0 mt-0.5" />
                                            <span className="text-xs text-gray-400 leading-relaxed break-keep">
                                                벡터 DB 기반 초개인화 엔진이 가장 효율적인 폴샘의 솔루션을 매칭해 줍니다.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. STEP 3: Solution (Output) */}
                    <div>
                        <h3 className="text-lg md:text-xl font-bold text-center mb-8 flex items-center justify-center gap-3">
                            <span className="w-8 h-1 bg-amber-500 rounded-full"></span>
                            <span className="text-gray-900 tracking-tight">STEP 3 : 폴샘의 맞춤형 솔루션 (Output)</span>
                            <span className="w-8 h-1 bg-amber-500 rounded-full"></span>
                        </h3>
                        <div className="grid md:grid-cols-3 gap-5">
                            <motion.div whileHover={{ y: -3 }} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                                <div className="w-12 h-12 mx-auto bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4">
                                    <Layers size={24} />
                                </div>
                                <h4 className="text-sm font-bold mb-2 text-gray-900">모듈 학습 매칭</h4>
                                <p className="text-gray-500 text-xs leading-relaxed break-keep">
                                    분석된 결핍을 즉시 보완할 수 있는 개인별 학습 모듈을 제공합니다.
                                </p>
                            </motion.div>

                            <motion.div whileHover={{ y: -3 }} className="bg-gradient-to-br from-ican-600 to-ican-800 text-white p-6 rounded-2xl shadow-md text-center transform md:-translate-y-2">
                                <div className="w-12 h-12 mx-auto bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                                    <Lightbulb size={24} className="text-yellow-300" />
                                </div>
                                <h4 className="text-sm font-bold mb-2">창발교육 제안</h4>
                                <p className="text-blue-100/90 text-xs leading-relaxed break-keep">
                                    고유한 강점을 미래 교육과 연결시켜 새로운 가능성을 열어주는 창발적 제도를 시뮬레이션합니다.
                                </p>
                            </motion.div>

                            <motion.div whileHover={{ y: -3 }} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                                <div className="w-12 h-12 mx-auto bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                                    <BookOpen size={24} />
                                </div>
                                <h4 className="text-sm font-bold mb-2 text-gray-900">템플릿 & 가이드</h4>
                                <p className="text-gray-500 text-xs leading-relaxed break-keep">
                                    성장을 위한 구체적인 실행 템플릿과 활용법을 폴샘이 직접 가이드합니다.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurriculumSystem;
