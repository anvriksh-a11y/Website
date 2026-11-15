import React, { useState } from 'react';
import { 
  Mail, 
  MessageSquare, 
  Smartphone, 
  PhoneCall, 
  ArrowRight,
  ShieldCheck,
  Zap,
  SlidersHorizontal,
  Wand2,
  Activity,
  PauseCircle,
  Inbox,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import Reveal from '../../Reveal';

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

interface Channel {
  id: string;
  name: string;
  icon: React.ElementType;
  tagline: string;
  description: string;
  status: 'Available' | 'Configurable' | 'Planned';
  metrics: string;
}

export const GTMOSChannels: React.FC = () => {
  const [selectedChannel, setSelectedChannel] = useState<string>('email');

  const channels: Channel[] = [
    {
      id: 'email',
      name: 'Cold & Lifecycle Email',
      icon: Mail,
      tagline: 'High-Volume Deliverability & Warm-up',
      description: 'Staggered outbound sequences with automated sender rotation, domain warm-up, and real-time bounce protection.',
      status: 'Available',
      metrics: 'Multi-inbox rotation • SPF/DKIM/DMARC checks'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn Direct Outreach',
      icon: LinkedinIcon,
      tagline: 'Authentic Social Engagement Cadence',
      description: 'Profile visits, personalized connection requests, and conversational in-mail touches with natural pacing safeguards.',
      status: 'Configurable',
      metrics: 'Configurable safety thresholds • Tailored icebreakers'
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp Business API',
      icon: MessageSquare,
      tagline: 'High-Open Direct Conversational Messaging',
      description: 'Official WhatsApp Cloud API integration with verified sender templates, rich media attachments, and interactive CTA buttons.',
      status: 'Available',
      metrics: 'Official Meta API • Interactive quick replies'
    },
    {
      id: 'sms',
      name: 'Conversational SMS / MMS',
      icon: Smartphone,
      tagline: 'Instant Alert & Event Activation',
      description: '10DLC compliant transactional and event reminder messages with high open rates and instant link tracking.',
      status: 'Configurable',
      metrics: 'Carrier compliant • Shortcode & local DID support'
    },
    {
      id: 'voice',
      name: 'AI Voice Calling',
      icon: PhoneCall,
      tagline: 'Low-Latency Conversational Discovery',
      description: 'Real-time neural voice agents capable of conducting natural qualification calls, answering company queries, and routing to sales.',
      status: 'Configurable',
      metrics: 'Sub-600ms latency • Human transfer capability'
    }
  ];

  const current = channels.find(c => c.id === selectedChannel) || channels[0];

  return (
    <section 
      id="channels-section"
      className="py-20 sm:py-28 bg-[#F4F7EE] text-[#141912] relative overflow-hidden border-t border-[#D5E1CE] select-none"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <Reveal variant="up" className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] text-[#003D2B] text-xs font-semibold mb-4">
            <Zap className="w-3.5 h-3.5 text-[#003D2B]" />
            <span>Unified Multi-Touch Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[800] tracking-tight leading-[1.12] text-[#141912] mb-6">
            Reach Your Customers{' '}
            <span className="text-[#003D2B]">
              Where They Already Are.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#4E5B49] leading-relaxed max-w-3xl mx-auto">
            Coordinate seamless outreach across supported email, social, messaging, and voice channels 
            from a single command center without tab switching or fragmented data.
          </p>
        </Reveal>

        {/* ————————————————— 6 FEATURE HIGHLIGHTS BENTO BOX ————————————————— */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 mb-16 sm:mb-20">
          
          {/* CARD 1: Campaign Management (WIDE BENTO: 7 COLS) */}
          <Reveal variant="up" delay={80} className="md:col-span-12 lg:col-span-7">
            <div className="h-full rounded-[2rem] bg-white border border-[#D5E1CE] p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#003D2B]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#003D2B] bg-[#E3EDE0] px-2.5 py-1 rounded-full border border-[#D3E2CF]">
                    Central Orchestration
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B]">
                    <SlidersHorizontal className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#141912] mb-2 group-hover:text-[#003D2B] transition-colors">
                  Campaign Management
                </h3>
                <p className="text-xs sm:text-sm text-[#4E5B49] leading-relaxed mb-5">
                  Centralized orchestration across all channels from a single operating dashboard.
                </p>
              </div>

              {/* Micro-UI: Channel Orchestration Hub */}
              <div className="rounded-xl bg-[#F4F7EE]/80 border border-[#D5E1CE] p-3.5 space-y-2">
                <div className="flex items-center justify-between text-[11px] pb-1.5 border-b border-[#D5E1CE]">
                  <span className="font-bold text-[#141912]">Synchronized Outreach Status</span>
                  <span className="text-[#003D2B] font-mono text-[10px] font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live Sync
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px]">
                  <div className="p-2 rounded-lg bg-white border border-[#D5E1CE] text-center">
                    <div className="font-bold text-[#141912]">Email</div>
                    <div className="text-[#003D2B] font-mono font-semibold">Active</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-[#D5E1CE] text-center">
                    <div className="font-bold text-[#141912]">LinkedIn</div>
                    <div className="text-[#003D2B] font-mono font-semibold">Active</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-[#D5E1CE] text-center">
                    <div className="font-bold text-[#141912]">WhatsApp</div>
                    <div className="text-[#003D2B] font-mono font-semibold">Active</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-[#D5E1CE] text-center">
                    <div className="font-bold text-[#141912]">AI Voice</div>
                    <div className="text-[#003D2B] font-mono font-semibold">Ready</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* CARD 2: Personalized Copy (COMPACT BENTO: 5 COLS) */}
          <Reveal variant="up" delay={140} className="md:col-span-12 lg:col-span-5">
            <div className="h-full rounded-[2rem] bg-white border border-[#D5E1CE] p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#003D2B]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#003D2B] bg-[#E3EDE0] px-2.5 py-1 rounded-full border border-[#D3E2CF]">
                    Dynamic Intelligence
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B]">
                    <Wand2 className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#141912] mb-2 group-hover:text-[#003D2B] transition-colors">
                  Personalized Copy
                </h3>
                <p className="text-xs sm:text-sm text-[#4E5B49] leading-relaxed mb-5">
                  Contextual tailoring generated by AI synthesizing prospect research.
                </p>
              </div>

              {/* Micro-UI: Personalization Token Chip */}
              <div className="rounded-xl bg-[#F4F7EE]/80 border border-[#D5E1CE] p-3.5 space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#4E5B49] font-medium">Context Match Score</span>
                  <span className="font-mono font-bold text-[#003D2B]">99.2%</span>
                </div>
                <div className="w-full h-1.5 bg-[#D5E1CE] rounded-full overflow-hidden">
                  <div className="h-full bg-[#003D2B] rounded-full w-[99%]" />
                </div>
                <div className="p-2 rounded-lg bg-white border border-[#D5E1CE] text-[10px] text-[#141912] font-mono truncate">
                  {"{{prospect_initiative}}"} → Tailored Hook
                </div>
              </div>
            </div>
          </Reveal>

          {/* CARD 3: Engagement Visibility (HALF BENTO: 6 COLS) */}
          <Reveal variant="up" delay={200} className="md:col-span-12 lg:col-span-6">
            <div className="h-full rounded-[2rem] bg-white border border-[#D5E1CE] p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#003D2B]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#003D2B] bg-[#E3EDE0] px-2.5 py-1 rounded-full border border-[#D3E2CF]">
                    Unified Observability
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B]">
                    <Activity className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#141912] mb-2 group-hover:text-[#003D2B] transition-colors">
                  Engagement Visibility
                </h3>
                <p className="text-xs sm:text-sm text-[#4E5B49] leading-relaxed mb-5">
                  Single pane of glass across customer touches and real-time interaction logs.
                </p>
              </div>

              {/* Micro-UI: Event Activity Feed */}
              <div className="rounded-xl bg-[#F4F7EE]/80 border border-[#D5E1CE] p-3 space-y-1.5 text-[10px]">
                <div className="flex items-center justify-between p-1.5 rounded-lg bg-white border border-[#D5E1CE]">
                  <span className="text-[#141912] font-medium">10:14 AM • Email Delivered &amp; Opened</span>
                  <span className="text-[#003D2B] font-mono font-bold">VP of Ops</span>
                </div>
                <div className="flex items-center justify-between p-1.5 rounded-lg bg-white border border-[#D5E1CE]">
                  <span className="text-[#141912] font-medium">10:28 AM • LinkedIn Deck Clicked</span>
                  <span className="text-[#003D2B] font-mono font-bold">Slide 4</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* CARD 4: Follow-Up Management (HALF BENTO: 6 COLS) */}
          <Reveal variant="up" delay={260} className="md:col-span-12 lg:col-span-6">
            <div className="h-full rounded-[2rem] bg-white border border-[#D5E1CE] p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#003D2B]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#003D2B] bg-[#E3EDE0] px-2.5 py-1 rounded-full border border-[#D3E2CF]">
                    Cadence Protection
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B]">
                    <PauseCircle className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#141912] mb-2 group-hover:text-[#003D2B] transition-colors">
                  Follow-Up Management
                </h3>
                <p className="text-xs sm:text-sm text-[#4E5B49] leading-relaxed mb-5">
                  Smart cadence automatically stops on reply detection to prevent awkward touchpoints.
                </p>
              </div>

              {/* Micro-UI: Smart Cadence Guard */}
              <div className="rounded-xl bg-[#F4F7EE]/80 border border-[#D5E1CE] p-3.5 space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold text-[#141912]">Auto-Stop on Reply</span>
                  <span className="text-[10px] font-mono font-bold bg-[#003D2B] text-white px-2 py-0.5 rounded">
                    ARMED &amp; ACTIVE
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-[#4E5B49]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#003D2B] shrink-0" />
                  <span>Zero duplicate follow-ups sent once prospect engages</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* CARD 5: Smart Inbox (COMPACT BENTO: 5 COLS) */}
          <Reveal variant="up" delay={320} className="md:col-span-12 lg:col-span-5">
            <div className="h-full rounded-[2rem] bg-white border border-[#D5E1CE] p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#003D2B]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#003D2B] bg-[#E3EDE0] px-2.5 py-1 rounded-full border border-[#D3E2CF]">
                    Unified Response
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B]">
                    <Inbox className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#141912] mb-2 group-hover:text-[#003D2B] transition-colors">
                  Smart Inbox
                </h3>
                <p className="text-xs sm:text-sm text-[#4E5B49] leading-relaxed mb-5">
                  Consolidated stream for all incoming replies across Email, WhatsApp, and LinkedIn.
                </p>
              </div>

              {/* Micro-UI: Consolidated Stream Feed */}
              <div className="rounded-xl bg-[#F4F7EE]/80 border border-[#D5E1CE] p-3.5 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-bold text-[#141912]">
                  <span>Consolidated Queue</span>
                  <span className="text-[10px] font-mono text-[#003D2B] bg-[#E3EDE0] px-2 py-0.5 rounded font-bold">
                    All Channels
                  </span>
                </div>
                <div className="space-y-1.5 text-[10px]">
                  <div className="p-1.5 rounded-lg bg-white border border-[#D5E1CE] flex items-center justify-between">
                    <span className="text-[#141912] truncate">Email • Sarah J. (&quot;Let&apos;s book 15m&quot;)</span>
                    <span className="text-emerald-700 font-bold shrink-0">Demo</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-white border border-[#D5E1CE] flex items-center justify-between">
                    <span className="text-[#141912] truncate">WhatsApp • Marcus T. (&quot;Available Thu&quot;)</span>
                    <span className="text-emerald-700 font-bold shrink-0">Meeting</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* CARD 6: Reply Sentiment (WIDE BENTO: 7 COLS) */}
          <Reveal variant="up" delay={380} className="md:col-span-12 lg:col-span-7">
            <div className="h-full rounded-[2rem] bg-white border border-[#D5E1CE] p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#003D2B]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#003D2B] bg-[#E3EDE0] px-2.5 py-1 rounded-full border border-[#D3E2CF]">
                    Intent Recognition
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#141912] mb-2 group-hover:text-[#003D2B] transition-colors">
                  Reply Sentiment
                </h3>
                <p className="text-xs sm:text-sm text-[#4E5B49] leading-relaxed mb-5">
                  Real-time NLP detection of buying intent, objections, and meeting scheduling.
                </p>
              </div>

              {/* Micro-UI: Sentiment Intent Classification Radar */}
              <div className="rounded-xl bg-[#F4F7EE]/80 border border-[#D5E1CE] p-3.5 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-bold text-[#141912] pb-1 border-b border-[#D5E1CE]">
                  <span>Intent Categorization</span>
                  <span className="text-[#003D2B] font-mono text-[10px]">Sub-Second NLP</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-[10px]">
                  <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-center">
                    <div className="text-emerald-800 font-bold">Positive Intent</div>
                    <div className="text-emerald-700 font-mono font-bold">84% Rate</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-[#D5E1CE] text-center">
                    <div className="text-[#141912] font-medium">Info Request</div>
                    <div className="text-[#4E5B49] font-mono">12% Rate</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-[#D5E1CE] text-center">
                    <div className="text-[#141912] font-medium">Out of Office</div>
                    <div className="text-[#4E5B49] font-mono">4% Rescheduled</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

        </div>

        {/* Channel Selector Cards */}
        <Reveal variant="up" delay={120}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
            {channels.map((chan) => {
              const Icon = chan.icon;
              const isSelected = selectedChannel === chan.id;
              return (
                <button
                  key={chan.id}
                  onClick={() => setSelectedChannel(chan.id)}
                  className={`p-5 rounded-2xl text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected 
                      ? 'bg-white border-2 border-[#003D2B] shadow-md scale-[1.02]' 
                      : 'bg-white/80 border-[#D5E1CE] hover:border-[#003D2B]/50 hover:bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#E3EDE0] border border-[#D3E2CF] text-[#003D2B]">
                        {chan.status}
                      </span>
                    </div>
                    <div className="text-sm font-bold text-[#141912] mb-1">{chan.name}</div>
                    <div className="text-xs text-[#4E5B49] line-clamp-2">{chan.tagline}</div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#D5E1CE] flex items-center justify-between text-[11px] text-[#003D2B] font-bold">
                    <span>View channel setup</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Channel Detail & Multichannel Dashboard Mockup */}
        <Reveal variant="up" delay={180}>
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D5E1CE] shadow-xs">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#D5E1CE]">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-[#E3EDE0] border border-[#D3E2CF] text-[#003D2B]">
                  Channel Status: {current.status}
                </span>
                <span className="text-xs text-[#4E5B49] font-medium">• Verified Product Capability</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-[800] text-[#141912]">
                {current.name} Orchestration Hub
              </h3>
              <p className="text-sm text-[#4E5B49] mt-1">{current.description}</p>
            </div>

            <div className="px-4 py-2 rounded-xl bg-[#F4F7EE] border border-[#D5E1CE] text-xs text-[#141912] font-mono">
              <span className="text-[#003D2B] font-bold">Protocol Spec: </span>
              {current.metrics}
            </div>
          </div>

          {/* Multichannel Simulation Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="p-4 rounded-xl bg-[#F4F7EE]/60 border border-[#D5E1CE]">
              <div className="text-xs font-bold text-[#4E5B49] uppercase mb-3 flex items-center justify-between">
                <span>Sequence Step</span>
                <span className="text-[#003D2B]">Step 1 • Immediate</span>
              </div>
              <div className="text-sm font-bold text-[#141912] mb-1">Cold Email Primer</div>
              <p className="text-xs text-[#4E5B49] mb-3">Delivered to verified work inbox with personalized icebreaker referencing prospect's quarterly announcement.</p>
              <div className="text-[11px] text-[#003D2B] font-mono font-bold">Status: Delivered (100% inbox rate)</div>
            </div>

            <div className="p-4 rounded-xl bg-[#F4F7EE]/60 border border-[#D5E1CE]">
              <div className="text-xs font-bold text-[#4E5B49] uppercase mb-3 flex items-center justify-between">
                <span>Sequence Step</span>
                <span className="text-[#2D452C]">Step 2 • Day 2</span>
              </div>
              <div className="text-sm font-bold text-[#141912] mb-1">LinkedIn Profile Touch</div>
              <p className="text-xs text-[#4E5B49] mb-3">Safe profile view and connection note connecting with prospect on industry trends.</p>
              <div className="text-[11px] text-[#003D2B] font-mono font-bold">Status: Connection Accepted</div>
            </div>

            <div className="p-4 rounded-xl bg-[#F4F7EE]/60 border border-[#D5E1CE]">
              <div className="text-xs font-bold text-[#4E5B49] uppercase mb-3 flex items-center justify-between">
                <span>Sequence Step</span>
                <span className="text-[#003D2B]">Step 3 • Day 4</span>
              </div>
              <div className="text-sm font-bold text-[#141912] mb-1">Direct Message / Follow-up</div>
              <p className="text-xs text-[#4E5B49] mb-3">WhatsApp conversational message or email reminder sharing a 1-page case study.</p>
              <div className="text-[11px] text-[#003D2B] font-mono font-bold">Status: Meeting Link Clicked</div>
            </div>

          </div>

          {/* Verified status note */}
          <div className="mt-6 pt-4 border-t border-[#D5E1CE] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#4E5B49]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#003D2B]" />
              Available integrations are validated directly against current platform connectors.
            </span>
            <span>Configurable channels require customer API credentials.</span>
          </div>

        </div>
      </Reveal>

      </div>
    </section>
  );
};

export default GTMOSChannels;
