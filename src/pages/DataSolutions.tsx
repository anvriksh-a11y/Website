import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import KeyTakeaways from '../components/KeyTakeaways';
import ToolIntegrationOrbit from '../components/ToolIntegrationOrbit';

// Streamlined Service Interface
interface DataService {
  id: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  technologies: string[];
  capabilities: string[];
}

const DATA_SERVICES: DataService[] = [
  {
    id: 'migration',
    num: '01',
    title: 'Data Migration & Modernization',
    tagline: 'Zero-Downtime Transition',
    description: 'Migrate legacy databases and on-prem systems to modern cloud environments with guaranteed data consistency and minimal disruption.',
    icon: 'fas fa-cloud-upload-alt',
    technologies: ['Azure DMS', 'AWS DMS', 'ADF'],
    capabilities: [
      'Automated schema conversion & validation',
      'Dual-write zero-downtime cutover'
    ]
  },
  {
    id: 'etl-elt',
    num: '02',
    title: 'ETL & ELT Pipeline Development',
    tagline: 'High-Throughput Workflows',
    description: 'Build automated batch and incremental streaming pipelines to extract, transform, and load data from diverse sources.',
    icon: 'fas fa-stream',
    technologies: ['Apache Spark', 'PySpark', 'Kafka'],
    capabilities: [
      'Incremental Change Data Capture (CDC)',
      'Sub-minute micro-batch streaming'
    ]
  },
  {
    id: 'fabric',
    num: '03',
    title: 'Microsoft Fabric Solutions',
    tagline: 'Unified Lakehouse on OneLake',
    description: 'Deploy Fabric OneLake, Data Factory, Lakehouse, and Warehouse with medallion architecture for unified enterprise analytics.',
    icon: 'fas fa-cubes',
    technologies: ['OneLake', 'Fabric ADF', 'Lakehouse'],
    capabilities: [
      'Zero-Copy multi-cloud Shortcuts',
      'DirectLake sub-second Power BI queries'
    ]
  },
  {
    id: 'azure',
    num: '04',
    title: 'Azure Data Engineering',
    tagline: 'Cloud-Native Scalability',
    description: 'Architect cloud-native data platforms using Azure Data Factory, ADLS Gen2, and Azure SQL to process enterprise-scale data.',
    icon: 'fab fa-microsoft',
    technologies: ['ADF', 'ADLS Gen2', 'Azure Synapse'],
    capabilities: [
      'Hierarchical ADLS Gen2 storage',
      'Private VNet zero-exposure security'
    ]
  },
  {
    id: 'databricks',
    num: '05',
    title: 'Databricks & PySpark Engineering',
    tagline: 'Distributed Big Data & AI',
    description: 'Build scalable PySpark and Delta Lake workflows optimized with Photon vectorized engines and MLflow model tracking.',
    icon: 'fas fa-fire',
    technologies: ['Databricks', 'PySpark', 'Delta Lake'],
    capabilities: [
      'Vectorized query acceleration',
      'Unity Catalog central governance'
    ]
  },
  {
    id: 'lakehouse',
    num: '06',
    title: 'Data Lakehouse Architecture',
    tagline: 'Bronze, Silver & Gold Standard',
    description: 'Implement structured medallion lakehouse architectures with automated data validation, quality gates, and ACID compliance.',
    icon: 'fas fa-layer-group',
    technologies: ['Delta Lake', 'OneLake', 'DLT'],
    capabilities: [
      'ACID transactional reliability',
      'Continuous Bronze to Gold refinement'
    ]
  },
  {
    id: 'integration',
    num: '07',
    title: 'Data Integration & Automation',
    tagline: 'Connected Data Ecosystems',
    description: 'Connect databases, APIs, CRM platforms, and cloud services into unified data movement workflows with automated alerts.',
    icon: 'fas fa-network-wired',
    technologies: ['REST APIs', 'Webhooks', 'Event Hubs'],
    capabilities: [
      'Multi-source API orchestration',
      'Event-triggered pipeline automation'
    ]
  },
  {
    id: 'governance',
    num: '08',
    title: 'Data Quality, Security & Governance',
    tagline: 'Enterprise Compliance & Lineage',
    description: 'Enforce automated deduplication, column-level masking, access controls, and end-to-end data lineage for regulatory compliance.',
    icon: 'fas fa-shield-alt',
    technologies: ['Unity Catalog', 'Purview', 'RBAC'],
    capabilities: [
      'Fine-grained column/row masking',
      'End-to-end auditability & lineage'
    ]
  }
];

// Streamlined 6-step roadmap
const APPROACH_STEPS = [
  { step: '01', title: 'Discover', subtitle: 'Audit & Needs', desc: 'Assess infrastructure, data schemas, latency targets, and strategic goals.', icon: 'fas fa-search' },
  { step: '02', title: 'Design', subtitle: 'Architecture', desc: 'Define lakehouse blueprints, medallion boundaries, and cloud migration strategies.', icon: 'fas fa-drafting-compass' },
  { step: '03', title: 'Develop', subtitle: 'Pipeline Build', desc: 'Build scalable ETL/ELT pipelines, OneLake shortcuts, and PySpark transformations.', icon: 'fas fa-code' },
  { step: '04', title: 'Validate', subtitle: 'Quality & Security', desc: 'Run automated reconciliation checks, encryption audits, and load testing.', icon: 'fas fa-tasks' },
  { step: '05', title: 'Deploy', subtitle: 'Cutover & Monitoring', desc: 'Deliver production release with automated telemetry alerts and documentation.', icon: 'fas fa-rocket' },
  { step: '06', title: 'Optimize', subtitle: 'Continuous Tuning', desc: 'Continuously optimize query speeds, cluster auto-scaling, and cloud cost efficiency.', icon: 'fas fa-tachometer-alt' }
];

// Streamlined competitive advantages
const WHY_CHOOSE_US = [
  { title: 'Scalable & Cloud-Ready', desc: 'Engineered to handle petabyte-scale growth with decoupled storage and elastic compute.', icon: 'fas fa-expand-arrows-alt' },
  { title: 'Automated & Reliable', desc: 'Self-healing pipelines with schema evolution handling and 99.99% operational uptime.', icon: 'fas fa-sync-alt' },
  { title: 'Zero Business Disruption', desc: 'Dual-write cutovers and automated reconciliation ensure seamless data migration.', icon: 'fas fa-shield-virus' },
  { title: '10x Performance Boost', desc: 'Vectorized query execution, PySpark tuning, and Delta caching slash latency.', icon: 'fas fa-bolt' },
  { title: 'Modern Lakehouse Standard', desc: 'Bronze, Silver, and Gold medallion curation guarantees validated, AI-ready data.', icon: 'fas fa-medal' },
  { title: 'Multi-Cloud Freedom', desc: 'Open Delta-Parquet formats across Fabric, Azure, and AWS prevent vendor lock-in.', icon: 'fas fa-infinity' }
];

const DataSolutions: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeApproachStep, setActiveApproachStep] = useState(0);

  const archRef = useRef<HTMLDivElement>(null);
  const orbitSlotRef = useRef<HTMLDivElement>(null);
  const [isArchVisible, setIsArchVisible] = useState(false);
  const [showOrbit, setShowOrbit] = useState(false);

  useEffect(() => {
    const el = orbitSlotRef.current;
    if (!el) return;
    let raf = 0;
    let loaded = false;
    const check = () => {
      if (loaded) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.55) {
        loaded = true;
        setShowOrbit(true);
        window.removeEventListener('scroll', onScroll, true);
      }
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(check);
    };
    raf = requestAnimationFrame(check);
    window.addEventListener('scroll', onScroll, { passive: true, capture: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll, true);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsArchVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (archRef.current) {
      observer.observe(archRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Cloud Data Engineering & Modern Data Solutions',
    name: 'ANVRiksh Cloud Data Engineering',
    provider: {
      '@type': 'Organization',
      name: 'ANVRiksh Tech Solutions LLP',
      identifier: 'ADA-3944',
      url: 'https://anvriksh.com',
    },
    areaServed: 'Worldwide',
    description:
      'Enterprise cloud data engineering, Microsoft Fabric implementations, Azure Lakehouse architecture, PySpark ETL pipelines, and Medallion data engineering.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cloud Data Services',
      itemListElement: [
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Microsoft Fabric & Azure Lakehouse Engineering' } },
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Databricks & PySpark ETL/ELT Pipeline Development' } },
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Medallion Architecture (Bronze, Silver, Gold Data Design)' } },
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Data Migration & Real-Time Stream Analytics' } }
      ]
    }
  };

  return (
    <div 
      className="min-h-screen bg-[#F4F7EE] text-[#141912] selection:bg-[#003D2B]/15 selection:text-[#003D2B] overflow-x-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <SEO
        title="Cloud Data Engineering & Modern Data Solutions | ANVRiksh"
        description="Transform enterprise data into scalable, high-performance business intelligence with Microsoft Fabric, Azure, Databricks lakehouse architectures, and streaming PySpark ETL pipelines."
        keywords="Cloud Data Engineering, Microsoft Fabric, Azure Data Engineering, Databricks, PySpark, Lakehouse Architecture, Medallion Architecture, ETL Pipelines, Data Migration, ANVRiksh Tech Solutions LLP"
        canonicalUrl="https://anvriksh.com/data-solutions"
        structuredData={structuredData}
        ogImage="/platform_hero.png"
      />

      {/* =========================================================================
          1. HERO SECTION WITH SCROLL REVEAL ANIMATIONS
          ========================================================================= */}
      <section 
        className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-20 overflow-hidden select-none" 
        role="banner"
        aria-label="Cloud Data Engineering Hero"
      >
        {/* Background ambient mesh */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute inset-0 bg-[radial-gradient(#003D2B_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-[0.035]" />
          <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-gradient-to-br from-[#003D2B]/12 to-transparent rounded-full blur-[110px]" />
          <div className="absolute top-12 -right-28 w-[500px] h-[500px] bg-gradient-to-bl from-[#8B7355]/18 to-transparent rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E3EDE0] border border-[#D5E1CE] shadow-xs mb-5 cursor-default">
            <span className="w-2 h-2 rounded-full bg-[#003D2B] animate-pulse" />
            <span className="text-xs sm:text-[13px] font-bold text-[#003D2B] tracking-tight">
              Enterprise Cloud Data Platforms &bull; Microsoft Fabric &amp; Databricks
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-[800] tracking-[-0.035em] text-[#141912] leading-[1.08] max-w-4xl mx-auto">
            Cloud Data <span className="font-serif italic font-normal text-[#8B7355]">Engineering</span>
          </h1>

          <p className="mt-4 text-lg sm:text-xl font-medium text-[#003D2B] max-w-2xl mx-auto">
            Transforming Data into Scalable, Intelligent Business Solutions
          </p>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#4E5B49] max-w-2xl mx-auto leading-relaxed">
            We design, build, and modernize end-to-end data platforms leveraging <strong className="text-[#003D2B]">Microsoft Fabric</strong>, <strong className="text-[#003D2B]">Azure</strong>, and <strong className="text-[#003D2B]">Databricks</strong> to establish a unified foundation for analytics and AI-driven decision-making.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                to="/company/contact-us"
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#003D2B] hover:bg-[#022D20] shadow-[0_10px_24px_rgba(0,61,43,0.22)] hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
              >
                <span>Schedule Consultation</span>
                <i className="fas fa-arrow-right text-xs group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <a
                href="#architecture-showcase"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-[#141912] bg-white hover:bg-[#EAEFE5] border border-[#CCD8C3] shadow-xs transition-all w-full sm:w-auto active:scale-95"
              >
                <i className="fas fa-project-diagram text-xs text-[#003D2B]" />
                <span>Reference Architecture</span>
              </a>
            </div>

          <div className="mt-10 pt-6 border-t border-[#D5E1CE] grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="p-2 text-center">
                <span className="block text-2xl font-[800] font-mono text-[#003D2B]">10x</span>
                <span className="text-[11px] text-[#616E7C] font-medium">Query Acceleration</span>
              </div>
              <div className="p-2 text-center">
                <span className="block text-2xl font-[800] font-mono text-[#003D2B]">99.99%</span>
                <span className="text-[11px] text-[#616E7C] font-medium">Pipeline Uptime</span>
              </div>
              <div className="p-2 text-center">
                <span className="block text-2xl font-[800] font-mono text-[#003D2B]">Zero</span>
                <span className="text-[11px] text-[#616E7C] font-medium">Copy Shortcuts</span>
              </div>
              <div className="p-2 text-center">
                <span className="block text-2xl font-[800] font-mono text-[#003D2B]">ACID</span>
                <span className="text-[11px] text-[#616E7C] font-medium">Delta Reliability</span>
              </div>
            </div>

        </div>
      </section>


      {/* The orbit graphic is heavy, so it mounts only as it nears the screen */}
      <div ref={orbitSlotRef} className="min-h-[280px]">
        {showOrbit ? <ToolIntegrationOrbit /> : null}
      </div>


      {/* =========================================================================
          3. INTERACTIVE ARCHITECTURE SHOWCASE (FABRIC & DATABRICKS DREAM LAB)
          ========================================================================= */}
      <section 
        id="architecture-showcase"
        ref={archRef}
        className="py-16 sm:py-24 bg-[#E8F0E4]/50 border-y border-[#D5E1CE] relative select-none scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Reveal variant="up" className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3EDE0] border border-[#D5E1CE] shadow-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#003D2B] animate-ping" />
              <span className="text-xs font-bold text-[#003D2B] tracking-tight">Interactive Blueprint</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-[800] tracking-[-0.03em] text-[#141912] leading-[1.15]">
              Modern Analytics with Fabric &amp; Databricks
            </h2>
            <p className="mt-2 text-[#4E5B49] text-xs sm:text-sm md:text-base">
              Explore our reference DREAM Lab architecture unifying ingestion, OneLake Delta-Parquet storage, PySpark compute, and MLflow AI serving.
            </p>
          </Reveal>

          {/* Architecture Showcase Viewer Container */}
          <Reveal variant="scale" delay={150}>
            <div className={`bg-[#0C140E] rounded-[32px] sm:rounded-[36px] border-2 border-[#D5E1CE] shadow-[0_24px_60px_rgba(20,25,18,0.2)] p-4 sm:p-6 relative overflow-hidden text-white transition-all duration-700 ${
              isArchVisible ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-3'
            }`}>
              
              {/* Top Toolbar */}
              <div className="flex flex-wrap items-center justify-between pb-3.5 border-b border-white/15 gap-2 text-xs font-mono text-white/70">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C6F56F] animate-pulse" />
                  <span className="font-bold text-white tracking-wide">DREAM LAB ARCHITECTURE</span>
                  <span className="text-white/40 hidden sm:inline">&bull; MICROSOFT FABRIC + AZURE DATABRICKS</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-sans transition-colors"
                  >
                    <i className="fas fa-expand text-[10px]" />
                    <span>Full Screen</span>
                  </button>
                </div>
              </div>

              {/* Main Image Frame with Telemetry Nodes */}
              <div className="relative mt-4 rounded-2xl overflow-hidden bg-[#070D08] border border-white/10 group cursor-pointer" onClick={() => setIsModalOpen(true)}>
                <img
                  src="/images/data-solutions/fabric-databricks-architecture.jpg"
                  alt="Modern Analytics with Microsoft Fabric and Azure Databricks DREAM Lab Architecture"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                />

                {/* Live Data Flow Pulse Badges */}
                <div className="absolute top-4 left-4 z-20 pointer-events-none">
                  <div className="px-3 py-1 rounded-full bg-[#003D2B]/90 backdrop-blur-md border border-[#C6F56F]/40 text-[#C6F56F] text-[10px] font-mono font-bold flex items-center gap-2 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6F56F] animate-ping" />
                    <span>OneSecurity Active</span>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 z-20 pointer-events-none">
                  <div className="px-3 py-1 rounded-full bg-[#0B2117]/90 backdrop-blur-md border border-[#50E6FF]/40 text-[#50E6FF] text-[10px] font-mono font-bold flex items-center gap-2 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#50E6FF] animate-pulse" />
                    <span>Delta Live Tables ACID</span>
                  </div>
                </div>
              </div>

            </div>
          </Reveal>

        </div>
      </section>

      {/* Full-Screen Modal Viewer */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 select-none"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-6xl w-full bg-[#0C140E] rounded-3xl p-4 sm:p-6 border border-white/20" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between pb-3 border-b border-white/15 text-white">
              <h3 className="text-sm font-bold font-mono">Microsoft Fabric &amp; Databricks Architecture</h3>
              <button onClick={() => setIsModalOpen(false)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
                <i className="fas fa-times text-xs" />
              </button>
            </div>
            <div className="mt-4 max-h-[80vh] overflow-auto rounded-xl">
              <img
                src="/images/data-solutions/fabric-databricks-architecture.jpg"
                alt="Architecture Fullscreen"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}


      {/* =========================================================================
          4. OUR 8 DATA ENGINEERING SERVICES (REDUCED & STREAMLINED)
          ========================================================================= */}
      <section className="py-16 sm:py-24 relative select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Reveal variant="up" className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3EDE0] border border-[#D5E1CE] shadow-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#003D2B] animate-pulse" />
              <span className="text-xs font-bold text-[#003D2B] tracking-tight">Core Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-[800] tracking-[-0.03em] text-[#141912] leading-[1.15]">
              Our Data Engineering Services
            </h2>
            <p className="mt-2 text-[#4E5B49] text-xs sm:text-sm md:text-base">
              End-to-end data platform engineering from legacy modernization to high-throughput streaming and AI lakehouses.
            </p>
          </Reveal>

          {/* 8 Services Grid with Staggered Scroll Reveal */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {DATA_SERVICES.map((srv, idx) => (
              <Reveal 
                key={srv.id} 
                variant="up" 
                delay={(idx % 4) * 80}
                className="flex"
              >
                <div className="p-6 rounded-[26px] bg-white border border-[#D5E1CE] shadow-[0_4px_20px_rgba(20,25,18,0.04)] hover:shadow-[0_14px_32px_rgba(0,61,43,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group w-full">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-11 h-11 rounded-2xl bg-[#E3EDE0] border border-[#CCD8C3] flex items-center justify-center text-[#003D2B] text-lg group-hover:bg-[#003D2B] group-hover:text-white transition-all">
                        <i className={srv.icon} />
                      </div>
                      <span className="font-mono text-[11px] font-bold text-[#8B7355] bg-[#F4F7EE] px-2 py-0.5 rounded-full border border-[#D5E1CE]">
                        {srv.num}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#141912] group-hover:text-[#003D2B] transition-colors leading-snug">
                      {srv.title}
                    </h3>
                    
                    <p className="text-[10px] font-semibold text-[#8B7355] uppercase tracking-wider mt-0.5">
                      {srv.tagline}
                    </p>

                    <p className="text-xs text-[#4E5B49] mt-2.5 leading-relaxed">
                      {srv.description}
                    </p>

                    <div className="mt-3.5 pt-2.5 border-t border-[#CCD8C3]/50 space-y-1">
                      {srv.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-[11px] text-[#616E7C]">
                          <i className="fas fa-check text-[#003D2B] mt-0.5 text-[8px] shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-[#CCD8C3]/40 flex flex-wrap gap-1">
                    {srv.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-[#F4F7EE] text-[#4E5B49] text-[10px] font-mono border border-[#D5E1CE]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          5. OUR 6-STEP APPROACH (STREAMLINED TIMELINE)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#EAEFE5]/60 border-t border-[#D5E1CE] relative select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Reveal variant="up" className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3EDE0] border border-[#D5E1CE] shadow-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#003D2B] animate-pulse" />
              <span className="text-xs font-bold text-[#003D2B] tracking-tight">Delivery Lifecycle</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-[800] tracking-[-0.03em] text-[#141912] leading-[1.15]">
              Our Approach
            </h2>
            <p className="mt-2 text-[#4E5B49] text-xs sm:text-sm md:text-base">
              From technical audit to production deployment and continuous tuning.
            </p>
          </Reveal>

          {/* 6 Step Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {APPROACH_STEPS.map((st, idx) => {
              const isSelected = activeApproachStep === idx;
              return (
                <Reveal 
                  key={st.step} 
                  variant="up" 
                  delay={idx * 70}
                  className="flex"
                >
                  <div
                    onClick={() => setActiveApproachStep(idx)}
                    className={`p-5 rounded-2xl cursor-pointer transition-all duration-200 border flex flex-col justify-between w-full ${
                      isSelected
                        ? 'bg-[#003D2B] text-white border-[#003D2B] shadow-md -translate-y-1'
                        : 'bg-white hover:bg-[#EAEFE5] text-[#141912] border-[#D5E1CE]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded-full ${
                          isSelected ? 'bg-white/20 text-[#C6F56F]' : 'bg-[#E3EDE0] text-[#003D2B]'
                        }`}>
                          {st.step}
                        </span>
                        <i className={`${st.icon} text-sm ${isSelected ? 'text-[#C6F56F]' : 'text-[#8B7355]'}`} />
                      </div>
                      <h4 className="text-sm font-bold leading-tight">{st.title}</h4>
                      <div className={`text-[10px] font-semibold mt-0.5 ${isSelected ? 'text-white/70' : 'text-[#8B7355]'}`}>
                        {st.subtitle}
                      </div>
                      <p className={`text-xs mt-2 leading-relaxed ${isSelected ? 'text-white/85' : 'text-[#4E5B49]'}`}>
                        {st.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          6. WHY CHOOSE US & KEY TAKEAWAYS
          ========================================================================= */}
      <section className="py-16 sm:py-24 relative select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Reveal variant="up" className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3EDE0] border border-[#D5E1CE] shadow-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#003D2B] animate-pulse" />
              <span className="text-xs font-bold text-[#003D2B] tracking-tight">Competitive Advantage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-[800] tracking-[-0.03em] text-[#141912] leading-[1.15]">
              Why Choose Our Data Solutions?
            </h2>
            <p className="mt-2 text-[#4E5B49] text-xs sm:text-sm md:text-base">
              Engineered for high-availability data infrastructure without operational complexity or spiraling cloud bills.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_CHOOSE_US.map((item, idx) => (
              <Reveal 
                key={idx} 
                variant="up" 
                delay={(idx % 3) * 90}
                className="flex"
              >
                <div className="p-6 rounded-[24px] bg-white border border-[#D5E1CE] shadow-[0_4px_20px_rgba(20,25,18,0.04)] hover:shadow-[0_12px_28px_rgba(0,61,43,0.08)] transition-all w-full">
                  <div className="w-10 h-10 rounded-xl bg-[#E3EDE0] text-[#003D2B] flex items-center justify-center text-base mb-3">
                    <i className={item.icon} />
                  </div>
                  <h4 className="text-base font-bold text-[#141912] mb-1.5">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-[#4E5B49] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Key Takeaways Component */}
          <Reveal variant="scale" delay={250} className="mt-12 max-w-4xl mx-auto">
            <KeyTakeaways
              takeaways={[
                "End-to-End Modernization: Full transition to Microsoft Fabric OneLake & Azure Databricks.",
                "Medallion Standard: Strict Bronze, Silver, Gold curation ensures 100% data quality.",
                "DirectLake Analytics: Sub-second Power BI reporting directly from OneLake with zero replication.",
                "Governance Embedded: Centralized access control, masking, and automated lineage tracking."
              ]}
            />
          </Reveal>

        </div>
      </section>


      {/* =========================================================================
          7. HIGH-CONVERTING FINAL CTA
          ========================================================================= */}
      <section className="py-16 sm:py-24 relative overflow-hidden select-none">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <Reveal variant="scale" duration={700}>
            <div className="p-8 sm:p-14 rounded-[36px] bg-gradient-to-br from-[#003D2B] via-[#022D20] to-[#011F16] text-white border border-[#CCD8C3]/50 shadow-[0_24px_60px_rgba(0,61,43,0.35)] relative overflow-hidden">
              
              {/* Ambient blooms */}
              <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#C6F56F]/15 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#8B7355]/20 rounded-full blur-[80px] pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6F56F] animate-pulse" />
                <span>Let's Build Your Next-Generation Data Platform</span>
              </div>
              
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-[800] tracking-[-0.03em] text-white mt-1 max-w-2xl mx-auto leading-tight">
                Transform Your Data Infrastructure into a Business Advantage
              </h2>
              
              <p className="mt-4 text-xs sm:text-sm md:text-base text-white/80 max-w-xl mx-auto leading-relaxed">
                Whether migrating legacy data, building modern ETL pipelines, implementing a lakehouse, or modernizing your cloud infrastructure, we deliver scalable engineering solutions.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <Link
                  to="/company/contact-us"
                  className="px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-[#003D2B] bg-white hover:bg-[#EAEFE5] transition-all shadow-md hover:scale-105 active:scale-95 flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <span>Schedule Consultation</span>
                  <i className="fas fa-arrow-right text-xs" />
                </Link>

                <Link
                  to="/resources/case-studies"
                  className="px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-white/15 hover:bg-white/25 border border-white/30 transition-all w-full sm:w-auto hover:scale-105 active:scale-95"
                >
                  <span>View Case Studies</span>
                </Link>
              </div>

              <p className="mt-5 text-[11px] text-white/60 font-mono">
                Microsoft Fabric &bull; Azure Data Factory &bull; Databricks &bull; PySpark &bull; OneLake &bull; Delta Lake
              </p>

            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
};

export default DataSolutions;
