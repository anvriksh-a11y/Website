import React, { useState, useEffect } from 'react';

import SEO from '../../components/SEO';

const WhoWeAre: React.FC = () => {
    const [activeSection, setActiveSection] = useState<'whatWeDo' | 'whoWeAre'>('whatWeDo');
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setActiveSection(prev => prev === 'whatWeDo' ? 'whoWeAre' : 'whatWeDo');
            }, 2000); // Change every 5 seconds
            return () => clearInterval(interval);
        }
    }, [isPaused]);

    const toggleSection = () => {
        setActiveSection(prev => prev === 'whatWeDo' ? 'whoWeAre' : 'whatWeDo');
    };

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Who We Are | ANVRiksh",
        "description": "Learn about ANVRiksh, our mission, values, and the team behind the next generation of AI orchestration and software solutions.",
        "publisher": {
            "@type": "Organization",
            "name": "ANVRiksh",
            "legalName": "ANVRiksh Tech Solutions LLP",
            "identifier": "ADA-3944",
            "logo": {
                "@type": "ImageObject",
                "url": "https://anvriksh.com/logo.png"
            }
        }
    };

    return (
        <div className="bg-[#030712] min-h-screen text-white font-sans selection:bg-blue-500/30">
            <SEO
                title="Who We Are | ANVRiksh Tech Solutions LLP"
                description="ANVRiksh is an India-based AI company building the next generation of Sovereign Agentic AI and enterprise software for India's digital future."
                keywords="ANVRiksh Tech Solutions LLP, ADA-3944, About ANVRiksh, AI Company India, AI Company Karnataka, AI Leadership India, Tech Team, Sovereign AI, AI Innovation, ANVRiksh Founders, LLP India"
                canonicalUrl="https://anvriksh.com/company/who-we-are"
                structuredData={structuredData}
                ogImage="/raj.png"
            />

            {/* Hero Section */}
            <section className="pt-40 pb-20 container mx-auto px-6 relative overflow-hidden max-w-7xl">
                {/* Background Elements */}
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -z-10"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                            Intelligent Products <br />
                            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                Built The Right Way
                            </span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
                            We help you harness the power of AI and innovation to build intelligent products that drive impact, efficiency, and growth for your business.
                        </p>

                        <div className="flex items-center gap-4 pt-4">
                            <button className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/25">
                                <i className="fas fa-arrow-down text-white"></i>
                            </button>
                            <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">Scroll to explore</span>
                        </div>
                    </div>

                    {/* Abstract Visual / Chat Mockup */}
                    <div className="relative">
                        <div className="relative z-10 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl max-w-md ml-auto transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                    <i className="fas fa-robot text-white text-sm"></i>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">AI Assistant</h3>
                                    <p className="text-xs text-green-400 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> Online
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-white/5 rounded-lg p-3 rounded-tl-none text-sm text-slate-300">
                                    How can we build a scalable AI solution for your enterprise?
                                </div>
                                <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-3 rounded-tr-none text-sm text-blue-100 ml-auto max-w-[85%]">
                                    We need a system that handles real-time data processing and predictive analytics.
                                </div>
                                <div className="bg-white/5 rounded-lg p-3 rounded-tl-none text-sm text-slate-300">
                                    Absolutely. Our Agentic AI framework is designed exactly for that level of complexity.
                                </div>
                            </div>
                        </div>

                        {/* Decorative Dots Grid */}
                        <div className="absolute -top-10 -right-10 grid grid-cols-6 gap-4 opacity-30">
                            {[...Array(36)].map((_, i) => (
                                <div key={i} className="w-1 h-1 bg-blue-500 rounded-full"></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats */}
                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 border-t border-white/10 pt-16">
                    <div className="text-center">
                        <h3 className="text-5xl font-bold text-white mb-2">4+</h3>
                        <p className="text-slate-400 font-medium tracking-wide">Expert Developers</p>
                    </div>
                    <div className="text-center border-l border-r border-white/5">
                        <h3 className="text-5xl font-bold text-white mb-2">3+</h3>
                        <p className="text-slate-400 font-medium tracking-wide">Successful Projects</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-5xl font-bold text-white mb-2">1+</h3>
                        <p className="text-slate-400 font-medium tracking-wide">Years of Excellence</p>
                    </div>
                </div> */}
            </section>

            {/* What We Do / Who We Are Section */}
            <section
                className="py-24 bg-slate-900/30"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            {activeSection === 'whatWeDo' ? (
                                <div className="animate-fadeIn">
                                    <h2 className="text-4xl md:text-5xl font-bold mb-8">What We Do?</h2>
                                    <p className="text-lg text-slate-400 leading-relaxed mb-8">
                                        We adopt a strategic method to understand your concept and shape it into an intelligent, tailor-made tech solution that fits your business requirements. Fueled by the latest tech, blending technical prowess with business acumen, we steer and support you on your digital transformation journey.
                                    </p>
                                </div>
                            ) : (
                                <div className="animate-fadeIn">
                                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Who We Are?</h2>
                                    <p className="text-lg text-slate-400 leading-relaxed mb-8">
                                        We are a team of visionary engineers, designers, and strategists passionate about redefining the future with Artificial Intelligence. Our mission is to empower businesses with autonomous agents and intelligent systems that solve complex problems and create new opportunities for growth.
                                    </p>
                                </div>
                            )}

                            <div className="flex gap-4">
                                <button
                                    onClick={toggleSection}
                                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    <i className="fas fa-arrow-left"></i>
                                </button>
                                <button
                                    onClick={toggleSection}
                                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    <i className="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative group">
                            <div className="absolute inset-0 bg-blue-600/20 rounded-2xl transform rotate-3 group-hover:rotate-2 transition-transform duration-500"></div>
                            <img
                                src={activeSection === 'whatWeDo'
                                    ? "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                    : "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                                }
                                alt="Team Collaboration"
                                className="relative rounded-2xl shadow-2xl w-full object-cover h-[400px] grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Strengths Section */}
            <section className="py-24 container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Strengths</h2>
                        <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
                    </div>
                    <p className="text-slate-400 max-w-md text-right mt-6 md:mt-0">
                        We're not just a tech agency; we're a community of innovators, thinkers, and problem solvers dedicated to your success.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Large Image */}
                    <div className="relative h-[600px] rounded-3xl overflow-hidden group">
                        <img
                            src="https://media.istockphoto.com/id/625736338/photo/stack-of-hands-showing-unity.jpg?s=612x612&w=0&k=20&c=20mAQjGRQ5XVKqHe2qFguqGZ4dwto6lxxinciCfnVI0="
                            alt="Data Visualization"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    </div>

                    {/* Strengths List */}
                    <div className="flex flex-col justify-center">
                        {[
                            {
                                title: "Putting Clients First",
                                description: "Our dedication to our clients is reflected in our track record. We prioritize your needs, ensuring transparent communication and tailored solutions that drive real value."
                            },
                            {
                                title: "Championing Integrity",
                                description: "We believe in honest, ethical business practices. Trust is the foundation of our partnerships, and we strive to maintain it through every interaction and deliverable."
                            },
                            {
                                title: "Driven by Proficiency",
                                description: "Our team consists of industry experts who are constantly upskilling. We leverage deep technical knowledge to solve complex challenges efficiently and effectively."
                            }
                        ].map((item, index) => (
                            <div key={index} className="group py-8 border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors duration-300 px-6 -mx-6 rounded-xl">
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="md:w-1/3">
                                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div className="md:w-2/3">
                                        <p className="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet the Team Section */}
            <section className="py-32 bg-slate-900/50 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">Meet the Innovators</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            The visionary minds behind ANVRiksh, dedicated to engineering the next generation of intelligent enterprise solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { name: "Raj Mange", role: "CEO & Founder", img: "/raj.png", gradient: "from-emerald-500/20 to-teal-600/20", linkedin: "https://www.linkedin.com/in/raj-mange00/" },
                            { name: "Vaibhav K", role: "Co-Founder & CTO", img: "/vaibhav.png", gradient: "from-cyan-500/20 to-blue-600/20", linkedin: "https://www.linkedin.com/in/vaibhav-kalungada-844790223/" },
                            { name: "Raksha Hubballi", role: "Co-Founder & COO", img: "/raksha.jpeg", gradient: "from-purple-500/20 to-pink-600/20", linkedin: "https://www.linkedin.com/in/raksha-hubballi-b695a7240/" },
                            { name: "Ammar Raza", role: "Co-Founder & CFO", img: "/ammar.jpg", gradient: "from-blue-500/20 to-purple-600/20", linkedin: "https://www.linkedin.com/in/ammar-raza-06346a26b/" },
                            { name: "Naresh Kallimani", role: "Co-Founder & CMO", img: "/naresh.png", gradient: "from-orange-500/20 to-red-600/20", linkedin: "https://www.linkedin.com/in/naresh-kallimani/" }
                        ].map((member, i) => (
                            <div key={i} className="group relative">
                                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                <div className="relative bg-[#030712] border border-white/10 rounded-[2rem] p-4 group-hover:border-white/20 transition-all duration-500 overflow-hidden transform group-hover:translate-y-[-8px]">
                                    <div className="aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-6 relative">
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="px-4 pb-4">
                                        <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                                        <p className="text-blue-400 text-sm font-medium mb-4">{member.role}</p>
                                        <div className="flex gap-3">
                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all"
                                            >
                                                <i className="fab fa-linkedin-in text-sm"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default WhoWeAre;
