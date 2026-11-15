import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import TiltCard from './TiltCard';

interface ServiceItem {
    id: string;
    title: string;
    description: string;
    renderIcon: () => React.ReactNode;
    link: string;
}

const services: ServiceItem[] = [
    {
        id: 'ai-calling-agents',
        title: 'AI Calling Agents',
        description: 'Automate customer outreach, support and sales with AI voice agents.',
        link: '/calling-agent',
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
        description: 'High-performance, engaging websites engineered with SEO, AEO and GEO built-in.',
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
        id: 'agentic-ai',
        title: 'Agentic AI',
        description: 'Autonomous multi-agent swarms that reason, plan, call tools, and execute workflows.',
        link: '/agentic-ai',
        renderIcon: () => (
            <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
                <defs>
                    <linearGradient id="agenticGrad1" x1="10" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFA043" />
                        <stop offset="1" stopColor="#E05206" />
                    </linearGradient>
                    <linearGradient id="agenticGrad2" x1="16" y1="16" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF7A00" />
                        <stop offset="1" stopColor="#B43700" />
                    </linearGradient>
                </defs>
                {/* 3D Autonomous Agent Hexagon / Brain Mesh */}
                <polygon points="24,8 38,16 38,32 24,40 10,32 10,16" stroke="url(#agenticGrad1)" strokeWidth="3" strokeLinejoin="round" />
                <polygon points="24,14 33,19 33,29 24,34 15,29 15,19" fill="url(#agenticGrad2)" />
                {/* Orbiting Autonomous Tool Nodes */}
                <circle cx="24" cy="8" r="3" fill="#FFA043" stroke="#FFF" strokeWidth="1.5" />
                <circle cx="38" cy="16" r="3" fill="#FF851A" stroke="#FFF" strokeWidth="1.5" />
                <circle cx="38" cy="32" r="3" fill="#E05206" stroke="#FFF" strokeWidth="1.5" />
                <circle cx="24" cy="40" r="3" fill="#C93B00" stroke="#FFF" strokeWidth="1.5" />
                <circle cx="10" cy="32" r="3" fill="#E05206" stroke="#FFF" strokeWidth="1.5" />
                <circle cx="10" cy="16" r="3" fill="#FF851A" stroke="#FFF" strokeWidth="1.5" />
                {/* Central Autonomous Core Spark */}
                <circle cx="24" cy="24" r="3" fill="#FFF" />
            </svg>
        ),
    },
    {
        id: 'data-solutions',
        title: 'Data Solutions',
        description: 'Enterprise lakehouse platforms, ETL medallion pipelines, Fabric & Databricks.',
        link: '/data-solutions',
        renderIcon: () => (
            <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
                <defs>
                    <linearGradient id="dataGrad1" x1="12" y1="8" x2="36" y2="20" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFB366" />
                        <stop offset="1" stopColor="#FF851A" />
                    </linearGradient>
                    <linearGradient id="dataGrad2" x1="12" y1="18" x2="36" y2="30" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF7A00" />
                        <stop offset="1" stopColor="#E05206" />
                    </linearGradient>
                    <linearGradient id="dataGrad3" x1="12" y1="28" x2="36" y2="40" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#D9480F" />
                        <stop offset="1" stopColor="#A63200" />
                    </linearGradient>
                </defs>
                {/* 3D Cylindrical Medallion Lakehouse Database Stack */}
                {/* Top Cylinder */}
                <ellipse cx="24" cy="14" rx="14" ry="5" fill="url(#dataGrad1)" />
                <path d="M10 14V19C10 21.76 16.27 24 24 24C31.73 24 38 21.76 38 19V14" stroke="#E05206" strokeWidth="2.5" fill="url(#dataGrad2)" />
                {/* Middle Cylinder */}
                <path d="M10 23V28C10 30.76 16.27 33 24 33C31.73 33 38 30.76 38 28V23" stroke="#D9480F" strokeWidth="2.5" fill="url(#dataGrad3)" />
                {/* Bottom Cylinder */}
                <path d="M10 32V37C10 39.76 16.27 42 24 42C31.73 42 38 39.76 38 37V32" stroke="#A63200" strokeWidth="2.5" fill="#8C2500" />
                {/* Data Pipeline Signal Dots */}
                <circle cx="24" cy="14" r="2" fill="#FFF" />
                <circle cx="30" cy="22" r="1.5" fill="#FFF" />
                <circle cx="18" cy="31" r="1.5" fill="#FFF" />
            </svg>
        ),
    },
    {
        id: 'digital-marketing',
        title: 'Digital Marketing',
        description: 'AI video creation & Instagram posting, SEO, Google & Meta ads, and lead conversion.',
        link: '/digital-marketing',
        renderIcon: () => (
            <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
                <defs>
                    <linearGradient id="dmGrad" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFA043" />
                        <stop offset="1" stopColor="#E05206" />
                    </linearGradient>
                </defs>
                {/* Bullhorn Megaphone Body */}
                <path d="M10 20H15L27 12V36L15 28H10C8.89543 28 8 27.1046 8 26V22C8 20.8954 8.89543 20 10 20Z" fill="url(#dmGrad)" />
                {/* Sound Wave Beams */}
                <path d="M32 18C34.5 20 36 22 36 24C36 26 34.5 28 32 30" stroke="#E05206" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M36 14C40 17 42 20.5 42 24C42 27.5 40 31 36 34" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" />
                {/* Handle */}
                <path d="M15 28V35C15 36.1046 14.1046 37 13 37H12" stroke="#C93B00" strokeWidth="2.5" strokeLinecap="round" />
                {/* Star Glow */}
                <circle cx="21" cy="24" r="2" fill="#FFF" />
            </svg>
        ),
    },
    {
        id: 'custom-software-development',
        title: 'Custom Software Development',
        description: 'Scalable and tailored software, APIs, and cloud infrastructure for unique business needs.',
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
        id: 'ai-model-development',
        title: 'AI Model Development',
        description: 'Design, fine-tune and deploy custom generative AI models and neural systems.',
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
    {
        id: 'seo-aeo-geo',
        title: 'SEO, AEO & GEO Engine',
        description: 'Dominate Google rankings, featured snippets, and generative AI answers across ChatGPT & Gemini.',
        link: '/software-solutions#seo-aeo-geo',
        renderIcon: () => (
            <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
                <defs>
                    <linearGradient id="searchEngGrad" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFA043" />
                        <stop offset="1" stopColor="#E05206" />
                    </linearGradient>
                </defs>
                {/* Magnifying Prism Ring */}
                <circle cx="21" cy="21" r="12" stroke="url(#searchEngGrad)" strokeWidth="4" />
                <path d="M30 30L40 40" stroke="#C93B00" strokeWidth="4.5" strokeLinecap="round" />
                {/* Inner AI Spark */}
                <path d="M21 14L22.5 18.5L27 20L22.5 21.5L21 26L19.5 21.5L15 20L19.5 18.5L21 14Z" fill="#FFA043" />
                <circle cx="21" cy="20" r="2" fill="#FFF" />
                {/* Orbiting Satellite Node */}
                <circle cx="34" cy="14" r="2.5" fill="#E05206" />
                <line x1="29" y1="17" x2="32" y2="15" stroke="#FFA043" strokeWidth="1.5" strokeDasharray="2 2" />
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