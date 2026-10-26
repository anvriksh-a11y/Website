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
        <section ref={sectionRef} className="py-32 relative overflow-hidden bg-[#030712]">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-5 max-w-7xl relative z-10">
                {/* Central Content */}
                <div className="text-center max-w-2xl mx-auto relative z-20">
                    <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm font-medium mb-6">
                        Integrations
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Enterprise-Ready <br />
                        <span className="bg-gradient-to-b from-blue-200 to-blue-500 bg-clip-text text-transparent">Integrations</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                        Seamlessly connect your enterprise AI Agents with 100+ tools and software.
                    </p>
                    <Link to="/platform" className="inline-block px-8 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white font-medium">
                        Explore All Integrations
                    </Link>
                </div>

                {/* Floating Icons (Desktop) */}
                <div className="absolute inset-0 pointer-events-none hidden md:block">
                    {integrationItems.map((item, index) => (
                        <div
                            key={index}
                            className={`absolute flex items-center justify-center rounded-full bg-[#0B0F19] border border-white/5 shadow-2xl p-4 ${item.size} transition-all duration-1000 ease-out`}
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
                                    className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity"
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
                            className={`flex items-center justify-center aspect-square rounded-2xl bg-[#0B0F19] border border-white/5 p-3 transition-all duration-700 ease-out`}
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                transitionDelay: item.delay
                            }}
                        >
                            <img
                                src={item.src}
                                alt="Integration Logo"
                                className="w-full h-full object-contain opacity-90"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Integrations;
