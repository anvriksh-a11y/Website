import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import zohoHero from '../../assets/zoho-hero.png';

// IMPORTANT: These are DEMO URLs. You MUST replace them with your actual @anvriksh post URLs for them to show up.
// Go to your Instagram post -> Click 3 dots -> Copy Link -> Paste here.
const INSTAGRAM_POST_URLS = [
    "https://www.instagram.com/p/DNYXSMURHyu/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==", // User Post
    "https://www.instagram.com/p/DOJcTakD4Qe/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==", // Demo Post 2
    "https://www.instagram.com/reel/DQ4aDMCATN6/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==", // Demo Post 3
    "https://www.instagram.com/p/DQtcLEbEX0O/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // Demo Post 4
    "https://www.instagram.com/reel/DREHEKzgZac/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // Demo Post 5
    "https://www.instagram.com/reel/DRSM_40geZB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="  // Demo Post 6
];

const InstagramEmbed = ({ url }: { url: string }) => {
    return (
        <div className="flex justify-center transform hover:scale-[1.02] transition-transform duration-300">
            <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                    background: '#FFF',
                    border: '0',
                    borderRadius: '12px',
                    boxShadow: '0 0 20px rgba(0,0,0,0.5)',
                    margin: '1px',
                    maxWidth: '540px',
                    minWidth: '326px',
                    padding: '0',
                    width: 'calc(100% - 2px)'
                }}
            >
                <div style={{ padding: '16px' }}>
                    <a href={url} style={{ background: '#FFFFFF', lineHeight: '0', padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank" rel="noreferrer">
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div>
                            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                                <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div>
                                <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                            </div>
                        </div>
                        <div style={{ padding: '19% 0' }}></div>
                        <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}></div>
                        <div style={{ paddingTop: '8px' }}>
                            <div style={{ color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 550, lineHeight: '18px' }}>
                                View this post on Instagram
                            </div>
                        </div>
                        <div style={{ padding: '12.5% 0' }}></div>
                        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '14px', alignItems: 'center' }}>
                            <div>
                                <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(0px) translateY(7px)' }}></div>
                                <div style={{ backgroundColor: '#F4F4F4', height: '12.5px', transform: 'rotate(-45deg) translateX(3px) translateY(1px)', width: '12.5px', flexGrow: 0, marginRight: '14px', marginLeft: '2px' }}></div>
                                <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(9px) translateY(-18px)' }}></div>
                            </div>
                            <div style={{ marginLeft: '8px' }}>
                                <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '20px', width: '20px' }}></div>
                                <div style={{ width: '0', height: '0', borderTop: '2px solid transparent', borderLeft: '6px solid #f4f4f4', borderBottom: '2px solid transparent', transform: 'translateX(16px) translateY(-4px) rotate(30deg)' }}></div>
                            </div>
                            <div style={{ marginLeft: 'auto' }}>
                                <div style={{ width: '0px', borderTop: '8px solid #F4F4F4', borderRight: '8px solid transparent', transform: 'translateY(16px)' }}></div>
                                <div style={{ backgroundColor: '#F4F4F4', flexGrow: 0, height: '12px', width: '16px', transform: 'translateY(-4px)' }}></div>
                                <div style={{ width: '0', height: '0', borderTop: '8px solid #F4F4F4', borderLeft: '8px solid transparent', transform: 'translateY(-4px) translateX(8px)' }}></div>
                            </div>
                        </div>
                    </a>
                </div>
            </blockquote>
        </div>
    );
};

const Blogs: React.FC = () => {
    React.useEffect(() => {
        // Load Instagram Embed Script
        const script = document.createElement('script');
        script.src = "//www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        // Process embeds after script load
        script.onload = () => {
            // @ts-expect-error - instgrm is added by an external script
            if (window.instgrm) {
                // @ts-expect-error - instgrm is added by an external script
                window.instgrm.Embeds.process();
            }
        };

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "ANVRiksh Insights",
        "description": "Insights and updates from the world of AI and Software Engineering.",
        "publisher": {
            "@type": "Organization",
            "name": "ANVRiksh Tech Solutions LLP"
        }
    };

    return (
        <div className="bg-[#030712] min-h-screen text-white font-sans">
            <SEO
                title="Blogs & Insights - ANVRiksh Tech Solutions LLP"
                description="Read the latest insights on Artificial Intelligence, Machine Learning, and Software Development from the ANVRiksh team."
                keywords="AI Blog, Tech Insights, Software Development Blog, ANVRiksh Blog, AI Trends"
                canonicalUrl="https://anvriksh.com/resources/blogs"
                structuredData={structuredData}
            />
            {/* Hero Section */}
            <div className="pt-32 pb-16 container mx-auto px-6 text-center max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-8 pb-2 tracking-tight">
                    <span className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
                        Business Growth & Insights
                    </span>
                </h1>
                <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                    Discover actionable strategies, technical guides, and expert advice to scale your small business in the digital age.
                </p>


            </div>

            {/* Articles Section */}
            <div className="container mx-auto px-6 pb-16 max-w-7xl">
                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                    <h2 className="text-3xl font-bold flex items-center gap-3">
                        <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                        Featured Articles
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Link to="/why-every-small-business-needs-a-website-2026" className="group bg-slate-900 rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col">
                        <div className="h-48 relative overflow-hidden">
                            <img src={zohoHero} alt="Small Business Website" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full font-medium">Business Growth</span>
                                <div className="flex items-center gap-4 text-slate-400">
                                    <span className="flex items-center gap-2"><i className="far fa-calendar-alt"></i> Jun 28, 2026</span>
                                    <span className="flex items-center gap-2"><i className="far fa-clock"></i> 5 min read</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Why Every Small Business Needs a Website in 2026</h3>
                            <p className="text-slate-400 mb-6 flex-grow">Discover why a small business website is essential in 2026 for trust, visibility, leads, and growth.</p>
                            <span className="text-blue-400 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">Read Article <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </Link>
                    <Link to="/how-ai-agents-are-reshaping-small-businesses" className="group bg-slate-900 rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col">
                        <div className="h-48 relative overflow-hidden">
                            <img src="/ai_agents_small_business.png" alt="AI Agents for Small Business" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-cyan-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                                <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full font-medium">AI & Automation</span>
                                <div className="flex items-center gap-4 text-slate-400">
                                    <span className="flex items-center gap-2"><i className="far fa-calendar-alt"></i> Jul 6, 2026</span>
                                    <span className="flex items-center gap-2"><i className="far fa-clock"></i> 8 min read</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">How AI Agents Are Quietly Reshaping Small Businesses</h3>
                            <p className="text-slate-400 mb-6 flex-grow">Discover how AI agents are helping small businesses automate customer support, marketing, and operations — without losing the human touch.</p>
                            <span className="text-cyan-400 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">Read Article <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </Link>
                    <Link to="/enterprise-ai-agents-guide-2026" className="group bg-slate-900 rounded-2xl overflow-hidden border border-white/5 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] flex flex-col">
                        <div className="h-48 relative overflow-hidden">
                            <img src="/ai_agents_guide_2026.png" alt="Enterprise AI Agents" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-indigo-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                                <span className="bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full font-medium">Ultimate Guide</span>
                                <div className="flex items-center gap-4 text-slate-400">
                                    <span className="flex items-center gap-2"><i className="far fa-calendar-alt"></i> Jul 13, 2026</span>
                                    <span className="flex items-center gap-2"><i className="far fa-clock"></i> 10 min read</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">The Ultimate Guide to Enterprise AI Agents in 2026</h3>
                            <p className="text-slate-400 mb-6 flex-grow">Discover how Agentic AI works and why autonomous enterprise AI agents are reducing operational overhead by 40%.</p>
                            <span className="text-indigo-400 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">Read Article <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </Link>
                    <Link to="/ai-agents-vs-traditional-chatbots" className="group bg-slate-900 rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col">
                        <div className="h-48 relative overflow-hidden">
                            <img src="/agents_vs_chatbots.png" alt="AI Agents vs Chatbots" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-purple-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                                <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full font-medium">Comparison</span>
                                <div className="flex items-center gap-4 text-slate-400">
                                    <span className="flex items-center gap-2"><i className="far fa-calendar-alt"></i> Jul 13, 2026</span>
                                    <span className="flex items-center gap-2"><i className="far fa-clock"></i> 6 min read</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">AI Agents vs. Traditional Chatbots: What's the Difference?</h3>
                            <p className="text-slate-400 mb-6 flex-grow">Understand the key differences between conversational chatbots and autonomous AI agents that execute complex tasks.</p>
                            <span className="text-purple-400 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">Read Article <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </Link>
                    <Link to="/custom-software-development-roi" className="group bg-slate-900 rounded-2xl overflow-hidden border border-white/5 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] flex flex-col">
                        <div className="h-48 relative overflow-hidden">
                            <img src="/software_roi.png" alt="Custom Software ROI" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                                <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full font-medium">Software Solutions</span>
                                <div className="flex items-center gap-4 text-slate-400">
                                    <span className="flex items-center gap-2"><i className="far fa-calendar-alt"></i> Jul 13, 2026</span>
                                    <span className="flex items-center gap-2"><i className="far fa-clock"></i> 7 min read</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">The ROI of Custom Software Development vs. SaaS</h3>
                            <p className="text-slate-400 mb-6 flex-grow">Learn why growing businesses switch to custom software engineering to improve efficiency and reduce the hidden costs of SaaS subscriptions.</p>
                            <span className="text-emerald-400 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">Read Article <i className="fas fa-arrow-right"></i></span>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Instagram Feed Grid */}
            <div className="container mx-auto px-6 pb-32 max-w-7xl">
                <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-6">
                    <h2 className="text-3xl font-bold flex items-center gap-3">
                        <span className="w-2 h-8 bg-pink-500 rounded-full"></span>
                        Latest from Instagram
                    </h2>
                    <a href="https://www.instagram.com/anvriksh/" className="text-slate-400 hover:text-pink-400 transition-colors text-sm font-medium flex items-center gap-2">
                        View All Posts <i className="fas fa-arrow-right"></i>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {INSTAGRAM_POST_URLS.filter(url => url.trim() !== "").map((url, index) => (
                        <InstagramEmbed key={index} url={url} />
                    ))}
                </div>

                {/* Newsletter / CTA Section */}
                <div className="mt-24 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-center border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"></div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">Never Miss an Update</h3>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-10">
                        Join our community of innovators. Subscribe to our newsletter for exclusive insights, tech deep dives, and early access to new tools.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-black/30 border border-white/10 rounded-full px-6 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-pink-500 transition-colors flex-1"
                        />
                        <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
