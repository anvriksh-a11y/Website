import React from 'react';
import Reveal from './Reveal';

const AIInAction: React.FC = () => {
  return (
    <section 
      className="relative pt-12 sm:pt-16 pb-20 sm:pb-28 bg-gradient-to-b from-[#F1F6EC] via-[#E8F0E4] to-[#F4F7EE] select-none overflow-hidden" 
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* ————— Atmospheric Theme Background Mesh Gradients & Micro-dots ————— */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle dot matrix grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#003D2B_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-[0.035]" />
        
        {/* Center top ambient emerald halo */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-[#003D2B]/9 via-[#526B3D]/5 to-transparent rounded-full blur-[120px]" />
        
        {/* Right side warm champagne gold radiance */}
        <div className="absolute top-1/3 -right-20 w-[500px] h-[550px] bg-gradient-to-l from-[#E2BC94]/22 via-[#F7E7D2]/12 to-transparent rounded-full blur-[110px]" />
        
        {/* Left side organic forest mist */}
        <div className="absolute bottom-10 -left-20 w-[600px] h-[500px] bg-gradient-to-tr from-[#D5E1CE]/35 via-[#003D2B]/6 to-transparent rounded-full blur-[110px]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header (clean & minimalist matching reference design) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Reveal variant="fade" duration={600}>
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-[700] text-[#1A1F26] tracking-[-0.025em] leading-[1.15]">
              Experience AI in action
            </h2>
          </Reveal>

          <Reveal variant="up" duration={700} delay={80}>
            <p className="mt-3 text-sm sm:text-base text-[#616E7C] font-normal leading-relaxed max-w-xl mx-auto">
              See how we&apos;ve delivered measurable success to our clients.
            </p>
          </Reveal>
        </div>

        {/* —————————— BENTO GRID (Exact match to reference design) —————————— */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          
          {/* ================= CARD 1: Neural Networks builders (Wide: 2 cols) ================= */}
          <Reveal variant="up" duration={700} delay={100} className="md:col-span-2">
            <div className="h-full min-h-[340px] bg-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-9 border border-[#D9E3D5] shadow-[0_8px_30px_rgba(0,61,43,0.05),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_18px_44px_rgba(0,61,43,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                {/* Left Title */}
                <div className="sm:col-span-5">
                  <h3 className="text-2xl sm:text-[27px] font-[600] text-[#1A1F26] tracking-[-0.02em] leading-[1.2]">
                    Neural<br />Networks<br />builders
                  </h3>
                </div>

                {/* Right Visual (Neural Network Graph) */}
                <div className="sm:col-span-7 flex items-center justify-center p-2">
                  <img
                    src="/services/ai-action/neural_network_graph.png"
                    alt="Neural Networks builders"
                    className="w-full max-w-[340px] h-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* ================= CARD 2: Multilingual NLP models (1 col) ================= */}
          <Reveal variant="up" duration={700} delay={160}>
            <div className="h-full min-h-[340px] bg-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 border border-[#D9E3D5] shadow-[0_8px_30px_rgba(0,61,43,0.05),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_18px_44px_rgba(0,61,43,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              {/* Top Visual */}
              <div className="flex-1 flex items-center justify-center py-2">
                <img
                  src="/services/ai-action/multilingual_nlp.png"
                  alt="Multilingual NLP models"
                  className="w-full max-w-[210px] h-auto object-contain rounded-xl"
                  loading="lazy"
                />
              </div>

              {/* Bottom Title */}
              <div className="pt-4">
                <h3 className="text-xl sm:text-[23px] font-[600] text-[#1A1F26] tracking-[-0.02em] leading-[1.25]">
                  Multilingual NLP<br />models
                </h3>
              </div>
            </div>
          </Reveal>

          {/* ================= CARD 3: AI-driven cybersecurity (1 col) ================= */}
          <Reveal variant="up" duration={700} delay={220}>
            <div className="h-full min-h-[340px] bg-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 border border-[#D9E3D5] shadow-[0_8px_30px_rgba(0,61,43,0.05),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_18px_44px_rgba(0,61,43,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              {/* Top Concentric Pulse & Lock Visual */}
              <div className="flex-1 flex items-center justify-center py-2">
                <div className="w-40 h-40 rounded-full bg-[#F3F6F8] flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-[#E5EAEF] flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#20242C] shadow-md flex items-center justify-center text-white">
                      <i className="fas fa-lock text-base text-slate-100" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Title */}
              <div className="pt-4">
                <h3 className="text-xl sm:text-[23px] font-[600] text-[#1A1F26] tracking-[-0.02em] leading-[1.25]">
                  AI-driven<br />cybersecurity
                </h3>
              </div>
            </div>
          </Reveal>

          {/* ================= CARD 4: Computer vision modules (1 col) ================= */}
          <Reveal variant="up" duration={700} delay={280}>
            <div className="h-full min-h-[340px] bg-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 border border-[#D9E3D5] shadow-[0_8px_30px_rgba(0,61,43,0.05),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_18px_44px_rgba(0,61,43,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              {/* Top Visual with floating Gemini badge overlay */}
              <div className="flex-1 flex items-center justify-center relative py-2">
                <div className="relative max-w-[210px] w-full">
                  <img
                    src="/services/ai-action/computer_vision_chat.png"
                    alt="Computer vision modules"
                    className="w-full h-auto object-contain rounded-xl"
                    loading="lazy"
                  />

                  {/* Overlapping floating Gemini badge matching reference image */}
                  <div className="absolute top-10 -left-3 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 border border-[#E2E8F0] shadow-[0_10px_24px_rgba(0,0,0,0.08)] max-w-[145px] select-none">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="w-5 h-5 rounded-md bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white text-[10px]">
                        ✦
                      </span>
                      <span className="text-[11px] font-bold text-[#1A1F26]">Gemini</span>
                    </div>
                    <p className="text-[8px] text-slate-500 leading-tight">
                      Lorem Ipsum is simply dummy text of the printing and typeset
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Title */}
              <div className="pt-4">
                <h3 className="text-xl sm:text-[23px] font-[600] text-[#1A1F26] tracking-[-0.02em] leading-[1.25]">
                  Computer vision<br />modules
                </h3>
              </div>
            </div>
          </Reveal>

          {/* ================= CARD 5: Recommendation systems (1 col) ================= */}
          <Reveal variant="up" duration={700} delay={340}>
            <div className="h-full min-h-[340px] bg-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 border border-[#D9E3D5] shadow-[0_8px_30px_rgba(0,61,43,0.05),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_18px_44px_rgba(0,61,43,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              {/* Top Visual with tilted photo card backdrop */}
              <div className="flex-1 flex items-center justify-center relative py-2">
                <div className="relative max-w-[200px] w-full flex items-center justify-center">
                  {/* Tilted dark photo card behind, matching reference image */}
                  <div className="absolute -top-3 right-0 w-24 h-20 bg-[#1E232A] rounded-xl opacity-90 rotate-8 shadow-md overflow-hidden pointer-events-none">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=120&auto=format&fit=crop&q=80" 
                      alt="" 
                      className="w-full h-full object-cover opacity-70"
                    />
                  </div>

                  {/* Foreground Search Box */}
                  <img
                    src="/services/ai-action/recommendation_system.png"
                    alt="Recommendation systems"
                    className="w-full h-auto object-contain rounded-xl relative z-10 shadow-xs"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Bottom Title */}
              <div className="pt-4">
                <h3 className="text-xl sm:text-[23px] font-[600] text-[#1A1F26] tracking-[-0.02em] leading-[1.25]">
                  Recommendation<br />systems
                </h3>
              </div>
            </div>
          </Reveal>

          {/* ================= CARD 6: Insightful dashboards (Wide: 2 cols) ================= */}
          <Reveal variant="up" duration={700} delay={400} className="md:col-span-2">
            <div className="h-full min-h-[340px] bg-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-9 border border-[#D9E3D5] shadow-[0_8px_30px_rgba(0,61,43,0.05),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_18px_44px_rgba(0,61,43,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              {/* Top Visual */}
              <div className="flex-1 flex items-center justify-center py-2">
                <img
                  src="/services/ai-action/insightful_dashboard.png"
                  alt="Insightful dashboards"
                  className="w-full max-w-[580px] h-auto object-contain rounded-xl"
                  loading="lazy"
                />
              </div>

              {/* Bottom Title */}
              <div className="pt-4">
                <h3 className="text-2xl sm:text-[27px] font-[600] text-[#1A1F26] tracking-[-0.02em] leading-[1.2]">
                  Insightful dashboards
                </h3>
              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};

export default AIInAction;
