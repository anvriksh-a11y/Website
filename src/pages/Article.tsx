import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
        <div className="bg-[#030712] min-h-screen text-white font-sans">
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
            
            <div className="pt-32 pb-16 container mx-auto px-6 max-w-4xl">
                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                ) : (
                    <article className="prose prose-invert prose-lg md:prose-xl max-w-none prose-headings:text-transparent prose-headings:bg-clip-text prose-headings:bg-gradient-to-b prose-headings:from-white prose-headings:to-slate-400 prose-headings:font-semibold prose-headings:pb-2 prose-a:text-blue-500 hover:prose-a:text-blue-400">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {content}
                        </ReactMarkdown>
                    </article>
                )}
            </div>
        </div>
    );
};

export default Article;
