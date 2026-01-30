import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Clock, Star, Check, Rocket, Zap, Globe, MessageSquare } from 'lucide-react';
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
    <div className="bg-[#F5F5F7] min-h-screen pt-12 pb-24 font-sans">


      {/* Systematic AI Engine - serves as the new Header */}
      <CurriculumSystem />

      <div className="max-w-[1024px] mx-auto px-6 space-y-8 mt-12">

        {/* ICAN Vision Infographic for Parents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm overflow-hidden relative border border-gray-100"
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-100/50 rounded-full blur-3xl -ml-24 -mb-24"></div>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-[#0071E3]/10 px-4 py-2 rounded-full text-sm font-semibold text-[#0071E3] mb-4">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                20년 전통의 아이캔이 준비하는 미래
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
                🚀 우주시대를 향한 교육 비전
              </h2>
              <p className="text-lg text-[#86868b] max-w-2xl mx-auto leading-relaxed">
                우리 아이들이 마주할 미래는 예측하기 어렵습니다. 아이캔은 불확실한 미래에도 <br className="hidden md:block" />
                <strong className="text-[#1d1d1f]">적응하고 문제를 해결할 수 있는 핵심 역량</strong>을 길러줍니다.
              </p>
            </div>

            {/* Infographic Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {/* Card 1 */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100 hover:shadow-md transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">이중언어의 힘</h3>
                <p className="text-[#86868b] text-sm leading-relaxed">
                  한 언어를 쓰다가 다른 언어로 전환할 때, 아이의 뇌는 주의력 전환과 관점 변경 훈련을 합니다. 이것이 <strong className="text-blue-600">인지적 유연성</strong>의 핵심입니다.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100 hover:shadow-md transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl">🌌</span>
                </div>
                <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">우주시대 문제해결력</h3>
                <p className="text-[#86868b] text-sm leading-relaxed">
                  미래 사회는 복잡하고 예측 불가능한 문제들로 가득합니다. 이중언어 교육은 단순한 외국어 능력을 넘어 <strong className="text-purple-600">창의적 문제 해결</strong> 역량을 키워줍니다.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100 hover:shadow-md transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">적응 가능한 핵심 역량</h3>
                <p className="text-[#86868b] text-sm leading-relaxed">
                  아이캔은 아이들에게 단순 암기가 아닌, 어떤 상황에서도 <strong className="text-amber-600">적용하고 활용할 수 있는</strong> 진짜 실력을 만들어 줍니다.
                </p>
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
          <BrochureViewer pdfUrl={brochurePdf} />
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
                href="https://icaneduspace.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 mb-4 transition-transform hover:scale-[1.02]"
              >
                <h2 className="flex flex-col text-3xl md:text-5xl font-black leading-none drop-shadow-sm">
                  <span className="text-[#1d1d1f] tracking-tight">닥터아이캔</span>
                  <span className="text-[#0071E3] tracking-widest mt-1">SPACE CAMP</span>
                </h2>
                <div className="bg-purple-100 p-2 rounded-full border border-purple-200 group-hover:bg-purple-200 transition-colors">
                  <Rocket className="w-6 h-6 md:w-7 md:h-7 text-purple-600 group-hover:animate-pulse" />
                </div>
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

        {/* Curriculum List - Apple List Style */}
        <div className="pt-8">
          <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-8 px-2">🧠 우주인 사고력 5단계 프레임워크</h3>
          <div className="grid grid-cols-1 gap-6">
            {curriculum.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="md:w-1/3 w-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full aspect-video md:aspect-[4/3] object-cover rounded-2xl shadow-sm"
                  />
                </div>
                <div className="md:w-2/3 w-full">
                  <div className="text-[#0071E3] text-xs font-bold uppercase tracking-wide mb-2">Level 0{index + 1}</div>
                  <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">{item.title}</h3>
                  <div className="text-xs font-medium bg-gray-100 text-gray-500 px-2 py-1 rounded-md inline-block mb-6">
                    Target: {item.target}
                  </div>

                  <ul className="space-y-3">
                    {item.description.map((desc, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <Check className="w-5 h-5 text-[#0071E3] shrink-0" />
                        <span className="text-[#1d1d1f] leading-snug">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
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

      </div>
    </div>
  );
};

export default Curriculum;