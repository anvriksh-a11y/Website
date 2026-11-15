import React from 'react';
import Reveal from '../../Reveal';
import { 
  Rocket, 
  Target, 
  Megaphone, 
  Building2, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Layers,
  Check
} from 'lucide-react';

export const GTMOSAudience: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="audience-section"
      className="py-20 sm:py-28 bg-[#F4F7EE] text-[#141912] relative overflow-hidden border-t border-[#D5E1CE]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Background Soft Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div 
          className="absolute top-1/4 -left-40 w-96 h-96 rounded-full opacity-40" 
          style={{ background: 'radial-gradient(circle, #E3EDE0 0%, transparent 70%)', filter: 'blur(80px)' }} 
        />
        <div 
          className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full opacity-40" 
          style={{ background: 'radial-gradient(circle, #E3EDE0 0%, transparent 70%)', filter: 'blur(80px)' }} 
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* ————————————————— SECTION HEADER ————————————————— */}
        <Reveal variant="up" className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] text-[#003D2B] text-xs font-semibold mb-4 shadow-2xs">
            <Users className="w-3.5 h-3.5 text-[#003D2B]" />
            <span>Target Operating Segments</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[800] tracking-tight leading-[1.12] text-[#141912] mb-6">
            Built for Teams That{' '}
            <span className="text-[#003D2B]">
              Want to Grow Smarter.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#4E5B49] leading-relaxed max-w-3xl mx-auto">
            Whether you are launching your first outbound sequence or orchestrating pipeline generation 
            across hundreds of global accounts, Genquantaa GTM OS adapts to your revenue architecture.
          </p>
        </Reveal>

        {/* ————————————————— BENTO BOX LAYOUT (12-COLUMN GRID) ————————————————— */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-7">
          
          {/* ========================================================================= */}
          {/* BENTO CARD 1: STARTUPS & EMERGING VENTURES (7 COLS)                      */}
          {/* ========================================================================= */}
          <Reveal variant="up" delay={50} className="lg:col-span-7">
            <div 
              onClick={scrollToContact}
              className="h-full rounded-3xl bg-white border border-[#D5E1CE] p-7 sm:p-8 shadow-xs hover:shadow-xl hover:border-[#003D2B]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 cursor-pointer relative overflow-hidden"
            >
              {/* Top Subtle Ambient Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#E3EDE0]/50 to-transparent rounded-full -mr-20 -mt-20 pointer-events-none transition-opacity opacity-60 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Header Strip */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-[#6B7866] bg-[#F4F7EE] px-2.5 py-1 rounded-md border border-[#D5E1CE]">
                      01
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#003D2B] bg-[#E3EDE0] px-3 py-1 rounded-full border border-[#D3E2CF]">
                      Early-Stage &amp; Seed / Series A
                    </span>
                  </div>
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-[#E3EDE0] text-[#003D2B] border border-[#D3E2CF] group-hover:scale-110 transition-transform shadow-2xs">
                    <Rocket className="w-5 h-5 text-[#003D2B]" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl sm:text-[26px] font-extrabold text-[#141912] mb-3 group-hover:text-[#003D2B] transition-colors tracking-tight">
                  Startups &amp; Emerging Ventures
                </h3>
                <p className="text-sm text-[#4E5B49] leading-relaxed mb-6 max-w-xl">
                  Build an organized, repeatable customer acquisition process from day one without managing multiple disconnected tools or paying for bloated enterprise subscriptions.
                </p>

                {/* Bento Micro-UI: Lean Outbound Pipeline Simulator */}
                <div className="mb-6 p-4 rounded-2xl bg-[#F4F7EE] border border-[#D5E1CE] shadow-inner">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-[#4E5B49] mb-3">
                    <span className="flex items-center gap-1.5 text-[#003D2B]">
                      <Sparkles className="w-3.5 h-3.5" />
                      Autonomous 0-to-1 Outbound Flow
                    </span>
                    <span className="font-mono text-[#003D2B] bg-white px-2 py-0.5 rounded border border-[#D5E1CE]">
                      No Data Broker Spend
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5 text-center">
                    <div className="p-2.5 rounded-xl bg-white border border-[#D5E1CE] shadow-2xs">
                      <div className="text-[10px] text-[#6B7866] uppercase font-bold tracking-wider">Step 1</div>
                      <div className="text-xs font-extrabold text-[#141912] mt-0.5">ICP Discovery</div>
                      <div className="text-[10px] text-[#003D2B] font-semibold mt-1">500 Accounts/wk</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-[#D5E1CE] shadow-2xs relative">
                      <div className="text-[10px] text-[#6B7866] uppercase font-bold tracking-wider">Step 2</div>
                      <div className="text-xs font-extrabold text-[#141912] mt-0.5">Verification</div>
                      <div className="text-[10px] text-emerald-700 font-semibold mt-1">99.4% Deliverable</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#003D2B] text-white shadow-2xs">
                      <div className="text-[10px] text-[#A7F3D0] uppercase font-bold tracking-wider">Step 3</div>
                      <div className="text-xs font-extrabold text-white mt-0.5">AI Outreach</div>
                      <div className="text-[10px] text-[#B4F04D] font-bold mt-1">32.8% Reply Rate</div>
                    </div>
                  </div>
                </div>

                {/* Benefits Checklist */}
                <div className="space-y-2.5 pt-4 border-t border-[#D5E1CE]/70">
                  <div className="flex items-start gap-2.5 text-xs text-[#4E5B49]">
                    <CheckCircle2 className="w-4 h-4 text-[#003D2B] shrink-0 mt-0.5" />
                    <span>Rapid ICP discovery without expensive third-party data broker subscriptions</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#4E5B49]">
                    <CheckCircle2 className="w-4 h-4 text-[#003D2B] shrink-0 mt-0.5" />
                    <span>Consolidated all-in-one outbound stack replacing 6+ disparate SaaS tools</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#4E5B49]">
                    <CheckCircle2 className="w-4 h-4 text-[#003D2B] shrink-0 mt-0.5" />
                    <span>Cost-effective scaling with automated autonomous AI multi-agent workflows</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="mt-7 pt-4 border-t border-[#D5E1CE]/70 flex items-center justify-between text-xs font-bold text-[#003D2B]">
                <span>Explore Startup Growth Blueprint</span>
                <div className="flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
                  <span>Configure Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* ========================================================================= */}
          {/* BENTO CARD 2: B2B SALES TEAMS & SDRS (5 COLS)                             */}
          {/* ========================================================================= */}
          <Reveal variant="up" delay={150} className="lg:col-span-5">
            <div 
              onClick={scrollToContact}
              className="h-full rounded-3xl bg-white border border-[#D5E1CE] p-7 sm:p-8 shadow-xs hover:shadow-xl hover:border-[#003D2B]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 cursor-pointer relative overflow-hidden"
            >
              {/* Top Subtle Ambient Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#E3EDE0]/50 to-transparent rounded-full -mr-16 -mt-16 pointer-events-none transition-opacity opacity-60 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Header Strip */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-[#6B7866] bg-[#F4F7EE] px-2.5 py-1 rounded-md border border-[#D5E1CE]">
                      02
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#003D2B] bg-[#E3EDE0] px-3 py-1 rounded-full border border-[#D3E2CF]">
                      Quota-Carrying AEs &amp; SDRs
                    </span>
                  </div>
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-[#E3EDE0] text-[#003D2B] border border-[#D3E2CF] group-hover:scale-110 transition-transform shadow-2xs">
                    <Target className="w-5 h-5 text-[#003D2B]" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-extrabold text-[#141912] mb-3 group-hover:text-[#003D2B] transition-colors tracking-tight">
                  B2B Sales Teams &amp; SDRs
                </h3>
                <p className="text-sm text-[#4E5B49] leading-relaxed mb-6">
                  Discover high-intent prospects, prioritize inbound and outbound opportunities using ICP scoring, and eliminate manual email drafting.
                </p>

                {/* Bento Micro-UI: Live Qualified Prospect Card */}
                <div className="mb-6 p-4 rounded-2xl bg-[#F4F7EE] border border-[#D5E1CE] shadow-inner space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#003D2B] text-white text-[11px] font-extrabold flex items-center justify-center">
                        EH
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#141912]">Elena Hughes</div>
                        <div className="text-[10px] text-[#4E5B49]">VP Eng • CloudScale</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] text-[10px] font-bold text-[#003D2B]">
                      96% ICP Match
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white border border-[#D5E1CE] text-[11px] text-[#4E5B49] leading-snug">
                    <span className="font-semibold text-[#003D2B]">AI Generated Icebreaker: </span>
                    &ldquo;Noticed CloudScale&apos;s recent expansion into EMEA and your new distributed data mesh...&rdquo;
                  </div>
                </div>

                {/* Benefits Checklist */}
                <div className="space-y-2.5 pt-4 border-t border-[#D5E1CE]/70">
                  <div className="flex items-start gap-2.5 text-xs text-[#4E5B49]">
                    <CheckCircle2 className="w-4 h-4 text-[#003D2B] shrink-0 mt-0.5" />
                    <span>Continuous pipeline replenishment of qualified enterprise accounts</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#4E5B49]">
                    <CheckCircle2 className="w-4 h-4 text-[#003D2B] shrink-0 mt-0.5" />
                    <span>Personalized icebreakers that maximize reply velocity across sequences</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#4E5B49]">
                    <CheckCircle2 className="w-4 h-4 text-[#003D2B] shrink-0 mt-0.5" />
                    <span>Smart inbox prioritizing positive buying intent and active objections</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="mt-7 pt-4 border-t border-[#D5E1CE]/70 flex items-center justify-between text-xs font-bold text-[#003D2B]">
                <span>Accelerate Quota Attainment</span>
                <div className="flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
                  <span>View SDR Playbook</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* ========================================================================= */}
          {/* BENTO CARD 3: MODERN MARKETING TEAMS (4 COLS)                             */}
          {/* ========================================================================= */}
          <Reveal variant="up" delay={80} className="lg:col-span-4">
            <div 
              onClick={scrollToContact}
              className="h-full rounded-3xl bg-white border border-[#D5E1CE] p-7 shadow-xs hover:shadow-xl hover:border-[#003D2B]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 cursor-pointer relative overflow-hidden"
            >
              <div className="relative z-10">
                {/* Header Strip */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#6B7866] bg-[#F4F7EE] px-2 py-0.5 rounded border border-[#D5E1CE]">
                      03
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#003D2B] bg-[#E3EDE0] px-2.5 py-0.5 rounded-full border border-[#D3E2CF]">
                      Demand Gen &amp; Growth
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#E3EDE0] text-[#003D2B] border border-[#D3E2CF] group-hover:scale-110 transition-transform">
                    <Megaphone className="w-4.5 h-4.5 text-[#003D2B]" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#141912] mb-2.5 group-hover:text-[#003D2B] transition-colors tracking-tight">
                  Modern Marketing Teams
                </h3>
                <p className="text-xs sm:text-sm text-[#4E5B49] leading-relaxed mb-5">
                  Generate highly tailored campaign content, synthesize branded creatives, and coordinate multi-touch sequences across email, WhatsApp, and social.
                </p>

                {/* Bento Micro-UI: AI Creative Engine Preview */}
                <div className="mb-5 p-3.5 rounded-2xl bg-[#F4F7EE] border border-[#D5E1CE] space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-bold text-[#141912]">
                    <span className="flex items-center gap-1.5 text-[#003D2B]">
                      <Sparkles className="w-3.5 h-3.5" />
                      AI Creative Studio
                    </span>
                    <span className="text-[10px] text-[#4E5B49] font-mono">1-Click Multi-variant</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-white border border-[#D5E1CE] text-[11px]">
                      <span className="text-[#141912] font-medium truncate max-w-[170px]">Cold Outbound Sequence</span>
                      <span className="text-emerald-700 font-bold text-[10px]">Variant A (44.2%)</span>
                    </div>
                    <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-white border border-[#D5E1CE] text-[11px]">
                      <span className="text-[#141912] font-medium truncate max-w-[170px]">WhatsApp Nurture Flow</span>
                      <span className="text-[#003D2B] font-bold text-[10px]">Live Staging</span>
                    </div>
                  </div>
                </div>

                {/* Benefits Checklist */}
                <div className="space-y-2 pt-3.5 border-t border-[#D5E1CE]/70">
                  <div className="flex items-start gap-2 text-xs text-[#4E5B49]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#003D2B] shrink-0 mt-0.5" />
                    <span>AI copy &amp; visual creative studio in one workspace</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#4E5B49]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#003D2B] shrink-0 mt-0.5" />
                    <span>Multi-channel campaign management &amp; staging</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#4E5B49]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#003D2B] shrink-0 mt-0.5" />
                    <span>Real-time conversion analytics and funnel attribution</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3.5 border-t border-[#D5E1CE]/70 flex items-center justify-between text-xs font-bold text-[#003D2B]">
                <span>Explore Marketing Features</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Reveal>

          {/* ========================================================================= */}
          {/* BENTO CARD 4: LEAD GENERATION AGENCIES (4 COLS)                           */}
          {/* ========================================================================= */}
          <Reveal variant="up" delay={160} className="lg:col-span-4">
            <div 
              onClick={scrollToContact}
              className="h-full rounded-3xl bg-white border border-[#D5E1CE] p-7 shadow-xs hover:shadow-xl hover:border-[#003D2B]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 cursor-pointer relative overflow-hidden"
            >
              <div className="relative z-10">
                {/* Header Strip */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#6B7866] bg-[#F4F7EE] px-2 py-0.5 rounded border border-[#D5E1CE]">
                      04
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#003D2B] bg-[#E3EDE0] px-2.5 py-0.5 rounded-full border border-[#D3E2CF]">
                      GTM &amp; Outbound Agencies
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#E3EDE0] text-[#003D2B] border border-[#D3E2CF] group-hover:scale-110 transition-transform">
                    <Users className="w-4.5 h-4.5 text-[#003D2B]" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#141912] mb-2.5 group-hover:text-[#003D2B] transition-colors tracking-tight">
                  Lead Generation Agencies
                </h3>
                <p className="text-xs sm:text-sm text-[#4E5B49] leading-relaxed mb-5">
                  Organize client prospect discovery, campaign execution, and engagement workflows at scale with unified multi-tenant governance.
                </p>

                {/* Bento Micro-UI: Multi-Tenant Workspace Selector */}
                <div className="mb-5 p-3.5 rounded-2xl bg-[#F4F7EE] border border-[#D5E1CE] space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-bold text-[#141912]">
                    <span className="flex items-center gap-1.5 text-[#003D2B]">
                      <Layers className="w-3.5 h-3.5" />
                      Multi-Client Isolation
                    </span>
                    <span className="px-1.5 py-0.2 rounded bg-white text-[10px] font-mono text-[#003D2B] border border-[#D5E1CE]">
                      12 Active Clients
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#D5E1CE] flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold text-[#141912]">Client: FinScale Dynamics</div>
                      <div className="text-[10px] text-[#4E5B49]">3 Active Sequences • 99.1% Inbox Rate</div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </div>

                {/* Benefits Checklist */}
                <div className="space-y-2 pt-3.5 border-t border-[#D5E1CE]/70">
                  <div className="flex items-start gap-2 text-xs text-[#4E5B49]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#003D2B] shrink-0 mt-0.5" />
                    <span>Multi-campaign client workspace isolation</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#4E5B49]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#003D2B] shrink-0 mt-0.5" />
                    <span>High-volume verified email and messaging delivery</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#4E5B49]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#003D2B] shrink-0 mt-0.5" />
                    <span>Client-ready reporting and performance transparency</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3.5 border-t border-[#D5E1CE]/70 flex items-center justify-between text-xs font-bold text-[#003D2B]">
                <span>Explore Agency Multi-Tenancy</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Reveal>

          {/* ========================================================================= */}
          {/* BENTO CARD 5: GROWING ENTERPRISES (4 COLS)                                */}
          {/* ========================================================================= */}
          <Reveal variant="up" delay={240} className="lg:col-span-4">
            <div 
              onClick={scrollToContact}
              className="h-full rounded-3xl bg-white border border-[#D5E1CE] p-7 shadow-xs hover:shadow-xl hover:border-[#003D2B]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 cursor-pointer relative overflow-hidden"
            >
              <div className="relative z-10">
                {/* Header Strip */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#6B7866] bg-[#F4F7EE] px-2 py-0.5 rounded border border-[#D5E1CE]">
                      05
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#003D2B] bg-[#E3EDE0] px-2.5 py-0.5 rounded-full border border-[#D3E2CF]">
                      Mid-Market &amp; Enterprise
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#E3EDE0] text-[#003D2B] border border-[#D3E2CF] group-hover:scale-110 transition-transform">
                    <Building2 className="w-4.5 h-4.5 text-[#003D2B]" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#141912] mb-2.5 group-hover:text-[#003D2B] transition-colors tracking-tight">
                  Growing Enterprises
                </h3>
                <p className="text-xs sm:text-sm text-[#4E5B49] leading-relaxed mb-5">
                  Centralize customer acquisition operations, gain granular visibility into cross-team outreach, and maintain strict data governance and compliance.
                </p>

                {/* Bento Micro-UI: Enterprise Security Badges */}
                <div className="mb-5 p-3.5 rounded-2xl bg-[#F4F7EE] border border-[#D5E1CE] space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-bold text-[#141912]">
                    <span className="flex items-center gap-1.5 text-[#003D2B]">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Security &amp; Governance
                    </span>
                    <span className="px-1.5 py-0.2 rounded bg-white text-[10px] font-mono text-emerald-800 border border-[#D5E1CE]">
                      SOC2 Ready
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 text-[10px] font-semibold text-[#4E5B49]">
                    <div className="p-2 rounded-lg bg-white border border-[#D5E1CE] flex items-center gap-1.5">
                      <Check className="w-3 h-3 text-[#003D2B]" />
                      <span>RBAC Controls</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white border border-[#D5E1CE] flex items-center gap-1.5">
                      <Check className="w-3 h-3 text-[#003D2B]" />
                      <span>Audit Logging</span>
                    </div>
                  </div>
                </div>

                {/* Benefits Checklist */}
                <div className="space-y-2 pt-3.5 border-t border-[#D5E1CE]/70">
                  <div className="flex items-start gap-2 text-xs text-[#4E5B49]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#003D2B] shrink-0 mt-0.5" />
                    <span>Role-based permissions &amp; complete audit trails</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#4E5B49]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#003D2B] shrink-0 mt-0.5" />
                    <span>Dedicated deployment and commercial licensing</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#4E5B49]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#003D2B] shrink-0 mt-0.5" />
                    <span>Carrier &amp; domain deliverability infrastructure</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3.5 border-t border-[#D5E1CE]/70 flex items-center justify-between text-xs font-bold text-[#003D2B]">
                <span>Explore Enterprise Deployment</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};

export default GTMOSAudience;