import React, { useState, useEffect, useRef } from 'react';
import { 
  Compass, 
  Globe, 
  MailCheck, 
  MessageCircle, 
  Target, 
  Wand2, 
  FileText, 
  Image as ImageIcon, 
  Send, 
  PhoneCall, 
  Activity, 
  HeartHandshake, 
  BarChart3, 
  Bot, 
  ShieldCheck, 
  CheckCircle2,
  Workflow,
  Maximize2,
  X,
  Layers,
  Sparkles,
  ArrowDown
} from 'lucide-react';
import Reveal from '../../Reveal';

interface AgentNode {
  id: string;
  name: string;
  icon: React.ElementType;
  tag: string;
  brief: string;
  detail: string;
}

interface WorkflowStage {
  id: number;
  stageName: string;
  tagline: string;
  responsibilities: string[];
  metricLabel: string;
  metricValue: string;
  agents: AgentNode[];
}

export const GTMOSAgentWorkflow: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<number>(1);
  const [hoveredAgent, setHoveredAgent] = useState<AgentNode | null>(null);
  const [isPipelineLightboxOpen, setIsPipelineLightboxOpen] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsPipelineLightboxOpen(false);
      }
    };

    if (isPipelineLightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isPipelineLightboxOpen]);

  // Observer to track which card is currently active as the user scrolls through the parallax stack
  useEffect(() => {
    const handleScroll = () => {
      let currentActive = 1;
      cardRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // If the card has reached near the top sticky offset
        if (rect.top <= 260 && rect.bottom > 200) {
          currentActive = index + 1;
        }
      });
      setActiveStageId(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStage = (id: number) => {
    const el = document.getElementById(`stage-stack-card-${id}`);
    if (el) {
      // Offset for sticky navigation header
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 120;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveStageId(id);
    }
  };

  const stages: WorkflowStage[] = [
    {
      id: 1,
      stageName: 'Stage 1: Prospect Discovery',
      tagline: 'Autonomous Account Identification & Enrichment',
      responsibilities: [
        'Web & registry searching for matching company firmographics',
        'Technographic stack detection & verified executive identification',
        'Continuous ICP fit scoring and account prioritization'
      ],
      metricLabel: 'Discovery Velocity',
      metricValue: '500+ Accounts/wk',
      agents: [
        {
          id: 'lead-finder',
          name: 'AI Lead Discovery Agent',
          icon: Compass,
          tag: 'Web & Registry Scan',
          brief: 'Searches public business registries and company directories.',
          detail: 'Gathers high-relevance company accounts based on target geography, headcount, industry, and funding signals.'
        },
        {
          id: 'enricher',
          name: 'Data Enrichment Agent',
          icon: Globe,
          tag: 'Technographic Appending',
          brief: 'Enriches raw domains with verified decision-maker records.',
          detail: 'Appends executive titles, verified corporate emails, department hierarchies, and verified LinkedIn URLs.'
        },
        {
          id: 'icp-scorer',
          name: 'ICP Scoring Agent',
          icon: Target,
          tag: 'Algorithmic Fit Rank',
          brief: 'Calculates algorithmic match percentages against ideal criteria.',
          detail: 'Ranks incoming prospects so outbound resources focus exclusively on high-conversion accounts.'
        }
      ]
    },
    {
      id: 2,
      stageName: 'Stage 2: Validation & Hygiene',
      tagline: 'Zero-Bounce Deliverability & Sender Reputation Protection',
      responsibilities: [
        'Real-time multi-tier SMTP pinging and MX record checks',
        'Syntax parsing, disposable domain filtering, and spam trap avoidance',
        'Continuous deliverability health and sender score monitoring'
      ],
      metricLabel: 'Inbox Deliverability',
      metricValue: '99.4% Verified Clean',
      agents: [
        {
          id: 'email-verif',
          name: 'Email Verification Agent',
          icon: MailCheck,
          tag: 'SMTP & MX Handshake',
          brief: 'Validates SMTP handshakes and inbox deliverability.',
          detail: 'Eliminates hard bounces and protects sender reputation by verifying live mail server acceptance before sending.'
        },
        {
          id: 'wa-verif',
          name: 'WhatsApp Verification Agent',
          icon: MessageCircle,
          tag: 'Cloud API Lookup',
          brief: 'Checks WhatsApp account existence on mobile numbers.',
          detail: 'Ensures WhatsApp broadcast and conversational messages are dispatched solely to active, verified numbers.'
        }
      ]
    },
    {
      id: 3,
      stageName: 'Stage 3: Creative & Copy Studio',
      tagline: 'Context-Aware Multichannel Message & Asset Synthesis',
      responsibilities: [
        'Synthesizes customized email subject lines, icebreakers, and bodies',
        'Generates branded marketing visuals, comparison banners, and cards',
        'Structures personalized LinkedIn and WhatsApp touchpoints'
      ],
      metricLabel: 'Synthesis Engine',
      metricValue: 'Contextual Multi-variant Copy',
      agents: [
        {
          id: 'copywriter',
          name: 'AI Copy Generation Agent',
          icon: Wand2,
          tag: 'Contextual Copywriting',
          brief: 'Generates persona-specific persuasive messaging.',
          detail: 'Produces personalized cold email sequences, LinkedIn connection notes, and objection-handling scripts.'
        },
        {
          id: 'designer',
          name: 'AI Creative Designer Agent',
          icon: ImageIcon,
          tag: 'Visual Asset Generator',
          brief: 'Renders on-brand visual creatives for campaigns.',
          detail: 'Creates branded graphics, infographic slides, and social teaser cards aligned with your color guidelines.'
        },
        {
          id: 'content-curator',
          name: 'Content Formatter Agent',
          icon: FileText,
          tag: 'Readability & CTA Check',
          brief: 'Formats and checks message readability across screens.',
          detail: 'Optimizes line lengths, mobile responsive layouts, and call-to-action placement for maximal click-through.'
        }
      ]
    },
    {
      id: 4,
      stageName: 'Stage 4: Coordinated Execution',
      tagline: 'Intelligent Multichannel Sequence Delivery',
      responsibilities: [
        'Dispatches staggered emails with natural jitter to preserve domain health',
        'Coordinates LinkedIn connection requests and direct follow-ups',
        'Triggers contextual SMS, WhatsApp notifications, and autonomous voice calls'
      ],
      metricLabel: 'Outreach Cadence',
      metricValue: 'Synchronized Multi-Touch',
      agents: [
        {
          id: 'email-dispatcher',
          name: 'Smart Email Campaign Agent',
          icon: Send,
          tag: 'Domain Rotation & Warmup',
          brief: 'Controls scheduled sending and warmup throttling.',
          detail: 'Staggers sending times across secondary domains with intelligent rotation to maintain 99%+ inbox placement.'
        },
        {
          id: 'wa-sender',
          name: 'WhatsApp Campaign Agent',
          icon: MessageCircle,
          tag: 'Interactive Quick-Replies',
          brief: 'Delivers personalized conversational messaging.',
          detail: 'Sends approved media, product brochures, and interactive quick-reply prompts directly via WhatsApp API.'
        },
        {
          id: 'voice-caller',
          name: 'AI Voice Calling Agent',
          icon: PhoneCall,
          tag: 'Sub-500ms Real-time Voice',
          brief: 'Places low-latency outbound calls with human intonation.',
          detail: 'Converses fluently in real-time, qualifies buyer timing, and books calendar demos directly into your CRM.'
        }
      ]
    },
    {
      id: 5,
      stageName: 'Stage 5: Intelligence & Optimization',
      tagline: 'Full-Loop Feedback, Intent Recognition & Adaptive Scaling',
      responsibilities: [
        'Classifies incoming replies by sentiment and buying urgency',
        'Halts automated cadences instantly when a prospect responds',
        'Computes campaign attribution, channel conversion rates, and ROI metrics'
      ],
      metricLabel: 'Response Routing',
      metricValue: 'Instant Buying Intent NLP',
      agents: [
        {
          id: 'intent-classifier',
          name: 'Reply Sentiment Agent',
          icon: Activity,
          tag: 'Sentiment & Objection NLP',
          brief: 'Categorizes incoming replies into interested, objection, or unsub.',
          detail: 'Identifies urgency and automatically notifies your account executive via Slack or email for immediate high-touch follow-up.'
        },
        {
          id: 'crm-sync',
          name: 'CRM Lifecycle Agent',
          icon: HeartHandshake,
          tag: 'Bi-Directional CRM Sync',
          brief: 'Updates pipeline stages across your tech stack.',
          detail: 'Syncs lead status, conversation history, and meeting timestamps into HubSpot, Salesforce, or Genquantaa CRM.'
        },
        {
          id: 'growth-optimizer',
          name: 'Campaign Analytics Agent',
          icon: BarChart3,
          tag: 'Funnel Attribution & ROI',
          brief: 'Analyzes engagement metrics to optimize future runs.',
          detail: 'Highlights top-performing subject lines, ideal outreach times, and high-converting audience segments.'
        }
      ]
    }
  ];

  return (
    <section 
      id="workflow-section"
      className="py-20 sm:py-28 bg-[#F4F7EE] text-[#141912] relative border-t border-[#D5E1CE] select-none"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Background Soft Glows (Clipped safely without clipping sticky children) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
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
        <Reveal variant="up" className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] text-[#003D2B] text-xs font-semibold mb-4 shadow-2xs">
            <Workflow className="w-3.5 h-3.5 text-[#003D2B]" />
            <span>Autonomous Multi-Agent Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[800] tracking-tight leading-[1.12] text-[#141912] mb-6">
            Multiple AI Agents.{' '}
            <span className="text-[#003D2B]">
              One Coordinated Growth Workflow.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#4E5B49] leading-relaxed max-w-3xl mx-auto">
            Genquantaa GTM OS orchestrates specialized AI agents across five continuous lifecycle stages. 
            Scroll down to watch each stage card stack dynamically as the acquisition pipeline progresses.
          </p>

          {/* Configurable Governance Badge */}
          <div className="inline-flex items-center gap-2 mt-5 px-4 py-1.5 rounded-full bg-white border border-[#D5E1CE] shadow-2xs text-xs text-[#4E5B49] font-medium">
            <ShieldCheck className="w-4 h-4 text-[#003D2B]" />
            <span>Coordinated AI automation with configurable human-in-the-loop oversight</span>
          </div>
        </Reveal>

        {/* ————————————————— 10-STEP CONTINUOUS WORKFLOW INFOGRAPHIC ————————————————— */}
        <Reveal variant="up" delay={100}>
          <div className="mb-14 rounded-3xl bg-white border border-[#D5E1CE] shadow-xs p-3.5 sm:p-5 relative overflow-hidden">
            {/* Bar Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#D5E1CE] text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E3EDE0] border border-[#CCD8C3]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#E3EDE0] border border-[#CCD8C3]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#E3EDE0] border border-[#CCD8C3]" />
                <span className="font-bold text-[#141912] ml-1.5 hidden sm:inline">
                  End-to-End Customer Acquisition Pipeline
                </span>
                <span className="font-bold text-[#141912] ml-1 sm:hidden">
                  Pipeline Progression
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] font-mono font-bold text-[#003D2B] bg-[#E3EDE0] px-2.5 py-1 rounded-full border border-[#D3E2CF]">
                  10 Coordinated Steps
                </span>
                <button
                  type="button"
                  onClick={() => setIsPipelineLightboxOpen(true)}
                  className="p-1.5 text-[#4E5B49] hover:text-[#003D2B] hover:bg-[#E3EDE0] rounded-lg transition-colors cursor-pointer"
                  title="View Fullscreen"
                  aria-label="Expand 10-step pipeline diagram"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Interactive Image Canvas */}
            <div 
              className="relative rounded-2xl overflow-hidden bg-[#FAFBF7] border border-[#D5E1CE]/80 cursor-zoom-in group"
              onClick={() => setIsPipelineLightboxOpen(true)}
            >
              <img
                src="/gtm_pipeline_10_steps.jpg"
                alt="End-to-End Customer Acquisition Pipeline - 10 Coordinated Steps - Genquantaa GTM OS"
                className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover:scale-[1.003]"
                loading="eager"
              />

              {/* Hover Hint Overlay */}
              <div className="absolute inset-x-0 bottom-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="px-3.5 py-1.5 rounded-full bg-[#003D2B]/90 text-white text-xs font-semibold shadow-md backdrop-blur-md flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to inspect 10-step pipeline in full resolution</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ————————————————— STICKY STAGE QUICK-NAVIGATOR (SYNCS WITH SCROLL) ————————————————— */}
        <div className="sticky top-16 sm:top-20 z-30 mb-10 py-2 sm:py-2.5 px-3 rounded-2xl bg-[#F4F7EE]/92 backdrop-blur-xl border border-[#CCD8C3]/80 shadow-[0_8px_24px_rgba(20,25,18,0.06)]">
          <div className="flex items-center justify-between gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none py-0.5">
            <div className="hidden md:flex items-center gap-1.5 text-xs font-bold text-[#003D2B] px-2 shrink-0">
              <Layers className="w-3.5 h-3.5 text-[#003D2B]" />
              <span className="uppercase tracking-wider text-[11px]">Pipeline Stages:</span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 flex-1 justify-start md:justify-end overflow-x-auto scrollbar-none">
              {stages.map((stage) => {
                const isActive = activeStageId === stage.id;
                return (
                  <button
                    key={stage.id}
                    onClick={() => scrollToStage(stage.id)}
                    className={`flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                      isActive 
                        ? 'bg-[#003D2B] text-white shadow-sm scale-[1.02]' 
                        : 'bg-white/80 text-[#4E5B49] hover:text-[#141912] hover:bg-white border border-[#D5E1CE]'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#A7F3D0] animate-pulse' : 'bg-[#CCD8C3]'}`} />
                    <span>Stage {stage.id}: {stage.stageName.split(': ')[1]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ————————————————— PARALLAX STACKING CARDS DECK CONTAINER ————————————————— */}
        <div className="relative space-y-12 sm:space-y-16 pb-16">
          {stages.map((stage, index) => {
            const isCurrentActive = activeStageId === stage.id;
            
            // Tiered sticky offset: each subsequent card sticks slightly below the previous header
            // creating the realistic layered tabbed folder deck effect
            const desktopStickyTop = 90 + index * 34; // 90px, 124px, 158px, 192px, 226px
            const mobileStickyTop = 75 + index * 24;  // 75px, 99px, 123px, 147px, 171px

            return (
              <div
                key={stage.id}
                id={`stage-stack-card-${stage.id}`}
                ref={(el) => { cardRefs.current[index] = el; }}
                className="sticky transition-all duration-300"
                style={{
                  top: `max(${mobileStickyTop}px, calc(${desktopStickyTop}px - 0vw))`,
                  zIndex: 10 + index,
                  marginBottom: index === stages.length - 1 ? '0px' : '64px'
                }}
              >
                {/* Stack Card Main Shell */}
                <div 
                  className={`rounded-3xl sm:rounded-[2.5rem] bg-white border transition-all duration-300 shadow-[0_20px_50px_-15px_rgba(20,25,18,0.14)] p-6 sm:p-8 lg:p-10 relative overflow-hidden group ${
                    isCurrentActive 
                      ? 'border-[#003D2B]/50 ring-2 ring-[#003D2B]/20' 
                      : 'border-[#D5E1CE]'
                  }`}
                  style={{
                    boxShadow: `0 -4px 24px rgba(0, 61, 43, 0.04), 0 ${16 + index * 4}px ${40 + index * 6}px -12px rgba(20, 25, 18, ${0.12 + index * 0.02})`
                  }}
                >
                  {/* Top Ambient Glow matching brand palette */}
                  <div 
                    className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity" 
                    style={{ background: 'radial-gradient(circle, #E3EDE0 0%, transparent 70%)', filter: 'blur(70px)' }} 
                  />

                  {/* ========================================================================= */}
                  {/* STACK CARD HEADER TAB (Stays visible even when cards stack underneath)      */}
                  {/* ========================================================================= */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-7 border-b border-[#D5E1CE] relative z-10">
                    
                    {/* Left: Stage Title & Tagline */}
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-2">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#003D2B] text-white shadow-2xs">
                          Stage 0{stage.id} / 05
                        </span>
                        <span className="text-xs font-semibold text-[#003D2B] bg-[#E3EDE0] px-3 py-1 rounded-full border border-[#D3E2CF]">
                          {stage.tagline}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-[800] text-[#141912] tracking-tight">
                        {stage.stageName.split(': ')[1]}
                      </h3>
                    </div>

                    {/* Right: Active Agents Status Pill */}
                    <div className="flex items-center gap-2.5 shrink-0">
                      <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3EDE0] text-[#003D2B] border border-[#D3E2CF] text-xs font-bold shadow-2xs">
                        <Bot className="w-4 h-4 text-[#003D2B]" />
                        <span>{stage.agents.length} Specialized Agents Active</span>
                      </div>

                      <div className="hidden lg:flex items-center justify-center w-8 h-8 rounded-full bg-[#F4F7EE] border border-[#D5E1CE] text-[#6B7866] text-xs font-mono font-bold">
                        {index + 1}
                      </div>
                    </div>

                  </div>

                  {/* ========================================================================= */}
                  {/* TWO-COLUMN STAGE WORKSPACE: LEFT RESPONSIBILITIES, RIGHT AGENT MATRIX     */}
                  {/* ========================================================================= */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start relative z-10">
                    
                    {/* LEFT COLUMN: STAGE CORE RESPONSIBILITIES & PERFORMANCE CARD */}
                    <div className="lg:col-span-4 rounded-2xl bg-[#F4F7EE]/80 border border-[#D5E1CE] p-5 sm:p-6 flex flex-col justify-between h-full shadow-inner">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#003D2B]">
                            Core Stage Responsibilities
                          </span>
                          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                        </div>

                        <ul className="space-y-3 mb-6">
                          {stage.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2.5 text-xs text-[#141912] leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-[#003D2B] shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Stage Metric Capsule */}
                      <div className="pt-4 border-t border-[#D5E1CE]/80">
                        <div className="p-3 rounded-xl bg-white border border-[#D5E1CE] shadow-2xs flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5 text-[#003D2B]" />
                            <span className="text-[11px] font-bold text-[#4E5B49]">{stage.metricLabel}:</span>
                          </div>
                          <span className="text-xs font-extrabold text-[#003D2B] font-mono">
                            {stage.metricValue}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT COLUMN: SPECIALIZED MULTI-AGENT CARDS */}
                    <div className={`lg:col-span-8 grid grid-cols-1 gap-4 ${
                      stage.agents.length === 2 
                        ? 'sm:grid-cols-2' 
                        : 'sm:grid-cols-2 xl:grid-cols-3'
                    }`}>
                      {stage.agents.map((agent) => {
                        const Icon = agent.icon;
                        const isHovered = hoveredAgent?.id === agent.id;

                        return (
                          <div
                            key={agent.id}
                            onMouseEnter={() => setHoveredAgent(agent)}
                            onMouseLeave={() => setHoveredAgent(null)}
                            className={`p-5 rounded-2xl bg-[#FAFBF7] border transition-all duration-300 group/agent flex flex-col justify-between cursor-pointer relative overflow-hidden ${
                              isHovered 
                                ? 'border-[#003D2B] bg-white shadow-lg -translate-y-1' 
                                : 'border-[#D5E1CE] hover:border-[#003D2B]/60 hover:bg-white hover:shadow-md'
                            }`}
                          >
                            <div>
                              {/* Top Agent Bar */}
                              <div className="flex items-center justify-between mb-4">
                                <div className="w-11 h-11 rounded-xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B] group-hover/agent:scale-110 group-hover/agent:bg-[#003D2B] group-hover/agent:text-white transition-all shadow-2xs">
                                  <Icon className="w-5 h-5" />
                                </div>

                                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-[#D5E1CE] text-[10px] text-[#003D2B] font-mono font-bold">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                                  <span>Active</span>
                                </div>
                              </div>

                              {/* Agent Title & Tag */}
                              <div className="mb-2">
                                <span className="text-[10px] uppercase font-bold tracking-wider text-[#6B7866]">
                                  {agent.tag}
                                </span>
                                <h4 className="text-sm sm:text-base font-extrabold text-[#141912] group-hover/agent:text-[#003D2B] transition-colors mt-0.5">
                                  {agent.name}
                                </h4>
                              </div>

                              {/* Brief summary */}
                              <p className="text-xs text-[#4E5B49] leading-relaxed mb-4">
                                {agent.brief}
                              </p>
                            </div>

                            {/* Capability Drawer */}
                            <div className="pt-3 border-t border-[#D5E1CE]/80 text-[11px] text-[#003D2B] font-medium leading-relaxed bg-[#F4F7EE]/60 p-2.5 rounded-lg">
                              <span>{agent.detail}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                  </div>

                  {/* Bottom Parallax Deck Indicator on the Card */}
                  <div className="mt-6 pt-4 border-t border-[#D5E1CE]/70 flex items-center justify-between text-[11px] font-semibold text-[#6B7866]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#003D2B]" />
                      <span>Stage {stage.id} of 5 Pipeline Architecture</span>
                    </div>

                    {index < stages.length - 1 ? (
                      <button 
                        onClick={() => scrollToStage(stage.id + 1)}
                        className="flex items-center gap-1 text-[#003D2B] hover:underline cursor-pointer group-hover:translate-y-0.5 transition-transform"
                      >
                        <span>Scroll for Stage 0{stage.id + 1}: {stages[index + 1].stageName.split(': ')[1]}</span>
                        <ArrowDown className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <span className="text-[#003D2B] font-bold">
                        Pipeline Cycle Complete — Ready for Deployment
                      </span>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal for 10-Step Pipeline */}
      {isPipelineLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={() => setIsPipelineLightboxOpen(false)}
        >
          <div
            className="relative max-w-7xl w-full max-h-[94vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="px-5 py-3.5 bg-[#FAFBF7] border-b border-[#D5E1CE] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Workflow className="w-4 h-4 text-[#003D2B]" />
                <span className="text-sm font-bold text-[#141912]">
                  End-to-End Customer Acquisition Pipeline (10 Coordinated Steps)
                </span>
                <span className="text-xs text-[#4E5B49] hidden md:inline font-mono">
                  (Press Esc or click anywhere outside to close)
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsPipelineLightboxOpen(false)}
                className="p-1.5 rounded-lg bg-[#EAEFE5] hover:bg-[#D5E1CE] text-[#141912] transition-colors cursor-pointer"
                aria-label="Close fullscreen modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="p-3 sm:p-6 overflow-auto max-h-[calc(94vh-60px)] flex items-center justify-center bg-[#F4F7EE]/60">
              <img
                src="/gtm_pipeline_10_steps.jpg"
                alt="End-to-End Customer Acquisition Pipeline"
                className="w-full h-auto max-w-full rounded-xl border border-[#D5E1CE] shadow-sm object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GTMOSAgentWorkflow;
