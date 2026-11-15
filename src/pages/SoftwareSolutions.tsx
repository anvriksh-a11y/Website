import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import Counter from '../components/Counter';

const softwareHeroSphereDots = Array.from({ length: 41 }, (_, row) => {
    const y = (row - 20) / 20;

    return Array.from({ length: 41 }, (_, column) => {
        const x = (column - 20) / 20;
        const distance = Math.sqrt(x * x + y * y);
        if (distance > 1) return null;

        const depth = Math.sqrt(1 - distance * distance);
        const curve = Math.sin(x * Math.PI) * y * 14;
        return (
            <circle
                key={`${row}-${column}`}
                cx={400 + Math.sin(x * Math.PI / 2) * 370}
                cy={400 + Math.sin(y * Math.PI / 2) * 370 + curve}
                r={0.75 + depth * 0.8}
                fill="#8EAE86"
                opacity={0.08 + depth * 0.28}
            />
        );
    }).filter((dot): dot is React.ReactElement => dot !== null);
}).flat();

/* ─── Hook for Scroll Visibility ─── */
function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.15) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    setVisible(true);
                    obs.disconnect();
                }
            },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [ref, threshold]);
    return visible;
}

const SoftwareSolutions: React.FC = () => {
    const [showFullStack, setShowFullStack] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const statsRef = useRef<HTMLDivElement>(null);
    const heroSphereRef = useRef<SVGSVGElement>(null);
    const statsVisible = useInView(statsRef);
    const [heroSphereVisible, setHeroSphereVisible] = useState(false);

    useEffect(() => {
        const sphere = heroSphereRef.current;
        if (!sphere) return;

        const observer = new IntersectionObserver(
            ([entry]) => setHeroSphereVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        observer.observe(sphere);
        return () => observer.disconnect();
    }, []);

    const fullTechStack = [
        {
            category: "Frontend Architecture",
            icon: "fab fa-react",
            technologies: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Vue.js 3", "Angular", "WebSockets", "Vite"]
        },
        {
            category: "Backend & Microservices",
            icon: "fas fa-server",
            technologies: ["Node.js", "Express", "Python", "FastAPI", "Django", "Go (Golang)", "Java Spring Boot", "GraphQL", "gRPC", "REST APIs"]
        },
        {
            category: "Databases & Caching",
            icon: "fas fa-database",
            technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Supabase", "Firebase", "DynamoDB", "Prisma ORM", "ElasticSearch"]
        },
        {
            category: "Cloud, DevOps & CI/CD",
            icon: "fas fa-cloud",
            technologies: ["AWS (ECS, Lambda, S3)", "Google Cloud Platform", "Microsoft Azure", "Docker", "Kubernetes", "Vercel", "Terraform", "GitHub Actions"]
        },
        {
            category: "Security & Observability",
            icon: "fas fa-shield-alt",
            technologies: ["OAuth 2.0 / JWT", "Cloudflare DDoS", "Sentry Monitoring", "Datadog", "Prometheus", "SSL/TLS", "OWASP Hardening"]
        },
        {
            category: "AI & Smart Automations",
            icon: "fas fa-brain",
            technologies: ["LangChain", "OpenAI API", "Anthropic Claude", "Gemini Pro", "Llama 3", "Pinecone Vector DB", "HuggingFace"]
        }
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Custom Software Development & Web Engineering",
        "provider": {
            "@type": "Organization",
            "name": "ANVRiksh Tech Solutions LLP",
            "url": "https://anvriksh.com"
        },
        "description": "Enterprise-grade custom software engineering, modern web applications, scalable cloud infrastructure, and AI integration.",
        "areaServed": "Global",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Software Development Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Web Application Development" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Enterprise Software Engineering" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud DevOps & Architecture" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI & Agentic Workflows Integration" } }
            ]
        }
    };

    const faqs = [
        {
            q: "How does ANVRiksh approach custom software development?",
            a: "We follow an agile, sprint-driven engineering process. Every project begins with in-depth technical scoping, architecture design, and interactive UI/UX prototyping. You receive weekly live demo builds, comprehensive QA reports, and direct access to your engineering lead."
        },
        {
            q: "Who owns the code and intellectual property (IP)?",
            a: "You retain 100% full ownership of the intellectual property, source code, repositories, cloud infrastructure, and technical assets upon milestone completion. We provide full handover documentation and repository transfers."
        },
        {
            q: "Can you modernize or rebuild our existing legacy system?",
            a: "Yes. We frequently take on legacy migrations—refactoring monoliths into modular cloud microservices, updating outdated UI codebases to React/Next.js with TypeScript, and migrating databases with zero user downtime."
        },
        {
            q: "What is your typical project delivery timeline?",
            a: "A high-performance MVP or focused web platform typically launches in 3 to 6 weeks. Full-scale SaaS applications or complex enterprise systems range from 8 to 16 weeks depending on microservices, integrations, and compliance requirements."
        },
        {
            q: "Do you offer post-launch support and SLA maintenance?",
            a: "Every project includes a 30 to 90-day complimentary post-launch warranty with dedicated bug fixes and performance monitoring. We also provide ongoing retainers for continuous feature velocity, security patches, and cloud optimization."
        }
    ];

    return (
        <div className="bg-[#F4F7EE] text-[#141912] font-sans w-full min-h-screen flex flex-col items-center select-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <SEO
                title="Custom Software Solutions & High-Performance Web Development | ANVRiksh"
                description="Scale your digital presence with enterprise custom software, cloud engineering, and modern web applications built by ANVRiksh Tech Solutions LLP."
                keywords="software solutions, web development, custom software, enterprise web applications, react development, node.js, cloud computing, aws devops, anvriksh"
                canonicalUrl="https://anvriksh.com/software-solutions"
                structuredData={structuredData}
            />

            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 overflow-hidden">

                {/* ═══════════════════════════════════════════════════════
                    HERO — hosting-style layout in the home palette
                ═══════════════════════════════════════════════════════ */}
                <section className="relative pt-28 sm:pt-32 pb-8 sm:pb-14">
                    <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-6">
                        <Reveal y={-48} duration={1500} className="text-center lg:text-left">
                            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#E3EDE0] text-[13px] font-semibold text-[#2F6B45] mb-5">
                                Bring your product to life
                            </div>

                            <h1 className="text-[2.55rem] sm:text-5xl lg:text-[58px] font-[800] text-[#141912] tracking-[-0.045em] leading-[1.05] mb-5">
                                Custom software<br />built to perform
                            </h1>

                            <p className="max-w-md mx-auto lg:mx-0 text-[15px] sm:text-base text-[#5C6B57] leading-relaxed mb-8">
                                ANVRiksh designs, builds, and launches the product — from the interface your customers use to the cloud it runs on.
                            </p>

                        </Reveal>

                        <Reveal y={64} duration={1700} delay={250} className="relative w-full max-w-[560px] mx-auto pr-10 sm:pr-0">
                            <svg
                                ref={heroSphereRef}
                                aria-hidden="true"
                                className="absolute left-1/2 top-[46%] z-0 w-[145%] max-w-none -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                                viewBox="0 0 800 800"
                                fill="none"
                                style={{
                                    opacity: heroSphereVisible ? 1 : 0,
                                    filter: heroSphereVisible ? 'blur(0)' : 'blur(8px)',
                                    transition: 'opacity 900ms ease, filter 1200ms ease',
                                }}
                            >
                                <g transform="rotate(-16 400 400)">{softwareHeroSphereDots}</g>
                            </svg>
                            <img
                                src="/images/software-hero-web-design.png"
                                alt="Custom software interface shown on a monitor with design and development tools"
                                className="relative z-10 w-full h-auto select-none mix-blend-darken"
                                style={{
                                    maskImage: 'radial-gradient(ellipse 92% 90% at 50% 50%, #000 66%, transparent 100%)',
                                    WebkitMaskImage: 'radial-gradient(ellipse 92% 90% at 50% 50%, #000 66%, transparent 100%)',
                                }}
                            />
                        </Reveal>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════
                    COMPANY — rings, shipped work, and the uptime card
                ═══════════════════════════════════════════════════════ */}
                <section className="py-16 sm:py-24">
                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                        <Reveal variant="up" className="text-center lg:text-left">
                            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#E3EDE0] text-[13px] font-semibold text-[#2F6B45] mb-5">
                                Company
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-[800] text-[#141912] tracking-[-0.04em] leading-[1.08] mb-4">
                                Genuine software for the work you actually do
                            </h2>
                            <p className="max-w-md mx-auto lg:mx-0 text-[#5C6B57] text-[15px] sm:text-base leading-relaxed mb-8">
                                Web apps, internal tools, APIs, and the cloud around them. Built around your workflow, and handed over with the code.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center lg:justify-start gap-6 sm:gap-8 mb-9">
                                {[
                                    { value: 100, color: '#003D2B', label: 'Of the source code and IP stays with you.' },
                                    { value: 40, color: '#7FA06A', label: 'Typical cloud-cost cut after we rebuild a system.' },
                                ].map((ring) => {
                                    const radius = 28;
                                    const circumference = 2 * Math.PI * radius;
                                    const offset = circumference - (ring.value / 100) * circumference;
                                    return (
                                        <div key={ring.value} className="flex items-center gap-3 text-left max-w-[240px]">
                                            <svg width="76" height="76" viewBox="0 0 76 76" className="shrink-0" aria-hidden="true">
                                                <circle cx="38" cy="38" r={radius} fill="none" stroke="#E4EEE0" strokeWidth="6" />
                                                <circle
                                                    cx="38"
                                                    cy="38"
                                                    r={radius}
                                                    fill="none"
                                                    stroke={ring.color}
                                                    strokeWidth="6"
                                                    strokeLinecap="round"
                                                    strokeDasharray={circumference}
                                                    strokeDashoffset={offset}
                                                    transform="rotate(-90 38 38)"
                                                />
                                                <text x="38" y="43" textAnchor="middle" fontSize="14" fontWeight="800" fill="#141912">
                                                    {ring.value}%
                                                </text>
                                            </svg>
                                            <p className="text-sm text-[#4E5B49] leading-snug">{ring.label}</p>
                                        </div>
                                    );
                                })}
                            </div>

                        </Reveal>

                        <Reveal variant="scale" delay={120} className="relative w-full max-w-[540px] mx-auto">
                            <div className="bg-white border border-[#E4EEE0] rounded-[28px] shadow-[0_16px_40px_rgba(20,25,18,0.06)] px-5 pt-5 sm:px-6 sm:pt-6 pb-40">
                                <div className="flex items-center justify-between mb-5">
                                    <h3 className="text-base sm:text-lg font-[800] text-[#141912]">Shipped and in production</h3>
                                    <button
                                        type="button"
                                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                                        aria-label="See the services"
                                        className="w-9 h-9 rounded-full border border-[#E4EEE0] text-[#141912] flex items-center justify-center hover:bg-[#F4F7EE] transition-colors"
                                    >
                                        <i className="fas fa-arrow-right text-xs" />
                                    </button>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        { initials: 'LR', tint: '#6E8B68', title: 'Learn with Rahuul', meta: 'E-learning platform', mid: 'Checkout, video', end: 'learnwithrahuul.com' },
                                        { initials: 'FG', tint: '#003D2B', title: 'ForestGift', meta: 'Impact dashboard', mid: 'Live map', end: 'forestgift.in' },
                                        { initials: 'BS', tint: '#C4A882', title: 'Blissberg', meta: 'Company platform', mid: 'Company site', end: 'blissbergsemi.com' },
                                    ].map((item) => (
                                        <li key={item.title} className="grid grid-cols-[auto_1fr] sm:grid-cols-[auto_1.3fr_1fr_1fr] items-center gap-x-3 gap-y-0.5">
                                            <span
                                                className="row-span-2 sm:row-span-1 w-10 h-10 rounded-full text-white text-[11px] font-bold flex items-center justify-center"
                                                style={{ backgroundColor: item.tint }}
                                            >
                                                {item.initials}
                                            </span>
                                            <div className="min-w-0">
                                                <div className="text-sm font-bold text-[#141912] truncate">{item.title}</div>
                                                <div className="text-xs text-[#8A9784]">{item.meta}</div>
                                            </div>
                                            <div className="hidden sm:block text-xs text-[#4E5B49]">{item.mid}</div>
                                            <div className="col-start-2 sm:col-start-auto text-xs font-semibold text-[#003D2B] truncate">{item.end}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="absolute right-4 bottom-4 w-[180px] rounded-[20px] bg-[#141912] text-white p-3.5 shadow-[0_16px_36px_rgba(20,25,18,0.28)]">
                                <div className="flex items-start justify-between gap-2">
                                    <div>
                                        <div className="text-[11px] text-[#A8C7A5]">Uptime</div>
                                        <div className="text-[24px] font-[800] leading-none tracking-tight mt-1">99.99%</div>
                                    </div>
                                    <svg viewBox="0 0 72 28" className="w-16 h-7 mt-1" aria-hidden="true">
                                        <path d="M2 20 C 10 20, 14 8, 22 10 S 34 22, 42 14 S 56 4, 70 8" fill="none" stroke="#8FCB7A" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="flex -space-x-2" aria-hidden="true">
                                        {['#6E8B68', '#C4A882', '#2F6B45'].map((tint) => (
                                            <span key={tint} className="w-6 h-6 rounded-full ring-2 ring-[#141912]" style={{ backgroundColor: tint }} />
                                        ))}
                                    </div>
                                    <span className="text-[11px] text-[#A8C7A5]">SLA</span>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════
                    STATS COUNTER STRIP — Nexsas Metrics in Home Palette
                ═══════════════════════════════════════════════════════ */}
                <section ref={statsRef} className="py-10 border-y border-[#D5E1CE] bg-white rounded-3xl shadow-xs mb-16 sm:mb-20 relative overflow-hidden">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-6">
                        {[
                            { end: 50, suffix: '+', label: 'Custom Systems Deployed', sub: 'Across 12 Global Industries' },
                            { end: 99.99, suffix: '%', label: 'Average System Uptime', sub: 'Enterprise-grade SLA', decimals: 2 },
                            { end: 40, suffix: '%', label: 'Reduced Infrastructure Cost', sub: 'Cloud Optimization' },
                            { end: 5.0, suffix: '/5', label: 'Founder Satisfaction', sub: 'Verified Client Reviews', decimals: 1 },
                        ].map((stat, i) => (
                            <Reveal key={i} delay={i * 80} variant="up">
                                <div className="text-center p-2">
                                    <div className="text-2xl sm:text-3xl lg:text-4xl font-[800] text-[#003D2B] tracking-tight mb-1.5">
                                        {statsVisible ? (
                                            <Counter end={stat.end} suffix={stat.suffix} decimals={stat.decimals || 0} />
                                        ) : (
                                            `0${stat.suffix}`
                                        )}
                                    </div>
                                    <div className="text-sm font-[800] text-[#141912]">{stat.label}</div>
                                    <div className="text-xs text-[#6A7865] mt-0.5">{stat.sub}</div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

{/* ═══════════════════════════════════════════════════════
                    OUR SERVICES — SEO, AEO & GEO IN-DEPTH OVERVIEW
                ═══════════════════════════════════════════════════════ */}
                <section id="seo-aeo-geo" className="py-16 sm:py-24 scroll-mt-24">
                    <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                        <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#E3EDE0] text-[13px] font-semibold text-[#2F6B45] mb-5">
                            Search &amp; AI Visibility
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-[800] text-[#141912] tracking-[-0.04em] leading-[1.08] mb-4">
                            Built-in SEO, AEO &amp; GEO Optimization
                        </h2>
                        <p className="text-[#5C6B57] text-[15px] sm:text-base leading-relaxed">
                            Every web platform we engineer is architected for top Google search rankings, featured snippets, voice search, and citation across AI engines like ChatGPT, Perplexity, and Gemini.
                        </p>
                    </div>

                    <div className="space-y-16 sm:space-y-24">
                        {[
                            {
                                title: 'Search Engine Optimization',
                                acronym: 'SEO',
                                image: '/images/seo-service-illustration.svg',
                                imageAlt: 'Search results dashboard with improving organic visibility',
                                description: 'Build a stronger organic search foundation with technical audits, crawlable site architecture, fast page experiences, and useful content mapped to real search intent. We help search engines understand your pages and give visitors a clear path from discovery to action, then use performance data to guide ongoing improvements.',
                                points: ['Technical audits', 'Search-intent content', 'Site speed & indexing', 'Performance tracking'],
                            },
                            {
                                title: 'Answer Engine Optimization',
                                acronym: 'AEO',
                                image: '/images/aeo-service-illustration.svg',
                                imageAlt: 'Question and answer card representing answer engine optimization',
                                description: 'Make your expertise easier for people and answer engines to understand. We organize pages around the questions your customers ask, write direct and trustworthy answers, and apply relevant structured data so useful information can be surfaced in featured snippets, voice search, and AI-assisted results.',
                                points: ['Answer-ready content', 'FAQ & structured data', 'Featured snippets', 'Voice-search readiness'],
                            },
                            {
                                title: 'Generative Engine Optimization',
                                acronym: 'GEO',
                                image: '/images/geo-service-illustration.svg',
                                imageAlt: 'Connected sources around a brand representing generative engine visibility',
                                description: 'Strengthen your brand’s discoverability in generative search with accurate, authoritative information across your site. We clarify your organization and its expertise, connect related topics with a coherent content structure, and build credible supporting sources that make your information easier for AI systems to interpret and reference.',
                                points: ['Entity clarity', 'Authoritative sources', 'Connected topic clusters', 'AI-search monitoring'],
                            },
                        ].map((service, index) => {
                            const imageFirst = index % 2 === 0;
                            const image = (
                                <Reveal
                                    key={`${service.acronym}-image`}
                                    variant={imageFirst ? 'left' : 'right'}
                                    className={imageFirst ? 'lg:order-1' : 'lg:order-2'}
                                >
                                    <div className="overflow-hidden rounded-[28px] bg-[#E7F3C4]">
                                        <img
                                            src={service.image}
                                            alt={service.imageAlt}
                                            className="block h-auto w-full"
                                            loading="lazy"
                                        />
                                    </div>
                                </Reveal>
                            );
                            const content = (
                                <Reveal
                                    key={`${service.acronym}-content`}
                                    variant={imageFirst ? 'right' : 'left'}
                                    className={`text-center lg:text-left ${imageFirst ? 'lg:order-2' : 'lg:order-1'}`}
                                >
                                    <span className="inline-flex items-center rounded-full bg-[#E3EDE0] px-3.5 py-1.5 text-[13px] font-semibold text-[#2F6B45]">
                                        {service.acronym}
                                    </span>
                                    <h3 className="mt-5 text-3xl font-[800] leading-[1.12] tracking-[-0.035em] text-[#141912] sm:text-4xl">
                                        {service.title}
                                    </h3>
                                    <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[#5C6B57] lg:mx-0">
                                        {service.description}
                                    </p>
                                    <ul className="mx-auto mt-5 flex max-w-xl flex-wrap justify-center gap-2 lg:mx-0 lg:justify-start">
                                        {service.points.map((point) => (
                                            <li key={point} className="rounded-full border border-[#DDE8D8] bg-white/70 px-3 py-1.5 text-xs font-semibold text-[#465443]">
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </Reveal>
                            );

                            return (
                                <article key={service.acronym} id={service.acronym.toLowerCase()} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16 scroll-mt-28">
                                    {imageFirst ? <>{image}{content}</> : <>{content}{image}</>}
                                </article>
                            );
                        })}
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════
                    WEBSITE PLANS
                ═══════════════════════════════════════════════════════ */}
                <section className="py-16 sm:py-24">
                    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-5xl font-[500] text-[#141912] tracking-[-0.04em] leading-[1.08]">
                            Select the pricing plan that<br className="hidden sm:block" /> best suits your needs.
                        </h2>
                    </div>

                    {(() => {
                        const plans = [
                            {
                                name: 'Static website',
                                subtitle: 'A fast, polished website with the essentials for a clear online presence.',
                                popular: false,
                            },
                            {
                                name: 'Animated website',
                                subtitle: 'A complete business website enhanced with purposeful motion and interactions.',
                                popular: true,
                            },
                            {
                                name: '3D website',
                                subtitle: 'An immersive, custom 3D experience designed to make your brand stand out.',
                            },
                        ];
                        const rows: { label: string; cells: Array<string | boolean> }[] = [
                            { label: 'Pages included', cells: ['Up to 3', 'Up to 5', 'Up to 5'] },
                            { label: 'Custom design', cells: [true, true, true] },
                            { label: 'Mobile responsive', cells: [true, true, true] },
                            { label: '3D website experience', cells: [false, false, true] },
                            { label: 'Video & motion animation', cells: [false, true, true] },
                            { label: 'SEO setup', cells: ['Basic', 'On-page', 'Advanced'] },
                            { label: 'Contact form & social links', cells: [true, true, true] },
                            { label: 'Analytics integration', cells: [false, true, true] },
                            { label: 'Hosting & deployment support', cells: [true, true, true] },
                            { label: 'Design revision rounds', cells: ['1 round', '2 rounds', '3 rounds'] },
                            { label: 'Post-launch support', cells: ['14 days', '30 days', '45 days'] },
                        ];

                        const renderPlanHeader = (plan: typeof plans[number]) => (
                            <div
                                key={plan.name}
                                className={`flex min-h-[220px] flex-col rounded-[24px] p-6 sm:p-7 ${
                                    plan.popular
                                        ? 'bg-[#141912] text-white shadow-[0_16px_40px_rgba(20,25,18,0.2)]'
                                        : 'border border-[#E4EEE0] bg-[#F7FAF4]'
                                }`}
                            >
                                <h3 className="text-2xl font-[700] tracking-tight">{plan.name}</h3>
                                <div className={`mt-1 text-sm leading-relaxed ${plan.popular ? 'text-[#A8C7A5]' : 'text-[#6A7865]'}`}>
                                    {plan.subtitle}
                                </div>
                                <Link
                                    to="/company/contact-us"
                                    className={`mt-auto block w-full rounded-full py-2.5 text-center text-sm font-bold transition-colors ${
                                        plan.popular
                                            ? 'bg-[#003D2B] text-white hover:bg-[#07523C]'
                                            : 'border border-[#E4EEE0] bg-white text-[#141912] hover:bg-[#E3EDE0]'
                                    }`}
                                >
                                    Get started
                                </Link>
                            </div>
                        );

                        return (
                            <>
                                <div className="hidden md:grid md:grid-cols-[minmax(150px,0.9fr)_repeat(3,minmax(0,1fr))] md:gap-x-4">
                                    <div />
                                    {plans.map(renderPlanHeader)}
                                    <div className="flex items-end border-b border-[#E7ECE3] pb-5 text-base font-semibold text-[#141912]">
                                        What’s included
                                    </div>
                                    {plans.map((plan) => (
                                        <div key={`${plan.name}-included`} className="border-b border-[#E7ECE3] pb-5 text-center text-sm font-semibold text-[#6A7865]">
                                            Included
                                        </div>
                                    ))}
                                    {rows.map((row) => (
                                        <React.Fragment key={row.label}>
                                            <div className="flex min-h-[58px] items-center border-b border-[#E7ECE3] text-sm font-medium text-[#52604D]">
                                                {row.label}
                                            </div>
                                            {row.cells.map((cell, index) => (
                                                <div key={`${row.label}-${index}`} className="flex min-h-[58px] items-center justify-center border-b border-[#E7ECE3] px-2 text-center text-sm text-[#6A7865]">
                                                    {cell === true ? <i className="fas fa-check text-[#141912]" aria-label="Included" /> : null}
                                                    {cell === false ? <span className="text-[#C5D4C0]" aria-label="Not included">—</span> : null}
                                                    {typeof cell === 'string' ? cell : null}
                                                </div>
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </div>

                                <div className="grid gap-5 md:hidden">
                                    {plans.map((plan, planIndex) => (
                                        <article key={plan.name} className="overflow-hidden rounded-[24px]">
                                            {renderPlanHeader(plan)}
                                            <div className="bg-white px-5">
                                                <h3 className="border-b border-[#E7ECE3] py-4 text-sm font-semibold text-[#141912]">
                                                    What’s included
                                                </h3>
                                                {rows.map((row) => {
                                                    const cell = row.cells[planIndex];
                                                    return (
                                                        <div key={row.label} className="flex min-h-[52px] items-center justify-between gap-4 border-b border-[#E7ECE3] py-3 text-sm">
                                                            <span className="text-[#52604D]">{row.label}</span>
                                                            <span className="text-right font-medium text-[#6A7865]">
                                                                {cell === true ? <i className="fas fa-check text-[#141912]" aria-label="Included" /> : null}
                                                                {cell === false ? <span aria-label="Not included">—</span> : null}
                                                                {typeof cell === 'string' ? cell : null}
                                                            </span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </>
                        );
                    })()}
                </section>

                {/* ═══════════════════════════════════════════════════════
                    REVIEWS
                ═══════════════════════════════════════════════════════ */}
                <section className="py-16 sm:py-24">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#E3EDE0] text-[13px] font-semibold text-[#2F6B45] mb-5">
                            Reviews
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-[800] text-[#141912] tracking-[-0.04em] leading-[1.08] mb-4">
                            Hear from our customers about their experiences with us
                        </h2>
                        <p className="text-[#5C6B57] text-[15px] leading-relaxed">
                            Founders we have shipped with. The quotes stay as they are until you want them rewritten.
                        </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                        {[
                            { quote: 'ANVRiksh built our custom dashboard so users can track live tree-planting geolocations. The engineering changed how we show the work to customers and investors.', name: 'Rupak Gouda', role: 'Founder, ForestGift', initials: 'RG', tint: '#C4A882' },
                            { quote: 'ANVRiksh created our e-learning platform with checkout, video, and student management. It held thousands of concurrent students without a glitch.', name: 'Rahuul Varma', role: 'Founder, Learn with Rahuul', initials: 'RV', tint: '#6E8B68' },
                            { quote: 'ANVRiksh designed a wonderful, modern website for Tanvi Impex. The craftsmanship, seamless user flow, and clean corporate aesthetics have elevated our global business presence and earned great praise from our international trade partners.', name: 'Bhushan Gajra', role: 'Founder, Tanvi Impex', initials: 'BG', tint: '#2F6B45' },
                        ].map((review) => (
                            <article key={review.name} className="bg-[#F7FAF4] border border-[#E4EEE0] rounded-[24px] p-6 flex flex-col justify-between min-h-[240px]">
                                <p className="text-sm text-[#3E4A3A] leading-relaxed">{review.quote}</p>
                                <div className="flex items-center gap-3 mt-6">
                                    <span className="w-10 h-10 rounded-full text-white text-xs font-bold flex items-center justify-center" style={{ backgroundColor: review.tint }}>{review.initials}</span>
                                    <div>
                                        <div className="text-sm font-bold text-[#141912]">{review.name}</div>
                                        <div className="text-xs text-[#6A7865]">{review.role}</div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════
                    PROCESS
                ═══════════════════════════════════════════════════════ */}
                <section id="process" className="py-16 sm:py-24 scroll-mt-24">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#E3EDE0] text-[13px] font-semibold text-[#2F6B45] mb-5">
                            Process
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-[800] text-[#141912] tracking-[-0.04em] leading-[1.08] mb-4">
                            What are the steps involved?
                        </h2>
                        <p className="text-[#5C6B57] text-[15px] leading-relaxed">
                            Five steps from the first conversation to a launch you can monitor. Edit the names whenever the process changes.
                        </p>
                    </div>
                    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                        <div className="relative mx-auto w-full max-w-sm">
                            <div className="mx-auto w-16 h-20 bg-[#C6E38A] border-[3px] border-[#141912] rounded-b-[18px] flex items-center justify-center" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 72%, 50% 100%, 0 72%)' }}>
                                <i className="fas fa-check text-[#141912] text-lg mb-3" />
                            </div>
                            <div className="mx-auto w-px h-8 bg-[#D5E1CE]" />
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-white border border-[#E4EEE0] rounded-2xl p-4">
                                    <div className="text-[11px] text-[#6A7865]">Shipped</div>
                                    <div className="text-xl font-[800] text-[#141912]">90+</div>
                                    <svg viewBox="0 0 120 32" className="w-full h-8 mt-1" aria-hidden="true">
                                        <path d="M2 24 L 18 24 L 28 8 L 40 20 L 52 6 L 66 18 L 80 10 L 118 14" fill="none" stroke="#003D2B" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div className="bg-[#141912] text-white rounded-2xl p-4">
                                    <div className="text-[11px] text-[#A8C7A5]">Uptime</div>
                                    <div className="text-xl font-[800]">99.99%</div>
                                    <div className="text-[11px] text-[#8FCB7A] mt-2">SLA in the contract</div>
                                </div>
                            </div>
                        </div>
                        <ol className="space-y-3">
                            {[
                                { n: '1', title: 'Discovery and scope', text: 'We break down the requirements, the data, and the milestones before anyone writes code.' },
                                { n: '2', title: 'UI and system design', text: 'Screens, the component system, and the database schema, agreed before the build.' },
                                { n: '3', title: 'Sprint engineering', text: 'Typed, tested code with a live preview you can click every week.' },
                                { n: '4', title: 'QA and stress testing', text: 'Unit tests, API benchmarks, and a security pass before launch.' },
                                { n: '5', title: 'Cloud launch and SLA', text: 'Production release, analytics, and monitoring with the accounts in your name.' },
                            ].map((step) => (
                                <li key={step.n} className="flex gap-4 bg-[#F7FAF4] border border-[#E4EEE0] rounded-[20px] p-4 sm:p-5">
                                    <span className="shrink-0 w-8 h-8 rounded-full bg-[#003D2B] text-white text-sm font-bold flex items-center justify-center">{step.n}</span>
                                    <div>
                                        <div className="font-[800] text-[#141912]">{step.title}</div>
                                        <p className="text-sm text-[#5C6B57] leading-relaxed mt-1">{step.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                <section id="insights" className="py-16 sm:py-24">
                    <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
                        <span className="mb-5 inline-flex items-center rounded-full bg-[#E3EDE0] px-3.5 py-1.5 text-[13px] font-semibold text-[#2F6B45]">
                            Blog
                        </span>
                        <h2 className="text-3xl font-[800] leading-[1.08] tracking-[-0.04em] text-[#141912] sm:text-5xl">
                            Our recent news &amp; insights
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[#5C6B57]">
                            Explore practical ideas on building a stronger digital presence, using AI, and making confident technology decisions.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                slug: '/why-every-small-business-needs-a-website-2026',
                                image: '/small_business_website_cartoon.png',
                                category: 'Business Growth',
                                title: 'Why Every Small Business Needs a Website in 2026',
                                description: 'See how a well-built website can earn customer trust, improve discoverability, and create a dependable path for new enquiries.',
                            },
                            {
                                slug: '/how-ai-agents-are-reshaping-small-businesses',
                                image: '/ai_agents_small_business.png',
                                category: 'AI & Automation',
                                title: 'How AI Agents Are Quietly Reshaping Small Businesses',
                                description: 'Learn where autonomous agents can streamline customer support, outreach, and everyday operations while keeping people in control.',
                            },
                            {
                                slug: '/enterprise-ai-agents-guide-2026',
                                image: '/ai_agents_guide_2026.png',
                                category: 'Architecture Guide',
                                title: 'The Ultimate Guide to Enterprise AI Agents in 2026',
                                description: 'Explore the building blocks behind reliable agentic workflows, from connected tools and memory to orchestration and oversight.',
                            },
                        ].map((article, index) => (
                            <Reveal key={article.slug} variant="up" delay={index * 80} duration={600}>
                                <Link
                                    to={article.slug}
                                    className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#D5E1CE] bg-white shadow-[0_4px_20px_rgba(0,61,43,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(0,61,43,0.12)]"
                                >
                                    <div className="relative h-52 overflow-hidden bg-[#E8F0E4]">
                                        <img
                                            src={article.image}
                                            alt=""
                                            loading="lazy"
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <span className="absolute left-4 top-4 rounded-full border border-[#D5E1CE] bg-white/95 px-3 py-1 text-xs font-bold text-[#003D2B]">
                                            {article.category}
                                        </span>
                                    </div>
                                    <div className="flex flex-grow flex-col p-6 sm:p-7">
                                        <h3 className="mb-3 text-lg font-[800] leading-snug text-[#141912] transition-colors group-hover:text-[#004D36] sm:text-xl">
                                            {article.title}
                                        </h3>
                                        <p className="flex-grow text-sm leading-relaxed text-[#4E5B49]">
                                            {article.description}
                                        </p>
                                        <span className="mt-6 inline-flex items-center justify-between border-t border-[#F0F4EC] pt-4 text-sm font-bold text-[#003D2B]">
                                            <span>Read article</span>
                                            <i className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1" aria-hidden="true" />
                                        </span>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════
                    FAQ ACCORDION — Exact Home Page Pattern
                ═══════════════════════════════════════════════════════ */}
                <section className="py-20 sm:py-28 relative border-t border-[#D5E1CE]">
                    <div className="max-w-3xl mx-auto">
                        <Reveal variant="up">
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] shadow-xs mb-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D452C] animate-pulse" />
                                    <span className="text-[12px] sm:text-[13px] font-semibold text-[#2D452C] tracking-tight">
                                        Common Questions
                                    </span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-[800] mb-3 tracking-[-0.035em] text-[#141912]">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-[#4E5B49] text-base">
                                    Everything you need to know about our custom engineering, deliverables, and guarantees.
                                </p>
                            </div>
                        </Reveal>

                        <div className="space-y-3.5">
                            {faqs.map((faq, index) => {
                                const open = openFaq === index;
                                return (
                                    <Reveal key={index} variant="up" duration={600} delay={index * 60}>
                                        <div
                                            className={`bg-white border border-[#D5E1CE] rounded-[20px] overflow-hidden transition-all duration-300 shadow-xs ${open ? 'ring-1 ring-[#003D2B]/40 shadow-md' : 'hover:shadow-md'
                                                }`}
                                        >
                                            <button
                                                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4"
                                                onClick={() => setOpenFaq(open ? null : index)}
                                                aria-expanded={open}
                                            >
                                                <span className="font-[800] text-[15px] sm:text-base text-[#141912]">
                                                    {faq.q}
                                                </span>
                                                <span
                                                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${open
                                                        ? 'bg-[#003D2B] text-white rotate-180 shadow-xs'
                                                        : 'bg-[#E3EDE0] text-[#2D452C]'
                                                        }`}
                                                >
                                                    <i className="fas fa-chevron-down text-xs" />
                                                </span>
                                            </button>
                                            <div
                                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96 pb-5' : 'max-h-0'
                                                    }`}
                                            >
                                                <p className="text-[#4E5B49] leading-relaxed text-sm sm:text-[15px] border-t border-[#EAEFE5] pt-4">
                                                    {faq.a}
                                                </p>
                                            </div>
                                        </div>
                                    </Reveal>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════
                    HIGH-CONVERTING FINAL CTA BANNER — Exact Home Style
                ═══════════════════════════════════════════════════════ */}
                <section className="py-20 sm:py-28 relative">
                    <Reveal variant="scale" duration={850}>
                        <div className="relative overflow-hidden rounded-[2.4rem] text-center px-6 sm:px-16 py-16 sm:py-20 bg-gradient-to-br from-[#003D2B] via-[#022D20] to-[#011F16] shadow-[0_24px_64px_rgba(0,61,43,0.30)] border border-[#2D452C]">
                            {/* Subtle soft organic ambient circles */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div
                                    className="absolute -top-40 left-1/2 -translate-x-1/2 w-[620px] h-[340px] rounded-full opacity-20"
                                    style={{ background: 'radial-gradient(ellipse at center, #98D8A0 0%, transparent 70%)', filter: 'blur(52px)' }}
                                />
                                <div
                                    className="absolute bottom-0 right-0 w-80 h-64 rounded-full opacity-20"
                                    style={{ background: 'radial-gradient(circle, #E3EDE0 0%, transparent 70%)', filter: 'blur(44px)' }}
                                />
                            </div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2.5 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 mb-6 backdrop-blur-md">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                                    </span>
                                    <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#E3EDE0]">
                                        Accepting New Engineering Projects
                                    </span>
                                </div>

                                <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-[800] mb-4 text-white tracking-[-0.035em] leading-[1.08]">
                                    Ready to Build Your Next <br />
                                    <span className="text-[#A7E2AF]">Custom Software Solution?</span>
                                </h2>
                                <p className="text-[#C6DCC4] text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                                    Book a direct technical discovery session with our lead architects. We will analyze your requirements, review tech feasibility, and deliver a detailed milestone proposal.
                                </p>

                                <div className="flex flex-col sm:flex-row justify-center gap-3.5">
                                    <Link
                                        to="/company/contact-us"
                                        className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-[#003D2B] bg-white hover:bg-[#F4F7EE] shadow-[0_12px_28px_rgba(0,0,0,0.25)] hover:scale-105 active:scale-100 transition-all"
                                    >
                                        <span>Start Your Project Today</span>
                                        <span className="w-6 h-6 rounded-full bg-[#003D2B]/10 flex items-center justify-center">
                                            <i className="fas fa-arrow-right text-xs text-[#003D2B]" />
                                        </span>
                                    </Link>
                                    <button
                                        onClick={() => setShowFullStack(true)}
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-105 active:scale-100 transition-all"
                                    >
                                        Review Tech Capabilities
                                    </button>
                                </div>

                                <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-xs text-[#A8C7A5] font-medium">
                                    <span className="inline-flex items-center gap-1.5">
                                        <i className="fas fa-check text-emerald-400 text-[10px]" /> Free technical discovery call
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <i className="fas fa-check text-emerald-400 text-[10px]" /> NDA signed before scoping
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <i className="fas fa-check text-emerald-400 text-[10px]" /> Detailed architectural proposal in 48h
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </section>
            </div>

            {/* ═══════════════════════════════════════════════════════
                FULL TECH STACK MODAL
            ═══════════════════════════════════════════════════════ */}
            {showFullStack && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
                    <div className="bg-white border border-[#D5E1CE] rounded-[28px] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-10">
                        {/* Close button */}
                        <button
                            onClick={() => setShowFullStack(false)}
                            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#E3EDE0] hover:bg-[#D3E2CF] text-[#141912] flex items-center justify-center transition-colors"
                            aria-label="Close modal"
                        >
                            <i className="fas fa-times text-sm" />
                        </button>

                        <div className="mb-8 pr-8">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] text-xs font-bold text-[#003D2B] mb-2.5">
                                <i className="fas fa-layer-group" />
                                <span>ANVRiksh Engineering Stack</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-[800] text-[#141912] tracking-tight">
                                Complete Technology &amp; Tooling Matrix
                            </h2>
                            <p className="text-sm text-[#4E5B49] mt-1">
                                Battle-tested frameworks, databases, and cloud platforms we implement for high-velocity software production.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {fullTechStack.map((cat, cidx) => (
                                <div key={cidx} className="bg-[#F8FAF4] border border-[#DCE8D7] rounded-2xl p-5">
                                    <div className="flex items-center gap-2.5 mb-3.5 pb-2.5 border-b border-[#E2EBDD]">
                                        <div className="w-8 h-8 rounded-lg bg-[#E3EDE0] text-[#003D2B] flex items-center justify-center">
                                            <i className={`${cat.icon} text-sm`} />
                                        </div>
                                        <h3 className="font-[800] text-sm text-[#141912]">{cat.category}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {cat.technologies.map((tech, tidx) => (
                                            <span
                                                key={tidx}
                                                className="px-2.5 py-1 bg-white border border-[#D5E1CE] rounded-lg text-xs font-semibold text-[#141912] shadow-2xs hover:border-[#003D2B] transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-[#EAEFE5] flex flex-col sm:flex-row items-center justify-between gap-4">
                            <span className="text-xs text-[#6A7865] font-medium text-center sm:text-left">
                                Need custom integrations with your proprietary ERP, CRM or API? We build bespoke connectors.
                            </span>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setShowFullStack(false)}
                                    className="px-5 py-2.5 rounded-full text-xs font-bold text-[#4E5B49] bg-[#E3EDE0] hover:bg-[#D3E2CF] transition-colors"
                                >
                                    Close
                                </button>
                                <Link
                                    to="/company/contact-us"
                                    onClick={() => setShowFullStack(false)}
                                    className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#003D2B] hover:bg-[#022D20] transition-colors"
                                >
                                    Get Scoping Call
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SoftwareSolutions;
