import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CreditCard, FileText, CheckCircle, Plane, AlertTriangle, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const VisaAndEntry: React.FC = () => {
  const { content } = useLanguage();
  const { fees } = content;

  return (
    <div className="bg-[#F5F5F7] min-h-screen pt-24 pb-24 font-sans text-[#1d1d1f]">
      <div className="max-w-[980px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">캠프관련 경비안내</h1>
          <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
            Transparent pricing and clear requirements for your journey.
          </p>
        </div>

        {/* Tuition Fees Card */}
        <section className="bg-white rounded-3xl shadow-sm overflow-hidden mb-8">
          <div className="p-8 md:p-12 border-b border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
              <h2 className="text-3xl font-bold tracking-tight">{fees.tuitionTitle}</h2>
              <span className="text-sm font-semibold text-[#0071E3] bg-blue-50 px-3 py-1 rounded-full">
                {fees.tuitionSubtitle}
              </span>
            </div>
            <p className="text-gray-500 text-sm md:text-base">Comprehensive program fees including tuition and accommodation.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#F5F5F7]/50 text-xs font-semibold uppercase tracking-wide text-gray-500">
                <tr>
                  {fees.headers.map((header, idx) => (
                    <th key={idx} className="p-6 first:pl-8 last:pr-8 md:first:pl-12 md:last:pr-12 whitespace-nowrap">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {fees.items.map((fee, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-6 md:p-8 md:pl-12 font-semibold text-lg">{fee.duration}</td>
                    <td className="p-6 md:p-8 font-medium text-gray-600">{fee.tuition}</td>
                    <td className="p-6 md:p-8 md:pr-12 text-gray-600">{fee.materialFee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 md:p-8 bg-[#F5F5F7]/30 border-t border-gray-100">
            <div className="flex gap-3 items-start md:items-center">
              <Info className="w-5 h-5 text-gray-400 shrink-0 mt-0.5 md:mt-0" />
              <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line">
                {fees.note}
              </p>
            </div>
          </div>
        </section>

        {/* Additional Optional Classes Card */}
        {fees.additionalClasses && (
          <section className="bg-white rounded-3xl shadow-sm overflow-hidden mb-8">
            <div className="p-8 md:p-12 border-b border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                <h2 className="text-3xl font-bold tracking-tight">{fees.additionalClasses.title}</h2>
                <span className="text-sm font-semibold text-[#0071E3] bg-blue-50 px-3 py-1 rounded-full">
                  {fees.additionalClasses.subtitle}
                </span>
              </div>
              <p className="text-gray-500 text-sm md:text-base">
                Specialized courses available for students who want to advance their skills further.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#F5F5F7]/50 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  <tr>
                    {fees.additionalClasses.headers.map((header, idx) => (
                      <th key={idx} className="p-6 first:pl-8 last:pr-8 md:first:pl-12 md:last:pr-12 whitespace-nowrap">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {fees.additionalClasses.items.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-6 md:p-8 md:pl-12 font-semibold text-lg">{item.name}</td>
                      <td className="p-6 md:p-8 font-medium text-gray-600">{item.duration}</td>
                      <td className="p-6 md:p-8 md:pr-12 text-gray-600">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Visa & Admin Fees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <section className="bg-white rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-8">{fees.visaTitle}</h2>
            <div className="space-y-8">
              {fees.visaItems.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-semibold text-lg">{item.item}</h4>
                    <span className="font-bold text-[#1d1d1f]">{item.cost}</span>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">{item.note}</p>
                  {idx < fees.visaItems.length - 1 && <hr className="border-gray-100 mt-6" />}
                </div>
              ))}
            </div>
          </section>

          {/* Entry Requirements */}
          <section className="bg-[#1d1d1f] rounded-3xl p-8 shadow-sm text-white flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-8">{fees.entryTitle}</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wide text-gray-300 mb-1">{fees.passport}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{fees.passportDesc}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wide text-gray-300 mb-1">{fees.etravel}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{fees.etravelDesc}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Plane className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wide text-gray-300 mb-1">{fees.ticket}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{fees.ticketDesc}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex gap-3 items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0" />
                <div className="text-xs text-gray-400 leading-relaxed">
                  <strong className="block text-white mb-1">{fees.warningTitle}</strong>
                  <ul className="list-disc list-inside space-y-1">
                    {fees.warnings.map((w, i) => (
                      <li key={i}>{w}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
};

export default VisaAndEntry;