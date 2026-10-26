import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
        <>
            {/* Specialized Agents Horizontal Marquee Section */}
            <section className="py-24 bg-[#030712] relative overflow-hidden border-b border-white/5">
                {/* Section Glow Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-5 max-w-7xl relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        {/* Left Content */}
                        <div className="flex-1 lg:max-w-md">
                            <div className="inline-block px-4 py-1.5 bg-slate-800/50 border border-white/10 rounded-full text-slate-200 text-sm font-normal mb-6 backdrop-blur-sm">
                                Agentic Ecosystem
                            </div>

                            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent tracking-tight">
                                Specialized Agents <br />
                                <span className="text-blue-400">for Every Task</span>
                            </h2>
                            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                                From voice calls to social outreach, our ecosystem of specialized agents
                                is designed to automate your most time-consuming workflows with precision.
                            </p>
                            <Link to="/company/contact-us" className="px-8 py-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all group flex items-center gap-2 w-fit">
                                Explore Solutions
                                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                            </Link>
                        </div>

                        {/* Right Scrollable Container */}
                        <div className="flex-1 min-w-0 relative group overflow-hidden">
                            {/* Gradient Masks */}
                            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#030712] to-transparent z-20 pointer-events-none"></div>
                            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#030712] to-transparent z-20 pointer-events-none"></div>

                            {/* Marquee Wrapper */}
                            <div 
                                className="flex gap-6 animate-marquee-horizontal hover:[animation-play-state:paused] w-max"
                            >
                                {[
                                    {
                                        title: "Enterprise RAG AI",
                                        desc: "Advanced RAG models grounded in your private business documents for highly accurate, contextual responses.",
                                        icon: "fas fa-database",
                                        color: "text-blue-400",
                                        bg: "bg-blue-500/10",
                                        border: "border-blue-500/20"
                                    },
                                    {
                                        title: "Voice AI Agent",
                                        desc: "Human-like voice agents for inbound customer support and outbound sales calls with low-latency streaming.",
                                        icon: "fas fa-microphone-alt",
                                        color: "text-purple-400",
                                        bg: "bg-purple-500/10",
                                        border: "border-purple-500/20"
                                    },
                                    {
                                        title: "Sales Pipeline AI",
                                        desc: "End-to-end LinkedIn and Email automation that identifies, nurtures, and qualifies leads autonomously.",
                                        icon: "fas fa-chart-line",
                                        color: "text-emerald-400",
                                        bg: "bg-emerald-500/10",
                                        border: "border-emerald-500/20"
                                    },
                                    {
                                        title: "Agentic SEO Hub",
                                        desc: "Continuous SEO engineering that optimizes site performance, metadata, and keywords for dominant rankings.",
                                        icon: "fas fa-search-dollar",
                                        color: "text-amber-400",
                                        bg: "bg-amber-500/10",
                                        border: "border-amber-500/20"
                                    },
                                    {
                                        title: "CRM Calling Agent",
                                        desc: "Autonomous voice agent that handles outbound sales calls, qualifies leads, and updates CRM in real-time.",
                                        icon: "fas fa-phone-volume",
                                        color: "text-blue-400",
                                        bg: "bg-blue-500/10",
                                        border: "border-blue-500/20"
                                    },
                                    {
                                        title: "LinkedIn Automation",
                                        desc: "Intelligent networking bot that identifies prospects, sends personalized connection requests, and manages follow-ups.",
                                        icon: "fab fa-linkedin",
                                        color: "text-blue-500",
                                        bg: "bg-blue-600/10",
                                        border: "border-blue-600/20"
                                    },
                                    {
                                        title: "WhatsApp Booking",
                                        desc: "24/7 scheduling assistant that converses with clients on WhatsApp to book, reschedule, and confirm appointments.",
                                        icon: "fab fa-whatsapp",
                                        color: "text-green-400",
                                        bg: "bg-green-500/10",
                                        border: "border-green-500/20"
                                    },
                                    {
                                        title: "Blockchain FTP",
                                        desc: "Secure, decentralized file transfer protocol powered by blockchain technology for immutable data storage.",
                                        icon: "fas fa-cube",
                                        color: "text-indigo-400",
                                        bg: "bg-indigo-500/10",
                                        border: "border-indigo-500/20"
                                    },
                                    {
                                        title: "Fake Video Analyzer",
                                        desc: "Advanced AI tool that detects deepfakes and manipulated video content with high precision.",
                                        icon: "fas fa-video-slash",
                                        color: "text-red-400",
                                        bg: "bg-red-500/10",
                                        border: "border-red-500/20"
                                    },
                                    {
                                        title: "Earthquake Prediction",
                                        desc: "Machine learning models that analyze seismic data to predict earthquake risks and alert communities.",
                                        icon: "fas fa-globe-americas",
                                        color: "text-orange-400",
                                        bg: "bg-orange-500/10",
                                        border: "border-orange-500/20"
                                    },
                                    {
                                        title: "Business Web Builder",
                                        desc: "Autonomous agent that designs, builds, and deploys professional business websites in minutes.",
                                        icon: "fas fa-laptop-code",
                                        color: "text-cyan-400",
                                        bg: "bg-cyan-500/10",
                                        border: "border-cyan-500/20"
                                    },
                                    // Duplicates for seamless loop
                                    {
                                        title: "Enterprise RAG AI",
                                        desc: "Advanced RAG models grounded in your private business documents for highly accurate, contextual responses.",
                                        icon: "fas fa-database",
                                        color: "text-blue-400",
                                        bg: "bg-blue-500/10",
                                        border: "border-blue-500/20"
                                    },
                                    {
                                        title: "Voice AI Agent",
                                        desc: "Human-like voice agents for inbound customer support and outbound sales calls with low-latency streaming.",
                                        icon: "fas fa-microphone-alt",
                                        color: "text-purple-400",
                                        bg: "bg-purple-500/10",
                                        border: "border-purple-500/20"
                                    }
                                ].map((project, idx) => (
                                    <div key={idx} className={`flex-shrink-0 w-[300px] md:w-[350px] p-8 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-white/10 hover:border-white/20 hover:bg-slate-900/60 transition-all duration-300 group cursor-pointer relative overflow-hidden`}>
                                        {/* Hover Glow Effect */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${project.bg} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}></div>
                                        
                                        <div className={`relative z-10 w-14 h-14 rounded-xl ${project.bg} border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all`}>
                                            <i className={`${project.icon} text-2xl ${project.color}`}></i>
                                        </div>
                                        <h3 className="text-2xl font-semibold text-white mb-4 leading-tight relative z-10">{project.title}</h3>
                                        <p className="text-gray-400 leading-relaxed text-sm relative z-10">{project.desc}</p>
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
            <section className="py-24 relative" id="features">
                <div className="container mx-auto px-5 max-w-7xl">
                    {/* Header Section */}
                    <div className="mb-8">
                        <span className="inline-block px-4 py-1.5 bg-slate-800/50 border border-white/10 rounded-full text-slate-200 text-sm font-normal backdrop-blur-sm">
                            Features
                        </span>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left Side - Title and Chat Interface */}
                        <div className="space-y-8">
                            {/* Title */}
                            <div>
                                <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent tracking-tight">
                                    Empower Your Teams with AI Agents Designed to Think, Learn, and Adapt
                                </h2>
                            </div>

                            {/* Chat Interface */}
                            <div className="relative pt-12">
                                <div className="relative rounded-2xl overflow-hidden border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                                    {/* Gradient Background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-blue-600/10 to-transparent"></div>

                                    {/* Chat Container */}
                                    <div className="relative bg-slate-900/90 backdrop-blur-sm p-6">
                                        {/* Header */}
                                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                                                    <i className="fas fa-user text-white text-sm"></i>
                                                </div>
                                                <span className="font-semibold text-white">ANVRiksh's AI</span>
                                            </div>
                                            <i className="fas fa-history text-gray-400"></i>
                                        </div>

                                        {/* Chat Messages - Fixed Height with Scroll */}
                                        <div className="space-y-4 mb-6 h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500/20 scrollbar-track-transparent">
                                            {messages.map((message) => (
                                                <div
                                                    key={message.id}
                                                    className={`animate-fadeIn ${message.isUser ? '' : 'flex justify-start'}`}
                                                >
                                                    {message.isUser ? (
                                                        <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-2xl rounded-tl-sm">
                                                            {message.text}
                                                        </div>
                                                    ) : (
                                                        <div className="border border-blue-400/50 bg-slate-800/50 px-4 py-3 rounded-lg inline-block max-w-[85%]">
                                                            <div className="flex items-start gap-2 text-gray-300 text-sm">
                                                                <i className="fas fa-arrow-right text-blue-400 mt-1"></i>
                                                                <span>{message.text}</span>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Input Field */}
                                        <div className="flex gap-3 items-center bg-white rounded-full p-2 shadow-lg">
                                            <input
                                                type="text"
                                                placeholder="Type your message..."
                                                className="flex-1 px-4 py-2 bg-transparent text-gray-800 outline-none"
                                                readOnly
                                            />
                                            <button className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                                                <i className="fas fa-paper-plane"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Description and Features */}
                        <div className="space-y-6">
                            {/* Description */}
                            <div>
                                <p className="text-gray-400 text-base leading-relaxed">
                                    Leverage our AI agent studio to build robust AI agents tailored to your business data that can autonomously handle complex tasks, adapt to real-time insights, and collaborate with other agents for cohesive automation across all levels of your enterprise.
                                </p>
                            </div>

                            {/* Features Section */}
                            <div className="mt-16 pt-20 pl-6 relative">
                                {/* Gradient Border Line */}
                                <div className="absolute left-0 top-20 bottom-0 w-0.5 bg-gradient-to-b from-white/10 via-white/60 to-white/10"></div>

                                <h3 className="text-xl font-normal text-white mb-6">
                                    Enterprise AI Agents Tailored to Your Business, Data, and Workflows
                                </h3>

                                {/* Features List */}
                                <div className="space-y-6">
                                    {/* Knowledge Management */}
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center">
                                            <i className="fas fa-lightbulb text-blue-400 text-xl"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium text-white mb-2">Knowledge Management</h4>
                                            <p className="text-gray-400 text-sm">
                                                Centralize and manage your enterprise knowledge with agents that curate, organize, and retrieve information effortlessly.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Custom Workflows */}
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center">
                                            <i className="fas fa-cogs text-blue-400 text-xl"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium text-white mb-2">Custom Workflows</h4>
                                            <p className="text-gray-400 text-sm">
                                                Design tailored workflows with AI agents that adapt to your unique business needs and data, ensuring maximum efficiency and flexibility.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;
