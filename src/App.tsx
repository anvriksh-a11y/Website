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
import Article from './pages/Article';
import Whitepaper from './pages/resources/Whitepaper';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsAndConditions from './pages/legal/TermsAndConditions';
import DigitalMarketing from './pages/DigitalMarketing';
import GenquantaaGTMOS from './pages/products/GenquantaaGTMOS';
import WhatsAppBot from './components/WhatsAppBot';
import AnalyticsTracker from './components/AnalyticsTracker';
import ScrollToTop from './components/ScrollToTop';
import AmbientBackground from './components/AmbientBackground';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnalyticsTracker />
      <div className="min-h-screen bg-[#F4F7EE] text-[#1A130E] font-inter selection:bg-[#003D2B]/15 relative">
        {/* ScrollProgress removed to eliminate the top orange indicator */}
        <AmbientBackground variant="light" />
        <Navbar />
        <main className="relative z-[1]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gen-ai" element={<GenAI />} />
            <Route path="/software-solutions" element={<SoftwareSolutions />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/digital-marketing" element={<Navigate to="/digital-marketing" replace />} />
            <Route path="/resources/case-studies" element={<CaseStudies />} />
            <Route path="/resources/blogs" element={<Blogs />} />
            <Route path="/blogs" element={<Navigate to="/resources/blogs" replace />} />
            <Route path="/blog" element={<Navigate to="/resources/blogs" replace />} />
            <Route path="/resources/ebooks" element={<Ebooks />} />
            <Route path="/resources/whitepaper" element={<Whitepaper />} />
            <Route path="/company/who-we-are" element={<WhoWeAre />} />
            <Route path="/company/contact-us" element={<ContactUs />} />
            <Route path="/company/technical-partners" element={<Navigate to="/company/who-we-are" replace />} />
            <Route path="/platform" element={<GenquantaaGTMOS />} />
            <Route path="/products/genquantaa-gtm-os" element={<Navigate to="/platform" replace />} />
            <Route path="/products/gtm-os" element={<Navigate to="/platform" replace />} />
            <Route path="/products" element={<Navigate to="/platform" replace />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/terms" element={<Navigate to="/terms-and-conditions" replace />} />
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
