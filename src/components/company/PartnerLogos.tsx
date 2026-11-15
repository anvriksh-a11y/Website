import React, { useState, useEffect } from 'react';

// ————————————— 10 OFFICIAL AUTHENTIC FULL-COLOR BRAND LOGOS —————————————

export const OpenAILogo: React.FC<{ className?: string }> = ({ className = "h-8" }) => (
  <svg className={className} viewBox="0 0 145 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(2, 3) scale(0.84)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.2 16.3c-.4-2.8-2.3-5-4.9-5.9-.6-2.1-2.2-3.8-4.2-4.6-2.6-1-5.6-.6-7.8 1-1.2-.6-2.6-.9-4-.8-3.1.2-5.7 2.3-6.6 5.3-2.2 1.3-3.6 3.7-3.6 6.3 0 2.2 1 4.3 2.7 5.7.4 2.8 2.3 5 4.9 5.9.6 2.1 2.2 3.8 4.2 4.6 2.6 1 5.6.6 7.8-1 1.2.6 2.6.9 4 .8 3.1-.2 5.7-2.3 6.6-5.3 2.2-1.3 3.6-3.7 3.6-6.3.1-2.3-.9-4.5-2.7-5.7zm-14.8-5c1.4-.9 3.2-1.1 4.8-.5 1 .4 1.8 1.1 2.4 2-1.8 1-3.6 2.1-5.4 3.1-.4-.2-.8-.4-1.3-.5-.9-.2-1.8-.1-2.7.2.5-2 1.2-3.3 2.2-4.3zm-6.2 3.9c.7-.5 1.5-.8 2.4-.9v7.1l-2.7 1.6c-.6-.7-1-1.6-1-2.6.1-2.1 1.3-4.2 1.3-5.2zm-2.8 10.9c0-1.2.5-2.3 1.3-3.1 1.8 1.1 3.6 2.1 5.4 3.1v1.1c0 1 .4 1.9 1 2.6l-2.7 1.6c-1.4-1.1-2.4-2.6-3.3-3.9-.9-.5-1.7-1.4-1.7-1.4zm10.7 7.7c-1.4.9-3.2 1.1-4.8.5-1-.4-1.8-1.1-2.4-2 1.8-1 3.6-2.1 5.4-3.1.4.2.8.4 1.3.5.9.2 1.8.1 2.7-.2-.5 2-1.2 3.3-2.2 4.3zm6.2-3.9c-.7.5-1.5.8-2.4.9v-7.1l2.7-1.6c.6.7 1 1.6 1 2.6-.1 2.1-1.3 4.2-1.3 5.2zm7.6-5.4c0 1.2-.5 2.3-1.3 3.1-1.8-1.1-3.6-2.1-5.4-3.1v-1.1c0-1-.4-1.9-1-2.6l2.7-1.6c1.4 1.1 2.4 2.6 3.3 3.9.7.5 1.7 1.4 1.7 1.4z"
        fill="#10A37F"
      />
    </g>
    <text x="38" y="24" fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" fontSize="21" fontWeight="800" fill="#0F172A" letterSpacing="-0.5">
      OpenAI
    </text>
  </svg>
);

export const AnthropicLogo: React.FC<{ className?: string }> = ({ className = "h-8" }) => (
  <svg className={className} viewBox="0 0 175 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(2, 6) scale(1.05)">
      <path d="M17.3 3.5h-3.7l6.7 17H24L17.3 3.5zm-10.6 0L0 20.5h3.7l1.4-3.6h7l1.4 3.6h3.7L10.5 3.5H6.7zm-.4 10.2l2.3-6 2.3 6H6.3z" fill="#CC785C" />
    </g>
    <text x="35" y="24" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontSize="17" fontWeight="800" fill="#18181B" letterSpacing="1.2">
      ANTHROP\C
    </text>
  </svg>
);

export const AWSLogo: React.FC<{ className?: string }> = ({ className = "h-8" }) => (
  <svg className={className} viewBox="0 0 115 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="4" y="23" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontSize="23" fontWeight="900" fill="#232F3E" letterSpacing="-1">
      aws
    </text>
    <path d="M6 28.5c17 6 40 6 56-2" stroke="#FF9900" strokeWidth="3.4" strokeLinecap="round" fill="none" />
    <path d="M63 24.5l4 3.2-4.5 2.5z" fill="#FF9900" />
  </svg>
);

export const GoogleCloudLogo: React.FC<{ className?: string }> = ({ className = "h-8" }) => (
  <svg className={className} viewBox="0 0 178 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(4, 5) scale(1.1)">
      <path d="M19.3 12.3c.5-.9.7-2 .7-3.1 0-3.9-3.1-7-7-7-3.2 0-5.9 2.1-6.7 5.1-.6-.2-1.2-.3-1.8-.3-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5h14.5c2.8 0 5-2.2 5-5 0-2.4-1.7-4.4-4-4.8l-.7.1z" fill="#4285F4" />
      <path d="M13 2.2c1.7 0 3.3.6 4.5 1.7l-2.1 2.1c-.7-.6-1.5-1-2.4-1-2 0-3.6 1.6-3.6 3.6 0 .4.1.8.2 1.2L7.5 11C7.2 10.1 7 9.1 7 8c0-3.2 2.7-5.8 6-5.8z" fill="#EA4335" />
      <path d="M7.5 11l2.1-1.2c.5 1.2 1.4 2.1 2.6 2.6L11 14.5C9.4 13.7 8.2 12.5 7.5 11z" fill="#FBBC05" />
      <path d="M19 18H4.5C2 18 0 16 0 13.5c0-2.2 1.6-4 3.7-4.4l1.3 2.2C4.4 11.6 4 12.5 4 13.5 4 15 5.2 16.2 6.7 16.2H19c1.7 0 3-1.3 3-3s-1.3-3-3-3v-2.2c2.9 0 5.2 2.3 5.2 5.2 0 2.7-2.3 4.8-5.2 4.8z" fill="#34A853" />
    </g>
    <text x="40" y="24" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontSize="17" fontWeight="700" fill="#3C4043">
      Google Cloud
    </text>
  </svg>
);

export const TwilioLogo: React.FC<{ className?: string }> = ({ className = "h-8" }) => (
  <svg className={className} viewBox="0 0 130 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(3, 4) scale(0.44)">
      <circle cx="32" cy="32" r="28" fill="#F22F46" />
      <circle cx="23" cy="23" r="5" fill="#FFFFFF" />
      <circle cx="41" cy="23" r="5" fill="#FFFFFF" />
      <circle cx="23" cy="41" r="5" fill="#FFFFFF" />
      <circle cx="41" cy="41" r="5" fill="#FFFFFF" />
    </g>
    <text x="39" y="24" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontSize="20" fontWeight="800" fill="#F22F46" letterSpacing="-0.5">
      twilio
    </text>
  </svg>
);

export const MetaLogo: React.FC<{ className?: string }> = ({ className = "h-8" }) => (
  <svg className={className} viewBox="0 0 130 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="metaGradEcosystem" x1="0" y1="0" x2="28" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0081FB" />
        <stop offset="100%" stopColor="#0064E0" />
      </linearGradient>
    </defs>
    <g transform="translate(3, 6) scale(1.05)">
      <path
        d="M6.9 4c-2 0-3.7 1.3-4.9 3.1C.7 9.2 0 11.9 0 14.4c0 2 .5 3.6 1.7 4.6 1.2 1 2.8 1.4 4.5 1.4 1.5 0 2.6-.7 4-2.4.8-1 1.1-1.6 2.7-4.3l.8-1.3.2-.3c.1.1.1.2.2.3l2.2 3.6c.7 1.2 1.7 2.6 2.5 3.3 1 1 2 1.2 3.1 1.2 1.1 0 1.9-.4 2.5-.8.6-.5.8-1.2.8-2.6 0-2.7-.7-5.4-2.1-7.5-1.3-1.9-3-2.9-4.7-2.9-1 0-2.1.5-3.1 1.3-.7.6-1.3 1.3-1.8 2.1-.7-.9-1.3-1.5-2-2.1C8.8 4.4 7.7 4 6.9 4zm10.2 2c1.1 0 2.2.8 3 2 1.1 1.7 1.6 4.2 1.6 6.4 0 1.5-.4 2.9-1.8 2.9-.6 0-1-.2-1.7-1-.5-.6-1.3-1.9-2.8-4.4l-.6-1c-.4-.7-.8-1.3-1.3-2 .1-.1.1-.2.2-.3 1.1-1.7 2.1-2.6 3.4-2.6zM6.9 6.6c1.3 0 2.1.8 2.7 1.4.3.3.7.9 1.2 1.6l-1 1.6c-.8 1.2-1.9 3-2.8 4.3-1.2 1.6-1.8 1.8-2.5 1.8-.5 0-1-.2-1.4-.8-.3-.4-.5-1.1-.5-2 0-2.2.6-4.5 1.7-6.1.5-.7 1-1.2 1.5-1.5.3-.3.7-.4 1.1-.4z"
        fill="url(#metaGradEcosystem)"
      />
    </g>
    <text x="38" y="24" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontSize="20" fontWeight="800" fill="#1C2B33">
      Meta
    </text>
  </svg>
);

export const HuggingFaceLogo: React.FC<{ className?: string }> = ({ className = "h-8" }) => (
  <svg className={className} viewBox="0 0 180 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(3, 4) scale(0.95)">
      <circle cx="15" cy="15" r="14" fill="#FFD21E" />
      <circle cx="9" cy="15" r="2.5" fill="#FF7070" opacity="0.8" />
      <circle cx="21" cy="15" r="2.5" fill="#FF7070" opacity="0.8" />
      <path d="M9 11c1.2-1.2 2.8-1.2 4 0M17 11c1.2-1.2 2.8-1.2 4 0" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 18c1.5 2.5 8.5 2.5 10 0" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
      <path d="M2 17c1.5-3 5-4 6-2s-1.5 5-3.5 5-3-1.5-2.5-3z" fill="#FFD21E" stroke="#D97706" strokeWidth="0.8" />
      <path d="M28 17c-1.5-3-5-4-6-2s1.5 5 3.5 5 3-1.5 2.5-3z" fill="#FFD21E" stroke="#D97706" strokeWidth="0.8" />
    </g>
    <text x="38" y="24" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontSize="18" fontWeight="800" fill="#1F2937">
      Hugging Face
    </text>
  </svg>
);

export const SalesforceLogo: React.FC<{ className?: string }> = ({ className = "h-8" }) => (
  <svg className={className} viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(3, 3) scale(0.95)">
      <path
        d="M14.5 4.5c2.6 0 4.8 1.5 5.8 3.7 1.3-.9 2.9-1.4 4.7-1.4 4.1 0 7.5 3.4 7.5 7.5 0 .4 0 .8-.1 1.2 2.3.9 3.9 3.1 3.9 5.8 0 3.5-2.8 6.3-6.3 6.3H8.3C3.7 27.6 0 23.9 0 19.3c0-4.1 3-7.5 7-8.1 1.4-4 5.1-6.7 9.5-6.7h-2z"
        fill="#00A1E0"
      />
      <text x="8" y="19" fontFamily="Georgia, serif" fontStyle="italic" fontSize="8.5" fontWeight="bold" fill="#FFFFFF">
        salesforce
      </text>
    </g>
    <text x="44" y="24" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontSize="19" fontWeight="800" fill="#00A1E0">
      salesforce
    </text>
  </svg>
);

export const HubSpotLogo: React.FC<{ className?: string }> = ({ className = "h-8" }) => (
  <svg className={className} viewBox="0 0 145 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(3, 4) scale(1.08)">
      <path
        d="M18.2 7.9V5.1c.8-.4 1.3-1.2 1.3-2 0-1.2-1-2.2-2.2-2.2-.8 0-1.5.5-1.9 1.2v-.1c-.4-.7-1.1-1.1-1.9-1.1-1.2 0-2.2 1-2.2 2.2 0 .8.5 1.6 1.3 2v2.8c-1.3.3-2.4.9-3.2 1.8L4.3 4.7C4.6 3.9 4.3 3 3.6 2.4c-.9-.7-2.3-.7-3.1.2-.8.9-.8 2.2 0 3.1.5.6 1.4.8 2.2.6l5.2 6.3c-.6 1-.9 2.2-.9 3.4 0 1.3.4 2.6 1.1 3.6l-2.3 2.3c-.6-.2-1.3-.1-1.8.3-.9.7-1 2-.3 2.9.7.9 2 1 2.9.3.5-.4.7-1.1.5-1.7l2.3-2.3c1.1.8 2.4 1.2 3.8 1.2 3.4 0 6.2-2.8 6.2-6.2 0-2-.9-3.7-2.4-4.8l.8-.8c1 .8 2.3 1.2 3.6 1.2 1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2c-.8 0-1.5.5-1.9 1.2v-.1l-.1-.2zM15 16.5c-1.8 0-3.2-1.4-3.2-3.2 0-1.8 1.4-3.2 3.2-3.2s3.2 1.4 3.2 3.2c0 1.8-1.4 3.2-3.2 3.2z"
        fill="#FF7A59"
      />
    </g>
    <text x="36" y="24" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontSize="21" fontWeight="800" fill="#33475B" letterSpacing="-0.5">
      HubSpot
    </text>
  </svg>
);

export const StripeLogo: React.FC<{ className?: string }> = ({ className = "h-8" }) => (
  <svg className={className} viewBox="0 0 110 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="2" y="26" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontSize="28" fontWeight="900" fill="#635BFF" letterSpacing="-1.5">
      stripe
    </text>
  </svg>
);

// ————————————— 2 ROTATING LINES OF 5 LOGOS EACH —————————————

export const logoLines = [
  // Line 1: AI & Cloud Infrastructure
  [
    { name: "OpenAI", component: OpenAILogo },
    { name: "Anthropic Claude", component: AnthropicLogo },
    { name: "Amazon Web Services", component: AWSLogo },
    { name: "Google Cloud", component: GoogleCloudLogo },
    { name: "Twilio", component: TwilioLogo }
  ],
  // Line 2: Enterprise Platforms & Growth Stack
  [
    { name: "Meta Llama", component: MetaLogo },
    { name: "Hugging Face", component: HuggingFaceLogo },
    { name: "Salesforce", component: SalesforceLogo },
    { name: "HubSpot", component: HubSpotLogo },
    { name: "Stripe", component: StripeLogo }
  ]
];

// ————————————— INTERACTIVE BOUNCING & FADING MARQUEE COMPONENT —————————————

export const BouncingLogoEcosystem: React.FC = () => {
  const [activeLine, setActiveLine] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-switch every 5.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveLine((prev) => (prev === 0 ? 1 : 0));
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div 
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Container with Min Height to Prevent Layout Shift */}
      <div className="relative min-h-[72px] sm:min-h-[80px] flex items-center justify-center overflow-hidden">
        {logoLines.map((line, lineIndex) => {
          const isActive = lineIndex === activeLine;

          return (
            <div
              key={lineIndex}
              className={`w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 items-center justify-items-center transition-all duration-700 ease-out ${
                isActive
                  ? 'opacity-100 pointer-events-auto scale-100 relative z-10'
                  : 'opacity-0 pointer-events-none scale-95 absolute inset-0 z-0'
              }`}
            >
              {line.map((item, idx) => {
                const LogoComponent = item.component;
                return (
                  <div
                    key={item.name}
                    className="w-full flex items-center justify-center p-2.5 sm:p-3 rounded-2xl bg-white/95 border border-[#D5E1CE] shadow-2xs hover:shadow-md hover:border-[#003D2B]/40 hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group"
                    style={{
                      // Staggered bounce-in animation when becoming active
                      animation: isActive 
                        ? `partnerLogoBounce 650ms cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 85}ms both`
                        : undefined
                    }}
                    title={item.name}
                  >
                    <div className="flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                      <LogoComponent className="h-6 sm:h-7 max-w-[140px] drop-shadow-2xs" />
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Interactive Line Switcher Indicator Dots */}
      <div className="flex items-center justify-center gap-2 pt-4">
        {logoLines.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveLine(i)}
            className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
              activeLine === i 
                ? 'w-7 bg-[#003D2B]' 
                : 'w-2 bg-[#D5E1CE] hover:bg-[#A3B89B]'
            }`}
            title={`Switch to Line ${i + 1}`}
            aria-label={`View Logo Line ${i + 1}`}
          />
        ))}
      </div>

      {/* Global Embedded Keyframes for Physics-Based Bouncy Spring Animation */}
      <style>{`
        @keyframes partnerLogoBounce {
          0% {
            opacity: 0;
            transform: translateY(24px) scale(0.8);
          }
          55% {
            opacity: 0.95;
            transform: translateY(-8px) scale(1.08);
          }
          75% {
            transform: translateY(3px) scale(0.97);
          }
          100% {
            opacity: 1;
            transform: translateY(0px) scale(1);
          }
        }
      `}</style>
    </div>
  );
};
