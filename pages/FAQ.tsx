import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ: React.FC = () => {
  const { content } = useLanguage();
  const { faq } = content;
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredItems = faq.items.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#F5F5F7] min-h-screen pt-24 pb-24 font-sans text-[#1d1d1f]">
      <div className="max-w-3xl mx-auto px-6">

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Support</h1>

          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="How can we help?"
              className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-10 pr-4 text-lg focus:outline-none focus:border-[#0071E3] focus:ring-4 focus:ring-[#0071E3]/10 transition-all"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {filteredItems.length === 0 ? (
            <div className="p-12 text-center text-gray-500">No results found.</div>
          ) : (
            filteredItems.map((item, index) => (
              <div key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-lg pr-8">{item.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 pt-0 text-gray-600 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))
          )}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-4">Still need help?</h3>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">{faq.contactMore}</p>
          <a href="kakao:icanacademy" className="inline-block bg-[#0071E3] text-white px-8 py-3 rounded-full font-medium hover:bg-[#0077ED] transition-colors">
            {faq.kakaoContact}
          </a>
        </div>

      </div>
    </div>
  );
};

export default FAQ;