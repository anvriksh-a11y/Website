import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Reveal from '../../components/Reveal';
import { COMPANY_DETAILS } from '../../constants/contact';

const TermsAndConditions: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms & Conditions | ANVRiksh Tech Solutions LLP",
    "description": "Official Terms of Service and Conditions for engaging ANVRiksh Tech Solutions LLP (LLPIN: ADA-3944) for AI development and software services.",
    "publisher": {
      "@type": "Organization",
      "name": COMPANY_DETAILS.legalName,
      "identifier": COMPANY_DETAILS.registrationId,
      "url": "https://anvriksh.com"
    }
  };

  return (
    <div 
      className="min-h-screen text-[#141912] select-none pt-28 sm:pt-36 pb-24 sm:pb-32 overflow-hidden relative" 
      style={{ 
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background: 'radial-gradient(135% 120% at 50% -10%, #FFFFFF 0%, #E8F4E5 32%, #DFEFE0 62%, #F5ECE0 100%)'
      }}
    >
      <SEO
        title="Terms & Conditions | ANVRiksh Tech Solutions LLP"
        description="Official Terms and Conditions for ANVRiksh Tech Solutions LLP (LLPIN: ADA-3944). Review our service agreements, AI agent SLA, and legal framework."
        keywords="ANVRiksh Terms, Terms and Conditions, ANVRiksh Tech Solutions LLP, LLPIN ADA-3944, AI Service Agreement, Software Contracts India"
        canonicalUrl="https://anvriksh.com/terms-and-conditions"
        structuredData={structuredData}
      />

      {/* Vibrant Atmospheric Mesh Gradient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Tactical Micro-Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#003D2B_1.4px,transparent_1.4px)] [background-size:32px_32px] opacity-[0.055]" />

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

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Header */}
        <Reveal variant="up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3EDE0] border border-[#D5E1CE] shadow-xs mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#003D2B] animate-pulse" />
              <span className="text-[12px] font-bold text-[#003D2B] tracking-tight">
                Corporate Governance • LLPIN: {COMPANY_DETAILS.registrationId}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-[800] text-[#141912] tracking-[-0.035em] leading-[1.12] mb-4">
              Terms &amp; Conditions
            </h1>
            
            <p className="text-sm sm:text-base text-[#4E5B49] leading-relaxed max-w-2xl mx-auto">
              Effective Date: January 1, 2026 • Last Updated: November 2026
            </p>

            {/* Corporate Registration Badge */}
            <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 text-xs bg-white border border-[#D5E1CE] rounded-2xl px-5 py-3 shadow-[0_4px_16px_rgba(0,61,43,0.05)] text-[#4E5B49]">
              <span className="font-bold text-[#141912]">Registered Entity:</span> {COMPANY_DETAILS.legalName}
              <span className="text-[#D5E1CE] hidden sm:inline">•</span>
              <span className="font-bold text-[#141912]">LLPIN:</span> {COMPANY_DETAILS.registrationId}
              <span className="text-[#D5E1CE] hidden sm:inline">•</span>
              <span className="font-bold text-[#141912]">Jurisdiction:</span> Belgaum, Karnataka, India
            </div>
          </div>
        </Reveal>

        {/* Content Body */}
        <Reveal variant="fade" duration={800} delay={100}>
          <div className="bg-white rounded-[28px] sm:rounded-[32px] p-8 sm:p-12 md:p-14 border border-[#D9E3D5] shadow-[0_8px_30px_rgba(0,61,43,0.05),0_1px_3px_rgba(0,0,0,0.02)] space-y-10 leading-relaxed text-[#4E5B49] text-sm sm:text-base">
            
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-[800] text-[#141912] tracking-tight flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#E3EDE0] text-[#003D2B] flex items-center justify-center text-xs font-bold">1</span>
                Agreement to Terms
              </h2>
              <p>
                These Terms and Conditions constitute a legally binding agreement made between you (whether personally or on behalf of an entity, <strong>&ldquo;Client&rdquo;</strong>, <strong>&ldquo;User&rdquo;</strong>, or <strong>&ldquo;you&rdquo;</strong>) and <strong>{COMPANY_DETAILS.legalName}</strong> (<strong>LLPIN: {COMPANY_DETAILS.registrationId}</strong>, <strong>&ldquo;ANVRiksh&rdquo;</strong>, <strong>&ldquo;we&rdquo;</strong>, <strong>&ldquo;us&rdquo;</strong>, or <strong>&ldquo;our&rdquo;</strong>).
              </p>
              <p>
                By accessing our website (<a href="https://anvriksh.com" className="text-[#003D2B] font-bold hover:underline">anvriksh.com</a>), executing client project proposals, or deploying our autonomous AI software, you confirm that you have read, understood, and agreed to be bound by all of these Terms and Conditions.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-[800] text-[#141912] tracking-tight flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#E3EDE0] text-[#003D2B] flex items-center justify-center text-xs font-bold">2</span>
                Scope of Services
              </h2>
              <p>ANVRiksh provides specialized technology and AI engineering services, including:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong>Autonomous AI Agents &amp; Voice Assistants:</strong> Custom telephony agents, customer support agents, and voice cloning infrastructure.</li>
                <li><strong>Visual AI Orchestration:</strong> Platform architecture, multi-agent frameworks, and workflow automation.</li>
                <li><strong>Custom Software Engineering:</strong> Enterprise web platforms, mobile applications, cloud backend systems, and database integrations.</li>
                <li><strong>Digital Strategy &amp; Performance Marketing:</strong> Data-driven brand scaling, SEO, and lead discovery engineering.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-[800] text-[#141912] tracking-tight flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#E3EDE0] text-[#003D2B] flex items-center justify-center text-xs font-bold">3</span>
                Acceptable Use Policy &amp; Telephony Regulatory Compliance
              </h2>
              <p>
                When utilizing our AI calling agents or communication workflows, you explicitly agree to comply with all applicable telecommunications regulations, including Telecom Regulatory Authority of India (TRAI) guidelines, Do Not Disturb (DND) regulations, and anti-spam mandates:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>You shall not use our services for unlawful telemarketing, fraudulent impersonation, harassment, or unauthorized robocalling.</li>
                <li>You shall obtain all necessary caller consents prior to initiating automated communications.</li>
                <li>You shall not attempt to reverse engineer, decompile, or extract proprietary model weights or source code from our software.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-[800] text-[#141912] tracking-tight flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#E3EDE0] text-[#003D2B] flex items-center justify-center text-xs font-bold">4</span>
                Intellectual Property &amp; Ownership
              </h2>
              <div className="p-5 rounded-2xl bg-[#F4F7EE] border border-[#D5E1CE] space-y-2">
                <p>
                  <strong>Custom Deliverables:</strong> Upon receipt of full payment as specified in our project proposal or Master Services Agreement (MSA), all custom application code, bespoke designs, and custom digital assets developed specifically for the Client shall become the intellectual property of the Client.
                </p>
                <p className="text-xs">
                  <strong>Pre-Existing IP &amp; Platform Frameworks:</strong> ANVRiksh retains full ownership of its pre-existing core libraries, foundational orchestrators, proprietary models, and general engineering toolkits.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-[800] text-[#141912] tracking-tight flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#E3EDE0] text-[#003D2B] flex items-center justify-center text-xs font-bold">5</span>
                Commercial Terms &amp; Invoicing
              </h2>
              <p>
                Fees for our development projects and agent hosting are set forth in mutually agreed statements of work (SOW) or invoices:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>All invoices issued by ANVRiksh Tech Solutions LLP are subject to applicable Goods and Services Tax (GST) as mandated by Indian law.</li>
                <li>Invoices must be settled within the designated credit window (standard: 15 to 30 calendar days).</li>
                <li>Hosting, token usage, and telephony carrier costs are billed based on transparent actual consumption or contracted tiers.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-[800] text-[#141912] tracking-tight flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#E3EDE0] text-[#003D2B] flex items-center justify-center text-xs font-bold">6</span>
                Warranties &amp; Limitation of Liability
              </h2>
              <p>
                We warrant that services will be performed in a professional, workmanlike manner adhering to prevailing software engineering and security standards. 
              </p>
              <p>
                Because AI outputs rely on generative probabilistic models, ANVRiksh does not guarantee that AI agent responses will be error-free in 100% of unconstrained edge cases. Clients are advised to maintain appropriate human-in-the-loop oversight for high-risk decisions. To the maximum extent permitted by law, ANVRiksh&apos;s total aggregate liability arising out of any engagement shall not exceed the total fees paid by Client for the specific service during the preceding 3 months.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-[800] text-[#141912] tracking-tight flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#E3EDE0] text-[#003D2B] flex items-center justify-center text-xs font-bold">7</span>
                Governing Law &amp; Dispute Resolution
              </h2>
              <p>
                These Terms and Conditions shall be governed by, and construed in accordance with, the laws of India. Any legal dispute, arbitration, or proceeding arising under or relating to these terms shall be subject to the exclusive jurisdiction of the competent courts located in <strong>Belgaum, Karnataka, India</strong>.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-[800] text-[#141912] tracking-tight flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#E3EDE0] text-[#003D2B] flex items-center justify-center text-xs font-bold">8</span>
                Corporate Contact Details
              </h2>
              <div className="p-6 rounded-2xl bg-[#F4F7EE] border border-[#D5E1CE] space-y-2 text-sm">
                <p><strong>Entity:</strong> {COMPANY_DETAILS.legalName} (LLPIN: {COMPANY_DETAILS.registrationId})</p>
                <p><strong>Registered Address:</strong> {COMPANY_DETAILS.address.formatted}</p>
                <p><strong>Official Email:</strong> <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-[#003D2B] font-bold hover:underline">{COMPANY_DETAILS.email}</a></p>
                <p><strong>Phone:</strong> <a href={`tel:${COMPANY_DETAILS.primaryPhoneRaw}`} className="text-[#003D2B] font-bold hover:underline">{COMPANY_DETAILS.primaryPhone}</a> / <a href={`tel:${COMPANY_DETAILS.secondaryPhoneRaw}`} className="text-[#003D2B] font-bold hover:underline">{COMPANY_DETAILS.secondaryPhone}</a></p>
              </div>
            </section>

          </div>
        </Reveal>

        {/* Bottom Navigation Link */}
        <div className="mt-10 flex items-center justify-between text-xs sm:text-sm text-[#4E5B49]">
          <Link to="/" className="inline-flex items-center gap-2 font-bold text-[#003D2B] hover:text-[#022D20] transition-colors">
            <i className="fas fa-arrow-left text-xs" />
            <span>Back to Home</span>
          </Link>
          <Link to="/privacy-policy" className="inline-flex items-center gap-2 font-bold text-[#003D2B] hover:text-[#022D20] transition-colors">
            <span>Read Privacy Policy</span>
            <i className="fas fa-arrow-right text-xs" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default TermsAndConditions;
