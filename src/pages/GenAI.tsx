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
        <div
            className="min-h-screen bg-[#F4F7EE] text-[#141912] overflow-hidden selection:bg-[#D5E1CE]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
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
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#E3EDE0] via-[#F4F7EE] to-[#F4F7EE]"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#526B3D0A_1px,transparent_1px),linear-gradient(to_bottom,#526B3D0A_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
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

                        <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-6 pb-2 bg-gradient-to-b from-[#141912] to-[#526B3D] bg-clip-text text-transparent tracking-tight">
                            Understanding the <br />
                            <span>Brain Behind the Bot</span>
                        </h1>

                        <p className="text-lg md:text-xl text-[#5C6B57] max-w-2xl mx-auto mb-16 leading-relaxed">
                            Dive deep into the architecture of Generative AI. From real-time data fetching to
                            advanced neural processing, we turn raw data into intelligent action.
                        </p>
                    </RevealOnScroll>

                    {/* GenAI Workflow Visualization */}
                    <RevealOnScroll className="mb-16 relative max-w-5xl mx-auto">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-[45%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#78956A]/40 to-transparent -translate-y-1/2"></div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
                            {[
                                { title: "Data Collection", icon: "fa-database", color: "text-[#003D2B]", bg: "bg-[#E3EDE0]" },
                                { title: "Preprocessing", icon: "fa-filter", color: "text-[#526B3D]", bg: "bg-[#E3EDE0]" },
                                { title: "Data Cleaning", icon: "fa-broom", color: "text-[#6F875F]", bg: "bg-[#E8EFE3]" },
                                { title: "Model Training", icon: "fa-brain", color: "text-[#8A754F]", bg: "bg-[#F1EBDD]" },
                                { title: "Deployment", icon: "fa-rocket", color: "text-[#003D2B]", bg: "bg-[#E3EDE0]" }
                            ].map((step, idx) => (
                                <div key={idx} className="flex flex-col items-center group">
                                    <div className={`w-20 h-20 rounded-2xl bg-white/80 backdrop-blur-md border border-[#D5E1CE] flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 group-hover:border-[#78956A] shadow-[0_12px_30px_rgba(23,44,39,0.08)] relative`}>
                                        <div className={`absolute inset-0 bg-[#E3EDE0]/70 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`}></div>
                                        <i className={`fas ${step.icon} text-2xl ${step.color} relative z-10`}></i>
                                    </div>
                                    <div className="text-sm font-semibold text-[#5C6B57] group-hover:text-[#003D2B] transition-colors tracking-wide">{step.title}</div>
                                </div>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>
            </section>


            {/* How It Works: Data Fetching & RAG */}
            <section className="py-24 relative border-t border-[#E4EEE0] overflow-hidden">
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#DCE8D5]/60 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-5 max-w-7xl relative z-10">
                    <RevealOnScroll className="text-center mb-20">
                        <div className="inline-block px-4 py-1.5 bg-[#E3EDE0] border border-[#D5E1CE] rounded-full text-[#2F6B45] text-sm font-medium mb-6">
                            RAG Architecture
                        </div>
                        <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-6 pb-2 bg-gradient-to-b from-[#141912] to-[#526B3D] bg-clip-text text-transparent tracking-tight">
                            The Knowledge Engine
                        </h2>
                        <p className="text-[#5C6B57] text-lg max-w-2xl mx-auto leading-relaxed">
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
                                color: "text-[#003D2B]"
                            },
                            {
                                step: "02",
                                title: "Semantic Retrieval",
                                desc: "Our system searches for concepts rather than keywords, fetching the most relevant facts for every query.",
                                icon: "fa-search",
                                color: "text-[#526B3D]"
                            },
                            {
                                step: "03",
                                title: "Fact-Based Output",
                                desc: "The AI combines your business context with LLM power to generate contextually grounded, verified responses.",
                                icon: "fa-microchip",
                                color: "text-[#6F875F]"
                            }
                        ].map((item, idx) => (
                            <RevealOnScroll key={idx} className="group relative bg-white/85 backdrop-blur-md border border-[#E4EEE0] p-10 rounded-3xl hover:border-[#A9BE9C] transition-all duration-300 hover:-translate-y-2 shadow-[0_12px_32px_rgba(20,25,18,0.05)]">
                                <div className="absolute -top-4 right-8 text-4xl font-bold text-[#003D2B]/5 font-mono group-hover:text-[#003D2B]/10 transition-colors">
                                    {item.step}
                                </div>
                                <div className={`w-16 h-16 rounded-2xl bg-[#F4F7EE] border border-[#E4EEE0] flex items-center justify-center mb-8 group-hover:scale-110 transition-all ${item.color} shadow-[0_8px_20px_rgba(23,44,39,0.08)]`}>
                                    <i className={`fas ${item.icon} text-3xl`}></i>
                                </div>
                                <h3 className="text-2xl font-semibold text-[#141912] mb-4 leading-tight">{item.title}</h3>
                                <p className="text-[#5C6B57] text-sm leading-relaxed">{item.desc}</p>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* ML Models Interactive Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E3EDE0]/70 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-5 max-w-7xl relative z-10">
                    <div className="flex flex-col md:flex-row gap-20 items-center">
                        <div className="flex-1">
                            <RevealOnScroll>
                                <div className="inline-block px-4 py-1.5 bg-white/80 border border-[#D5E1CE] rounded-full text-[#2F6B45] text-sm font-normal mb-6 backdrop-blur-sm">
                                    Core Intelligence
                                </div>
                                <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-8 pb-2 bg-gradient-to-b from-[#141912] to-[#526B3D] bg-clip-text text-transparent tracking-tight">
                                    Powered by <br />
                                    <span>Advanced Models</span>
                                </h2>
                                <p className="text-[#5C6B57] text-lg mb-8 leading-relaxed">
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
                                            className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${activeModel === model.id ? 'bg-white border-[#A9BE9C] shadow-[0_12px_30px_rgba(23,44,39,0.09)]' : 'bg-white/65 border-[#E4EEE0] hover:border-[#D5E1CE]'}`}
                                            onMouseEnter={() => setActiveModel(model.id)}
                                        >
                                            <h3 className="text-xl font-semibold text-[#141912] mb-3 flex items-center gap-3">
                                                <i className={`fas ${model.icon} ${activeModel === model.id ? 'text-[#003D2B]' : 'text-[#83945D]'} text-sm`}></i>
                                                {model.title}
                                            </h3>
                                            <p className={`text-sm leading-relaxed transition-all duration-300 ${activeModel === model.id ? 'text-[#465443]' : 'text-[#71806C]'}`}>
                                                {model.desc}
                                            </p>
                                        </div>
                                    </RevealOnScroll>
                                ))}
                            </div>
                        </div>

                        {/* Visual Representation */}
                        <RevealOnScroll className="flex-1 w-full relative">
                            <div className="relative min-h-[540px] overflow-hidden rounded-[32px] border border-[#31513E] bg-[#10291F] shadow-[0_28px_70px_rgba(20,41,31,0.22)]">
                                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(95,137,99,0.3),transparent_48%),linear-gradient(145deg,#17392B_0%,#10291F_58%,#0B2119_100%)]" />
                                <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(220,232,213,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(220,232,213,0.12)_1px,transparent_1px)] [background-size:36px_36px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />

                                <div className="relative flex min-h-[540px] flex-col">
                                    <div className="flex items-center justify-between gap-3 px-6 pt-6 sm:px-8 sm:pt-8">
                                        <div>
                                            <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#A8C7A5]">Model orchestration</div>
                                            <div className="mt-1 text-sm font-semibold text-white">Generative AI core</div>
                                        </div>
                                        <div className="inline-flex items-center gap-2 rounded-full border border-[#A8C7A5]/25 bg-white/5 px-3 py-1.5 text-[10px] font-semibold tracking-[0.12em] text-[#DCE8D5]">
                                            <span className="relative flex h-2 w-2">
                                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A8D59A] opacity-60" />
                                                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#A8D59A]" />
                                            </span>
                                            CORE ACTIVE
                                        </div>
                                    </div>

                                    <div className="relative flex flex-1 items-center justify-center px-4 pb-14 pt-8">
                                        <div className="relative h-[310px] w-[310px] max-w-full sm:h-[350px] sm:w-[350px]">
                                            <div className="absolute inset-0 rounded-full border border-dashed border-[#A8C7A5]/35" />
                                            <div className="absolute inset-[26px] rounded-full border border-[#A8C7A5]/15" />
                                            <div className="absolute inset-[55px] rounded-full border border-dashed border-[#A8C7A5]/20 animate-[spin_36s_linear_infinite]" />

                                            <div className="absolute left-1/2 top-1/2 z-20 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#C7D9C1]/50 bg-[radial-gradient(circle_at_35%_28%,#82A978_0%,#35684B_45%,#123C2C_100%)] shadow-[0_0_0_12px_rgba(168,199,165,0.06),0_0_70px_rgba(127,181,125,0.3)]">
                                                <div className="absolute inset-2 rounded-full border border-white/15" />
                                                <i className="fas fa-brain relative text-5xl text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.24)]" aria-hidden="true" />
                                            </div>

                                            <div className="absolute left-1/2 top-[-8px] z-30 -translate-x-1/2">
                                                <div className="flex w-[138px] items-center gap-3 rounded-2xl border border-[#DCE8D5]/20 bg-[#1C3B2D]/95 px-3 py-2.5 shadow-[0_12px_28px_rgba(0,0,0,0.2)] backdrop-blur">
                                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#DCE8D5]/10 text-[#C8DDBB]"><i className="fas fa-database" aria-hidden="true" /></span>
                                                    <span><span className="block text-xs font-bold text-white">Memory</span><span className="mt-0.5 block text-[10px] text-[#A8C7A5]">Context store</span></span>
                                                </div>
                                            </div>

                                            <div className="absolute right-[-18px] top-[48%] z-30 -translate-y-1/2">
                                                <div className="flex w-[138px] items-center gap-3 rounded-2xl border border-[#DCE8D5]/20 bg-[#1C3B2D]/95 px-3 py-2.5 shadow-[0_12px_28px_rgba(0,0,0,0.2)] backdrop-blur">
                                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8DCC4]/10 text-[#E8DCC4]"><i className="fas fa-code" aria-hidden="true" /></span>
                                                    <span><span className="block text-xs font-bold text-white">Reasoning</span><span className="mt-0.5 block text-[10px] text-[#A8C7A5]">Model layer</span></span>
                                                </div>
                                            </div>

                                            <div className="absolute bottom-[-8px] left-[-18px] z-30">
                                                <div className="flex w-[138px] items-center gap-3 rounded-2xl border border-[#DCE8D5]/20 bg-[#1C3B2D]/95 px-3 py-2.5 shadow-[0_12px_28px_rgba(0,0,0,0.2)] backdrop-blur">
                                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8DCC4]/10 text-[#E8DCC4]"><i className="fas fa-network-wired" aria-hidden="true" /></span>
                                                    <span><span className="block text-xs font-bold text-white">Actions</span><span className="mt-0.5 block text-[10px] text-[#A8C7A5]">Connected tools</span></span>
                                                </div>
                                            </div>

                                            <span className="absolute left-[13%] top-[34%] h-2 w-2 rounded-full bg-[#D7B984] shadow-[0_0_16px_rgba(215,185,132,0.8)]" />
                                            <span className="absolute right-[17%] top-[23%] h-1.5 w-1.5 rounded-full bg-[#A8D59A] shadow-[0_0_12px_rgba(168,213,154,0.75)]" />
                                            <span className="absolute bottom-[19%] right-[22%] h-2 w-2 rounded-full bg-[#D7B984] shadow-[0_0_16px_rgba(215,185,132,0.75)]" />
                                        </div>
                                    </div>

                                    <div className="mx-5 mb-5 grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-black/15 p-4 sm:mx-8 sm:mb-8 sm:grid-cols-[1fr_auto_auto] sm:items-center sm:px-5">
                                        <div className="flex items-center gap-2.5">
                                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#A8D59A]/10 text-[#A8D59A]"><i className="fas fa-wave-square text-xs" aria-hidden="true" /></span>
                                            <div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#A8C7A5]">System status</p><p className="mt-0.5 text-xs font-semibold text-white">Online</p></div>
                                        </div>
                                        <div className="border-l border-white/10 pl-4">
                                            <p className="text-[10px] uppercase tracking-[0.14em] text-[#8FAE8A]">Pipeline</p>
                                            <p className="mt-1 text-xs font-semibold text-[#E3EDE0]">Inference ready</p>
                                        </div>
                                        <div className="col-span-2 flex items-center gap-2 border-t border-white/10 pt-3 sm:col-span-1 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0">
                                            <span className="h-1.5 w-1.5 rounded-full bg-[#A8D59A]" />
                                            <p className="text-xs text-[#C6DCC4]">Context-aware responses</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>



            {/* Showcase Section */}
            <section className="py-24 relative overflow-hidden border-t border-[#E4EEE0]">
                <div className="absolute bottom-0 left-0 w-full h-[600px] bg-[#DCE8D5]/60 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-5 max-w-7xl relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        {/* Left Content */}
                        <div className="flex-1 lg:max-w-md">
                            <RevealOnScroll>
                                <div className="inline-block px-4 py-1.5 bg-white/80 border border-[#D5E1CE] rounded-full text-[#2F6B45] text-sm font-normal mb-8 backdrop-blur-sm">
                                    Generative Solutions
                                </div>
                                <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-8 pb-2 bg-gradient-to-b from-[#141912] to-[#526B3D] bg-clip-text text-transparent tracking-tight">
                                    Generative AI <br />
                                    <span>Applications</span>
                                </h2>
                                <p className="text-lg text-[#5C6B57] mb-8 leading-relaxed">
                                    Explore how our advanced generative models are solving complex,
                                    high-stakes enterprise challenges across sectors.
                                </p>
                                <Link to="/company/contact-us" className="px-8 py-4 rounded-lg bg-white hover:bg-[#F7FAF4] border border-[#D5E1CE] text-[#003D2B] font-medium transition-all group flex items-center gap-2 w-fit">
                                    View All Solutions
                                    <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                                </Link>
                            </RevealOnScroll>
                        </div>

                        {/* Right Showcase */}
                        <div className="flex-1 w-full relative group overflow-hidden">
                            {/* Gradient Masks */}
                            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#F4F7EE] to-transparent z-20 pointer-events-none"></div>
                            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#F4F7EE] to-transparent z-20 pointer-events-none"></div>

                            {/* Scrollable Container */}
                            <div className="flex gap-6 animate-marquee-horizontal hover:[animation-play-state:paused] w-max">
                                {[
                                    {
                                        title: "Content AI",
                                        desc: "Automate high-quality content labs for blogs, marketing copy, and multi-channel social engine.",
                                        icon: "fas fa-pen-nib",
                                        color: "text-[#003D2B]",
                                        bg: "bg-[#E3EDE0]"
                                    },
                                    {
                                        title: "Seismic AI",
                                        desc: "Advanced ML models that analyze seismic data patterns to predict and mitigate disaster risks.",
                                        icon: "fas fa-globe-americas",
                                        color: "text-[#526B3D]",
                                        bg: "bg-[#E8EFE3]"
                                    },
                                    {
                                        title: "Deep Fake Analytics",
                                        desc: "Detect manipulated video and audio with precision forensics to ensure platform trust.",
                                        icon: "fas fa-user-shield",
                                        color: "text-[#6F875F]",
                                        bg: "bg-[#E3EDE0]"
                                    },
                                    {
                                        title: "Content AI",
                                        desc: "Automate high-quality content labs for blogs, marketing copy, and multi-channel social engine.",
                                        icon: "fas fa-pen-nib",
                                        color: "text-[#003D2B]",
                                        bg: "bg-[#E3EDE0]"
                                    },
                                    {
                                        title: "Seismic AI",
                                        desc: "Advanced ML models that analyze seismic data patterns to predict and mitigate disaster risks.",
                                        icon: "fas fa-globe-americas",
                                        color: "text-[#526B3D]",
                                        bg: "bg-[#E8EFE3]"
                                    }
                                ].map((project, idx) => (
                                    <div key={idx} className={`flex-shrink-0 w-[300px] md:w-[350px] p-10 rounded-3xl bg-white/85 backdrop-blur-md border border-[#E4EEE0] hover:border-[#A9BE9C] shadow-[0_12px_32px_rgba(20,25,18,0.05)] transition-all duration-300 group cursor-pointer`}>
                                        <div className={`w-14 h-14 rounded-xl ${project.bg} border border-[#E4EEE0] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                            <i className={`${project.icon} text-2xl ${project.color}`}></i>
                                        </div>
                                        <h3 className="text-2xl font-semibold text-[#141912] mb-4 leading-tight">{project.title}</h3>
                                        <p className="text-[#5C6B57] leading-relaxed text-sm">{project.desc}</p>
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
