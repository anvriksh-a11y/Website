import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';

const Features: React.FC = () => {
    const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean; id: number }>>([
        { text: "Hey", isUser: true, id: 1 }
    ]);

    const conversationFlow = [
        { text: "Hey", isUser: true },
        { text: "How can I help you today?", isUser: false },
        { text: "What is Agentic AI?", isUser: true },
        { text: "AI agents that autonomously make decisions and take actions", isUser: false },
        { text: "Can it automate workflows?", isUser: true },
        { text: "Yes, it handles complex tasks end-to-end", isUser: false },
        { text: "How does it learn?", isUser: true },
        { text: "Through continuous feedback and data analysis", isUser: false },
        { text: "Is it secure?", isUser: true },
        { text: "Enterprise-grade security with full compliance", isUser: false }
    ];

    useEffect(() => {
        let messageIndex = 0;

        const interval = setInterval(() => {
            messageIndex = (messageIndex + 1) % conversationFlow.length;

            // Reset messages when starting over
            if (messageIndex === 0) {
                setMessages([{ text: conversationFlow[0].text, isUser: conversationFlow[0].isUser, id: Date.now() }]);
            } else {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: conversationFlow[messageIndex].text, isUser: conversationFlow[messageIndex].isUser, id: Date.now() + messageIndex }
                ]);
            }
        }, 1500); // Faster: New message every 1.5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="select-none">
            {/* Specialized Agents Horizontal Marquee Section */}
            <section className="py-20 sm:py-28 bg-[#F4F7EE] relative overflow-hidden border-b border-[#D5E1CE]">
                {/* Section Soft Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] rounded-full pointer-events-none opacity-40" style={{ background: 'radial-gradient(ellipse at center, #E3EDE0 0%, transparent 70%)', filter: 'blur(60px)' }} />

                <div className="container mx-auto px-5 max-w-7xl relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        {/* Left Content */}
                        <Reveal variant="left" duration={800} className="flex-1 lg:max-w-md">
                            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] shadow-xs mb-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#2D452C] animate-pulse" />
                                <span className="text-[12px] sm:text-[13px] font-semibold text-[#2D452C] tracking-tight">
                                    Agentic Ecosystem
                                </span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-[800] text-[#141912] leading-[1.08] mb-6 tracking-[-0.035em]">
                                Specialized Agents <br />
                                <span className="text-[#003D2B]">for Every Task</span>
                            </h2>
                            <p className="text-base sm:text-lg text-[#4E5B49] mb-8 leading-relaxed">
                                From voice calls to social outreach, our ecosystem of specialized agents
                                is designed to automate your most time-consuming workflows with precision.
                            </p>
                            <Link to="/company/contact-us" className="px-8 py-3.5 rounded-full bg-[#003D2B] hover:bg-[#022D20] text-white text-sm font-bold shadow-[0_12px_28px_rgba(0,61,43,0.30)] hover:shadow-[0_16px_36px_rgba(0,61,43,0.40)] hover:scale-105 active:scale-100 transition-all group flex items-center gap-2.5 w-fit">
                                <span>Explore Solutions</span>
                                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform text-white text-xs"></i>
                            </Link>
                        </Reveal>

                        {/* Right Scrollable Container */}
                        <div className="flex-1 min-w-0 relative group overflow-hidden">
                            {/* Gradient Masks */}
                            <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#F4F7EE] to-transparent z-20 pointer-events-none"></div>
                            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#F4F7EE] to-transparent z-20 pointer-events-none"></div>

                            {/* Marquee Wrapper */}
                            <div 
                                className="flex gap-5 animate-marquee-horizontal hover:[animation-play-state:paused] w-max py-2"
                            >
                                {[
                                    {
                                        title: "Enterprise RAG AI",
                                        desc: "Advanced RAG models grounded in your private business documents for highly accurate, contextual responses.",
                                        icon: "fas fa-database",
                                    },
                                    {
                                        title: "Voice AI Agent",
                                        desc: "Human-like voice agents for inbound customer support and outbound sales calls with low-latency streaming.",
                                        icon: "fas fa-microphone-alt",
                                    },
                                    {
                                        title: "Sales Pipeline AI",
                                        desc: "End-to-end LinkedIn and Email automation that identifies, nurtures, and qualifies leads autonomously.",
                                        icon: "fas fa-chart-line",
                                    },
                                    {
                                        title: "Agentic SEO Hub",
                                        desc: "Continuous SEO engineering that optimizes site performance, metadata, and keywords for dominant rankings.",
                                        icon: "fas fa-search-dollar",
                                    },
                                    {
                                        title: "CRM Calling Agent",
                                        desc: "Autonomous voice agent that handles outbound sales calls, qualifies leads, and updates CRM in real-time.",
                                        icon: "fas fa-phone-volume",
                                    },
                                    {
                                        title: "LinkedIn Automation",
                                        desc: "Intelligent networking bot that identifies prospects, sends personalized connection requests, and manages follow-ups.",
                                        icon: "fab fa-linkedin",
                                    },
                                    {
                                        title: "WhatsApp Booking",
                                        desc: "24/7 scheduling assistant that converses with clients on WhatsApp to book, reschedule, and confirm appointments.",
                                        icon: "fab fa-whatsapp",
                                    },
                                    {
                                        title: "Blockchain FTP",
                                        desc: "Secure, decentralized file transfer protocol powered by blockchain technology for immutable data storage.",
                                        icon: "fas fa-cube",
                                    },
                                    {
                                        title: "Business Web Builder",
                                        desc: "Autonomous agent that designs, builds, and deploys professional business websites in minutes.",
                                        icon: "fas fa-laptop-code",
                                    },
                                    // Duplicates for seamless loop
                                    {
                                        title: "Enterprise RAG AI",
                                        desc: "Advanced RAG models grounded in your private business documents for highly accurate, contextual responses.",
                                        icon: "fas fa-database",
                                    },
                                    {
                                        title: "Voice AI Agent",
                                        desc: "Human-like voice agents for inbound customer support and outbound sales calls with low-latency streaming.",
                                        icon: "fas fa-microphone-alt",
                                    }
                                ].map((project, idx) => (
                                    <div key={idx} className="flex-shrink-0 w-[290px] md:w-[330px] p-7 rounded-[22px] bg-white border border-[#D5E1CE] shadow-[0_4px_16px_rgba(21,24,17,0.04)] group cursor-pointer relative overflow-hidden hover:-translate-y-1.5 transition-all duration-300 hover:shadow-[0_16px_36px_rgba(0,61,43,0.12)]">
                                        <div className="relative z-10 w-12 h-12 rounded-2xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                                            <i className={`${project.icon} text-lg text-[#003D2B]`}></i>
                                        </div>
                                        <h3 className="text-[17px] font-[800] text-[#141912] group-hover:text-[#003D2B] mb-2 leading-tight relative z-10 tracking-tight transition-colors">{project.title}</h3>
                                        <p className="text-[#4E5B49] leading-relaxed text-[13.5px] relative z-10">{project.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <style>{`
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                    .scrollbar-hide {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                    @keyframes marquee-horizontal {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-marquee-horizontal {
                        animation: marquee-horizontal 30s linear infinite;
                    }
                    .animate-marquee-horizontal:hover {
                        animation-play-state: paused;
                    }
                `}</style>
            </section>

            {/* Main Features Section */}
            <section className="py-20 sm:py-28 bg-[#F4F7EE] relative" id="features">
                <div className="container mx-auto px-5 max-w-7xl">
                    {/* Header Section */}
                    <Reveal variant="up" duration={700}>
                        <div className="mb-6">
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] shadow-xs">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#2D452C] animate-pulse" />
                                <span className="text-[12px] sm:text-[13px] font-semibold text-[#2D452C] tracking-tight">Features</span>
                            </span>
                        </div>
                    </Reveal>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left Side - Title and Chat Interface */}
                        <Reveal variant="left" duration={800} className="space-y-8">
                            {/* Title */}
                            <div>
                                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-[800] text-[#141912] leading-[1.08] mb-6 tracking-[-0.035em]">
                                    Empower Your Teams with AI Agents Designed to Think, Learn, and Adapt
                                </h2>
                            </div>

                            {/* Chat Interface */}
                            <div className="relative pt-6">
                                <div className="absolute top-0 left-6 z-10 bg-[#E3EDE0] border border-[#D3E2CF] rounded-full px-3.5 py-1 text-[11px] font-bold text-[#2D452C] flex items-center gap-2 shadow-xs">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D452C] animate-pulse" /> Live agent demo
                                </div>
                                <div className="relative rounded-[22px] overflow-hidden border border-[#D5E1CE] shadow-[0_16px_40px_rgba(21,24,17,0.08)] bg-white">
                                    {/* Chat Container */}
                                    <div className="p-6">
                                        {/* Header */}
                                        <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#EAEFE5]">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-full bg-[#003D2B] flex items-center justify-center">
                                                    <i className="fas fa-robot text-white text-xs"></i>
                                                </div>
                                                <div>
                                                    <span className="font-bold text-[#141912] text-sm block">ANVRiksh AI Assistant</span>
                                                    <span className="text-[11px] text-[#2D452C] font-semibold">Online</span>
                                                </div>
                                            </div>
                                            <i className="fas fa-ellipsis-h text-[#4E5B49]"></i>
                                        </div>

                                        {/* Chat Messages */}
                                        <div className="space-y-3.5 mb-5 h-[280px] overflow-y-auto pr-1">
                                            {messages.map((message) => (
                                                <div
                                                    key={message.id}
                                                    className={`animate-fadeIn flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                                                >
                                                    {message.isUser ? (
                                                        <div className="bg-[#003D2B] text-white px-4 py-2 rounded-2xl rounded-tr-xs text-sm font-medium shadow-xs">
                                                            {message.text}
                                                        </div>
                                                    ) : (
                                                        <div className="border border-[#D5E1CE] bg-[#F4F7EE] px-4 py-2.5 rounded-2xl rounded-tl-xs max-w-[85%] text-sm text-[#141912]">
                                                            <div className="flex items-start gap-2">
                                                                <i className="fas fa-check-circle text-[#2D452C] mt-1 text-xs"></i>
                                                                <span>{message.text}</span>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Input Field */}
                                        <div className="flex gap-2 items-center bg-[#F4F7EE] border border-[#D5E1CE] rounded-full p-1.5">
                                            <input
                                                type="text"
                                                placeholder="Ask anything..."
                                                className="flex-1 px-4 py-1.5 bg-transparent text-[#141912] outline-none text-sm placeholder:text-[#4E5B49]"
                                                readOnly
                                            />
                                            <button className="w-9 h-9 rounded-full bg-[#003D2B] hover:bg-[#022D20] flex items-center justify-center text-white transition-all shadow-xs">
                                                <i className="fas fa-paper-plane text-xs"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {/* Right Side - Description and Features */}
                        <Reveal variant="right" duration={800} delay={120} className="space-y-6">
                            <div>
                                <p className="text-[#4E5B49] text-base leading-relaxed">
                                    Leverage our AI agent studio to build robust AI agents tailored to your business data that can autonomously handle complex tasks, adapt to real-time insights, and collaborate with other agents for cohesive automation across all levels of your enterprise.
                                </p>
                            </div>

                            {/* Features Section */}
                            <div className="mt-8 pl-4 relative">
                                <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-[#D5E1CE]"></div>

                                <h3 className="text-xl font-[800] text-[#141912] mb-6 tracking-tight">
                                    Enterprise AI Agents Tailored to Your Business, Data, and Workflows
                                </h3>

                                {/* Features List */}
                                <div className="space-y-4">
                                    {/* Knowledge Management */}
                                    <div className="group flex gap-4 bg-white border border-[#D5E1CE] shadow-xs rounded-2xl p-5 hover:-translate-y-0.5 hover:shadow-md transition-all">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <i className="fas fa-lightbulb text-[#003D2B] text-base"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-base font-bold text-[#141912] mb-1.5">Knowledge Management</h4>
                                            <p className="text-[#4E5B49] text-sm leading-relaxed">
                                                Centralize and manage your enterprise knowledge with agents that curate, organize, and retrieve information effortlessly.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Custom Workflows */}
                                    <div className="group flex gap-4 bg-white border border-[#D5E1CE] shadow-xs rounded-2xl p-5 hover:-translate-y-0.5 hover:shadow-md transition-all">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <i className="fas fa-cogs text-[#003D2B] text-base"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-base font-bold text-[#141912] mb-1.5">Custom Workflows</h4>
                                            <p className="text-[#4E5B49] text-sm leading-relaxed">
                                                Design tailored workflows with AI agents that adapt to your unique business needs and data, ensuring maximum efficiency and flexibility.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;
