import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';

const VoiceAgentShowcase: React.FC = () => {
  return (
    <section 
      className="relative pt-12 sm:pt-16 pb-16 sm:pb-24 bg-gradient-to-b from-[#F4F7EE] via-[#E8F0E4] to-[#F1F6EC] select-none overflow-hidden" 
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* ————— Atmospheric Theme Background Mesh Gradients & Micro-dots ————— */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle dot matrix grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#003D2B_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-[0.035]" />
        
        {/* Top-left soft emerald bloom */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-[#003D2B]/10 via-[#526B3D]/6 to-transparent rounded-full blur-[120px]" />
        
        {/* Top-right warm champagne gold bloom */}
        <div className="absolute top-10 -right-24 w-[550px] h-[550px] bg-gradient-to-bl from-[#E2BC94]/25 via-[#F7E7D2]/15 to-transparent rounded-full blur-[100px]" />
        
        {/* Center ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#D5E1CE]/30 via-white/40 to-[#E3EDE0]/30 rounded-full blur-[130px]" />
        
        {/* Bottom-left sage accent glow */}
        <div className="absolute -bottom-24 left-1/4 w-[500px] h-[400px] bg-gradient-to-tr from-[#003D2B]/8 via-[#698F70]/8 to-transparent rounded-full blur-[110px]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* —————————— SECTION HEADER —————————— */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <Reveal variant="fade" duration={600}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3EDE0] border border-[#D5E1CE] shadow-xs mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#003D2B] animate-pulse" />
                <span className="text-[12px] font-bold text-[#003D2B] tracking-tight">
                  Voice AI &amp; Autonomous Calling
                </span>
              </div>
            </Reveal>

            <Reveal variant="up" duration={700} delay={60}>
              <h2 className="text-3xl sm:text-4xl md:text-[46px] font-[700] text-[#141912] tracking-[-0.025em] leading-[1.12]">
                Powerful <span className="text-[#8B7355] font-serif italic font-normal">AI voice</span> tools<br />built for everyone
              </h2>
            </Reveal>

            <Reveal variant="up" duration={700} delay={120}>
              <p className="mt-3 text-sm sm:text-base text-[#616E7C] font-normal leading-relaxed max-w-xl">
                From autonomous calling agents to enterprise outreach, ANVRiksh helps you produce high-quality voiceover and real-time speech workflows without the studio.
              </p>
            </Reveal>
          </div>

          <Reveal variant="fade" duration={700} delay={160}>
            <Link
              to="/calling-agent"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#141912] hover:bg-[#003D2B] text-white text-xs font-bold transition-all shadow-sm hover:shadow-md hover:scale-105 active:scale-95 shrink-0 self-start md:self-end"
            >
              <span>Explore features</span>
              <i className="fas fa-angles-right text-[10px]" />
            </Link>
          </Reveal>
        </div>

        {/* —————————— BENTO GRID (12-column layout matching reference design) —————————— */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          
          {/* ================= CARD 1: API integration with Giant Rotating Arc (6 cols) ================= */}
          <Reveal variant="up" duration={700} delay={100} className="lg:col-span-6">
            <div className="h-full min-h-[350px] sm:min-h-[380px] bg-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-9 border border-[#D9E3D5] shadow-[0_8px_30px_rgba(0,61,43,0.05),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_18px_44px_rgba(0,61,43,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              
              {/* Card Header Text */}
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-[27px] font-[600] text-[#141912] tracking-[-0.02em] leading-tight">
                  API integration
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#616E7C] leading-relaxed max-w-sm">
                  Connect ANVRiksh with your tools and automate voice workflows.
                </p>
              </div>

              {/* Giant Rotating Arc Container */}
              <div className="absolute left-1/2 -translate-x-1/2 top-[165px] sm:top-[175px] w-[1100px] sm:w-[1380px] md:w-[1484px] h-[1100px] sm:h-[1380px] md:h-[1484px] pointer-events-none select-none">
                <svg 
                  className="ai-voice-generator-integration-circle w-full h-full animate-[spin_60s_linear_infinite] origin-center" 
                  viewBox="0 0 1484 1484" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="740" cy="744" r="699.5" stroke="#EAE3D2" strokeWidth="1.5" />

                  {/* gemini - top (0°) */}
                  <g transform="translate(704 4)">
                    <circle cx="36" cy="36" r="32" fill="#0D1017" stroke="#F4EFE7" strokeWidth="8" />
                    <image href="/images/icons/gemini.svg" x="17" y="17" width="38" height="38" />
                  </g>

                  {/* lovable - top-right */}
                  <g transform="translate(885 32)">
                    <circle cx="36" cy="36" r="32" fill="#0D1017" stroke="#F4EFE7" strokeWidth="8" />
                    <image href="/images/icons/lovable.svg" x="18" y="18" width="36" height="36" />
                  </g>

                  {/* claude ai - right */}
                  <g transform="translate(1055 102)">
                    <circle cx="36" cy="36" r="32" fill="#0D1017" stroke="#F4EFE7" strokeWidth="8" />
                    <image href="/images/icons/claude-ai.svg" x="17.5" y="17" width="37" height="38" />
                  </g>

                  {/* qwen - right-bottom */}
                  <g transform="translate(1201 213)">
                    <circle cx="36" cy="36" r="32" fill="#0D1017" stroke="#F4EFE7" strokeWidth="8" />
                    <image href="/images/icons/qwen-ai.svg" x="20" y="21.5" width="32" height="29" />
                  </g>

                  {/* deepseek - bottom-right */}
                  <g transform="translate(1315 358)">
                    <circle cx="36" cy="36" r="32" fill="#0D1017" stroke="#F4EFE7" strokeWidth="8" />
                    <image href="/images/icons/deepseek.svg" x="17" y="17" width="38" height="38" />
                  </g>

                  {/* runway - bottom-right */}
                  <g transform="translate(1379 528)">
                    <circle cx="36" cy="36" r="32" fill="#0D1017" stroke="#F4EFE7" strokeWidth="8" />
                    <image href="/images/icons/runway.svg" x="17" y="25.5" width="38" height="21" />
                  </g>

                  {/* chatgpt - bottom (right-most) */}
                  <g transform="translate(1408 708)">
                    <circle cx="36" cy="36" r="32" fill="#0D1017" stroke="#F4EFE7" strokeWidth="8" />
                    <image href="/images/icons/chatgpt-ai.svg" x="17" y="17" width="38" height="38" />
                  </g>

                  {/* mistral ai - bottom (rotated 180) */}
                  <g transform="translate(1379 888)">
                    <circle cx="36" cy="36" r="32" fill="#0D1017" stroke="#F4EFE7" strokeWidth="8" />
                    <g transform="rotate(180 36 36)">
                      <image href="/images/icons/mistral-ai.svg" x="17" y="17" width="38" height="38" />
                    </g>
                  </g>

                  {/* grok - bottom-left */}
                  <g transform="translate(1315 1060)">
                    <circle cx="36" cy="36" r="32" fill="#0D1017" stroke="#F4EFE7" strokeWidth="8" />
                    <image href="/images/icons/grok-ai.svg" x="20.5" y="20.5" width="31" height="31" />
                  </g>

                  {/* perplexity - left-bottom (rotated 180) */}
                  <g transform="translate(1197 1203)">
                    <circle cx="36" cy="36" r="32" fill="#0D1017" stroke="#F4EFE7" strokeWidth="8" />
                    <g transform="rotate(180 36 36)">
                      <image href="/images/icons/perplexity-ai.svg" x="22.5" y="22.5" width="28" height="28" />
                    </g>
                  </g>

                  {/* mocha - right bottom */}
                  <g transform="translate(1053 1312)">
                    <circle cx="36" cy="36" r="32" fill="#0D1017" stroke="#F4EFE7" strokeWidth="8" />
                    <image href="/images/icons/mocha-ai.svg" x="18.6" y="18.6" width="34.83" height="34.83" />
                  </g>

                  {/* github - bottom (rotated 180) */}
                  <g transform="translate(887 1387)">
                    <circle cx="36" cy="36" r="32" fill="#0D1017" stroke="#F4EFE7" strokeWidth="8" />
                    <g transform="rotate(180 36 36)">
                      <image href="/images/icons/github.svg" x="17" y="18" width="38" height="36" />
                    </g>
                  </g>

                  {/* gemini - bottom */}
                  <g transform="translate(704 1408)">
                    <circle cx="36" cy="36" r="32" fill="#0D1017" stroke="#F4EFE7" strokeWidth="8" />
                    <image href="/images/icons/gemini.svg" x="17" y="17" width="38" height="38" />
                  </g>

                  {/* lovable - left-bottom (rotated 180) */}
                  <g transform="translate(521 1380)">
                    <circle cx="36" cy="36" r="32" fill="#0D1017" stroke="#F4EFE7" strokeWidth="8" />
                    <g transform="rotate(180 36 36)">
                      <image href="/images/icons/lovable.svg" x="18" y="18" width="36" height="36" />
                    </g>
                  </g>

                  {/* claude ai - left bottom */}
                  <g transform="translate(355 1314)">
                    <circle cx="36" cy="36" r="32" fill="#0D1017" stroke="#F4EFE7" strokeWidth="8" />
                    <image href="/images/icons/claude-ai.svg" x="17.5" y="17" width="37" height="38" />
                  </g>

                  {/* qwen - left-bottom */}
                  <g transform="translate(209 1203)">
                    <circle cx="36" cy="36" r="32" fill="#0D1017" stroke="#F4EFE7" strokeWidth="8" />
                    <image href="/images/icons/qwen-ai.svg" x="20" y="21.5" width="32" height="29" />
                  </g>

                  {/* deepseek - left bottom (rotated 180) */}
                  <g transform="translate(97 1058)">
                    <circle cx="36" cy="36" r="32" fill="#0D1017" stroke="#F4EFE7" strokeWidth="8" />
                    <g transform="rotate(180 36 36)">
                      <image href="/images/icons/deepseek.svg" x="17" y="17" width="38" height="38" />
                    </g>
                  </g>

                  {/* runway - left bottom (rotated 180) */}
                  <g transform="translate(33 890)">
                    <circle cx="36" cy="36" r="32" fill="#0D1017" stroke="#F4EFE7" strokeWidth="8" />
                    <g transform="rotate(180 36 36)">
                      <image href="/images/icons/runway.svg" x="17" y="25.5" width="38" height="21" />
                    </g>
                  </g>

                  {/* chatgpt - left */}
                  <g transform="translate(4 702)">
                    <circle cx="36" cy="36" r="32" fill="#0D1017" stroke="#F4EFE7" strokeWidth="8" />
                    <image href="/images/icons/chatgpt-ai.svg" x="17" y="17" width="38" height="38" />
                  </g>

                  {/* mistral ai - top */}
                  <g transform="translate(33 528)">
                    <circle cx="36" cy="36" r="32" fill="#0D1017" stroke="#F4EFE7" strokeWidth="8" />
                    <image href="/images/icons/mistral-ai.svg" x="17" y="17" width="38" height="38" />
                  </g>

                  {/* grok - top-left */}
                  <g transform="translate(97 358)">
                    <circle cx="36" cy="36" r="32" fill="#0D1017" stroke="#F4EFE7" strokeWidth="8" />
                    <image href="/images/icons/grok-ai.svg" x="20.5" y="20.5" width="31" height="31" />
                  </g>

                  {/* perplexity - top-left */}
                  <g transform="translate(209 213)">
                    <circle cx="36" cy="36" r="32" fill="#0D1017" stroke="#F4EFE7" strokeWidth="8" />
                    <image href="/images/icons/perplexity-ai.svg" x="22.5" y="22.5" width="28" height="28" />
                  </g>

                  {/* mocha - top-left */}
                  <g transform="translate(355 101)">
                    <circle cx="36" cy="36" r="32" fill="#0D1017" stroke="#F4EFE7" strokeWidth="8" />
                    <image href="/images/icons/mocha-ai.svg" x="18.6" y="18.6" width="34.83" height="34.83" />
                  </g>

                  {/* github - top-right */}
                  <g transform="translate(523 36)">
                    <circle cx="36" cy="36" r="32" fill="#0D1017" stroke="#F4EFE7" strokeWidth="8" />
                    <image href="/images/icons/github.svg" x="17" y="18" width="38" height="36" />
                  </g>
                </svg>
              </div>

            </div>
          </Reveal>

          {/* ================= TOP-RIGHT STACK (6 cols: Card 2 & Card 3) ================= */}
          <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6">
            
            {/* CARD 2: Video editor + subtitle Generator */}
            <Reveal variant="up" duration={700} delay={160} className="flex-1">
              <div className="h-full min-h-[170px] bg-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 border border-[#D9E3D5] shadow-[0_8px_30px_rgba(0,61,43,0.05),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_18px_44px_rgba(0,61,43,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 overflow-hidden relative group">
                <div>
                  <h3 className="text-xl sm:text-[23px] font-[600] text-[#141912] tracking-[-0.02em] leading-tight">
                    Video editor + subtitle Generator
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#616E7C] leading-relaxed max-w-sm">
                    Add voice, visuals, and subtitles all in one place.
                  </p>
                </div>
                {/* Mini video timeline preview widget */}
                <div className="shrink-0 bg-[#F4F7EE] border border-[#E2E8F0] rounded-xl p-3 shadow-2xs w-full md:w-56 group-hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold text-[#003D2B] bg-[#E3EDE0] px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Auto-subtitles
                    </span>
                    <span className="text-[10px] text-[#94A3B8] font-mono">00:14 / 01:30</span>
                  </div>
                  {/* Timeline audio track bars */}
                  <div className="h-4 bg-white rounded-md p-0.5 flex items-center gap-0.5 border border-[#E2E8F0]">
                    {[6, 10, 14, 8, 12, 16, 10, 14, 18, 12, 8, 14, 16, 10, 6, 12, 15, 8, 11, 14, 9, 6].map((h, i) => (
                      <span key={i} className="flex-1 bg-[#D5E1CE] rounded-xs" style={{ height: `${h}px` }} />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* CARD 3: Multilingual & multi-accent voices with Ambient Glow */}
            <Reveal variant="up" duration={700} delay={220} className="flex-1">
              <div className="h-full min-h-[170px] bg-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 border border-[#D9E3D5] shadow-[0_8px_30px_rgba(0,61,43,0.05),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_18px_44px_rgba(0,61,43,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center relative overflow-hidden group">
                
                {/* Ambient Soft Mesh Gradient on right corner */}
                <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-bl from-blue-400/35 via-purple-300/30 to-amber-300/35 rounded-full blur-2xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />

                <div className="relative z-10">
                  <h3 className="text-xl sm:text-[23px] font-[600] text-[#141912] tracking-[-0.02em] leading-tight">
                    Multilingual &amp; multi-accent voices
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#616E7C] leading-relaxed max-w-sm">
                    100+ languages and regional accents.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>

          {/* ================= CARD 4: Text to speech (3 cols) ================= */}
          <Reveal variant="up" duration={700} delay={260} className="lg:col-span-3">
            <div className="h-full min-h-[350px] bg-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 border border-[#D9E3D5] shadow-[0_8px_30px_rgba(0,61,43,0.05),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_18px_44px_rgba(0,61,43,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <h3 className="text-xl sm:text-[23px] font-[600] text-[#141912] tracking-[-0.02em] leading-tight">
                  Text to speech
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#616E7C] leading-relaxed">
                  Convert your script into ultra realistic speech.
                </p>
              </div>

              {/* Text Input Simulation Card */}
              <div className="mt-6 bg-[#EDF2F4] rounded-2xl p-4 sm:p-5 flex flex-col justify-between min-h-[150px] border border-[#E2E8F0]">
                <p className="text-xs text-[#616E7C] leading-relaxed">
                  Describe the text you want to create, in any voice.
                </p>

                <div className="pt-4 flex items-center justify-end">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#141912] hover:bg-[#003D2B] text-white text-xs font-bold transition-all shadow-xs hover:scale-105 active:scale-95"
                  >
                    <span>Get started</span>
                    <i className="fas fa-angles-right text-[10px]" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ================= CARD 5: Voice cloning (3 cols) with Sunset Avatar & Exact Waveform ================= */}
          <Reveal variant="up" duration={700} delay={320} className="lg:col-span-3">
            <div className="h-full min-h-[350px] bg-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 border border-[#D9E3D5] shadow-[0_8px_30px_rgba(0,61,43,0.05),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_18px_44px_rgba(0,61,43,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              
              {/* Soft corner blush glow */}
              <div className="absolute top-0 left-0 w-36 h-36 bg-gradient-to-br from-amber-300/35 via-purple-300/25 to-transparent rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-xl sm:text-[23px] font-[600] text-[#141912] tracking-[-0.02em] leading-tight">
                  Voice cloning
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#616E7C] leading-relaxed">
                  Create a custom voice from just a few audio samples.
                </p>
              </div>

              {/* Exact dialogue snippet matching user's reference image */}
              <div className="relative z-10 mt-6 flex h-auto w-full flex-col justify-between space-y-3 rounded-xl">
                
                {/* Item one (Right-aligned: Audio + Sunset Avatar) */}
                <div className="flex items-center justify-end gap-x-2.5">
                  <div className="bg-[#EEF2F4] flex items-center justify-between gap-x-2.5 rounded-full px-3.5 py-1.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="text-[#64748B] text-[10px] leading-none font-mono">06:18</span>
                    {/* Realistic Audio Waveform Bars */}
                    <div className="flex items-center gap-[2px] h-3.5">
                      {[4, 7, 12, 14, 8, 12, 16, 14, 18, 12, 6, 10, 15, 12, 7, 4].map((h, i) => (
                        <span key={i} className="w-[2px] rounded-full bg-[#94A3B8]" style={{ height: `${h}px` }} />
                      ))}
                    </div>
                    <button type="button" aria-label="Play voice sample" className="w-4.5 h-4.5 rounded-full bg-[#181C20] text-white flex items-center justify-center text-[7px] shrink-0 shadow-xs">
                      <i className="fas fa-play ml-0.5" />
                    </button>
                  </div>
                  <div className="w-[34px] h-[34px] shrink-0 overflow-hidden rounded-full shadow-xs">
                    <img src="/images/voice_avatar_sunset.png" alt="Voice avatar" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Item two (Left-aligned: Peach Chevron Badge + Audio) */}
                <div className="flex items-center justify-start gap-x-2.5">
                  <div className="w-[34px] h-[34px] shrink-0 overflow-hidden rounded-full bg-[#E5BC92] flex items-center justify-center text-[#181C20] shadow-xs">
                    <span className="text-xs font-black tracking-tighter leading-none select-none">❯❯❯</span>
                  </div>
                  <div className="bg-[#EEF2F4] flex items-center justify-between gap-x-2.5 rounded-full px-3.5 py-1.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="text-[#64748B] text-[10px] leading-none font-mono">06:18</span>
                    <div className="flex items-center gap-[2px] h-3.5">
                      {[3, 6, 10, 15, 12, 8, 14, 16, 14, 11, 7, 12, 14, 9, 6, 3].map((h, i) => (
                        <span key={i} className="w-[2px] rounded-full bg-[#94A3B8]" style={{ height: `${h}px` }} />
                      ))}
                    </div>
                    <button type="button" aria-label="Play voice sample" className="w-4.5 h-4.5 rounded-full bg-[#181C20] text-white flex items-center justify-center text-[7px] shrink-0 shadow-xs">
                      <i className="fas fa-play ml-0.5" />
                    </button>
                  </div>
                </div>

                {/* Item three (Right-aligned: Audio + Second Unique Avatar) */}
                <div className="flex items-center justify-end gap-x-2.5">
                  <div className="bg-[#EEF2F4] flex items-center justify-between gap-x-2.5 rounded-full px-3.5 py-1.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="text-[#64748B] text-[10px] leading-none font-mono">06:18</span>
                    <div className="flex items-center gap-[2px] h-3.5">
                      {[5, 9, 13, 16, 11, 7, 14, 18, 15, 10, 6, 12, 14, 11, 7, 4].map((h, i) => (
                        <span key={i} className="w-[2px] rounded-full bg-[#94A3B8]" style={{ height: `${h}px` }} />
                      ))}
                    </div>
                    <button type="button" aria-label="Play voice sample" className="w-4.5 h-4.5 rounded-full bg-[#181C20] text-white flex items-center justify-center text-[7px] shrink-0 shadow-xs">
                      <i className="fas fa-play ml-0.5" />
                    </button>
                  </div>
                  <div className="w-[34px] h-[34px] shrink-0 overflow-hidden rounded-full shadow-xs">
                    <img src="/images/voice_avatar_2.png" alt="Voice avatar" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Item four (Left-aligned: Peach Chevron Badge + Audio) */}
                <div className="flex items-center justify-start gap-x-2.5">
                  <div className="w-[34px] h-[34px] shrink-0 overflow-hidden rounded-full bg-[#E5BC92] flex items-center justify-center text-[#181C20] shadow-xs">
                    <span className="text-xs font-black tracking-tighter leading-none select-none">❯❯❯</span>
                  </div>
                  <div className="bg-[#EEF2F4] flex items-center justify-between gap-x-2.5 rounded-full px-3.5 py-1.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="text-[#64748B] text-[10px] leading-none font-mono">06:18</span>
                    <div className="flex items-center gap-[2px] h-3.5">
                      {[4, 8, 11, 14, 10, 6, 12, 15, 17, 12, 8, 11, 14, 9, 5, 3].map((h, i) => (
                        <span key={i} className="w-[2px] rounded-full bg-[#94A3B8]" style={{ height: `${h}px` }} />
                      ))}
                    </div>
                    <button type="button" aria-label="Play voice sample" className="w-4.5 h-4.5 rounded-full bg-[#181C20] text-white flex items-center justify-center text-[7px] shrink-0 shadow-xs">
                      <i className="fas fa-play ml-0.5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </Reveal>

          {/* ================= CARD 6: AI voice changer with Moveable Animated Harmonic Waves (6 cols) ================= */}
          <Reveal variant="up" duration={700} delay={380} className="lg:col-span-6">
            <div className="h-full min-h-[350px] bg-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-9 border border-[#D9E3D5] shadow-[0_8px_30px_rgba(0,61,43,0.05),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_18px_44px_rgba(0,61,43,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              
              <div>
                <h3 className="text-2xl sm:text-[27px] font-[600] text-[#141912] tracking-[-0.02em] leading-tight">
                  AI voice changer
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#616E7C] leading-relaxed max-w-sm">
                  Transform any voice into a professional-sounding tone.
                </p>
              </div>

              {/* Center Floating Creator Avatar with Mic Badge & Moveable Harmonic Waves */}
              <div className="relative pt-6 pb-0 flex flex-col items-center justify-end">
                
                {/* Center Creator Image & Mic Badge */}
                <div className="relative mb-3 group-hover:scale-105 transition-transform duration-300 z-10">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#E2BC94] shadow-lg bg-[#141912]">
                    <img 
                      src="/images/voice_creator_card6.png" 
                      alt="AI voice creator" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Floating Mic Pill Badge */}
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#141912] border-2 border-white text-emerald-400 flex items-center justify-center text-xs shadow-md">
                    <i className="fas fa-microphone-lines text-[11px]" />
                  </div>
                </div>

                {/* Moveable Horizontal Flowing Waves Container (Continuous Smooth Sine Animation) */}
                <div className="w-full h-20 relative overflow-hidden flex items-end">
                  <style>{`
                    @keyframes waveFlowMarquee {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(-50%); }
                    }
                    @keyframes waveSwayPulse {
                      0%, 100% { transform: translateY(0px) scaleY(1); }
                      50% { transform: translateY(-4px) scaleY(1.18); }
                    }
                    .animate-wave-flow {
                      animation: waveFlowMarquee 3.5s linear infinite;
                    }
                    .group:hover .animate-wave-flow {
                      animation-duration: 1.8s;
                    }
                    .animate-wave-sway {
                      animation: waveSwayPulse 2.8s ease-in-out infinite;
                    }
                  `}</style>
                  <div 
                    className="w-[200%] flex shrink-0 animate-wave-flow animate-wave-sway"
                    style={{ willChange: 'transform' }}
                  >
                    {/* Seamless Wave Segment 1 */}
                    <svg className="w-1/2 h-18 shrink-0" viewBox="0 0 600 70" fill="none" preserveAspectRatio="none">
                      <path 
                        d="M0 35 C 75 10, 150 60, 225 35 C 300 10, 375 60, 450 35 C 525 10, 560 50, 600 35" 
                        stroke="#E2BC94" 
                        strokeWidth="2.2" 
                        strokeLinecap="round"
                      />
                      <path 
                        d="M0 35 C 60 55, 140 15, 210 35 C 290 55, 360 15, 430 35 C 510 55, 570 20, 600 35" 
                        stroke="#D9AF86" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                        opacity="0.8"
                      />
                      <path 
                        d="M0 35 C 100 20, 160 50, 260 35 C 340 20, 410 50, 500 35 C 550 25, 580 45, 600 35" 
                        stroke="#C49B72" 
                        strokeWidth="1.8" 
                        strokeLinecap="round"
                        opacity="0.65"
                      />
                    </svg>

                    {/* Seamless Wave Segment 2 (Duplicate for continuous seamless loop) */}
                    <svg className="w-1/2 h-18 shrink-0" viewBox="0 0 600 70" fill="none" preserveAspectRatio="none">
                      <path 
                        d="M0 35 C 75 10, 150 60, 225 35 C 300 10, 375 60, 450 35 C 525 10, 560 50, 600 35" 
                        stroke="#E2BC94" 
                        strokeWidth="2.2" 
                        strokeLinecap="round"
                      />
                      <path 
                        d="M0 35 C 60 55, 140 15, 210 35 C 290 55, 360 15, 430 35 C 510 55, 570 20, 600 35" 
                        stroke="#D9AF86" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                        opacity="0.8"
                      />
                      <path 
                        d="M0 35 C 100 20, 160 50, 260 35 C 340 20, 410 50, 500 35 C 550 25, 580 45, 600 35" 
                        stroke="#C49B72" 
                        strokeWidth="1.8" 
                        strokeLinecap="round"
                        opacity="0.65"
                      />
                    </svg>
                  </div>
                </div>

              </div>

            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};

export default VoiceAgentShowcase;
