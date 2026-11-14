import React, { useRef, useEffect } from 'react';
import Reveal from './Reveal';

interface ReelCard {
  id: string;
  image: string;
  alt: string;
}

const reelCards: ReelCard[] = [
  { id: 'voice-ai', image: '/services/reels/reel_voice_ai.webp', alt: 'AI Calling Agent' },
  { id: 'web-dev', image: '/services/reels/reel_web_dev.webp', alt: 'Web Development' },
  { id: 'agentic-ai', image: '/services/reels/reel_agentic_ai.webp', alt: 'Agentic AI' },
  { id: 'custom-software', image: '/services/reels/reel_custom_software.webp', alt: 'Custom Software Development' },
  { id: 'gen-ai', image: '/services/reels/reel_gen_ai.webp', alt: 'Gen AI' },
  { id: 'app-dev', image: '/services/reels/reel_app_dev.webp', alt: 'Application Development' },
];

// Create 6 continuous sets for guaranteed infinite marquee across any screen width
const marqueeReels = [
  ...reelCards.map((r, i) => ({ ...r, uniqueKey: `set1-${r.id}-${i}` })),
  ...reelCards.map((r, i) => ({ ...r, uniqueKey: `set2-${r.id}-${i}` })),
  ...reelCards.map((r, i) => ({ ...r, uniqueKey: `set3-${r.id}-${i}` })),
  ...reelCards.map((r, i) => ({ ...r, uniqueKey: `set4-${r.id}-${i}` })),
  ...reelCards.map((r, i) => ({ ...r, uniqueKey: `set5-${r.id}-${i}` })),
  ...reelCards.map((r, i) => ({ ...r, uniqueKey: `set6-${r.id}-${i}` })),
];

const CARD_WIDTH = 162; // Well-proportioned card width
const CARD_GAP = 16;    // Spacing between cards
const STRIDE = CARD_WIDTH + CARD_GAP;
const SET_WIDTH = reelCards.length * STRIDE; // Width of 1 full 6-card set (1068px)

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const offsetRef = useRef<number>(SET_WIDTH);

  // Initialize offset within [SET_WIDTH, SET_WIDTH * 2] so left and right are fully populated
  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      offsetRef.current = SET_WIDTH + 2 * STRIDE - containerWidth / 2 + CARD_WIDTH / 2;
      // Ensure offset stays within the safe continuous loop bounds [SET_WIDTH, SET_WIDTH * 2]
      while (offsetRef.current < SET_WIDTH) {
        offsetRef.current += SET_WIDTH;
      }
      while (offsetRef.current >= SET_WIDTH * 2) {
        offsetRef.current -= SET_WIDTH;
      }
    }
  }, []);

  // 60fps GPU-accelerated marquee with smooth parabolic curve matching reference mockup
  useEffect(() => {
    let animId: number;
    const speed = 0.65; // Smooth horizontal gliding speed

    const updateMarquee = () => {
      // Continuous marquee that never stops, even on hover
      offsetRef.current += speed;
      // Seamless infinite wrap around single set width
      if (offsetRef.current >= SET_WIDTH * 2) {
        offsetRef.current -= SET_WIDTH;
      }

      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const centerX = containerWidth / 2;
        // Tighter curvature radius so the parabolic smile arch is clearly visible across all screen sizes
        const radius = Math.min(Math.max(containerWidth * 0.42, 380), 600);

        // Update each card's position, height, scale, rotation and pronounced parabolic curve
        cardsRef.current.forEach((cardEl, idx) => {
          if (!cardEl) return;
          const baseX = idx * STRIDE;
          const currentX = baseX - offsetRef.current + CARD_WIDTH / 2;
          
          // Normalized distance from center (-1.0 at left edge, 0 at center, +1.0 at right edge)
          const delta = (currentX - centerX) / radius;
          const clampedDelta = Math.max(-1.4, Math.min(1.4, delta));
          const dSq = clampedDelta * clampedDelta;

          // Pronounced parabolic smile curve: center is at baseline, outer cards arch upward significantly
          const translateY = dSq * -48;         // pronounced parabolic arch (-48px upward curve at edges)
          const rotateDeg = clampedDelta * 5.2; // visible natural fan tilt (-6.5° to +6.5°)
          const scale = 1.05 - dSq * 0.12;      // center card is highlighted, tapering to 0.90 at edges

          cardEl.style.transform = `translate3d(${currentX - CARD_WIDTH / 2}px, calc(-50% + ${translateY}px), 0) scale(${Math.max(0.88, scale)}) rotate(${rotateDeg}deg)`;
          cardEl.style.zIndex = `${Math.round(40 - dSq * 20)}`;
        });
      }

      animId = requestAnimationFrame(updateMarquee);
    };

    animId = requestAnimationFrame(updateMarquee);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section 
      className="relative w-full min-h-[620px] lg:h-screen lg:max-h-[880px] bg-[#F4F7EE] flex flex-col justify-between pt-20 sm:pt-24 pb-4 sm:pb-6 overflow-x-clip select-none"
      style={{ fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}
    >
      
      {/* ————————————————— TOP SECTION: BADGE, HEADLINE & SUBTITLE ————————————————— */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full text-center shrink-0">
        
        {/* Top Trust Badge */}
        <Reveal variant="fade" duration={600}>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] shadow-xs mb-2 sm:mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span className="text-[12px] sm:text-[13px] font-semibold text-[#2D452C] tracking-tight">
              Enterprise AI &amp; Custom Software Solutions
            </span>
          </div>
        </Reveal>

        {/* Main Headline */}
        <Reveal variant="up" duration={700} delay={80}>
          <h1 
            className="text-3xl sm:text-4xl md:text-[44px] lg:text-[50px] font-[800] text-[#141912] tracking-[-0.035em] leading-[1.08] max-w-3xl mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Scale Your Business<br />
            with Agentic AI &amp; Custom Tech
          </h1>
        </Reveal>

        {/* Subtitle with Hand-Drawn "//" slashes and Top-Right Doodle */}
        <Reveal variant="up" duration={700} delay={140}>
          <div className="relative max-w-xl mx-auto mt-2 sm:mt-2.5 mb-3 sm:mb-5 px-6">
            
            {/* Hand-drawn "//" slashes to the left */}
            <span 
              className="absolute left-0 sm:-left-3 top-0 text-[#6B8361] text-lg sm:text-xl font-bold select-none"
              style={{ fontFamily: 'Georgia, serif' }}
              aria-hidden="true"
            >
              //
            </span>

            {/* Subtitle text */}
            <p className="text-xs sm:text-[13.5px] md:text-[14px] text-[#4E5B49] leading-relaxed font-normal">
              Autonomous voice agents, bespoke software solutions, and high-performance digital platforms engineered to help modern businesses scale faster.
            </p>

            {/* Top-Right Hand-Drawn Doodle: Positioned cleanly in the open right margin, centered with subtitle */}
            <div 
              className="absolute -right-24 md:-right-32 lg:-right-40 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center select-none pointer-events-none"
              aria-hidden="true"
            >
              <span 
                className="font-caveat text-[20px] sm:text-[22px] font-bold text-[#141912] rotate-[-5deg] tracking-wide leading-tight whitespace-nowrap"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Deploy AI in days
              </span>
              <svg 
                className="w-8 h-8 text-[#141912] translate-x-1 mt-0.5" 
                viewBox="0 0 50 46" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 6 C 24 12, 34 22, 32 34" />
                <path d="M25 32 L 32 34 L 34 27" />
              </svg>
            </div>

          </div>
        </Reveal>

      </div>

      {/* ————————————————— CENTER SECTION: 7 REEL CARDS IN AMPLE VERTICAL MARQUEE TRACK ————————————————— */}
      {/* overflow-visible guarantees cards NEVER get sliced or clipped at the bottom */}
      <div 
        ref={containerRef}
        className="relative w-full h-[250px] sm:h-[275px] md:h-[295px] shrink-0 overflow-visible my-1 sm:my-2"
      >
        {/* 6 Reel Cards repeated in infinite sets */}
        {marqueeReels.map((card, idx) => (
          <div
            key={card.uniqueKey}
            ref={(el) => {
              cardsRef.current[idx] = el;
            }}
            className="absolute top-1/2 left-0 w-[135px] sm:w-[150px] md:w-[162px] h-[195px] sm:h-[215px] md:h-[235px] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-[0_12px_28px_rgba(21,24,17,0.13)] border border-[#D5E1CE] bg-white will-change-transform cursor-pointer transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(21,24,17,0.22)] group"
          >
            {/* Reel Artwork */}
            <img
              src={card.image}
              alt={card.alt}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              loading="eager"
            />
          </div>
        ))}
      </div>

      {/* ————————————————— BOTTOM SECTION: CTA BUTTON & "ZERO COST" DOODLE ————————————————— */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full shrink-0 pt-2 sm:pt-3 pb-3 sm:pb-5 z-20">
        <Reveal variant="up" duration={700} delay={180}>
          <div className="flex items-center justify-center">
            
            {/* CTA Button Wrapper with Doodle securely anchored to its left */}
            <div className="relative inline-flex items-center justify-center">
              
              {/* Left Hand-Drawn Doodle: "Proven ROI" anchored cleanly with fixed buffer */}
              <div 
                className="hidden sm:flex absolute right-[calc(100%+14px)] top-1/2 -translate-y-1/2 items-center gap-1.5 select-none pointer-events-none whitespace-nowrap"
                aria-hidden="true"
              >
                <span 
                  className="font-caveat text-[21px] sm:text-[23px] font-bold text-[#141912] rotate-[-6deg]"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  Proven ROI
                </span>
                <svg 
                  className="w-10 h-7 text-[#141912] translate-y-0.5" 
                  viewBox="0 0 50 35" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M6 22 C 16 10, 32 10, 42 16" />
                  <path d="M36 10 L 42 16 L 38 22" />
                </svg>
              </div>

              {/* Primary CTA Button */}
              <a
                href="/company/contact-us"
                className="group relative inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base text-white bg-[#003D2B] hover:bg-[#022D20] shadow-[0_12px_28px_rgba(0,61,43,0.32)] hover:shadow-[0_16px_36px_rgba(0,61,43,0.42)] hover:scale-105 active:scale-100 transition-all duration-300 z-10"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <span>Get in touch</span>
                <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-xs group-hover:translate-x-0.5 transition-transform">
                  <i className="fas fa-arrow-right text-[11px]" />
                </span>
              </a>

            </div>

          </div>
        </Reveal>
      </div>

    </section>
  );
};

export default Hero;
