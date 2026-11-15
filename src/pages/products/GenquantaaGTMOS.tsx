import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { 
  ChevronRight, 
  ArrowUp
} from 'lucide-react';

// Import All 13 Sections in Exact Order
import GTMOSHero from '../../components/products/gtm-os/GTMOSHero';
import GTMOSProblem from '../../components/products/gtm-os/GTMOSProblem';
import GTMOSOverview from '../../components/products/gtm-os/GTMOSOverview';
import GTMOSAgentWorkflow from '../../components/products/gtm-os/GTMOSAgentWorkflow';
import GTMOSContentIntelligence from '../../components/products/gtm-os/GTMOSContentIntelligence';
import GTMOSChannels from '../../components/products/gtm-os/GTMOSChannels';
import GTMOSIntegrations from '../../components/products/gtm-os/GTMOSIntegrations';
import GTMOSAudience from '../../components/products/gtm-os/GTMOSAudience';
import GTMOSPurchaseOptions from '../../components/products/gtm-os/GTMOSPurchaseOptions';
import GTMOSBusinessValue from '../../components/products/gtm-os/GTMOSBusinessValue';
import GTMOSFAQ from '../../components/products/gtm-os/GTMOSFAQ';
import GTMOSContactCTA from '../../components/products/gtm-os/GTMOSContactCTA';

const GenquantaaGTMOS: React.FC = () => {
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [activeNavSection, setActiveNavSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyNav(window.scrollY > 400);

      const sectionIds = [
        'problem-section',
        'modules-section',
        'workflow-section',
        'content-section',
        'channels-section',
        'integrations-section',
        'audience-section',
        'pricing-section',
        'business-value-section',
        'faq-section',
        'contact-section'
      ];

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveNavSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Genquantaa GTM OS",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, Cloud",
        "description": "AI-Powered Go-To-Market Operating System bringing customer discovery, lead intelligence, campaign execution, multichannel engagement, and growth analytics into one unified platform.",
        "offers": [
          {
            "@type": "Offer",
            "name": "Genquantaa GTM OS — SaaS",
            "category": "Managed Cloud Subscription",
            "description": "Cloud-based platform access with managed software environment, ongoing updates, and multi-agent workflows."
          },
          {
            "@type": "Offer",
            "name": "Genquantaa GTM OS — Software Purchase",
            "category": "Software Licensing & Deployment",
            "description": "Enterprise software solution with deployment planning, configuration, and commercial licensing."
          }
        ],
        "featureList": [
          "Autonomous Multi-Agent Lead Discovery",
          "Automated Email & WhatsApp Verification",
          "ICP Fit Scoring Engine",
          "Multichannel Outreach (Email, LinkedIn, WhatsApp, SMS, AI Voice)",
          "AI Copy & Creative Visual Generation",
          "Real-Time Reply Sentiment & Intent Detection",
          "Consolidated Smart Inbox & Analytics"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anvriksh.com/" },
          { "@type": "ListItem", "position": 2, "name": "Platform", "item": "https://anvriksh.com/platform" },
          { "@type": "ListItem", "position": 3, "name": "Genquantaa GTM OS", "item": "https://anvriksh.com/platform" }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F4F7EE] text-[#141912] selection:bg-[#E3EDE0] selection:text-[#003D2B] overflow-x-clip" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      
      {/* Comprehensive SEO Metadata */}
      <SEO
        title="Genquantaa GTM OS | AI-Powered Go-To-Market Platform"
        description="Discover Genquantaa GTM OS, an AI-powered platform for intelligent lead discovery, customer engagement, multichannel campaigns, and business growth."
        keywords="AI Go-To-Market Platform, AI Sales Automation Software, AI Lead Generation Platform, Customer Acquisition Automation, AI Marketing Automation Platform, AI Prospect Discovery, B2B Lead Generation Software, Multichannel Campaign Automation, AI Sales Engagement, AI-Powered CRM, GTM Automation Software"
        canonicalUrl="https://anvriksh.com/platform"
        structuredData={structuredData}
        ogImage="/platform_hero.png"
      />

      {/* ————————————————— BREADCRUMB STRIP ————————————————— */}
      <div className="pt-24 sm:pt-28 pb-3 bg-[#F4F7EE] border-b border-[#D5E1CE] relative z-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <nav className="flex items-center gap-2 text-xs text-[#4E5B49] font-medium" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#141912] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#6B7866]" />
            <span className="text-[#4E5B49]">Platform</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#6B7866]" />
            <span className="text-[#003D2B] font-semibold">Genquantaa GTM OS</span>
          </nav>
        </div>
      </div>

      {/* ————————————————— STICKY SECONDARY QUICK-JUMP NAVIGATION (BOTTOM DOCK) ————————————————— */}
      <div 
        className={`fixed bottom-5 sm:bottom-6 inset-x-0 z-40 transition-all duration-300 pointer-events-none ${
          showStickyNav ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="container mx-auto px-4 max-w-5xl flex justify-center">
          <div className="pointer-events-auto flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:py-2 rounded-full bg-[#F4F7EE]/95 border border-[#CCD8C3] backdrop-blur-xl shadow-[0_12px_36px_rgba(20,25,18,0.14),0_2px_6px_rgba(20,25,18,0.06)] overflow-x-auto max-w-[95vw] sm:max-w-full text-xs scrollbar-none">
            <button
              onClick={() => scrollToSection('problem-section')}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors cursor-pointer ${activeNavSection === 'problem-section' ? 'bg-[#003D2B] text-white font-bold' : 'text-[#4E5B49] hover:text-[#141912]'}`}
            >
              The Problem
            </button>
            <button
              onClick={() => scrollToSection('modules-section')}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors cursor-pointer ${activeNavSection === 'modules-section' ? 'bg-[#003D2B] text-white font-bold' : 'text-[#4E5B49] hover:text-[#141912]'}`}
            >
              24 Modules
            </button>
            <button
              onClick={() => scrollToSection('workflow-section')}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors cursor-pointer ${activeNavSection === 'workflow-section' ? 'bg-[#003D2B] text-white font-bold' : 'text-[#4E5B49] hover:text-[#141912]'}`}
            >
              AI Agents Workflow
            </button>
            <button
              onClick={() => scrollToSection('content-section')}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors cursor-pointer ${activeNavSection === 'content-section' ? 'bg-[#003D2B] text-white font-bold' : 'text-[#4E5B49] hover:text-[#141912]'}`}
            >
              Content Studio
            </button>
            <button
              onClick={() => scrollToSection('channels-section')}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors cursor-pointer ${activeNavSection === 'channels-section' ? 'bg-[#003D2B] text-white font-bold' : 'text-[#4E5B49] hover:text-[#141912]'}`}
            >
              Multichannel
            </button>
            <button
              onClick={() => scrollToSection('pricing-section')}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors cursor-pointer ${activeNavSection === 'pricing-section' ? 'bg-[#003D2B] text-white font-bold' : 'text-[#4E5B49] hover:text-[#141912]'}`}
            >
              SaaS vs. Purchase
            </button>
            <button
              onClick={() => scrollToSection('contact-section')}
              className="px-3.5 py-1 rounded-full bg-[#003D2B] hover:bg-[#022D20] text-white font-bold whitespace-nowrap hover:scale-105 transition-all cursor-pointer shadow-xs"
            >
              Book Demo
            </button>
          </div>
        </div>
      </div>

      {/* ————————————————— SECTIONS IN ORDER ————————————————— */}
      
      {/* SECTION 1: PREMIUM HERO SECTION */}
      <GTMOSHero />

      {/* SECTION 2: THE BUSINESS PROBLEM */}
      <GTMOSProblem />

      {/* SECTION 3: INTRODUCING GENQUANTAA GTM OS (3 PILLARS & 24 MODULES) */}
      <GTMOSOverview />

      {/* SECTION 4: HOW THE AI AGENT WORKFLOW WORKS (5 STAGES & 10 PIPELINE STEPS) */}
      <GTMOSAgentWorkflow />

      {/* SECTION 5: AI-POWERED CONTENT GENERATION (6-STEP WORKFLOW & SPLIT-SCREEN) */}
      <GTMOSContentIntelligence />

      {/* SECTION 6: MULTICHANNEL COMMUNICATION (5 CHANNELS & VERIFIED STATUSES) */}
      <GTMOSChannels />

      {/* SECTION 7: INTEGRATION ECOSYSTEM (COMMUNICATION, PRODUCTIVITY, NETWORKING, EXTENSIBILITY) */}
      <GTMOSIntegrations />

      {/* SECTION 9: WHO IS IT FOR? (5 AUDIENCE CARDS) */}
      <GTMOSAudience />

      {/* SECTION 10: SAAS VS SOFTWARE PURCHASE (CRITICAL CONVERSION SECTION) */}
      <GTMOSPurchaseOptions />

      {/* SECTION 11: BUSINESS VALUE (8 CORE PROPOSITIONS) */}
      <GTMOSBusinessValue />

      {/* SECTION 12: FREQUENTLY ASKED QUESTIONS (12 ACCORDIONS WITH SEARCH) */}
      <GTMOSFAQ />

      {/* SECTION 13: FINAL CONVERSION CTA (HEADLINE, CTAS & FUNCTIONAL INQUIRY FORM) */}
      <GTMOSContactCTA />

      {/* Floating Back to Top Button */}
      {showStickyNav && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 p-3 rounded-full bg-white border border-[#D5E1CE] text-[#003D2B] shadow-md hover:bg-[#003D2B] hover:text-white transition-all cursor-pointer hover:scale-110 active:scale-95"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

    </div>
  );
};

export default GenquantaaGTMOS;
