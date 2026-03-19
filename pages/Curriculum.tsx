import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, Clock, Star, Check, Rocket, Zap, Globe, MessageSquare, ExternalLink, Sparkles, MousePointerClick } from 'lucide-react';
import { motion } from 'framer-motion';
import BrochureViewer from '../components/BrochureViewer';
import brochurePdf from '../curriculum-brochure.pdf';
import fiveStepFrameworkPdf from '../five_step_framework.pdf';
import CurriculumSystem from '../components/CurriculumSystem';

const Curriculum: React.FC = () => {
  const { content } = useLanguage();
  const { spaceProgram, curriculum, curriculumPage } = content;

  // Map module icons
  const moduleIcons = [
    <Rocket className="w-6 h-6 text-white" />,
    <Globe className="w-6 h-6 text-white" />,
    <MessageSquare className="w-6 h-6 text-white" />,
    <Zap className="w-6 h-6 text-white" />
  ];

  return (
    <div className="bg-[#F5F5F7] min-h-screen pb-24 font-sans">
      <div className="max-w-[1024px] mx-auto px-6 space-y-8 mt-12 md:mt-20">

        {/* --- 1. THE HYBRID HERO SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16"
        >
          {/* Left: Traditional Foundation */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#D1A658]/10 px-4 py-2 rounded-full text-sm font-semibold text-[#B38531] w-fit border border-[#D1A658]/20">
              <span className="w-2 h-2 bg-[#D1A658] rounded-full animate-pulse"></span>
              전통과 미래의 하이브리드 커리큘럼
            </div>
            <h2 className="text-4xl md:text-[2.75rem] font-extrabold text-[#1d1d1f] tracking-tight leading-tight">
              검증된 <span className="text-[#0071E3] relative inline-block">탁월함<svg className="absolute -bottom-2 w-full h-3 text-[#0071E3]/20" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="4" fill="none"/></svg></span> 위에<br />
              <span className="bg-gradient-to-r from-indigo-600 to-emerald-500 bg-clip-text text-transparent drop-shadow-sm">우주적 사고</span>를 세우다.
            </h2>
            <p className="text-lg text-[#86868b] leading-relaxed pr-4">
              아이캔은 확신합니다. 가장 확실한 미래 대비는 모래성이 아닌, <strong className="text-[#1d1d1f]">단단한 기초</strong> 위에 지어집니다. 20년간 압도적인 결과를 증명해 온 <strong className="text-[#1d1d1f]">1:1 몰입형 영어 교육</strong>을 바탕으로, 미래 사회의 거대한 시스템을 꿰뚫어보는 <strong className="text-[#1d1d1f]">우주적 사고(Cosmic Thinking)</strong> 콘텐츠를 완벽하게 융합했습니다.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-[15px] font-medium text-[#1d1d1f] pt-2">
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-100"><Check className="w-4 h-4 text-emerald-500" /> 빈틈없는 영어 주도권</div>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-100"><Check className="w-4 h-4 text-emerald-500" /> 통찰력 있는 문제 해결</div>
            </div>
          </div>

          {/* Right: The Cosmic Future Sandboxes (EDUSPACE & RE-EARTH) */}
          <div className="lg:col-span-5 flex flex-col gap-3 relative">
            <div className="absolute -inset-10 bg-gradient-to-br from-indigo-100/40 via-blue-50/20 to-emerald-100/40 rounded-[3rem] blur-3xl -z-10"></div>
            
            {/* EDUSPACE Banner */}
            <a href="https://eduspace-three.vercel.app" target="_blank" rel="noopener noreferrer" className="relative w-full h-[110px] rounded-[24px] bg-gradient-to-r from-[#171f3a] via-[#143070] to-[#04cbe1] flex items-center justify-between px-6 shadow-lg shadow-blue-900/10 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 overflow-hidden cursor-pointer group border border-white/10">
              {/* Background Particles Pattern */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-6 left-[10%] w-1 h-1 rounded-full bg-white opacity-40"></div>
                <div className="absolute top-5 left-[24%] w-1.5 h-1.5 rounded-full bg-indigo-300 opacity-60"></div>
                <div className="absolute bottom-6 right-[30%] w-1.5 h-1.5 rounded-full bg-cyan-200 opacity-50"></div>
                <div className="absolute top-8 right-[20%] w-0.5 h-0.5 rounded-full bg-white opacity-80"></div>
              </div>
              
              <div className="flex items-center gap-5 relative z-10 w-full">
                <div className="w-14 h-14 shrink-0 rounded-[14px] bg-[#1d438a] flex items-center justify-center shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)] border border-white/10 group-hover:bg-[#2350a4] transition-colors">
                  <Globe className="w-7 h-7 text-[#6defff] group-hover:rotate-12 transition-transform duration-500" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="text-white font-extrabold text-xl tracking-tight leading-tight mb-1 truncate">EDUSPACE</span>
                  <span className="text-cyan-100/80 text-xs font-medium tracking-wide truncate">Educational Tools & Resources</span>
                </div>
                <div className="flex flex-col items-end shrink-0 gap-2 pl-2">
                  <div className="bg-[#6defff]/15 text-[#6defff] text-[11px] font-bold px-3 py-1 rounded-full border border-[#6defff]/30 backdrop-blur-sm group-hover:bg-[#6defff]/25 transition-colors">
                    3 tools
                  </div>
                  <ChevronDown className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-y-1 transition-all" strokeWidth={2.5} />
                </div>
              </div>
            </a>

            {/* RE-EARTH Banner */}
            <a href="/re-earth-flipbook/Revival_Earth_Flipbook/index.html" target="_blank" rel="noopener noreferrer" className="relative w-full h-[110px] rounded-[24px] bg-gradient-to-r from-[#0d2a17] via-[#0d5930] to-[#0b9165] flex items-center justify-between px-6 shadow-lg shadow-emerald-900/10 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 overflow-hidden cursor-pointer group border border-white/10 mt-1">
              {/* Background Particles Pattern */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-5 left-[15%] w-1 h-1 rounded-full bg-emerald-200 opacity-20 blur-[1px]"></div>
                <div className="absolute bottom-4 right-[28%] w-4 h-4 rounded-full bg-emerald-400 opacity-10 blur-xl"></div>
                <div className="absolute top-7 right-[16%] w-2 h-2 rounded-full bg-emerald-300 opacity-20 blur-sm"></div>
              </div>

              <div className="flex items-center gap-5 relative z-10 w-full">
                <div className="w-14 h-14 shrink-0 rounded-[14px] bg-[#114b2a] flex items-center justify-center shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)] border border-white/10 group-hover:bg-[#155d34] transition-colors">
                  <div className="w-7 h-7 rounded-full border-[2px] border-[#6ee7b7] flex flex-col items-center justify-center gap-[2px] opacity-90 overflow-hidden group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-4 h-[5px] text-[#6ee7b7] fill-none stroke-current" viewBox="0 0 24 8" preserveAspectRatio="none">
                      <path d="M0,4 Q3,0 6,4 T12,4 T18,4 T24,4" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    <svg className="w-4 h-[5px] text-[#6ee7b7] fill-none stroke-current" viewBox="0 0 24 8" preserveAspectRatio="none">
                      <path d="M0,4 Q3,0 6,4 T12,4 T18,4 T24,4" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="text-white font-extrabold text-xl tracking-tight leading-tight mb-1 truncate">RE-EARTH</span>
                  <span className="text-emerald-100/80 text-xs font-medium tracking-wide truncate">Environmental & Sustainability Tools</span>
                </div>
                <div className="flex flex-col items-end shrink-0 gap-2 pl-2">
                  <div className="bg-[#6ee7b7]/15 text-[#6ee7b7] text-[11px] font-bold px-3 py-1 rounded-full border border-[#6ee7b7]/30 backdrop-blur-sm group-hover:bg-[#6ee7b7]/25 transition-colors">
                    1 tools
                  </div>
                  <ChevronDown className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-y-1 transition-all" strokeWidth={2.5} />
                </div>
              </div>
            </a>
          </div>
        </motion.div>

        {/* --- 2. THE SYNERGY GRID (Infographic) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden relative border border-gray-100 mb-16"
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl -ml-32 -mb-32"></div>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1d1d1f] mb-5 tracking-tight">
                현재와 미래를 잇는 <span className="text-[#0071E3]">3가지 코어 시너지</span>
              </h2>
              <p className="text-lg text-[#86868b] max-w-2xl mx-auto leading-relaxed">
                아이캔의 하이브리드 커리큘럼은 독립된 두 가지를 배우는 정적인 과정이 아닙니다. <br className="hidden md:block" />
                <strong className="text-[#1d1d1f]">언어라는 강력한 무기</strong>로 <strong className="text-[#1d1d1f]">우주적 사고</strong>를 체화하는 완벽한 융합 과정입니다.
              </p>
            </div>

            {/* Infographic Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {/* Card 1: Tradition */}
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-[1.5rem] p-7 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-900 rounded-[1rem] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                  <span className="text-2xl text-white font-serif italic pr-0.5">A</span>
                </div>
                <h3 className="text-xl font-bold text-[#1d1d1f] mb-3">영어라는 강력한 도구</h3>
                <p className="text-[#86868b] text-[15px] leading-relaxed">
                  20년간 검증된 1:1 몰입 교육으로 어떤 환경에서도 주도적으로 의사소통할 수 있는 <strong className="text-slate-700">흔들림 없는 언어의 기반</strong>을 다집니다.
                </p>
              </div>

              {/* Card 2: Future */}
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-[1.5rem] p-7 border border-indigo-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-[1rem] flex items-center justify-center mb-6 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🌌</span>
                </div>
                <h3 className="text-xl font-bold text-[#1d1d1f] mb-3">미래 시스템 사고력</h3>
                <p className="text-[#86868b] text-[15px] leading-relaxed break-keep">
                  EDUSPACE와 RE-EARTH 커리큘럼을 통해 복잡한 문제를 구조적으로 꿰뚫어보는 <strong className="text-indigo-600">시스템 사고(Systems Thinking)</strong>와 미래 솔루션에 집중하는 <strong className="text-indigo-600">우주적 사고(Cosmic Thinking)</strong>를 흡수합니다.
                </p>
              </div>

              {/* Card 3: Synergy */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[1.5rem] p-7 border border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-200 to-transparent opacity-40 rounded-bl-full group-hover:scale-110 transition-transform"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-[1rem] flex items-center justify-center mb-6 shadow-md shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                    <span className="text-2xl filter drop-shadow-sm">👑</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1d1d1f] mb-3">융합형 리더십 완성</h3>
                  <p className="text-[#86868b] text-[15px] leading-relaxed">
                    언어 능력과 우주적 시야가 결합될 때 발생하는 엄청난 시너지. 아이들은 <strong className="text-emerald-700">미래 사회를 설계하는 통찰력 있는 청지기</strong>로 자라납니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Message */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-4xl">👨‍👩‍👧‍👦</span>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-xl font-bold text-[#1d1d1f] mb-2">
                    학부모님께 드리는 약속
                  </h4>
                  <p className="text-[#86868b] leading-relaxed">
                    20년간 축적된 노하우로, 우리 아이들이 <strong className="text-[#1d1d1f]">불확실한 미래에도 당당하게 자신의 길을 개척할 수 있는 힘</strong>을 길러드립니다.
                    언어 능력을 넘어 문제 해결력, 창의력, 그리고 회복탄력성까지 — 아이캔과 함께라면 우리 아이의 미래가 달라집니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#0071E3] mb-1">20+</div>
                <div className="text-xs md:text-sm text-[#86868b]">Years of Excellence</div>
              </div>
              <div className="text-center border-x border-gray-200">
                <div className="text-3xl md:text-4xl font-bold text-[#0071E3] mb-1">1:1</div>
                <div className="text-xs md:text-sm text-[#86868b]">Personalized Learning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#0071E3] mb-1">∞</div>
                <div className="text-xs md:text-sm text-[#86868b]">Future Possibilities</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Brochure Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <BrochureViewer pdfUrl={brochurePdf} title="아이캔 하이브리드 커리큐럼 브로셔" />
        </motion.div>

        {/* SPACE PROGRAM Section - Large Feature Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm overflow-hidden relative"
        >
          <div className="relative z-10 flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-1 bg-[#0071E3]/10 text-[#0071E3] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-6">
                <Star className="w-3 h-3 fill-current" /> {spaceProgram.badge}
              </div>
              <a
                href="https://eduspace-three.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group block mb-6"
              >
                {/* Sandbox-style Interactive Card */}
                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 rounded-2xl p-5 md:p-6 border-2 border-dashed border-indigo-300 group-hover:border-indigo-500 transition-all duration-300 overflow-hidden"
                >
                  {/* Animated corner sparkles */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full opacity-20 blur-xl"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-3 right-3"
                  >
                    <Sparkles className="w-5 h-5 text-amber-400" />
                  </motion.div>

                  {/* LIVE Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-lg">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_6px_rgba(74,222,128,0.8)]"></span>
                      LIVE 특별 프로그램
                    </span>
                    <span className="inline-flex items-center gap-1 bg-white/80 backdrop-blur px-2 py-0.5 rounded-full text-[10px] font-semibold text-indigo-600 border border-indigo-200">
                      <MousePointerClick className="w-3 h-3" />
                      클릭하여 체험
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="flex flex-col font-black leading-none drop-shadow-sm mb-3">
                    <span className="text-[#1d1d1f] tracking-tight text-lg md:text-2xl mb-2">폴샘과 함께 하는</span>
                    <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent tracking-tighter text-3xl md:text-5xl break-keep">
                      에듀스페이스 캠프
                    </span>
                  </h2>

                  {/* Interactive CTA Bar */}
                  <div className="flex items-center gap-3 mt-4">
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg group-hover:shadow-xl group-hover:from-indigo-700 group-hover:to-purple-700 transition-all"
                    >
                      <Rocket className="w-4 h-4" />
                      특별 프로그램 체험하기
                      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                    </motion.div>
                    <span className="text-xs text-indigo-400 font-medium hidden sm:block">
                      AI 우주 탐험 인터랙티브 학습 앱
                    </span>
                  </div>

                  {/* Bottom decoration dots */}
                  <div className="absolute bottom-2 right-3 flex gap-1 opacity-40">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  </div>
                </motion.div>
              </a>
              <p className="text-xl text-[#86868b] font-medium mb-8">
                {spaceProgram.subtitle}
              </p>
              <p className="text-[#1d1d1f] leading-relaxed">
                {spaceProgram.description}
              </p>
            </div>

            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {spaceProgram.modules.map((mod, idx) => (
                <div key={idx} className="bg-[#F5F5F7] p-5 rounded-2xl">
                  <div className="w-10 h-10 rounded-full bg-[#0071E3] flex items-center justify-center mb-4">
                    {moduleIcons[idx] || <Star className="w-5 h-5 text-white" />}
                  </div>
                  <h4 className="font-semibold text-[#1d1d1f] mb-1">{mod.title}</h4>
                  <p className="text-sm text-[#86868b] leading-snug">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Schedule Section - Split Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-6 h-6 text-[#0071E3]" />
                <h3 className="text-xl font-semibold text-[#1d1d1f]">{curriculumPage.schedule.title}</h3>
              </div>
              <h4 className="text-lg font-medium text-[#1d1d1f] mb-6">{curriculumPage.schedule.daily}</h4>

              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <span className="text-[#86868b]">{curriculumPage.schedule.manToMan}</span>
                  <span className="text-2xl font-semibold text-[#1d1d1f]">6<span className="text-sm font-normal text-gray-500 ml-1">hrs</span></span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <span className="text-[#86868b]">{curriculumPage.schedule.group}</span>
                  <span className="text-2xl font-semibold text-[#1d1d1f]">2<span className="text-sm font-normal text-gray-500 ml-1">hrs</span></span>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-6">{curriculumPage.schedule.note}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#1d1d1f] rounded-3xl p-8 shadow-sm text-white flex flex-col justify-center"
          >
            <h4 className="text-2xl font-semibold mb-4">{curriculumPage.schedule.saturday}</h4>
            <p className="text-gray-400 mb-8 leading-relaxed">
              {curriculumPage.schedule.saturdayDesc}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {['FunFun English', 'Creative Spark', 'Speech Power', 'TED Class', 'Essay Clinic'].map(cls => (
                <span key={cls} className="bg-[#333] px-3 py-1 rounded-lg text-xs font-medium text-gray-300">
                  {cls}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between mt-auto">
              <div>
                <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Time</div>
                <div className="text-lg font-medium">08:00 - 12:00</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Tuition</div>
                <div className="text-2xl font-bold text-[#2997ff]">{curriculumPage.schedule.costVal}</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Curriculum Infographic - 5-Step Roadmap Timeline */}
        <div className="pt-16 pb-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#0071E3]/10 px-4 py-2 rounded-full text-sm font-semibold text-[#0071E3] mb-4">
              <span className="w-2 h-2 bg-[#0071E3] rounded-full"></span>
              핵심 성장 로드맵
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#1d1d1f] mb-4 tracking-tight">🧠 우주인 사고력 5단계 프레임워크</h3>
            <p className="text-gray-500 text-lg">상세하고 지루한 암기가 아닌, 아이캔만의 직관적인 5단계 우주 진출 프로세스</p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Horizontal Connecting Timeline Line (Desktop) */}
            <div className="hidden md:block absolute top-[110px] left-[10%] w-[80%] h-1.5 bg-gradient-to-r from-blue-100 via-[#0071E3]/30 to-[#0071E3] rounded-full z-0"></div>
            
            {/* Vertical Connecting Timeline Line (Mobile) */}
            <div className="block md:hidden absolute top-0 left-[31px] w-1.5 h-[90%] bg-gradient-to-b from-blue-100 via-[#0071E3]/30 to-[#0071E3] rounded-full z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-5 relative z-10">
              {curriculum.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-row md:flex-col gap-6 md:gap-0 group"
                >
                  {/* Step Node (Mobile: Left, Desktop: Top-Center) */}
                  <div className="shrink-0 md:mb-6 flex flex-col md:items-center relative">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-[0_4px_20px_rgb(0,0,0,0.06)] border-2 border-gray-50 flex items-center justify-center text-xl font-black text-gray-300 group-hover:border-[#0071E3] group-hover:text-[#0071E3] group-hover:scale-110 transition-all duration-300 z-10 group-hover:shadow-[0_4px_20px_rgba(0,113,227,0.2)]">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="bg-white rounded-[1.25rem] p-4 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow flex-1 flex flex-col hover:-translate-y-1 duration-300">
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                      <div className="absolute bottom-2 left-2">
                        <span className="text-[10px] font-bold px-2 py-1 bg-white/20 backdrop-blur-md text-white rounded-md border border-white/20 uppercase tracking-wide shadow-sm">
                          {item.target}
                        </span>
                      </div>
                    </div>
                    <h4 className="text-base font-extrabold text-[#1d1d1f] mb-3 leading-tight tracking-tight px-1">{item.title}</h4>
                    <p className="text-[13px] text-gray-500 leading-relaxed bg-gray-50/80 p-3 rounded-xl border border-gray-100 mb-0 mt-auto break-keep">
                      <strong className="text-gray-800 block mb-1">핵심 미션:</strong>
                      {item.description[0]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>




        {/* 5-Step Framework PDF Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full mt-16"
        >
          <BrochureViewer
            pdfUrl={fiveStepFrameworkPdf}
            title="5단계 사고력 미래 리더 설계"
            description="우주인 사고력 프로그램의 상세 내용을 확인해보세요."
            fileName="5_Step_Framework.pdf"
            orientation="landscape"
            layout="single"
            width={800}
            height={600}
          />
        </motion.div>

        {/* Foundation Data System (Moved to bottom as additional information) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full mt-24 pt-16 border-t border-gray-200/60"
        >
          <CurriculumSystem />
        </motion.div>

      </div>
    </div>
  );
};

export default Curriculum;