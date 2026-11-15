import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Reveal from '../../components/Reveal';
import { 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Bot, 
  Cpu, 
  Compass, 
  HeartHandshake, 
  CheckCircle2, 
  Award,
  Layers,
  ChevronRight,
  Search,
  Building2,
  Users,
  Target,
  Briefcase
} from 'lucide-react';

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

export const WhoWeAre: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'whatWeDo' | 'whoWeAre'>('whatWeDo');

  const scrollToTeam = () => {
    const el = document.getElementById('leadership-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToStory = () => {
    const el = document.getElementById('story-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const teamMembers = [
    { 
      name: "Raj Mange", 
      role: "CEO & Founder", 
      img: "/raj.png", 
      specialty: "Sovereign AI Architecture & Strategy",
      linkedin: "https://www.linkedin.com/in/raj-mange00/" 
    },
    { 
      name: "Vaibhav K", 
      role: "Co-Founder & CTO", 
      img: "/vaibhav.png", 
      specialty: "Distributed Systems & Neural Voice",
      linkedin: "https://www.linkedin.com/in/vaibhav-kalungada-844790223/" 
    },
    { 
      name: "Raksha Hubballi", 
      role: "Co-Founder & COO", 
      img: "/raksha.jpeg", 
      specialty: "Operations & Delivery Governance",
      linkedin: "https://www.linkedin.com/in/raksha-hubballi-b695a7240/" 
    },
    { 
      name: "Ammar Raza", 
      role: "Co-Founder & CFO", 
      img: "/ammar.jpg", 
      specialty: "Financial Engineering & Capital Allocation",
      linkedin: "https://www.linkedin.com/in/ammar-raza-06346a26b/" 
    },
    { 
      name: "Naresh Kallimani", 
      role: "Co-Founder & CMO", 
      img: "/naresh.png", 
      specialty: "Global Growth & Brand Strategy",
      linkedin: "https://www.linkedin.com/in/naresh-kallimani/" 
    }
  ];

  const partners = [
    { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "Anthropic Claude", logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg" },
    { name: "Amazon Web Services", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
    { name: "Twilio", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg" },
    { name: "Meta Llama", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { name: "Hugging Face", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
    { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
    { name: "HubSpot", logo: "https://upload.wikimedia.org/wikipedia/commons/1/15/HubSpot_Logo.png" },
    { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" }
  ];

  const milestones = [
    {
      year: "Mid 2025",
      title: "Genesis & Software Engineering Services",
      desc: "Started ANVRiksh with a mission to deliver bespoke software engineering, enterprise full-stack development, and modern intelligent automation."
    },
    {
      year: "Mid 2025",
      title: "15+ High-Impact Projects Delivered",
      desc: "Delivered 15+ successful software engineering and digital transformation projects across diverse business verticals with 100% client code sovereignty."
    },
    {
      year: "Q3 2026",
      title: "Formal Incorporation in Karnataka, India",
      desc: "Officially incorporated as ANVRiksh Tech Solutions LLP (LLPIN: ADA-3944), establishing sovereign engineering governance and compliance standards."
    },
    {
      year: "Q3 2026",
      title: "Launch of Flagship Genquantaa GTM OS",
      desc: "Commercial launch of our 24-module autonomous revenue platform spanning intelligent customer discovery, email verification, AI creative studio, and voice automation."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Who We Are | ANVRiksh Tech Solutions LLP",
    "description": "Learn about ANVRiksh Tech Solutions LLP, our mission, values, and the leadership team pioneering Sovereign Agentic AI and enterprise software solutions.",
    "publisher": {
      "@type": "Organization",
      "name": "ANVRiksh",
      "legalName": "ANVRiksh Tech Solutions LLP",
      "identifier": "ADA-3944",
      "logo": {
        "@type": "ImageObject",
        "url": "https://anvriksh.com/logo.png"
      }
    }
  };

  return (
    <div 
      className="min-h-screen text-[#141912] select-none pt-28 sm:pt-36 pb-24 sm:pb-32 overflow-hidden relative" 
      style={{ 
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background: 'radial-gradient(135% 120% at 50% -10%, #FFFFFF 0%, #E8F4E5 32%, #DFEFE0 62%, #F5ECE0 100%)'
      }}
    >
      <SEO
        title="Who We Are | ANVRiksh Tech Solutions LLP"
        description="ANVRiksh is an India-based technology firm building the next generation of Sovereign Agentic AI, custom software architectures, and automated revenue operating systems."
        keywords="ANVRiksh Tech Solutions LLP, About ANVRiksh, AI Company India, Sovereign AI, Agentic AI Consulting, AI Founders India, Custom Software Belgaum"
        canonicalUrl="https://anvriksh.com/company/who-we-are"
        structuredData={structuredData}
        ogImage="/raj.png"
      />

      {/* —————————— EXACT CONTACT US VIBRANT ATMOSPHERIC MESH GRADIENT BACKGROUND —————————— */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* 1. Tactical Micro-Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#003D2B_1.4px,transparent_1.4px)] [background-size:32px_32px] opacity-[0.055]" />

        {/* 2. Vivid Luminous Mesh Aurora Gradient Blooms */}
        <div className="absolute -top-36 left-1/6 w-[750px] h-[600px] bg-gradient-to-br from-emerald-400/40 via-[#004D36]/30 to-transparent rounded-full blur-[100px]" />
        <div className="absolute top-10 -right-20 w-[700px] h-[650px] bg-gradient-to-bl from-amber-400/45 via-orange-300/35 to-transparent rounded-full blur-[90px]" />
        <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-teal-400/35 via-emerald-300/30 to-transparent rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -right-20 w-[650px] h-[600px] bg-gradient-to-tl from-amber-300/40 via-rose-300/25 to-transparent rounded-full blur-[95px]" />
        <div className="absolute -bottom-36 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-t from-[#003D2B]/22 via-[#2D452C]/15 to-transparent rounded-full blur-[110px]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl z-10">

        {/* —————————— BREADCRUMB STRIP —————————— */}
        <div className="mb-8">
          <nav className="inline-flex items-center gap-2 text-xs text-[#4E5B49] font-medium" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#141912] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#6B7866]" />
            <span className="text-[#4E5B49]">Company</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#6B7866]" />
            <span className="text-[#003D2B] font-semibold">Who We Are</span>
          </nav>
        </div>

        {/* ————————————————— 1. HERO SECTION ————————————————— */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 sm:mb-28">
          
          {/* Left Column: Heading, Manifesto & Action Links (7 cols) */}
          <Reveal variant="left" duration={800} className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#D5E1CE] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[12px] font-bold text-[#003D2B] tracking-tight">
                ANVRiksh Tech Solutions LLP • LLPIN: ADA-3944
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-[800] text-[#141912] tracking-tight leading-[1.10]">
              Intelligent Systems. <br />
              <span className="text-[#003D2B]">Engineered for Real Impact.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#4E5B49] leading-relaxed max-w-2xl">
              We engineer autonomous AI agent ecosystems, sovereign software platforms, 
              and intelligent revenue operating systems that turn ambitious business goals into predictable market advantage.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                to="/company/contact-us"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white bg-[#003D2B] hover:bg-[#022D20] shadow-[0_12px_28px_rgba(0,61,43,0.25)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                <span>Consult Our Engineers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <button
                type="button"
                onClick={scrollToStory}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-[#141912] bg-white/90 hover:bg-white border border-[#D5E1CE] shadow-2xs hover:shadow-xs transition-all cursor-pointer"
              >
                <span>Read Our Origin Story</span>
              </button>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#D5E1CE]/80 max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-[800] text-[#003D2B]">15+</div>
                <div className="text-xs text-[#4E5B49] font-medium mt-0.5">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-[800] text-[#003D2B]">100%</div>
                <div className="text-xs text-[#4E5B49] font-medium mt-0.5">Client IP Ownership</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-[800] text-[#003D2B]">24/7</div>
                <div className="text-xs text-[#4E5B49] font-medium mt-0.5">Autonomous Execution</div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Interactive Engineering Terminal Card (5 cols) */}
          <Reveal variant="right" duration={800} delay={100} className="lg:col-span-5">
            <div className="rounded-3xl bg-white/95 backdrop-blur-xl border border-[#D5E1CE] p-6 sm:p-7 shadow-[0_16px_40px_rgba(0,61,43,0.06)] relative overflow-hidden">
              {/* Window Bar */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#D5E1CE]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  <span className="ml-2 font-mono text-xs font-semibold text-[#4E5B49]">
                    anvriksh.core/engine
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#003D2B] bg-[#E3EDE0] px-2 py-0.5 rounded border border-[#D3E2CF]">
                  ACTIVE
                </span>
              </div>

              {/* Terminal Preview Content */}
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-[#F4F7EE] border border-[#D5E1CE] space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-[#141912]">
                    <span className="flex items-center gap-1.5">
                      <Bot className="w-3.5 h-3.5 text-[#003D2B]" />
                      Sovereign Agent Framework
                    </span>
                    <span className="font-mono text-[#003D2B] text-[11px]">v3.4-prod</span>
                  </div>
                  <p className="text-xs text-[#4E5B49] leading-relaxed">
                    Autonomous agents deployed across customer discovery, qualification, neural voice calling, and campaign synthesis.
                  </p>
                </div>

                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#D5E1CE]">
                    <span className="text-[#4E5B49]">Neural Voice Latency:</span>
                    <span className="font-bold text-[#003D2B]">~520ms (Sub-second)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#D5E1CE]">
                    <span className="text-[#4E5B49]">Data Isolation:</span>
                    <span className="font-bold text-[#003D2B]">Strict Tenant Boundary</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#D5E1CE]">
                    <span className="text-[#4E5B49]">Deployment Target:</span>
                    <span className="font-bold text-[#003D2B]">Dedicated Cloud / On-Prem</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] text-[#4E5B49]">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#003D2B]" />
                    Enterprise NDA Enforced
                  </span>
                  <span className="text-[#003D2B] font-bold">100% Sovereign</span>
                </div>
              </div>
            </div>
          </Reveal>

        </div>

        {/* ————————————————— 2. HOW ANVRIKSH BEGAN (FOUNDING STORY BENTO) ————————————————— */}
        <div id="story-section" className="mb-20 sm:mb-28">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <Reveal variant="fade">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#D5E1CE] text-[#003D2B] text-xs font-semibold mb-3 shadow-2xs">
                <Compass className="w-3.5 h-3.5 text-[#003D2B]" />
                <span>Our Genesis &amp; Journey</span>
              </div>
            </Reveal>
            <Reveal variant="up" delay={80}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[800] text-[#141912] tracking-tight">
                How ANVRiksh Began.
              </h2>
            </Reveal>
            <Reveal variant="up" delay={140}>
              <p className="text-sm sm:text-base text-[#4E5B49] mt-3 max-w-2xl mx-auto leading-relaxed">
                Started in mid 2025 and officially incorporated in Karnataka in Q3 2026, ANVRiksh Tech Solutions LLP delivers sovereign software engineering, custom enterprise systems, and autonomous AI architectures. Having completed 15+ production projects, we build technology enterprises genuinely own.
              </p>
            </Reveal>
          </div>

          {/* Bento Grid: Left Team & Metric, Right Milestones */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            
            {/* Left Column: Team Photo with Floating Search Bar + Dark Aurora Metric Card (6 cols) */}
            <Reveal variant="left" delay={100} className="lg:col-span-6 flex flex-col justify-between gap-6">
              
              {/* Photo with Overlaid Glassmorphic Search Capsule */}
              <div className="relative rounded-[2rem] overflow-hidden bg-white border border-[#D5E1CE] shadow-sm aspect-[16/10] sm:aspect-[16/11]">
                <img 
                  src="/raj.png" 
                  alt="ANVRiksh Engineering Leadership Team" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Overlaid Floating Search Capsule (Matching Reference) */}
                <div className="absolute inset-x-4 sm:inset-x-6 top-5">
                  <div className="p-3 sm:p-3.5 rounded-full bg-white/90 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-7 h-7 rounded-full bg-[#003D2B] text-white flex items-center justify-center shrink-0">
                        <Search className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-[#141912] truncate">
                        Search: &ldquo;Sovereign Multi-Agent Architecture&rdquo;
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#003D2B] bg-[#E3EDE0] px-2.5 py-1 rounded-full border border-[#D3E2CF] shrink-0">
                      EST. MID 2025 • INC. Q3 2026
                    </span>
                  </div>
                </div>

                {/* Bottom Photo Caption */}
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <div className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">Engineering Roots</div>
                  <div className="text-sm sm:text-base font-bold">Building from Belgaum, Karnataka for Global Enterprise Scale</div>
                </div>
              </div>

              {/* Dark Ambient Aurora Metric Card (Matching Reference Bottom-Left Card) */}
              <div className="p-6 sm:p-8 rounded-[2rem] bg-[#141912] text-white border border-[#2D382A] relative overflow-hidden shadow-xl flex flex-col justify-between">
                {/* Luminous Glow in Top-Right */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-gradient-to-br from-emerald-500/40 via-teal-400/20 to-transparent rounded-full blur-[40px] pointer-events-none" />
                
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-emerald-400">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-emerald-300 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
                    Sovereign Core
                  </span>
                </div>

                <div className="relative z-10">
                  <div className="text-4xl sm:text-5xl font-[800] text-white tracking-tight mb-2">
                    99.4%
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Autonomous Execution Accuracy
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    Zero customer data used for model training. Complete data isolation, sub-second neural response latencies, and 100% client code sovereignty.
                  </p>
                </div>
              </div>

            </Reveal>

            {/* Right Column: Awards & Chronological Milestones Card (6 cols) */}
            <Reveal variant="right" delay={150} className="lg:col-span-6 h-full">
              <div className="h-full rounded-[2rem] bg-white/95 backdrop-blur-xl border border-[#D5E1CE] p-7 sm:p-9 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                
                <div>
                  <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#D5E1CE]">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#003D2B]">
                        Track Record &amp; Compliance
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-[800] text-[#141912] mt-1">
                        Milestones &amp; Recognition
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B]">
                      <Award className="w-6 h-6" />
                    </div>
                  </div>

                  <p className="text-sm text-[#4E5B49] leading-relaxed mb-6">
                    From whiteboard prototypes to enterprise-grade AI operating systems, here is how ANVRiksh has evolved:
                  </p>

                  {/* Milestones Vertical Timeline */}
                  <div className="space-y-5">
                    {milestones.map((m, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#F4F7EE]/70 border border-[#D5E1CE]/80 hover:bg-white hover:border-[#003D2B]/40 hover:shadow-sm transition-all">
                        <div className="px-2.5 py-1 rounded-xl bg-[#003D2B] text-white font-mono text-xs font-bold shrink-0">
                          {m.year}
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-sm font-bold text-[#141912] mb-1">
                            {m.title}
                          </h4>
                          <p className="text-xs text-[#4E5B49] leading-relaxed">
                            {m.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-[#D5E1CE] flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="font-mono text-[#4E5B49]">
                    Government of India MCA LLPIN: <strong className="text-[#003D2B]">ADA-3944</strong>
                  </span>
                  <Link 
                    to="/company/contact-us"
                    className="inline-flex items-center gap-1 font-bold text-[#003D2B] hover:underline"
                  >
                    <span>Request Credentials</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </Reveal>

          </div>
        </div>

        {/* ————————————————— 3. ENTERPRISE ECOSYSTEM LOGO MARQUEE ————————————————— */}
        <Reveal variant="up" className="mb-20 sm:mb-28">
          <div className="p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-[#D5E1CE] shadow-xs">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-5 mb-5 border-b border-[#D5E1CE]">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#003D2B]">
                  Technology &amp; Integration Ecosystem
                </span>
              </div>
              <span className="text-xs font-medium text-[#4E5B49]">
                Engineered for interoperability with leading AI models and cloud backends
              </span>
            </div>

            {/* Marquee Logo Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center opacity-85 hover:opacity-100 transition-opacity">
              {partners.map((partner, i) => (
                <div 
                  key={i} 
                  className="h-10 flex items-center justify-center p-2 rounded-xl hover:bg-[#F4F7EE] transition-colors w-full"
                  title={partner.name}
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-7 sm:max-h-8 max-w-[120px] object-contain filter grayscale contrast-125 hover:grayscale-0 transition-all duration-300" 
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ————————————————— 4. VISION & MISSION SPLIT + CULTURE BANNER ————————————————— */}
        <div className="mb-20 sm:mb-28">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start mb-10">
            
            {/* Left: Punchy Manifesto Headline (5 cols) */}
            <Reveal variant="left" className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#D5E1CE] text-[#003D2B] text-xs font-semibold shadow-2xs">
                <Target className="w-3.5 h-3.5 text-[#003D2B]" />
                <span>Our Core Purpose</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-[800] text-[#141912] tracking-tight leading-[1.12]">
                Building the future of sovereign enterprise automation.
              </h2>

              <p className="text-sm sm:text-base text-[#4E5B49] leading-relaxed">
                We believe enterprises shouldn't have to choose between cutting-edge AI velocity and total proprietary data sovereignty. 
                We engineer both into the very foundation of every system we deliver.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={scrollToTeam}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#003D2B] hover:underline"
                >
                  <span>Meet our engineering founders</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </Reveal>

            {/* Right: Vision & Mission Parallel Columns (7 cols) */}
            <Reveal variant="right" delay={100} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Vision Column */}
              <div className="p-7 rounded-3xl bg-white/95 backdrop-blur-md border border-[#D5E1CE] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B] mb-5">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-[800] text-[#141912] mb-3">
                    Our Vision
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4E5B49] leading-relaxed">
                    To pioneer a global paradigm where every enterprise commands autonomous, sovereign AI workforces that eliminate manual operational toil, protect proprietary IP, and drive exponential market expansion.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#D5E1CE] text-[11px] font-mono text-[#003D2B] font-bold">
                  Autonomous Intelligence for All
                </div>
              </div>

              {/* Mission Column */}
              <div className="p-7 rounded-3xl bg-white/95 backdrop-blur-md border border-[#D5E1CE] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B] mb-5">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-[800] text-[#141912] mb-3">
                    Our Mission
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4E5B49] leading-relaxed">
                    To engineer secure, end-to-end multi-agent systems, sub-second neural voice workflows, and enterprise revenue operating systems with zero vendor lock-in and 100% client data confidentiality.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#D5E1CE] text-[11px] font-mono text-[#003D2B] font-bold">
                  Engineered with Zero Lock-In
                </div>
              </div>

            </Reveal>

          </div>

          {/* Panoramic Culture & Engineering Showcase Banner (Matching Reference) */}
          <Reveal variant="up" delay={150}>
            <div className="rounded-[2.5rem] bg-[#141912] text-white p-8 sm:p-12 relative overflow-hidden shadow-xl">
              {/* Subtle Ambient Flairs */}
              <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-gradient-to-br from-emerald-500/20 via-teal-400/10 to-transparent rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[250px] bg-gradient-to-tr from-amber-400/15 via-orange-300/10 to-transparent rounded-full blur-[70px] pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#A7F3D0] text-xs font-semibold">
                    <Users className="w-3.5 h-3.5" />
                    <span>Innovation Culture &amp; Delivery Excellence</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-[800] text-white tracking-tight leading-tight">
                    Engineered by practitioners who build, test, and ship every single day.
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 max-w-2xl leading-relaxed">
                    We bring deep technical rigor across neural voice synthesis, distributed agentic communication protocols, and modern full-stack web applications. When you collaborate with ANVRiksh, you speak directly with the architects who author the code.
                  </p>
                </div>

                <div className="lg:col-span-4 grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <div className="text-2xl sm:text-3xl font-[800] text-emerald-400">5</div>
                    <div className="text-[11px] text-white/70 mt-1">Founding Leaders</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <div className="text-2xl sm:text-3xl font-[800] text-emerald-400">24/7</div>
                    <div className="text-[11px] text-white/70 mt-1">AI Automation</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <div className="text-2xl sm:text-3xl font-[800] text-emerald-400">100%</div>
                    <div className="text-[11px] text-white/70 mt-1">IP Handover</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <div className="text-2xl sm:text-3xl font-[800] text-emerald-400">&lt;500ms</div>
                    <div className="text-[11px] text-white/70 mt-1">Voice Latency</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

        </div>

        {/* ————————————————— 5. ARCHITECTURAL PRINCIPLES (BENTO PILLARS) ————————————————— */}
        <div className="mb-20 sm:mb-28">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <Reveal variant="fade">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#D5E1CE] text-[#003D2B] text-xs font-semibold mb-3 shadow-2xs">
                <Layers className="w-3.5 h-3.5 text-[#003D2B]" />
                <span>Our Architectural Principles</span>
              </div>
            </Reveal>
            <Reveal variant="up" delay={80}>
              <h2 className="text-3xl sm:text-4xl font-[800] text-[#141912] tracking-tight">
                Why Industry Leaders Choose ANVRiksh.
              </h2>
            </Reveal>
            <Reveal variant="up" delay={140}>
              <p className="text-sm sm:text-base text-[#4E5B49] mt-3 max-w-xl mx-auto">
                Built from the ground up to solve real enterprise bottlenecks without vendor lock-in or fragile wrappers.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
            
            {/* Bento Card 1: Sovereign AI (7 cols) */}
            <Reveal variant="up" delay={100} className="md:col-span-12 lg:col-span-7">
              <div className="h-full rounded-3xl bg-white/95 backdrop-blur-md border border-[#D5E1CE] p-7 shadow-xs hover:shadow-md hover:border-[#003D2B]/40 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B] mb-5 group-hover:scale-110 transition-transform">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#141912] mb-2 group-hover:text-[#003D2B] transition-colors">
                    Sovereign Agentic Frameworks
                  </h3>
                  <p className="text-sm text-[#4E5B49] leading-relaxed mb-5">
                    We don&apos;t build shallow API wrappers. Our engineers design native, multi-agent frameworks capable of autonomous task execution, real-time memory persistence, and low-latency decision making.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#D5E1CE] text-xs font-mono text-[#003D2B]">
                  <span className="px-2.5 py-1 rounded-lg bg-[#F4F7EE] border border-[#D5E1CE]">Multi-Agent Orchestration</span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#F4F7EE] border border-[#D5E1CE]">Local &amp; Cloud LLMs</span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#F4F7EE] border border-[#D5E1CE]">Real-Time Function Calling</span>
                </div>
              </div>
            </Reveal>

            {/* Bento Card 2: Enterprise Security (5 cols) */}
            <Reveal variant="up" delay={150} className="md:col-span-12 lg:col-span-5">
              <div className="h-full rounded-3xl bg-white/95 backdrop-blur-md border border-[#D5E1CE] p-7 shadow-xs hover:shadow-md hover:border-[#003D2B]/40 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B] mb-5 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#141912] mb-2 group-hover:text-[#003D2B] transition-colors">
                    Zero Public Training &amp; Strict NDA
                  </h3>
                  <p className="text-sm text-[#4E5B49] leading-relaxed mb-5">
                    Your proprietary workflows, customer databases, and commercial logic remain 100% confidential. We operate under strict NDAs and air-gapped data retention boundaries.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#D5E1CE] text-xs font-mono text-[#003D2B]">
                  <span className="px-2.5 py-1 rounded-lg bg-[#F4F7EE] border border-[#D5E1CE]">100% IP Handover</span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#F4F7EE] border border-[#D5E1CE]">Isolated Databases</span>
                </div>
              </div>
            </Reveal>

            {/* Bento Card 3: Engineered for Scale (5 cols) */}
            <Reveal variant="up" delay={200} className="md:col-span-12 lg:col-span-5">
              <div className="h-full rounded-3xl bg-white/95 backdrop-blur-md border border-[#D5E1CE] p-7 shadow-xs hover:shadow-md hover:border-[#003D2B]/40 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B] mb-5 group-hover:scale-110 transition-transform">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#141912] mb-2 group-hover:text-[#003D2B] transition-colors">
                    End-to-End Delivery Velocity
                  </h3>
                  <p className="text-sm text-[#4E5B49] leading-relaxed mb-5">
                    From whiteboard architecture to production deployment in weeks. We combine modern DevOps, automated testing, and agile sprints to guarantee timely go-lives.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#D5E1CE] text-xs font-mono text-[#003D2B]">
                  <span className="px-2.5 py-1 rounded-lg bg-[#F4F7EE] border border-[#D5E1CE]">Rapid Prototyping</span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#F4F7EE] border border-[#D5E1CE]">Continuous CI/CD</span>
                </div>
              </div>
            </Reveal>

            {/* Bento Card 4: Productized Platforms (7 cols) */}
            <Reveal variant="up" delay={250} className="md:col-span-12 lg:col-span-7">
              <div className="h-full rounded-3xl bg-white/95 backdrop-blur-md border border-[#D5E1CE] p-7 shadow-xs hover:shadow-md hover:border-[#003D2B]/40 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B] mb-5 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#141912] mb-2 group-hover:text-[#003D2B] transition-colors">
                    Flagship Platforms &amp; Custom Solutions
                  </h3>
                  <p className="text-sm text-[#4E5B49] leading-relaxed mb-5">
                    Beyond bespoke enterprise services, we engineer flagship commercial systems like <strong>Genquantaa GTM OS</strong> — a 24-module autonomous revenue platform coordinating customer acquisition across email, WhatsApp, and voice.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#D5E1CE] text-xs font-mono text-[#003D2B]">
                  <span className="px-2.5 py-1 rounded-lg bg-[#F4F7EE] border border-[#D5E1CE]">Genquantaa GTM OS</span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#F4F7EE] border border-[#D5E1CE]">Neural Voice Calling</span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#F4F7EE] border border-[#D5E1CE]">Custom ERP / CRM</span>
                </div>
              </div>
            </Reveal>

          </div>
        </div>

        {/* ————————————————— 6. WHAT WE DO VS. WHO WE ARE TABBED STUDIO ————————————————— */}
        <Reveal variant="up" className="mb-20 sm:mb-28">
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-white/95 backdrop-blur-xl border border-[#D5E1CE] shadow-[0_16px_40px_rgba(0,61,43,0.06)]">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-[#D5E1CE] gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#003D2B]">
                  Operational Focus
                </span>
                <h3 className="text-2xl sm:text-3xl font-[800] text-[#141912] mt-1">
                  {activeTab === 'whatWeDo' ? 'What We Do' : 'Who We Are'}
                </h3>
              </div>

              {/* Tab Switcher */}
              <div className="p-1.5 rounded-2xl bg-[#EAEFE5] border border-[#D5E1CE] flex gap-1.5 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setActiveTab('whatWeDo')}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                    activeTab === 'whatWeDo'
                      ? 'bg-[#003D2B] text-white shadow-xs'
                      : 'text-[#4E5B49] hover:text-[#141912] hover:bg-white/60'
                  }`}
                >
                  What We Do
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('whoWeAre')}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                    activeTab === 'whoWeAre'
                      ? 'bg-[#003D2B] text-white shadow-xs'
                      : 'text-[#4E5B49] hover:text-[#141912] hover:bg-white/60'
                  }`}
                >
                  Who We Are
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Side: Tab Content Narrative */}
              <div className="lg:col-span-7 space-y-5">
                {activeTab === 'whatWeDo' ? (
                  <div className="space-y-4">
                    <p className="text-base sm:text-lg text-[#4E5B49] leading-relaxed">
                      We adopt a rigorous engineering methodology to understand your core concept and architect an intelligent, tailor-made technology solution that solves fundamental business bottlenecks.
                    </p>
                    <div className="space-y-3 pt-2">
                      {[
                        'Autonomous Multi-Agent Pipeline Engineering & Workflow Automation',
                        'Low-Latency Neural AI Voice Calling & Telephony Orchestration',
                        'Bespoke Enterprise Software, CRM & Cloud Infrastructure Development',
                        'Precision Go-To-Market Automation & Outbound Revenue Intelligence'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#141912] font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#003D2B] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-base sm:text-lg text-[#4E5B49] leading-relaxed">
                      We are a team of visionary engineers, system architects, and strategists headquartered in Belgaum, Karnataka, passionate about redefining enterprise productivity with Artificial Intelligence.
                    </p>
                    <div className="space-y-3 pt-2">
                      {[
                        'Headquartered in Karnataka, building Sovereign AI technology for global scale',
                        'Deep technical expertise across Python, distributed cloud backends, and LLM inference',
                        'Relentless focus on customer ROI, operational transparency, and verifiable impact',
                        'Full commercial licensing & dedicated private server deployment models'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#141912] font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#003D2B] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Side: Visual Context Showcase */}
              <div className="lg:col-span-5 rounded-2xl bg-[#F4F7EE] border border-[#D5E1CE] p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B] mx-auto">
                  {activeTab === 'whatWeDo' ? <Cpu className="w-6 h-6" /> : <Award className="w-6 h-6" />}
                </div>
                <h4 className="text-base font-bold text-[#141912]">
                  {activeTab === 'whatWeDo' ? 'Engineering Philosophy' : 'Company Identity'}
                </h4>
                <p className="text-xs text-[#4E5B49] leading-relaxed">
                  {activeTab === 'whatWeDo'
                    ? 'Every line of code and neural pipeline is designed to eliminate manual toil, protect sender reputation, and scale revenue velocity with zero unnecessary complexity.'
                    : 'ANVRiksh Tech Solutions LLP is recognized for engineering excellence, transparency, and building sovereign intelligent infrastructure for India and the world.'}
                </p>
                <div className="pt-2">
                  <span className="inline-block text-[11px] font-mono font-bold text-[#003D2B] bg-white px-3 py-1 rounded-full border border-[#D5E1CE]">
                    LLP Registration: ADA-3944
                  </span>
                </div>
              </div>

            </div>

          </div>
        </Reveal>

        {/* ————————————————— 7. "THE MINDS BEHIND ANVRIKSH" (LEADERSHIP WITH GLASSMORPHIC NAMEPLATES) ————————————————— */}
        <div id="leadership-section" className="mb-20 sm:mb-28">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <Reveal variant="fade">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#D5E1CE] text-[#003D2B] text-xs font-semibold mb-3 shadow-2xs">
                <HeartHandshake className="w-3.5 h-3.5 text-[#003D2B]" />
                <span>Executive Leadership</span>
              </div>
            </Reveal>
            <Reveal variant="up" delay={80}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[800] text-[#141912] tracking-tight">
                The Minds Behind ANVRiksh.
              </h2>
            </Reveal>
            <Reveal variant="up" delay={140}>
              <p className="text-sm sm:text-base text-[#4E5B49] mt-3 max-w-xl mx-auto leading-relaxed">
                A dedicated team of systems architects, neural engineers, and operational leaders building the sovereign AI operating system.
              </p>
            </Reveal>
          </div>

          {/* 5-Column Grid with Floating Glassmorphic Overlays (Matching Reference Exactly) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-6 mb-10">
            {teamMembers.map((member, i) => (
              <Reveal key={member.name} variant="up" delay={70 * (i + 1)}>
                <div className="h-full rounded-[2rem] bg-white/90 border border-[#D5E1CE] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#003D2B]/50 transition-all duration-300 group flex flex-col relative aspect-[3/4.2]">
                  
                  {/* Portrait Photo Container */}
                  <div className="absolute inset-0 bg-[#F4F7EE]">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  </div>

                  {/* Floating Frosted-Glass Nameplate Overlay at Bottom (Exact Reference Style) */}
                  <div className="absolute inset-x-3.5 bottom-3.5 z-10">
                    <div className="p-3.5 sm:p-4 rounded-2xl bg-white/75 backdrop-blur-xl border border-white/60 shadow-[0_8px_24px_rgba(20,25,18,0.14)] transition-all duration-300 group-hover:bg-white/90 group-hover:shadow-[0_12px_32px_rgba(0,61,43,0.18)]">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm sm:text-base font-extrabold text-[#141912] group-hover:text-[#003D2B] transition-colors truncate">
                          {member.name}
                        </h4>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-6 h-6 rounded-lg bg-[#003D2B] text-white flex items-center justify-center hover:scale-110 transition-transform shrink-0"
                          title={`View ${member.name}'s LinkedIn profile`}
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <LinkedinIcon className="w-3 h-3" />
                        </a>
                      </div>
                      
                      <div className="text-[11px] font-bold text-[#003D2B] uppercase tracking-wide">
                        {member.role}
                      </div>

                      <div className="text-[10px] text-[#4E5B49] font-medium mt-1 truncate">
                        {member.specialty}
                      </div>
                    </div>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>

          {/* Careers / "Join Our Team" Pill Hook (Matching Reference) */}
          <Reveal variant="up" delay={200} className="flex justify-center">
            <Link
              to="/company/contact-us"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-[#D5E1CE] shadow-2xs hover:shadow-md hover:border-[#003D2B] text-[#003D2B] text-xs font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Briefcase className="w-3.5 h-3.5 text-[#003D2B]" />
              <span>We&apos;re hiring engineers &amp; AI researchers — Join our team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Reveal>
        </div>

        {/* ————————————————— 8. CONNECTED ECOSYSTEM ("YOUR ENTIRE TECH STACK") ————————————————— */}
        <Reveal variant="up" className="mb-20 sm:mb-28">
          <div className="p-8 sm:p-14 rounded-[2.5rem] bg-white/90 backdrop-blur-xl border border-[#D5E1CE] shadow-xs text-center relative overflow-hidden">
            
            {/* Ambient Concentric Orbital Ring Graphics */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-[#D5E1CE] pointer-events-none opacity-60" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] rounded-full border border-dashed border-[#CCD8C3] pointer-events-none opacity-60" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-[#D5E1CE]/40 pointer-events-none opacity-40" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] text-[#003D2B] text-xs font-semibold shadow-2xs">
                <Layers className="w-3.5 h-3.5 text-[#003D2B]" />
                <span>Interoperable Infrastructure</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-[800] text-[#141912] tracking-tight leading-tight">
                Your entire tech stack — <br />
                <span className="text-[#003D2B]">fully connected.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#4E5B49] leading-relaxed max-w-xl mx-auto">
                Connect ANVRiksh AI Agents and custom software with your databases, messaging gateways, CRMs, mailboxes, and enterprise APIs.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/platform#integrations-section"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-[#003D2B] hover:bg-[#022D20] text-white shadow-[0_12px_28px_rgba(0,61,43,0.25)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Explore 100+ Integrations</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/company/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm bg-white hover:bg-[#F4F7EE] text-[#141912] border border-[#D5E1CE] transition-all cursor-pointer"
                >
                  <span>Request Custom API Bridge</span>
                </Link>
              </div>

              {/* Supported Integration Quick Badges */}
              <div className="pt-6 flex flex-wrap justify-center gap-2 text-xs font-mono text-[#4E5B49]">
                <span className="px-3 py-1 rounded-full bg-[#F4F7EE] border border-[#D5E1CE]">Twilio Voice &amp; SMS</span>
                <span className="px-3 py-1 rounded-full bg-[#F4F7EE] border border-[#D5E1CE]">WhatsApp Business API</span>
                <span className="px-3 py-1 rounded-full bg-[#F4F7EE] border border-[#D5E1CE]">Salesforce &amp; HubSpot</span>
                <span className="px-3 py-1 rounded-full bg-[#F4F7EE] border border-[#D5E1CE]">Google &amp; Microsoft 365</span>
                <span className="px-3 py-1 rounded-full bg-[#F4F7EE] border border-[#D5E1CE]">Webhooks &amp; Custom SQL</span>
              </div>
            </div>

          </div>
        </Reveal>

        {/* ————————————————— 9. FUTURISTIC WIREFRAME MESH GLOBE FINAL CTA ————————————————— */}
        <Reveal variant="up">
          <div className="rounded-[2.5rem] bg-[#003D2B] text-white p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-2xl">
            
            {/* Ambient Background Flare */}
            <div className="absolute top-0 right-0 w-[550px] h-[350px] bg-emerald-400/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[450px] h-[300px] bg-teal-300/15 rounded-full blur-[90px] pointer-events-none" />

            {/* Futuristic SVG 3D Wireframe Mesh Dome (Exact Reference Style) */}
            <div className="absolute inset-x-0 top-0 h-[260px] pointer-events-none opacity-25 flex justify-center overflow-hidden">
              <svg className="w-[800px] h-[400px] text-white" viewBox="0 0 800 400" fill="none" stroke="currentColor">
                {/* Horizontal Longitude Ellipses */}
                <ellipse cx="400" cy="180" rx="360" ry="140" strokeWidth="1" strokeDasharray="3 3" />
                <ellipse cx="400" cy="180" rx="300" ry="110" strokeWidth="1" />
                <ellipse cx="400" cy="180" rx="230" ry="80" strokeWidth="1" strokeDasharray="2 2" />
                <ellipse cx="400" cy="180" rx="150" ry="50" strokeWidth="1" />
                <ellipse cx="400" cy="180" rx="70" ry="20" strokeWidth="1" />
                
                {/* Vertical Latitude Ribs */}
                <path d="M 400 40 C 400 100, 400 260, 400 320" strokeWidth="1.2" />
                <path d="M 280 60 C 330 110, 330 250, 280 300" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M 520 60 C 470 110, 470 250, 520 300" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M 170 90 C 250 130, 250 230, 170 270" strokeWidth="1" />
                <path d="M 630 90 C 550 130, 550 230, 630 270" strokeWidth="1" />
                <circle cx="400" cy="180" r="4" fill="#A7F3D0" />
              </svg>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#A7F3D0] text-xs font-semibold backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#A7F3D0]" />
                <span>Next-Generation Sovereign Intelligence</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-[800] tracking-tight leading-[1.08]">
                Stop doing manual work. <br />
                <span className="text-emerald-300">Start deploying sovereign AI.</span>
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                Whether you need autonomous AI calling agents, bespoke enterprise software, or our flagship Genquantaa GTM OS, our engineering team is ready to deploy.
              </p>

              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Link
                  to="/company/contact-us"
                  className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full font-bold text-sm bg-white text-[#003D2B] hover:bg-[#E3EDE0] shadow-[0_12px_36px_rgba(0,0,0,0.35)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/platform"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md transition-all cursor-pointer"
                >
                  <span>Explore Genquantaa GTM OS</span>
                </Link>
              </div>

              <div className="pt-4 flex items-center justify-center gap-6 text-xs text-white/60 font-mono">
                <span>✓ 100% Client IP Ownership</span>
                <span>✓ Strict NDA Guarantee</span>
                <span>✓ Direct Architect Access</span>
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
};

export default WhoWeAre;
