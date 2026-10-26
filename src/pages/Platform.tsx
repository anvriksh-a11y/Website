import React, { useState, useEffect, useRef } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import KeyTakeaways from '../components/KeyTakeaways';

const RevealOnScroll = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`${className} transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {children}
        </div>
    );
};

const NodeHexagon = ({ name, icon, delay }: { name: string; icon: string; delay: number }) => (
    <div
        className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-[#030712]/40 border border-white/5 hover:border-sky-500/30 hover:bg-[#030712]/60 transition-all duration-500 group relative overflow-hidden"
        style={{ transitionDelay: `${delay}ms` }}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="w-12 h-12 rounded-2xl bg-slate-800/30 flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-sky-500/10 group-hover:border-sky-500/30 transition-all font-semibold">
            <i className={`${icon} text-slate-400 group-hover:text-sky-400 text-lg`}></i>
        </div>
        <span className="text-xs font-semibold text-slate-300 tracking-wide uppercase">{name}</span>
    </div>
);

const Platform: React.FC = () => {
    const coreNodes = [
        { name: "HTTP Request", icon: "fas fa-globe" },
        { name: "Webhooks", icon: "fas fa-bolt" },
        { name: "WhatsApp", icon: "fab fa-whatsapp" },
        { name: "OpenAI", icon: "fas fa-brain" },
        { name: "ChatGPT", icon: "fas fa-comment-dots" },
        { name: "Llama", icon: "fas fa-hippo" },
        { name: "Groq", icon: "fas fa-microchip" },
        { name: "Zoho Sheets", icon: "fas fa-table" },
        { name: "Discord", icon: "fab fa-discord" },
        { name: "Telegram", icon: "fab fa-telegram" }
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "Yugma",
                "alternateName": "Yugma Platform",
                "operatingSystem": "Web",
                "applicationCategory": "BusinessApplication",
                "url": "https://yugma.anvriksh.com/",
                "provider": {
                    "@type": "Organization",
                    "name": "ANVRiksh",
                    "legalName": "ANVRiksh Tech Solutions LLP",
                    "identifier": "ADA-3944"
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "ANVRiksh", "item": "https://anvriksh.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Platform", "item": "https://anvriksh.com/platform" }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-[#030712] text-gray-400 font-inter selection:bg-sky-500/30 overflow-x-hidden">
            <SEO
                title="Build AI Workflows: Yugma Platform | ANVRiksh"
                description="Design, deploy, and scale complex AI agent workflows visually. Secure, sovereign infrastructure for India's autonomous future. Start building for free."
                keywords="Yugma Platform, Agentic AI Orchestration, AI Workflow Builder, India AI Platform, Sovereign AI Infrastructure"
                canonicalUrl="https://anvriksh.com/platform"
                structuredData={structuredData}
                ogImage="/platform_hero.png"
            />

            {/* Platform Hero Section */}
            <section className="pt-32 pb-48 md:pt-40 md:pb-64 text-center relative overflow-visible flex flex-col justify-center items-center z-0">
                <div className="container mx-auto px-5 max-w-7xl">
                    <RevealOnScroll className="max-w-[1000px] mx-auto mb-16 relative z-10">
                        <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-8 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent tracking-tight">
                            Automating Business with <br className="hidden md:block" />
                            <span className="text-white">Visual Workflows.</span>
                        </h1>
                        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Yugma is India's first unified orchestration engine. A production-ready environment
                            to build, automate, and scale the next generation of AI-driven enterprises.
                        </p>
                        <div className="flex justify-center gap-4 mb-32">
                            <a href="https://yugma.anvriksh.com/" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium text-white bg-gradient-to-b from-slate-900/60 to-slate-900 border border-sky-500 shadow-[0_0_20px_rgba(14,165,233,0.4),inset_0_0_10px_rgba(14,165,233,0.2)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6),inset_0_0_15px_rgba(14,165,233,0.3)] hover:border-sky-400 hover:-translate-y-px transition-all group">
                                <span className="relative z-10">Launch Platform</span>
                                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-sky-500/20 to-transparent group-hover:left-full transition-all duration-500"></div>
                            </a>
                            <Link to="/company/contact-us" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
                                Request Deck
                            </Link>
                        </div>

                        {/* Sovereign Builder Interface - Hero Asset */}
                        <div className="relative group max-w-5xl mx-auto">
                            {/* Intense Glow Layer */}
                            <div className="absolute -inset-10 bg-sky-500/20 blur-[120px] rounded-full opacity-60 group-hover:opacity-90 transition-opacity duration-1000"></div>
                            <div className="absolute -inset-2 bg-gradient-to-r from-sky-400/20 via-indigo-500/20 to-purple-500/20 blur-3xl opacity-40 group-hover:opacity-80 transition duration-1000"></div>

                            <div className="relative rounded-[2.5rem] border border-white/10 bg-[#030712] p-2 shadow-[0_0_50px_rgba(14,165,233,0.15)] overflow-hidden">
                                <img src="/platform_hero.png" alt="Yugma Core" className="w-full object-cover scale-100 group-hover:scale-[1.03] transition-transform duration-[2000ms]" />
                                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030712] to-transparent"></div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Ecosystem Grid */}
            <section className="py-32 relative bg-slate-900/10 border-y border-white/5">
                <div className="container mx-auto px-6 max-w-7xl">
                    <RevealOnScroll className="max-w-3xl mb-24">
                        <div className="text-sky-400 font-semibold text-sm uppercase tracking-widest mb-4">The Platform Stack</div>
                        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-8 tracking-tight">Unified Infrastructure.</h2>
                        <p className="text-xl text-gray-400 font-normal leading-relaxed italic border-l-2 border-sky-500/30 pl-6">"Providing the backbone for India's digital transformation with 10 high-performance core connectors."</p>
                    </RevealOnScroll>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {coreNodes.map((node, idx) => (
                            <NodeHexagon key={idx} name={node.name} icon={node.icon} delay={idx * 50} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual Builder Sections */}
            <section className="py-48 container mx-auto px-6 max-w-7xl">
                {/* Agent Architect */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mb-64">
                    <RevealOnScroll>
                        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-10 tracking-tight leading-tight">The Agent Architect.</h2>
                        <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                            Design complex enterprise logic with topological precision. Connect disparate data streams
                            into a singular autonomous flow.
                        </p>
                        <div className="space-y-4">
                            {['Topological Flow Mapping', 'LLM Context Orchestration', 'Real-time State Management'].map((f, i) => (
                                <div key={i} className="flex items-center gap-4 text-slate-200 font-medium group">
                                    <div className="w-1.5 h-1.5 rounded-full bg-sky-500 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
                                    {f}
                                </div>
                            ))}
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll className="relative group">
                        <div className="absolute -inset-10 bg-indigo-500/10 blur-[100px] rounded-full opacity-50"></div>
                        <div className="relative rounded-3xl border border-white/10 bg-slate-900 shadow-[0_0_40px_rgba(99,102,241,0.1)] overflow-hidden p-2 transform transition-all duration-700 group-hover:shadow-indigo-500/20">
                            <img src="/platform_builder.png" alt="Yugma Builder" className="w-full rounded-2xl" />
                        </div>
                        <div className="absolute -bottom-16 -left-16 w-64 rounded-2xl border border-white/10 bg-[#030712] p-1.5 shadow-2xl hidden md:block group-hover:-translate-y-2 transition-transform duration-500">
                            <img src="/india_platform_1.png" alt="" className="w-full rounded-xl opacity-70" />
                        </div>
                    </RevealOnScroll>
                </div>

                {/* Operational Mastery */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                    <RevealOnScroll className="lg:order-2">
                        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-10 tracking-tight leading-tight">Operational Mastery.</h2>
                        <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                            Monitor, debug, and optimize. Our dashboard provides 360° observability into
                            your autonomous workforce.
                        </p>
                        <div className="flex gap-12">
                            <div className="flex flex-col">
                                <span className="text-4xl font-semibold text-white">98.4%</span>
                                <span className="text-xs uppercase font-medium text-slate-500 tracking-widest mt-2">Efficiency</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-4xl font-semibold text-white">1.2k+</span>
                                <span className="text-xs uppercase font-medium text-slate-500 tracking-widest mt-2">Executions</span>
                            </div>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll className="relative group lg:order-1">
                        <div className="absolute -inset-10 bg-purple-500/10 blur-[100px] rounded-full opacity-50"></div>
                        <div className="relative rounded-3xl border border-white/10 bg-slate-900 shadow-[0_0_40px_rgba(168,85,247,0.1)] overflow-hidden p-2 transform transition-all duration-700 group-hover:shadow-purple-500/20">
                            <img src="/platform_dashboard.png" alt="Workspace Overview" className="w-full rounded-2xl" />
                        </div>
                        <div className="absolute -top-16 -right-16 w-64 rounded-2xl border border-white/10 bg-[#030712] p-1.5 shadow-2xl hidden md:block group-hover:translate-y-2 transition-transform duration-500">
                            <img src="/india_platform_2.png" alt="" className="w-full rounded-xl opacity-70" />
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Community Section */}
            <section className="py-48 bg-slate-900/5 border-y border-white/5">
                <div className="container mx-auto px-6 max-w-7xl">
                    <RevealOnScroll className="text-center mb-32">
                        <h2 className="text-5xl md:text-6xl font-semibold text-white mb-8 tracking-tight">India's Unified Hub.</h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">A borderless community for the next generation of Indian developers.</p>
                    </RevealOnScroll>

                    <RevealOnScroll className="relative max-w-5xl mx-auto">
                        <div className="absolute inset-0 bg-sky-500/5 blur-[120px] rounded-full"></div>
                        <div className="relative rounded-[2.5rem] border border-white/10 bg-[#030712] p-3 shadow-2xl">
                            <img src="/platform_community.png" alt="Yugma Community" className="w-full rounded-[2rem] opacity-80" />
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Secure Foundation */}
            <section className="py-32 container mx-auto px-6 max-w-7xl border-t border-white/5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                    <RevealOnScroll>
                        <div className="text-sky-400 font-semibold text-sm uppercase tracking-widest mb-4">Security</div>
                        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-8 tracking-tight">Sovereign Protection.</h2>
                        <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                            Built with enterprise-grade security protocols to ensure your data and workflows
                            remain within the sovereign digital boundaries of India.
                        </p>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-sky-500/20 flex items-center justify-center border border-sky-500/30">
                                    <i className="fas fa-shield-alt text-sky-400"></i>
                                </div>
                                <span className="text-white font-semibold">End-to-End Encryption</span>
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed">All workflow data and API communications are secured using industry-standard RSA 2048 encryption protocols.</p>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll className="relative group flex justify-center">
                        <div className="absolute -inset-4 bg-sky-500/10 blur-[100px] rounded-full"></div>
                        <div className="relative rounded-[2rem] border border-white/10 bg-[#030712] p-2 shadow-2xl max-w-md">
                            <img src="/platform_auth.png" alt="Yugma Security" className="w-full rounded-xl" />
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            <section className="py-20 bg-[#030712]">
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <KeyTakeaways takeaways={[
                        "<strong>Sovereign Infrastructure:</strong> Built from the ground up for India's data security needs.",
                        "<strong>No-Code to Pro-Code:</strong> Drag and drop workflow builder with the ability to inject custom scripts.",
                        "<strong>10 Core Connectors:</strong> Natively integrates with WhatsApp, Discord, OpenAI, and HTTP endpoints."
                    ]} />
                </div>
            </section>

            {/* Final Strategic CTA */}
            <section className="py-40 relative overflow-hidden text-center border-t border-white/5">
                <div className="container mx-auto px-5 max-w-7xl relative z-10">
                    <RevealOnScroll>
                        <h2 className="text-5xl md:text-7xl font-semibold leading-[1.1] mb-12 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent tracking-tight">
                            Build for the Bharat.
                        </h2>
                        <p className="text-lg text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed">
                            We are constructing the foundational layer for India's autonomous future.
                            Clean, secure, and built entirely on Indian soil.
                        </p>
                        <div className="flex justify-center gap-4">
                            <a href="https://yugma.anvriksh.com/" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden inline-flex items-center gap-2 px-10 py-5 rounded-lg font-medium text-white bg-gradient-to-b from-slate-900/60 to-slate-900 border border-sky-500 shadow-[0_0_20px_rgba(14,165,233,0.4),inset_0_0_10px_rgba(14,165,233,0.2)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6),inset_0_0_15px_rgba(14,165,233,0.3)] hover:border-sky-400 hover:-translate-y-px transition-all group">
                                <span className="relative z-10 text-lg">Launch Workspace</span>
                                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-sky-500/20 to-transparent group-hover:left-full transition-all duration-500"></div>
                            </a>
                            <Link to="/company/contact-us" className="inline-flex items-center gap-2 px-10 py-5 rounded-lg font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-lg">
                                Request Deck
                            </Link>
                        </div>
                    </RevealOnScroll>
                </div>
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/5 blur-[150px] -z-10 rounded-full"></div>
            </section>

            {/* Logo Transition Section */}
            <section className="py-20 border-t border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/5 to-transparent"></div>
                <div className="container mx-auto px-6 text-center reveal-on-scroll">
                    <img src="/platform_logo_footer.png" alt="Yugma Platform Logo" className="w-80 mx-auto mb-4 opacity-80 hover:opacity-100 transition-opacity" />
                    <p className="text-xs uppercase font-bold text-slate-500 tracking-[0.5em] mt-4">A Premium Product of ANVRiksh Tech Solutions LLP</p>
                </div>
            </section>
        </div>
    );
};

export default Platform;
