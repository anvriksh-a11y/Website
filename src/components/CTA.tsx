import { Link } from 'react-router-dom';
import Reveal from './Reveal';

const CTA: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F4F7EE] relative select-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div className="container mx-auto px-5 max-w-6xl">
        <Reveal variant="scale" duration={850}>
          <div className="relative overflow-hidden rounded-[2.4rem] text-center px-6 sm:px-16 py-16 sm:py-20 bg-gradient-to-br from-[#003D2B] via-[#022D20] to-[#011F16] shadow-[0_24px_64px_rgba(0,61,43,0.30)] border border-[#2D452C]">
            {/* Subtle soft organic ambient circles */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[620px] h-[340px] rounded-full opacity-20" style={{ background: 'radial-gradient(ellipse at center, #98D8A0 0%, transparent 70%)', filter: 'blur(52px)' }} />
              <div className="absolute bottom-0 right-0 w-80 h-64 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #E3EDE0 0%, transparent 70%)', filter: 'blur(44px)' }} />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2.5 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 mb-6 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#E3EDE0]">Limited onboarding slots each quarter</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-[800] mb-4 text-white tracking-[-0.035em] leading-[1.08]">
                Ready to Transform
                <br />
                <span className="text-[#A7E2AF]">Your Workflow?</span>
              </h2>
              <p className="text-[#C6DCC4] text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Partner with our technical team to engineer intelligent, scalable solutions for your business.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3.5">
                <Link to="/company/contact-us" className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-[#003D2B] bg-white hover:bg-[#F4F7EE] shadow-[0_12px_28px_rgba(0,0,0,0.25)] hover:scale-105 active:scale-100 transition-all">
                  <span>Get Started Now</span>
                  <span className="w-6 h-6 rounded-full bg-[#003D2B]/10 flex items-center justify-center"><i className="fas fa-arrow-right text-xs text-[#003D2B]" /></span>
                </Link>
                <Link to="/company/contact-us" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-105 active:scale-100 transition-all">
                  Contact Sales
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-xs text-[#A8C7A5] font-medium">
                <span className="inline-flex items-center gap-1.5"><i className="fas fa-check text-emerald-400 text-[10px]" /> Free discovery call</span>
                <span className="inline-flex items-center gap-1.5"><i className="fas fa-check text-emerald-400 text-[10px]" /> NDA friendly</span>
                <span className="inline-flex items-center gap-1.5"><i className="fas fa-check text-emerald-400 text-[10px]" /> Reply within 24h</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTA;
