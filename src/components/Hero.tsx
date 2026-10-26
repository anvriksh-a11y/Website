import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
    return (
        <section className="pt-32 pb-48 md:pt-40 md:pb-64 text-center relative overflow-visible flex flex-col justify-center items-center -mb-40 z-0">
            <div className="container mx-auto px-5 max-w-7xl">
                <div className="max-w-[900px] mx-auto mb-16 relative z-10">
                    {/* <div className="inline-block px-4 py-1.5 bg-slate-800/50 border border-white/10 rounded-full text-slate-200 text-sm font-normal mb-8 backdrop-blur-sm">
                        New: AI Agent Framework 2.0
                    </div> */}
                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6 pb-2 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent tracking-tight">
                        Build Autonomous AI Agents for Your Enterprise Operations
                    </h1>
                    <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
                        Empower your team with intelligent agents that automate workflows, analyze data, and drive growth. The future of work is here.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/platform" className="relative overflow-hidden inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-medium text-white bg-gradient-to-b from-slate-900/60 to-slate-900 border border-sky-500 shadow-[0_0_20px_rgba(14,165,233,0.4),inset_0_0_10px_rgba(14,165,233,0.2)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6),inset_0_0_15px_rgba(14,165,233,0.3)] hover:border-sky-400 hover:-translate-y-px transition-all group">
                            <span className="relative z-10">AI Agent Studio</span>
                            <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-sky-500/20 to-transparent group-hover:left-full transition-all duration-500"></div>
                        </Link>
                        <Link to="/company/contact-us" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
                            Book a Demo
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
