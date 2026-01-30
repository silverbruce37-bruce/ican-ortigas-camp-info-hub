import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import ConundrumCard from '../components/ConundrumCard';
import heroMonitorImg from '../hero-monitor-final-wide.png';
import TeamShowcase from '../components/TeamShowcase';

const Home: React.FC = () => {
  const { content } = useLanguage();

  return (
    <div className="font-sans bg-white text-black">


      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-semibold tracking-wide border border-gray-200">
            {content.home.hero.badge}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-2 flex flex-col md:flex-row items-center justify-center gap-3">
            <span className="flex items-center gap-3">
              <Rocket className="w-10 h-10 md:w-12 md:h-12 text-ican-500" strokeWidth={2} />
              {content.home.hero.titleLine1}
            </span>
          </h1>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight">
            <span className="text-ican-600">{content.home.hero.titleLine2}</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-500 font-medium mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          {content.home.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/curriculum"
            className="px-8 py-3.5 bg-ican-600 text-white rounded-full font-bold text-lg hover:bg-ican-700 transition-colors shadow-lg shadow-ican-200 flex items-center justify-center gap-2"
          >
            {content.home.hero.ctaCurriculum} <ArrowRight size={18} />
          </Link>
          <Link
            to="/fees"
            className="px-8 py-3.5 bg-white text-gray-700 border border-gray-200 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            {content.home.hero.ctaFees} <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Paul Sam Team Showcase */}
        <TeamShowcase />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 w-full max-w-4xl relative"
        >
          <img
            src={heroMonitorImg}
            alt="Space Leaders Journey"
            className="w-full rounded-lg shadow"
          />
          <a
            href="https://eduspace-astronaut-mind-seven.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-[8%] right-0 w-[41%] h-[38%] z-10 cursor-pointer"
            aria-label="Visit ICAN Academy"
          />
        </motion.div>
      </section>

      <section className="py-16 px-4 mt-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-gray-900 mb-3 tracking-tight">닥터아이캔의 에듀스페이스에서 우주인이 되어 갑니다.</h2>
          <p className="text-gray-500 max-w-3xl mx-auto font-medium">
            20년 교육 노하우가 집약된 AI '닥터아이캔'의 개인별 맞춤 설계와 크리스천 인성 교육으로 완성하는 미래형 에듀스페이스
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {content.home.philosophy.map((item, idx) => (
            <Link key={idx} to="/vision" className="block p-6 border rounded hover:shadow-lg">
              <div className="mb-4 text-xl">{item.icon}</div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-4xl font-black text-gray-800 text-center mb-8 tracking-tight">{content.home.location.title}</h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <p className="mb-4">{content.home.location.desc}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium">{content.home.location.safety}</h4>
                <p className="text-sm text-gray-600">{content.home.location.safetyDesc}</p>
              </div>
              <div>
                <h4 className="font-medium">{content.home.location.infra}</h4>
                <p className="text-sm text-gray-600">{content.home.location.infraDesc}</p>
              </div>
            </div>
            <Link
              to="/living"
              className="inline-block mt-4 text-sm font-medium underline flex items-center"
            >
              {content.home.hero.ctas.living} <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
              alt="Ortigas Skyline"
              className="w-full rounded-lg shadow"
            />
          </div>
        </div>
      </section>

      {/* Core Manifests Section */}
      <section className="py-12 px-4">
        <h2 className="text-4xl font-black text-gray-900 text-center mb-8 tracking-tight">{content.home.strengthsTitle}</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {content.strengths.map((item, idx) => (
            <div key={idx} className="p-6 border rounded hover:shadow-lg">
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Conundrum Cards */}
      <section className="bg-gray-50 py-12 px-4">
        <h2 className="text-4xl font-black text-gray-800 text-center mb-8 tracking-tight">{content.home.specialProjectsTitle}</h2>
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6">
          {content.home.specialProjects.map((project, idx) => (
            <ConundrumCard
              key={idx}
              title={project.title}
              subtitle={project.subtitle}
              category={project.category}
              icon={project.icon}
              description={project.description}
              details={project.details}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/curriculum"
            className="inline-block text-sm font-medium underline flex items-center justify-center"
          >
            {content.home.hero.ctaCurriculum} <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-12 text-center">
        <h2 className="text-4xl font-bold mb-4">{content.home.ctaFooter.title}</h2>
        <p className="mb-6">{content.home.ctaFooter.subtitle}</p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/living"
            className="bg-yellow-500 text-black px-6 py-3 rounded"
          >
            {content.home.hero.ctas.living}
          </Link>
          <a
            href="https://pf.kakao.com/_jMuBxb"
            className="border border-white px-6 py-3 rounded"
          >
            {content.home.hero.ctas.kakao}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;