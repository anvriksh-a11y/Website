import React, { useState } from 'react';
import { 
  Sparkles, 
  Image as ImageIcon, 
  FileText, 
  CheckCircle2, 
  Copy, 
  Check,
  Sliders,
  Target,
  Compass,
  Layers,
  Palette,
  CheckCircle
} from 'lucide-react';
import Reveal from '../../Reveal';

export const GTMOSContentIntelligence: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activePersona, setActivePersona] = useState<'enterprise' | 'growth'>('enterprise');

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="content-section"
      className="py-20 sm:py-28 bg-[#F4F7EE] text-[#141912] relative overflow-hidden select-none"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <Reveal variant="up" className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] text-[#003D2B] text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#003D2B]" />
            <span>Creative &amp; Copy Synthesis</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[800] tracking-tight leading-[1.12] text-[#141912] mb-6">
            From a Business Idea to{' '}
            <span className="text-[#003D2B]">
              Campaign-Ready Content.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#4E5B49] leading-relaxed max-w-3xl mx-auto">
            Genquantaa GTM OS seamlessly blends deep language intelligence and visual asset synthesis, 
            allowing revenue teams to turn basic product parameters into high-impact, multichannel campaigns in minutes.
          </p>
        </Reveal>

        {/* ————————————————— 6-STEP WORKFLOW BENTO BOX ————————————————— */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 mb-16 sm:mb-20">
          
          {/* STEP 01 (WIDE BENTO: 7 COLS) */}
          <Reveal variant="up" delay={80} className="md:col-span-12 lg:col-span-7">
            <div className="h-full rounded-[2rem] bg-white border border-[#D5E1CE] p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#003D2B]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#003D2B] bg-[#E3EDE0] px-2.5 py-1 rounded border border-[#D3E2CF]">
                      Step 01
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#003D2B] bg-[#F4F7EE] px-2 py-0.5 rounded border border-[#D5E1CE]">
                      Input Ingestion
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B]">
                    <Sliders className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#141912] mb-2 group-hover:text-[#003D2B] transition-colors">
                  Product or Service Details
                </h3>
                <p className="text-xs sm:text-sm text-[#4E5B49] leading-relaxed mb-5">
                  Enter core offering, value drivers, and competitive advantages.
                </p>
              </div>

              {/* Micro-UI: Parameter Ingestion Studio */}
              <div className="rounded-xl bg-[#F4F7EE]/80 border border-[#D5E1CE] p-3.5 space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#4E5B49] pb-2 border-b border-[#D5E1CE]">
                  <span className="font-bold text-[#141912]">Offering: Enterprise AI Revenue OS</span>
                  <span className="text-[#003D2B] font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#003D2B] animate-pulse" />
                    Parameters Validated
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 pt-0.5">
                  <span className="text-[10px] font-medium bg-white text-[#141912] px-2.5 py-1 rounded-md border border-[#D5E1CE] shadow-2xs">
                    Value Driver: Tool Sprawl Elimination (-65%)
                  </span>
                  <span className="text-[10px] font-medium bg-white text-[#141912] px-2.5 py-1 rounded-md border border-[#D5E1CE] shadow-2xs">
                    Advantage: 24 Coordinated Agents
                  </span>
                  <span className="text-[10px] font-medium bg-[#E3EDE0] text-[#003D2B] font-semibold px-2.5 py-1 rounded-md border border-[#D3E2CF]">
                    TAM: 2,400+ Verified Accounts
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* STEP 02 (COMPACT BENTO: 5 COLS) */}
          <Reveal variant="up" delay={140} className="md:col-span-12 lg:col-span-5">
            <div className="h-full rounded-[2rem] bg-white border border-[#D5E1CE] p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#003D2B]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#003D2B] bg-[#E3EDE0] px-2.5 py-1 rounded border border-[#D3E2CF]">
                      Step 02
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#003D2B] bg-[#F4F7EE] px-2 py-0.5 rounded border border-[#D5E1CE]">
                      ICP Filter
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B]">
                    <Target className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#141912] mb-2 group-hover:text-[#003D2B] transition-colors">
                  Define Target Audience
                </h3>
                <p className="text-xs sm:text-sm text-[#4E5B49] leading-relaxed mb-5">
                  Specify ICP industry, executive seniority, company size, and pain points.
                </p>
              </div>

              {/* Micro-UI: ICP Criteria Chips */}
              <div className="rounded-xl bg-[#F4F7EE]/80 border border-[#D5E1CE] p-3.5 space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#4E5B49] font-medium">ICP Match Confidence</span>
                  <span className="font-mono font-bold text-[#003D2B]">98.4%</span>
                </div>
                <div className="w-full h-1.5 bg-[#D5E1CE] rounded-full overflow-hidden">
                  <div className="h-full bg-[#003D2B] rounded-full w-[98%]" />
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="text-[10px] font-mono bg-white text-[#141912] px-2 py-0.5 rounded border border-[#D5E1CE]">
                    VP Sales / CRO
                  </span>
                  <span className="text-[10px] font-mono bg-white text-[#141912] px-2 py-0.5 rounded border border-[#D5E1CE]">
                    50-500 Employees
                  </span>
                  <span className="text-[10px] font-mono bg-white text-[#141912] px-2 py-0.5 rounded border border-[#D5E1CE]">
                    Global / B2B
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* STEP 03 (COMPACT BENTO: 5 COLS) */}
          <Reveal variant="up" delay={200} className="md:col-span-12 lg:col-span-5">
            <div className="h-full rounded-[2rem] bg-white border border-[#D5E1CE] p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#003D2B]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#003D2B] bg-[#E3EDE0] px-2.5 py-1 rounded border border-[#D3E2CF]">
                      Step 03
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#003D2B] bg-[#F4F7EE] px-2 py-0.5 rounded border border-[#D5E1CE]">
                      Goal Alignment
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B]">
                    <Compass className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#141912] mb-2 group-hover:text-[#003D2B] transition-colors">
                  Specify Campaign Objective
                </h3>
                <p className="text-xs sm:text-sm text-[#4E5B49] leading-relaxed mb-5">
                  Select demo booking, event registration, pilot exploration, or strategic discovery.
                </p>
              </div>

              {/* Micro-UI: Interactive Objective Selectors */}
              <div className="rounded-xl bg-[#F4F7EE]/80 border border-[#D5E1CE] p-3.5 space-y-2">
                <div className="text-[11px] font-bold text-[#141912] mb-1">Target Conversion Milestone:</div>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-[#003D2B] text-white text-[10px] font-bold shadow-2xs">
                    <CheckCircle className="w-3.5 h-3.5 text-[#A7F3D0] shrink-0" />
                    <span className="truncate">Demo Booking</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white border border-[#D5E1CE] text-[#4E5B49] text-[10px] font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#CCD8C3] shrink-0" />
                    <span className="truncate">Pilot Exploration</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white border border-[#D5E1CE] text-[#4E5B49] text-[10px] font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#CCD8C3] shrink-0" />
                    <span className="truncate">Event Registration</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-white border border-[#D5E1CE] text-[#4E5B49] text-[10px] font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#CCD8C3] shrink-0" />
                    <span className="truncate">Strategic Discovery</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* STEP 04 (WIDE BENTO: 7 COLS) */}
          <Reveal variant="up" delay={260} className="md:col-span-12 lg:col-span-7">
            <div className="h-full rounded-[2rem] bg-white border border-[#D5E1CE] p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#003D2B]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#003D2B] bg-[#E3EDE0] px-2.5 py-1 rounded border border-[#D3E2CF]">
                      Step 04
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#003D2B] bg-[#F4F7EE] px-2 py-0.5 rounded border border-[#D5E1CE]">
                      Language Studio
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#141912] mb-2 group-hover:text-[#003D2B] transition-colors">
                  Generate Personalized Copy
                </h3>
                <p className="text-xs sm:text-sm text-[#4E5B49] leading-relaxed mb-5">
                  Synthesize context-rich email sequences, icebreakers, and LinkedIn connection notes.
                </p>
              </div>

              {/* Micro-UI: Dynamic Token Preview */}
              <div className="rounded-xl bg-[#F4F7EE]/80 border border-[#D5E1CE] p-3.5 space-y-2">
                <div className="flex items-center justify-between text-[11px] pb-1.5 border-b border-[#D5E1CE]">
                  <span className="font-mono font-semibold text-[#141912]">Subject: Streamlining pipeline discovery for {'{{company}}'}</span>
                  <span className="text-[10px] font-bold text-[#003D2B] bg-[#E3EDE0] px-2 py-0.5 rounded">NLP Active</span>
                </div>
                <div className="text-[11px] text-[#4E5B49] font-sans leading-relaxed">
                  <span className="text-[#141912] font-semibold">&quot;Hi {'{{first_name}}'}, </span>
                  noticed your team recently expanded sales ops. Often when scaling past 50 reps, prospecting tools fracture across separate subscriptions...&quot;
                </div>
                <div className="flex flex-wrap items-center gap-2 pt-1 text-[10px] font-mono text-[#003D2B] font-semibold">
                  <span className="px-2 py-0.5 rounded bg-white border border-[#D5E1CE]">✓ 0% Fluff</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-[#D5E1CE]">✓ Spam-Free Score 99/100</span>
                  <span className="px-2 py-0.5 rounded bg-white border border-[#D5E1CE]">✓ Dynamic Icebreakers</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* STEP 05 (HALF BENTO: 6 COLS) */}
          <Reveal variant="up" delay={320} className="md:col-span-12 lg:col-span-6">
            <div className="h-full rounded-[2rem] bg-white border border-[#D5E1CE] p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#003D2B]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#003D2B] bg-[#E3EDE0] px-2.5 py-1 rounded border border-[#D3E2CF]">
                      Step 05
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#003D2B] bg-[#F4F7EE] px-2 py-0.5 rounded border border-[#D5E1CE]">
                      Visual Studio
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B]">
                    <Palette className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#141912] mb-2 group-hover:text-[#003D2B] transition-colors">
                  Generate Supporting Visuals
                </h3>
                <p className="text-xs sm:text-sm text-[#4E5B49] leading-relaxed mb-5">
                  Produce on-brand marketing creatives, comparison charts, and social teasers.
                </p>
              </div>

              {/* Micro-UI: Visual Canvas Preview */}
              <div className="rounded-xl bg-[#F4F7EE]/80 border border-[#D5E1CE] p-3.5 space-y-2.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold text-[#141912]">Brand-Aligned Marketing Asset</span>
                  <span className="font-mono text-[10px] text-[#4E5B49] bg-white px-2 py-0.5 rounded border border-[#D5E1CE]">1200 × 630 px</span>
                </div>
                <div className="rounded-lg bg-gradient-to-r from-[#003D2B] to-[#141912] p-3 text-white flex items-center justify-between shadow-inner">
                  <div className="space-y-1">
                    <div className="text-[11px] font-bold text-[#A7F3D0]">Genquantaa GTM OS</div>
                    <div className="text-[10px] text-white/90">Autonomous Outbound Engine</div>
                  </div>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/20 text-white font-bold">Retina Render</span>
                </div>
                <div className="flex items-center justify-between text-[10px] text-[#4E5B49] pt-1">
                  <span>Format: WebP / SVG / PNG</span>
                  <span className="text-[#003D2B] font-bold">✓ Ready for Email &amp; Social</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* STEP 06 (HALF BENTO: 6 COLS) */}
          <Reveal variant="up" delay={380} className="md:col-span-12 lg:col-span-6">
            <div className="h-full rounded-[2rem] bg-white border border-[#D5E1CE] p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#003D2B]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#003D2B] bg-[#E3EDE0] px-2.5 py-1 rounded border border-[#D3E2CF]">
                      Step 06
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#003D2B] bg-[#F4F7EE] px-2 py-0.5 rounded border border-[#D5E1CE]">
                      Dispatch Queue
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B]">
                    <Layers className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#141912] mb-2 group-hover:text-[#003D2B] transition-colors">
                  Multi-Channel Preparation
                </h3>
                <p className="text-xs sm:text-sm text-[#4E5B49] leading-relaxed mb-5">
                  Format and stage ready-to-dispatch assets across email, WhatsApp, SMS, and LinkedIn.
                </p>
              </div>

              {/* Micro-UI: Channel Dispatch Staging Matrix */}
              <div className="rounded-xl bg-[#F4F7EE]/80 border border-[#D5E1CE] p-3.5 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-bold text-[#141912] pb-1 border-b border-[#D5E1CE]">
                  <span>Staged Channel Deliverables</span>
                  <span className="text-[#003D2B] font-mono text-[10px]">4/4 Ready</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#D5E1CE]">
                    <span className="text-[#141912] font-medium">Email Cadence</span>
                    <span className="font-mono font-bold text-[#003D2B]">Staged (3x)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#D5E1CE]">
                    <span className="text-[#141912] font-medium">LinkedIn Touch</span>
                    <span className="font-mono font-bold text-[#003D2B]">Staged</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#D5E1CE]">
                    <span className="text-[#141912] font-medium">WhatsApp Cloud</span>
                    <span className="font-mono font-bold text-[#003D2B]">Verified</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#D5E1CE]">
                    <span className="text-[#141912] font-medium">SMS Broadcast</span>
                    <span className="font-mono font-bold text-[#003D2B]">10DLC Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

        </div>

        {/* ————————————————— 2 CAPABILITY CARDS ————————————————— */}
        <Reveal variant="up" delay={120}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            
            {/* Card 1: Language Intelligence */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#D5E1CE] shadow-xs relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B] mb-6">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-[800] text-[#141912] mb-3">Language Intelligence</h3>
              <p className="text-sm text-[#4E5B49] leading-relaxed mb-6">
                Sophisticated linguistic models trained on high-converting B2B outreach strategies, synthesizing contextual copy without generic AI fluff.
              </p>
              <div className="space-y-3">
                {[
                  'Lead research assistance & profile summarization',
                  'Campaign content generation across multi-touch sequences',
                  'Hyper-personalized emails with dynamic value propositions',
                  'Business and prospect technographic analysis',
                  'Reply sentiment analysis & intent classification'
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#141912] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#003D2B] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: Visual Intelligence */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#D5E1CE] shadow-xs relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B] mb-6">
                <ImageIcon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-[800] text-[#141912] mb-3">Visual Intelligence</h3>
              <p className="text-sm text-[#4E5B49] leading-relaxed mb-6">
                Automated image synthesis producing clean, professional marketing collateral formatted for emails, WhatsApp cards, and LinkedIn posts.
              </p>
              <div className="space-y-3">
                {[
                  'High-converting marketing creatives aligned to company color palettes',
                  'Custom campaign graphics and illustrative feature cards',
                  'Optimized LinkedIn post visuals and teaser cards',
                  'Product and service promotional banners for announcement cadences',
                  'Automated aspect-ratio formatting for mobile and desktop preview'
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#141912] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#003D2B] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Reveal>

        {/* ————————————————— SPLIT-SCREEN PRODUCT MOCKUP ————————————————— */}
        <Reveal variant="up" delay={180}>
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D5E1CE] shadow-xs relative">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#D5E1CE] gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <span className="ml-3 text-xs font-bold text-[#141912]">Genquantaa Studio: Live Copy &amp; Creative Split-Screen</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-[#4E5B49] font-medium">Target Persona:</span>
                <button 
                  onClick={() => setActivePersona('enterprise')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer ${activePersona === 'enterprise' ? 'bg-[#003D2B] text-white' : 'bg-[#EAEFE5] text-[#4E5B49]'}`}
                >
                  VP of Sales (SaaS)
                </button>
                <button 
                  onClick={() => setActivePersona('growth')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer ${activePersona === 'growth' ? 'bg-[#003D2B] text-white' : 'bg-[#EAEFE5] text-[#4E5B49]'}`}
                >
                  Head of Growth (Fintech)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Left: Generated Copy Preview */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F4F7EE]/60 border border-[#D5E1CE] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#D5E1CE]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#003D2B]">
                      <FileText className="w-4 h-4 text-[#003D2B]" />
                      <span>Generated Multichannel Email Touch #1</span>
                    </div>
                    <button 
                      onClick={handleCopy}
                      className="flex items-center gap-1 text-[11px] font-semibold text-[#4E5B49] hover:text-[#003D2B] bg-white border border-[#D5E1CE] px-2.5 py-1 rounded cursor-pointer"
                    >
                      {copied ? <Check className="w-3 h-3 text-[#003D2B]" /> : <Copy className="w-3 h-3" />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  <div className="space-y-3 font-mono text-xs text-[#141912]">
                    <div>
                      <span className="font-sans font-bold text-[#4E5B49]">Subject: </span>
                      {activePersona === 'enterprise' 
                        ? 'Streamlining pipeline discovery for CloudScale Dynamics' 
                        : 'Scaling outbound pipeline velocity without tool sprawl'}
                    </div>
                    <div className="pt-2 border-t border-[#D5E1CE] leading-relaxed font-sans text-sm text-[#4E5B49] space-y-2">
                      <p>Hi {'{{first_name}}'},</p>
                      <p>
                        {activePersona === 'enterprise'
                          ? 'Noticed your team recently expanded hiring across engineering and sales ops. Often when organizations cross 50 reps, prospecting tools end up fractured across separate subscriptions.'
                          : 'Saw your recent initiative expanding mid-market accounts. Most growth teams struggle to maintain personalized outreach across email and LinkedIn simultaneously.'}
                      </p>
                      <p>
                        Genquantaa GTM OS consolidates lead discovery, real-time SMTP verification, and multichannel sequencing into one coordinated workspace.
                      </p>
                      <p>
                        Would you be open to a 10-minute preview showing how your team can consolidate this workflow?
                      </p>
                      <p className="text-xs text-[#4E5B49]">Best regards,<br />Alex Vance • Growth Specialist</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#D5E1CE] flex items-center justify-between text-[11px] text-[#4E5B49]">
                  <span className="text-[#003D2B] font-bold">✓ Passed Spam &amp; Deliverability Audit</span>
                  <span className="font-mono">Synthesized in 1.4s</span>
                </div>
              </div>

              {/* Right: Generated Visual Creative Preview */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F4F7EE]/60 border border-[#D5E1CE] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#D5E1CE]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#003D2B]">
                      <ImageIcon className="w-4 h-4 text-[#003D2B]" />
                      <span>Synthesized Campaign Creative Asset</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#4E5B49] bg-white border border-[#D5E1CE] px-2.5 py-0.5 rounded">1200 x 630 px</span>
                  </div>

                  {/* Creative Card Preview */}
                  <div className="rounded-xl overflow-hidden border border-[#D5E1CE] bg-gradient-to-br from-[#003D2B] via-[#022D20] to-[#141912] p-7 relative group text-white">
                    <div className="relative z-10 space-y-4">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#A7E2AF] text-[11px] font-semibold">
                        <Sparkles className="w-3 h-3" />
                        <span>Genquantaa GTM OS</span>
                      </div>
                      <div className="text-xl sm:text-2xl font-[800] text-white leading-tight">
                        Intelligent Outbound.<br />Unified Growth Engine.
                      </div>
                      <div className="flex items-center gap-2 pt-2 text-xs text-white/80 font-mono">
                        <span className="px-2 py-0.5 rounded bg-white/10">3 Growth Engines</span>
                        <span className="px-2 py-0.5 rounded bg-white/10">24 Modules</span>
                        <span className="px-2 py-0.5 rounded bg-white/10">Multi-Channel</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#D5E1CE] flex items-center justify-between text-[11px] text-[#4E5B49]">
                  <span>Vector &amp; Retina Render Ready</span>
                  <span className="text-[#003D2B] font-bold">Status: Staged for Sequences</span>
                </div>
              </div>

            </div>

            {/* Legal Compliance Disclaimer */}
            <div className="mt-6 pt-4 border-t border-[#D5E1CE] text-center text-xs text-[#4E5B49]">
              * Content generation is assisted by machine intelligence. Individual open and conversion rates depend on audience quality, offer resonance, and market conditions. No specific conversion outcomes are guaranteed.
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default GTMOSContentIntelligence;
