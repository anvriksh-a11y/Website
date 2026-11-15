import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  ChevronRight,
  Bot,
  CheckCircle2,
  Maximize2,
  X,
  TrendingUp,
  Zap,
  Filter
} from 'lucide-react';
import Reveal from '../../Reveal';

export const GTMOSHero: React.FC = () => {
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

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      className="relative w-full pt-6 sm:pt-8 md:pt-10 pb-16 md:pb-24 bg-[#F4F7EE] text-[#141912] overflow-hidden select-none"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Soft Ambient Green Glows matching home page */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[480px] rounded-full opacity-60" 
          style={{ background: 'radial-gradient(ellipse at center, rgba(0,61,43,0.12) 0%, rgba(45,69,44,0.05) 50%, transparent 70%)', filter: 'blur(70px)' }} 
        />
        <div 
          className="absolute top-1/3 -right-40 w-[550px] h-[550px] rounded-full opacity-40" 
          style={{ background: 'radial-gradient(circle, #E3EDE0 0%, transparent 68%)', filter: 'blur(60px)' }} 
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* ————————————————— TWO-COLUMN HERO: TEXT (LEFT) + 3D FUNNEL (RIGHT) ————————————————— */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          
          {/* Left Column: Text, Badges, CTAs, Highlights (lg:col-span-7) */}
          <Reveal variant="left" duration={800} className="lg:col-span-7 space-y-6 text-left">
            {/* Release & Identity Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#003D2B] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#003D2B]" />
              </span>
              <span className="font-bold tracking-wider uppercase text-[11px] text-[#003D2B]">Genquantaa GTM OS</span>
              <span className="text-[#4E5B49]/40">•</span>
              <span className="text-[#4E5B49] text-xs font-semibold">AI-Powered Go-To-Market Operating System</span>
            </div>

            {/* Core Headlines */}
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-[800] tracking-tight leading-[1.08] text-[#141912]">
              Your Entire Go-To-Market Engine.{' '}
              <span className="text-[#003D2B]">
                Powered by AI.
              </span>
            </h1>

            {/* Subtitle tag */}
            <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#2D452C]">
              Discover • Engage • Convert • Grow
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#4E5B49] leading-relaxed max-w-2xl">
              Genquantaa GTM OS brings intelligent customer discovery, AI-powered engagement, 
              multichannel campaigns, and actionable business intelligence together in one unified platform.
            </p>

            {/* CTAs Button Row */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1">
              <button
                onClick={() => scrollTo('modules-section')}
                className="px-6 sm:px-7 py-3.5 rounded-full bg-[#003D2B] hover:bg-[#022D20] text-white font-bold text-sm sm:text-base shadow-[0_4px_14px_rgba(0,61,43,0.22)] hover:shadow-[0_6px_20px_rgba(0,61,43,0.32)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore the Platform</span>
                <ChevronRight className="w-4 h-4 text-white/90 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('contact-section')}
                className="px-6 sm:px-7 py-3.5 rounded-full bg-white hover:bg-[#EAEFE5] border border-[#D5E1CE] text-[#141912] hover:text-[#003D2B] font-semibold text-sm sm:text-base shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#003D2B]" />
                <span>Get a Product Demo</span>
              </button>

              <button
                onClick={() => scrollTo('pricing-section')}
                className="px-5 sm:px-6 py-3.5 rounded-full bg-[#E3EDE0] hover:bg-[#D5E1CE] border border-[#D3E2CF] text-[#003D2B] font-bold text-sm transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
              >
                <span>View Plans</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#003D2B]" />
              </button>
            </div>

            {/* Trust bullets */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-6 pt-3 text-xs font-semibold text-[#4E5B49] border-t border-[#D5E1CE]/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#003D2B]" />
                Multi-Agent Orchestration
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#003D2B]" />
                Unified Multichannel Hub
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#003D2B]" />
                Enterprise Data Governance
              </span>
            </div>
          </Reveal>

          {/* Right Column: 3D Funnel Visual Card (lg:col-span-5) */}
          <Reveal variant="right" duration={800} delay={120} className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none group">
              
              {/* Ambient Glow Behind Card */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#003D2B]/15 via-amber-400/20 to-emerald-400/15 rounded-[2.5rem] blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Main 3D Card Shell */}
              <div 
                onClick={() => setIsLightboxOpen(true)}
                className="relative rounded-[2rem] bg-white/95 backdrop-blur-xl p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,61,43,0.12),0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_28px_65px_rgba(0,61,43,0.18)] transition-all duration-300 cursor-pointer overflow-hidden group-hover:-translate-y-1"
              >
                {/* Image Container with Floating Badge Overlays */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#F7F4EE] to-[#EBE4D8]">
                  <img
                    src="/gtm_funnel_3d.jpg"
                    alt="ANVRiksh Genquantaa GTM OS End-to-End Sales Funnel & Revenue Acquisition Engine"
                    className="w-full h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="eager"
                  />

                  {/* Top Bar Pill inside the image overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#D5E1CE] text-[10px] font-bold text-[#003D2B] shadow-xs flex items-center gap-1.5">
                      <Zap className="w-3 h-3 text-[#003D2B]" />
                      <span>5-Stage AI Funnel</span>
                    </span>
                    <span className="p-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#D5E1CE] text-[#003D2B] shadow-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Bottom Metrics Chip Overlay */}
                  <div className="absolute bottom-3 inset-x-3 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-[#141912]/85 backdrop-blur-md border border-white/20 text-[10px] font-semibold text-white shadow-md flex items-center gap-1.5">
                      <Filter className="w-3 h-3 text-[#FFE866]" />
                      <span>Awareness → Purchase</span>
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-700/90 backdrop-blur-md border border-emerald-400/30 text-[10px] font-bold text-white shadow-md flex items-center gap-1.5">
                      <TrendingUp className="w-3 h-3 text-[#B4F04D]" />
                      <span>+140% Pipeline</span>
                    </span>
                  </div>
                </div>

                {/* Subtitle caption below image */}
                <div className="pt-3 px-1 flex items-center justify-between text-xs text-[#4E5B49]">
                  <span className="font-semibold text-[#141912]">Full-Funnel Acquisition Engine</span>
                  <span className="text-[11px] font-bold text-[#003D2B] flex items-center gap-1">
                    <span>Click to expand</span>
                    <Maximize2 className="w-3 h-3" />
                  </span>
                </div>
              </div>

            </div>
          </Reveal>

        </div>

        {/* ————————————————— SOPHISTICATED DASHBOARD / WORKFLOW SHOWCASE (VIDEO PREVIEW) ————————————————— */}
        <Reveal variant="up" delay={200}>
          <div className="relative mx-auto max-w-6xl mt-4 perspective-1000">
            
            {/* Card Shell matching home page DashboardPreview.tsx and GTMPlatformPreview.tsx */}
            <div className="relative rounded-[2rem] p-[1.5px] shadow-[0_24px_70px_rgba(0,61,43,0.12),0_8px_25px_rgba(0,0,0,0.06)] bg-gradient-to-b from-[#D5E1CE] to-[#EAEFE5]">
              <div className="relative rounded-[calc(2rem-1.5px)] overflow-hidden bg-white">
                
                {/* Window Browser Chrome Header */}
                <div className="flex items-center justify-between px-5 py-3.5 bg-[#F4F7EE] border-b border-[#D5E1CE] text-xs text-[#4E5B49]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                    <span className="ml-4 hidden sm:inline-flex items-center gap-2 text-[11px] font-semibold text-[#4E5B49] bg-white border border-[#D5E1CE] rounded-full px-3.5 py-1 shadow-2xs">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#003D2B]" />
                      <span>gtm.anvriksh.com/workspace/enterprise</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] text-[10px] font-bold uppercase tracking-wider text-[#003D2B]">
                      Demonstration Workspace
                    </span>
                    <span className="hidden md:inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#4E5B49]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#003D2B] animate-pulse" />
                      Multi-Agent Engine Online
                    </span>
                  </div>
                </div>

                {/* Screen Viewport with Animated Video / Motion Flow of GTM in Action */}
                <div className="relative bg-[#0F1713] overflow-hidden">
                  <img
                    src="/lead_discovery_flow.webp"
                    alt="ANVRiksh Genquantaa GTM OS Autonomous Lead Discovery and Outreach Flow"
                    className="w-full h-auto block object-contain"
                    loading="eager"
                  />

                  {/* —————————— FLOATING BOTTOM AI PROMPT CAPSULE —————————— */}
                  <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 w-[92%] sm:w-[560px] z-30 pointer-events-auto">
                    <div className="bg-white/95 backdrop-blur-2xl border border-white/80 rounded-full px-3.5 sm:px-4 py-2 sm:py-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.22)] flex items-center gap-2.5 transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.28)]">
                      
                      {/* Sparkle icon */}
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E3EDE0] border border-[#D5E1CE] flex items-center justify-center text-[#003D2B] shrink-0">
                        <Sparkles className="w-3.5 h-3.5 text-[#003D2B]" />
                      </span>

                      {/* Attachment pin icon */}
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                        <i className="fas fa-paperclip text-xs" />
                      </span>

                      {/* Prompt input placeholder text */}
                      <span className="text-[11px] sm:text-[13px] text-[#4E5B49] truncate font-medium flex-1">
                        Find me the 50 CEOs in AI industry from Hyderabad, India...
                      </span>

                      {/* Circular send button */}
                      <button 
                        type="button"
                        aria-label="Send prompt"
                        className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-[#141912] hover:bg-[#003D2B] text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md shrink-0 cursor-pointer"
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                    </div>
                  </div>

                </div>

                {/* Data Disclaimer Footer */}
                <div className="px-5 py-3 bg-[#F4F7EE] border-t border-[#D5E1CE] flex items-center justify-between text-[11px] text-[#4E5B49]">
                  <span>* Autonomous multi-agent pipeline recorded from production Genquantaa GTM OS workspace.</span>
                  <span className="hidden sm:inline font-semibold text-[#003D2B]">SOC2 Type II • ISO 27001 Ready</span>
                </div>

              </div>
            </div>

            {/* Floating Tag 1 (Left): Yellow "Lead Discovery 🎯" */}
            <div className="hidden lg:flex absolute -left-10 xl:-left-14 top-[28%] items-center z-40 pointer-events-none select-none animate-bounce" style={{ animationDuration: '3.5s' }}>
              <span className="bg-[#FFE866] text-[#141912] text-xs font-bold px-3.5 py-1.5 rounded-full shadow-[0_8px_22px_rgba(0,0,0,0.18)] border border-[#FFF28F] whitespace-nowrap">
                Lead Discovery 🎯
              </span>
              <svg className="w-4 h-4 text-white -ml-0.5 filter drop-shadow-md rotate-90" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4 18l8-3 8 3-8-16z" />
              </svg>
            </div>

            {/* Floating Tag 2 (Top-Right): Lime "Auto-Prospecting ⚡" */}
            <div className="hidden sm:flex absolute -right-6 md:-right-10 lg:-right-12 top-10 items-center z-40 pointer-events-none select-none">
              <svg className="w-4 h-4 text-black -mr-0.5 filter drop-shadow-md -rotate-90" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4 18l8-3 8 3-8-16z" />
              </svg>
              <span className="bg-[#B4F04D] text-[#141912] text-xs font-bold px-3.5 py-1.5 rounded-full shadow-[0_8px_22px_rgba(0,0,0,0.18)] border border-[#C6F76E] whitespace-nowrap">
                Auto-Prospecting ⚡
              </span>
            </div>

            {/* ————————————————— FLOATING AI ASSISTANT CARD ————————————————— */}
            <div className="lg:absolute -bottom-6 -right-4 lg:max-w-xs w-full mt-4 lg:mt-0 z-30">
              <div className="p-4 rounded-2xl bg-white/95 border border-[#D5E1CE] shadow-[0_16px_40px_rgba(20,25,18,0.12)] backdrop-blur-xl flex items-start gap-3.5 group hover:border-[#003D2B] transition-all">
                <div className="w-9 h-9 rounded-xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B] shrink-0">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#003D2B] uppercase tracking-wider">AI Growth Copilot</span>
                    <span className="text-[10px] text-[#4E5B49] font-semibold">Active</span>
                  </div>
                  <p className="text-xs text-[#141912] font-semibold mt-1 leading-snug">
                    &quot;Your next customer is waiting to be discovered.&quot;
                  </p>
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] text-[#003D2B] hover:text-[#022D20] font-bold cursor-pointer" onClick={() => scrollTo('workflow-section')}>
                    <span>View agent workflow</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Reveal>

      </div>

      {/* ————————————————— 3D SALES FUNNEL LIGHTBOX MODAL ————————————————— */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[92vh] bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#F4F7EE] border-b border-[#D5E1CE]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <span className="ml-3 font-bold text-sm text-[#141912]">
                  Genquantaa GTM OS — End-to-End Acquisition &amp; Revenue Funnel
                </span>
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 border border-[#D5E1CE] text-[#141912] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close image modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image Viewport */}
            <div className="p-4 sm:p-6 overflow-auto max-h-[75vh] flex items-center justify-center bg-[#F9F7F2]">
              <img
                src="/gtm_funnel_3d.jpg"
                alt="Genquantaa GTM OS Sales Funnel Pipeline 3D Architecture"
                className="max-w-full max-h-full object-contain rounded-2xl shadow-lg"
              />
            </div>

            {/* Modal Footer with 5-stage overview */}
            <div className="px-6 py-3.5 bg-[#F4F7EE] border-t border-[#D5E1CE] flex flex-wrap items-center justify-between gap-3 text-xs text-[#4E5B49]">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-[#003D2B]">Funnel Progression:</span>
                <span className="px-2 py-0.5 rounded bg-white border border-[#D5E1CE]">1. Awareness</span>
                <span>→</span>
                <span className="px-2 py-0.5 rounded bg-white border border-[#D5E1CE]">2. Interest</span>
                <span>→</span>
                <span className="px-2 py-0.5 rounded bg-white border border-[#D5E1CE]">3. Evaluation</span>
                <span>→</span>
                <span className="px-2 py-0.5 rounded bg-white border border-[#D5E1CE]">4. Decision</span>
                <span>→</span>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-[#003D2B] font-bold border border-emerald-300">5. Purchase (+140% ARR)</span>
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="px-4 py-1.5 rounded-full bg-[#003D2B] text-white font-bold text-xs hover:bg-[#022D20] transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default GTMOSHero;
