import React from 'react';
import Reveal from './Reveal';

const testimonialsData = [
    {
        quote: "ANVRiksh built a custom dashboard that lets our users track the exact location of the trees they've planted, and also built our integrated website platform. Their incredible engineering completely transformed our user engagement and mission transparency.",
        name: "Rupak Gouda",
        role: "Founder, ForestGift"
    },
    {
        quote: "ANVRiksh created an outstanding e-learning platform for our CSV training programs. The intuitive design, robust architecture, and seamless user experience have been instrumental in delivering our curriculum effectively to our students.",
        name: "Rahuul Varma",
        role: "Founder, Learn with Rahuul"
    },
    {
        quote: "ANVRiksh provides exceptional digital marketing support for OMIMPEX. Their data-driven campaigns, brand positioning, and targeted outreach strategies have delivered measurable growth and boosted our client acquisition significantly.",
        name: "Kaushik",
        role: "Founder, OMIMPEX"
    },
    {
        quote: "ANVRiksh designed a wonderful, modern website for Tanvi Impex. The craftsmanship, seamless user flow, and clean corporate aesthetics have elevated our global business presence and earned great praise from our international trade partners.",
        name: "Bhushan Gajra",
        role: "Founder, Tanvi Impex"
    },
    {
        quote: "ANVRiksh developed and deployed an intelligent AI Calling Agent with DTMF keypad inputs for Pride Online Education. It seamlessly automates student admissions inquiries, course guidance, and educational helpline routing 24/7 with zero latency.",
        name: "Firoj",
        role: "Founder, Pride Online Education"
    }
];

// Duplicate 2 exact sets for seamless 50% loop
const marqueeTestimonials = [
    ...testimonialsData,
    ...testimonialsData
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-20 sm:py-28 relative overflow-hidden bg-[#F4F7EE] select-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[760px] h-[380px] rounded-full pointer-events-none opacity-40" style={{ background: 'radial-gradient(ellipse at center, #E3EDE0 0%, transparent 70%)', filter: 'blur(56px)' }} />

            <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-12 sm:mb-16">
                <Reveal variant="up" duration={750}>
                    <div className="text-center">
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
            </div>

            {/* —————————— CONTINUOUS GLIDING MARQUEE TRACK —————————— */}
            <div className="relative w-full overflow-hidden">
                {/* Left & Right Atmospheric Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#F4F7EE] via-[#F4F7EE]/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#F4F7EE] via-[#F4F7EE]/80 to-transparent z-10 pointer-events-none" />

                {/* Single Continuous Gliding Row */}
                <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] whitespace-nowrap py-3 w-max">
                    {marqueeTestimonials.map((testimonial, index) => (
                        <div
                            key={`testimonial-${index}`}
                            className="inline-block w-[360px] sm:w-[420px] bg-white border border-[#D5E1CE] shadow-[0_4px_20px_rgba(21,24,17,0.04)] rounded-[24px] p-7 sm:p-8 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(0,61,43,0.12)] transition-all duration-300 whitespace-normal flex-shrink-0 flex flex-col justify-between"
                        >
                            {/* Quote Header */}
                            <div className="flex items-center justify-between mb-5">
                                <div className="w-10 h-10 rounded-xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center">
                                    <i className="fas fa-quote-left text-sm text-[#003D2B]"></i>
                                </div>
                                <div className="flex items-center gap-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <i key={i} className="fas fa-star text-amber-400 text-xs" />
                                    ))}
                                </div>
                            </div>

                            {/* Quote Text */}
                            <p className="text-[15px] sm:text-[16px] text-[#141912] leading-relaxed mb-6 font-normal">
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>

                            {/* Author Info */}
                            <div className="border-t border-[#EAEFE5] pt-4 mt-auto flex items-center justify-between">
                                <div>
                                    <h4 className="text-base font-[800] text-[#141912] mb-0.5">{testimonial.name}</h4>
                                    <p className="text-xs text-[#2D452C] font-semibold">{testimonial.role}</p>
                                </div>
                                <span className="w-7 h-7 rounded-full bg-[#F4F7EE] border border-[#D5E1CE] flex items-center justify-center text-[#003D2B] text-xs">
                                    <i className="fas fa-check text-[10px]"></i>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;