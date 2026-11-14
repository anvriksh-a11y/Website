import React from 'react';
import Reveal from './Reveal';

const testimonialsData = [
    {
        quote: "ANVRiksh built a custom dashboard that lets our users track the exact location of the trees they've planted, and also built our integrated website platform. Their incredible engineering completely transformed our user engagement and mission transparency.",
        name: "Rupak Gouda",
        role: "Founder, ForestGift",
        link: "https://forestgift.in",
        linkText: "Visit forestgift.in",
        logoSrc: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop/AE0r4EWz6LuN9z6g/title-IA5qPxoWCRTW532I.jpg",
        fallbackIcon: "fas fa-leaf",
        fallbackColor: "text-green-600"
    },
    {
        quote: "ANVRiksh created an outstanding e-learning platform for our CSV training programs. The intuitive design, robust architecture, and seamless user experience have been instrumental in delivering our curriculum effectively to our students.",
        name: "Rahuul Varma",
        role: "Founder",
        link: "https://learnwithrahuul.com",
        linkText: "Visit learnwithrahuul.com",
        logoSrc: "https://learnwithrahuul.com/logo2.png",
        fallbackIcon: "fas fa-graduation-cap",
        fallbackColor: "text-blue-500",
        logoText: "Learn with Rahuul"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-20 sm:py-28 relative overflow-hidden bg-[#F4F7EE] select-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[760px] h-[380px] rounded-full pointer-events-none opacity-40" style={{ background: 'radial-gradient(ellipse at center, #E3EDE0 0%, transparent 70%)', filter: 'blur(56px)' }} />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <Reveal variant="up" duration={750}>
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] shadow-xs mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2D452C] animate-pulse" />
                            <span className="text-[12px] sm:text-[13px] font-semibold text-[#2D452C] tracking-tight">Client Success</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-[800] leading-tight mb-4 text-[#141912] tracking-[-0.035em]">
                            Trusted by Innovators
                        </h2>
                        <p className="text-[#4E5B49] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                            See how we've helped forward-thinking organizations build custom digital solutions and scale their impact.
                        </p>
                        <div className="flex items-center justify-center gap-1.5 mt-5">
                          {Array.from({ length: 5 }).map((_, i) => <i key={i} className="fas fa-star text-amber-500 text-sm" />)}
                          <span className="text-xs font-semibold text-[#4E5B49] ml-2">5.0 from founders who shipped with us</span>
                        </div>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 max-w-7xl mx-auto">
                    {testimonialsData.map((testimonial, index) => (
                      <Reveal key={index} variant={index === 0 ? 'left' : 'right'} duration={820} delay={index * 120}>
                        <div className="relative group bg-white border border-[#D5E1CE] shadow-[0_4px_16px_rgba(21,24,17,0.04)] rounded-[22px] p-8 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,61,43,0.12)] transition-all duration-300 flex flex-col h-full overflow-hidden">
                            <div className="relative flex flex-col h-full items-start gap-6">
                                {/* Logo / Profile Area */}
                                <div className="flex-shrink-0">
                                    <div className="w-44 h-16 rounded-xl bg-[#F4F7EE] border border-[#D5E1CE] flex items-center justify-center p-3 shadow-xs group-hover:scale-105 transition-transform duration-300 overflow-hidden text-center">
                                        {testimonial.logoSrc ? (
                                            <>
                                                <img 
                                                    src={testimonial.logoSrc} 
                                                    alt={`${testimonial.name} Logo`} 
                                                    className="w-full h-full object-contain"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).style.display = 'none';
                                                        (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                                    }}
                                                />
                                                <i className={`${testimonial.fallbackIcon} text-3xl ${testimonial.fallbackColor} hidden`}></i>
                                            </>
                                        ) : (
                                            <div className="flex items-center justify-center gap-2">
                                                <i className={`${testimonial.fallbackIcon} text-xl ${testimonial.fallbackColor}`}></i>
                                                {testimonial.logoText && <span className="font-bold text-[#141912] leading-tight text-xs">{testimonial.logoText}</span>}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                
                                {/* Content Area */}
                                <div className="flex-1 flex flex-col w-full">
                                    <div className="w-9 h-9 rounded-xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center mb-4">
                                        <i className="fas fa-quote-left text-sm text-[#003D2B]"></i>
                                    </div>
                                    <p className="text-[16px] sm:text-[17px] text-[#141912] leading-relaxed mb-6 flex-1 font-normal">
                                        "{testimonial.quote}"
                                    </p>

                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#EAEFE5] pt-5 mt-auto w-full">
                                        <div>
                                            <h4 className="text-base font-[800] text-[#141912] mb-0.5">{testimonial.name}</h4>
                                            <p className="text-xs text-[#2D452C] font-semibold">{testimonial.role}</p>
                                        </div>
                                        <a
                                            href={testimonial.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003D2B] hover:text-[#022D20] transition-colors group/link mt-2 sm:mt-0"
                                        >
                                            <span>{testimonial.linkText}</span>
                                            <i className="fas fa-arrow-right text-xs transform group-hover/link:translate-x-1 transition-transform"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
