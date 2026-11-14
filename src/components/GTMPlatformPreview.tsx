import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const GTMPlatformPreview: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const el = containerRef.current;
          if (el) {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Progress from 0 (when top enters bottom of window) to 1 (when centered / in view)
            const enterPoint = windowHeight;
            const finishPoint = windowHeight * 0.25;
            const current = enterPoint - rect.top;
            const total = enterPoint - finishPoint;
            
            const p = Math.min(Math.max(current / total, 0), 1);
            setScrollProgress(p);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Compute 3D scroll transforms: starts tilted back & lower, floats up & flattens as you scroll
  const translateY = (1 - scrollProgress) * 75; // 75px -> 0px
  const rotateX = (1 - scrollProgress) * 11;    // 11deg -> 0deg
  const scale = 0.94 + scrollProgress * 0.06;   // 0.94 -> 1.0
  const opacity = 0.7 + scrollProgress * 0.3;   // 0.7 -> 1.0

  return (
    <section 
      ref={containerRef}
      className="relative pt-4 sm:pt-8 pb-16 sm:pb-24 bg-[#F4F7EE] select-none overflow-hidden" 
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Ambient background glow on page */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-[#D8E6C8]/45 via-[#E8F0DF]/60 to-transparent blur-[130px] pointer-events-none rounded-full" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* 3D Perspective Viewport for the scroll lift effect */}
        <div 
          className="relative mx-auto max-w-5xl"
          style={{ perspective: '1200px' }}
        >
          {/* Scroll-driven animated wrapper */}
          <div
            style={{
              transform: `translateY(${translateY}px) rotateX(${rotateX}deg) scale(${scale})`,
              opacity: opacity,
              transformOrigin: 'center bottom',
              transition: 'transform 0.16s cubic-bezier(0.2, 0.9, 0.3, 1), opacity 0.16s ease-out',
              willChange: 'transform, opacity',
            }}
            className="relative"
          >

            {/* —————————— OUTER BACKGROUND CANVAS / DARK GREEN BORDER FRAME (#003D2B) —————————— */}
            <div className="relative rounded-[26px] sm:rounded-[38px] p-2.5 sm:p-5 md:p-7 bg-[#003D2B] border-2 border-[#004D36] shadow-[0_28px_80px_rgba(0,61,43,0.38)] overflow-visible">
              
              {/* Subtle gradient sheen */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/12 via-transparent to-black/25 pointer-events-none rounded-[inherit]" />

              {/* Subtle tech dot matrix in soft emerald */}
              <div 
                className="absolute inset-0 opacity-[0.14] pointer-events-none rounded-[inherit]"
                style={{
                  backgroundImage: 'radial-gradient(#A7F3D0 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />

              {/* FLOATING TAG 1 (LEFT): Yellow "Lead Discovery 🎯" pointing directly at the Lead Discovery sidebar item */}
              <div 
                className="hidden lg:flex absolute -left-7 xl:-left-10 top-[36%] items-center z-40 pointer-events-none select-none animate-bounce" 
                style={{ animationDuration: '3.2s' }}
              >
                <span className="bg-[#FFE866] text-[#141912] text-xs font-bold px-3.5 py-1.5 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.35)] border border-[#FFF28F] whitespace-nowrap">
                  Lead Discovery 🎯
                </span>
                {/* Pointer arrow pointing right directly into sidebar */}
                <svg className="w-4 h-4 text-white -ml-0.5 filter drop-shadow-md rotate-90" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L4 18l8-3 8 3-8-16z" />
                </svg>
              </div>

              {/* FLOATING TAG 2 (RIGHT): Lime "Auto-Prospecting ⚡" pointing directly at the actions / campaign controls */}
              <div className="hidden sm:flex absolute -right-5 sm:-right-8 md:-right-10 top-[24%] items-center z-40 pointer-events-none select-none">
                {/* Pointer arrow pointing left */}
                <svg className="w-4 h-4 text-white -mr-0.5 filter drop-shadow-md -rotate-90" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L4 18l8-3 8 3-8-16z" />
                </svg>
                <span className="bg-[#B4F04D] text-[#141912] text-xs font-bold px-3.5 py-1.5 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.35)] border border-[#C6F76E] whitespace-nowrap">
                  Auto-Prospecting ⚡
                </span>
              </div>

              {/* FLOATING TAG 3 (BOTTOM-RIGHT): Lime "ICP Scored 100% 🎯" pointing directly at ICP match score column */}
              <div className="hidden sm:flex absolute -right-4 sm:-right-7 md:-right-9 top-[62%] items-center z-40 select-none pointer-events-none">
                {/* Pointer arrow pointing left */}
                <svg className="w-4 h-4 text-white -mr-0.5 filter drop-shadow-md -rotate-90" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L4 18l8-3 8 3-8-16z" />
                </svg>
                <span className="bg-[#B4F04D] text-[#141912] text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.35)] border border-[#C6F76E] flex items-center gap-1.5">
                  <span>ICP Scored 100%</span>
                  <i className="fas fa-check-circle text-[11px] text-[#003D2B]" />
                </span>
              </div>

              {/* —————————— INNER BROWSER / PLATFORM CARD —————————— */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)] border border-white/20 bg-white">
                
                {/* macOS top window bar */}
                <div className="px-3.5 sm:px-4 py-2.5 bg-[#F6FAF3] border-b border-[#E3EDE0] flex items-center justify-between">
                  {/* 3 Window controls */}
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E57373]/85 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFB74D]/85 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#81C784]/85 inline-block" />
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
                    <div className="bg-white/95 backdrop-blur-2xl border border-white/80 rounded-full px-3.5 sm:px-4 py-2 sm:py-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.25)] flex items-center gap-2.5 transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.30)]">
                      
                      {/* Sparkle icon */}
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E3EDE0] border border-[#D5E1CE] flex items-center justify-center text-[#003D2B] shrink-0">
                        <i className="fas fa-wand-magic-sparkles text-xs" />
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

          </div>
        </div>

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
