import React from 'react';
import { HashRouter as Router, Routes, Route, ScrollRestoration, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Curriculum from './pages/Curriculum';
import VisaAndEntry from './pages/VisaAndEntry';
import LivingInfo from './pages/LivingInfo';
import GolfTour from './pages/GolfTour'; // NEW
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import BlogAdmin from './pages/BlogAdmin';
import AdminLogin from './pages/AdminLogin'; // New Page
import OrtiCarrot from './pages/OrtiCarrot';
import MyPage from './pages/MyPage';
import Vision from './pages/Vision';
import { LanguageProvider } from './context/LanguageContext';
import { BlogProvider } from './context/BlogContext';
import { ChatProvider } from './context/ChatContext';
import { AuthProvider } from './context/AuthContext';
import { CarrotProvider } from './context/CarrotContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AuthProvider>
        <CarrotProvider>
          <ChatProvider>
            <BlogProvider>
              <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <ScrollToTop />
                <Routes>
                  {/* Admin Login Route (Separate Layout) */}
                  <Route path="/admin/login" element={<AdminLogin />} />

                  <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="vision" element={<Vision />} />
                    <Route path="curriculum" element={<Curriculum />} />
                    <Route path="fees" element={<VisaAndEntry />} />
                    <Route path="living" element={<LivingInfo />} />
                    <Route path="golf-tour" element={<GolfTour />} /> {/* NEW ROUTE */}
                    <Route path="orticarrot" element={<OrtiCarrot />} />
                    <Route path="mypage" element={<MyPage />} />
                    <Route path="blog" element={<Blog />} />
                    {/* Specific route for admin must come before dynamic :id route */}
                    <Route path="blog/admin" element={<BlogAdmin />} />
                    <Route path="blog/:id" element={<BlogPost />} />
                    <Route path="faq" element={<FAQ />} />
                  </Route>
                </Routes>
              </Router>
            </BlogProvider>
          </ChatProvider>
        </CarrotProvider>
      </AuthProvider>
    </LanguageProvider>
  );
};

export default App;