
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Curriculum from './pages/Curriculum';
import VisaAndEntry from './pages/VisaAndEntry';
import LivingInfo from './pages/LivingInfo';
import GolfTour from './pages/GolfTour';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import BlogAdmin from './pages/BlogAdmin';
import AdminLogin from './pages/AdminLogin';
import OrtiCarrot from './pages/OrtiCarrot';
import Community from './pages/Community';
import MyPage from './pages/MyPage';
import Vision from './pages/Vision';
import Counseling from './pages/Counseling';
import SchoolGuide from './pages/SchoolGuide';
import Waymaker from './pages/Waymaker';
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
                    <Route path="schools" element={<SchoolGuide />} />
                    <Route path="living" element={<LivingInfo />} />
                    <Route path="community" element={<Community />} />
                    {/* Keep old route for backward compatibility if needed, or remove */}
                    <Route path="orticarrot" element={<OrtiCarrot />} />
                    <Route path="mypage" element={<MyPage />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="blog/admin" element={<BlogAdmin />} />
                    <Route path="blog/:id" element={<BlogPost />} />
                    <Route path="faq" element={<FAQ />} />
                  </Route>

                  {/* Standalone Pages */}
                  <Route path="/golf-tour" element={<GolfTour />} />
                  <Route path="/counseling" element={<Counseling />} />
                  <Route path="/galaxy" element={<Waymaker />} />
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