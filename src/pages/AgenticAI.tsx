import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import { COMPANY_DETAILS } from '../constants/contact';

const metrics = [
  { value: '99.2%', label: 'Autonomous Task Completion', growth: '+48% vs Single LLM', icon: 'fa-bullseye' },
  { value: '<380ms', label: 'Tool Invocation Latency', growth: 'Sub-Second Routing', icon: 'fa-bolt' },
  { value: '84%', label: 'Routine Ops Automated', growth: '3.4x Faster Output', icon: 'fa-gears' },
  { value: '18,400+', label: 'Autonomous Hours Executed', growth: 'Zero Hallucination Leaks', icon: 'fa-shield-halved' },
];

const pillars = [
  {
    title: 'Autonomous Goal Decomposition',
    desc: 'Transforms ambiguous business prompts into deterministic, multi-step execution graphs with dynamic ReAct planning loops.',
    icon: 'fa-diagram-project',
  },
  {
    title: 'Tool Use & API Execution',
    desc: 'Empowers models with real-world agency: executing SQL queries, querying REST APIs, manipulating files, and triggering webhooks securely.',
    icon: 'fa-plug-circle-bolt',
  },
  {
    title: 'Multi-Agent Swarm Orchestration',
    desc: 'Coordinates specialized agent personas (Planner, Researcher, Coder, Critic, Verifier) over shared message buses to conquer complex objectives.',
    icon: 'fa-network-wired',
  },
  {
    title: 'Self-Reflection & Self-Correction',
    desc: 'Evaluates intermediate task outputs against strict acceptance criteria, automatically recovering from transient errors and revising plans.',
    icon: 'fa-arrows-rotate',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Workflow Audit & Tool Mapping',
    desc: 'We map your human-intensive operational processes, identify state boundaries, and catalog the exact internal APIs, databases, and schemas agents will interact with.',
  },
  {
    step: '02',
    title: 'Multi-Agent Architecture & State Design',
    desc: 'We architect specialized agent teams with role-based responsibilities using frameworks like LangGraph and CrewAI, establishing deterministic routing and memory stores.',
  },
  {
    step: '03',
    title: 'Sandbox Red-Teaming & Guardrails',
    desc: 'We rigorously benchmark agents in isolated sandboxes: testing for edge cases, prompt injection defense, PII masking, token efficiency, and output schema validation.',
  },
  {
    step: '04',
    title: 'Production AgentOps & Governance',
    desc: 'We deploy agents with full observability (tracing, latency, cost attribution), automated alerts, and granular Human-in-the-Loop (HITL) authorization gates for critical actions.',
  },
];

const faqs = [
  {
    q: 'How is Agentic AI different from traditional chatbots or generative AI?',
    a: 'Traditional chatbots and generative models are passive text-in, text-out interfaces. Agentic AI systems possess agency: they autonomously formulate multi-step plans, interact with tools (executing code, querying databases, sending emails, calling external APIs), observe results, self-correct mistakes, and work toward a defined objective without requiring continuous human prompting for each step.',
  },
  {
    q: 'How do you ensure autonomous agents do not hallucinate or make catastrophic mistakes?',
    a: 'We implement multi-layered deterministic guardrails. First, we use strict schema validation (Pydantic / Zod) so agent outputs must match typed structures. Second, we enforce least-privilege API sandboxing, read-only database connections for exploratory agents, and hard Human-in-the-Loop (HITL) verification gates for sensitive actions like financial transactions or customer-facing emails.',
  },
  {
    q: 'Can ANVRiksh integrate Agentic AI with our existing internal software and legacy databases?',
    a: 'Yes. Our agents are built to be environment-agnostic. We expose your internal databases (PostgreSQL, MySQL, Oracle, MongoDB), CRMs (Salesforce, HubSpot), ERPs (SAP, Microsoft Dynamics), and custom REST/GraphQL APIs as secure, documented tools that agents can intelligently query and update.',
  },
  {
    q: 'What frameworks and technology stack do you use to build Agentic systems?',
    a: 'We leverage state-of-the-art multi-agent orchestration frameworks including LangGraph, CrewAI, AutoGen, and custom Python state-machines. For observability and evaluations, we integrate Langfuse, LangSmith, and OpenTelemetry. For models, we combine frontier LLMs (Claude 3.5 Sonnet, GPT-4o) with specialized small models for high-velocity routing.',
  },
  {
    q: 'What happens when an agent encounters an ambiguous scenario or tool failure?',
    a: 'Our architectures incorporate intelligent self-reflection loops. If a tool call fails or returns an error, the agent analyzes the stack trace, attempts an alternate query strategy, or adjusts parameters. If the scenario remains ambiguous or crosses confidence thresholds, the agent cleanly pauses execution and escalates to a human operator with complete trajectory context.',
  },
];

const SIMULATION_SCENARIOS = [
  {
    id: 'finance',
    name: 'Accounts Payable & Invoice Reconciliation',
    icon: 'fa-file-invoice-dollar',
    summary: 'Autonomous agent extracts unstructured PDF invoice, validates PO numbers against ERP, flags variance, and routes for signoff.',
    steps: [
      {
        role: 'Ingestion Agent',
        badge: 'OCR & Parser',
        thought: 'Received vendor invoice PDF (Vendor: CloudPeak Labs, Total: $14,250.00). Parsing line items and tax identifiers.',
        action: 'Invoke tool: pdf_table_extractor(doc_id="INV-9821")',
        observation: 'Extracted 3 line items. PO Reference detected: #PO-44810.',
      },
      {
        role: 'ERP Verification Agent',
        badge: 'Database Tool',
        thought: 'Querying PostgreSQL internal ERP for PO #PO-44810 status, authorized budget, and receiving confirmation.',
        action: 'Invoke tool: erp_query(sql="SELECT * FROM purchase_orders WHERE id=\'PO-44810\'")',
        observation: 'PO confirmed open. Authorized budget: $15,000.00. Goods received: Yes (Warehouse Dock 3). Line items match 100%.',
      },
      {
        role: 'Supervisor Agent',
        badge: 'Decision Engine',
        thought: 'Line items reconciled with zero price discrepancy. Total is under threshold for auto-clearance, but policy requires VP signature above $10k.',
        action: 'Invoke tool: trigger_hitl_approval(approver="vp_finance@company.com", payload=summary_card)',
        observation: 'Approval notification dispatched to Slack #finance-approvals with one-click verification token.',
      },
    ],
  },
  {
    id: 'leads',
    name: 'Autonomous Lead Research & Calendar Booking',
    icon: 'fa-user-check',
    summary: 'Agent ingests raw inbound inquiry, researches company revenue & tech stack via web scraping, enriches CRM, and initiates booking call.',
    steps: [
      {
        role: 'Triage Agent',
        badge: 'Lead Filter',
        thought: 'New inbound lead: "rahul@supplygrid.io". Domain indicates a B2B supply chain logistics platform.',
        action: 'Invoke tool: crm_lookup(email="rahul@supplygrid.io")',
        observation: 'Lead is net-new. No prior opportunities in Salesforce.',
      },
      {
        role: 'Research Agent',
        badge: 'Web & LinkedIn Search',
        thought: 'Investigating SupplyGrid funding stage, employee headcount, and logistics tech stack.',
        action: 'Invoke tool: web_deep_search(domain="supplygrid.io")',
        observation: 'Series-B company ($24M raised), 140 employees, recently expanded to 4 distribution centers in South India.',
      },
      {
        role: 'Orchestrator Agent',
        badge: 'Dispatch & Voice Call',
        thought: 'Lead qualifies as Tier-1 High Value. Enriched Salesforce record. Triggering immediate AI calling agent to secure discovery session.',
        action: 'Invoke tool: calling_agent_dial(phone="+91-9845012345", script_context=enriched_profile)',
        observation: 'AI Calling Agent initiated call in 42 seconds. Prospect answered, qualified interest, and confirmed Tuesday 3 PM slot.',
      },
    ],
  },
  {
    id: 'devops',
    name: 'Sentry Crash Triage & Self-Healing PR',
    icon: 'fa-code-branch',
    summary: 'DevOps agent catches production null-pointer exception, reproduces in Docker sandbox, writes regression test, and drafts PR.',
    steps: [
      {
        role: 'Monitoring Agent',
        badge: 'Sentry Webhook',
        thought: 'High-frequency 500 error detected on /api/v2/subscriptions checkout route. 142 users impacted in 3 minutes.',
        action: 'Invoke tool: sentry_fetch_stacktrace(issue_id="ISSUE-884")',
        observation: 'NullReferenceException on billingAddress.countryCode during guest checkout transactions.',
      },
      {
        role: 'Developer Agent',
        badge: 'Git & Code Sandbox',
        thought: 'Spawning isolated Docker worktree on branch hotfix/checkout-country-null. Reading src/controllers/billing.ts.',
        action: 'Invoke tool: run_code_sandbox(cmd="pytest tests/test_checkout.py")',
        observation: 'Reproduced error in test harness. Added defensive fallback `user?.countryCode ?? \'IN\'` and new unit test.',
      },
      {
        role: 'QA Verifier Agent',
        badge: 'CI Test Runner',
        thought: 'All 84 unit tests passing. Code coverage 98.2%. Opening pull request with complete reproduction logs.',
        action: 'Invoke tool: github_create_pr(title="Fix: Defensive handling for optional countryCode in guest billing")',
        observation: 'PR #1209 created on GitHub. Assigned to Lead Architect for 1-click merge.',
      },
    ],
  },
];

const AgenticAI: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState<string>('finance');
  const activeScenario = SIMULATION_SCENARIOS.find((s) => s.id === activeScenarioId) || SIMULATION_SCENARIOS[0];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Agentic AI & Autonomous Multi-Agent Systems',
    provider: {
      '@type': 'Organization',
      name: COMPANY_DETAILS.legalName,
      identifier: COMPANY_DETAILS.registrationId,
      url: 'https://anvriksh.com',
    },
    areaServed: 'Worldwide',
    description:
      'Enterprise Agentic AI solutions: Autonomous Multi-Agent Swarms, Tool Calling, LangGraph, CrewAI, Self-Healing Code Agents, and Process Automation.',
  };

  return (
    <div
      className="min-h-screen text-[#141912] select-none pt-28 sm:pt-36 pb-24 sm:pb-32 overflow-hidden relative"
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background: 'radial-gradient(135% 120% at 50% -10%, #FFFFFF 0%, #E8F4E5 32%, #DFEFE0 62%, #F5ECE0 100%)',
      }}
    >
      <SEO
        title="Agentic AI & Autonomous Multi-Agent Systems | ANVRiksh Tech Solutions LLP"
        description="Engineer goal-driven autonomous AI agents that reason, plan, call tools, and execute enterprise workflows end-to-end. Built with LangGraph, CrewAI, and deterministic guardrails."
        keywords="Agentic AI, Autonomous AI Agents, Multi-Agent Systems, LangGraph Development, CrewAI Agency, AI Process Automation, Tool Use AI, Enterprise AgentOps, ANVRiksh Tech Solutions LLP"
        canonicalUrl="https://anvriksh.com/agentic-ai"
        structuredData={structuredData}
        ogImage="/agentic_architecture_transparent.png"
      />

      {/* —————————— VIBRANT ATMOSPHERIC MESH GRADIENT BACKGROUND (IDENTICAL TO CONTACT PAGE) —————————— */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* 1. Tactical Micro-Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#003D2B_1.4px,transparent_1.4px)] [background-size:32px_32px] opacity-[0.055]" />

        {/* 2. Vivid Luminous Mesh Aurora Gradient Blooms */}
        {/* Top-Center / Left: Radiant Emerald Flare */}
        <div className="absolute -top-36 left-1/6 w-[750px] h-[600px] bg-gradient-to-br from-emerald-400/40 via-[#004D36]/30 to-transparent rounded-full blur-[100px]" />
        
        {/* Top-Right: Warm Golden Amber & Peach Flare */}
        <div className="absolute top-10 -right-20 w-[700px] h-[650px] bg-gradient-to-bl from-amber-400/45 via-orange-300/35 to-transparent rounded-full blur-[90px]" />
        
        {/* Center / Left: Glowing Aqua & Mint Beam */}
        <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-teal-400/35 via-emerald-300/30 to-transparent rounded-full blur-[100px]" />
        
        {/* Bottom-Right: Soft Rose & Peach Golden Flare */}
        <div className="absolute -bottom-24 -right-20 w-[650px] h-[600px] bg-gradient-to-tl from-amber-300/40 via-rose-300/25 to-transparent rounded-full blur-[95px]" />
        
        {/* Bottom-Center: Deep Forest Ambient Wash */}
        <div className="absolute -bottom-36 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-t from-[#003D2B]/22 via-[#2D452C]/15 to-transparent rounded-full blur-[110px]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl z-10">

        {/* ————————————————— HERO SECTION ————————————————— */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-20 sm:mb-28">

          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 text-left">
            <Reveal variant="up" duration={700}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#D5E1CE] shadow-xs mb-5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[12px] font-bold text-[#003D2B] tracking-tight">
                  Autonomous Multi-Agent Systems • Sub-Second Tool Execution
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-[800] text-[#141912] tracking-[-0.035em] leading-[1.12] mb-6">
                Agentic AI Solutions<br />
                <span className="bg-gradient-to-r from-[#003D2B] via-[#005A3E] to-[#2D5A3A] bg-clip-text text-transparent">
                  Autonomous Systems That Reason, Plan & Execute.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#4E5B49] leading-relaxed max-w-2xl mb-8">
                Move far beyond static chatbots. ANVRiksh architects goal-driven autonomous multi-agent systems that decompose complex business objectives, call enterprise APIs and databases, self-correct errors, and execute end-to-end workflows without continuous human prompting.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Link
                  to="/company/contact-us"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#003D2B] hover:bg-[#022D20] shadow-[0_8px_24px_rgba(0,61,43,0.25)] hover:shadow-[0_12px_32px_rgba(0,61,43,0.35)] hover:scale-105 active:scale-100 transition-all"
                >
                  <span>Deploy Autonomous Agents</span>
                  <i className="fas fa-arrow-right text-xs" />
                </Link>
                <a
                  href="#agent-solutions"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-[#141912] bg-white border border-[#D5E1CE] shadow-2xs hover:shadow-xs hover:border-[#003D2B]/40 transition-all"
                >
                  <span>Explore Capabilities</span>
                  <i className="fas fa-chevron-down text-xs text-[#003D2B]" />
                </a>
              </div>

              {/* Trust Pill Bar */}
              <div className="flex flex-wrap items-center gap-5 pt-6 border-t border-[#D5E1CE]/80 text-xs font-semibold text-[#4E5B49]">
                <span className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-emerald-600 text-sm" /> Deterministic Tool Execution & Sandboxing
                </span>
                <span className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-emerald-600 text-sm" /> Multi-Agent Swarm Collaboration
                </span>
                <span className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-emerald-600 text-sm" /> Human-in-the-Loop Governance
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Visual Showcase (Clean Transparent Diagram) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <Reveal variant="scale" duration={800} delay={100}>
              <div className="relative group max-w-[540px] w-full flex justify-center">
                <img
                  src="/agentic_architecture_transparent.png"
                  alt="Agentic AI Autonomous Architecture: Orchestration Core, Reasoning, Memory, Toolset & Observability"
                  className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.03] drop-shadow-[0_16px_36px_rgba(0,61,43,0.08)]"
                />
              </div>
            </Reveal>
          </div>

        </div>

        {/* ————————————————— 4 CORE AGENTIC ARCHITECTURE PILLARS ————————————————— */}
        <div className="mb-20 sm:mb-28">
          <Reveal variant="up" duration={700}>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[800] text-[#141912] tracking-tight mb-4">
                Four Pillars of Autonomous Agent Architecture
              </h2>
              <p className="text-[#4E5B49] text-sm sm:text-base leading-relaxed">
                How ANVRiksh transitions enterprise intelligence from passive query responses to self-directing action systems.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <Reveal key={pillar.title} variant="up" delay={idx * 80} duration={650}>
                <div className="bg-white rounded-2xl p-7 border border-[#D5E1CE] shadow-[0_4px_16px_rgba(0,61,43,0.04)] hover:shadow-[0_12px_28px_rgba(0,61,43,0.1)] hover:-translate-y-1 transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center mb-5 text-[#003D2B]">
                      <i className={`fas ${pillar.icon} text-lg`} />
                    </div>
                    <h3 className="text-lg font-[800] text-[#141912] mb-2.5 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-[#4E5B49] text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#F0F4EC] flex items-center text-xs font-bold text-[#003D2B]">
                    <span>Agent Core Engine</span>
                    <i className="fas fa-arrow-right ml-auto text-[10px]" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ————————————————— LIVE AUDITED PERFORMANCE METRICS BAR ————————————————— */}
        <Reveal variant="fade" duration={800}>
          <div className="bg-white rounded-[28px] p-8 sm:p-10 border border-[#D5E1CE] shadow-[0_8px_32px_rgba(0,61,43,0.06)] mb-20 sm:mb-28">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 mb-8 border-b border-[#E8F0E4]">
              <div>
                <span className="text-xs font-bold text-[#003D2B] uppercase tracking-wider">Verified Production Telemetry</span>
                <h3 className="text-xl sm:text-2xl font-[800] text-[#141912] tracking-tight mt-1">
                  Autonomous Multi-Agent Benchmarks
                </h3>
              </div>
              <div className="flex items-center gap-2 bg-[#E3EDE0] text-[#003D2B] px-4 py-2 rounded-full text-xs font-bold border border-[#D3E2CF]">
                <i className="fas fa-shield-halved" />
                <span>Audited Production Telemetry</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((m) => (
                <div key={m.label} className="p-5 rounded-2xl bg-[#F7FAF4] border border-[#E3EDE0]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                      {m.growth}
                    </span>
                    <i className={`fas ${m.icon} text-sm text-[#003D2B]`} />
                  </div>
                  <div className="text-3xl sm:text-4xl font-[800] text-[#141912] tracking-tight mb-1">
                    {m.value}
                  </div>
                  <div className="text-xs font-medium text-[#4E5B49]">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ————————————————— BENTO BOX AGENTIC SOLUTIONS BREAKDOWN ————————————————— */}
        <div id="agent-solutions" className="mb-20 sm:mb-28">
          <Reveal variant="up" duration={700}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-4 border-b border-[#D5E1CE]/80">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] shadow-xs mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#003D2B] animate-pulse" />
                  <span className="text-xs font-semibold text-[#003D2B]">Modular Agentic Architecture</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[800] text-[#141912] tracking-tight">
                  Enterprise Agentic AI Capabilities
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[#4E5B49] max-w-md">
                Deployed as modular, interconnected agent swarms that integrate directly with your tech stack to automate mission-critical operations.
              </p>
            </div>
          </Reveal>

          {/* Bento Box Grid - Equal Heights & Flush Alignment */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">

            {/* Bento Item 1: Multi-Agent Swarms & Crew Orchestration (Hero Dark Centerpiece - 2 Columns) */}
            <Reveal variant="up" duration={650} className="h-full flex flex-col md:col-span-2 lg:col-span-2">
              <div className="bg-gradient-to-br from-[#003D2B] via-[#004A35] to-[#01251A] text-white rounded-[32px] p-8 sm:p-10 border border-[#005A3E]/70 shadow-[0_20px_50px_rgba(0,61,43,0.22)] h-full flex flex-col justify-between relative overflow-hidden group">
                {/* Ambient Background Flares */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-400/30 transition-all duration-500" />
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-emerald-300 text-2xl group-hover:scale-110 transition-transform">
                        <i className="fas fa-network-wired" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-widest">
                          LangGraph • CrewAI • State Graphs • Dynamic Consensus
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-[800] text-white tracking-tight mt-0.5">
                          Autonomous Multi-Agent Swarms &amp; Orchestration
                        </h3>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 px-4 py-2 rounded-full text-xs font-bold text-emerald-300 backdrop-blur-sm">
                      <i className="fas fa-microchip text-emerald-300" />
                      <span>8x Parallel Fanout</span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8 max-w-2xl">
                    Deploy teams of role-specialized autonomous agents that collaborate through shared state machines. A lead Coordinator breaks high-level goals into parallel sub-tasks for Specialist Agents (SQL Engineer, Web Researcher, Document Synthesizer, QA Inspector), validating collective deliverables before resolution.
                  </p>

                  {/* Bento Interactive State & Telemetry Matrix */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                    <div>
                      <div className="flex justify-between text-xs font-bold text-white mb-2">
                        <span>Multi-Agent Consensus Accuracy</span>
                        <span className="text-emerald-300">98.8% Verified</span>
                      </div>
                      <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-emerald-400 to-teal-300 h-full rounded-full w-[98%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-bold text-white mb-2">
                        <span>ReAct Reasoning Trajectory Efficiency</span>
                        <span className="text-emerald-300">3.2 Steps Avg (-54% Latency)</span>
                      </div>
                      <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-amber-300 to-emerald-400 h-full rounded-full w-[86%]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {['LangGraph State Machines', 'CrewAI Specialists', 'ReAct Planning Loops', 'Shared Vector Memory'].map((t) => (
                      <span key={t} className="text-[11px] font-semibold bg-white/10 text-white/90 px-3 py-1 rounded-full border border-white/15 backdrop-blur-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link to="/company/contact-us" className="text-xs font-bold text-emerald-300 hover:text-white flex items-center gap-1.5 transition-colors">
                    Deploy Multi-Agent Swarm <i className="fas fa-arrow-right text-[10px]" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Bento Item 2: Enterprise Workflow & RPA Replacement (1-Column Compartment) */}
            <Reveal variant="up" delay={100} duration={650} className="h-full flex flex-col md:col-span-1 lg:col-span-1">
              <div className="bg-white rounded-[32px] p-8 border border-[#D5E1CE] shadow-[0_8px_30px_rgba(0,61,43,0.05)] hover:shadow-[0_16px_36px_rgba(0,61,43,0.12)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-400/20 transition-all" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B] text-lg shrink-0 group-hover:scale-110 transition-transform">
                      <i className="fas fa-gears" />
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <i className="fas fa-bolt text-[10px]" /> Zero-Touch
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-[#003D2B] uppercase tracking-wider">ERP • CRM • Accounting Automation</span>
                  <h3 className="text-xl font-[800] text-[#141912] mt-1 mb-3 tracking-tight">
                    Enterprise Workflow Automation
                  </h3>
                  <p className="text-sm text-[#4E5B49] leading-relaxed mb-6">
                    Autonomous agents that log into web portals, parse unformatted vendor invoices, extract tabular line items, cross-check against PO databases, and trigger ERP transactions without human typing.
                  </p>

                  {/* Bento Metric Preview */}
                  <div className="p-4 rounded-2xl bg-[#F7FAF4] border border-[#E3EDE0] mb-6 space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#003D2B] flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        ERP Sync Live
                      </span>
                      <span className="text-[11px] font-semibold text-[#7A8A75]">SAP / Salesforce</span>
                    </div>
                    <div className="text-xs text-[#141912] bg-white p-2.5 rounded-xl border border-[#E3EDE0] flex items-center justify-between">
                      <span className="text-[#4E5B49]">Processing Speedup:</span>
                      <span className="font-extrabold text-emerald-700">14x Faster than Manual</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F0F4EC] flex flex-wrap gap-2 mt-auto">
                  {['Invoice Extraction', 'CRM Auto-Sync', 'RPA Modernization', 'ERP Webhooks'].map((t) => (
                    <span key={t} className="text-[11px] font-semibold bg-[#F4F7EE] text-[#003D2B] px-2.5 py-1 rounded-full border border-[#D5E1CE]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Bento Item 3: Autonomous Code & DevOps Agents (1-Column Compartment) */}
            <Reveal variant="up" delay={150} duration={650} className="h-full flex flex-col md:col-span-1 lg:col-span-1">
              <div className="bg-white rounded-[32px] p-8 border border-[#D5E1CE] shadow-[0_8px_30px_rgba(0,61,43,0.05)] hover:shadow-[0_16px_36px_rgba(0,61,43,0.12)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B] text-lg shrink-0 group-hover:scale-110 transition-transform">
                      <i className="fas fa-terminal" />
                    </div>
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <i className="fas fa-code-branch text-[10px]" /> Self-Healing
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-[#003D2B] tracking-tight uppercase">CI/CD • Bug Triage • Test Gen</span>
                  <h3 className="text-xl font-[800] text-[#141912] mt-1 mb-3 tracking-tight">
                    DevOps &amp; Code Generation
                  </h3>
                  <p className="text-sm text-[#4E5B49] leading-relaxed mb-6">
                    Software engineering agents that monitor Sentry or Datadog alerts, inspect stack traces, reproduce failures in containerized sandboxes, author regression tests, and open verified GitHub PRs.
                  </p>

                  <div className="p-4 rounded-2xl bg-[#F7FAF4] border border-[#E3EDE0] mb-6 text-xs">
                    <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-bold mb-1">
                      <i className="fas fa-check-circle text-[10px]" /> Sandbox Test Suite Passed
                    </div>
                    <div className="text-[#141912] font-bold text-xs truncate">
                      Auto-generated PR #1209: Regression Tests + Fix
                    </div>
                    <div className="text-[11px] text-[#7A8A75] mt-1">
                      Docker Isolation • Code Coverage: 98.4%
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F0F4EC] flex flex-wrap gap-2 mt-auto">
                  {['Automated Bug Triage', 'Test Suite Gen', 'Docker Sandboxes'].map((t) => (
                    <span key={t} className="text-[11px] font-semibold bg-[#F4F7EE] text-[#003D2B] px-2.5 py-1 rounded-full border border-[#D5E1CE]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Bento Item 4: Deep Research & Web Extraction Agents (1-Column Compartment) */}
            <Reveal variant="up" delay={200} duration={650} className="h-full flex flex-col md:col-span-1 lg:col-span-1">
              <div className="bg-white rounded-[32px] p-8 border border-[#D5E1CE] shadow-[0_8px_30px_rgba(0,61,43,0.05)] hover:shadow-[0_16px_36px_rgba(0,61,43,0.12)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B] text-lg shrink-0 group-hover:scale-110 transition-transform">
                      <i className="fas fa-magnifying-glass-chart" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-xs">
                      <i className="fas fa-database" />
                    </div>
                  </div>

                  <span className="text-[11px] font-bold text-[#003D2B] tracking-tight uppercase">Multi-Hop Web Crawling • Synthesis</span>
                  <h3 className="text-xl font-[800] text-[#141912] mt-1 mb-3 tracking-tight">
                    Deep Research &amp; Intelligence
                  </h3>
                  <p className="text-sm text-[#4E5B49] leading-relaxed mb-6">
                    Multi-hop research agents that crawl regulatory documents, parse financial filings, cross-examine competitor pricing schemas, verify citations, and assemble structured executive intelligence dossiers.
                  </p>

                  <div className="p-4 rounded-2xl bg-[#F7FAF4] border border-[#E3EDE0] mb-6">
                    <div className="text-[11px] text-[#7A8A75] font-semibold mb-1">Knowledge Synthesis</div>
                    <div className="text-xs font-bold text-[#141912]">Multi-Source Verification with Primary URL Citations</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F0F4EC] flex flex-wrap gap-2 mt-auto">
                  {['Multi-Hop Search', 'Financial Parsing', 'Structured JSON'].map((t) => (
                    <span key={t} className="text-[11px] font-semibold bg-[#F4F7EE] text-[#003D2B] px-2.5 py-1 rounded-full border border-[#D5E1CE]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Bento Item 5: Customer Support & Database Action Agents (1-Column Compartment) */}
            <Reveal variant="up" delay={250} duration={650} className="h-full flex flex-col md:col-span-1 lg:col-span-1">
              <div className="bg-white rounded-[32px] p-8 border border-[#D5E1CE] shadow-[0_8px_30px_rgba(0,61,43,0.05)] hover:shadow-[0_16px_36px_rgba(0,61,43,0.12)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B] text-lg shrink-0 group-hover:scale-110 transition-transform">
                      <i className="fas fa-headset" />
                    </div>
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <i className="fas fa-bolt text-[10px]" /> Transactional
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-[#003D2B] tracking-tight uppercase">Direct Database Action • Resolution</span>
                  <h3 className="text-xl font-[800] text-[#141912] mt-1 mb-3 tracking-tight">
                    Customer Ops &amp; Support Agents
                  </h3>
                  <p className="text-sm text-[#4E5B49] leading-relaxed mb-6">
                    Beyond generic answer bots. These agents query customer records, verify identities with SMS OTP, process refunds within policy caps, reschedule shipments, and sync ticket notes directly into Zendesk.
                  </p>

                  <div className="p-4 rounded-2xl bg-[#F7FAF4] border border-[#E3EDE0] mb-6 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-[#7A8A75] font-semibold">First-Contact Resolution</div>
                      <div className="text-xs font-bold text-[#141912]">87.4% (+3.8x Industry Avg)</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#003D2B] flex items-center justify-center text-xs">
                      <i className="fas fa-check" />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F0F4EC] flex flex-wrap gap-2 mt-auto">
                  {['SQL Tool Use', 'Ticket Dispatch', 'Transactional Support'].map((t) => (
                    <span key={t} className="text-[11px] font-semibold bg-[#F4F7EE] text-[#003D2B] px-2.5 py-1 rounded-full border border-[#D5E1CE]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Bento Item 6: Deterministic Guardrails & Safety (1-Column Compartment) */}
            <Reveal variant="up" delay={300} duration={650} className="h-full flex flex-col md:col-span-1 lg:col-span-1">
              <div className="bg-white rounded-[32px] p-8 border border-[#D5E1CE] shadow-[0_8px_30px_rgba(0,61,43,0.05)] hover:shadow-[0_16px_36px_rgba(0,61,43,0.12)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B] text-lg shrink-0 group-hover:scale-110 transition-transform">
                      <i className="fas fa-shield-halved" />
                    </div>
                    <span className="text-[11px] font-bold text-[#003D2B] bg-[#E8F4E5] border border-[#D5E1CE] px-3 py-1 rounded-full flex items-center gap-1.5">
                      <i className="fas fa-lock text-[10px]" /> PII Masked
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-[#003D2B] tracking-tight uppercase">Pydantic • Prompt Defense • Audit</span>
                  <h3 className="text-xl font-[800] text-[#141912] mt-1 mb-3 tracking-tight">
                    Deterministic Guardrails
                  </h3>
                  <p className="text-sm text-[#4E5B49] leading-relaxed mb-6">
                    Hard compliance boundaries around generative models. We enforce strict prompt injection defense, automated PII/PHI redaction, Pydantic/Zod schema guarantees, and deterministic output verification.
                  </p>

                  <div className="p-4 rounded-2xl bg-[#F7FAF4] border border-[#E3EDE0] mb-6 space-y-2 text-xs text-[#141912]">
                    <div className="flex items-center gap-2">
                      <i className="fas fa-shield-check text-[#003D2B]" />
                      <span className="font-semibold">Zero Prompt Injection Leaks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fas fa-check-double text-[#003D2B]" />
                      <span className="font-semibold">100% Typed Schema Compliance</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F0F4EC] flex flex-wrap gap-2 mt-auto">
                  {['NeMo Guardrails', 'PII Masking', 'Pydantic Schemas'].map((t) => (
                    <span key={t} className="text-[11px] font-semibold bg-[#F4F7EE] text-[#003D2B] px-2.5 py-1 rounded-full border border-[#D5E1CE]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Bento Item 7: AgentOps, Observability & Human-in-the-Loop (Wide 2-Column Anchor Compartment) */}
            <Reveal variant="up" delay={350} duration={650} className="h-full flex flex-col md:col-span-2 lg:col-span-2">
              <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-[#D5E1CE] shadow-[0_8px_30px_rgba(0,61,43,0.05)] hover:shadow-[0_16px_36px_rgba(0,61,43,0.12)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl pointer-events-none group-hover:bg-teal-400/20 transition-all" />

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className="w-14 h-14 rounded-2xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B] text-2xl group-hover:scale-110 transition-transform">
                        <i className="fas fa-chart-line" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-[#003D2B] uppercase tracking-wider">Tracing • LangSmith • OpenTelemetry</span>
                        <h3 className="text-2xl sm:text-3xl font-[800] text-[#141912] tracking-tight mt-0.5">
                          AgentOps, Observability &amp; Governance
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-[#F4F7EE] border border-[#D5E1CE] px-4 py-2 rounded-full text-xs font-bold text-[#003D2B]">
                      <i className="fas fa-user-shield text-emerald-600" />
                      <span>Human-in-the-Loop Signoff</span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#4E5B49] leading-relaxed mb-6 max-w-2xl">
                    Full production transparency. Step-by-step reasoning trajectory replays, real-time token cost attribution, latency tracking across tool calls, and configurable Human-in-the-Loop (HITL) authorization gates for critical enterprise decisions.
                  </p>

                  {/* Bento Live Dashboard Indicator */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#F7FAF4] border border-[#E3EDE0] mb-6 text-center">
                    <div className="p-2">
                      <div className="text-[11px] text-[#7A8A75] font-semibold">Telemetry</div>
                      <div className="text-sm font-bold text-[#141912] mt-0.5">LangSmith / Tracing</div>
                    </div>
                    <div className="p-2 border-l border-[#E3EDE0]">
                      <div className="text-[11px] text-[#7A8A75] font-semibold">Governance</div>
                      <div className="text-sm font-bold text-[#141912] mt-0.5">HITL Approval Gates</div>
                    </div>
                    <div className="p-2 border-l border-[#E3EDE0]">
                      <div className="text-[11px] text-[#7A8A75] font-semibold">Latency</div>
                      <div className="text-sm font-bold text-[#141912] mt-0.5">&lt;380ms Sub-Second</div>
                    </div>
                    <div className="p-2 border-l border-[#E3EDE0]">
                      <div className="text-[11px] text-[#7A8A75] font-semibold">Cost Tracking</div>
                      <div className="text-sm font-bold text-[#141912] mt-0.5">Per-Task Attribution</div>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-[#F0F4EC] flex flex-wrap items-center justify-between gap-4 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {['Trajectory Replays', 'Langfuse & OpenTelemetry', 'HITL Signoff Gates', 'Token Optimization'].map((t) => (
                      <span key={t} className="text-[11px] font-semibold bg-[#F4F7EE] text-[#003D2B] px-3 py-1 rounded-full border border-[#D5E1CE]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link to="/company/contact-us" className="text-xs font-bold text-[#003D2B] flex items-center gap-1.5 group-hover:gap-2 transition-all">
                    Schedule Architecture Walkthrough <i className="fas fa-arrow-right text-[10px]" />
                  </Link>
                </div>
              </div>
            </Reveal>

          </div>
        </div>

        {/* ————————————————— INTERACTIVE AGENT EXECUTION SIMULATOR ————————————————— */}
        <div className="mb-20 sm:mb-28">
          <Reveal variant="fade" duration={750}>
            <div className="bg-white rounded-[32px] p-6 sm:p-10 lg:p-12 border border-[#D5E1CE] shadow-[0_8px_32px_rgba(0,61,43,0.06)] relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#E8F0E4]">
                <div>
                  <span className="text-xs font-bold text-[#003D2B] uppercase tracking-wider">Interactive Agent Simulation</span>
                  <h3 className="text-2xl sm:text-3xl font-[800] text-[#141912] tracking-tight mt-1">
                    Watch Autonomous Agent Reasoning in Action
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#4E5B49] max-w-sm">
                  Select a real-world enterprise workflow to inspect the step-by-step Thought, Tool Action, and Observation loop.
                </p>
              </div>

              {/* Scenario Selector Pills */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {SIMULATION_SCENARIOS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveScenarioId(s.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      activeScenarioId === s.id
                        ? 'bg-[#003D2B] text-white shadow-md scale-[1.02]'
                        : 'bg-[#F4F7EE] text-[#4E5B49] hover:bg-[#EAEFE5] border border-[#D5E1CE]'
                    }`}
                  >
                    <i className={`fas ${s.icon} text-xs`} />
                    <span>{s.name}</span>
                  </button>
                ))}
              </div>

              {/* Active Scenario Trajectory Visualizer */}
              <div className="bg-[#0C140E] text-white rounded-[24px] p-6 sm:p-8 border border-[#003D2B] shadow-inner relative overflow-hidden font-mono">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-emerald-300 font-bold tracking-wider uppercase">Live Trajectory State</span>
                  </div>
                  <span className="text-white/60 hidden sm:inline">{activeScenario.name}</span>
                </div>

                <div className="space-y-6">
                  {activeScenario.steps.map((step, idx) => (
                    <div key={idx} className="relative pl-6 sm:pl-8 border-l border-emerald-500/30 pb-2">
                      <span className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#003D2B] border border-emerald-400 flex items-center justify-center text-[9px] font-bold text-emerald-200">
                        {idx + 1}
                      </span>

                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-emerald-300 font-sans">{step.role}</span>
                        <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white/80">{step.badge}</span>
                      </div>

                      {/* Thought */}
                      <div className="text-xs text-white/80 mb-2 leading-relaxed font-sans">
                        <span className="text-amber-300 font-bold mr-1">Thought:</span>
                        {step.thought}
                      </div>

                      {/* Action */}
                      <div className="bg-black/50 p-2.5 rounded-xl border border-white/10 text-xs text-emerald-400 mb-2 overflow-x-auto">
                        <span className="text-teal-300 font-bold mr-2">Action:</span>
                        <code>{step.action}</code>
                      </div>

                      {/* Observation */}
                      <div className="text-xs text-white/60 leading-relaxed font-sans bg-white/5 p-2 rounded-xl">
                        <span className="text-emerald-300 font-bold mr-1">Observation:</span>
                        {step.observation}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ————————————————— 4-STEP AGENTIC DEPLOYMENT FRAMEWORK ————————————————— */}
        <div className="mb-20 sm:mb-28">
          <Reveal variant="up" duration={700}>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-[#003D2B] uppercase tracking-wider">Enterprise Implementation Lifecycle</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[800] text-[#141912] tracking-tight mt-1 mb-4">
                How We Engineer Autonomous AI Agents
              </h2>
              <p className="text-[#4E5B49] text-sm sm:text-base leading-relaxed">
                A rigorous, sandbox-tested engineering lifecycle that ensures deterministic accuracy, data security, and seamless adoption.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <Reveal key={step.step} variant="up" duration={650}>
                <div className="bg-white rounded-2xl p-7 border border-[#D5E1CE] shadow-xs relative h-full">
                  <div className="text-3xl font-[800] text-[#003D2B]/20 mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-[800] text-[#141912] mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4E5B49] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ————————————————— FAQ SECTION ————————————————— */}
        <div className="mb-20 sm:mb-28 max-w-4xl mx-auto">
          <Reveal variant="up" duration={700}>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-[800] text-[#141912] tracking-tight mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-[#4E5B49]">
                Everything you need to know about engineering and deploying enterprise Agentic AI systems.
              </p>
            </div>
          </Reveal>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={i} variant="up" delay={i * 60} duration={600}>
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#D5E1CE] shadow-xs">
                  <h3 className="text-base sm:text-lg font-[800] text-[#141912] mb-2.5 flex items-start gap-3">
                    <span className="text-[#003D2B] font-bold">Q.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-sm text-[#4E5B49] leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ————————————————— CTA BANNER ————————————————— */}
        <Reveal variant="up" duration={700}>
          <div className="bg-gradient-to-br from-[#003D2B] via-[#004D36] to-[#0A261B] text-white rounded-3xl md:rounded-[36px] p-8 sm:p-14 text-center relative overflow-hidden shadow-[0_16px_40px_rgba(0,61,43,0.18)]">
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold mb-4">
                <i className="fas fa-microchip text-emerald-300" />
                <span>Complimentary Agentic Feasibility Audit</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-[800] text-white tracking-tight mb-4">
                Ready to Deploy Autonomous AI Agents?
              </h3>

              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8">
                Connect with our AI Systems Architects for a 30-minute Agentic AI Feasibility Assessment. We will evaluate your workflow bottlenecks, identify tool integration opportunities, and design a custom multi-agent architecture roadmap.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/company/contact-us"
                  className="bg-white text-[#003D2B] px-8 py-4 rounded-full font-bold text-sm hover:bg-[#E8F4E5] transition-all shadow-[0_4px_16px_rgba(0,0,0,0.2)] active:scale-95"
                >
                  Book Agentic Consultation
                </Link>
                <a
                  href={`tel:${COMPANY_DETAILS.primaryPhone}`}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/25 px-7 py-4 rounded-full font-bold text-sm transition-all"
                >
                  Call Direct: {COMPANY_DETAILS.primaryPhone}
                </a>
              </div>

              <p className="text-white/50 text-xs mt-5">
                No obligation • Architecture blueprint • Direct strategy discussion with AI engineers
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
};

export default AgenticAI;
