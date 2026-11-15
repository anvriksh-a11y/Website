import React, { useState, useEffect } from 'react';
import {
  Layers,
  Compass,
  Mail,
  LineChart,
  Maximize2,
  X
} from 'lucide-react';
import Reveal from '../../Reveal';

export const GTMOSOverview: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };

    if (isLightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isLightboxOpen]);

  return (
    <section
      id="modules-section"
      className="py-20 sm:py-28 bg-[#F4F7EE] text-[#141912] relative overflow-hidden select-none"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">

        {/* Section Headline */}
        <Reveal variant="up" className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] text-[#003D2B] text-xs font-semibold mb-4">
            <Layers className="w-3.5 h-3.5 text-[#003D2B]" />
            <span>Comprehensive Platform Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[800] tracking-tight leading-[1.12] text-[#141912] mb-6">
            One Platform. Three Growth Engines.{' '}
            <span className="text-[#003D2B]">
              Twenty-Four Intelligent Modules.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#4E5B49] leading-relaxed max-w-3xl mx-auto">
            A coordinated multi-agent revenue architecture that unifies prospect discovery, multichannel engagement,
            generative content synthesis, and real-time growth analytics.
          </p>
        </Reveal>

        {/* Architecture Infographic Showcase Container */}
        <Reveal variant="up" delay={150}>
          <div className="relative max-w-6xl mx-auto">
            {/* Subtle Ambient Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#003D2B]/10 via-[#2E7D32]/10 to-[#003D2B]/10 rounded-3xl blur-xl opacity-75 pointer-events-none" />

            <div className="relative rounded-3xl bg-white border border-[#D5E1CE] shadow-[0_16px_40px_rgba(20,25,18,0.06)] overflow-hidden">
              {/* Top Browser Bar Header */}
              <div className="px-5 py-3.5 bg-[#FAFBF7] border-b border-[#D5E1CE] flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#E3EDE0] border border-[#CCD8C3]" />
                  <div className="w-3 h-3 rounded-full bg-[#E3EDE0] border border-[#CCD8C3]" />
                  <div className="w-3 h-3 rounded-full bg-[#E3EDE0] border border-[#CCD8C3]" />
                  <span className="ml-2 text-xs font-mono font-medium text-[#4E5B49] hidden sm:inline">
                    genquantaa-gtm-os // architecture-matrix-v2.4
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E3EDE0] text-[#003D2B] text-[11px] font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#003D2B] animate-pulse" />
                    24 Active Autonomous Agents
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsLightboxOpen(true)}
                    className="p-1.5 text-[#4E5B49] hover:text-[#003D2B] hover:bg-[#E3EDE0] rounded-lg transition-colors cursor-pointer"
                    title="Expand to Fullscreen"
                    aria-label="Expand image"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Infographic Image Area */}
              <div
                className="relative p-2 sm:p-4 bg-[#F8FAF5] cursor-zoom-in group"
                onClick={() => setIsLightboxOpen(true)}
              >
                <img
                  src="/gtm_24_ai_agents_engine.jpg"
                  alt="The 24 AI Agents Powering Your Go-To-Market Engine - Genquantaa GTM OS"
                  className="w-full h-auto rounded-2xl border border-[#D5E1CE]/80 shadow-xs object-cover transition-transform duration-300 group-hover:scale-[1.003]"
                  loading="eager"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-x-0 bottom-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="px-4 py-2 rounded-full bg-[#003D2B]/90 text-white text-xs font-semibold shadow-lg backdrop-blur-md flex items-center gap-2">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Click to inspect full resolution architecture</span>
                  </div>
                </div>
              </div>

              {/* 3 Engines Legend / Quick Summary Strip */}
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#D5E1CE] bg-white border-t border-[#D5E1CE]">
                <div className="p-4 sm:p-5 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B] shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-[#141912]">01. Discover Engine</h4>
                      <span className="text-[10px] font-mono font-bold bg-[#E3EDE0] text-[#003D2B] px-1.5 py-0.5 rounded">08 Agents</span>
                    </div>
                    <p className="text-xs text-[#4E5B49] mt-1 leading-relaxed">
                      Autonomous prospect discovery, real-time data enrichment, multi-tier SMTP verification, and ICP scoring algorithms.
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-[#141912]">02. Engage Engine</h4>
                      <span className="text-[10px] font-mono font-bold bg-[#E3EDE0] text-[#003D2B] px-1.5 py-0.5 rounded">08 Agents</span>
                    </div>
                    <p className="text-xs text-[#4E5B49] mt-1 leading-relaxed">
                      Context-aware outreach across Cold Email, LinkedIn, WhatsApp, SMS, AI Voice calling, with unified smart inbox.
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B] shrink-0">
                    <LineChart className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-[#141912]">03. Analyze &amp; Grow</h4>
                      <span className="text-[10px] font-mono font-bold bg-[#E3EDE0] text-[#003D2B] px-1.5 py-0.5 rounded">08 Agents</span>
                    </div>
                    <p className="text-xs text-[#4E5B49] mt-1 leading-relaxed">
                      Generative copy &amp; visual studio, live funnel analytics, 24/7 background processors, and compliant rate limiting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-7xl w-full max-h-[94vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="px-5 py-3.5 bg-[#FAFBF7] border-b border-[#D5E1CE] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#003D2B]" />
                <span className="text-sm font-bold text-[#141912]">
                  The 24 AI Agents Powering Your Go-To-Market Engine
                </span>
                <span className="text-xs text-[#4E5B49] hidden md:inline font-mono">
                  (Press Esc or click anywhere outside to close)
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="p-1.5 rounded-lg bg-[#EAEFE5] hover:bg-[#D5E1CE] text-[#141912] transition-colors cursor-pointer"
                aria-label="Close fullscreen modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="p-3 sm:p-6 overflow-auto max-h-[calc(94vh-60px)] flex items-center justify-center bg-[#F4F7EE]/60">
              <img
                src="/gtm_24_ai_agents_engine.jpg"
                alt="The 24 AI Agents Powering Your Go-To-Market Engine"
                className="w-full h-auto max-w-full rounded-xl border border-[#D5E1CE] shadow-sm object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GTMOSOverview;
