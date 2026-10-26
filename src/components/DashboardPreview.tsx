import React, { useEffect, useState } from 'react';

const DashboardPreview: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="pt-0 pb-20 relative z-10 -mt-40 md:-mt-64">
            <div className="container mx-auto px-5 max-w-7xl">
                <div className="relative max-w-[900px] mx-auto rounded-xl p-[1px] bg-gradient-to-b from-indigo-500/50 via-indigo-500/10 to-transparent shadow-[0_-20px_60px_-10px_rgba(99,102,241,0.2)] perspective-1000 z-10">
                    <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-4/5 h-[200px] bg-blue-500/40 blur-[40px] -z-10 rounded-[100%]"></div>

                    {/* Main Dashboard Image */}
                    <img
                        src="/image.png"
                        alt="AI Agent Dashboard"
                        className="w-full h-auto rounded-xl block border border-white/10 bg-slate-900 relative z-20 shadow-2xl"
                    />

                    {/* Floating Left Sidebar */}
                    <img
                        src="/platform_auth.png"
                        alt="Sidebar UI"
                        className="hidden lg:block absolute w-[28%] h-auto rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] border border-white/20 z-30 bg-slate-900 transition-transform duration-100 ease-out rotate-y-10"
                        style={{
                            top: '30%',
                            left: '-15%',
                            transform: `translateY(${scrollY * 0.15}px) rotateY(10deg)`
                        }}
                    />

                    {/* Floating Right Panel */}
                    <img
                        src="/workflow.png"
                        alt="Settings UI"
                        className="hidden lg:block absolute w-[28%] h-auto rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] border border-white/20 z-30 bg-slate-900 transition-transform duration-100 ease-out rotate-y-neg-10"
                        style={{
                            top: '20%',
                            right: '-15%',
                            transform: `translateY(${scrollY * 0.25}px) rotateY(-10deg)`
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default DashboardPreview;
