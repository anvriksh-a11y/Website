import React from 'react';
import Reveal from '../../Reveal';
import { 
  Cloud, 
  Server, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Briefcase
} from 'lucide-react';

export const GTMOSPurchaseOptions: React.FC = () => {
  const scrollToContact = (interestType: string) => {
    const el = document.getElementById('contact-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Preselect the inquiry option if event is handled
      const select = document.querySelector('select[name="interested_in"]') as HTMLSelectElement | null;
      if (select) {
        select.value = interestType;
      }
    }
  };

  return (
    <section 
      id="pricing-section"
      className="py-20 sm:py-28 bg-[#F4F7EE] text-[#141912] relative overflow-hidden border-t border-[#D5E1CE]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <Reveal variant="up" className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] text-[#003D2B] text-xs font-semibold mb-4 shadow-2xs">
            <Briefcase className="w-3.5 h-3.5 text-[#003D2B]" />
            <span>Commercial Models</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[800] tracking-tight leading-[1.12] text-[#141912] mb-6">
            Choose How You Want to Run{' '}
            <span className="text-[#003D2B]">
              Genquantaa GTM OS.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#4E5B49] leading-relaxed max-w-3xl mx-auto">
            Whether you want the convenience of a managed cloud platform or greater control through a dedicated software deployment, 
            Genquantaa provides flexible purchasing options tailored to your organizational strategy.
          </p>
        </Reveal>

        {/* ————————————————— 2 CRITICAL CONVERSION CARDS ————————————————— */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-14">
          
          {/* OPTION 1: GENQUANTAA GTM OS — SAAS */}
          <Reveal variant="up" delay={80} className="h-full">
            <div className="h-full p-8 sm:p-10 rounded-3xl bg-white border border-[#D5E1CE] shadow-xs hover:shadow-lg hover:border-[#003D2B]/50 transition-all duration-300 relative flex flex-col justify-between group">
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E3EDE0] border border-[#D3E2CF] text-[#003D2B]">
                    Managed Cloud Subscription
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B]">
                    <Cloud className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-[800] text-[#141912] mb-2">
                  Genquantaa GTM OS — SaaS
                </h3>

                <p className="text-sm text-[#4E5B49] leading-relaxed mb-8">
                  Get started with Genquantaa GTM OS through a managed subscription model. Access your growth workspace through the cloud without managing the underlying software infrastructure.
                </p>

                {/* Benefits Checklist */}
                <div className="space-y-3.5 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#6B7866]">Included In Managed SaaS:</div>
                  {[
                    'Cloud-based platform access',
                    'Managed software environment',
                    'Product updates according to subscription terms',
                    'Access to supported AI-powered modules',
                    'Centralized dashboard',
                    'Flexible subscription plans',
                    'Support according to selected plan'
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#141912]">
                      <CheckCircle2 className="w-4 h-4 text-[#003D2B] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3 pt-6 border-t border-[#D5E1CE]/70">
                <button
                  onClick={() => scrollToContact('SaaS Subscription')}
                  className="w-full py-4 rounded-xl bg-[#003D2B] hover:bg-[#022D20] text-white font-bold text-sm shadow-sm hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Start with SaaS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => scrollToContact('SaaS Subscription')}
                  className="w-full py-3 rounded-xl bg-[#F4F7EE] hover:bg-[#E3EDE0] text-[#141912] font-semibold text-xs border border-[#D5E1CE] transition-colors flex items-center justify-center cursor-pointer"
                >
                  <span>Request SaaS Pricing</span>
                </button>
              </div>
            </div>
          </Reveal>

          {/* OPTION 2: GENQUANTAA GTM OS — SOFTWARE PURCHASE */}
          <Reveal variant="up" delay={160} className="h-full">
            <div className="h-full p-8 sm:p-10 rounded-3xl bg-white border border-[#D5E1CE] shadow-xs hover:shadow-lg hover:border-[#003D2B]/50 transition-all duration-300 relative flex flex-col justify-between group">
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E3EDE0] border border-[#D3E2CF] text-[#003D2B]">
                    Software Licensing & Deployment
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B]">
                    <Server className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-[800] text-[#141912] mb-2">
                  Genquantaa GTM OS — Software Purchase
                </h3>

                <p className="text-sm text-[#4E5B49] leading-relaxed mb-8">
                  Acquire Genquantaa GTM OS as a software solution for a deployment model aligned with your organization's requirements and dedicated enterprise architecture.
                </p>

                {/* Benefits Checklist */}
                <div className="space-y-3.5 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#6B7866]">Included In Software Purchase:</div>
                  {[
                    'Software licensing options',
                    'Deployment planning',
                    'Configuration according to agreed requirements',
                    'Integration support',
                    'Deployment assistance',
                    'Commercial licensing arrangements',
                    'Technical support according to the agreement'
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#141912]">
                      <CheckCircle2 className="w-4 h-4 text-[#003D2B] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3 pt-6 border-t border-[#D5E1CE]/70">
                <button
                  onClick={() => scrollToContact('Software Purchase')}
                  className="w-full py-4 rounded-xl bg-[#141912] hover:bg-[#003D2B] text-white font-bold text-sm shadow-sm hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Purchase Software</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => scrollToContact('Enterprise Deployment Discussion')}
                  className="w-full py-3 rounded-xl bg-[#F4F7EE] hover:bg-[#E3EDE0] text-[#141912] font-semibold text-xs border border-[#D5E1CE] transition-colors flex items-center justify-center cursor-pointer"
                >
                  <span>Discuss Deployment</span>
                </button>
              </div>
            </div>
          </Reveal>

        </div>

        {/* ————————————————— STRICT COMMERCIAL GOVERNANCE NOTE ————————————————— */}
        <Reveal variant="up" delay={120}>
          <div className="p-6 rounded-2xl bg-white border border-[#D5E1CE] shadow-xs max-w-4xl mx-auto text-xs text-[#4E5B49] leading-relaxed space-y-2">
            <div className="flex items-center gap-2 text-[#141912] font-bold">
              <ShieldCheck className="w-4 h-4 text-[#003D2B]" />
              <span>Commercial Proposal & Licensing Governance:</span>
            </div>
            <p>
              • SaaS and Software Purchase represent two separate commercial offerings structured around your operational model.
            </p>
            <p>
              • Pricing, license terms, deployment architectures, technical support tiers, and service level agreements (SLAs) are defined via formal commercial proposals based on tenant scope and infrastructure specifications.
            </p>
            <p>
              • Deployment assistance and dedicated integration support are delivered under enterprise services agreements.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default GTMOSPurchaseOptions;
