import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Compass, 
  Users, 
  BookOpen, 
  Send, 
  FileText, 
  Inbox, 
  PhoneCall, 
  BarChart3, 
  Layers, 
  TrendingUp, 
  Sparkles, 
  ShieldCheck, 
  Bot, 
  Zap, 
  Sliders
} from 'lucide-react';

export const GTMOSDashboard: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>('Dashboard');
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Lead Discovery', icon: Compass },
    { name: 'Lead Management', icon: Users },
    { name: 'Contacts', icon: BookOpen },
    { name: 'Campaigns', icon: Send },
    { name: 'Templates', icon: FileText },
    { name: 'Inbox', icon: Inbox },
    { name: 'Calls', icon: PhoneCall },
    { name: 'Analytics', icon: BarChart3 },
    { name: 'Integrations', icon: Layers }
  ];

  return (
    <section 
      id="dashboard-preview-section"
      className="py-20 sm:py-28 bg-[#F4F7EE] text-[#141912] relative overflow-hidden select-none"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] text-[#003D2B] text-xs font-semibold mb-4">
            <LayoutDashboard className="w-3.5 h-3.5 text-[#003D2B]" />
            <span>Unified Operating Environment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[800] tracking-tight leading-[1.12] text-[#141912] mb-6">
            Everything Your Growth Team Needs.{' '}
            <span className="text-[#003D2B]">
              In One Workspace.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#4E5B49] leading-relaxed max-w-3xl mx-auto">
            Experience the power of a fully integrated command center. Manage high-velocity lead pipelines, 
            multichannel campaigns, real-time AI responses, and deep revenue analytics under one unified interface.
          </p>
        </div>

        {/* ————————————————— COMPLETE ENTERPRISE SAAS DASHBOARD PREVIEW ————————————————— */}
        <div className="relative mx-auto rounded-[2rem] p-[1.5px] shadow-[0_24px_60px_rgba(20,25,18,0.10)] bg-gradient-to-b from-[#D5E1CE] to-[#EAEFE5]">
          <div className="relative rounded-[calc(2rem-1.5px)] overflow-hidden bg-white">
            
            {/* Top Browser Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#F4F7EE] border-b border-[#D5E1CE] text-xs text-[#4E5B49]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <span className="ml-3 hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D5E1CE] font-mono text-[11px] text-[#003D2B] font-semibold">
                  <ShieldCheck className="w-3 h-3 text-[#003D2B]" />
                  gtm-os.anvriksh.com/app/{activeNav.toLowerCase().replace(' ', '-')}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#003D2B] bg-[#E3EDE0] border border-[#D3E2CF] px-2.5 py-0.5 rounded-full">
                  Live Interactive Workspace
                </span>
                <span className="text-[#4E5B49] hidden sm:inline text-xs font-mono">Build 2.8.4</span>
              </div>
            </div>

            {/* Main Workspace Frame with Sidebar + Main View */}
            <div className="flex flex-col lg:flex-row min-h-[620px]">
              
              {/* ————————— LEFT SIDEBAR ————————— */}
              <div className="w-full lg:w-60 bg-[#F4F7EE]/80 border-b lg:border-b-0 lg:border-r border-[#D5E1CE] p-4 flex flex-col justify-between shrink-0">
                <div className="space-y-6">
                  
                  {/* Brand Header */}
                  <div className="flex items-center gap-2.5 px-2 py-1.5">
                    <div className="w-8 h-8 rounded-lg bg-[#003D2B] flex items-center justify-center text-white font-bold text-sm shadow-xs">
                      G
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[#141912] tracking-tight">Genquantaa GTM OS</div>
                      <div className="text-[10px] text-[#4E5B49] font-mono">Enterprise Suite</div>
                    </div>
                  </div>

                  {/* Navigation Items (10 Modules Specified) */}
                  <nav className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-1 gap-1">
                    {navItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = activeNav === item.name;
                      return (
                        <button
                          key={item.name}
                          onClick={() => setActiveNav(item.name)}
                          className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                            isActive
                              ? 'bg-[#003D2B] text-white shadow-xs'
                              : 'text-[#4E5B49] hover:text-[#141912] hover:bg-white'
                          }`}
                        >
                          <Icon className="w-4 h-4 shrink-0" />
                          <span className="truncate">{item.name}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>

                {/* Workspace User Profile / Org */}
                <div className="pt-4 mt-4 border-t border-[#D5E1CE] hidden lg:flex items-center justify-between px-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-7 h-7 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-xs font-bold text-[#003D2B] shrink-0">
                      AC
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-[#141912] truncate">Acme Revenue Corp</div>
                      <div className="text-[10px] text-[#003D2B] font-mono font-bold">Growth Tier</div>
                    </div>
                  </div>
                  <Sliders className="w-3.5 h-3.5 text-[#4E5B49]" />
                </div>
              </div>

              {/* ————————— MAIN CONTENT CANVAS ————————— */}
              <div className="flex-1 p-5 sm:p-7 bg-white flex flex-col justify-between">
                
                <div>
                  {/* Top Action Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#D5E1CE]">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-[800] text-[#141912]">
                        {activeNav === 'Dashboard' ? 'Revenue & Pipeline Overview' : `${activeNav} Module`}
                      </h3>
                      <p className="text-xs text-[#4E5B49] mt-1 font-medium">
                        Coordinating 24 autonomous modules across multi-channel outreach.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center p-1 rounded-lg bg-[#F4F7EE] border border-[#D5E1CE] text-xs font-semibold">
                        {(['7d', '30d', '90d'] as const).map((r) => (
                          <button
                            key={r}
                            onClick={() => setTimeRange(r)}
                            className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${timeRange === r ? 'bg-[#003D2B] text-white' : 'text-[#4E5B49] hover:text-[#141912]'}`}
                          >
                            {r}
                          </button>
                        ))}
                      </div>

                      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#E3EDE0] hover:bg-[#D5E1CE] border border-[#D3E2CF] text-xs font-bold text-[#003D2B] cursor-pointer">
                        <Sparkles className="w-3.5 h-3.5 text-[#003D2B]" />
                        <span>Ask AI Copilot</span>
                      </button>
                    </div>
                  </div>

                  {/* 4 Core KPI Metric Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 my-6">
                    
                    <div className="p-4 rounded-xl bg-[#F4F7EE]/60 border border-[#D5E1CE]">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#4E5B49] flex items-center justify-between">
                        <span>Total Leads</span>
                        <Users className="w-3.5 h-3.5 text-[#003D2B]" />
                      </div>
                      <div className="text-2xl font-[800] text-[#141912] mt-1.5">14,820</div>
                      <div className="text-[11px] text-[#003D2B] mt-1 flex items-center gap-1 font-bold">
                        <TrendingUp className="w-3 h-3" />
                        <span>+18.4% velocity</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F4F7EE]/60 border border-[#D5E1CE]">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#4E5B49] flex items-center justify-between">
                        <span>Qualified Prospects</span>
                        <Zap className="w-3.5 h-3.5 text-[#003D2B]" />
                      </div>
                      <div className="text-2xl font-[800] text-[#141912] mt-1.5">3,490</div>
                      <div className="text-[11px] text-[#2D452C] mt-1 font-semibold">
                        <span>ICP score {'>'} 85%</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F4F7EE]/60 border border-[#D5E1CE]">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#4E5B49] flex items-center justify-between">
                        <span>Active Campaigns</span>
                        <Send className="w-3.5 h-3.5 text-[#003D2B]" />
                      </div>
                      <div className="text-2xl font-[800] text-[#141912] mt-1.5">18</div>
                      <div className="text-[11px] text-[#4E5B49] mt-1 font-semibold">
                        <span>Across 5 active channels</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F4F7EE]/60 border border-[#D5E1CE]">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#4E5B49] flex items-center justify-between">
                        <span>Engagement Rate</span>
                        <BarChart3 className="w-3.5 h-3.5 text-[#003D2B]" />
                      </div>
                      <div className="text-2xl font-[800] text-[#003D2B] mt-1.5">64.2%</div>
                      <div className="text-[11px] text-[#4E5B49] mt-1 font-semibold">
                        <span>28.5% positive reply</span>
                      </div>
                    </div>

                  </div>

                  {/* 2-Column Main Graph & AI Insights Row */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    {/* Left (2 cols): Campaign Performance Chart & Channel Breakdown */}
                    <div className="lg:col-span-2 p-5 rounded-2xl bg-[#F4F7EE]/50 border border-[#D5E1CE] space-y-4">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-[#141912]">Campaign Conversion Funnel</span>
                        <span className="text-[#4E5B49] font-mono font-semibold">Normalized Weekly Volume</span>
                      </div>

                      {/* Funnel Progress Bars */}
                      <div className="space-y-3 pt-2">
                        {[
                          { stage: 'Discovered Accounts', count: '14,820', pct: 100, color: 'bg-[#003D2B]' },
                          { stage: 'Verified & Enriched Contacts', count: '9,450', pct: 64, color: 'bg-[#2D452C]' },
                          { stage: 'Qualified ICP Prospects', count: '3,490', pct: 37, color: 'bg-[#54755A]' },
                          { stage: 'Engaged Multi-Channel', count: '2,240', pct: 24, color: 'bg-[#698F70]' },
                          { stage: 'Positive Conversations / Demos', count: '638', pct: 15, color: 'bg-[#003D2B]' }
                        ].map((bar, i) => (
                          <div key={i} className="space-y-1">
                            <div className="flex items-center justify-between text-xs text-[#141912]">
                              <span className="font-semibold">{bar.stage}</span>
                              <span className="font-mono text-[#4E5B49] font-bold">{bar.count} ({bar.pct}%)</span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-[#D5E1CE] overflow-hidden">
                              <div className={`h-full rounded-full ${bar.color} transition-all duration-700`} style={{ width: `${bar.pct}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Channel-Wise Engagement Summary */}
                      <div className="pt-4 border-t border-[#D5E1CE] grid grid-cols-4 gap-2 text-center text-xs">
                        <div className="p-2.5 rounded bg-white border border-[#D5E1CE]">
                          <div className="text-[10px] text-[#4E5B49] font-bold">Email Deliverability</div>
                          <div className="font-[800] text-[#003D2B] text-sm mt-0.5">99.4%</div>
                        </div>
                        <div className="p-2.5 rounded bg-white border border-[#D5E1CE]">
                          <div className="text-[10px] text-[#4E5B49] font-bold">LinkedIn Accept</div>
                          <div className="font-[800] text-[#141912] text-sm mt-0.5">42.8%</div>
                        </div>
                        <div className="p-2.5 rounded bg-white border border-[#D5E1CE]">
                          <div className="text-[10px] text-[#4E5B49] font-bold">WhatsApp Read</div>
                          <div className="font-[800] text-[#003D2B] text-sm mt-0.5">88.1%</div>
                        </div>
                        <div className="p-2.5 rounded bg-white border border-[#D5E1CE]">
                          <div className="text-[10px] text-[#4E5B49] font-bold">Voice Answer Rate</div>
                          <div className="font-[800] text-[#141912] text-sm mt-0.5">31.6%</div>
                        </div>
                      </div>
                    </div>

                    {/* Right (1 col): AI-Generated Insights & Recent Activity */}
                    <div className="p-5 rounded-2xl bg-[#F4F7EE]/50 border border-[#D5E1CE] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-bold text-[#003D2B] mb-4 pb-3 border-b border-[#D5E1CE]">
                          <Bot className="w-4 h-4 text-[#003D2B]" />
                          <span>AI Growth Copilot Insights</span>
                        </div>

                        <div className="space-y-3 text-xs">
                          <div className="p-3 rounded-xl bg-white border border-[#D5E1CE] text-[#141912] shadow-2xs">
                            <span className="font-bold text-[#003D2B] block mb-1">High-Intent Cluster Detected:</span>
                            Fintech engineering leaders in APAC responded with 42% higher positive sentiment to sequence #3. Recommend scaling allocations.
                          </div>

                          <div className="p-3 rounded-xl bg-white border border-[#D5E1CE] text-[#141912] shadow-2xs">
                            <span className="font-bold text-[#003D2B] block mb-1">Automated Throttling:</span>
                            Domain warm-up completed successfully for secondary mailboxes. Daily sending velocity auto-adjusted safely to +15%.
                          </div>

                          <div className="p-3 rounded-xl bg-white border border-[#D5E1CE] text-[#141912] shadow-2xs">
                            <span className="font-bold text-[#2D452C] block mb-1">Calendar Integration:</span>
                            8 new demos synchronized directly to executive calendars today without manual rep scheduling.
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-[#D5E1CE] flex items-center justify-between text-[11px] text-[#4E5B49] font-semibold">
                        <span>Real-time continuous inference</span>
                        <span className="text-[#003D2B] font-mono font-bold">Sync: OK</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Data Disclaimer */}
                <div className="mt-6 pt-4 border-t border-[#D5E1CE] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#4E5B49]">
                  <span>* Realistic illustrative demonstration data. Enterprise tenant data is strictly isolated and client-owned.</span>
                  <span className="font-mono text-[#003D2B] font-semibold">Role-Based Access Control Active</span>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default GTMOSDashboard;
