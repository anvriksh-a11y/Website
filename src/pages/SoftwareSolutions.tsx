import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/zoho-hero.png';
import eventsImg from '../assets/zoho-events.png';
import SEO from '../components/SEO';
import KeyTakeaways from '../components/KeyTakeaways';

const SoftwareSolutions: React.FC = () => {
    const [showFullStack, setShowFullStack] = React.useState(false);
    const [isWorkflowVisible, setIsWorkflowVisible] = React.useState(false);
    const workflowRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsWorkflowVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
        );

        if (workflowRef.current) {
            observer.observe(workflowRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const fullTechStack = [
        {
            category: "Frontend",
            technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Vue.js", "Angular", "HTML5", "CSS3"]
        },
        {
            category: "Backend",
            technologies: ["Node.js", "Express", "Python", "Django", "FastAPI", "Go", "Java Spring", "GraphQL"]
        },
        {
            category: "Database",
            technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Supabase", "DynamoDB"]
        },
        {
            category: "DevOps & Cloud",
            technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Vercel", "Netlify", "CI/CD"]
        }
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Custom Software Development",
        "provider": {
            "@type": "Organization",
            "name": "ANVRiksh Tech Solutions LLP"
        },
        "description": "End-to-end web development, cloud solutions, and custom software engineering.",
        "areaServed": "Global",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Software Development Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Frontend Development" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Backend Development" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud Deployment" } }
            ]
        }
    };

    return (
        <div className="bg-[#030712] text-white font-sans w-full min-h-screen flex justify-center">
            <SEO
                title="Custom Software Solutions & Web Development | ANVRiksh"
                description="Transform your business with custom software & web development solutions. Specializing in React, Node.js, and Cloud deployment. Get a free quote today!"
                keywords="software solutions, web development, custom software, react development, node.js, cloud computing, enterprise software"
                canonicalUrl="https://anvriksh.com/software-solutions"
                structuredData={structuredData}
            />
            <div className="w-full max-w-[1440px] overflow-hidden">
                {/* Hero Section */}
                <section className="container mx-auto px-6 pt-32 pb-20 flex flex-col lg:flex-row items-center gap-12 relative">
                    <div className="flex-1 space-y-8 z-10">
                        <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent tracking-tight">
                            Your digital vision, <br /> built for the modern web
                        </h1>
                        <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
                            End-to-end web development solutions. From stunning responsive designs to seamless cloud deployment, ANVRiksh transforms your ideas into high-performance digital experiences.
                        </p>
                        <Link to="/company/contact-us" className="inline-block text-white bg-gradient-to-b from-slate-900/60 to-slate-900 border border-sky-500 shadow-[0_0_20px_rgba(14,165,233,0.4),inset_0_0_10px_rgba(14,165,233,0.2)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6),inset_0_0_15px_rgba(14,165,233,0.3)] hover:border-sky-400 hover:-translate-y-px transition-all group px-8 py-4 rounded font-semibold text-lg">
                            Start Your Project
                        </Link>
                    </div>
                    <div className="flex-1 relative w-full flex flex-col items-center lg:items-end">
                        {/* Tech Stack Card */}
                        <div className="block bg-slate-900/90 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-6 rounded-xl z-20 w-full max-w-sm lg:w-72 border border-white/10 mx-auto lg:mx-0 lg:absolute lg:right-0 lg:top-10">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Our Tech Stack</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
                                    <div className="w-10 h-10 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <i className="fab fa-react"></i>
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">React & Next.js</div>
                                        <div className="text-xs text-slate-400">Modern UI Frameworks</div>
                                    </div>
                                    <i className="fas fa-chevron-right ml-auto text-slate-600 group-hover:text-blue-400"></i>
                                </div>
                                <div className="flex items-center gap-4 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
                                    <div className="w-10 h-10 rounded bg-green-500/20 text-green-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <i className="fab fa-node-js"></i>
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">Node.js</div>
                                        <div className="text-xs text-slate-400">Scalable Backend</div>
                                    </div>
                                    <i className="fas fa-chevron-right ml-auto text-slate-600 group-hover:text-green-400"></i>
                                </div>
                                <div className="flex items-center gap-4 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
                                    <div className="w-10 h-10 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <i className="fas fa-cloud"></i>
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">Cloud</div>
                                        <div className="text-xs text-slate-400">AWS & Vercel Deploy</div>
                                    </div>
                                    <i className="fas fa-chevron-right ml-auto text-slate-600 group-hover:text-purple-400"></i>
                                </div>
                                <div className="flex items-center gap-4 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
                                    <div className="w-10 h-10 rounded bg-orange-500/20 text-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <i className="fas fa-mobile-alt"></i>
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">Responsive</div>
                                        <div className="text-xs text-slate-400">Mobile-First Design</div>
                                    </div>
                                    <i className="fas fa-chevron-right ml-auto text-slate-600 group-hover:text-orange-400"></i>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-white/10 text-center">
                                <button
                                    onClick={() => setShowFullStack(true)}
                                    className="text-blue-400 text-sm font-semibold hover:underline bg-transparent border-none cursor-pointer"
                                >
                                    View full stack
                                </button>
                            </div>
                        </div>
                        <img src={heroImg} alt="Team working" className="w-full max-w-lg lg:max-w-xl object-contain relative z-10 mt-12 lg:mt-0" />
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-yellow-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                    </div>

                    <div className="mt-16 max-w-4xl mx-auto px-6 relative z-10">
                        {/* KeyTakeaways moved to bottom */}
                    </div>
                </section>

                {/* Technical Workflow Section */}
                <section className="bg-[#030712] py-24 relative overflow-hidden border-y border-white/5" ref={workflowRef}>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-semibold leading-normal pb-2 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent tracking-tight overflow-visible">
                                Technical Workflow
                            </h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                                ANVRiksh follows a rigorous, agile development process to ensure your software is robust, scalable, and delivered on time.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                            {[
                                { step: "01", title: "Discovery", icon: "fas fa-search", desc: "Requirement gathering & analysis" },
                                { step: "02", title: "Design", icon: "fas fa-pencil-ruler", desc: "UI/UX wireframing & prototyping" },
                                { step: "03", title: "Develop", icon: "fas fa-code", desc: "Clean, scalable code implementation" },
                                { step: "04", title: "Test", icon: "fas fa-vial", desc: "Rigorous QA & performance testing" },
                                { step: "05", title: "Deploy", icon: "fas fa-rocket", desc: "Cloud deployment & monitoring" }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className={`relative group opacity-0 ${isWorkflowVisible ? 'animate-fadeInUp' : ''}`}
                                    style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
                                >
                                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all h-full">
                                        <div className="text-5xl font-bold text-white/5 absolute top-4 right-4">{item.step}</div>
                                        <div className="w-12 h-12 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
                                            <i className={item.icon}></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-slate-400 text-sm">{item.desc}</p>
                                    </div>
                                    {index < 4 && (
                                        <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-slate-600 z-20">
                                            <i className="fas fa-chevron-right"></i>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Yellow Section */}
                <section className="bg-[#ffd301] py-24 relative overflow-hidden">
                    <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
                        <div className="flex-1 space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center transform -rotate-3">
                                    <span className="font-bold text-2xl text-[#ffd301] border-2 border-[#ffd301] w-8 h-8 flex items-center justify-center rounded">A</span>
                                </div>
                                <div>
                                    <span className="text-3xl font-bold text-slate-900 block">ANVRiksh Web</span>
                                    <span className="text-sm font-semibold text-slate-800 uppercase tracking-widest">The Complete Digital Solution</span>
                                </div>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                                Launch your dream website with our full-stack expertise.
                            </h2>
                            <button className="bg-[#f0483e] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg inline-flex items-center gap-2">
                                <Link to="/company/contact-us">GET A QUOTE</Link>
                                <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                        <div className="flex-1 relative">
                            <div className="bg-slate-900/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl relative border border-white/10">
                                <i className="fas fa-quote-left text-4xl text-[#ffd301] absolute -top-6 -left-6 bg-slate-800 rounded-full p-4 shadow-md"></i>
                                <p className="text-xl font-medium leading-relaxed mb-6 text-slate-300 italic">
                                    "Our new website increased conversions by 200%. The design is stunning, fully responsive, and the page load speeds are incredible."
                                </p>
                                <div className="flex items-center gap-4 border-t border-white/10 pt-6">

                                    <div>
                                        <p className="font-bold text-white">Raj Mange</p>
                                        <p className="text-sm text-slate-400">Founder, ANVRiksh Tech Solutions LLP</p>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative Pattern */}
                            <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-slate-900/10 rounded-2xl"></div>
                        </div>
                    </div>
                </section>

                {/* Made in India Section */}
                <section className="bg-[#0066cc] py-24 text-white text-center relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="mb-20">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-white/20">
                                <i className="fas fa-code text-3xl"></i>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Crafted with Passion. <br /> Deployed Globally.</h2>
                            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors text-center">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3 text-blue-400 text-xl">
                                    <i className="fas fa-layer-group"></i>
                                </div>
                                <div className="text-xl font-bold mb-1 text-white">Modern Stack</div>
                                <div className="text-blue-200 font-medium uppercase tracking-wider text-xs">React, Next.js & Python</div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors text-center">
                                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-3 text-cyan-400 text-xl">
                                    <i className="fas fa-cloud"></i>
                                </div>
                                <div className="text-xl font-bold mb-1 text-white">Cloud Architecture</div>
                                <div className="text-blue-200 font-medium uppercase tracking-wider text-xs">Scalable Deployments</div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors text-center">
                                <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-3 text-indigo-400 text-xl">
                                    <i className="fas fa-shield-alt"></i>
                                </div>
                                <div className="text-xl font-bold mb-1 text-white">Enterprise Privacy</div>
                                <div className="text-blue-200 font-medium uppercase tracking-wider text-xs">Encrypted & Client-Owned</div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors text-center">
                                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3 text-emerald-400 text-xl">
                                    <i className="fas fa-handshake"></i>
                                </div>
                                <div className="text-xl font-bold mb-1 text-white">Agile Delivery</div>
                                <div className="text-blue-200 font-medium uppercase tracking-wider text-xs">Direct Technical Sprints</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Zoholics Section -> Innovation */}
                <section className="relative py-32 bg-[#030712] text-white overflow-hidden border-t border-white/5">
                    <div className="absolute inset-0">
                        <img src={eventsImg} alt="Background" className="w-full h-full object-cover opacity-10" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center mb-20">
                            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                                The real web. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">AI Enhanced.</span>
                            </h2>
                            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                                Step into the future of web development. We integrate the latest AI technologies to make your websites smarter, faster, and more intuitive.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group">
                                <div className="w-14 h-14 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                                    <i className="fas fa-laptop-code"></i>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Responsive Design</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Fluid layouts that adapt perfectly to any screen size, ensuring a consistent and beautiful experience on mobile, tablet, and desktop.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group">
                                <div className="w-14 h-14 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                                    <i className="fas fa-cloud-upload-alt"></i>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Cloud Deployment</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Seamless deployment to modern cloud platforms like AWS, Vercel, and Netlify for maximum scalability and reliability.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group">
                                <div className="w-14 h-14 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                                    <i className="fas fa-search-dollar"></i>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">SEO Optimized</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Built from the ground up with SEO best practices to help your website rank higher and attract more organic traffic.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 text-center">
                            <Link to="/company/contact-us" className="inline-block text-white bg-gradient-to-b from-slate-900/60 to-slate-900 border border-sky-500 shadow-[0_0_20px_rgba(14,165,233,0.4),inset_0_0_10px_rgba(14,165,233,0.2)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6),inset_0_0_15px_rgba(14,165,233,0.3)] hover:border-sky-400 hover:-translate-y-px transition-all group px-10 py-4 rounded-full font-bold text-lg">
                                Start Your Transformation
                            </Link>
                        </div>
                        
                        <div className="mt-32 mb-10 max-w-4xl mx-auto text-left relative z-10">
                            <KeyTakeaways takeaways={[
                                "<strong>Full-Stack Capabilities:</strong> Expertise in React, Node.js, Python, and cloud infrastructure.",
                                "<strong>Custom Engineering:</strong> Tailored web development and software solutions, not generic templates.",
                                "<strong>Agile Delivery:</strong> Strict adherence to robust QA, DevOps integration, and fast deployment cycles."
                            ]} />
                        </div>
                    </div>
                </section>
            </div>

            {/* Full Stack Modal */}
            {
                showFullStack && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                        <div className="bg-[#0B1120] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-fadeIn">
                            <button
                                onClick={() => setShowFullStack(false)}
                                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                            >
                                <i className="fas fa-times text-2xl"></i>
                            </button>

                            <div className="p-8 md:p-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Our Complete Tech Stack</h2>
                                <p className="text-slate-400 mb-10">Comprehensive technologies we use to build world-class digital solutions.</p>

                                <div className="grid md:grid-cols-2 gap-8">
                                    {fullTechStack.map((category, idx) => (
                                        <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6">
                                            <h3 className="text-xl font-bold text-blue-400 mb-4 border-b border-white/10 pb-2">
                                                {category.category}
                                            </h3>
                                            <div className="flex flex-wrap gap-3">
                                                {category.technologies.map((tech, tIdx) => (
                                                    <span key={tIdx} className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded-full text-sm text-slate-300 border border-white/5 transition-colors">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 text-center">
                                    <p className="text-slate-400 mb-6">Don't see what you're looking for? We adapt to your specific requirements.</p>
                                    <button
                                        onClick={() => setShowFullStack(false)}
                                        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors"
                                    >
                                        Close View
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
};

export default SoftwareSolutions;
