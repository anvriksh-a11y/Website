import React from 'react';

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
        <section className="py-24 relative overflow-hidden bg-[#030712] border-t border-white/5">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                        Client Success
                    </div>
                    <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6 pb-2 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent tracking-tight">
                        Trusted by Innovators
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        See how we've helped forward-thinking organizations build custom digital solutions and scale their impact.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className="relative group bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-all duration-500 shadow-2xl flex flex-col h-full">
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                            
                            <div className="relative flex flex-col h-full items-start gap-8">
                                {/* Logo / Profile Area */}
                                <div className="flex-shrink-0">
                                    <div className="w-48 h-20 rounded-xl bg-white flex items-center justify-center p-3 shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:scale-105 transition-transform duration-500 overflow-hidden border border-white/10 text-center">
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
                                                <i className={`${testimonial.fallbackIcon} text-4xl ${testimonial.fallbackColor} hidden`}></i>
                                            </>
                                        ) : (
                                            <div className="flex items-center justify-center gap-3">
                                                <i className={`${testimonial.fallbackIcon} text-2xl ${testimonial.fallbackColor}`}></i>
                                                {testimonial.logoText && <span className="font-bold text-slate-800 leading-tight">{testimonial.logoText}</span>}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                
                                {/* Content Area */}
                                <div className="flex-1 flex flex-col w-full">
                                    <i className="fas fa-quote-left text-3xl text-blue-500/30 mb-6 block"></i>
                                    <p className="text-xl text-gray-200 leading-relaxed font-light mb-8 italic flex-1">
                                        "{testimonial.quote}"
                                    </p>
                                    
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-6 mt-auto w-full">
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-1">{testimonial.name}</h4>
                                            <p className="text-sm text-blue-400 font-medium">{testimonial.role}</p>
                                        </div>
                                        <a 
                                            href={testimonial.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group/link mt-2 sm:mt-0"
                                        >
                                            {testimonial.linkText} <i className="fas fa-arrow-right text-xs transform group-hover/link:translate-x-1 transition-transform"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
