import React, { useEffect, useState } from 'react';
import Reveal from './Reveal';

const DashboardPreview: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="pt-2 pb-20 relative z-10 -mt-4 md:-mt-8 bg-[#F4F7EE] select-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div className="container mx-auto px-5 max-w-7xl">
        <Reveal variant="scale" duration={900}>
          <div className="relative max-w-[960px] mx-auto perspective-1000">
            {/* Soft Green Glow */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-4/5 h-[240px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(0,61,43,0.15), rgba(45,69,44,0.06) 60%, transparent 72%)', filter: 'blur(48px)' }} />
            
            {/* Card Shell */}
            <div className="relative rounded-[1.8rem] p-[1.5px] shadow-[0_24px_60px_rgba(21,24,17,0.10)] bg-gradient-to-b from-[#D5E1CE] to-[#EAEFE5]">
              <div className="relative rounded-[calc(1.8rem-1.5px)] overflow-hidden bg-white">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[#D5E1CE] bg-[#F4F7EE] relative z-20">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  <span className="ml-4 hidden sm:inline-flex items-center gap-2 text-[11px] font-semibold text-[#4E5B49] bg-white border border-[#D5E1CE] rounded-full px-3.5 py-1">
                    <i className="fas fa-lock text-[9px] text-[#2D452C]" /> yugma.anvriksh.com
                  </span>
                  <span className="ml-auto inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#2D452C] bg-[#E3EDE0] border border-[#D3E2CF] rounded-full px-3 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D452C] animate-pulse" /> Live
                  </span>
                </div>
                <img
                  src="/image.png"
                  alt="AI Agent Dashboard"
                  className="w-full h-auto block relative z-10"
                  loading="lazy"
                />
              </div>

              {/* Floating glass panels */}
              <img
                src="/platform_auth.png"
                alt="Sidebar UI"
                className="hidden lg:block absolute w-[27%] h-auto rounded-2xl z-30 shadow-[0_20px_40px_rgba(21,24,17,0.15)] border border-[#D5E1CE] bg-white"
                style={{
                  top: '28%', left: '-13%',
                  transform: `translateY(${scrollY * 0.08}px) rotateY(10deg)`,
                  transition: 'transform 0.15s ease-out',
                }}
                loading="lazy"
              />
              <img
                src="/workflow.png"
                alt="Settings UI"
                className="hidden lg:block absolute w-[27%] h-auto rounded-2xl z-30 shadow-[0_20px_40px_rgba(21,24,17,0.15)] border border-[#D5E1CE] bg-white"
                style={{
                  top: '16%', right: '-13%',
                  transform: `translateY(${scrollY * 0.12}px) rotateY(-10deg)`,
                  transition: 'transform 0.15s ease-out',
                }}
                loading="lazy"
              />
            </div>

            {/* Under-glow */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-24 rounded-full pointer-events-none -z-10" style={{ background: 'radial-gradient(ellipse at center, rgba(0,61,43,0.12), transparent 70%)', filter: 'blur(28px)' }} />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default DashboardPreview;
