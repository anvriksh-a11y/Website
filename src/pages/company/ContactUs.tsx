import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import SEO from '../../components/SEO';
import Reveal from '../../components/Reveal';
import { trackLead, trackPhoneClick } from '../../utils/analytics';
import { COMPANY_DETAILS } from '../../constants/contact';

const ContactUs: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const location = useLocation();
    const presetEmail = (location.state as { email?: string } | null)?.email ?? '';
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus('idle');

        const SERVICE_ID = 'service_ida6rx5';
        const TEMPLATE_ID = 'template_y98vp1n';
        const PUBLIC_KEY = 'oH3PozDzDNnz1dWJz';

        if (form.current) {
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
                .then((result) => {
                    console.log(result.text);
                    setLoading(false);
                    setStatus('success');
                    trackLead('contact_form');
                    if (form.current) form.current.reset();
                }, (error) => {
                    console.log(error.text);
                    setLoading(false);
                    setStatus('error');
                });
        }
    };

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact | ANVRiksh Tech Solutions LLP",
        "description": "Get in touch with ANVRiksh Tech Solutions LLP for enterprise AI agent consultations, voice calling solutions, and custom software engineering.",
        "mainEntity": {
            "@type": "Organization",
            "name": COMPANY_DETAILS.brandName,
            "legalName": COMPANY_DETAILS.legalName,
            "identifier": COMPANY_DETAILS.registrationId,
            "contactPoint": [
                {
                    "@type": "ContactPoint",
                    "telephone": COMPANY_DETAILS.primaryPhone,
                    "contactType": "customer service",
                    "email": COMPANY_DETAILS.email,
                    "areaServed": "IN"
                }
            ]
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
                title="Contact Us | ANVRiksh Tech Solutions LLP"
                description="Ready to transform your business with autonomous AI agents and enterprise software? Contact ANVRiksh Tech Solutions LLP today."
                keywords="Contact ANVRiksh, Hire AI Developers India, Agentic AI Consulting, Voice AI Agents, Software Solutions Belgaum"
                canonicalUrl="https://anvriksh.com/company/contact-us"
                structuredData={structuredData}
            />

            {/* —————————— VIBRANT ATMOSPHERIC MESH GRADIENT BACKGROUND —————————— */}
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
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <Reveal variant="fade" duration={600}>
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#D5E1CE] shadow-xs mb-4">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[12px] font-bold text-[#003D2B] tracking-tight">
                                Engineering Consultation • Response within 24h
                            </span>
                        </div>
                    </Reveal>

                    <Reveal variant="up" duration={700} delay={80}>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-[800] text-[#141912] tracking-[-0.035em] leading-[1.12]">
                            Let&apos;s build something <br />
                            <span className="text-[#003D2B]">extraordinary together.</span>
                        </h1>
                    </Reveal>

                    <Reveal variant="up" duration={700} delay={140}>
                        <p className="mt-4 text-sm sm:text-base md:text-lg text-[#4E5B49] leading-relaxed max-w-xl mx-auto">
                            Whether you need autonomous AI calling agents, custom enterprise software, or visual agentic workflows, our engineers are ready to consult.
                        </p>
                    </Reveal>
                </div>

                {/* Main Content Grid: Left Column Details + Right Column Form */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
                    
                    {/* ————— LEFT COLUMN: Company Info & Channels (5 cols) ————— */}
                    <Reveal variant="left" duration={800} delay={100} className="lg:col-span-5 h-full">
                        <div className="h-full bg-white/95 backdrop-blur-xl rounded-[28px] sm:rounded-[32px] p-7 sm:p-9 border border-[#D9E3D5] shadow-[0_12px_40px_rgba(0,61,43,0.06),0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                            
                            <div>
                                {/* Status Header Card */}
                                <div className="flex items-center justify-between p-4 rounded-2xl bg-[#F4F7EE] border border-[#D5E1CE] mb-6 shadow-2xs">
                                    <div className="flex items-center gap-2.5">
                                        <span className="relative flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600" />
                                        </span>
                                        <div>
                                            <div className="text-xs font-bold text-[#141912]">Engineering Studio</div>
                                            <div className="text-[11px] text-[#4E5B49]">Direct Line Active</div>
                                        </div>
                                    </div>
                                    <span className="text-[11px] font-bold text-[#003D2B] bg-[#E3EDE0] px-2.5 py-1 rounded-full border border-[#D3E2CF]">
                                        Available
                                    </span>
                                </div>

                                <h3 className="text-lg font-[800] text-[#141912] mb-4 tracking-tight">
                                    Direct Communication Channels
                                </h3>

                                <div className="space-y-3.5">
                                    {/* Email */}
                                    <a 
                                        href={`mailto:${COMPANY_DETAILS.email}`}
                                        className="group p-4 rounded-2xl bg-[#F4F7EE] hover:bg-[#E3EDE0] border border-[#D5E1CE] flex items-center gap-4 transition-all duration-300 shadow-2xs hover:shadow-xs hover:-translate-y-0.5"
                                    >
                                        <div className="w-11 h-11 rounded-xl bg-white border border-[#D5E1CE] flex items-center justify-center text-[#003D2B] shadow-2xs group-hover:scale-110 transition-transform">
                                            <i className="fas fa-envelope text-sm" />
                                        </div>
                                        <div className="overflow-hidden">
                                            <div className="text-xs text-[#4E5B49] font-medium">Official Inquiry Email</div>
                                            <div className="text-sm font-bold text-[#141912] group-hover:text-[#003D2B] transition-colors truncate">
                                                {COMPANY_DETAILS.email}
                                            </div>
                                        </div>
                                    </a>

                                    {/* Primary Phone */}
                                    <a 
                                        href={`tel:${COMPANY_DETAILS.primaryPhoneRaw}`}
                                        onClick={() => trackPhoneClick('contact_page_primary')}
                                        className="group p-4 rounded-2xl bg-[#F4F7EE] hover:bg-[#E3EDE0] border border-[#D5E1CE] flex items-center gap-4 transition-all duration-300 shadow-2xs hover:shadow-xs hover:-translate-y-0.5"
                                    >
                                        <div className="w-11 h-11 rounded-xl bg-white border border-[#D5E1CE] flex items-center justify-center text-[#003D2B] shadow-2xs group-hover:scale-110 transition-transform">
                                            <i className="fas fa-phone-alt text-sm" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-[#4E5B49] font-medium">Primary Business Line</div>
                                            <div className="text-sm font-bold text-[#141912] group-hover:text-[#003D2B] transition-colors">
                                                {COMPANY_DETAILS.primaryPhone}
                                            </div>
                                        </div>
                                    </a>

                                    {/* Secondary Phone */}
                                    <a 
                                        href={`tel:${COMPANY_DETAILS.secondaryPhoneRaw}`}
                                        onClick={() => trackPhoneClick('contact_page_secondary')}
                                        className="group p-4 rounded-2xl bg-[#F4F7EE] hover:bg-[#E3EDE0] border border-[#D5E1CE] flex items-center gap-4 transition-all duration-300 shadow-2xs hover:shadow-xs hover:-translate-y-0.5"
                                    >
                                        <div className="w-11 h-11 rounded-xl bg-white border border-[#D5E1CE] flex items-center justify-center text-[#003D2B] shadow-2xs group-hover:scale-110 transition-transform">
                                            <i className="fas fa-headset text-sm" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-[#4E5B49] font-medium">Technical Support Line</div>
                                            <div className="text-sm font-bold text-[#141912] group-hover:text-[#003D2B] transition-colors">
                                                {COMPANY_DETAILS.secondaryPhone}
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                {/* "What to Expect" Roadmap */}
                                <div className="mt-7 pt-6 border-t border-[#EAEFE5]">
                                    <div className="text-xs font-bold uppercase tracking-wider text-[#003D2B] mb-3">
                                        What to Expect Next
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <span className="w-5 h-5 rounded-full bg-[#E3EDE0] text-[#003D2B] flex items-center justify-center text-[10px] font-extrabold shrink-0 mt-0.5">1</span>
                                            <p className="text-xs text-[#4E5B49] leading-relaxed">
                                                <strong className="text-[#141912]">Technical Discovery:</strong> We assess your workflow bottlenecks and AI feasibility.
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="w-5 h-5 rounded-full bg-[#E3EDE0] text-[#003D2B] flex items-center justify-center text-[10px] font-extrabold shrink-0 mt-0.5">2</span>
                                            <p className="text-xs text-[#4E5B49] leading-relaxed">
                                                <strong className="text-[#141912]">Architecture Blueprint:</strong> Clear delivery timeline, costs, and agent topology.
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="w-5 h-5 rounded-full bg-[#E3EDE0] text-[#003D2B] flex items-center justify-center text-[10px] font-extrabold shrink-0 mt-0.5">3</span>
                                            <p className="text-xs text-[#4E5B49] leading-relaxed">
                                                <strong className="text-[#141912]">Rapid Execution:</strong> Working prototype or sandbox deployed within 7 business days.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Trust badges */}
                            <div className="mt-7 pt-5 border-t border-[#EAEFE5] space-y-2 text-xs text-[#4E5B49]">
                                <div className="flex items-center gap-2">
                                    <i className="fas fa-shield-alt text-[#003D2B]" />
                                    <span>NDA &amp; strict confidentiality executed on request</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <i className="fas fa-server text-[#003D2B]" />
                                    <span>Zero public training on client data</span>
                                </div>
                            </div>

                        </div>
                    </Reveal>

                    {/* ————— RIGHT COLUMN: Interactive Form (7 cols) ————— */}
                    <Reveal variant="right" duration={800} delay={150} className="lg:col-span-7">
                        <div className="bg-white/95 backdrop-blur-xl rounded-[28px] sm:rounded-[32px] p-7 sm:p-10 border border-[#D9E3D5] shadow-[0_12px_40px_rgba(0,61,43,0.06),0_1px_3px_rgba(0,0,0,0.02)]">
                            
                            <div className="mb-6">
                                <h3 className="text-xl sm:text-2xl font-[800] text-[#141912] tracking-tight">
                                    Send us a message
                                </h3>
                                <p className="text-xs sm:text-sm text-[#4E5B49] mt-1">
                                    Fill out the form below and an engineer will connect with you.
                                </p>
                            </div>

                            <form ref={form} onSubmit={sendEmail} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-[#141912] uppercase tracking-wider">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="user_name"
                                            required
                                            placeholder="Your full name"
                                            className="w-full bg-[#F4F7EE] border border-[#D5E1CE] rounded-xl px-4 py-3 text-sm text-[#141912] placeholder-[#8F9E8B] focus:outline-none focus:border-[#003D2B] focus:ring-1 focus:ring-[#003D2B] transition-all"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-[#141912] uppercase tracking-wider">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="user_email"
                                            required
                                            defaultValue={presetEmail}
                                            placeholder="you@company.com"
                                            className="w-full bg-[#F4F7EE] border border-[#D5E1CE] rounded-xl px-4 py-3 text-sm text-[#141912] placeholder-[#8F9E8B] focus:outline-none focus:border-[#003D2B] focus:ring-1 focus:ring-[#003D2B] transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-[#141912] uppercase tracking-wider">
                                            Phone Number
                                        </label>
                                        <div className="relative">
                                            <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 border-r border-[#D5E1CE] pr-2 pointer-events-none">
                                                <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-4 rounded-xs" />
                                                <span className="text-xs text-[#4E5B49] font-mono">+91</span>
                                            </div>
                                            <input
                                                type="tel"
                                                name="user_phone"
                                                placeholder="98765 43210"
                                                className="w-full bg-[#F4F7EE] border border-[#D5E1CE] rounded-xl pl-20 pr-4 py-3 text-sm text-[#141912] placeholder-[#8F9E8B] focus:outline-none focus:border-[#003D2B] focus:ring-1 focus:ring-[#003D2B] transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-[#141912] uppercase tracking-wider">
                                            Company / Organization
                                        </label>
                                        <input
                                            type="text"
                                            name="user_company"
                                            placeholder="Your organization name"
                                            className="w-full bg-[#F4F7EE] border border-[#D5E1CE] rounded-xl px-4 py-3 text-sm text-[#141912] placeholder-[#8F9E8B] focus:outline-none focus:border-[#003D2B] focus:ring-1 focus:ring-[#003D2B] transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-[#141912] uppercase tracking-wider">
                                        Project Scope &amp; Details <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        placeholder="Describe your project, desired AI agents, or software requirements..."
                                        rows={4}
                                        className="w-full bg-[#F4F7EE] border border-[#D5E1CE] rounded-xl px-4 py-3 text-sm text-[#141912] placeholder-[#8F9E8B] focus:outline-none focus:border-[#003D2B] focus:ring-1 focus:ring-[#003D2B] transition-all resize-none"
                                    />
                                </div>

                                {status === 'success' && (
                                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs sm:text-sm flex items-center gap-2">
                                        <i className="fas fa-check-circle text-emerald-600 text-base" />
                                        <span>Message sent successfully! Our technical team will reach out within 24 hours.</span>
                                    </div>
                                )}

                                {status === 'error' && (
                                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-xs sm:text-sm flex items-center gap-2">
                                        <i className="fas fa-exclamation-circle text-red-600 text-base" />
                                        <span>Something went wrong while delivering your message. Please reach us directly at {COMPANY_DETAILS.email}.</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm text-white bg-[#003D2B] hover:bg-[#022D20] shadow-[0_12px_28px_rgba(0,61,43,0.30)] hover:shadow-[0_16px_36px_rgba(0,61,43,0.40)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <>
                                            <i className="fas fa-spinner fa-spin text-sm" />
                                            <span>Sending Message...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Consultation Request</span>
                                            <i className="fas fa-arrow-right text-xs" />
                                        </>
                                    )}
                                </button>
                            </form>

                        </div>
                    </Reveal>

                </div>

                {/* ————— REGISTERED OFFICE LOCATION SECTION ————— */}
                <Reveal variant="up" duration={800} delay={200}>
                    <div className="bg-white/95 backdrop-blur-xl rounded-[28px] sm:rounded-[32px] p-8 sm:p-10 border border-[#D9E3D5] shadow-[0_12px_40px_rgba(0,61,43,0.06),0_1px_3px_rgba(0,0,0,0.02)]">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                            
                            <div className="md:col-span-7 space-y-3">
                                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] text-[11px] font-bold text-[#003D2B]">
                                    <i className="fas fa-map-marker-alt text-[10px]" /> Corporate Headquarters
                                </div>
                                <h3 className="text-xl sm:text-2xl font-[800] text-[#141912] tracking-tight">
                                    Registered Office — Belgaum, Karnataka
                                </h3>
                                <p className="text-sm text-[#4E5B49] leading-relaxed">
                                    {COMPANY_DETAILS.address.line1}<br />
                                    {COMPANY_DETAILS.address.line2}<br />
                                    {COMPANY_DETAILS.address.line3}
                                </p>
                            </div>

                            <div className="md:col-span-5 flex md:justify-end">
                                <a
                                    href={COMPANY_DETAILS.address.mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-[#003D2B] bg-[#E3EDE0] hover:bg-[#D5E1CE] border border-[#D5E1CE] transition-all hover:scale-105 active:scale-95 shadow-xs"
                                >
                                    <i className="fas fa-location-arrow text-xs" />
                                    <span>View on Google Maps</span>
                                </a>
                            </div>

                        </div>
                    </div>
                </Reveal>

            </div>
        </div>
    );
};

export default ContactUs;
