import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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

import SEO from '../components/SEO';

const GenAI: React.FC = () => {
    const [activeModel, setActiveModel] = useState<number | null>(1);

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Generative AI Solutions",
        "provider": {
            "@type": "Organization",
            "name": "ANVRiksh Tech Solutions LLP"
        },
        "description": "Advanced Generative AI services including RAG, LLM integration, and autonomous agents.",
        "serviceType": "Artificial Intelligence",
        "offers": {
            "@type": "Offer",
            "name": "Generative AI Consulting"
        }
    };

    return (
        <div className="min-h-screen bg-[#030712] text-white overflow-hidden font-inter selection:bg-purple-500/30">
            <SEO
                title="Generative AI & Agentic AI Solutions | ANVRiksh"
                description="Unlock the power of Generative AI & Agentic AI. We build intelligent, autonomous agents and custom RAG systems for enterprise automation."
                keywords="Generative AI, Agentic AI, RAG, LLM, AI Agents, Machine Learning, NLP, Enterprise AI"
                canonicalUrl="https://anvriksh.com/gen-ai"
                structuredData={structuredData}
            />
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-[#030712] to-[#030712]"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                </div>

                <div className="container mx-auto px-5 max-w-7xl relative z-10 text-center">
                    <RevealOnScroll>
                        {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-800/50 border border-white/10 rounded-full text-slate-200 text-sm font-normal mb-8 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Neural Architecture
                        </div> */}

                        <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-6 pb-2 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent tracking-tight">
                            Understanding the <br />
                            <span>Brain Behind the Bot</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed">
                            Dive deep into the architecture of Generative AI. From real-time data fetching to
                            advanced neural processing, we turn raw data into intelligent action.
                        </p>
                    </RevealOnScroll>

                    {/* GenAI Workflow Visualization */}
                    <RevealOnScroll className="mb-16 relative max-w-5xl mx-auto">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-[45%] left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent -translate-y-1/2"></div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
                            {[
                                { title: "Data Collection", icon: "fa-database", color: "text-blue-400", bg: "bg-blue-500/10" },
                                { title: "Preprocessing", icon: "fa-filter", color: "text-cyan-400", bg: "bg-cyan-500/10" },
                                { title: "Data Cleaning", icon: "fa-broom", color: "text-indigo-400", bg: "bg-indigo-500/10" },
                                { title: "Model Training", icon: "fa-brain", color: "text-purple-400", bg: "bg-purple-500/10" },
                                { title: "Deployment", icon: "fa-rocket", color: "text-emerald-400", bg: "bg-emerald-500/10" }
                            ].map((step, idx) => (
                                <div key={idx} className="flex flex-col items-center group">
                                    <div className={`w-20 h-20 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-white/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 group-hover:border-blue-500/30 shadow-2xl relative`}>
                                        <div className={`absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`}></div>
                                        <i className={`fas ${step.icon} text-2xl ${step.color} relative z-10`}></i>
                                    </div>
                                    <div className="text-sm font-semibold text-gray-400 group-hover:text-white transition-colors tracking-wide">{step.title}</div>
                                </div>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>
            </section>


            {/* How It Works: Data Fetching & RAG */}
            <section className="py-24 relative border-t border-white/5 overflow-hidden">
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-5 max-w-7xl relative z-10">
                    <RevealOnScroll className="text-center mb-20">
                        <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                            RAG Architecture
                        </div>
                        <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-6 pb-2 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent tracking-tight">
                            The Knowledge Engine
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                            Generative AI isn't magic; it's engineering. We use Retrieval-Augmented Generation (RAG)
                            to ground our models in your real-time data securely.
                        </p>
                    </RevealOnScroll>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                        {[
                            {
                                step: "01",
                                title: "Ingestion Hub",
                                desc: "Your databases and APIs are vectorized and stored in a high-speed engine for instant semantic matching.",
                                icon: "fa-database",
                                color: "text-blue-400"
                            },
                            {
                                step: "02",
                                title: "Semantic Retrieval",
                                desc: "Our system searches for concepts rather than keywords, fetching the most relevant facts for every query.",
                                icon: "fa-search",
                                color: "text-indigo-400"
                            },
                            {
                                step: "03",
                                title: "Fact-Based Output",
                                desc: "The AI combines your business context with LLM power to generate contextually grounded, verified responses.",
                                icon: "fa-microchip",
                                color: "text-emerald-400"
                            }
                        ].map((item, idx) => (
                            <RevealOnScroll key={idx} className="group relative bg-slate-900/40 backdrop-blur-md border border-white/10 p-10 rounded-3xl hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2">
                                <div className="absolute -top-4 right-8 text-4xl font-bold text-white/5 font-mono group-hover:text-blue-500/10 transition-colors">
                                    {item.step}
                                </div>
                                <div className={`w-16 h-16 rounded-2xl bg-slate-800/50 border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-all ${item.color} shadow-2xl shadow-black`}>
                                    <i className={`fas ${item.icon} text-3xl`}></i>
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-4 leading-tight">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* ML Models Interactive Section */}
            <section className="py-24 relative overflow-hidden bg-[#030712]">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-5 max-w-7xl relative z-10">
                    <div className="flex flex-col md:flex-row gap-20 items-center">
                        <div className="flex-1">
                            <RevealOnScroll>
                                <div className="inline-block px-4 py-1.5 bg-slate-800/50 border border-white/10 rounded-full text-slate-200 text-sm font-normal mb-6 backdrop-blur-sm">
                                    Core Intelligence
                                </div>
                                <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-8 pb-2 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent tracking-tight">
                                    Powered by <br />
                                    <span>Advanced Models</span>
                                </h2>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    At the core of our platform lies a symphony of proprietary architectures,
                                    combining linguistic fluency with autonomous reasoning.
                                </p>
                            </RevealOnScroll>
                            <div className="space-y-4">
                                {[
                                    { id: 1, title: "Transformer Architecture", desc: "The backbone of modern NLP. Uses 'Self-Attention' to understand deep contextual relationships like a human.", icon: "fa-project-diagram" },
                                    { id: 2, title: "Reinforcement Learning", desc: "Autonomous agent cycles that fine-tune performance based on real-world outcomes and human feedback.", icon: "fa-sync-alt" },
                                    { id: 3, title: "Deep Neural Networks", desc: "Multi-layered structures that identify complex patterns in massive enterprise datasets instantly.", icon: "fa-layer-group" }
                                ].map((model) => (
                                    <RevealOnScroll key={model.id}>
                                        <div
                                            className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${activeModel === model.id ? 'bg-slate-900 border-blue-500/50 shadow-2xl' : 'bg-slate-900/40 border-white/5 hover:border-white/10'}`}
                                            onMouseEnter={() => setActiveModel(model.id)}
                                        >
                                            <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3">
                                                <i className={`fas ${model.icon} ${activeModel === model.id ? 'text-blue-400' : 'text-gray-500'} text-sm`}></i>
                                                {model.title}
                                            </h3>
                                            <p className={`text-sm leading-relaxed transition-all duration-300 ${activeModel === model.id ? 'text-gray-300' : 'text-gray-500'}`}>
                                                {model.desc}
                                            </p>
                                        </div>
                                    </RevealOnScroll>
                                ))}
                            </div>
                        </div>

                        {/* Visual Representation */}
                        <RevealOnScroll className="flex-1 w-full relative">
                            <div className="aspect-square rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 animate-pulse absolute inset-0 blur-3xl"></div>
                            <div className="relative bg-slate-900/80 border border-white/10 rounded-3xl p-8 backdrop-blur-xl overflow-hidden min-h-[500px] flex items-center justify-center">
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                                {/* Abstract Node Visualization */}
                                <div className="relative w-full h-full flex items-center justify-center">
                                    {/* Central Node */}
                                    <div className="relative z-20 w-32 h-32 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(147,51,234,0.4)] border-4 border-slate-900">
                                        <i className="fas fa-brain text-5xl text-white"></i>
                                    </div>

                                    {/* Orbiting Nodes */}
                                    <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                                        {[...Array(3)].map((_, i) => (
                                            <div key={i} className="absolute top-1/2 left-1/2 w-16 h-16 -ml-8 -mt-8"
                                                style={{ transform: `rotate(${i * 120}deg) translate(140px)` }}
                                            >
                                                <div className="w-full h-full bg-slate-800 border border-purple-500/50 rounded-xl flex items-center justify-center shadow-lg animate-[spin_10s_linear_infinite_reverse]">
                                                    <i className={`fas ${['fa-database', 'fa-code', 'fa-network-wired'][i]} text-purple-400`}></i>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Connecting Lines Ring */}
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="w-[280px] h-[280px] rounded-full border border-dashed border-white/20 animate-[spin_20s_linear_infinite]"></div>
                                    </div>
                                </div>

                                <div className="absolute bottom-8 left-0 w-full text-center">
                                    <p className="text-xs font-mono text-purple-400 animate-pulse">SYSTEM STATUS: ONLINE</p>
                                    <p className="text-xs font-mono text-gray-500 mt-1">High-throughput inference pipeline</p>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>



            {/* Showcase Section */}
            <section className="py-24 bg-[#030712] relative overflow-hidden border-t border-white/5">
                <div className="absolute bottom-0 left-0 w-full h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-5 max-w-7xl relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        {/* Left Content */}
                        <div className="flex-1 lg:max-w-md">
                            <RevealOnScroll>
                                <div className="inline-block px-4 py-1.5 bg-slate-800/50 border border-white/10 rounded-full text-slate-200 text-sm font-normal mb-8 backdrop-blur-sm">
                                    Generative Solutions
                                </div>
                                <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-8 pb-2 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent tracking-tight">
                                    Generative AI <br />
                                    <span>Applications</span>
                                </h2>
                                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                                    Explore how our advanced generative models are solving complex,
                                    high-stakes enterprise challenges across sectors.
                                </p>
                                <Link to="/company/contact-us" className="px-8 py-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all group flex items-center gap-2 w-fit">
                                    View All Solutions
                                    <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                                </Link>
                            </RevealOnScroll>
                        </div>

                        {/* Right Showcase */}
                        <div className="flex-1 w-full relative group overflow-hidden">
                            {/* Gradient Masks */}
                            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#030712] to-transparent z-20 pointer-events-none"></div>
                            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#030712] to-transparent z-20 pointer-events-none"></div>

                            {/* Scrollable Container */}
                            <div className="flex gap-6 animate-marquee-horizontal hover:[animation-play-state:paused] w-max">
                                {[
                                    {
                                        title: "Content AI",
                                        desc: "Automate high-quality content labs for blogs, marketing copy, and multi-channel social engine.",
                                        icon: "fas fa-pen-nib",
                                        color: "text-blue-400",
                                        bg: "bg-blue-500/10"
                                    },
                                    {
                                        title: "Seismic AI",
                                        desc: "Advanced ML models that analyze seismic data patterns to predict and mitigate disaster risks.",
                                        icon: "fas fa-globe-americas",
                                        color: "text-indigo-400",
                                        bg: "bg-indigo-500/10"
                                    },
                                    {
                                        title: "Deep Fake Analytics",
                                        desc: "Detect manipulated video and audio with precision forensics to ensure platform trust.",
                                        icon: "fas fa-user-shield",
                                        color: "text-emerald-400",
                                        bg: "bg-emerald-500/10"
                                    },
                                    {
                                        title: "Content AI",
                                        desc: "Automate high-quality content labs for blogs, marketing copy, and multi-channel social engine.",
                                        icon: "fas fa-pen-nib",
                                        color: "text-blue-400",
                                        bg: "bg-blue-500/10"
                                    },
                                    {
                                        title: "Seismic AI",
                                        desc: "Advanced ML models that analyze seismic data patterns to predict and mitigate disaster risks.",
                                        icon: "fas fa-globe-americas",
                                        color: "text-indigo-400",
                                        bg: "bg-indigo-500/10"
                                    }
                                ].map((project, idx) => (
                                    <div key={idx} className={`flex-shrink-0 w-[300px] md:w-[350px] p-10 rounded-3xl bg-slate-900/40 backdrop-blur-md border border-white/10 hover:border-blue-500/30 transition-all duration-300 group cursor-pointer`}>
                                        <div className={`w-14 h-14 rounded-xl ${project.bg} border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                            <i className={`${project.icon} text-2xl ${project.color}`}></i>
                                        </div>
                                        <h3 className="text-2xl font-semibold text-white mb-4 leading-tight">{project.title}</h3>
                                        <p className="text-gray-400 leading-relaxed text-sm">{project.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <style>{`
                    @keyframes marquee-horizontal {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-marquee-horizontal {
                        animation: marquee-horizontal 30s linear infinite;
                    }
                `}</style>
            </section>
        </div>
    );
};

export default GenAI;
