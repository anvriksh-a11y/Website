import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GenAI from './pages/GenAI';
import SoftwareSolutions from './pages/SoftwareSolutions';
import CaseStudies from './pages/resources/CaseStudies';
import Blogs from './pages/resources/Blogs';
import Ebooks from './pages/resources/Ebooks';
import WhoWeAre from './pages/company/WhoWeAre';
import ContactUs from './pages/company/ContactUs';
import Platform from './pages/Platform';
import Article from './pages/Article';
import Whitepaper from './pages/resources/Whitepaper';
import WhatsAppBot from './components/WhatsAppBot';
import AnalyticsTracker from './components/AnalyticsTracker';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnalyticsTracker />
      <div className="min-h-screen bg-bg-color text-text-main font-inter selection:bg-indigo-500/30">
        <div className="background-glow"></div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gen-ai" element={<GenAI />} />
            <Route path="/software-solutions" element={<SoftwareSolutions />} />
            <Route path="/resources/case-studies" element={<CaseStudies />} />
            <Route path="/resources/blogs" element={<Blogs />} />
            <Route path="/resources/ebooks" element={<Ebooks />} />
            <Route path="/resources/whitepaper" element={<Whitepaper />} />
            <Route path="/company/who-we-are" element={<WhoWeAre />} />
            <Route path="/company/contact-us" element={<ContactUs />} />
            <Route path="/company/technical-partners" element={<Navigate to="/company/who-we-are" replace />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/:slug" element={<Article />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppBot />
      </div>
    </Router>
  );
}

export default App;
