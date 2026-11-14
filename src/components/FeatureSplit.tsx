import React from 'react';
import Reveal from './Reveal';

interface FeatureSplitProps {
  title: string;
  description: string;
  imageSrc?: string;
  reversed?: boolean;
  children?: React.ReactNode;
}

const FeatureSplit: React.FC<FeatureSplitProps> = ({ title, description, imageSrc, reversed = false, children }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#F4F7EE] border-b border-[#D5E1CE] relative overflow-hidden select-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div className="absolute top-1/3 left-0 w-[440px] h-[340px] rounded-full pointer-events-none opacity-40" style={{ background: 'radial-gradient(circle, #E3EDE0 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="container mx-auto px-5 max-w-7xl relative">
        <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-16`}>
          <Reveal variant={reversed ? 'right' : 'left'} duration={800} className="flex-1">
            <h2 className="text-3xl md:text-[38px] lg:text-[42px] font-[800] mb-6 leading-[1.12] text-[#141912] tracking-[-0.035em]">{title}</h2>
            {description && <p className="text-[#4E5B49] text-base sm:text-lg mb-8 leading-relaxed">{description}</p>}
            {children}
          </Reveal>
          <Reveal variant={reversed ? 'left' : 'right'} duration={850} delay={120} className="flex-1 w-full">
            <div className="group relative rounded-[1.8rem] p-2 overflow-hidden transition-transform duration-500 hover:-translate-y-1.5 shadow-[0_20px_48px_rgba(21,24,17,0.10)] border border-[#D5E1CE] bg-white">
              <div className="relative rounded-[calc(1.8rem-8px)] bg-slate-900/90 overflow-hidden">
                {imageSrc ? (
                  <img src={imageSrc} alt={title} loading="lazy" className="w-full h-auto rounded-[1.2rem] relative z-10 group-hover:scale-[1.015] transition-transform duration-700" />
                ) : (
                  <div className="w-full aspect-video bg-[#F4F7EE] rounded-[1.2rem] relative z-10 flex items-center justify-center border border-[#D5E1CE]">
                    <div className="text-center">
                      <i className="fas fa-chart-line text-5xl text-[#003D2B]/30 mb-4" />
                      <p className="text-[#4E5B49] font-mono text-sm">UI Preview: {title}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default FeatureSplit;
