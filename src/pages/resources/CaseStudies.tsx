import React from 'react';
import SEO from '../../components/SEO';

interface CaseStudy {
    id: number | string;
    category: string;
    title: string;
    image: string;
    icon: string;
    description?: string;
    url?: string;
}

const CaseStudies: React.FC = () => {
    // Static data to bypass NewsAPI CORS restrictions in production
    const caseStudies: CaseStudy[] = [
        {
            id: 1,
            category: "Agentic AI",
            title: "Autonomous Supply Chain Optimization",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: "fas fa-robot",
            description: "Implementing autonomous agents to predict inventory shortages and automate reordering processes, reducing stockouts by 40%.",
            url: "#"
        },
        {
            id: 2,
            category: "Generative AI",
            title: "Personalized Marketing Content Engine",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: "fas fa-magic",
            description: "A GenAI solution that creates hyper-personalized marketing copy and visuals at scale, increasing engagement rates by 150%.",
            url: "#"
        },
        {
            id: 3,
            category: "Software Solutions",
            title: "Enterprise Cloud Migration & Modernization",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: "fas fa-cloud",
            description: "Migrating legacy systems to a microservices architecture on AWS, resulting in 99.99% uptime and 30% cost reduction.",
            url: "#"
        },
        {
            id: 4,
            category: "Agentic AI",
            title: "Multi-Agent Customer Support System",
            image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: "fas fa-headset",
            description: "Deploying a swarm of specialized AI agents to handle complex customer queries, resolving 70% of tickets without human intervention.",
            url: "#"
        },
        {
            id: 5,
            category: "Generative AI",
            title: "Legal Document Analysis & Summarization",
            image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: "fas fa-file-contract",
            description: "Using LLMs to analyze thousands of legal contracts, extracting key clauses and risks in seconds instead of hours.",
            url: "#"
        },
        {
            id: 6,
            category: "Software Solutions",
            title: "Real-time Fintech Analytics Dashboard",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: "fas fa-chart-line",
            description: "Building a high-performance analytics platform processing millions of transactions per second for fraud detection.",
            url: "#"
        }
    ];

    const loading = false;
    const error = null;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Case Studies - ANVRiksh Tech Solutions LLP",
        "description": "A collection of case studies and news articles showcasing the impact of AI in various industries.",
        "publisher": {
            "@type": "Organization",
            "name": "ANVRiksh Tech Solutions LLP"
        }
    };

    return (
        <div className="bg-[#030712] min-h-screen text-white font-sans">
            <SEO
                title="Case Studies & Success Stories - ANVRiksh AI"
                description="Explore how ANVRiksh's AI solutions have transformed businesses. Read our latest case studies on Agentic AI, Generative AI, and Custom Software."
                keywords="AI Case Studies, Success Stories, Digital Transformation, AI Implementation, Business Impact"
                canonicalUrl="https://anvriksh.com/resources/case-studies"
                structuredData={structuredData}
            />
            <div className="pt-32 pb-20 container mx-auto px-6 text-center max-w-6xl">
                <h1 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
                    <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        Real-world Case Studies
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        highlighting our Impact
                    </span>
                </h1>
                <p className="text-xl text-slate-400 mb-12">
                    Discover stories of Innovation, Transformations & Success.
                </p>

                <div className="flex justify-center mb-16">
                    <button className="bg-black text-white text-4xl px-12 py-4 rounded-xl border border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300 font-normal tracking-wide">
                        let's talk
                    </button>
                </div>

                {/* Loading State - Skeleton Loader */}
                {loading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="h-[350px] rounded-2xl bg-slate-900/50 border border-white/5 animate-pulse flex flex-col justify-end p-8">
                                <div className="w-24 h-4 bg-slate-800 rounded mb-4"></div>
                                <div className="w-3/4 h-8 bg-slate-800 rounded mb-2"></div>
                                <div className="w-1/2 h-8 bg-slate-800 rounded"></div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className="text-center py-20">
                        <div className="text-red-400 text-xl mb-4"><i className="fas fa-exclamation-circle mr-2"></i>{error}</div>
                        <button
                            onClick={() => window.location.reload()}
                            className="text-white underline hover:text-blue-400"
                        >
                            Retry
                        </button>
                    </div>
                )}

                {/* Data Render */}
                {!loading && !error && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {caseStudies.map((study) => (
                            <a
                                key={study.id}
                                href={study.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative h-[350px] rounded-2xl overflow-hidden cursor-pointer border border-white/5 bg-slate-900 block"
                            >
                                {/* Background Image */}
                                {study.image && (
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                    />
                                )}

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90 transition-opacity duration-300"></div>

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-between items-start text-left">
                                    <div className="w-full transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs border border-blue-500/30">
                                                <i className={study.icon}></i>
                                            </span>
                                            <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">
                                                {study.category}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white leading-tight mb-3 group-hover:text-blue-400 transition-colors line-clamp-3">
                                            {study.title}
                                        </h3>
                                        {/* Description - Visible on hover or always if preferred */}
                                        <p className="text-slate-400 text-sm line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                            {study.description}
                                        </p>
                                    </div>

                                    <div className="self-end mt-auto">
                                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:bg-blue-500">
                                            <i className="fas fa-arrow-right text-white"></i>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                )}

                {!loading && !error && (
                    <div className="mt-16">
                    </div>
                )}
            </div>
        </div>
    );
};

export default CaseStudies;
