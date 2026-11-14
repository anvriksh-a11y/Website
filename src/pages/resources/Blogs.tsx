import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Reveal from '../../components/Reveal';
import zohoHero from '../../assets/zoho-hero.png';

const INSTAGRAM_POST_URLS = [
    "https://www.instagram.com/p/DNYXSMURHyu/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/p/DOJcTakD4Qe/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/reel/DQ4aDMCATN6/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/p/DQtcLEbEX0O/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/reel/DREHEKzgZac/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/reel/DRSM_40geZB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
];

const articlesList = [
    {
        slug: '/why-every-small-business-needs-a-website-2026',
        image: zohoHero,
        category: 'Business Growth',
        date: 'Jun 28, 2026',
        readTime: '5 min read',
        title: 'Why Every Small Business Needs a Website in 2026',
        description: 'Discover why having a high-converting website is mission-critical in 2026 for building customer trust, online search visibility, lead capture, and revenue compounding.'
    },
    {
        slug: '/how-ai-agents-are-reshaping-small-businesses',
        image: '/ai_agents_small_business.png',
        category: 'AI & Automation',
        date: 'Jul 6, 2026',
        readTime: '8 min read',
        title: 'How AI Agents Are Quietly Reshaping Small Businesses',
        description: 'Discover how autonomous AI agents help small-to-mid enterprises automate 24/7 customer support, omnichannel outbound marketing, and back-office sync without losing the human touch.'
    },
    {
        slug: '/enterprise-ai-agents-guide-2026',
        image: '/ai_agents_guide_2026.png',
        category: 'Architecture Guide',
        date: 'Jul 13, 2026',
        readTime: '10 min read',
        title: 'The Ultimate Guide to Enterprise AI Agents in 2026',
        description: 'An architectural deep dive into Agentic AI workflows, memory graphs, multi-agent coordination, and how production deployments reduce enterprise operational overhead by up to 40%.'
    },
    {
        slug: '/ai-agents-vs-traditional-chatbots',
        image: '/agents_vs_chatbots.png',
        category: 'Comparative Analysis',
        date: 'Jul 13, 2026',
        readTime: '6 min read',
        title: "AI Agents vs. Traditional Chatbots: What's the Difference?",
        description: 'Understand the fundamental distinctions between script-bound conversational bots and goal-driven autonomous agents capable of calling external APIs and closing transactions.'
    },
    {
        slug: '/custom-software-development-roi',
        image: '/software_roi.png',
        category: 'Engineering & ROI',
        date: 'Jul 13, 2026',
        readTime: '7 min read',
        title: 'The ROI of Custom Software Development vs. SaaS Subscriptions',
        description: 'Why scaling companies outgrow generic off-the-shelf SaaS stacks, eliminate recurring seat licensing taxes, and build proprietary competitive moats with bespoke software engineering.'
    }
];

const InstagramEmbed = ({ url }: { url: string }) => {
    return (
        <div className="flex justify-center transform hover:scale-[1.01] transition-transform duration-300">
            <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                    background: '#FFFFFF',
                    border: '0',
                    borderRadius: '20px',
                    boxShadow: '0 4px 20px rgba(0, 61, 43, 0.06)',
                    margin: '1px',
                    maxWidth: '540px',
                    minWidth: '320px',
                    padding: '0',
                    width: 'calc(100% - 2px)'
                }}
            >
                <div style={{ padding: '16px' }}>
                    <a href={url} style={{ background: '#FFFFFF', lineHeight: '0', padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank" rel="noreferrer">
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ backgroundColor: '#F4F7EE', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div>
                            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                                <div style={{ backgroundColor: '#F4F7EE', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div>
                                <div style={{ backgroundColor: '#F4F7EE', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                            </div>
                        </div>
                        <div style={{ padding: '19% 0' }}></div>
                        <div style={{ display: 'block', height: '40px', margin: '0 auto 12px', width: '40px' }}></div>
                        <div style={{ paddingTop: '8px' }}>
                            <div style={{ color: '#003D2B', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '13px', fontStyle: 'normal', fontWeight: 700, lineHeight: '18px' }}>
                                View this post on Instagram →
                            </div>
                        </div>
                    </a>
                </div>
            </blockquote>
        </div>
    );
};

const Blogs: React.FC = () => {
    React.useEffect(() => {
        // Load Instagram Embed Script
        const script = document.createElement('script');
        script.src = "//www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            // @ts-expect-error - instgrm is added by an external script
            if (window.instgrm) {
                // @ts-expect-error - instgrm is added by an external script
                window.instgrm.Embeds.process();
            }
        };

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "ANVRiksh Insights & Engineering",
        "description": "Insights, technical architectures, and strategic guides from the ANVRiksh Tech Solutions engineering team.",
        "publisher": {
            "@type": "Organization",
            "name": "ANVRiksh Tech Solutions LLP",
            "identifier": "ADA-3944",
            "url": "https://anvriksh.com"
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
                title="Blogs & Insights | ANVRiksh Tech Solutions LLP"
                description="Explore enterprise guides on Agentic AI, Autonomous Workflows, Custom Software Engineering, and AI-driven business scaling."
                keywords="ANVRiksh Blog, Agentic AI Guide, Custom Software ROI, AI Automation India, LLM Workflows, Enterprise AI 2026"
                canonicalUrl="https://anvriksh.com/resources/blogs"
                structuredData={structuredData}
            />

            {/* Vibrant Atmospheric Mesh Gradient Background */}
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
                {/* Hero Header */}
                <Reveal variant="up" duration={700}>
                    <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#D5E1CE] shadow-xs mb-4">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[12px] font-bold text-[#003D2B] tracking-tight">
                                Knowledge Base • Engineering & Strategy Insights
                            </span>
                        </div>
                        
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[800] text-[#141912] tracking-[-0.035em] leading-[1.12] mb-5">
                            Business Growth & <span className="bg-gradient-to-r from-[#003D2B] via-[#005A3E] to-[#2D5A3A] bg-clip-text text-transparent">AI Insights</span>
                        </h1>
                        
                        <p className="text-sm sm:text-base md:text-lg text-[#4E5B49] leading-relaxed max-w-2xl mx-auto">
                            Actionable architectures, real-world case studies, and engineering breakdowns to help modern enterprises scale with autonomous AI agents.
                        </p>
                    </div>
                </Reveal>

                {/* Featured Articles Section */}
                <div className="mb-20 sm:mb-24">
                    <Reveal variant="fade" duration={600}>
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#D5E1CE]/80">
                            <div className="flex items-center gap-3">
                                <span className="w-2.5 h-7 bg-[#003D2B] rounded-full"></span>
                                <h2 className="text-2xl sm:text-3xl font-[800] text-[#141912] tracking-tight">
                                    Featured Articles
                                </h2>
                            </div>
                            <span className="text-xs font-bold text-[#003D2B] bg-white/80 backdrop-blur-sm border border-[#D5E1CE] px-3.5 py-1.5 rounded-full shadow-2xs">
                                5 Deep Dives Available
                            </span>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {articlesList.map((article, index) => (
                            <Reveal key={article.slug} variant="up" delay={index * 80} duration={600}>
                                <Link
                                    to={article.slug}
                                    className="group bg-white rounded-2xl md:rounded-[24px] overflow-hidden border border-[#D5E1CE] shadow-[0_4px_20px_rgba(0,61,43,0.04)] hover:shadow-[0_12px_32px_rgba(0,61,43,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
                                >
                                    <div className="h-52 relative overflow-hidden bg-[#E8F0E4]">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/95 backdrop-blur-md text-[#003D2B] text-xs font-bold px-3 py-1 rounded-full border border-[#D5E1CE] shadow-xs">
                                                {article.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 sm:p-7 flex flex-col flex-grow">
                                        <div className="flex items-center gap-3 text-xs font-semibold text-[#7A8A75] mb-3">
                                            <span className="flex items-center gap-1.5">
                                                <i className="far fa-calendar-alt text-[#003D2B]"></i> {article.date}
                                            </span>
                                            <span>•</span>
                                            <span className="flex items-center gap-1.5">
                                                <i className="far fa-clock text-[#003D2B]"></i> {article.readTime}
                                            </span>
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-[800] text-[#141912] mb-3 leading-snug group-hover:text-[#004D36] transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-[#4E5B49] text-sm leading-relaxed mb-6 flex-grow">
                                            {article.description}
                                        </p>
                                        <div className="pt-4 border-t border-[#F0F4EC] flex items-center justify-between mt-auto">
                                            <span className="text-[#003D2B] font-bold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                                Read Article <i className="fas fa-arrow-right text-xs"></i>
                                            </span>
                                            <span className="w-8 h-8 rounded-full bg-[#E3EDE0] group-hover:bg-[#003D2B] text-[#003D2B] group-hover:text-white flex items-center justify-center text-xs transition-colors">
                                                <i className="fas fa-chevron-right"></i>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* Instagram Feed Grid */}
                <div className="mb-20 sm:mb-24">
                    <Reveal variant="fade" duration={600}>
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#D5E1CE]/80">
                            <div className="flex items-center gap-3">
                                <span className="w-2.5 h-7 bg-gradient-to-b from-amber-500 to-[#003D2B] rounded-full"></span>
                                <h2 className="text-2xl sm:text-3xl font-[800] text-[#141912] tracking-tight">
                                    Latest from Instagram
                                </h2>
                            </div>
                            <a
                                href="https://www.instagram.com/anvriksh/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs sm:text-sm font-bold text-[#003D2B] hover:text-[#004D36] bg-white border border-[#D5E1CE] px-4 py-2 rounded-full shadow-2xs hover:shadow-xs transition-all flex items-center gap-2"
                            >
                                <span>Follow @anvriksh</span>
                                <i className="fab fa-instagram text-[#E1306C]"></i>
                            </a>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {INSTAGRAM_POST_URLS.filter(url => url.trim() !== "").map((url, index) => (
                            <div 
                                key={index} 
                                className="bg-white rounded-2xl md:rounded-[24px] p-3 border border-[#D5E1CE] shadow-[0_4px_20px_rgba(0,61,43,0.04)] hover:shadow-md transition-shadow"
                            >
                                <InstagramEmbed url={url} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Newsletter / Tech Dispatch Section */}
                <Reveal variant="up" duration={700}>
                    <div className="bg-gradient-to-br from-[#003D2B] via-[#004D36] to-[#0A261B] text-white rounded-3xl md:rounded-[32px] p-8 sm:p-14 text-center relative overflow-hidden shadow-[0_16px_40px_rgba(0,61,43,0.18)]">
                        {/* Background ambient orbs */}
                        <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
                        
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold mb-4">
                                <i className="fas fa-wand-magic-sparkles text-amber-300"></i>
                                <span>ANVRiksh Tech Dispatch</span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-[800] text-white tracking-tight mb-4">
                                Stay Ahead of the Agentic AI Curve
                            </h3>
                            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8">
                                Join engineering leaders and enterprise innovators. Get monthly tactical breakdowns, autonomous agent workflows, and production guides delivered straight to your inbox.
                            </p>
                            <form 
                                onSubmit={(e) => { 
                                    e.preventDefault(); 
                                    alert('Thank you for subscribing to ANVRiksh Insights!'); 
                                }} 
                                className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto"
                            >
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your work email"
                                    className="bg-white/10 border border-white/25 rounded-full px-5 py-3.5 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 backdrop-blur-sm text-sm flex-1"
                                />
                                <button
                                    type="submit"
                                    className="bg-white text-[#003D2B] px-7 py-3.5 rounded-full font-bold text-sm hover:bg-[#E8F4E5] transition-all shadow-[0_4px_16px_rgba(0,0,0,0.2)] active:scale-95"
                                >
                                    Subscribe Free
                                </button>
                            </form>
                            <p className="text-white/50 text-xs mt-4">
                                Zero spam. Unsubscribe anytime. Strictly engineering insights.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default Blogs;