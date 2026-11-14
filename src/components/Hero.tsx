import React, { useRef, useEffect, useState } from 'react';
import Reveal from './Reveal';

interface ReelCard {
  id: string;
  image: string;
  alt: string;
}

const reelCards: ReelCard[] = [
  { id: 'plant', image: '/reels/reel_plant.png', alt: 'Monstera Plant' },
  { id: 'flowers', image: '/reels/reel_flowers.png', alt: 'Flower Bouquet' },
  { id: 'pottery', image: '/reels/reel_pottery.png', alt: 'Ceramic Pottery' },
  { id: 'cosmetic', image: '/reels/reel_cosmetic.png', alt: 'Cosmetic Skincare' },
  { id: 'coffee', image: '/reels/reel_coffee.png', alt: 'Latte Art Coffee' },
  { id: 'headphones', image: '/reels/reel_headphones.png', alt: 'Olive Green Headphones' },
  { id: 'sneakers', image: '/reels/reel_sneakers.png', alt: 'Olive Green Sneakers' },
];

// Create 3 continuous sets for seamless 60fps infinite marquee
const marqueeReels = [
  ...reelCards.map((r, i) => ({ ...r, uniqueKey: `set1-${r.id}-${i}` })),
  ...reelCards.map((r, i) => ({ ...r, uniqueKey: `set2-${r.id}-${i}` })),
  ...reelCards.map((r, i) => ({ ...r, uniqueKey: `set3-${r.id}-${i}` })),
];

const CARD_WIDTH = 162; // Well-proportioned card width
const CARD_GAP = 16;    // Spacing between cards
const STRIDE = CARD_WIDTH + CARD_GAP;
const SET_WIDTH = reelCards.length * STRIDE; // Width of 1 full 7-card set (1246px)

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const offsetRef = useRef<number>(0);
  const [isHovered, setIsHovered] = useState(false);

  // Center initial offset so the 4th card (cosmetic) sits dead center on screen load
  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      offsetRef.current = SET_WIDTH + 3 * STRIDE - containerWidth / 2 + CARD_WIDTH / 2;
    }
  }, []);

  // 60fps GPU-accelerated marquee with smooth parabolic curve matching reference mockup
  useEffect(() => {
    let animId: number;
    const speed = 0.65; // Smooth horizontal gliding speed

    const updateMarquee = () => {
      if (!isHovered) {
        offsetRef.current += speed;
        // Seamless infinite wrap around single set width
        if (offsetRef.current >= SET_WIDTH * 2) {
          offsetRef.current -= SET_WIDTH;
        }
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
  }, [isHovered]);

  return (
    <section 
      className="relative w-full min-h-[620px] lg:h-screen lg:max-h-[880px] bg-[#F4F7EE] flex flex-col justify-between pt-20 sm:pt-24 pb-4 sm:pb-6 overflow-x-clip select-none"
      style={{ fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}
    >
      
      {/* ————————————————— TOP SECTION: BADGE, HEADLINE & SUBTITLE ————————————————— */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full text-center shrink-0">
        
        {/* Top Trust Badge: "Trusted by 120,000+ indie makers" (sitting comfortably below navbar) */}
        <Reveal variant="fade" duration={600}>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] shadow-xs mb-2 sm:mb-2.5">
            <span className="text-[12px] sm:text-[13px] font-semibold text-[#2D452C] tracking-tight">
              Trusted by 120,000+ indie makers
            </span>
          </div>
        </Reveal>

        {/* Main Headline: "Captivate Crowds with Snackable Reels" */}
        <Reveal variant="up" duration={700} delay={80}>
          <h1 
            className="text-3xl sm:text-4xl md:text-[44px] lg:text-[50px] font-[800] text-[#141912] tracking-[-0.035em] leading-[1.08] max-w-3xl mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Captivate Crowds<br />
            with Snackable Reels
          </h1>
        </Reveal>

        {/* Subtitle with Hand-Drawn "//" slashes and Top-Right "Be seen with clips" doodle */}
        <Reveal variant="up" duration={700} delay={140}>
          <div className="relative max-w-xl mx-auto mt-2 sm:mt-2.5 px-6">
            
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
              Grow your brand with short, snappy product clips by our handpicked video makers. Our crew is ready to lift your next launch higher.
            </p>

            {/* Top-Right Hand-Drawn Doodle: "Be seen with clips" + curved arrow */}
            <div 
              className="absolute -right-8 sm:-right-20 md:-right-26 -top-2 hidden sm:flex flex-col items-center select-none pointer-events-none"
              aria-hidden="true"
            >
              <span 
                className="font-caveat text-[20px] sm:text-[22px] font-bold text-[#141912] rotate-[-5deg] tracking-wide leading-tight"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Be seen<br />with clips
              </span>
              <svg 
                className="w-9 h-9 sm:w-10 sm:h-10 text-[#141912] -mt-1 translate-x-2" 
                viewBox="0 0 50 50" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M10 8 C 22 14, 34 26, 32 38" />
                <path d="M24 36 L 32 38 L 34 30" />
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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {/* Soft edge fade masks on sides */}
        <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-[#F4F7EE] to-transparent z-40 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-[#F4F7EE] to-transparent z-40 pointer-events-none" />

        {/* 7 Reel Cards repeated in infinite 3-set loop */}
        {marqueeReels.map((card, idx) => (
          <div
            key={card.uniqueKey}
            ref={(el) => {
              cardsRef.current[idx] = el;
            }}
            className="absolute top-1/2 left-0 w-[135px] sm:w-[150px] md:w-[162px] h-[195px] sm:h-[215px] md:h-[235px] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-[0_12px_28px_rgba(21,24,17,0.13)] border border-[#D5E1CE] bg-white will-change-transform cursor-pointer transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(21,24,17,0.22)] group"
          >
            {/* Reel Video Thumbnail Image */}
            <img
              src={card.image}
              alt={card.alt}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              loading="eager"
            />

            {/* Bottom-Left Play Button Icon */}
            <div className="absolute bottom-3 left-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center text-white border border-white/60 shadow-xs group-hover:bg-white/80 transition-colors">
              <svg className="w-3.5 h-3.5 fill-current ml-0.5 text-white drop-shadow-xs" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* ————————————————— BOTTOM SECTION: CTA BUTTON & "ZERO COST" DOODLE ————————————————— */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full shrink-0 pt-2 sm:pt-3 pb-3 sm:pb-5 z-20">
        <Reveal variant="up" duration={700} delay={180}>
          <div className="relative flex items-center justify-center">
            
            {/* Bottom-Left Hand-Drawn Doodle: "Zero cost" + curved upward arrow */}
            <div 
              className="absolute left-[12%] sm:left-[24%] lg:left-[33%] -top-2 flex items-center gap-1.5 select-none pointer-events-none"
              aria-hidden="true"
            >
              <span 
                className="font-caveat text-[20px] sm:text-[23px] font-bold text-[#141912] rotate-[-8deg]"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Zero cost
              </span>
              <svg 
                className="w-9 h-7 sm:w-11 sm:h-8 text-[#141912] translate-y-1" 
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

            {/* Primary CTA Button: "Make a Reel" */}
            <a
              href="/company/contact-us"
              className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base text-white bg-[#003D2B] hover:bg-[#022D20] shadow-[0_12px_28px_rgba(0,61,43,0.32)] hover:shadow-[0_16px_36px_rgba(0,61,43,0.42)] hover:scale-105 active:scale-100 transition-all duration-300 z-10"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span>Make a Reel</span>
            </a>

          </div>
        </Reveal>
      </div>

    </section>
  );
};

export default Hero;
