import React from 'react';
import { Link } from 'react-router-dom';

const PlatformHighlight: React.FC = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] -z-10 translate-y-[-50%]"></div>

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight tracking-tight">
                            Automate Your Business with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Visual AI Workflows.</span>
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
                            The Yugma Platform provides a unified, visual engine to orchestrate your entire
                            enterprise ecosystem. Build, scale, and monitor autonomous agents with
                            unmatched precision.
                        </p>

                        <div className="space-y-4 mb-10">
                            {[
                                { title: '10 Core Connectors', desc: 'Pre-built integrations for WhatsApp, OpenAI, Zoho Sheets & more.' },
                                { title: 'Visual Logic Engine', desc: 'Topological flow mapping for complex multi-step processes.' },
                                { title: 'Real-time Observability', desc: 'Secure, production-ready monitoring for every execution.' }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-500/10 flex items-center justify-center border border-sky-500/20 mt-1">
                                        <i className="fas fa-check text-[10px] text-sky-400"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                                        <p className="text-gray-500 text-xs leading-relaxed mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link to="/platform" className="relative overflow-hidden inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium text-white bg-gradient-to-b from-slate-900/60 to-slate-900 border border-sky-500 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all group">
                                <span className="relative z-10">Explore Platform</span>
                                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-sky-500/20 to-transparent group-hover:left-full transition-all duration-500"></div>
                            </Link>
                        </div>
                    </div>

                    {/* Image / Visual */}
                    <div className="order-1 lg:order-2 relative group">
                        {/* Intense Glow Layer */}
                        <div className="absolute -inset-10 bg-sky-500/20 blur-[100px] rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-1000"></div>

                        <div className="relative rounded-3xl border border-white/10 bg-[#030712] p-2 shadow-2xl overflow-hidden transform transition-all duration-700 group-hover:scale-[1.02]">
                            <img
                                src="/platform_hero.png"
                                alt="Yugma Platform Preview"
                                className="w-full h-auto rounded-2xl opacity-90 group-hover:opacity-100 transition-opacity"
                            />
                            {/* Overlay Badge */}
                            <div className="absolute top-6 right-6 px-4 py-2 bg-slate-950/80 border border-white/10 rounded-xl backdrop-blur-md">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Live Builder</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlatformHighlight;
