import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SEO from '../components/SEO';

const articles: Record<string, {
    file: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    author?: string;
    publishedDate?: string;
    image?: string;
}> = {
    'why-every-small-business-needs-a-website-2026': {
        file: '/why-every-small-business-needs-a-website-in-2026.md',
        title: 'Why Every Small Business Needs a Website in 2026',
        metaTitle: 'Small Business Website Guide [2026] | ANVRiksh',
        metaDescription: 'Discover why a small business website is essential in 2026 for trust, visibility, leads, and growth.',
        author: 'ANVRiksh Tech Solutions LLP',
        publishedDate: '2026-06-28',
        image: '/small_business_minimalist.png'
    },
    'how-ai-agents-are-reshaping-small-businesses': {
        file: '/how-ai-agents-are-reshaping-small-businesses.md',
        title: 'How AI Agents Are Quietly Reshaping the Way Small Businesses Operate',
        metaTitle: 'How AI Agents Reshape Small Business [2026] | ANVRiksh',
        metaDescription: 'Discover how AI agents are helping small businesses automate customer support, marketing, operations, and more — without losing the human touch.',
        author: 'ANVRiksh Tech Solutions LLP',
        publishedDate: '2026-07-06',
        image: '/ai_agents_small_business.png'
    },
    'enterprise-ai-agents-guide-2026': {
        file: '/enterprise-ai-agents-guide-2026.md',
        title: 'The Ultimate Guide to Enterprise AI Agents in 2026',
        metaTitle: 'Enterprise AI Agents [Ultimate 2026 Guide] | ANVRiksh',
        metaDescription: 'Discover how Agentic AI works and why autonomous enterprise AI agents are reducing operational overhead by 40% in 2026.',
        author: 'ANVRiksh Tech Solutions LLP',
        publishedDate: '2026-07-13',
        image: '/ai_agents_guide_2026.png'
    },
    'ai-agents-vs-traditional-chatbots': {
        file: '/ai-agents-vs-traditional-chatbots.md',
        title: 'AI Agents vs. Traditional Chatbots: What\'s the Difference?',
        metaTitle: 'AI Agents vs Chatbots [Key Differences] | ANVRiksh',
        metaDescription: 'Understand the key differences between traditional conversational chatbots and autonomous AI agents that execute complex tasks.',
        author: 'ANVRiksh Tech Solutions LLP',
        publishedDate: '2026-07-13',
        image: '/agents_vs_chatbots.png'
    },
    'custom-software-development-roi': {
        file: '/custom-software-development-roi.md',
        title: 'The ROI of Custom Software Development vs. Off-the-Shelf SaaS',
        metaTitle: 'Custom Software ROI vs SaaS [2026 Guide] | ANVRiksh',
        metaDescription: 'Learn why growing businesses switch to custom software engineering to improve efficiency and reduce the hidden costs of SaaS subscriptions.',
        author: 'ANVRiksh Tech Solutions LLP',
        publishedDate: '2026-07-13',
        image: '/software_roi.png'
    }
};

const Article: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const articleMeta = slug ? articles[slug] : undefined;

    useEffect(() => {
        if (!articleMeta) {
            navigate('/resources/blogs'); // Or a 404 page
            return;
        }

        fetch(articleMeta.file)
            .then((res) => res.text())
            .then((text) => {
                // Remove the meta info section at the bottom (starts with --- followed by ## SEO Meta Title)
                const contentParts = text.split('## SEO Meta Title');
                let displayContent = contentParts[0];
                if (contentParts.length > 1) {
                    // remove the trailing --- before the split
                    displayContent = displayContent.replace(/---\s*$/, '');
                }
                setContent(displayContent);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("Error loading markdown file", err);
                setIsLoading(false);
            });
    }, [articleMeta, navigate]);

    if (!articleMeta) {
        return null; // Will navigate away
    }

    const structuredData = articleMeta ? {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": `https://anvriksh.com/${slug}`
                },
                "headline": articleMeta.title,
                "description": articleMeta.metaDescription,
                "image": `https://anvriksh.com${articleMeta.image}`,
                "author": {
                    "@type": "Organization",
                    "name": articleMeta.author
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "ANVRiksh",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://anvriksh.com/logo.png"
                    }
                },
                "datePublished": articleMeta.publishedDate,
                "dateModified": articleMeta.publishedDate,
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "ANVRiksh", "item": "https://anvriksh.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://anvriksh.com/resources/blogs" },
                    { "@type": "ListItem", "position": 3, "name": articleMeta.title, "item": `https://anvriksh.com/${slug}` }
                ]
            }
        ]
    } : undefined;

    return (
        <div 
            className="min-h-screen text-[#141912] pt-28 sm:pt-36 pb-24 sm:pb-32 overflow-hidden relative"
            style={{ 
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                background: 'radial-gradient(135% 120% at 50% -10%, #FFFFFF 0%, #E8F4E5 32%, #DFEFE0 62%, #F5ECE0 100%)'
            }}
        >
            <SEO
                title={articleMeta.metaTitle}
                description={articleMeta.metaDescription}
                canonicalUrl={`https://anvriksh.com/${slug}`}
                ogType="article"
                articlePublishedTime={articleMeta.publishedDate}
                articleAuthor={articleMeta.author}
                ogImage={articleMeta.image}
                structuredData={structuredData}
            />

            {/* Vibrant Atmospheric Mesh Gradient Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#003D2B_1.4px,transparent_1.4px)] [background-size:32px_32px] opacity-[0.055]" />
                <div className="absolute -top-36 left-1/6 w-[750px] h-[600px] bg-gradient-to-br from-emerald-400/40 via-[#004D36]/30 to-transparent rounded-full blur-[100px]" />
                <div className="absolute top-10 -right-20 w-[700px] h-[650px] bg-gradient-to-bl from-amber-400/45 via-orange-300/35 to-transparent rounded-full blur-[90px]" />
                <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-teal-400/35 via-emerald-300/30 to-transparent rounded-full blur-[100px]" />
                <div className="absolute -bottom-24 -right-20 w-[650px] h-[600px] bg-gradient-to-tl from-amber-300/40 via-rose-300/25 to-transparent rounded-full blur-[95px]" />
                <div className="absolute -bottom-36 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-t from-[#003D2B]/22 via-[#2D452C]/15 to-transparent rounded-full blur-[110px]" />
            </div>
            
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl z-10">
                <div className="mb-8 flex items-center justify-between">
                    <Link 
                        to="/resources/blogs" 
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#003D2B] hover:text-[#004D36] bg-white border border-[#D5E1CE] px-4 py-2 rounded-full shadow-2xs hover:shadow-xs transition-all"
                    >
                        <i className="fas fa-arrow-left text-xs"></i> Back to All Articles
                    </Link>
                    <span className="text-xs font-semibold text-[#7A8A75] bg-white/70 backdrop-blur-sm border border-[#D5E1CE] px-3.5 py-1.5 rounded-full">
                        {articleMeta.publishedDate}
                    </span>
                </div>

                {isLoading ? (
                    <div className="flex flex-col justify-center items-center h-72 gap-4 bg-white/60 rounded-3xl border border-[#D5E1CE]">
                        <div className="animate-spin rounded-full h-12 w-12 border-3 border-[#003D2B] border-t-transparent"></div>
                        <p className="text-sm font-semibold text-[#4E5B49]">Loading article content...</p>
                    </div>
                ) : (
                    <div className="bg-white rounded-3xl md:rounded-[36px] p-7 sm:p-12 md:p-16 border border-[#D9E3D5] shadow-[0_8px_30px_rgba(0,61,43,0.06),0_1px_3px_rgba(0,0,0,0.02)]">
                        <article className="prose prose-emerald lg:prose-lg max-w-none text-[#33422E] leading-relaxed prose-headings:text-[#141912] prose-headings:font-extrabold prose-headings:tracking-tight prose-strong:text-[#141912] prose-strong:font-bold prose-a:text-[#003D2B] prose-a:font-bold hover:prose-a:underline prose-code:text-[#003D2B] prose-code:bg-[#E8F4E5] prose-code:px-2 prose-code:py-0.5 prose-code:rounded-md prose-blockquote:border-l-4 prose-blockquote:border-[#003D2B] prose-blockquote:bg-[#F4F7EE] prose-blockquote:p-4 prose-blockquote:rounded-r-xl prose-blockquote:text-[#4E5B49] prose-img:rounded-2xl">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {content}
                            </ReactMarkdown>
                        </article>

                        <div className="mt-14 pt-8 border-t border-[#E8F0E4] flex flex-wrap items-center justify-between gap-4">
                            <Link 
                                to="/resources/blogs" 
                                className="inline-flex items-center gap-2 text-sm font-bold text-[#003D2B] hover:text-[#004D36]"
                            >
                                <i className="fas fa-arrow-left text-xs"></i> Back to Insights
                            </Link>
                            <Link
                                to="/company/contact-us"
                                className="inline-flex items-center gap-2 bg-[#003D2B] hover:bg-[#002B1E] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-[0_4px_16px_rgba(0,61,43,0.2)] transition-all"
                            >
                                Discuss Your Project <i className="fas fa-arrow-right text-xs"></i>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Article;
