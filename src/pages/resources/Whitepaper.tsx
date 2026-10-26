import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import SEO from '../../components/SEO';
import { trackLead } from '../../utils/analytics';

const Whitepaper: React.FC = () => {
    const [isDownloading, setIsDownloading] = useState(false);
    const [email, setEmail] = useState('');
    const [downloadStatus, setDownloadStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleDownload = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsDownloading(true);
        setDownloadStatus('idle');

        const SERVICE_ID = 'service_ida6rx5';
        const TEMPLATE_ID = 'template_y98vp1n';
        const PUBLIC_KEY = 'oH3PozDzDNnz1dWJz';

        const templateParams = {
            user_name: 'Whitepaper Lead',
            user_email: email,
            user_phone: 'N/A',
            user_company: 'N/A',
            message: 'User requested the Agentic AI Whitepaper download.'
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then(() => {
                setIsDownloading(false);
                setDownloadStatus('success');
                trackLead('whitepaper_download');
                
                // Trigger direct download of the PDF
                const link = document.createElement('a');
                link.href = '/Whitepaper-Agentic-AI-2026.pdf';
                link.download = 'State-of-Enterprise-Agentic-AI-2026.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                setEmail('');
                
                // Reset success message after 5 seconds
                setTimeout(() => setDownloadStatus('idle'), 5000);
            })
            .catch((err) => {
                console.error('Failed to send email:', err);
                setIsDownloading(false);
                setDownloadStatus('error');
                
                // Reset error message after 5 seconds
                setTimeout(() => setDownloadStatus('idle'), 5000);
            });
    };

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Report",
        "name": "The State of Enterprise Agentic AI 2026",
        "description": "Comprehensive whitepaper on how autonomous AI workflows are transforming enterprise operations and reducing overhead by 40%.",
        "publisher": {
            "@type": "Organization",
            "name": "ANVRiksh Tech Solutions LLP"
        }
    };

    return (
        <div className="min-h-screen bg-[#030712] text-white font-sans selection:bg-blue-500/30">
            <SEO
                title="Enterprise Agentic AI 2026 Whitepaper | ANVRiksh"
                description="Download our free whitepaper to learn how Agentic AI is reducing enterprise operational overhead by 40%. Discover the future of autonomous workflows."
                keywords="Agentic AI Whitepaper, AI Agents Report, Enterprise AI PDF, Autonomous Workflows, ANVRiksh Ebook"
                canonicalUrl="https://anvriksh.com/resources/whitepaper"
                structuredData={structuredData}
            />

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#030712] to-[#030712] -z-10"></div>
                
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        
                        {/* Content Left */}
                        <div className="flex-1 space-y-8 text-center lg:text-left">
                            <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                                Free Whitepaper Download
                            </div>
                            <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
                                The State of <br className="hidden md:block" />
                                <span className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
                                    Enterprise Agentic AI 
                                </span>
                            </h1>
                            <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Discover how early adopters are moving beyond conversational chatbots to deploy autonomous AI agents that actually execute complex workflows, reducing operational overhead by up to 40%.
                            </p>

                            {/* Lead Capture Form */}
                            <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-8 rounded-2xl max-w-lg mx-auto lg:mx-0 shadow-2xl relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 pointer-events-none"></div>
                                <div className="relative">
                                    <h3 className="text-xl font-semibold mb-6">Get your free copy instantly</h3>
                                    <form onSubmit={handleDownload} className="space-y-4">
                                        <div>
                                            <input 
                                                type="email" 
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Enter your work email" 
                                                className="w-full bg-black/40 border border-white/10 rounded-lg px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                                            />
                                        </div>

                                        {downloadStatus === 'success' && (
                                            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm flex items-start gap-3">
                                                <i className="fas fa-check-circle mt-0.5"></i>
                                                <p>Thank you! Your whitepaper is downloading now.</p>
                                            </div>
                                        )}

                                        {downloadStatus === 'error' && (
                                            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm flex items-start gap-3">
                                                <i className="fas fa-exclamation-circle mt-0.5"></i>
                                                <p>Something went wrong. Please try again later.</p>
                                            </div>
                                        )}

                                        <button 
                                            type="submit" 
                                            disabled={isDownloading}
                                            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isDownloading ? (
                                                <><i className="fas fa-spinner fa-spin"></i> Preparing PDF...</>
                                            ) : (
                                                <><i className="fas fa-download"></i> Download Whitepaper</>
                                            )}
                                        </button>
                                        <p className="text-xs text-slate-500 text-center mt-4">
                                            By downloading, you agree to receive technical insights and updates from ANVRiksh. You can unsubscribe at any time.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Image Right */}
                        <div className="flex-1 relative w-full max-w-lg mx-auto">
                            <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
                            <div className="relative border border-white/10 rounded-3xl p-4 bg-slate-900 shadow-[0_0_50px_rgba(59,130,246,0.15)] transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img 
                                    src="/platform_hero.png" 
                                    alt="Agentic AI Whitepaper Cover" 
                                    className="w-full h-auto rounded-2xl shadow-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What you will learn section */}
            <section className="py-24 border-t border-white/5 bg-slate-900/30">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold mb-4">Inside the 2026 Report</h2>
                        <p className="text-slate-400">Everything you need to know to build an autonomous workforce.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { title: "The Chatbot vs. Agent Shift", desc: "Why traditional decision-tree AI is failing enterprises, and how autonomous reasoning models solve complex edge cases.", icon: "fa-robot" },
                            { title: "Tool & API Orchestration", desc: "How agents use secure connections (like the Yugma Platform) to read/write data to your existing ERP and CRM systems.", icon: "fa-network-wired" },
                            { title: "Data Security & Sovereignty", desc: "Best practices for deploying Agentic AI without leaking proprietary enterprise data to public training sets.", icon: "fa-shield-alt" },
                            { title: "Measurable ROI Metrics", desc: "A breakdown of the specific workflows (customer support, data entry, routing) where companies are seeing 40%+ savings.", icon: "fa-chart-line" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-blue-500/30 transition-colors">
                                <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center text-xl mb-6">
                                    <i className={`fas ${item.icon}`}></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Whitepaper;
