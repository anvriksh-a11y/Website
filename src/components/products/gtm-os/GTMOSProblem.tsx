import React from 'react';
import { 
  Compass, 
  Unlink2, 
  Clock, 
  Sparkles, 
  BarChart, 
  Cpu, 
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import Reveal from '../../Reveal';

export const GTMOSProblem: React.FC = () => {
  return (
    <section 
      id="problem-section"
      className="py-20 sm:py-28 bg-[#F4F7EE] text-[#141912] relative overflow-hidden border-t border-b border-[#D5E1CE] select-none"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <Reveal variant="up" className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] text-[#003D2B] text-xs font-semibold mb-4">
            <AlertCircle className="w-3.5 h-3.5 text-[#003D2B]" />
            <span>The GTM Dilemma</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[800] tracking-tight leading-[1.12] text-[#141912] mb-6">
            Growth Shouldn't Mean Managing <br className="hidden sm:inline" />
            <span className="text-[#003D2B]">
              a Dozen Different Tools.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#4E5B49] leading-relaxed">
            Businesses today face deeply disconnected customer acquisition processes. 
            Stacking separate software for scraping, verification, cold email, CRM, and reporting slows down sales velocity and multiplies operational costs.
          </p>
        </Reveal>

        {/* ————————————————— 6-CARD PROBLEM BENTO BOX ————————————————— */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 mb-14 sm:mb-16">
          
          {/* CARD 01: Customer Discovery (WIDE BENTO: 7 COLS) */}
          <Reveal variant="up" delay={80} className="md:col-span-12 lg:col-span-7">
            <div className="h-full rounded-[2rem] bg-white border border-[#D5E1CE] p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#003D2B]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#003D2B] bg-[#E3EDE0] px-2.5 py-1 rounded border border-[#D3E2CF]">
                      01
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#003D2B] bg-[#F4F7EE] px-2 py-0.5 rounded border border-[#D5E1CE]">
                      Prospecting Decay
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B]">
                    <Compass className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#141912] mb-2 group-hover:text-[#003D2B] transition-colors">
                  Customer Discovery
                </h3>
                <p className="text-xs sm:text-sm text-[#4E5B49] leading-relaxed mb-4">
                  Finding relevant prospects and decision-makers takes time and often relies on outdated, stale databases.
                </p>
              </div>

              <div className="space-y-3">
                {/* Micro-UI: Prospecting Decay & Bounce Risk */}
                <div className="rounded-xl bg-[#F4F7EE]/80 border border-[#D5E1CE] p-3.5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-bold text-[#141912] pb-1.5 border-b border-[#D5E1CE]">
                    <span>Legacy Database Inefficiency</span>
                    <span className="text-amber-800 font-mono text-[10px] font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                      High Stale Rate
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <div className="p-2 rounded-lg bg-white border border-[#D5E1CE]">
                      <div className="text-[#4E5B49]">Manual Prospecting</div>
                      <div className="text-amber-800 font-mono font-bold">~14 hrs / rep / week</div>
                    </div>
                    <div className="p-2 rounded-lg bg-white border border-[#D5E1CE]">
                      <div className="text-[#4E5B49]">Data Bounce Risk</div>
                      <div className="text-red-700 font-mono font-bold">35%+ Inactive Emails</div>
                    </div>
                  </div>
                </div>

                {/* Exact Impact Statement */}
                <div className="pt-2 text-xs text-[#4E5B49] flex items-center gap-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#003D2B]" />
                  <span>Hours wasted per rep on manual prospecting</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* CARD 02: Fragmented Workflows (COMPACT BENTO: 5 COLS) */}
          <Reveal variant="up" delay={140} className="md:col-span-12 lg:col-span-5">
            <div className="h-full rounded-[2rem] bg-white border border-[#D5E1CE] p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#003D2B]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#003D2B] bg-[#E3EDE0] px-2.5 py-1 rounded border border-[#D3E2CF]">
                      02
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#003D2B] bg-[#F4F7EE] px-2 py-0.5 rounded border border-[#D5E1CE]">
                      Tool Sprawl
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B]">
                    <Unlink2 className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#141912] mb-2 group-hover:text-[#003D2B] transition-colors">
                  Fragmented Workflows
                </h3>
                <p className="text-xs sm:text-sm text-[#4E5B49] leading-relaxed mb-4">
                  Lead generation, CRM, email, messaging, and analytics operate in disconnected systems without unified context.
                </p>
              </div>

              <div className="space-y-3">
                {/* Micro-UI: Tool Sprawl Pipeline */}
                <div className="rounded-xl bg-[#F4F7EE]/80 border border-[#D5E1CE] p-3.5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-bold text-[#141912] pb-1 border-b border-[#D5E1CE]">
                    <span>Disconnected Systems</span>
                    <span className="text-red-700 font-mono text-[10px] font-bold">Data Silos</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-[#4E5B49] pt-1">
                    <span className="px-2 py-0.5 rounded bg-white border border-[#D5E1CE]">Scraper</span>
                    <span>→</span>
                    <span className="px-2 py-0.5 rounded bg-white border border-[#D5E1CE]">Sheets</span>
                    <span>→</span>
                    <span className="px-2 py-0.5 rounded bg-white border border-[#D5E1CE]">Outreach</span>
                    <span>→</span>
                    <span className="px-2 py-0.5 rounded bg-white border border-[#D5E1CE]">CRM</span>
                  </div>
                </div>

                {/* Exact Impact Statement */}
                <div className="pt-2 text-xs text-[#4E5B49] flex items-center gap-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#003D2B]" />
                  <span>Information silos and duplicated efforts across tools</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* CARD 03: Manual Outreach (HALF BENTO: 6 COLS) */}
          <Reveal variant="up" delay={200} className="md:col-span-12 lg:col-span-6">
            <div className="h-full rounded-[2rem] bg-white border border-[#D5E1CE] p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#003D2B]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#003D2B] bg-[#E3EDE0] px-2.5 py-1 rounded border border-[#D3E2CF]">
                      03
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#003D2B] bg-[#F4F7EE] px-2 py-0.5 rounded border border-[#D5E1CE]">
                      Slow Cadence
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B]">
                    <Clock className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#141912] mb-2 group-hover:text-[#003D2B] transition-colors">
                  Manual Outreach
                </h3>
                <p className="text-xs sm:text-sm text-[#4E5B49] leading-relaxed mb-4">
                  Managing repetitive follow-ups and cross-channel communication consumes valuable team bandwidth.
                </p>
              </div>

              <div className="space-y-3">
                {/* Micro-UI: Response Latency Warning */}
                <div className="rounded-xl bg-[#F4F7EE]/80 border border-[#D5E1CE] p-3.5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-bold text-[#141912] pb-1 border-b border-[#D5E1CE]">
                    <span>Delayed Response Bottleneck</span>
                    <span className="text-amber-800 font-mono text-[10px] font-bold">Lead Decay</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <div className="p-2 rounded-lg bg-white border border-[#D5E1CE]">
                      <div className="text-[#4E5B49]">Average Lead Reply</div>
                      <div className="font-mono font-bold text-amber-800">&gt; 18 Hours</div>
                    </div>
                    <div className="p-2 rounded-lg bg-white border border-[#D5E1CE]">
                      <div className="text-[#4E5B49]">Missed Pipeline</div>
                      <div className="font-mono font-bold text-red-700">42% Drop-off</div>
                    </div>
                  </div>
                </div>

                {/* Exact Impact Statement */}
                <div className="pt-2 text-xs text-[#4E5B49] flex items-center gap-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#003D2B]" />
                  <span>High burnout and delayed lead response times</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* CARD 04: Personalization at Scale (HALF BENTO: 6 COLS) */}
          <Reveal variant="up" delay={260} className="md:col-span-12 lg:col-span-6">
            <div className="h-full rounded-[2rem] bg-white border border-[#D5E1CE] p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#003D2B]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#003D2B] bg-[#E3EDE0] px-2.5 py-1 rounded border border-[#D3E2CF]">
                      04
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#003D2B] bg-[#F4F7EE] px-2 py-0.5 rounded border border-[#D5E1CE]">
                      Generic Spam
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#141912] mb-2 group-hover:text-[#003D2B] transition-colors">
                  Personalization at Scale
                </h3>
                <p className="text-xs sm:text-sm text-[#4E5B49] leading-relaxed mb-4">
                  Creating genuinely personalized messages and campaign creative for diverse audiences and buyer personas is difficult.
                </p>
              </div>

              <div className="space-y-3">
                {/* Micro-UI: Reply Rate Crash */}
                <div className="rounded-xl bg-[#F4F7EE]/80 border border-[#D5E1CE] p-3.5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-bold text-[#141912] pb-1 border-b border-[#D5E1CE]">
                    <span>Templated Blast vs Tailored Context</span>
                    <span className="text-red-700 font-mono text-[10px] font-bold">Spam Filter Risk</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] p-2 rounded-lg bg-white border border-[#D5E1CE]">
                    <span className="text-[#4E5B49]">Generic Template Reply Rate:</span>
                    <span className="font-mono font-bold text-red-600">&lt; 1.2%</span>
                  </div>
                </div>

                {/* Exact Impact Statement */}
                <div className="pt-2 text-xs text-[#4E5B49] flex items-center gap-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#003D2B]" />
                  <span>Low reply rates due to generic, templated spam</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* CARD 05: Limited Growth Intelligence (HALF BENTO: 6 COLS) */}
          <Reveal variant="up" delay={320} className="md:col-span-12 lg:col-span-6">
            <div className="h-full rounded-[2rem] bg-white border border-[#D5E1CE] p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#003D2B]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#003D2B] bg-[#E3EDE0] px-2.5 py-1 rounded border border-[#D3E2CF]">
                      05
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#003D2B] bg-[#F4F7EE] px-2 py-0.5 rounded border border-[#D5E1CE]">
                      Blind Spots
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B]">
                    <BarChart className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#141912] mb-2 group-hover:text-[#003D2B] transition-colors">
                  Limited Growth Intelligence
                </h3>
                <p className="text-xs sm:text-sm text-[#4E5B49] leading-relaxed mb-4">
                  Businesses struggle to understand engagement velocity, campaign effectiveness, and prospect qualification in real time.
                </p>
              </div>

              <div className="space-y-3">
                {/* Micro-UI: Signal Blindspot */}
                <div className="rounded-xl bg-[#F4F7EE]/80 border border-[#D5E1CE] p-3.5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-bold text-[#141912] pb-1 border-b border-[#D5E1CE]">
                    <span>Attribution Blind Spots</span>
                    <span className="text-[#4E5B49] font-mono text-[10px]">Unclear ROI</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <div className="p-2 rounded-lg bg-white border border-[#D5E1CE]">
                      <div className="text-[#4E5B49]">Channel Attribution</div>
                      <div className="font-mono font-bold text-amber-700">Fragmented</div>
                    </div>
                    <div className="p-2 rounded-lg bg-white border border-[#D5E1CE]">
                      <div className="text-[#4E5B49]">Buyer Intent</div>
                      <div className="font-mono font-bold text-amber-700">Guesswork</div>
                    </div>
                  </div>
                </div>

                {/* Exact Impact Statement */}
                <div className="pt-2 text-xs text-[#4E5B49] flex items-center gap-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#003D2B]" />
                  <span>Decisions based on guesswork rather than clear signals</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* CARD 06: Operational Complexity (HALF BENTO: 6 COLS) */}
          <Reveal variant="up" delay={380} className="md:col-span-12 lg:col-span-6">
            <div className="h-full rounded-[2rem] bg-white border border-[#D5E1CE] p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#003D2B]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#003D2B] bg-[#E3EDE0] px-2.5 py-1 rounded border border-[#D3E2CF]">
                      06
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#003D2B] bg-[#F4F7EE] px-2 py-0.5 rounded border border-[#D5E1CE]">
                      Stack Friction
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B]">
                    <Cpu className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#141912] mb-2 group-hover:text-[#003D2B] transition-colors">
                  Operational Complexity
                </h3>
                <p className="text-xs sm:text-sm text-[#4E5B49] leading-relaxed mb-4">
                  Managing multiple vendor subscriptions, fragile API integrations, and disjointed team processes increases overhead.
                </p>
              </div>

              <div className="space-y-3">
                {/* Micro-UI: SaaS Multiplier Overhead */}
                <div className="rounded-xl bg-[#F4F7EE]/80 border border-[#D5E1CE] p-3.5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-bold text-[#141912] pb-1 border-b border-[#D5E1CE]">
                    <span>SaaS Sprawl Overhead</span>
                    <span className="text-red-700 font-mono text-[10px] font-bold">Bloated Costs</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <div className="p-2 rounded-lg bg-white border border-[#D5E1CE]">
                      <div className="text-[#4E5B49]">Separate Vendors</div>
                      <div className="font-mono font-bold text-red-600">6–8 Invoices / Mo</div>
                    </div>
                    <div className="p-2 rounded-lg bg-white border border-[#D5E1CE]">
                      <div className="text-[#4E5B49]">Annual Tech Waste</div>
                      <div className="font-mono font-bold text-red-600">$1,800+ / seat / yr</div>
                    </div>
                  </div>
                </div>

                {/* Exact Impact Statement */}
                <div className="pt-2 text-xs text-[#4E5B49] flex items-center gap-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#003D2B]" />
                  <span>High software costs and administrative friction</span>
                </div>
              </div>
            </div>
          </Reveal>

        </div>

        {/* Concluding Resolution Banner */}
        <Reveal variant="up" delay={200}>
          <div className="p-7 sm:p-9 rounded-[2rem] bg-white border border-[#D5E1CE] text-center max-w-4xl mx-auto shadow-xs relative overflow-hidden">
            <div className="flex items-center justify-center gap-2 text-[#003D2B] font-bold text-xs uppercase tracking-widest mb-3">
              <CheckCircle2 className="w-4 h-4 text-[#003D2B]" />
              <span>The Unified Solution</span>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl font-[800] text-[#141912] leading-snug">
              &quot;Genquantaa GTM OS brings these disconnected activities into one intelligent growth platform.&quot;
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default GTMOSProblem;
