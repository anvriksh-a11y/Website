import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';

const PlatformHighlight: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F4F7EE] relative overflow-hidden select-none" id="gtm-section" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div className="absolute top-0 left-0 w-[560px] h-[420px] rounded-full pointer-events-none opacity-40" style={{ background: 'radial-gradient(circle, #E3EDE0 0%, transparent 70%)', filter: 'blur(70px)' }} />

      <div className="container mx-auto px-6 max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <Reveal variant="left" duration={850} className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] shadow-xs mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2D452C] animate-pulse" />
              <span className="text-[12px] sm:text-[13px] font-semibold text-[#2D452C] tracking-tight">
                Yugma Platform
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[800] text-[#141912] mb-5 leading-[1.08] tracking-[-0.035em]">
              Automate Your Business with <br />
              <span className="text-[#003D2B]">Visual AI Workflows.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#4E5B49] mb-8 leading-relaxed max-w-xl">
              The Yugma Platform provides a unified, visual engine to orchestrate your entire
              enterprise ecosystem. Build, scale, and monitor autonomous agents with
              unmatched precision.
            </p>

            <div className="space-y-3.5 mb-9">
              {[
                { title: '10 Core Connectors', desc: 'Pre-built integrations for WhatsApp, OpenAI, Zoho Sheets & more.' },
                { title: 'Visual Logic Engine', desc: 'Topological flow mapping for complex multi-step processes.' },
                { title: 'Real-time Observability', desc: 'Secure, production-ready monitoring for every execution.' },
              ].map((item, i) => (
                <div key={i} className="group bg-white border border-[#D5E1CE] shadow-xs rounded-2xl px-5 py-4 flex gap-4 items-start hover:-translate-y-0.5 hover:shadow-md transition-all">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-[#003D2B] text-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform mt-0.5">
                    <i className="fas fa-check text-[10px]" />
                  </span>
                  <div>
                    <h4 className="text-[#141912] font-bold text-sm">{item.title}</h4>
                    <p className="text-[#4E5B49] text-sm leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3.5">
              <Link to="/platform" className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm text-white bg-[#003D2B] hover:bg-[#022D20] shadow-[0_12px_28px_rgba(0,61,43,0.30)] hover:shadow-[0_16px_36px_rgba(0,61,43,0.40)] hover:scale-105 active:scale-100 transition-all">
                <span>Explore Platform</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform"><i className="fas fa-arrow-right text-xs" /></span>
              </Link>
            </div>
          </Reveal>

          <Reveal variant="right" duration={900} delay={140} className="order-1 lg:order-2 relative group">
            <div className="relative rounded-[1.8rem] p-2 overflow-hidden transition-transform duration-700 group-hover:scale-[1.015] shadow-[0_24px_60px_rgba(21,24,17,0.12)] border border-[#D5E1CE] bg-white">
              <div className="relative rounded-[calc(1.8rem-8px)] overflow-hidden bg-slate-900">
                <img
                  src="/platform_hero.png"
                  alt="Yugma Platform Preview"
                  loading="lazy"
                  className="w-full h-auto rounded-[1.2rem] opacity-95 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md border border-[#D5E1CE] rounded-full px-3.5 py-1.5 flex items-center gap-2 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#003D2B] animate-pulse" />
                  <span className="text-[10px] font-extrabold text-[#141912] uppercase tracking-[0.16em]">Live Builder</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md border border-[#D5E1CE] rounded-2xl px-5 py-3 flex items-center gap-4 shadow-md">
                  <div>
                    <div className="text-lg font-[800] text-[#141912] leading-none">1.2k+</div>
                    <div className="text-[10px] font-semibold text-[#4E5B49] uppercase tracking-wider mt-1">Executions</div>
                  </div>
                  <div className="w-px h-7 bg-[#D5E1CE]" />
                  <div>
                    <div className="text-lg font-[800] text-[#003D2B] leading-none">98.4%</div>
                    <div className="text-[10px] font-semibold text-[#4E5B49] uppercase tracking-wider mt-1">Efficiency</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default PlatformHighlight;
