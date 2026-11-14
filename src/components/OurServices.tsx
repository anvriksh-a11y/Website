import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import TiltCard from './TiltCard';

interface ServiceItem {
    id: string;
    title: string;
    description: string;
    renderIcon: () => React.ReactNode;
    tags?: string[];
    link: string;
}

const services: ServiceItem[] = [
    {
        id: 'ai-calling-agents',
        title: 'AI Calling Agents',
        description: 'Automate customer outreach, support and sales with AI voice agents.',
        tags: ['One-way Message', 'DTMF Inputs', 'Full Conversation'],
        link: '/gen-ai',
        renderIcon: () => (
            <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
                <defs>
                    <linearGradient id="callGrad1" x1="6" y1="12" x2="42" y2="38" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFA043" />
                        <stop offset="1" stopColor="#E05206" />
                    </linearGradient>
                    <linearGradient id="callGrad2" x1="10" y1="20" x2="20" y2="36" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF7A00" />
                        <stop offset="1" stopColor="#B43700" />
                    </linearGradient>
                </defs>
                {/* Headphone Arch */}
                <path d="M12 24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24V28" stroke="url(#callGrad1)" strokeWidth="4" strokeLinecap="round" />
                {/* Left Ear Cushion */}
                <rect x="8" y="22" width="7" height="13" rx="3.5" fill="url(#callGrad2)" />
                {/* Right Ear Cushion */}
                <rect x="33" y="22" width="7" height="13" rx="3.5" fill="url(#callGrad2)" />
                {/* Mic Boom */}
                <path d="M36 32C36 36 32 39 26 39H23" stroke="#EA580C" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="21" cy="39" r="2.5" fill="#FF7A00" />
            </svg>
        ),
    },
    {
        id: 'website-development',
        title: 'Website Development',
        description: 'High-performance, engaging websites for your brand.',
        tags: ['Static Website', 'Video Website', '3D Website'],
        link: '/software-solutions',
        renderIcon: () => (
            <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
                <defs>
                    <linearGradient id="webGrad1" x1="6" y1="10" x2="42" y2="38" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFA043" />
                        <stop offset="1" stopColor="#E05206" />
                    </linearGradient>
                    <linearGradient id="webGrad2" x1="10" y1="12" x2="38" y2="36" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF8F26" />
                        <stop offset="1" stopColor="#D9480F" />
                    </linearGradient>
                </defs>
                {/* Browser Window */}
                <rect x="7" y="10" width="34" height="26" rx="4" fill="url(#webGrad1)" />
                <rect x="7" y="10" width="34" height="7" rx="4" fill="#C93B00" />
                {/* Window Dots */}
                <circle cx="12" cy="13.5" r="1.5" fill="#FFE0B2" />
                <circle cx="17" cy="13.5" r="1.5" fill="#FFE0B2" />
                <circle cx="22" cy="13.5" r="1.5" fill="#FFE0B2" />
                {/* Content Area Wireframe */}
                <rect x="12" y="21" width="14" height="10" rx="2" fill="#FFE8D1" fillOpacity="0.8" />
                <path d="M29 22H36M29 26H34M29 30H36" stroke="#FFE8D1" strokeWidth="2" strokeLinecap="round" />
                {/* 3D Pointer Cursor */}
                <path d="M26 28L34 38L30 39L27 42L26 28Z" fill="#FFF" stroke="#C93B00" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        id: 'mobile-application',
        title: 'Mobile Application',
        description: 'Custom mobile apps for customers, teams and operations.',
        link: '/software-solutions',
        renderIcon: () => (
            <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
                <defs>
                    <linearGradient id="mobGrad" x1="12" y1="8" x2="36" y2="40" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFA043" />
                        <stop offset="1" stopColor="#E05206" />
                    </linearGradient>
                </defs>
                {/* Phone Body */}
                <rect x="13" y="8" width="22" height="32" rx="4.5" fill="url(#mobGrad)" />
                {/* Screen */}
                <rect x="15.5" y="12" width="17" height="23" rx="2" fill="#FFF" fillOpacity="0.85" />
                {/* Speaker */}
                <rect x="20" y="9.5" width="8" height="1.5" rx="0.75" fill="#C93B00" />
                {/* App Elements on Screen */}
                <rect x="18" y="15" width="12" height="5" rx="1.5" fill="#FF7A00" />
                <rect x="18" y="22" width="5.5" height="5.5" rx="1.5" fill="#FFA043" />
                <rect x="24.5" y="22" width="5.5" height="5.5" rx="1.5" fill="#FFA043" />
                <rect x="18" y="29" width="12" height="3" rx="1" fill="#FFD0A8" />
                {/* Home Indicator */}
                <rect x="20" y="36.5" width="8" height="1.5" rx="0.75" fill="#FFF" />
            </svg>
        ),
    },
    {
        id: 'custom-software-development',
        title: 'Custom Software Development',
        description: 'Scalable and tailored software for unique business needs.',
        link: '/software-solutions',
        renderIcon: () => (
            <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
                <defs>
                    <linearGradient id="cubeTop" x1="14" y1="10" x2="34" y2="22" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFB366" />
                        <stop offset="1" stopColor="#FF851A" />
                    </linearGradient>
                    <linearGradient id="cubeLeft" x1="14" y1="22" x2="24" y2="38" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#E05206" />
                        <stop offset="1" stopColor="#AD3600" />
                    </linearGradient>
                    <linearGradient id="cubeRight" x1="24" y1="22" x2="34" y2="38" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF7A00" />
                        <stop offset="1" stopColor="#D9480F" />
                    </linearGradient>
                </defs>
                {/* 3D Isometric Cube */}
                {/* Top Face */}
                <polygon points="24,10 36,17 24,24 12,17" fill="url(#cubeTop)" />
                {/* Left Face */}
                <polygon points="12,17 24,24 24,38 12,31" fill="url(#cubeLeft)" />
                {/* Right Face */}
                <polygon points="24,24 36,17 36,31 24,38" fill="url(#cubeRight)" />
                {/* Embedded Node Highlights */}
                <circle cx="24" cy="24" r="2.5" fill="#FFF" />
            </svg>
        ),
    },
    {
        id: 'seo-optimization',
        title: 'SEO Optimization',
        description: 'Improve search rankings and drive qualified traffic.',
        link: '/gen-ai',
        renderIcon: () => (
            <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
                <defs>
                    <linearGradient id="seoGrad" x1="8" y1="36" x2="40" y2="12" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFA043" />
                        <stop offset="1" stopColor="#E05206" />
                    </linearGradient>
                </defs>
                {/* Ascending 3D Bars */}
                <rect x="9" y="27" width="6" height="12" rx="2" fill="#FFA043" />
                <rect x="18" y="21" width="6" height="18" rx="2" fill="#FF851A" />
                <rect x="27" y="15" width="6" height="24" rx="2" fill="#E05206" />
                <rect x="36" y="9" width="6" height="30" rx="2" fill="#C93B00" />
                {/* Trend Arrow */}
                <path d="M10 24L20 18L28 12L38 6M38 6H31M38 6V13" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: 'aeo-engine',
        title: 'AEO Engine',
        description: 'Get your brand visible in AI answers (ChatGPT, Gemini, etc.).',
        link: '/gen-ai',
        renderIcon: () => (
            <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
                <defs>
                    <linearGradient id="aeoGrad" x1="10" y1="12" x2="38" y2="36" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFA043" />
                        <stop offset="1" stopColor="#E05206" />
                    </linearGradient>
                </defs>
                {/* Back Bubble */}
                <rect x="18" y="10" width="22" height="16" rx="4" fill="#FFA043" fillOpacity="0.6" />
                {/* Front Chat Bubble */}
                <rect x="8" y="16" width="24" height="18" rx="4" fill="url(#aeoGrad)" />
                <polygon points="12,34 16,34 12,39" fill="#E05206" />
                {/* Dialogue Lines / AI Sparks */}
                <circle cx="16" cy="25" r="2" fill="#FFF" />
                <circle cx="21" cy="25" r="2" fill="#FFF" />
                <circle cx="26" cy="25" r="2" fill="#FFF" />
                {/* AI Star */}
                <path d="M35 14L36.5 17.5L40 19L36.5 20.5L35 24L33.5 20.5L30 19L33.5 17.5L35 14Z" fill="#FFF" />
            </svg>
        ),
    },
    {
        id: 'geo-engine',
        title: 'GEO Engine',
        description: 'Expand discoverability across AI, voice and generative platforms.',
        link: '/gen-ai',
        renderIcon: () => (
            <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
                <defs>
                    <linearGradient id="geoGrad" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFA043" />
                        <stop offset="1" stopColor="#E05206" />
                    </linearGradient>
                </defs>
                {/* Center Node */}
                <circle cx="24" cy="24" r="6" fill="url(#geoGrad)" />
                {/* Outer Satellite Nodes */}
                <circle cx="12" cy="14" r="3.5" fill="#FF851A" />
                <circle cx="36" cy="14" r="3.5" fill="#FF851A" />
                <circle cx="10" cy="34" r="3.5" fill="#E05206" />
                <circle cx="38" cy="34" r="3.5" fill="#E05206" />
                {/* Connecting Laser Beams */}
                <line x1="24" y1="24" x2="12" y2="14" stroke="#FF7A00" strokeWidth="2" strokeDasharray="3 3" />
                <line x1="24" y1="24" x2="36" y2="14" stroke="#FF7A00" strokeWidth="2" strokeDasharray="3 3" />
                <line x1="24" y1="24" x2="10" y2="34" stroke="#FF7A00" strokeWidth="2" strokeDasharray="3 3" />
                <line x1="24" y1="24" x2="38" y2="34" stroke="#FF7A00" strokeWidth="2" strokeDasharray="3 3" />
                <circle cx="24" cy="24" r="2.5" fill="#FFF" />
            </svg>
        ),
    },
    {
        id: 'ai-model-development',
        title: 'AI Model Development',
        description: 'Design, train and deploy custom AI models for your business.',
        link: '/gen-ai',
        renderIcon: () => (
            <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
                <defs>
                    <linearGradient id="sheet1" x1="12" y1="10" x2="36" y2="22" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFB366" />
                        <stop offset="1" stopColor="#FF851A" />
                    </linearGradient>
                    <linearGradient id="sheet2" x1="12" y1="18" x2="36" y2="30" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF7A00" />
                        <stop offset="1" stopColor="#E05206" />
                    </linearGradient>
                    <linearGradient id="sheet3" x1="12" y1="26" x2="36" y2="38" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#D9480F" />
                        <stop offset="1" stopColor="#A63200" />
                    </linearGradient>
                </defs>
                {/* 3D Stacked Layers */}
                {/* Bottom Sheet */}
                <polygon points="24,28 38,34 24,40 10,34" fill="url(#sheet3)" />
                {/* Middle Sheet */}
                <polygon points="24,20 38,26 24,32 10,26" fill="url(#sheet2)" />
                {/* Top Sheet */}
                <polygon points="24,12 38,18 24,24 10,18" fill="url(#sheet1)" />
                {/* Neural Dots */}
                <circle cx="24" cy="18" r="2" fill="#FFF" />
                <circle cx="18" cy="16" r="1.5" fill="#FFF" />
                <circle cx="30" cy="16" r="1.5" fill="#FFF" />
            </svg>
        ),
    },
];

const OurServices: React.FC = () => {
    return (
        <section id="services-section" className="py-20 lg:py-28 relative bg-[#F4F7EE] select-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {/* Subtle organic ambient gradient */}
            <div className="absolute top-0 right-1/4 w-[480px] h-[300px] rounded-full pointer-events-none opacity-40" style={{ background: 'radial-gradient(circle, #E3EDE0 0%, transparent 70%)', filter: 'blur(50px)' }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header Row */}
                <Reveal variant="up" duration={750}>
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
                        <div>
                            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] shadow-xs mb-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#2D452C]" />
                                <span className="text-[12px] sm:text-[13px] font-semibold text-[#2D452C] tracking-tight">
                                    Our Services
                                </span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-[800] text-[#141912] tracking-[-0.035em] leading-[1.12]">
                                End-to-end technology<br />
                                <span className="text-[#003D2B]">and growth solutions.</span>
                            </h2>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-5 lg:max-w-md">
                            <p className="text-[#4E5B49] text-sm sm:text-base leading-relaxed">
                                From AI calling agents to custom software, we build the digital infrastructure your business needs to win.
                            </p>
                            <Link
                                to="/software-solutions"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#003D2B] hover:bg-[#022D20] shadow-[0_8px_20px_rgba(0,61,43,0.25)] hover:shadow-[0_12px_28px_rgba(0,61,43,0.35)] hover:scale-105 active:scale-100 whitespace-nowrap transition-all"
                            >
                                <span>View All Services</span>
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H9M17 7V15" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </Reveal>

                {/* 8 Cards Grid (4 columns x 2 rows) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {services.map((service, idx) => (
                        <Reveal key={service.id} variant="up" delay={idx * 60} duration={750}>
                            <TiltCard maxTilt={4} className="h-full">
                                <Link
                                    to={service.link}
                                    className="group bg-white border border-[#D5E1CE] shadow-[0_4px_16px_rgba(21,24,17,0.04)] hover:shadow-[0_16px_36px_rgba(0,61,43,0.12)] flex flex-col justify-between p-6 rounded-[22px] h-full relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="relative">
                                        <div className="flex items-start justify-between mb-5">
                                            <div className="w-[52px] h-[52px] rounded-2xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center p-2 shadow-xs group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-300">
                                                {service.renderIcon()}
                                            </div>

                                            <div className="w-8 h-8 rounded-full bg-[#F4F7EE] border border-[#D5E1CE] text-[#2D452C] group-hover:bg-[#003D2B] group-hover:text-white group-hover:border-[#003D2B] flex items-center justify-center transition-all group-hover:scale-110">
                                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </div>
                                        </div>

                                        <h3 className="text-[17px] font-[800] text-[#141912] group-hover:text-[#003D2B] transition-colors mb-2 tracking-tight">
                                            {service.title}
                                        </h3>
                                        <p className="text-[13px] text-[#4E5B49] leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>

                                    {service.tags && (
                                        <div className="relative flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-[#EAEFE5]">
                                            {service.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#F4F7EE] border border-[#D5E1CE] text-[#2D452C]"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </Link>
                            </TiltCard>
                        </Reveal>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default OurServices;