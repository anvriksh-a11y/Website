import React, { useRef, useEffect } from 'react';

interface ClientProject {
  id: string;
  title: string;
  domain: string;
  image: string;
}

const clientProjects: ClientProject[] = [
  {
    id: 'blissberg',
    title: 'Blissberg Semiconductors',
    domain: 'blissbergsemi.com',
    image: '/portfolio/blissbergsemi.webp',
  },
  {
    id: 'genesys',
    title: 'Genesys GreenX',
    domain: 'genesysgreenx.com',
    image: '/portfolio/genesysgreenx.webp',
  },
  {
    id: 'blossom',
    title: 'Blossom Ladies',
    domain: 'blossomladies.netlify.app',
    image: '/portfolio/blossomladies.webp',
  },
  {
    id: 'tanvi',
    title: 'Tanvi Impex',
    domain: 'tanviimpex.com',
    image: '/portfolio/tanviimpex.webp',
  },
  {
    id: 'rahuul',
    title: 'Learn With Rahuul',
    domain: 'learnwithrahuul.com',
    image: '/portfolio/learnwithrahuul.webp',
  },
  {
    id: 'eseva',
    title: 'Eseva World',
    domain: 'esevaworld.netlify.app',
    image: '/portfolio/esevaworld.webp',
  },
];

// Duplicate sets for seamless infinite 60fps marquee
const marqueeItems = [
  ...clientProjects.map((p, i) => ({ ...p, uniqueKey: `set1-${p.id}-${i}` })),
  ...clientProjects.map((p, i) => ({ ...p, uniqueKey: `set2-${p.id}-${i}` })),
];

const ClientWorkShowcase: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef<number>(0);

  // 60fps continuous horizontal gliding marquee on the single flex track
  // (Prevents any card overlap/merging with guaranteed flex gaps)
  useEffect(() => {
    let animId: number;
    const speed = 2.0; // Faster, energetic continuous glide speed

    const animate = () => {
      if (trackRef.current) {
        // Measure half the scroll width (width of 1 complete set)
        const halfWidth = trackRef.current.scrollWidth / 2;
        if (halfWidth > 0) {
          offsetRef.current += speed;
          if (offsetRef.current >= halfWidth) {
            offsetRef.current -= halfWidth;
          }
          trackRef.current.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
        }
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="relative w-full pt-6 sm:pt-10 pb-0 bg-[#F4F7EE] overflow-hidden select-none">
      
      {/* ————————————————— FLEX MARQUEE TRACK ————————————————— */}
      <div className="w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-center gap-4 sm:gap-6 md:gap-7 will-change-transform"
          style={{ width: 'max-content' }}
        >
          {marqueeItems.map((site) => (
            <div
              key={site.uniqueKey}
              className="shrink-0 w-[540px] sm:w-[660px] md:w-[760px] overflow-hidden bg-white shadow-md rounded-t-[5px] rounded-b-none border-0"
            >
              {/* Natural 16:10 desktop screen: w-full h-auto fills 100% of the box with zero zoom, zero blank space */}
              <img
                src={site.image}
                alt={site.title}
                className="w-full h-auto block select-none pointer-events-none rounded-t-[5px]"
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Subtle bottom fog gradient concentrated strictly at the very bottom edge */}
      <div 
        className="absolute inset-x-0 bottom-0 pointer-events-none z-20 h-[45px] sm:h-[60px] md:h-[75px]"
        style={{
          background: 'linear-gradient(to top, #F4F7EE 0%, rgba(244, 247, 238, 0.95) 20%, rgba(244, 247, 238, 0.45) 55%, rgba(244, 247, 238, 0) 100%)'
        }}
      />

    </section>
  );
};

export default ClientWorkShowcase;
