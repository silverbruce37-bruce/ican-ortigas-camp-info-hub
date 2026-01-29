import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck, ChevronRight, Rocket } from 'lucide-react';
import { ACADEMY_INFO } from '../constants';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import DrIcanChat from './DrIcanChat';

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Use Contexts
  const { language, toggleLanguage, content } = useLanguage();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  const navItems = [
    { label: content.nav.home, path: '/' },
    { label: content.nav.curriculum, path: '/curriculum' },
    { label: content.nav.fees, path: '/fees' },
    { label: content.nav.living, path: '/living' },
    { label: 'Community', path: '/community' }, // Changed from OrtiCarrot to generic Community
    { label: content.nav.blog, path: '/blog' },
    { label: content.nav.faq, path: '/faq' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-ink bg-paper selection:bg-accent selection:text-white relative">
      {/* Apple-style Global Nav Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex flex-col ${scrolled || isMobileMenuOpen ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-[#1D1D1F]/90 backdrop-blur-md'
          }`}
      >
        {/* Top Tech Banner - Global */}
        <div className="bg-gray-900 text-gray-300 text-[10px] md:text-xs py-2 text-center relative z-20 w-full border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2">
            <span className="bg-blue-600 text-white px-1.5 py-0.5 rounded-[3px] font-bold tracking-wider text-[9px] md:text-[10px]">TECH</span>
            <span className="opacity-90 tracking-tight">아이캔 캠프앱은 <span className="text-white font-medium">폴샘의 지휘하에 다양한 AI 에이전트의 협업</span>으로 만들어졌습니다.</span>
          </div>
        </div>
        <div className="max-w-[1024px] mx-auto px-6 h-[48px] flex items-center justify-between gap-4 md:gap-8">
          {/* Logo - Bezaleel's Touch: Added shrink-0 to protect the brand identity */}
          <NavLink
            to="/"
            className={`text-[19px] font-semibold tracking-tight transition-colors flex items-center shrink-0 ${scrolled || isMobileMenuOpen ? 'text-ink' : 'text-white'}`}
            aria-label="ICAN Camp Home"
          >
            <Rocket className="w-5 h-5 mr-2 text-ican-500" />
            <span className="font-bold tracking-tighter">ICAN CAMP</span>
          </NavLink>

          {/* Desktop Nav - Bezaleel's Touch: Centered with margins for breathing room */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 mx-4" aria-label="Main Navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-[12px] font-normal transition-opacity duration-300 ${scrolled
                    ? isActive ? 'text-ink opacity-100 font-medium' : 'text-ink opacity-80 hover:opacity-100 hover:text-accent'
                    : isActive ? 'text-white opacity-100 font-medium' : 'text-white opacity-80 hover:opacity-100'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Utilities */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className={`text-[11px] font-medium px-2 py-1 rounded transition-colors ${scrolled ? 'text-ink hover:text-accent' : 'text-white hover:text-white/80'}`}
            >
              {language === 'ko' ? 'KR' : 'EN'}
            </button>

            {user && (
              <NavLink
                to="/mypage"
                className={`text-[11px] font-medium transition-colors ${scrolled ? 'text-accent' : 'text-[#2997ff]'}`}
              >
                My Page
              </NavLink>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors focus:outline-none ${scrolled || isMobileMenuOpen ? 'text-ink' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-[48px] left-0 w-full bg-paper text-ink pt-6 px-6 overflow-hidden flex flex-col pb-24"
            >
              <div className="flex flex-col space-y-1 divide-y divide-gray-200 border-t border-gray-200">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-4 text-[17px] font-medium text-[#1d1d1f] hover:text-accent transition-colors flex justify-between items-center"
                    >
                      {item.label}
                      <span className="text-gray-400"><ChevronRight size={14} /></span>
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                <button onClick={toggleLanguage} className="text-[14px] font-medium text-accent">
                  Change Language ({language === 'ko' ? 'KR' : 'EN'})
                </button>
                {user && (
                  <NavLink
                    to="/mypage"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-[14px] font-medium text-accent"
                  >
                    My Page
                  </NavLink>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content - adjusted for fixed header + banner */}
      <main className="flex-grow pt-[84px]">
        <Outlet />
      </main>

      {/* Dr. ICAN Chatbot */}
      <DrIcanChat />

      {/* Footer - Apple Style Clean */}
      <footer className="bg-[#F5F5F7] text-[#1d1d1f] pt-16 pb-8 text-[12px]">
        <div className="max-w-[1024px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-b border-gray-300 pb-8">
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-semibold text-ink mb-4">ICAN Camp</h3>
              <ul className="space-y-2 text-[#86868b]">
                <li><NavLink to="/curriculum" className="hover:underline">Curriculum</NavLink></li>
                <li><NavLink to="/fees" className="hover:underline">Fees</NavLink></li>
                <li><NavLink to="/living" className="hover:underline">Living in Ortigas</NavLink></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-semibold text-ink mb-4">Services</h3>
              <ul className="space-y-2 text-[#86868b]">
                <li><NavLink to="/orticarrot" className="hover:underline">Orti Market</NavLink></li>
                <li><NavLink to="/blog" className="hover:underline">Blog</NavLink></li>
                <li><NavLink to="/faq" className="hover:underline">FAQ</NavLink></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-semibold text-ink mb-4">Support</h3>
              <ul className="space-y-2 text-[#86868b]">
                <li>Phone: {ACADEMY_INFO.contacts.phone}</li>
                <li>Kakao: {ACADEMY_INFO.contacts.kakao}</li>
                <li>Place: {ACADEMY_INFO.location}</li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-semibold text-ink mb-4">Account</h3>
              <ul className="space-y-2 text-[#86868b]">
                {user ? (
                  <li><NavLink to="/mypage" className="hover:underline">My Page</NavLink></li>
                ) : (
                  <li>Sign In</li>
                )}
                {user && user.role === 'admin' && (
                  <li>
                    <NavLink to="/blog/admin" className="flex items-center gap-1 hover:underline">
                      <ShieldCheck className="w-3 h-3" /> Admin
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-[#86868b]">
            <div className="mb-2 md:mb-0">
              Copyright © {new Date().getFullYear()} ICAN Ortigas Camp. All rights reserved.
            </div>
            <div className="flex gap-4">
              <NavLink to="/privacy" className="hover:underline">Privacy Policy</NavLink>
              <NavLink to="/terms" className="hover:underline">Terms of Use</NavLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;