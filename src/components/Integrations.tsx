import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Integrations: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false); // Optional: reset when scrolling out
                }
            },
            {
                threshold: 0.3, // Trigger when 30% of the section is visible
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

    const integrationItems = [
        // Left Side
        {
            src: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg",
            top: '10%', left: '5%', size: 'w-28 h-28', delay: '0ms'
        },
        {
            src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
            top: '25%', left: '20%', size: 'w-24 h-24', delay: '100ms'
        },
        {
            src: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
            top: '50%', left: '10%', size: 'w-28 h-28', delay: '200ms'
        },
        {
            src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
            top: '95%', left: '10%', size: 'w-24 h-24', delay: '300ms'
        },
        {
            src: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
            top: '80%', left: '25%', size: 'w-20 h-20', delay: '400ms'
        },
        {
            src: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
            top: '50%', left: '2%', size: 'w-20 h-20', delay: '500ms'
        },

        // Right Side
        {
            src: "https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg",
            top: '20%', right: '26%', size: 'w-20 h-20', delay: '0ms'
        },
        {
            src: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
            top: '50%', right: '17%', size: 'w-24 h-24', delay: '100ms'
        },
        {
            src: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
            top: '75%', right: '28%', size: 'w-20 h-20', delay: '200ms'
        },
        {
            src: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg",
            top: '70%', right: '10%', size: 'w-24 h-24', delay: '300ms'
        },
        {
            src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
            top: '40%', right: '5%', size: 'w-24 h-24', delay: '400ms'
        },
    ];

    return (
        <section ref={sectionRef} className="py-24 sm:py-32 relative overflow-hidden bg-[#F4F7EE] select-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {/* Background Rings and Ambient Glow */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full pointer-events-none opacity-40" style={{ background: 'radial-gradient(circle, #E3EDE0 0%, transparent 70%)', filter: 'blur(90px)' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-[#D5E1CE] pointer-events-none opacity-60" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full border border-dashed border-[#CCD8C3] pointer-events-none opacity-60" />

            <div className="container mx-auto px-5 max-w-7xl relative z-10">
                {/* Central Content */}
                <div className="text-center max-w-2xl mx-auto relative z-20">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] shadow-xs mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2D452C] animate-pulse" />
                        <span className="text-[12px] sm:text-[13px] font-semibold text-[#2D452C] tracking-tight">Integrations</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-[800] mb-5 text-[#141912] tracking-[-0.035em]">
                        Enterprise-Ready <br />
                        <span className="text-[#003D2B]">Integrations</span>
                    </h2>
                    <p className="text-[#4E5B49] text-base sm:text-lg mb-8 leading-relaxed">
                        Seamlessly connect your enterprise AI Agents with 100+ tools and software.
                    </p>
                    <Link to="/platform" className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#003D2B] hover:bg-[#022D20] text-white text-sm font-bold shadow-[0_12px_28px_rgba(0,61,43,0.30)] hover:shadow-[0_16px_36px_rgba(0,61,43,0.40)] hover:scale-105 active:scale-100 transition-all">
                        <span>Explore All Integrations</span>
                        <i className="fas fa-arrow-right text-xs text-white" />
                    </Link>
                </div>

                {/* Floating Icons (Desktop) */}
                <div className="absolute inset-0 pointer-events-none hidden md:block">
                    {integrationItems.map((item, index) => (
                        <div
                            key={index}
                            className={`absolute flex items-center justify-center rounded-[1.4rem] bg-white border border-[#D5E1CE] shadow-[0_12px_32px_rgba(21,24,17,0.08)] p-4 ${item.size} transition-all duration-1000 ease-out hover:shadow-[0_20px_40px_rgba(0,61,43,0.18)]`}
                            style={{
                                top: item.top,
                                left: item.left,
                                right: item.right,
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(20px)',
                                transitionDelay: item.delay
                            }}
                        >
                            <div className="w-full h-full flex items-center justify-center">
                                <img
                                    src={item.src}
                                    alt="Integration Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Grid View */}
                <div className="mt-16 grid grid-cols-4 gap-4 md:hidden relative z-20">
                    {integrationItems.map((item, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-center aspect-square rounded-2xl bg-white border border-[#D5E1CE] shadow-xs p-3 transition-all duration-700 ease-out`}
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                transitionDelay: item.delay
                            }}
                        >
                            <img
                                src={item.src}
                                alt="Integration Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Integrations;
