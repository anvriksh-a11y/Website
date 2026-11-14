import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';

const GTMPlatformPreview: React.FC = () => {
  return (
    <section 
      className="relative pt-12 sm:pt-16 pb-16 sm:pb-24 bg-[#F4F7EE] select-none overflow-hidden" 
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Subtle organic ambient glow in background (clean, no mountain image) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#D8E6C8]/40 via-[#E8F0DF]/60 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <Reveal variant="fade" duration={600}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3EDE0] border border-[#D5E1CE] shadow-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-[12px] sm:text-[13px] font-bold text-[#003D2B] tracking-tight">
                Our Proprietary Platform • Live Workflow
              </span>
            </div>
          </Reveal>

          <Reveal variant="up" duration={700} delay={60}>
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-[800] text-[#141912] tracking-tight leading-[1.12]">
              Autonomous GTM &amp; Lead Discovery in Action
            </h2>
          </Reveal>

          <Reveal variant="up" duration={700} delay={120}>
            <p className="mt-3 text-sm sm:text-[15px] text-[#4E5B49] leading-relaxed max-w-2xl mx-auto">
              Experience ANVRiksh&apos;s autonomous intelligence finding, verifying, and enriching high-intent B2B accounts with zero manual prospecting.
            </p>
          </Reveal>
        </div>

        {/* —————————— MAIN PLATFORM SHOWCASE (Single Clean Dashboard) —————————— */}
        <Reveal variant="scale" duration={900} delay={160}>
          <div className="relative mx-auto max-w-5xl">
            
            {/* FLOATING TAG 1 (LEFT): Yellow "Lead Discovery 🎯" pointing to the platform sidebar */}
            <div className="hidden lg:flex absolute -left-12 xl:-left-16 top-[32%] items-center z-40 pointer-events-none select-none animate-bounce" style={{ animationDuration: '3s' }}>
              <span className="bg-[#FFE866] text-[#141912] text-xs font-bold px-3.5 py-1.5 rounded-full shadow-[0_8px_22px_rgba(0,0,0,0.18)] border border-[#FFF28F] whitespace-nowrap">
                Lead Discovery 🎯
              </span>
              {/* White cursor arrow pointing right */}
              <svg className="w-4 h-4 text-white -ml-0.5 filter drop-shadow-md rotate-90" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4 18l8-3 8 3-8-16z" />
              </svg>
            </div>

            {/* FLOATING TAG 2 (TOP-RIGHT): Lime "Auto-Prospecting ⚡" */}
            <div className="hidden sm:flex absolute -right-6 md:-right-10 lg:-right-14 top-12 sm:top-14 items-center z-40 pointer-events-none select-none">
              {/* Black cursor arrow pointing left */}
              <svg className="w-4 h-4 text-black -mr-0.5 filter drop-shadow-md -rotate-90" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4 18l8-3 8 3-8-16z" />
              </svg>
              <span className="bg-[#B4F04D] text-[#141912] text-xs font-bold px-3.5 py-1.5 rounded-full shadow-[0_8px_22px_rgba(0,0,0,0.18)] border border-[#C6F76E] whitespace-nowrap">
                Auto-Prospecting ⚡
              </span>
            </div>

            {/* FLOATING TAG 3 (BOTTOM-RIGHT): Lime "Automate ⚡" */}
            <div className="hidden sm:flex absolute -right-4 md:-right-8 bottom-16 sm:bottom-20 z-40 items-center select-none pointer-events-none">
              <span className="bg-[#B4F04D] text-[#141912] text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-[0_8px_22px_rgba(0,0,0,0.22)] border border-[#C6F76E] flex items-center gap-1.5">
                <span>Automate</span>
                <i className="fas fa-bolt text-[11px] text-[#003D2B]" />
              </span>
            </div>

            {/* —————————— BROWSER / PLATFORM CARD CONTAINER —————————— */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_24px_70px_rgba(0,61,43,0.12),0_8px_25px_rgba(0,0,0,0.06)] border border-[#D5E1CE] bg-white">
              
              {/* Sleek macOS / Web app top title bar */}
              <div className="px-4 py-2.5 sm:py-3 bg-[#F6FAF3] border-b border-[#E3EDE0] flex items-center justify-between">
                {/* 3 Window controls */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E57373]/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFB74D]/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#81C784]/80 inline-block" />
                  <span className="ml-2 text-[11px] sm:text-xs font-semibold text-[#4E5B49] hidden md:inline-block">
                    ANVRiksh GTM OS • Autonomous Pipeline
                  </span>
                </div>

                {/* Center search/URL pill */}
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#D5E1CE] text-[11px] text-[#4E5B49] font-medium shadow-2xs">
                  <i className="fas fa-lock text-[9px] text-emerald-600" />
                  <span>app.anvriksh.com/lead-discovery</span>
                </div>

                {/* Live Status indicator */}
                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-[#003D2B]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Platform Live</span>
                </div>
              </div>

              {/* Screen Viewport with Animated WebP */}
              <div className="relative bg-[#0F1713] overflow-hidden">
                <img
                  src="/lead_discovery_flow.webp"
                  alt="ANVRiksh Autonomous Lead Discovery and GTM Flow"
                  className="w-full h-auto block object-contain"
                  loading="eager"
                />

                {/* —————————— FLOATING BOTTOM AI PROMPT CAPSULE —————————— */}
                <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 w-[92%] sm:w-[540px] z-30 pointer-events-auto">
                  <div className="bg-white/95 backdrop-blur-2xl border border-white/80 rounded-full px-3.5 sm:px-4 py-2 sm:py-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.22)] flex items-center gap-2.5 transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.28)]">
                    
                    {/* Sparkle icon */}
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E3EDE0] border border-[#D5E1CE] flex items-center justify-center text-[#003D2B] shrink-0">
                      <i className="fas fa-sparkles text-xs" />
                    </span>

                    {/* Attachment pin icon */}
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                      <i className="fas fa-paperclip text-xs" />
                    </span>

                    {/* Prompt input placeholder text */}
                    <span className="text-[11px] sm:text-[13px] text-[#4E5B49] truncate font-medium flex-1">
                      Find me the 50 CEOs in AI industry from Hyderabad, India...
                    </span>

                    {/* Black circular send button */}
                    <button 
                      type="button"
                      aria-label="Send prompt"
                      className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-[#141912] hover:bg-[#003D2B] text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md shrink-0"
                    >
                      <i className="fas fa-arrow-right text-xs" />
                    </button>

                  </div>
                </div>

              </div>

            </div>

          </div>
        </Reveal>

        {/* Bottom Call to Action */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            to="/platform"
            className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#003D2B] hover:text-[#022D20] bg-white border border-[#D5E1CE] hover:border-[#003D2B] px-7 py-3 rounded-full shadow-xs hover:shadow-md transition-all hover:scale-105"
          >
            <span>Explore the Full ANVRiksh Platform</span>
            <i className="fas fa-arrow-right text-xs" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default GTMPlatformPreview;
