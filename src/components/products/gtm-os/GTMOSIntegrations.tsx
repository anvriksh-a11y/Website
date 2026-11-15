import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface IntegrationLogoItem {
  name: string;
  src: string;
  top?: string;
  left?: string;
  right?: string;
  size: string;
  delay: string;
}

export const GTMOSIntegrations: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const integrationItems: IntegrationLogoItem[] = [
    // Left Side Orbit
    {
      name: "Google Calendar",
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg",
      top: '8%',
      left: '5%',
      size: 'w-24 h-24 lg:w-28 lg:h-28',
      delay: '0ms'
    },
    {
      name: "Google Maps",
      src: "/integrations/google_maps.svg",
      top: '6%',
      left: '22%',
      size: 'w-20 h-20 lg:w-24 lg:h-24',
      delay: '80ms'
    },
    {
      name: "Amazon Web Services",
      src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      top: '25%',
      left: '16%',
      size: 'w-20 h-20 lg:w-24 lg:h-24',
      delay: '140ms'
    },
    {
      name: "WhatsApp Business",
      src: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
      top: '42%',
      left: '2%',
      size: 'w-20 h-20 lg:w-20 lg:h-20',
      delay: '200ms'
    },
    {
      name: "Oracle",
      src: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      top: '50%',
      left: '10%',
      size: 'w-24 h-24 lg:w-28 lg:h-28',
      delay: '260ms'
    },
    {
      name: "Vobiz Voice Calling",
      src: "/integrations/voice_calling.svg",
      top: '64%',
      left: '2%',
      size: 'w-20 h-20 lg:w-24 lg:h-24',
      delay: '320ms'
    },
    {
      name: "Slack",
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
      top: '78%',
      left: '9%',
      size: 'w-20 h-20 lg:w-24 lg:h-24',
      delay: '380ms'
    },
    {
      name: "Google",
      src: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
      top: '78%',
      left: '23%',
      size: 'w-20 h-20 lg:w-20 lg:h-20',
      delay: '440ms'
    },

    // Right Side Orbit
    {
      name: "Twilio",
      src: "/integrations/twilio.svg",
      top: '6%',
      right: '22%',
      size: 'w-20 h-20 lg:w-24 lg:h-24',
      delay: '100ms'
    },
    {
      name: "HubSpot",
      src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg",
      top: '10%',
      right: '7%',
      size: 'w-20 h-20 lg:w-24 lg:h-24',
      delay: '160ms'
    },
    {
      name: "Google Drive",
      src: "https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg",
      top: '24%',
      right: '19%',
      size: 'w-20 h-20 lg:w-20 lg:h-20',
      delay: '220ms'
    },
    {
      name: "Meta",
      src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      top: '38%',
      right: '3%',
      size: 'w-20 h-20 lg:w-24 lg:h-24',
      delay: '280ms'
    },
    {
      name: "Salesforce CRM",
      src: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
      top: '50%',
      right: '15%',
      size: 'w-20 h-20 lg:w-24 lg:h-24',
      delay: '340ms'
    },
    {
      name: "Gmail / Workspace",
      src: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg",
      top: '68%',
      right: '7%',
      size: 'w-20 h-20 lg:w-24 lg:h-24',
      delay: '400ms'
    },
    {
      name: "LinkedIn",
      src: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
      top: '74%',
      right: '22%',
      size: 'w-20 h-20 lg:w-20 lg:h-20',
      delay: '460ms'
    }
  ];

  const scrollToContact = () => {
    const el = document.getElementById('contact-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={sectionRef} 
      id="integrations-section" 
      className="py-24 sm:py-36 relative overflow-hidden bg-[#F4F7EE] select-none border-t border-[#D5E1CE]" 
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Background Concentric Orbital Rings & Ambient Glow matching reference */}
      <div 
        className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full pointer-events-none opacity-40" 
        style={{ background: 'radial-gradient(circle, #E3EDE0 0%, transparent 70%)', filter: 'blur(90px)' }} 
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full border border-[#D5E1CE] pointer-events-none opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full border border-dashed border-[#CCD8C3] pointer-events-none opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[920px] h-[920px] rounded-full border border-[#D5E1CE]/40 pointer-events-none opacity-40" />

      <div className="container mx-auto px-5 max-w-7xl relative z-10">
        
        {/* ————————————————— CENTRAL CONTENT ————————————————— */}
        <div className="text-center max-w-2xl mx-auto relative z-20">
          
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] shadow-xs mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#003D2B] animate-pulse" />
            <span className="text-[12px] sm:text-[13px] font-semibold text-[#003D2B] tracking-tight">Integrations</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-[800] mb-5 text-[#141912] tracking-[-0.03em] leading-[1.12]">
            Enterprise-Ready <br />
            <span className="text-[#003D2B]">Integrations</span>
          </h2>

          {/* Subheading */}
          <p className="text-[#4E5B49] text-base sm:text-lg mb-8 leading-relaxed max-w-xl mx-auto">
            Seamlessly connect your enterprise AI Agents and GTM OS with 100+ tools and software.
          </p>

          {/* CTA Button */}
          <button 
            onClick={scrollToContact}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#003D2B] hover:bg-[#022D20] text-white text-sm font-bold shadow-[0_12px_28px_rgba(0,61,43,0.30)] hover:shadow-[0_16px_36px_rgba(0,61,43,0.40)] hover:scale-105 active:scale-100 transition-all cursor-pointer group"
          >
            <span>Explore All Integrations</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Supporting Ecosystem Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold text-[#4E5B49]">
            <span className="px-3 py-1 rounded-full bg-white/80 border border-[#D5E1CE]">Twilio &amp; Voice Calling</span>
            <span className="px-3 py-1 rounded-full bg-white/80 border border-[#D5E1CE]">Google Maps Discovery</span>
            <span className="px-3 py-1 rounded-full bg-white/80 border border-[#D5E1CE]">WhatsApp &amp; Mailboxes</span>
            <span className="px-3 py-1 rounded-full bg-white/80 border border-[#D5E1CE]">Salesforce &amp; HubSpot CRM</span>
            <span className="px-3 py-1 rounded-full bg-white/80 border border-[#D5E1CE]">Webhooks &amp; REST APIs</span>
          </div>

        </div>

        {/* ————————————————— FLOATING SQUIRCLE ICONS (DESKTOP) ————————————————— */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          {integrationItems.map((item, index) => (
            <div
              key={index}
              title={item.name}
              className={`absolute flex items-center justify-center rounded-[1.4rem] bg-white border border-[#D5E1CE] shadow-[0_12px_32px_rgba(21,24,17,0.08)] p-3.5 lg:p-4 ${item.size} transition-all duration-700 ease-out hover:shadow-[0_20px_40px_rgba(0,61,43,0.18)] hover:border-[#003D2B]/40 hover:scale-110 pointer-events-auto cursor-pointer group`}
              style={{
                top: item.top,
                left: item.left,
                right: item.right,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(24px)',
                transitionDelay: item.delay
              }}
            >
              <div className="w-full h-full flex items-center justify-center relative">
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-full object-contain filter drop-shadow-2xs transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* ————————————————— MOBILE GRID VIEW WITH STAGGERED ENTRANCE ————————————————— */}
        <div className="mt-14 grid grid-cols-3 sm:grid-cols-4 gap-3.5 md:hidden relative z-20">
          {integrationItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center aspect-square rounded-2xl bg-white border border-[#D5E1CE] shadow-xs p-3 transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.85) translateY(20px)',
                transitionDelay: `${index * 60}ms`
              }}
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain mb-1"
                loading="lazy"
              />
              <span className="text-[10px] font-semibold text-[#4E5B49] text-center truncate max-w-full">
                {item.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GTMOSIntegrations;
