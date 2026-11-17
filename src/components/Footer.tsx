import React from 'react';
import { Link } from 'react-router-dom';
import { trackWhatsAppClick, trackPhoneClick } from '../utils/analytics';
import { COMPANY_DETAILS } from '../constants/contact';
import Reveal from './Reveal';

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-0 select-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Transition hairline */}
      <div className="mx-auto max-w-7xl px-3 sm:px-4">
        <div className="h-px bg-[#D5E1CE]" />
      </div>

      <div className="relative overflow-hidden bg-[#0F1F18]">
        {/* Ambient subtle green glow */}
        <div className="absolute -top-32 right-[10%] w-[480px] h-[320px] rounded-full pointer-events-none opacity-20" style={{ background: 'radial-gradient(circle, #2D452C 0%, transparent 68%)', filter: 'blur(60px)' }} />

        <div className="relative container mx-auto px-5 sm:px-6 max-w-7xl pt-14 pb-10">
          {/* Top CTA strip inside footer */}
          <Reveal variant="up" duration={700} className="mb-12">
            <div className="bg-[#162B22] border border-[#264235] rounded-[22px] px-6 sm:px-10 py-7 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-lg">
              <div className="relative">
                <div className="text-2xl sm:text-[26px] font-[800] text-white tracking-tight leading-tight">Let's build something brilliant.</div>
                <p className="text-[#A7C2B2] text-sm mt-1.5">Book a free 20-minute discovery call — no pressure, just a clear plan.</p>
              </div>
              <Link to="/company/contact-us" className="relative shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-[#003D2B] bg-[#E3EDE0] hover:bg-white shadow-md hover:scale-105 active:scale-100 transition-all">
                <span>Start a Project</span>
                <span className="w-6 h-6 rounded-full bg-[#003D2B]/10 flex items-center justify-center"><i className="fas fa-arrow-right text-xs text-[#003D2B]" /></span>
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="space-y-4">
              <Link to="/" className="inline-block group" aria-label="ANVRiksh home">
                <img
                  src="/anvriksh_animated_white.webp"
                  alt="ANVRiksh"
                  className="h-20 sm:h-24 md:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <p className="text-[#A7C2B2] text-sm leading-relaxed">
                Enterprise-grade Agentic AI, custom software solutions, voice agents, and digital products engineered to help modern businesses scale faster.
              </p>
              <div className="flex gap-2.5 pt-1">
                {[
                  { href: 'https://www.linkedin.com/company/anvriksh/', label: 'LinkedIn', icon: 'fab fa-linkedin-in' },
                  { href: 'https://wa.me/918618293833', label: 'WhatsApp', icon: 'fab fa-whatsapp', wa: true },
                  { href: 'https://www.instagram.com/anvriksh/', label: 'Instagram', icon: 'fab fa-instagram' },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    onClick={() => s.wa && trackWhatsAppClick('footer')}
                    className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-[#003D2B] hover:border-[#003D2B] transition-all hover:-translate-y-0.5">
                    <i className={`${s.icon} text-sm`} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#A7E2AF] rounded-full" /> Services
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link to="/agentic-ai" className="text-[#A7C2B2] hover:text-white transition-colors">Agentic AI Solutions</Link></li>
                <li><Link to="/calling-agent" className="text-[#A7C2B2] hover:text-white transition-colors">AI Calling Agents</Link></li>
                <li><Link to="/data-solutions" className="text-[#A7C2B2] hover:text-white transition-colors">Data Solutions</Link></li>
                <li><Link to="/software-solutions" className="text-[#A7C2B2] hover:text-white transition-colors">Website Development</Link></li>
                <li><Link to="/digital-marketing" className="text-[#A7C2B2] hover:text-white transition-colors">Digital Marketing</Link></li>
                <li><Link to="/software-solutions" className="text-[#A7C2B2] hover:text-white transition-colors">Custom Software</Link></li>
                <li><Link to="/gen-ai" className="text-[#A7C2B2] hover:text-white transition-colors">Gen AI Solutions</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#A7E2AF] rounded-full" /> Platform
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/platform" className="text-[#A7E2AF] hover:text-white transition-colors flex items-center gap-1.5 font-semibold">
                    <span>Genquantaa GTM OS</span>
                    <span className="text-[9px] uppercase px-1.5 py-0.5 bg-emerald-500/20 text-emerald-300 rounded font-mono">GTM</span>
                  </Link>
                </li>
                <li><Link to="/platform" className="text-[#A7C2B2] hover:text-white transition-colors">Multi-Agent Workflow</Link></li>
                <li><Link to="/platform" className="text-[#A7C2B2] hover:text-white transition-colors">Lead Discovery &amp; ICP</Link></li>
                <li><Link to="/resources/case-studies" className="text-[#A7C2B2] hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/resources/blogs" className="text-[#A7C2B2] hover:text-white transition-colors">Blogs &amp; Insights</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#A7E2AF] rounded-full" /> Get in Touch
              </h4>
              <ul className="space-y-3 text-sm text-[#A7C2B2]">
                <li className="flex items-start gap-2.5">
                  <i className="fas fa-map-marker-alt text-[#A7E2AF] mt-1 text-xs" />
                  <span>{COMPANY_DETAILS.address.city}, {COMPANY_DETAILS.address.state}, {COMPANY_DETAILS.address.country}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <i className="fas fa-phone-alt text-[#A7E2AF] text-xs" />
                  <a href={`tel:${COMPANY_DETAILS.primaryPhoneRaw}`} onClick={() => trackPhoneClick('footer')} className="hover:text-white transition-colors">{COMPANY_DETAILS.primaryPhone}</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <i className="fas fa-envelope text-[#A7E2AF] text-xs" />
                  <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-white transition-colors break-all">{COMPANY_DETAILS.email}</a>
                </li>
              </ul>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3.5 py-1.5 text-[11px] font-semibold text-[#A7C2B2]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Response within 24h
              </div>
            </div>
          </div>

          <div className="pt-7 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-[#A7C2B2] gap-4">
            <p>&copy; 2026 ANVRiksh Tech Solutions LLP. All rights reserved. • LLPIN: ADA-3944</p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Link to="/company/who-we-are" className="hover:text-white transition-colors">About Us</Link>
              <Link to="/company/contact-us" className="hover:text-white transition-colors">Contact</Link>
              <Link to="/platform" className="hover:text-white transition-colors">Platform</Link>
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            </div>
            <a href="#root" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="bg-white/10 w-9 h-9 rounded-full flex items-center justify-center text-white hover:bg-[#003D2B] hover:-translate-y-0.5 transition-all" aria-label="Back to top">
              <i className="fas fa-arrow-up text-xs" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
