import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CreditCard, FileText, CheckCircle, Plane, AlertTriangle, Info, Sparkles, Coins, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';

const VisaAndEntry: React.FC = () => {
  const { content } = useLanguage();
  const { fees } = content;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-24 pb-32 font-sans text-[#1d1d1f]">
      <div className="max-w-[1024px] mx-auto px-6">

        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 mt-8"
        >
          <span className="text-[#0071E3] font-semibold tracking-wider text-xs uppercase mb-3 block">Investment for Future</span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-[#1d1d1f]">
            Tuition & Costs
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            미래를 위한 가장 가치 있는 투자.<br className="hidden md:block" />
            <span className="text-gray-400 text-lg md:text-xl mt-2 block">투명하고 합리적인 비용 정책을 안내해 드립니다.</span>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Tuition Card - World Class Design */}
          <motion.section variants={itemVariants} className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 overflow-hidden mb-12 border border-white">
            <div className="p-8 md:p-12 bg-gradient-to-r from-[#1d1d1f] to-[#2d2d2f] text-white relative overflow-hidden">
              {/* Background Decorative */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Camp Tuition</h2>
                  <p className="text-white/60 font-medium text-lg">정규 캠프 비용 및 포함 내역</p>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-semibold text-white/90">Premium All-Inclusive</span>
                </div>
              </div>
            </div>

            {/* Content Table - Modern List Style */}
            <div className="p-2 md:p-4">
              {/* Headings (Desktop) */}
              <div className="hidden md:grid grid-cols-12 gap-4 px-8 py-4 text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-gray-100">
                <div className="col-span-4">Duration</div>
                 <div className="col-span-4">Tuition (교육비)</div>
                 <div className="col-span-4 text-right">Material Fee</div>
               </div>

               {/* Items */}
               <div className="divide-y divide-gray-50">
                  {fees.items.map((fee, idx) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ scale: 1.005, backgroundColor: "rgba(249, 250, 251, 0.8)" }}
                      className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-6 md:px-8 md:py-8 items-center transition-all duration-200 rounded-xl"
                    >
                      <div className="col-span-4">
                        <span className="text-lg md:text-2xl font-bold text-[#1d1d1f]">{fee.duration}</span>
                        <div className="md:hidden text-xs text-gray-400 uppercase font-bold mt-1 tracking-wider">Programme</div>
                      </div>
                      <div className="col-span-4 flex flex-col justify-center">
                         <div className="md:hidden text-xs text-gray-400 mb-1">Tuition</div>
                         <span className="text-xl md:text-2xl font-semibold text-[#0071E3] tabular-nums tracking-tight">{fee.tuition}</span>
                      </div>
                      <div className="col-span-4 md:text-right flex flex-col md:block">
                         <div className="md:hidden text-xs text-gray-400 mb-1 mt-2">Material Fee</div>
                      <span className="text-lg font-medium text-gray-600 tabular-nums">{fee.materialFee}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Note Footer */}
            <div className="bg-gray-50 p-6 md:p-8 flex gap-4 border-t border-gray-100">
              <Info className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line font-medium">
                {fees.note}
              </p>
            </div>
          </motion.section>

          {/* Optional Class Section - Gold Accent */}
          {fees.additionalClasses && (
            <motion.section variants={itemVariants} className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 overflow-hidden mb-12 border border-white">
              <div className="p-8 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#1d1d1f]">Special Courses</h3>
                  <p className="text-gray-500 mt-1">더 깊은 학습을 원하는 학생들을 위한 심화 과정</p>
                </div>
                <span className="bg-amber-50 text-amber-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-100 place-self-start md:place-self-auto">Optional</span>
              </div>

              <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {fees.additionalClasses.items.map((item, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-6 hover:bg-[#F2F2F7] transition-colors border border-gray-100">
                    <h4 className="font-bold text-lg mb-2">{item.name}</h4>
                    <div className="flex justify-between items-end">
                      <span className="text-sm text-gray-500 font-medium">{item.duration}</span>
                      <span className="font-bold text-[#1d1d1f] text-lg">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Visa & Requirements Grid - Dark Mode meets Apple Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Visa Card */}
            <motion.section variants={itemVariants} className="bg-[#1d1d1f] text-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[500px]">
              {/* Abstract Art */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                    <Wallet className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Visa & Admin</h3>
                    <p className="text-white/60 text-sm">현지 납부 및 행정 비용</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {fees.visaItems.map((item, idx) => (
                    <div key={idx} className="group">
                      <div className="flex justify-between items-baseline mb-2">
                        <span className="font-semibold text-lg text-gray-200 group-hover:text-white transition-colors">{item.item}</span>
                        <span className="font-bold text-xl text-white tracking-tight">{item.cost}</span>
                      </div>
                      <p className="text-sm text-gray-500 font-medium group-hover:text-gray-400 transition-colors">{item.note}</p>
                      {idx < fees.visaItems.length - 1 && <div className="h-px bg-white/10 mt-6" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
                <p className="text-xs text-gray-400 leading-relaxed">* 위 비용은 필리핀 이민국 정책에 따라 변동될 수 있습니다.</p>
              </div>
            </motion.section>

            {/* Entry Requirements Card - Clean & Safe */}
            <motion.section variants={itemVariants} className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-gray-100 flex flex-col justify-between min-h-[500px]">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1d1d1f]">Entry Requirements</h3>
                    <p className="text-gray-500 text-sm">입국 전 필수 준비사항</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4 p-4 rounded-2xl bg-gray-50/50 hover:bg-gray-50 transition-colors">
                    <FileText className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#1d1d1f] mb-1">{fees.passport}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed font-medium">{fees.passportDesc}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-2xl bg-gray-50/50 hover:bg-gray-50 transition-colors">
                    <Plane className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#1d1d1f] mb-1">{fees.etravel}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed font-medium">{fees.etravelDesc}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-2xl bg-gray-50/50 hover:bg-gray-50 transition-colors">
                    <CreditCard className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#1d1d1f] mb-1">{fees.ticket}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed font-medium">{fees.ticketDesc}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-amber-50 p-6 rounded-2xl border border-amber-100">
                <div className="flex gap-3 items-start">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div className="text-xs text-amber-800 font-medium">
                    <strong className="block mb-2 text-amber-900 text-sm font-bold">{fees.warningTitle}</strong>
                    <ul className="space-y-1.5 list-disc list-inside">
                      {fees.warnings.map((w, i) => <li key={i}>{w}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default VisaAndEntry;