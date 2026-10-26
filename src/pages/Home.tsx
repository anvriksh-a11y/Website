import { Link } from 'react-router-dom';
import React from 'react';
import Hero from '../components/Hero';
import DashboardPreview from '../components/DashboardPreview';
import Features from '../components/Features';
import FeatureSplit from '../components/FeatureSplit';
import DeepDive from '../components/DeepDive';
import Integrations from '../components/Integrations';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import PlatformHighlight from '../components/PlatformHighlight';
import KeyTakeaways from '../components/KeyTakeaways';
import SEO from '../components/SEO';

const Home: React.FC = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "name": "ANVRiksh",
                "alternateName": ["ANVRiksh Tech Solutions LLP", "ANVRiksh Tech Solutions", "ANVRiksh AI", "ANVRiksh Tech"],
                "url": "https://anvriksh.com/",
                "description": "Enterprise-grade Agentic AI Orchestration and Software Solutions.",
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://anvriksh.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                }
            },
            {
                "@type": "Organization",
                "name": "ANVRiksh",
                "legalName": "ANVRiksh Tech Solutions LLP",
                "identifier": "ADA-3944",
                "brand": {
                    "@type": "Brand",
                    "name": "ANVRiksh",
                    "alternateName": "ANVRiksh Tech Solutions LLP"
                },
                "description": "ANVRiksh Tech Solutions LLP is an India-based AI company specializing in Agentic AI, Generative AI, Custom Voice Assistants, and Enterprise Software Solutions.",
                "foundingDate": "2024",
                "foundingLocation": "Belgaum, Karnataka, India",
                "url": "https://anvriksh.com",
                "logo": "https://anvriksh.com/logo.png",
                "sameAs": [
                    "https://www.linkedin.com/company/anvriksh/",
                    "https://www.instagram.com/anvriksh/"
                ],
                "knowsAbout": [
                    "Agentic AI",
                    "Generative AI",
                    "Voice AI Assistants",
                    "Enterprise Software Development",
                    "AI Automation",
                    "LLM Integration"
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-8618293833",
                    "contactType": "customer service",
                    "areaServed": "IN",
                    "availableLanguage": "en"
                },
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "H.No.5, Block No 17/A, RajeevGandhiHousingColony, Belgaum Fort",
                    "addressLocality": "Belgaum",
                    "addressRegion": "Karnataka",
                    "postalCode": "590016",
                    "addressCountry": "IN"
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Agentic AI", "item": "https://anvriksh.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Platform", "item": "https://anvriksh.com/platform" },
                    { "@type": "ListItem", "position": 3, "name": "Gen AI", "item": "https://anvriksh.com/gen-ai" },
                    { "@type": "ListItem", "position": 4, "name": "Who We Are", "item": "https://anvriksh.com/company/who-we-are" }
                ]
            }
        ]
    };

    return (
        <>
            <SEO
                title="Agentic AI & Enterprise Software | ANVRiksh"
                description="Build, deploy, and scale autonomous AI workflows with ANVRiksh's enterprise-grade Agentic AI platform. Transform operations & cut overhead by 40%."
                keywords="ANVRiksh Tech Solutions LLP, ANVRiksh Tech Solutions, ANVRiksh, ADA-3944, Software Solutions, Website Building, App Building, SEO, Digital Marketing, Agentic AI India, Autonomous AI Workflows, Enterprise AI Solutions, Yugma Platform, AI Orchestration, Business Process Automation, AI Company India, AI Company Karnataka"
                canonicalUrl="https://anvriksh.com/"
                structuredData={structuredData}
                ogImage="/platform_hero.png"
            />
            <Hero />
            <DashboardPreview />

            <PlatformHighlight />

            <div className="relative z-10 bg-[#030712]">
                <Features />

                <FeatureSplit
                    title="Unlock the Full Potential of Your Business with AI Agents"
                    description=""
                    imageSrc="/agent_workflow.png"
                >
                    <div className="relative mt-4">
                        {/* Vertical Connecting Line */}
                        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent"></div>

                        <div className="space-y-10 relative z-10">
                            {/* Feature 1 */}
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0B0F19] border border-white/10 flex items-center justify-center relative z-10">
                                    <i className="fas fa-network-wired text-blue-400 text-lg"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Seamless Workflow Orchestration</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        With advanced reasoning capabilities, our agents can handle complex tasks, make informed decisions, and adapt to evolving scenarios.
                                    </p>
                                    <Link to="/how-ai-agents-are-reshaping-small-businesses" className="inline-block mt-3 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                                        Read how AI agents are reshaping small businesses <i className="fas fa-arrow-right ml-1"></i>
                                    </Link>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0B0F19] border border-white/10 flex items-center justify-center relative z-10">
                                    <i className="fas fa-desktop text-blue-400 text-lg"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Cross-Platform AI-First Interface</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        Deliver AI-first experiences through chat, AI-powered apps, or embedded interfaces within your existing ecosystem.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </FeatureSplit>

                <FeatureSplit
                    title="Cognitive Processing & Memory"
                    description="Beyond simple automation. Our agents maintain long-term context, learn from past interactions, and adapt their strategies to optimize outcomes across your entire enterprise ecosystem."
                    imageSrc="https://images.unsplash.com/photo-1655720828018-edd2daec9349?q=80&w=1000&auto=format&fit=crop"
                    reversed={true}
                >
                    <div className="relative mt-4">
                        {/* Vertical Connecting Line */}
                        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent"></div>

                        <div className="space-y-10 relative z-10">
                            {/* Feature 1 */}
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0B0F19] border border-white/10 flex items-center justify-center relative z-10">
                                    <i className="fas fa-brain text-blue-400 text-lg"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Adaptive Learning Engine</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        Agents continuously learn from interactions, refining their decision-making models to improve accuracy and efficiency over time.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0B0F19] border border-white/10 flex items-center justify-center relative z-10">
                                    <i className="fas fa-database text-blue-400 text-lg"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Persistent Contextual Memory</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        Maintain deep context across long-running sessions and disparate data sources, ensuring every action is informed by the complete picture.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </FeatureSplit>

                <DeepDive />
                <Integrations />
                <Pricing />
                <Testimonials />
                
                <div className="container mx-auto px-6 max-w-5xl relative z-10 mt-10">
                    <KeyTakeaways takeaways={[
                        "<strong>Enterprise Security:</strong> End-to-end data encryption and strict access controls for all autonomous agent workflows.",
                        "<strong>Measured Impact:</strong> AI orchestration reduces manual operational overhead by up to <strong>40%</strong> within the first quarter of deployment.",
                        "<strong>Seamless Scalability:</strong> Transition from zero-code prototyping to pro-code execution without changing platforms."
                    ]} />
                </div>
                
                <FAQ />
                <CTA />
            </div>
            {/* <EbookPopup /> */}
        </>
    );
};

export default Home;
