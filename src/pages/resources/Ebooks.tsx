import React from 'react';
import SEO from '../../components/SEO';

const Ebooks: React.FC = () => {
    const pdfUrl = "/Ebook-Agentic-AI.pdf";

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Book",
        "name": "Agentic AI: The Future is Autonomous",
        "author": {
            "@type": "Organization",
            "name": "ANVRiksh Tech Solutions LLP"
        },
        "url": "https://anvriksh.com/resources/ebooks",
        "image": "https://anvriksh.com/ebook-cover-agentic-ai.png",
        "description": "A comprehensive guide to Agentic AI, covering autonomous enterprise agents, cognitive architectures, and the future of workflow automation.",
        "inLanguage": "en-US",
        "publisher": {
            "@type": "Organization",
            "name": "ANVRiksh Tech Solutions LLP",
            "logo": {
                "@type": "ImageObject",
                "url": "https://anvriksh.com/logo.png"
            }
        },
        "datePublished": "2024-11-01",
        "genre": "Technology, Artificial Intelligence, Business Automation",
        "keywords": "Agentic AI, Autonomous Agents, Enterprise AI, LLMs, Cognitive Computing"
    };

    return (
        <div className="min-h-screen pt-32 pb-20 bg-gray-950 text-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-5 relative z-10">
                <SEO
                    title="Agentic AI Ebook [Free Guide 2026] | ANVRiksh"
                    description="Download the #1 trending guide on Agentic AI. Learn how autonomous agents, cognitive architectures, and LLMs are revolutionizing enterprise workflows. Free PDF."
                    keywords="Agentic AI, Autonomous Agents, AI Agents, Enterprise Automation, Cognitive AI, LLM Agents, AI Ebook, Future of Work, Business Intelligence, Agentic Frameworks"
                    canonicalUrl="https://anvriksh.com/resources/ebooks"
                    structuredData={structuredData}
                />

                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-indigo-400 uppercase bg-indigo-500/10 rounded-full border border-indigo-500/20">
                            Trending Resource 🚀
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-gray-400 mb-6">
                            Agentic AI: The Future is Autonomous
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Discover why <strong>Agentic AI</strong> is the biggest trend in technology. Master the strategies to build self-governing, intelligent systems for your enterprise.
                        </p>
                    </div>

                    {/* PDF Viewer Container */}
                    <div className="w-full h-[85vh] bg-gray-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden relative mb-20">
                        <iframe
                            src={`${pdfUrl}#toolbar=0&view=FitH`}
                            className="w-full h-full"
                            title="Agentic AI Ebook PDF"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 -z-10">
                            <p className="text-gray-400">Loading PDF Viewer...</p>
                        </div>
                    </div>

                    {/* SEO Content Section - Crucial for Indexing */}
                    <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6">What's Inside This Guide?</h2>
                            <ul className="space-y-4">
                                {[
                                    "The Evolution from Generative AI to Agentic AI",
                                    "Core Architectures of Autonomous Agents",
                                    "Implementing Multi-Agent Workflows in Enterprise",
                                    "Memory, Planning, and Tool Use in LLMs",
                                    "Real-world Case Studies & ROI Analysis"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-300">
                                        <i className="fas fa-check-circle text-indigo-500 mt-1"></i>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6">Why Agentic AI Matters Now</h2>
                            <div className="prose prose-invert text-gray-400">
                                <p className="mb-4">
                                    We are witnessing a paradigm shift. While Generative AI creates content, <strong>Agentic AI</strong> takes action. It is the key to unlocking true automation where software doesn't just assist—it performs.
                                </p>
                                <p>
                                    This ebook provides the technical and strategic roadmap for leaders and developers looking to stay ahead of the curve in the era of <strong>autonomous enterprise operations</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ebooks;
