import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { VISION_DETAILS } from '../constants';
import { ArrowLeft, Brain, Cpu, Rocket } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Vision: React.FC = () => {
    const { title, subtitle, pillars } = VISION_DETAILS;
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(pillars[0].id);

    // Handle anchor links or default to first tab
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const exists = pillars.find(p => p.id === id);
            if (exists) setActiveTab(id);
        }
    }, [location, pillars]);

    // Icon mapping
    const getIcon = (id: string) => {
        switch (id) {
            case 'ai-system': return <Cpu className="w-6 h-6" />;
            case 'space-curriculum': return <Rocket className="w-6 h-6" />;
            case 'future-readiness': return <Brain className="w-6 h-6" />;
            default: return null;
        }
    };

    const activeContent = pillars.find(p => p.id === activeTab);

    return (
        <div className="bg-[#F5F5F7] min-h-screen pt-24 pb-24 font-sans text-[#1d1d1f]">
            <div className="max-w-[1024px] mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <Link to="/" className="inline-flex items-center gap-1 text-[#0071E3] font-medium mb-8 hover:underline">
                        <ArrowLeft size={16} /> Back to Home
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h1>
                        <p className="text-xl text-gray-500 font-medium">{subtitle}</p>
                    </motion.div>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
                    {pillars.map((pillar) => (
                        <button
                            key={pillar.id}
                            onClick={() => setActiveTab(pillar.id)}
                            className={`flex items-center gap-3 px-6 py-4 rounded-2xl text-left transition-all duration-300 border-2 ${activeTab === pillar.id
                                    ? 'bg-white border-[#0071E3] shadow-md scale-105 z-10'
                                    : 'bg-white border-transparent text-gray-400 hover:bg-gray-50'
                                }`}
                        >
                            <div className={`p-2 rounded-lg ${activeTab === pillar.id ? 'bg-[#0071E3] text-white' : 'bg-gray-100 text-gray-400'}`}>
                                {getIcon(pillar.id)}
                            </div>
                            <span className={`font-bold ${activeTab === pillar.id ? 'text-[#1d1d1f]' : ''}`}>{pillar.title}</span>
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm min-h-[400px]">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {activeContent && (
                            <div>
                                <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gray-100">
                                    <div className="p-3 rounded-xl bg-[#F5F5F7] text-[#1d1d1f]">
                                        {getIcon(activeContent.id)}
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold">{activeContent.title}</h2>
                                </div>
                                <div
                                    className="prose prose-lg prose-headings:text-[#1d1d1f] prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-[#1d1d1f] max-w-none"
                                    dangerouslySetInnerHTML={{ __html: activeContent.content }}
                                />
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Script / Dialogue Summary (Optional but requested context) */}
                <div className="mt-16 bg-[#1d1d1f] text-white rounded-3xl p-8 md:p-12">
                    <h3 className="text-2xl font-bold mb-6">WHY "Space Age"?</h3>
                    <div className="space-y-6 text-gray-300 leading-relaxed font-medium">
                        <p>
                            "우주 시대(Space Age)"는 단순한 우주 여행을 의미하지 않습니다. 그것은 예측할 수 없는 미래의 복잡한 난제들을 상징합니다.
                        </p>
                        <p>
                            우리가 아이들에게 이중 언어를 가르치는 이유는 단순한 의사소통 도구를 넘어, 두 언어 사이를 오가는 과정에서 발생하는 <span className="text-white font-bold">인지적 유연성(Cognitive Flexibility)</span>을 기르기 위함입니다. 이것이 바로 불확실한 미래를 살아갈 아이들에게 가장 필요한 '적응력'이자 '문제 해결 능력'입니다.
                        </p>
                        <p>
                            아이캔은 이러한 철학을 바탕으로, 이미 다가온 AI 시대를 뛰어넘는(Warp Ship) 새로운 교육 패러다임을 제시합니다.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Vision;
