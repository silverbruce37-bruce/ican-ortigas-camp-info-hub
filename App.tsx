
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import SEO from './components/seo/SEO';
import SchemaOrg from './components/seo/SchemaOrg';

// Eager-loaded (critical for initial paint)
import Home from './pages/Home';
import Vision from './pages/Vision';

// Lazy-loaded (non-critical pages)
const Curriculum = lazy(() => import('./pages/Curriculum'));
const VisaAndEntry = lazy(() => import('./pages/VisaAndEntry'));
const SchoolGuide = lazy(() => import('./pages/SchoolGuide'));
const LivingInfo = lazy(() => import('./pages/LivingInfo'));
const Community = lazy(() => import('./pages/Community'));
const OrtiCarrot = lazy(() => import('./pages/OrtiCarrot'));
const MyPage = lazy(() => import('./pages/MyPage'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const BlogAdmin = lazy(() => import('./pages/BlogAdmin'));
const FAQ = lazy(() => import('./pages/FAQ'));
const CampRegistration = lazy(() => import('./pages/CampRegistration'));
const AdminLogin = lazy(() => import('./pages/AdminLogin'));
const GolfTour = lazy(() => import('./pages/GolfTour'));
const Counseling = lazy(() => import('./pages/Counseling'));
const Waymaker = lazy(() => import('./pages/Waymaker'));
const Series = lazy(() => import('./pages/Series'));
const BandEditorial = lazy(() => import('./pages/BandEditorial'));

import { LanguageProvider } from './context/LanguageContext';
import { BlogProvider } from './context/BlogContext';
import { ChatProvider } from './context/ChatContext';
import { AuthProvider } from './context/AuthContext';
import { CarrotProvider } from './context/CarrotContext';

const PageFallback = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

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
                <SEO />
                <SchemaOrg />
                <ScrollToTop />
                <Routes>
                  {/* Admin Login Route (Separate Layout) */}
                  <Route path="/admin/login" element={<Suspense fallback={<PageFallback />}><AdminLogin /></Suspense>} />

                  <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="vision" element={<Vision />} />
                    <Route path="curriculum" element={<Suspense fallback={<PageFallback />}><Curriculum /></Suspense>} />
                    <Route path="fees" element={<Suspense fallback={<PageFallback />}><VisaAndEntry /></Suspense>} />
                    <Route path="schools" element={<Suspense fallback={<PageFallback />}><SchoolGuide /></Suspense>} />
                    <Route path="living" element={<Suspense fallback={<PageFallback />}><LivingInfo /></Suspense>} />
                    <Route path="community" element={<Suspense fallback={<PageFallback />}><Community /></Suspense>} />
                    <Route path="orticarrot" element={<Suspense fallback={<PageFallback />}><OrtiCarrot /></Suspense>} />
                    <Route path="mypage" element={<Suspense fallback={<PageFallback />}><MyPage /></Suspense>} />
                    <Route path="blog" element={<Suspense fallback={<PageFallback />}><Blog /></Suspense>} />
                    <Route path="blog/admin" element={<Suspense fallback={<PageFallback />}><BlogAdmin /></Suspense>} />
                    <Route path="blog/:id" element={<Suspense fallback={<PageFallback />}><BlogPost /></Suspense>} />
                    <Route path="faq" element={<Suspense fallback={<PageFallback />}><FAQ /></Suspense>} />
                    <Route path="camp-registration" element={<Suspense fallback={<PageFallback />}><CampRegistration /></Suspense>} />
                  </Route>

                  {/* Standalone Pages */}
                  <Route path="/golf-tour" element={<Suspense fallback={<PageFallback />}><GolfTour /></Suspense>} />
                  <Route path="/counseling" element={<Suspense fallback={<PageFallback />}><Counseling /></Suspense>} />
                  <Route path="/galaxy" element={<Suspense fallback={<PageFallback />}><Waymaker /></Suspense>} />
                  <Route path="/series" element={<Suspense fallback={<PageFallback />}><Series /></Suspense>} />
                  <Route path="/band-editorial" element={<Suspense fallback={<PageFallback />}><BandEditorial /></Suspense>} />
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