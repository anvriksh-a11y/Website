import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Reveal from '../../components/Reveal';
import { COMPANY_DETAILS } from '../../constants/contact';

const PrivacyPolicy: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy | ANVRiksh Tech Solutions LLP",
    "description": "Official Privacy Policy of ANVRiksh Tech Solutions LLP (LLPIN: ADA-3944) outlining our enterprise data handling, AI privacy safeguards, and user rights.",
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
        title="Privacy Policy | ANVRiksh Tech Solutions LLP"
        description="Official Privacy Policy of ANVRiksh Tech Solutions LLP (LLPIN: ADA-3944). Learn how we protect enterprise data and autonomous AI agent workflows."
        keywords="ANVRiksh Privacy Policy, ANVRiksh Tech Solutions LLP, LLPIN ADA-3944, AI Data Privacy, Enterprise AI Security, DPDP India"
        canonicalUrl="https://anvriksh.com/privacy-policy"
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
                Corporate Compliance • LLPIN: {COMPANY_DETAILS.registrationId}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-[800] text-[#141912] tracking-[-0.035em] leading-[1.12] mb-4">
              Privacy Policy
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
              <span className="font-bold text-[#141912]">Jurisdiction:</span> Karnataka, India
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
                Corporate Identity &amp; Overview
              </h2>
              <p>
                <strong>{COMPANY_DETAILS.legalName}</strong> (referred to as <strong>&ldquo;ANVRiksh&rdquo;</strong>, <strong>&ldquo;we&rdquo;</strong>, <strong>&ldquo;us&rdquo;</strong>, or <strong>&ldquo;our&rdquo;</strong>) is a registered Limited Liability Partnership incorporated under the Limited Liability Partnership Act, 2008 with the Ministry of Corporate Affairs, Government of India, bearing <strong>LLPIN: {COMPANY_DETAILS.registrationId}</strong>.
              </p>
              <p>
                This Privacy Policy explains how we collect, process, store, and safeguard your personal information and enterprise data when you visit our website (<a href="https://anvriksh.com" className="text-[#003D2B] font-bold hover:underline">anvriksh.com</a>), utilize our agentic AI workflows, deploy our autonomous voice &amp; calling agents, or engage our custom software engineering services.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-[800] text-[#141912] tracking-tight flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#E3EDE0] text-[#003D2B] flex items-center justify-center text-xs font-bold">2</span>
                Information We Collect
              </h2>
              <p>We collect information strictly necessary to provide enterprise software, generative AI, and autonomous agent services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Contact &amp; Inquiry Information:</strong> Full name, corporate email address, contact phone number, company name, and details submitted through our contact forms or service consultations.
                </li>
                <li>
                  <strong>Autonomous Voice &amp; Telephony Telemetry:</strong> For clients deploying AI voice agents, we process call session metadata (duration, timestamp, latency, and caller phone identifiers) and real-time audio streams strictly required to execute real-time speech synthesis and conversational reasoning.
                </li>
                <li>
                  <strong>Enterprise Integration Inputs:</strong> API credentials, database schemas, webhooks, or context documents voluntarily provided to calibrate client-specific agent workflows.
                </li>
                <li>
                  <strong>Technical Telemetry &amp; Cookies:</strong> IP addresses, browser types, device attributes, and standard web analytical cookies used to ensure website stability and session security.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-[800] text-[#141912] tracking-tight flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#E3EDE0] text-[#003D2B] flex items-center justify-center text-xs font-bold">3</span>
                Enterprise AI Data Protection &amp; Zero-Training Guarantee
              </h2>
              <div className="p-5 rounded-2xl bg-[#F4F7EE] border border-[#D5E1CE] space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#003D2B]">
                  <i className="fas fa-shield-alt text-base" />
                  <span>Our Commitment to Enterprise Confidentiality</span>
                </div>
                <p className="text-sm">
                  We enforce a strict <strong>Zero Public Training Policy</strong>. Your proprietary datasets, client call transcripts, voice clone audio samples, and custom agent prompts are <strong>NEVER</strong> used to train public foundation models or shared across multi-tenant clients. All agent orchestration is hosted within isolated sandboxed enterprise environments.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-[800] text-[#141912] tracking-tight flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#E3EDE0] text-[#003D2B] flex items-center justify-center text-xs font-bold">4</span>
                How We Use Your Information
              </h2>
              <p>We process your data strictly under valid legal bases:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>To deliver, maintain, and optimize our autonomous agent workflows and custom software platforms.</li>
                <li>To respond to enterprise consultations, service proposals, and technical support requests within 24 hours.</li>
                <li>To monitor system uptime, prevent unauthorized intrusion, and ensure compliance with Indian telecom and cyber laws.</li>
                <li>To send operational updates, security alerts, and contractual billing notices.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-[800] text-[#141912] tracking-tight flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#E3EDE0] text-[#003D2B] flex items-center justify-center text-xs font-bold">5</span>
                Data Security &amp; Encryption Standards
              </h2>
              <p>
                We employ defense-in-depth security measures to protect your information against unauthorized access, loss, or misuse:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong>Encryption in Transit:</strong> All data transmitted to and from our platform is encrypted using modern TLS 1.3 protocol.</li>
                <li><strong>Encryption at Rest:</strong> Enterprise databases, vector embeddings, and storage volumes are encrypted using AES-256 standards.</li>
                <li><strong>Access Control:</strong> Strict Role-Based Access Control (RBAC) and multi-factor authentication are enforced across our engineering and operational infrastructure.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-[800] text-[#141912] tracking-tight flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#E3EDE0] text-[#003D2B] flex items-center justify-center text-xs font-bold">6</span>
                Your Rights Under the Digital Personal Data Protection (DPDP) Act
              </h2>
              <p>
                As a user or client interacting with an Indian registered LLP, you are entitled to comprehensive rights under the Digital Personal Data Protection Act, 2023 (India) and applicable international standards:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong>Right of Access &amp; Summary:</strong> Request a summary of personal data processed by us.</li>
                <li><strong>Right to Correction &amp; Erasure:</strong> Request the correction of inaccurate data or complete deletion of your records.</li>
                <li><strong>Right of Grievance Redressal:</strong> Direct access to our designated Grievance Officer for prompt resolution of privacy concerns.</li>
                <li><strong>Right to Nominate:</strong> Nominate an individual to exercise your data rights in the event of death or incapacity.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-[800] text-[#141912] tracking-tight flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#E3EDE0] text-[#003D2B] flex items-center justify-center text-xs font-bold">7</span>
                Grievance Officer &amp; Official Inquiries
              </h2>
              <p>
                In compliance with the Information Technology Act, 2000 and DPDP Act, 2023, the contact details of our Grievance Officer are:
              </p>
              <div className="p-6 rounded-2xl bg-[#F4F7EE] border border-[#D5E1CE] space-y-2 text-sm">
                <p><strong>Designation:</strong> Data Protection &amp; Grievance Officer</p>
                <p><strong>Entity:</strong> {COMPANY_DETAILS.legalName} (LLPIN: {COMPANY_DETAILS.registrationId})</p>
                <p><strong>Registered Office:</strong> {COMPANY_DETAILS.address.formatted}</p>
                <p><strong>Official Email:</strong> <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-[#003D2B] font-bold hover:underline">{COMPANY_DETAILS.email}</a></p>
                <p><strong>Phone:</strong> <a href={`tel:${COMPANY_DETAILS.primaryPhoneRaw}`} className="text-[#003D2B] font-bold hover:underline">{COMPANY_DETAILS.primaryPhone}</a></p>
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
          <Link to="/terms-and-conditions" className="inline-flex items-center gap-2 font-bold text-[#003D2B] hover:text-[#022D20] transition-colors">
            <span>Read Terms &amp; Conditions</span>
            <i className="fas fa-arrow-right text-xs" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
