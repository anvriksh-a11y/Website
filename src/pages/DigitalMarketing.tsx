import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import { COMPANY_DETAILS } from '../constants/contact';

const metrics = [
    { value: '1.2M+', label: 'Organic & Paid Reach', growth: '+68% YoY', icon: 'fa-users' },
    { value: '92.4K+', label: 'Engaged Community', growth: '+54% Lift', icon: 'fa-heart' },
    { value: '3,420+', label: 'Qualified Inbound Leads', growth: '+61% Growth', icon: 'fa-filter' },
    { value: '8.4%', label: 'Average Funnel Conversion', growth: '+2.9% Above Industry', icon: 'fa-chart-line' },
];

const pillars = [
    { title: 'Build Brand Visibility', desc: 'Command authority across Google Search, Instagram, and LinkedIn so your ideal customers find you first.', icon: 'fa-eye' },
    { title: 'Generate Qualified Leads', desc: 'Target high-intent decision-makers and capture verified buyer contacts ready to transact.', icon: 'fa-bullseye' },
    { title: 'Increase Conversions', desc: 'Optimize user journeys, landing page UX, and checkout funnels to turn clicks into paid clients.', icon: 'fa-bolt' },
    { title: 'Drive Revenue Growth', desc: 'Build scalable customer acquisition engines with predictable Customer Acquisition Cost (CAC) and high LTV.', icon: 'fa-arrow-trend-up' },
];

const processSteps = [
    { step: '01', title: 'Market & Funnel Audit', desc: 'We dissect your existing channels, competitor positioning, target personas, and conversion bottlenecks to uncover high-impact growth levers.' },
    { step: '02', title: 'Omnichannel Architecture', desc: 'We build the campaign infrastructure: custom landing pages, pixel tracking, tracking schemas, creative angles, and multi-touch workflows.' },
    { step: '03', title: 'Launch & Aggressive Testing', desc: 'We launch across targeted paid and organic channels, testing multiple hook variations, audience segments, and bid strategies simultaneously.' },
    { step: '04', title: 'Algorithmic Scale & Compounding', desc: 'We double down on winning creative vectors, scale ad budgets profitably, and optimize email/voice agent follow-up to maximize closing rates.' },
];

const faqs = [
    {
        q: 'How quickly can we expect to see results from digital marketing?',
        a: 'Paid advertising campaigns (Google Ads & Meta) typically begin generating qualified leads within the first 7 to 14 days of launch. Organic search (SEO) and brand authority compounding typically show significant ranking improvements and compound traffic within 60 to 90 days.'
    },
    {
        q: 'How do you measure marketing success and return on ad spend (ROAS)?',
        a: 'We track every metric through full-funnel attribution: Cost Per Lead (CPL), Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), and final closed revenue. You receive live dashboard access to monitor performance in real time.'
    },
    {
        q: 'Can you integrate digital marketing with AI calling agents for instant lead follow-up?',
        a: 'Yes! That is ANVRiksh’s unique competitive edge. When a prospect submits an inquiry form through your Meta or Google ads, our AI Calling Agent can initiate an instant conversational follow-up call within 60 seconds to qualify the lead and book an appointment.'
    },
    {
        q: 'Do you manage content creation and creative ad assets?',
        a: 'Yes. Our in-house creative team designs high-converting ad visuals, video reels, copy hooks, landing page layouts, and editorial articles tailored specifically to your target industry.'
    }
];

const DigitalMarketing: React.FC = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Digital Marketing & Growth Engineering",
        "provider": {
            "@type": "Organization",
            "name": COMPANY_DETAILS.legalName,
            "identifier": COMPANY_DETAILS.registrationId,
            "url": "https://anvriksh.com"
        },
        "areaServed": "Worldwide",
        "description": "Full-funnel digital marketing services: Paid Advertising, SEO, Meta Ads, Google Ads, LinkedIn B2B, Email Marketing, and Content Production engineered for measurable business growth."
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
                title="Digital Marketing & Growth Engine | ANVRiksh Tech Solutions LLP"
                description="End-to-end digital marketing engineered for measurable business growth. Scale brand reach, generate verified inbound leads, and maximize ROAS with ANVRiksh."
                keywords="Digital Marketing Services, Performance Marketing India, Google Ads Agency, Meta Ads Specialist, SEO Services Belgaum, B2B Lead Generation, ANVRiksh Tech Solutions LLP"
                canonicalUrl="https://anvriksh.com/digital-marketing"
                structuredData={structuredData}
            />

            {/* Vibrant Atmospheric Mesh Gradient Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#003D2B_1.4px,transparent_1.4px)] [background-size:32px_32px] opacity-[0.055]" />
                <div className="absolute -top-36 left-1/6 w-[750px] h-[600px] bg-gradient-to-br from-emerald-400/40 via-[#004D36]/30 to-transparent rounded-full blur-[100px]" />
                <div className="absolute top-10 -right-20 w-[700px] h-[650px] bg-gradient-to-bl from-amber-400/45 via-orange-300/35 to-transparent rounded-full blur-[90px]" />
                <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-teal-400/35 via-emerald-300/30 to-transparent rounded-full blur-[100px]" />
                <div className="absolute -bottom-24 -right-20 w-[650px] h-[600px] bg-gradient-to-tl from-amber-300/40 via-rose-300/25 to-transparent rounded-full blur-[95px]" />
                <div className="absolute -bottom-36 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-t from-[#003D2B]/22 via-[#2D452C]/15 to-transparent rounded-full blur-[110px]" />
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl z-10">

                {/* ————————————————— HERO SECTION ————————————————— */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-20 sm:mb-28">

                    {/* Left Column: Headline & Value Proposition */}
                    <div className="lg:col-span-7 text-left">
                        <Reveal variant="up" duration={700}>
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#D5E1CE] shadow-xs mb-5">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[12px] font-bold text-[#003D2B] tracking-tight">
                                    Full-Funnel Growth Engine • ROI-Driven Campaigns
                                </span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-[800] text-[#141912] tracking-[-0.035em] leading-[1.12] mb-6">
                                Digital Marketing<br />
                                <span className="bg-gradient-to-r from-[#003D2B] via-[#005A3E] to-[#2D5A3A] bg-clip-text text-transparent">
                                    End-to-End Growth for Your Business.
                                </span>
                            </h1>

                            <p className="text-base sm:text-lg text-[#4E5B49] leading-relaxed max-w-2xl mb-8">
                                Grow brand authority, engage verified buyer communities, generate predictable inbound leads, and scale conversions with precision performance marketing and AI-powered optimization.
                            </p>

                            <div className="flex flex-wrap items-center gap-4 mb-10">
                                <Link
                                    to="/company/contact-us"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#003D2B] hover:bg-[#022D20] shadow-[0_8px_24px_rgba(0,61,43,0.25)] hover:shadow-[0_12px_32px_rgba(0,61,43,0.35)] hover:scale-105 active:scale-100 transition-all"
                                >
                                    <span>Schedule a Growth Consultation</span>
                                    <i className="fas fa-arrow-right text-xs"></i>
                                </Link>
                                <a
                                    href="#channels"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-[#141912] bg-white border border-[#D5E1CE] shadow-2xs hover:shadow-xs hover:border-[#003D2B]/40 transition-all"
                                >
                                    <span>Explore Channels</span>
                                    <i className="fas fa-chevron-down text-xs text-[#003D2B]"></i>
                                </a>
                            </div>

                            {/* Trust Pill Bar */}
                            <div className="flex flex-wrap items-center gap-5 pt-6 border-t border-[#D5E1CE]/80 text-xs font-semibold text-[#4E5B49]">
                                <span className="flex items-center gap-2">
                                    <i className="fas fa-check-circle text-emerald-600 text-sm"></i> AI Video & Instagram Posting
                                </span>
                                <span className="flex items-center gap-2">
                                    <i className="fas fa-check-circle text-emerald-600 text-sm"></i> Data-Driven ROAS Focus
                                </span>
                                <span className="flex items-center gap-2">
                                    <i className="fas fa-check-circle text-emerald-600 text-sm"></i> Multi-Touch Attribution
                                </span>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right Column: Visual Showcase Card */}
                    <div className="lg:col-span-5 flex justify-center">
                        <Reveal variant="scale" duration={800} delay={100}>
                            <div className="relative group max-w-[420px] w-full">
                                {/* Ambient decorative backdrop glow */}
                                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/30 via-amber-400/20 to-teal-400/30 rounded-[34px] blur-xl opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />

                                <div className="relative bg-white rounded-[30px] p-3 border border-[#D5E1CE] shadow-[0_16px_40px_rgba(0,61,43,0.12)] overflow-hidden">
                                    <img
                                        src="/digital_marketing_bouquet.jpg"
                                        alt="Digital Marketing End-to-End Growth Engine"
                                        className="w-full h-auto rounded-[24px] object-cover group-hover:scale-[1.02] transition-transform duration-500 shadow-xs"
                                    />

                                    {/* Floating Live Badge */}
                                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D5E1CE] shadow-sm flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                        <span className="text-xs font-bold text-[#003D2B]">Live Campaigns Active</span>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                </div>

                {/* ————————————————— 4 CORE GROWTH PILLARS ————————————————— */}
                <div className="mb-20 sm:mb-28">
                    <Reveal variant="up" duration={700}>
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[800] text-[#141912] tracking-tight mb-4">
                                Four Pillars of Our Growth System
                            </h2>
                            <p className="text-[#4E5B49] text-sm sm:text-base leading-relaxed">
                                Everything we engineer maps back to these four core commercial objectives.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pillars.map((pillar, idx) => (
                            <Reveal key={pillar.title} variant="up" delay={idx * 80} duration={650}>
                                <div className="bg-white rounded-2xl p-7 border border-[#D5E1CE] shadow-[0_4px_16px_rgba(0,61,43,0.04)] hover:shadow-[0_12px_28px_rgba(0,61,43,0.1)] hover:-translate-y-1 transition-all h-full flex flex-col justify-between">
                                    <div>
                                        <div className="w-12 h-12 rounded-2xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center mb-5 text-[#003D2B]">
                                            <i className={`fas ${pillar.icon} text-lg`}></i>
                                        </div>
                                        <h3 className="text-lg font-[800] text-[#141912] mb-2.5 tracking-tight">
                                            {pillar.title}
                                        </h3>
                                        <p className="text-[#4E5B49] text-sm leading-relaxed">
                                            {pillar.desc}
                                        </p>
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-[#F0F4EC] flex items-center text-xs font-bold text-[#003D2B]">
                                        <span>Growth Driver</span>
                                        <i className="fas fa-arrow-right ml-auto text-[10px]"></i>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* ————————————————— LIVE DASHBOARD METRICS BAR ————————————————— */}
                <Reveal variant="fade" duration={800}>
                    <div className="bg-white rounded-[28px] p-8 sm:p-10 border border-[#D5E1CE] shadow-[0_8px_32px_rgba(0,61,43,0.06)] mb-20 sm:mb-28">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 mb-8 border-b border-[#E8F0E4]">
                            <div>
                                <span className="text-xs font-bold text-[#003D2B] uppercase tracking-wider">Verified Portfolio Impact</span>
                                <h3 className="text-xl sm:text-2xl font-[800] text-[#141912] tracking-tight mt-1">
                                    Real Performance Across Active Client Portfolios
                                </h3>
                            </div>
                            <div className="flex items-center gap-2 bg-[#E3EDE0] text-[#003D2B] px-4 py-2 rounded-full text-xs font-bold border border-[#D3E2CF]">
                                <i className="fas fa-shield-halved"></i>
                                <span>Audited Analytics Data</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {metrics.map((m) => (
                                <div key={m.label} className="p-5 rounded-2xl bg-[#F7FAF4] border border-[#E3EDE0]">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                                            {m.growth}
                                        </span>
                                        <i className={`fas ${m.icon} text-sm text-[#003D2B]`}></i>
                                    </div>
                                    <div className="text-3xl sm:text-4xl font-[800] text-[#141912] tracking-tight mb-1">
                                        {m.value}
                                    </div>
                                    <div className="text-xs font-medium text-[#4E5B49]">
                                        {m.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>

                {/* ————————————————— BENTO BOX SERVICES BREAKDOWN ————————————————— */}
                <div id="channels" className="mb-20 sm:mb-28">
                    <Reveal variant="up" duration={700}>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-4 border-b border-[#D5E1CE]/80">
                            <div>
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] shadow-xs mb-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#003D2B] animate-pulse"></span>
                                    <span className="text-xs font-semibold text-[#003D2B]">Modular Growth Bento</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[800] text-[#141912] tracking-tight">
                                    Our Digital Marketing Services
                                </h2>
                            </div>
                            <p className="text-sm sm:text-base text-[#4E5B49] max-w-md">
                                Engineered as modular, interconnected compartments that fuel your entire customer acquisition pipeline.
                            </p>
                        </div>
                    </Reveal>

                    {/* Bento Box Grid - Equal Heights & Flush Alignment */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">

                        {/* Bento Item 1: Paid Advertising (Hero Dark Centerpiece Compartment - 2 Columns) */}
                        <Reveal variant="up" duration={650} className="h-full flex flex-col md:col-span-2 lg:col-span-2">
                            <div className="bg-gradient-to-br from-[#003D2B] via-[#004A35] to-[#01251A] text-white rounded-[32px] p-8 sm:p-10 border border-[#005A3E]/70 shadow-[0_20px_50px_rgba(0,61,43,0.22)] h-full flex flex-col justify-between relative overflow-hidden group">
                                {/* Ambient Background Flares */}
                                <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-400/30 transition-all duration-500" />
                                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                                        <div className="flex items-center gap-3.5">
                                            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-emerald-300 text-2xl group-hover:scale-110 transition-transform">
                                                <i className="fas fa-rectangle-ad"></i>
                                            </div>
                                            <div>
                                                <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-widest">
                                                    Search • Meta • Display • Retargeting
                                                </span>
                                                <h3 className="text-2xl sm:text-3xl font-[800] text-white tracking-tight mt-0.5">
                                                    Paid Advertising (Google & Meta)
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 px-4 py-2 rounded-full text-xs font-bold text-emerald-300 backdrop-blur-sm">
                                            <i className="fas fa-chart-line text-emerald-300"></i>
                                            <span>4.8x Target ROAS</span>
                                        </div>
                                    </div>

                                    <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8 max-w-2xl">
                                        Engineered PPC and paid social campaigns across Google Ads, Meta (Instagram & Facebook), and YouTube. We target in-market buyers, run daily algorithmic bidding optimizations, and eliminate wasted ad spend.
                                    </p>

                                    {/* Bento Interactive ROAS & Tracking Matrix */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                                        <div>
                                            <div className="flex justify-between text-xs font-bold text-white mb-2">
                                                <span>Search Intent Lead Capture</span>
                                                <span className="text-emerald-300">94% Target Match</span>
                                            </div>
                                            <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                                                <div className="bg-gradient-to-r from-emerald-400 to-teal-300 h-full rounded-full w-[94%]" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs font-bold text-white mb-2">
                                                <span>Dynamic Retargeting CTR</span>
                                                <span className="text-emerald-300">6.2% Avg (+3.1x)</span>
                                            </div>
                                            <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                                                <div className="bg-gradient-to-r from-amber-300 to-emerald-400 h-full rounded-full w-[78%]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative z-10 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {['Google Search PPC', 'Meta Ads (IG/FB)', 'YouTube Video Ads', 'Lookalike Audiences'].map(t => (
                                            <span key={t} className="text-[11px] font-semibold bg-white/10 text-white/90 px-3 py-1 rounded-full border border-white/15 backdrop-blur-sm">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <Link to="/company/contact-us" className="text-xs font-bold text-emerald-300 hover:text-white flex items-center gap-1.5 transition-colors">
                                        Launch Campaigns <i className="fas fa-arrow-right text-[10px]"></i>
                                    </Link>
                                </div>
                            </div>
                        </Reveal>

                        {/* Bento Item 2: AI Video Creation & Instagram Posting (1-Column Compartment) */}
                        <Reveal variant="up" delay={100} duration={650} className="h-full flex flex-col md:col-span-1 lg:col-span-1">
                            <div className="bg-white rounded-[32px] p-8 border border-[#D5E1CE] shadow-[0_8px_30px_rgba(0,61,43,0.05)] hover:shadow-[0_16px_36px_rgba(0,61,43,0.12)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-36 h-36 bg-pink-400/10 rounded-full blur-2xl pointer-events-none group-hover:bg-pink-400/20 transition-all" />

                                <div>
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="w-12 h-12 rounded-2xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B] text-lg shrink-0 group-hover:scale-110 transition-transform">
                                            <i className="fas fa-video"></i>
                                        </div>
                                        <span className="text-[11px] font-bold text-pink-600 bg-pink-50 border border-pink-200/80 px-3 py-1 rounded-full flex items-center gap-1.5">
                                            <i className="fab fa-instagram"></i> Auto-Posted
                                        </span>
                                    </div>

                                    <span className="text-[11px] font-bold text-[#003D2B] uppercase tracking-wider">AI Generation • Automated Posting</span>
                                    <h3 className="text-xl font-[800] text-[#141912] mt-1 mb-3 tracking-tight">
                                        AI Video Creation & Instagram Posting
                                    </h3>
                                    <p className="text-sm text-[#4E5B49] leading-relaxed mb-6">
                                        We create hyper-realistic AI videos, generative human avatars, and viral video scripts, then schedule and publish them directly to Instagram to drive continuous organic reach and inbound leads 24/7.
                                    </p>

                                    {/* Bento AI Video Pipeline Box */}
                                    <div className="p-4 rounded-2xl bg-[#F7FAF4] border border-[#E3EDE0] mb-6 space-y-2.5">
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="font-bold text-[#003D2B] flex items-center gap-1.5">
                                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                                AI Video Engine Online
                                            </span>
                                            <span className="text-[11px] font-semibold text-[#7A8A75]">4K Resolution</span>
                                        </div>
                                        <div className="text-xs text-[#141912] bg-white p-2.5 rounded-xl border border-[#E3EDE0] flex items-center justify-between">
                                            <span className="text-[#4E5B49]">Reel Virality Lift:</span>
                                            <span className="font-extrabold text-emerald-700">+140% Reach</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-[#F0F4EC] flex flex-wrap gap-2 mt-auto">
                                    {['AI Video Creation', 'Instagram Posting', 'Digital Avatars', 'Viral Scripts'].map(t => (
                                        <span key={t} className="text-[11px] font-semibold bg-[#F4F7EE] text-[#003D2B] px-2.5 py-1 rounded-full border border-[#D5E1CE]">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>

                        {/* Bento Item 3: SEO & Organic Search (1-Column Compartment) */}
                        <Reveal variant="up" delay={150} duration={650} className="h-full flex flex-col md:col-span-1 lg:col-span-1">
                            <div className="bg-white rounded-[32px] p-8 border border-[#D5E1CE] shadow-[0_8px_30px_rgba(0,61,43,0.05)] hover:shadow-[0_16px_36px_rgba(0,61,43,0.12)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between group">
                                <div>
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="w-12 h-12 rounded-2xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B] text-lg shrink-0 group-hover:scale-110 transition-transform">
                                            <i className="fas fa-magnifying-glass-chart"></i>
                                        </div>
                                        <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full flex items-center gap-1.5">
                                            <i className="fas fa-check-circle text-[10px]"></i> Rank #1
                                        </span>
                                    </div>
                                    <span className="text-[11px] font-bold text-[#003D2B] tracking-tight uppercase">Technical • On-Page • AEO</span>
                                    <h3 className="text-xl font-[800] text-[#141912] mt-1 mb-3 tracking-tight">
                                        SEO & Organic Engine
                                    </h3>
                                    <p className="text-sm text-[#4E5B49] leading-relaxed mb-6">
                                        Dominate Google organic search and get cited inside AI search engines (ChatGPT, Perplexity, Gemini) through technical SEO and authority backlinks.
                                    </p>

                                    {/* Bento SERP Snippet Preview */}
                                    <div className="p-4 rounded-2xl bg-[#F7FAF4] border border-[#E3EDE0] mb-6 text-xs">
                                        <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-bold mb-1">
                                            <i className="fas fa-check-circle text-[10px]"></i> Rank #1 Organic Featured Snippet
                                        </div>
                                        <div className="text-[#141912] font-bold text-xs truncate">
                                            ANVRiksh: Autonomous Business Growth Engine
                                        </div>
                                        <div className="text-[11px] text-[#7A8A75] mt-1">
                                            Core Web Vitals: 99/100 • AI Overview Cited
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-[#F0F4EC] flex flex-wrap gap-2 mt-auto">
                                    {['Technical SEO', 'AI Engine (AEO)', 'Backlink Authority'].map(t => (
                                        <span key={t} className="text-[11px] font-semibold bg-[#F4F7EE] text-[#003D2B] px-2.5 py-1 rounded-full border border-[#D5E1CE]">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>

                        {/* Bento Item 4: LinkedIn B2B Lead Gen (1-Column Compartment) */}
                        <Reveal variant="up" delay={200} duration={650} className="h-full flex flex-col md:col-span-1 lg:col-span-1">
                            <div className="bg-white rounded-[32px] p-8 border border-[#D5E1CE] shadow-[0_8px_30px_rgba(0,61,43,0.05)] hover:shadow-[0_16px_36px_rgba(0,61,43,0.12)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between group">
                                <div>
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="w-12 h-12 rounded-2xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B] text-lg shrink-0 group-hover:scale-110 transition-transform">
                                            <i className="fas fa-briefcase"></i>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center text-xs">
                                            <i className="fab fa-linkedin-in"></i>
                                        </div>
                                    </div>

                                    <span className="text-[11px] font-bold text-[#003D2B] tracking-tight uppercase">ABM • Founder Authority</span>
                                    <h3 className="text-xl font-[800] text-[#141912] mt-1 mb-3 tracking-tight">
                                        LinkedIn B2B Lead Gen
                                    </h3>
                                    <p className="text-sm text-[#4E5B49] leading-relaxed mb-6">
                                        B2B client acquisition programs targeting enterprise decision-makers. Includes executive personal branding, industry newsletters, and Account-Based Marketing.
                                    </p>

                                    {/* Bento Target Persona Box */}
                                    <div className="p-4 rounded-2xl bg-[#F7FAF4] border border-[#E3EDE0] mb-6">
                                        <div className="text-[11px] text-[#7A8A75] font-semibold mb-1">Decision-Maker Pipeline</div>
                                        <div className="text-xs font-bold text-[#141912]">VP, CMO & C-Suite Target Accounts</div>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-[#F0F4EC] flex flex-wrap gap-2 mt-auto">
                                    {['ABM Funnels', 'Founder Branding', 'Executive Inbound'].map(t => (
                                        <span key={t} className="text-[11px] font-semibold bg-[#F4F7EE] text-[#003D2B] px-2.5 py-1 rounded-full border border-[#D5E1CE]">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>

                        {/* Bento Item 5: Email Marketing (Nurture & Convert) (1-Column Compartment) */}
                        <Reveal variant="up" delay={250} duration={650} className="h-full flex flex-col md:col-span-1 lg:col-span-1">
                            <div className="bg-white rounded-[32px] p-8 border border-[#D5E1CE] shadow-[0_8px_30px_rgba(0,61,43,0.05)] hover:shadow-[0_16px_36px_rgba(0,61,43,0.12)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between group">
                                <div>
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="w-12 h-12 rounded-2xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B] text-lg shrink-0 group-hover:scale-110 transition-transform">
                                            <i className="fas fa-envelope-open-text"></i>
                                        </div>
                                        <span className="text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200/80 px-3 py-1 rounded-full flex items-center gap-1.5">
                                            <i className="fas fa-bolt text-[10px]"></i> Automated
                                        </span>
                                    </div>
                                    <span className="text-[11px] font-bold text-[#003D2B] tracking-tight uppercase">Automated Flows • Retention</span>
                                    <h3 className="text-xl font-[800] text-[#141912] mt-1 mb-3 tracking-tight">
                                        Email & SMS Lifecycle
                                    </h3>
                                    <p className="text-sm text-[#4E5B49] leading-relaxed mb-6">
                                        Automated behavioral drip sequences that maximize customer Lifetime Value (LTV), recover abandoned carts, and re-engage lapsed accounts.
                                    </p>

                                    {/* Bento Open Rate Box */}
                                    <div className="p-4 rounded-2xl bg-[#F7FAF4] border border-[#E3EDE0] mb-6 flex items-center justify-between">
                                        <div>
                                            <div className="text-[11px] text-[#7A8A75] font-semibold">Average Open Rate</div>
                                            <div className="text-xs font-bold text-[#141912]">42.8% (+2.4x Industry Avg)</div>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs">
                                            <i className="fas fa-paper-plane"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-[#F0F4EC] flex flex-wrap gap-2 mt-auto">
                                    {['Lifecycle Flows', 'Cart Recovery', 'VIP Segmentation'].map(t => (
                                        <span key={t} className="text-[11px] font-semibold bg-[#F4F7EE] text-[#003D2B] px-2.5 py-1 rounded-full border border-[#D5E1CE]">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>

                        {/* Bento Item 6: Content Marketing & Production (1-Column Compartment) */}
                        <Reveal variant="up" delay={300} duration={650} className="h-full flex flex-col md:col-span-1 lg:col-span-1">
                            <div className="bg-white rounded-[32px] p-8 border border-[#D5E1CE] shadow-[0_8px_30px_rgba(0,61,43,0.05)] hover:shadow-[0_16px_36px_rgba(0,61,43,0.12)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between group">
                                <div>
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="w-12 h-12 rounded-2xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B] text-lg shrink-0 group-hover:scale-110 transition-transform">
                                            <i className="fas fa-pen-nib"></i>
                                        </div>
                                        <span className="text-[11px] font-bold text-[#003D2B] bg-[#E8F4E5] border border-[#D5E1CE] px-3 py-1 rounded-full flex items-center gap-1.5">
                                            <i className="fas fa-file-lines text-[10px]"></i> Editorial
                                        </span>
                                    </div>
                                    <span className="text-[11px] font-bold text-[#003D2B] tracking-tight uppercase">Articles • Video Scripts</span>
                                    <h3 className="text-xl font-[800] text-[#141912] mt-1 mb-3 tracking-tight">
                                        Content Production
                                    </h3>
                                    <p className="text-sm text-[#4E5B49] leading-relaxed mb-6">
                                        Editorial-grade content assets that educate, persuade, and rank: in-depth industry guides, video scripts, motion graphics, and customer case studies.
                                    </p>

                                    {/* Bento Asset Preview */}
                                    <div className="p-4 rounded-2xl bg-[#F7FAF4] border border-[#E3EDE0] mb-6 space-y-2 text-xs text-[#141912]">
                                        <div className="flex items-center gap-2">
                                            <i className="fas fa-file-lines text-[#003D2B]"></i>
                                            <span className="font-semibold">Deep-Dive Industry Whitepapers</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <i className="fas fa-video text-[#003D2B]"></i>
                                            <span className="font-semibold">Conversion-Focused Video Scripts</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-[#F0F4EC] flex flex-wrap gap-2 mt-auto">
                                    {['Editorial Guides', 'Video Scripts', 'Whitepapers'].map(t => (
                                        <span key={t} className="text-[11px] font-semibold bg-[#F4F7EE] text-[#003D2B] px-2.5 py-1 rounded-full border border-[#D5E1CE]">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>

                        {/* Bento Item 7: Campaign Management & Observability (Wide 2-Column Anchor Compartment) */}
                        <Reveal variant="up" delay={350} duration={650} className="h-full flex flex-col md:col-span-2 lg:col-span-2">
                            <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-[#D5E1CE] shadow-[0_8px_30px_rgba(0,61,43,0.05)] hover:shadow-[0_16px_36px_rgba(0,61,43,0.12)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-400/20 transition-all" />

                                <div>
                                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                                        <div className="flex items-center gap-3.5">
                                            <div className="w-14 h-14 rounded-2xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B] text-2xl group-hover:scale-110 transition-transform">
                                                <i className="fas fa-chart-pie"></i>
                                            </div>
                                            <div>
                                                <span className="text-[11px] font-bold text-[#003D2B] uppercase tracking-wider">Attribution • Looker • GA4</span>
                                                <h3 className="text-2xl sm:text-3xl font-[800] text-[#141912] tracking-tight mt-0.5">
                                                    Campaign Management & Observability
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 bg-[#F4F7EE] border border-[#D5E1CE] px-4 py-2 rounded-full text-xs font-bold text-[#003D2B]">
                                            <i className="fas fa-shield-halved text-emerald-600"></i>
                                            <span>Zero Ad-Spend Waste Policy</span>
                                        </div>
                                    </div>

                                    <p className="text-sm sm:text-base text-[#4E5B49] leading-relaxed mb-6 max-w-2xl">
                                        Full transparency into every rupee spent. Live executive reporting dashboards, cohort retention analysis, multi-touch attribution modeling, and weekly growth sprint reviews.
                                    </p>

                                    {/* Bento Live Dashboard Indicator */}
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#F7FAF4] border border-[#E3EDE0] mb-6 text-center">
                                        <div className="p-2">
                                            <div className="text-[11px] text-[#7A8A75] font-semibold">Attribution</div>
                                            <div className="text-sm font-bold text-[#141912] mt-0.5">Multi-Touch</div>
                                        </div>
                                        <div className="p-2 border-l border-[#E3EDE0]">
                                            <div className="text-[11px] text-[#7A8A75] font-semibold">Reporting</div>
                                            <div className="text-sm font-bold text-[#141912] mt-0.5">Real-Time GA4</div>
                                        </div>
                                        <div className="p-2 border-l border-[#E3EDE0]">
                                            <div className="text-[11px] text-[#7A8A75] font-semibold">Optimization</div>
                                            <div className="text-sm font-bold text-[#141912] mt-0.5">Daily Bidding</div>
                                        </div>
                                        <div className="p-2 border-l border-[#E3EDE0]">
                                            <div className="text-[11px] text-[#7A8A75] font-semibold">Transparency</div>
                                            <div className="text-sm font-bold text-[#141912] mt-0.5">100% Direct</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-5 border-t border-[#F0F4EC] flex flex-wrap items-center justify-between gap-4 mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {['Attribution Modeling', 'GA4 & Looker Studio', 'Cohort Analysis', 'Daily ROAS Review'].map(t => (
                                            <span key={t} className="text-[11px] font-semibold bg-[#F4F7EE] text-[#003D2B] px-3 py-1 rounded-full border border-[#D5E1CE]">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <Link to="/company/contact-us" className="text-xs font-bold text-[#003D2B] flex items-center gap-1.5 group-hover:gap-2 transition-all">
                                        Request Dashboard Demo <i className="fas fa-arrow-right text-[10px]"></i>
                                    </Link>
                                </div>
                            </div>
                        </Reveal>

                    </div>
                </div>

                {/* ————————————————— CLIENT SPOTLIGHT — OMIMPEX ————————————————— */}
                <Reveal variant="fade" duration={750}>
                    <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-[#D5E1CE] shadow-[0_8px_32px_rgba(0,61,43,0.06)] mb-20 sm:mb-28 relative overflow-hidden">
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                            <div className="lg:col-span-8">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] text-xs font-bold text-[#003D2B] mb-4">
                                    <i className="fas fa-award text-amber-500"></i> Client Case Study
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-[800] text-[#141912] tracking-tight mb-4">
                                    OMIMPEX — Digital Marketing Transformation
                                </h3>
                                <p className="text-[#4E5B49] text-base leading-relaxed mb-6">
                                    &ldquo;ANVRiksh provides exceptional digital marketing support for OMIMPEX. Their data-driven campaigns, brand positioning, and targeted outreach strategies have delivered measurable growth and boosted our client acquisition significantly.&rdquo;
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#003D2B] text-white flex items-center justify-center font-bold text-sm">
                                        K
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-[#141912]">Kaushik</h4>
                                        <p className="text-xs text-[#003D2B] font-semibold">Founder, OMIMPEX</p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-4 bg-[#F4F7EE] p-6 rounded-2xl border border-[#D5E1CE] space-y-4">
                                <h4 className="text-xs font-bold uppercase text-[#003D2B] tracking-wider">Engagement Highlights</h4>
                                <div className="space-y-3 text-sm text-[#141912]">
                                    <div className="flex items-center gap-2">
                                        <i className="fas fa-check text-emerald-600 text-xs"></i>
                                        <span>Targeted B2B Trade Outreach</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <i className="fas fa-check text-emerald-600 text-xs"></i>
                                        <span>Multi-Channel Brand Positioning</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <i className="fas fa-check text-emerald-600 text-xs"></i>
                                        <span>Substantial Qualified Lead Lift</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* ————————————————— 4-STEP STRATEGIC ROADMAP ————————————————— */}
                <div className="mb-20 sm:mb-28">
                    <Reveal variant="up" duration={700}>
                        <div className="text-center max-w-3xl mx-auto mb-14">
                            <span className="text-xs font-bold text-[#003D2B] uppercase tracking-wider">Proven Execution Methodology</span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[800] text-[#141912] tracking-tight mt-1 mb-4">
                                How We Scale Your Marketing
                            </h2>
                            <p className="text-[#4E5B49] text-sm sm:text-base leading-relaxed">
                                A systematic, hypothesis-driven roadmap designed to eliminate guesswork and compound return on ad spend.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {processSteps.map((step) => (
                            <Reveal key={step.step} variant="up" duration={650}>
                                <div className="bg-white rounded-2xl p-7 border border-[#D5E1CE] shadow-xs relative h-full">
                                    <div className="text-3xl font-[800] text-[#003D2B]/20 mb-3">
                                        {step.step}
                                    </div>
                                    <h3 className="text-lg font-[800] text-[#141912] mb-2 tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-[#4E5B49] leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* ————————————————— FAQ SECTION ————————————————— */}
                <div className="mb-20 sm:mb-28 max-w-4xl mx-auto">
                    <Reveal variant="up" duration={700}>
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl font-[800] text-[#141912] tracking-tight mb-3">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-sm text-[#4E5B49]">
                                Everything you need to know about partnering with our digital marketing team.
                            </p>
                        </div>
                    </Reveal>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <Reveal key={i} variant="up" delay={i * 60} duration={600}>
                                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#D5E1CE] shadow-xs">
                                    <h3 className="text-base sm:text-lg font-[800] text-[#141912] mb-2.5 flex items-start gap-3">
                                        <span className="text-[#003D2B] font-bold">Q.</span>
                                        <span>{faq.q}</span>
                                    </h3>
                                    <p className="text-sm text-[#4E5B49] leading-relaxed pl-6">
                                        {faq.a}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* ————————————————— CTA BANNER ————————————————— */}
                <Reveal variant="up" duration={700}>
                    <div className="bg-gradient-to-br from-[#003D2B] via-[#004D36] to-[#0A261B] text-white rounded-3xl md:rounded-[36px] p-8 sm:p-14 text-center relative overflow-hidden shadow-[0_16px_40px_rgba(0,61,43,0.18)]">
                        <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold mb-4">
                                <i className="fas fa-chart-line text-amber-300"></i>
                                <span>Complimentary Growth Audit</span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-[800] text-white tracking-tight mb-4">
                                Ready to Compound Your Revenue?
                            </h3>

                            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8">
                                Connect with our marketing strategists for a free 30-minute growth audit. We will analyze your funnel, evaluate your ad efficiency, and identify immediate opportunities to scale.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    to="/company/contact-us"
                                    className="bg-white text-[#003D2B] px-8 py-4 rounded-full font-bold text-sm hover:bg-[#E8F4E5] transition-all shadow-[0_4px_16px_rgba(0,0,0,0.2)] active:scale-95"
                                >
                                    Claim Your Free Audit
                                </Link>
                                <a
                                    href={`tel:${COMPANY_DETAILS.primaryPhone}`}
                                    className="bg-white/10 hover:bg-white/20 text-white border border-white/25 px-7 py-4 rounded-full font-bold text-sm transition-all"
                                >
                                    Call Direct: {COMPANY_DETAILS.primaryPhone}
                                </a>
                            </div>

                            <p className="text-white/50 text-xs mt-5">
                                No obligation • 24h turnaround • Direct strategy discussion with growth engineers
                            </p>
                        </div>
                    </div>
                </Reveal>

            </div>
        </div>
    );
};

export default DigitalMarketing;