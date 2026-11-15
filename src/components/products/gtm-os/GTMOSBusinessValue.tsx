import React from 'react';
import Reveal from '../../Reveal';
import { 
  TrendingUp, 
  Workflow,
  Search, 
  Sparkles, 
  Layers,
  ArrowRight,
  Check,
  Lock,
  Bookmark,
  SlidersHorizontal,
  Share2,
  ArrowUp,
  Bot
} from 'lucide-react';

export const GTMOSBusinessValue: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="business-value-section"
      className="py-20 sm:py-28 bg-[#F4F7EE] text-[#141912] relative overflow-hidden border-t border-[#D5E1CE]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Background Soft Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div 
          className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full opacity-40" 
          style={{ background: 'radial-gradient(circle, #E3EDE0 0%, transparent 70%)', filter: 'blur(90px)' }} 
        />
        <div 
          className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full opacity-40" 
          style={{ background: 'radial-gradient(circle, #E3EDE0 0%, transparent 70%)', filter: 'blur(90px)' }} 
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* ————————————————— SECTION HEADER ————————————————— */}
        <Reveal variant="up" className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] text-[#003D2B] text-xs font-semibold mb-4 shadow-2xs">
            <TrendingUp className="w-3.5 h-3.5 text-[#003D2B]" />
            <span>Operational Advantages</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[800] tracking-tight leading-[1.12] text-[#141912] mb-6">
            Transform the Way Your Business{' '}
            <span className="text-[#003D2B]">
              Acquires Customers.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#4E5B49] leading-relaxed max-w-3xl mx-auto">
            Genquantaa GTM OS delivers measurable structural advantages to revenue operations by unifying 
            prospecting, copy intelligence, campaign orchestration, and growth analytics.
          </p>
        </Reveal>

        {/* ————————————————— BENTO BOX LAYOUT WITH EXACT ORIGINAL CONTENT ————————————————— */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          
          {/* ========================================================================= */}
          {/* CARD 1: UNIFIED CUSTOMER ACQUISITION WORKFLOWS (2 COLS — WIDE BENTO)       */}
          {/* ========================================================================= */}
          <Reveal variant="up" delay={50} className="lg:col-span-2">
            <div 
              onClick={scrollToContact}
              className="h-full rounded-[2rem] bg-white border border-[#D5E1CE] p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-[#003D2B]/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                
                {/* Left Side: Exact Original Headline & Copy */}
                <div className="sm:col-span-5 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="font-mono text-[11px] font-bold text-[#6B7866] bg-[#F4F7EE] px-2 py-0.5 rounded border border-[#D5E1CE]">
                      01
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#003D2B] bg-[#E3EDE0] px-2.5 py-0.5 rounded-full border border-[#D3E2CF]">
                      Architecture
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-[25px] font-extrabold text-[#141912] leading-tight mb-3 group-hover:text-[#003D2B] transition-colors tracking-tight">
                    Unified Customer Acquisition Workflows
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4E5B49] leading-relaxed">
                    Eliminate fragmented SaaS point solutions by managing discovery, verification, outreach, and pipeline movement within a single operating environment.
                  </p>
                </div>

                {/* Right Side: Visual Node Graph (Matching Reference Top-Left Card) */}
                <div className="sm:col-span-7 rounded-2xl bg-[#F4F7EE] border border-[#D5E1CE] p-4 relative min-h-[200px] flex flex-col justify-between shadow-inner overflow-hidden">
                  <div className="flex items-center justify-between px-3 py-1.5 rounded-full bg-white border border-[#D5E1CE] shadow-2xs mb-4">
                    <Search className="w-3.5 h-3.5 text-[#6B7866]" />
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[11px] font-mono font-bold text-[#141912]">gtm.workspace/unified-flow</span>
                    </div>
                    <Workflow className="w-3.5 h-3.5 text-[#003D2B]" />
                  </div>

                  <div className="relative py-2">
                    <div className="flex justify-center mb-5">
                      <div className="px-3 py-1 rounded-full bg-[#003D2B] text-white text-[11px] font-bold shadow-xs flex items-center gap-1.5">
                        <Bot className="w-3.5 h-3.5 text-[#A7F3D0]" />
                        <span>Coordinated Engine</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-white border border-[#D5E1CE] shadow-2xs">
                        <div className="w-6 h-6 rounded-full bg-[#003D2B] text-white text-[9px] font-bold flex items-center justify-center shrink-0">
                          EH
                        </div>
                        <div className="min-w-0">
                          <div className="text-[10px] font-bold text-[#141912] truncate">Elena H.</div>
                          <div className="text-[8px] text-[#003D2B] font-semibold">96% ICP</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-white border border-[#D5E1CE] shadow-2xs">
                        <div className="w-6 h-6 rounded-full bg-[#141912] text-white text-[9px] font-bold flex items-center justify-center shrink-0">
                          MR
                        </div>
                        <div className="min-w-0">
                          <div className="text-[10px] font-bold text-[#141912] truncate">Marcus R.</div>
                          <div className="text-[8px] text-emerald-700 font-semibold">Verified</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-white border border-[#D5E1CE] shadow-2xs">
                        <div className="w-6 h-6 rounded-full bg-[#003D2B] text-white text-[9px] font-bold flex items-center justify-center shrink-0">
                          SC
                        </div>
                        <div className="min-w-0">
                          <div className="text-[10px] font-bold text-[#141912] truncate">Sarah C.</div>
                          <div className="text-[8px] text-[#003D2B] font-semibold">Active</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-[#6B7866] pt-2 border-t border-[#D5E1CE]/50">
                    <span>Replaces 6+ Point Solutions</span>
                    <span className="text-[#003D2B] font-bold">Zero CSV Imports</span>
                  </div>
                </div>

              </div>

              <div className="mt-5 pt-3.5 border-t border-[#D5E1CE]/60 flex items-center justify-between text-xs font-bold text-[#003D2B]">
                <span>Explore Unified Workflows</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Reveal>

          {/* ========================================================================= */}
          {/* CARD 2: INTELLIGENT PROSPECT DISCOVERY (1 COL)                             */}
          {/* ========================================================================= */}
          <Reveal variant="up" delay={100} className="lg:col-span-1">
            <div 
              onClick={scrollToContact}
              className="h-full rounded-[2rem] bg-white border border-[#D5E1CE] p-6 shadow-xs hover:shadow-xl hover:border-[#003D2B]/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
            >
              {/* Top Visual: Layered Search Card with Action Icons (Matching Reference) */}
              <div className="rounded-2xl bg-[#F4F7EE] border border-[#D5E1CE] p-3.5 mb-5 shadow-inner relative min-h-[175px] flex items-center justify-center">
                <div className="absolute inset-x-5 top-3 bottom-3 rounded-2xl bg-white/70 border border-[#D5E1CE] rotate-[-3deg] pointer-events-none" />

                <div className="relative z-10 w-full rounded-2xl bg-white border border-[#D5E1CE] shadow-sm p-3 space-y-2">
                  <div className="flex items-center gap-1.5 text-[10px] text-[#4E5B49] font-mono border-b border-[#D5E1CE] pb-1.5">
                    <Search className="w-3 h-3 text-[#003D2B]" />
                    <span className="truncate">gtm.radar/directory-scan</span>
                  </div>

                  <div className="flex items-center justify-around py-0.5 text-[#4E5B49]">
                    <span className="p-1 rounded-md bg-[#F4F7EE] hover:text-[#003D2B]">
                      <Bookmark className="w-3 h-3" />
                    </span>
                    <span className="p-1 rounded-md bg-[#F4F7EE] hover:text-[#003D2B]">
                      <Sparkles className="w-3 h-3" />
                    </span>
                    <span className="p-1 rounded-md bg-[#F4F7EE] hover:text-[#003D2B]">
                      <SlidersHorizontal className="w-3 h-3" />
                    </span>
                    <span className="p-1 rounded-md bg-[#F4F7EE] hover:text-[#003D2B]">
                      <Share2 className="w-3 h-3" />
                    </span>
                  </div>

                  <div className="text-[9px] text-[#6B7866] space-y-1">
                    <div className="truncate">Q B2B SaaS Enterprise CTOs</div>
                    <div className="truncate font-semibold text-[#003D2B]">Q 3,490 Verified Executives</div>
                  </div>
                </div>
              </div>

              {/* Bottom Text Area: Exact Original Title & Copy */}
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="font-mono text-[10px] font-bold text-[#6B7866] bg-[#F4F7EE] px-2 py-0.5 rounded border border-[#D5E1CE]">
                    02
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#003D2B]">
                    Discovery
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-[#141912] mb-1.5 group-hover:text-[#003D2B] transition-colors tracking-tight">
                  Intelligent Prospect Discovery
                </h3>
                <p className="text-xs text-[#4E5B49] leading-relaxed">
                  Identify relevant accounts and verified executive contacts across global directories with continuous technographic and firmographic intelligence.
                </p>
              </div>
            </div>
          </Reveal>

          {/* ========================================================================= */}
          {/* CARD 3: BETTER LEAD ORGANIZATION & QUALIFICATION (1 COL)                  */}
          {/* ========================================================================= */}
          <Reveal variant="up" delay={150} className="lg:col-span-1">
            <div 
              onClick={scrollToContact}
              className="h-full rounded-[2rem] bg-white border border-[#D5E1CE] p-6 shadow-xs hover:shadow-xl hover:border-[#003D2B]/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
            >
              {/* Top Visual: Tier Selector Dropdown Card (Matching Reference Dropdown) */}
              <div className="rounded-2xl bg-[#F4F7EE] border border-[#D5E1CE] p-4 mb-5 shadow-inner">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#6B7866] mb-2.5">
                  Select ICP criteria
                </div>

                <div className="space-y-1.5 bg-white border border-[#D5E1CE] p-1.5 rounded-xl shadow-2xs">
                  <div className="px-2.5 py-1 text-xs text-[#4E5B49] font-medium">
                    Tier 2 (75-89% ICP Fit)
                  </div>

                  <div className="px-2.5 py-1.5 text-xs text-white bg-[#141912] font-semibold rounded-lg flex items-center justify-between shadow-xs">
                    <span>Tier 1: 90%+ Score</span>
                    <Check className="w-3.5 h-3.5 text-[#A7F3D0]" />
                  </div>

                  <div className="px-2.5 py-1 text-xs text-[#4E5B49] font-medium">
                    Tier 3 (Automated Archive)
                  </div>
                </div>
              </div>

              {/* Bottom Text Area: Exact Original Title & Copy */}
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="font-mono text-[10px] font-bold text-[#6B7866] bg-[#F4F7EE] px-2 py-0.5 rounded border border-[#D5E1CE]">
                    03
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#003D2B]">
                    Qualification
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-[#141912] mb-1.5 group-hover:text-[#003D2B] transition-colors tracking-tight">
                  Better Lead Organization &amp; Qualification
                </h3>
                <p className="text-xs text-[#4E5B49] leading-relaxed">
                  Prioritize accounts algorithmically against your Ideal Customer Profile criteria, ensuring sales reps spend time solely on high-fit opportunities.
                </p>
              </div>
            </div>
          </Reveal>

          {/* ========================================================================= */}
          {/* CARD 4: PERSONALIZED MULTICHANNEL ENGAGEMENT (1 COL)                      */}
          {/* ========================================================================= */}
          <Reveal variant="up" delay={50} className="lg:col-span-1">
            <div 
              onClick={scrollToContact}
              className="h-full rounded-[2rem] bg-white border border-[#D5E1CE] p-6 shadow-xs hover:shadow-xl hover:border-[#003D2B]/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
            >
              {/* Top Visual: Channel Selector Dropdown Card */}
              <div className="rounded-2xl bg-[#F4F7EE] border border-[#D5E1CE] p-4 mb-5 shadow-inner">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#6B7866] mb-2.5">
                  Active outreach channel
                </div>

                <div className="space-y-1.5 bg-white border border-[#D5E1CE] p-1.5 rounded-xl shadow-2xs">
                  <div className="px-2.5 py-1 text-xs text-[#4E5B49] font-medium">
                    Cold Email (Multi-Inbox)
                  </div>

                  <div className="px-2.5 py-1.5 text-xs text-white bg-[#141912] font-semibold rounded-lg flex items-center justify-between shadow-xs">
                    <span>WhatsApp Business Cloud</span>
                    <Check className="w-3.5 h-3.5 text-[#A7F3D0]" />
                  </div>

                  <div className="px-2.5 py-1 text-xs text-[#4E5B49] font-medium">
                    AI Voice Calling
                  </div>
                </div>
              </div>

              {/* Bottom Text Area: Exact Original Title & Copy */}
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="font-mono text-[10px] font-bold text-[#6B7866] bg-[#F4F7EE] px-2 py-0.5 rounded border border-[#D5E1CE]">
                    04
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#003D2B]">
                    Engagement
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-[#141912] mb-1.5 group-hover:text-[#003D2B] transition-colors tracking-tight">
                  Personalized Multichannel Engagement
                </h3>
                <p className="text-xs text-[#4E5B49] leading-relaxed">
                  Engage prospects simultaneously across email, LinkedIn, WhatsApp, and voice with coordinated timing and consistent brand narrative.
                </p>
              </div>
            </div>
          </Reveal>

          {/* ========================================================================= */}
          {/* CARD 5: AI-ASSISTED CAMPAIGN CREATION (1 COL)                             */}
          {/* ========================================================================= */}
          <Reveal variant="up" delay={100} className="lg:col-span-1">
            <div 
              onClick={scrollToContact}
              className="h-full rounded-[2rem] bg-white border border-[#D5E1CE] p-6 shadow-xs hover:shadow-xl hover:border-[#003D2B]/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
            >
              {/* Top Visual: Chat UI & AI Generation Prompt Snippet (Matching Reference) */}
              <div className="rounded-2xl bg-[#F4F7EE] border border-[#D5E1CE] p-3.5 mb-5 shadow-inner relative min-h-[175px] flex flex-col justify-between overflow-hidden">
                <div className="p-2 rounded-xl bg-white/90 border border-[#D5E1CE] text-[10px] text-[#4E5B49] leading-snug">
                  <span className="font-bold text-[#141912]">Parameter:</span> Draft 3 cold sequence angles for B2B CTOs...
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-[#D5E1CE] shadow-sm my-1.5">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#003D2B]" />
                    <span className="text-[10px] font-bold text-[#003D2B]">AI Campaign Studio</span>
                  </div>
                  <div className="text-[9px] text-[#6B7866] line-clamp-2">
                    Generated contextual copy + branded visual creative ready for staging...
                  </div>
                </div>

                <div className="flex items-center justify-between px-2.5 py-1.5 rounded-full bg-white border border-[#D5E1CE] shadow-2xs">
                  <span className="text-[10px] text-[#6B7866]">Refine sales copy...</span>
                  <span className="w-5 h-5 rounded-full bg-[#141912] text-white flex items-center justify-center">
                    <ArrowUp className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Bottom Text Area: Exact Original Title & Copy */}
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="font-mono text-[10px] font-bold text-[#6B7866] bg-[#F4F7EE] px-2 py-0.5 rounded border border-[#D5E1CE]">
                    05
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#003D2B]">
                    Campaigns
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-[#141912] mb-1.5 group-hover:text-[#003D2B] transition-colors tracking-tight">
                  AI-Assisted Campaign Creation
                </h3>
                <p className="text-xs text-[#4E5B49] leading-relaxed">
                  Accelerate go-to-market execution by generating contextual sales copy, value propositions, and supporting visuals directly from business parameters.
                </p>
              </div>
            </div>
          </Reveal>

          {/* ========================================================================= */}
          {/* CARD 6: CENTRALIZED PERFORMANCE VISIBILITY (2 COLS — WIDE BENTO)           */}
          {/* ========================================================================= */}
          <Reveal variant="up" delay={150} className="lg:col-span-2">
            <div 
              onClick={scrollToContact}
              className="h-full rounded-[2rem] bg-white border border-[#D5E1CE] p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-[#003D2B]/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
            >
              {/* Top Visual: Dashboard Tabs + Metric + Rounded Pill Bar Chart (Matching Reference) */}
              <div className="rounded-2xl bg-[#F4F7EE] border border-[#D5E1CE] p-4 sm:p-5 mb-5 shadow-inner">
                
                <div className="flex items-center gap-2 text-xs font-semibold mb-4 border-b border-[#D5E1CE] pb-3">
                  <span className="px-3.5 py-1 rounded-full bg-[#141912] text-white text-[11px] font-bold shadow-xs">
                    Overview
                  </span>
                  <span className="px-3.5 py-1 rounded-full text-[#4E5B49] hover:text-[#141912] text-[11px]">
                    Funnel Conversion
                  </span>
                  <span className="px-3.5 py-1 rounded-full text-[#4E5B49] hover:text-[#141912] text-[11px]">
                    Deliverability
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end">
                  
                  <div className="sm:col-span-5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#141912] tracking-tight">
                        14,820
                      </span>
                      <span className="text-xs font-bold text-emerald-700 bg-[#E3EDE0] px-2 py-0.5 rounded-full border border-[#D3E2CF]">
                        +64.2%
                      </span>
                    </div>
                    <p className="text-xs text-[#4E5B49] mt-1.5 leading-snug">
                      Real-time visibility into conversion funnels, channel reply rates, and inbox deliverability.
                    </p>
                  </div>

                  <div className="sm:col-span-7 flex items-end justify-between gap-1.5 sm:gap-2 h-24 pt-2">
                    {[
                      { m: 'Apr', h: '42%' },
                      { m: 'May', h: '60%' },
                      { m: 'Jun', h: '75%' },
                      { m: 'Jul', h: '92%' },
                      { m: 'Aug', h: '55%' },
                      { m: 'Sep', h: '70%' },
                      { m: 'Oct', h: '100%', active: true },
                      { m: 'Nov', h: '82%' },
                      { m: 'Dec', h: '64%' },
                      { m: 'Jan', h: '45%' },
                      { m: 'Feb', h: '88%' }
                    ].map((bar, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end">
                        <div 
                          className={`w-full rounded-full transition-all duration-300 ${
                            bar.active 
                              ? 'bg-[#141912] shadow-sm scale-y-105' 
                              : 'bg-gradient-to-t from-[#003D2B] to-[#34D399] opacity-80 hover:opacity-100'
                          }`}
                          style={{ height: bar.h }}
                        />
                        <span className="text-[9px] text-[#6B7866] mt-1.5 font-mono">
                          {bar.m}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              {/* Bottom Text Area: Exact Original Title & Copy */}
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="font-mono text-[10px] font-bold text-[#6B7866] bg-[#F4F7EE] px-2 py-0.5 rounded border border-[#D5E1CE]">
                    06
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#003D2B]">
                    Analytics
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#141912] mb-1.5 group-hover:text-[#003D2B] transition-colors tracking-tight">
                  Centralized Performance Visibility
                </h3>
                <p className="text-xs sm:text-sm text-[#4E5B49] leading-relaxed">
                  Gain instant transparency into funnel conversion, channel reply rates, inbox deliverability, and prospect sentiment through unified dashboards.
                </p>
              </div>
            </div>
          </Reveal>

          {/* ========================================================================= */}
          {/* CARD 7: FLEXIBLE INTEGRATION ECOSYSTEM (2 COLS — WIDE BENTO)               */}
          {/* ========================================================================= */}
          <Reveal variant="up" delay={50} className="lg:col-span-2">
            <div 
              onClick={scrollToContact}
              className="h-full rounded-[2rem] bg-white border border-[#D5E1CE] p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-[#003D2B]/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                
                {/* Left Side: Exact Original Headline & Copy */}
                <div className="sm:col-span-6 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="font-mono text-[11px] font-bold text-[#6B7866] bg-[#F4F7EE] px-2 py-0.5 rounded border border-[#D5E1CE]">
                      07
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#003D2B] bg-[#E3EDE0] px-2.5 py-0.5 rounded-full border border-[#D3E2CF]">
                      Connectivity
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#141912] leading-tight mb-3 group-hover:text-[#003D2B] transition-colors tracking-tight">
                    Flexible Integration Ecosystem
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4E5B49] leading-relaxed">
                    Connect existing business mailboxes, messaging gateways, CRMs, and custom endpoints without disrupting active customer workflows.
                  </p>
                </div>

                {/* Right Side: Integration Ecosystem Badges */}
                <div className="sm:col-span-6 rounded-2xl bg-[#F4F7EE] border border-[#D5E1CE] p-4 flex flex-col justify-between min-h-[160px] shadow-inner">
                  <div className="flex items-center justify-between text-[11px] font-bold text-[#141912] mb-3">
                    <span className="text-[#003D2B] flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#003D2B]" />
                      Connected Tooling
                    </span>
                    <span className="font-mono text-[10px] text-emerald-700 bg-white px-2 py-0.5 rounded border border-[#D5E1CE]">
                      Bi-directional Sync
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 text-[10px] font-semibold text-[#4E5B49]">
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-[#D5E1CE] shadow-2xs">Twilio</span>
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-[#D5E1CE] shadow-2xs">HubSpot</span>
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-[#D5E1CE] shadow-2xs">Salesforce</span>
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-[#D5E1CE] shadow-2xs">Gmail / 365</span>
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-[#D5E1CE] shadow-2xs">WhatsApp API</span>
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-[#D5E1CE] shadow-2xs">REST Webhooks</span>
                  </div>

                  <div className="text-[10px] text-[#6B7866] pt-2 border-t border-[#D5E1CE]/50 flex items-center justify-between">
                    <span>Custom ERP / CRM ready</span>
                    <span className="text-[#003D2B] font-bold">100+ Connectors</span>
                  </div>
                </div>

              </div>

              <div className="mt-5 pt-3.5 border-t border-[#D5E1CE]/60 flex items-center justify-between text-xs font-bold text-[#003D2B]">
                <span>Explore Integration Capabilities</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Reveal>

          {/* ========================================================================= */}
          {/* CARD 8: SCALABLE WORKFLOW AUTOMATION (2 COLS — WIDE BENTO)                 */}
          {/* ========================================================================= */}
          <Reveal variant="up" delay={150} className="lg:col-span-2">
            <div 
              onClick={scrollToContact}
              className="h-full rounded-[2rem] bg-white border border-[#D5E1CE] p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-[#003D2B]/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                
                {/* Left Side: Exact Original Headline & Copy */}
                <div className="sm:col-span-6 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="font-mono text-[11px] font-bold text-[#6B7866] bg-[#F4F7EE] px-2 py-0.5 rounded border border-[#D5E1CE]">
                      08
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#003D2B] bg-[#E3EDE0] px-2.5 py-0.5 rounded-full border border-[#D3E2CF]">
                      Infrastructure
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#141912] leading-tight mb-3 group-hover:text-[#003D2B] transition-colors tracking-tight">
                    Scalable Workflow Automation
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4E5B49] leading-relaxed">
                    Scale outbound outreach smoothly with background asynchronous task processing, automated rate limiting, and domain warm-up protections.
                  </p>
                </div>

                {/* Right Side: Radiating Concentric Security Rings (Matching Reference Top-Right) */}
                <div className="sm:col-span-6 rounded-2xl bg-[#F4F7EE] border border-[#D5E1CE] p-4 flex items-center justify-center min-h-[160px] relative shadow-inner">
                  <div className="w-28 h-28 rounded-full border border-[#D5E1CE] bg-white/60 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full border border-[#CCD8C3] bg-[#E3EDE0]/50 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#141912] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <Lock className="w-5 h-5 text-[#A7F3D0]" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-2 inset-x-3 flex items-center justify-between text-[9px] font-mono text-[#6B7866] bg-white/90 px-2.5 py-1 rounded-lg border border-[#D5E1CE]">
                    <span>Async Task Queue: Active</span>
                    <span className="text-[#003D2B] font-bold">Domain Warm-Up Safe</span>
                  </div>
                </div>

              </div>

              <div className="mt-5 pt-3.5 border-t border-[#D5E1CE]/60 flex items-center justify-between text-xs font-bold text-[#003D2B]">
                <span>Explore Automation Specs</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};

export default GTMOSBusinessValue;