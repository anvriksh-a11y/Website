import React, { useState } from 'react';
import Reveal from './Reveal';

export interface ToolItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  color: string;
  iconSvg: React.ReactNode;
}

export const TOOLS_LIST: ToolItem[] = [
  {
    id: 'fabric',
    name: 'Microsoft Fabric',
    tagline: 'All-in-One OneLake & Synapse Platform',
    category: 'Lakehouse SaaS',
    color: '#008272',
    iconSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <path d="M20 5L33 12.5V27.5L20 35L7 27.5V12.5L20 5Z" stroke="#00A389" strokeWidth="2.5" fill="#003D2B" />
        <path d="M20 5V35M7 12.5L33 27.5M7 27.5L33 12.5" stroke="#C6F56F" strokeWidth="1.5" strokeOpacity="0.8" />
        <circle cx="20" cy="20" r="4" fill="#C6F56F" />
      </svg>
    )
  },
  {
    id: 'databricks',
    name: 'Azure Databricks',
    tagline: 'Distributed PySpark, Delta Lake & MLflow',
    category: 'Distributed Compute',
    color: '#FF3621',
    iconSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <path d="M20 6L33 13.5L20 21L7 13.5L20 6Z" fill="#FF3621" />
        <path d="M7 17.5L20 25L33 17.5V22.5L20 30L7 22.5V17.5Z" fill="#FF3621" fillOpacity="0.85" />
        <path d="M7 26.5L20 34L33 26.5V30.5L20 38L7 30.5V26.5Z" fill="#FF3621" fillOpacity="0.65" />
      </svg>
    )
  },
  {
    id: 'azure',
    name: 'Microsoft Azure',
    tagline: 'ADLS Gen2, Azure Data Factory & Cloud VNet',
    category: 'Cloud Infrastructure',
    color: '#0078D4',
    iconSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <path d="M14 8L6 22H18L14 8Z" fill="#0078D4" />
        <path d="M15 8L24 24H12L20 34L34 34L15 8Z" fill="#50E6FF" />
        <path d="M22 24L18 34H34L22 24Z" fill="#0078D4" />
      </svg>
    )
  },
  {
    id: 'spark',
    name: 'Apache Spark',
    tagline: 'High-Concurrency In-Memory Processing',
    category: 'Big Data Engine',
    color: '#E25A1C',
    iconSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <path d="M20 5C20 5 15 13 18 19C16 17 14 14 14 14C11 18 10 23 12 28C14 33 19 36 24 35C30 34 34 28 32 22C30 16 25 14 25 14C27 18 25 21 23 22C23 17 20 5 20 5Z" fill="#E25A1C" />
      </svg>
    )
  },
  {
    id: 'delta',
    name: 'Delta Lake',
    tagline: 'Open-Source ACID Lakehouse Standard',
    category: 'Storage Format',
    color: '#00ADD8',
    iconSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <polygon points="20,6 34,32 6,32" stroke="#00ADD8" strokeWidth="2.5" fill="#002233" />
        <polygon points="20,15 28,30 12,30" fill="#00ADD8" />
      </svg>
    )
  },
  {
    id: 'snowflake',
    name: 'Snowflake',
    tagline: 'Multi-Cloud Elastic Data Warehouse',
    category: 'Data Warehouse',
    color: '#29B5E8',
    iconSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <path d="M20 6V34M6 20H34M10 10L30 30M10 30L30 10" stroke="#29B5E8" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="3.5" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    id: 'powerbi',
    name: 'Power BI DirectLake',
    tagline: 'Sub-Second Visual Reporting on OneLake',
    category: 'Analytics & BI',
    color: '#F2C811',
    iconSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <rect x="9" y="22" width="5" height="12" rx="1.5" fill="#F2C811" />
        <rect x="17.5" y="14" width="5" height="20" rx="1.5" fill="#F2C811" />
        <rect x="26" y="7" width="5" height="27" rx="1.5" fill="#F2C811" />
      </svg>
    )
  },
  {
    id: 'adf',
    name: 'Azure Data Factory',
    tagline: 'Serverless Orchestration & 100+ Connectors',
    category: 'ETL Pipelines',
    color: '#0078D4',
    iconSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <rect x="8" y="10" width="10" height="8" rx="2" stroke="#0078D4" strokeWidth="2" fill="#0E2333" />
        <rect x="22" y="22" width="10" height="8" rx="2" stroke="#0078D4" strokeWidth="2" fill="#0E2333" />
        <path d="M18 14H24C26 14 27 15 27 17V22" stroke="#50E6FF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="27" cy="18" r="2" fill="#C6F56F" />
      </svg>
    )
  },
  {
    id: 'pyspark',
    name: 'PySpark & Python',
    tagline: 'Distributed DataFrames & Custom Algorithms',
    category: 'Transformation Engine',
    color: '#3776AB',
    iconSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <path d="M19 8C13 8 11 11 11 14V17H19V18H9C6 18 4 21 4 25C4 29 7 32 11 32H13V28C13 25 15 23 18 23H24V18C24 12 22 8 19 8Z" fill="#3776AB" />
        <path d="M21 32C27 32 29 29 29 26V23H21V22H31C34 22 36 19 36 15C36 11 33 8 29 8H27V12C27 15 25 17 22 17H16V22C16 28 18 32 21 32Z" fill="#FFD43B" />
      </svg>
    )
  },
  {
    id: 'kafka',
    name: 'Apache Kafka',
    tagline: 'Millions of Events/sec Real-Time Ingestion',
    category: 'Streaming Backbone',
    color: '#231F20',
    iconSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <circle cx="12" cy="20" r="5" stroke="#FFFFFF" strokeWidth="2" fill="#231F20" />
        <circle cx="28" cy="12" r="4" stroke="#FFFFFF" strokeWidth="2" fill="#231F20" />
        <circle cx="28" cy="28" r="4" stroke="#FFFFFF" strokeWidth="2" fill="#231F20" />
        <path d="M17 18L24 14M17 22L24 26" stroke="#C6F56F" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: 'onelake',
    name: 'OneLake',
    tagline: 'Zero-Copy Shortcuts & Unified Security',
    category: 'Enterprise Storage',
    color: '#0078D4',
    iconSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <circle cx="20" cy="20" r="14" stroke="#0078D4" strokeWidth="2.5" fill="#0B1A24" />
        <ellipse cx="20" cy="20" rx="14" ry="6" stroke="#50E6FF" strokeWidth="1.5" />
        <ellipse cx="20" cy="20" rx="6" ry="14" stroke="#50E6FF" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    id: 'adls',
    name: 'ADLS Gen2',
    category: 'Data Lake Store',
    tagline: 'Hierarchical Namespace Object Storage',
    color: '#0078D4',
    iconSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <ellipse cx="20" cy="12" rx="12" ry="5" stroke="#0078D4" strokeWidth="2" fill="#0E2333" />
        <path d="M8 12V20C8 22.8 13.4 25 20 25C26.6 25 32 22.8 32 20V12" stroke="#0078D4" strokeWidth="2" fill="#0E2333" />
        <path d="M8 20V28C8 30.8 13.4 33 20 33C26.6 33 32 30.8 32 28V20" stroke="#0078D4" strokeWidth="2" fill="#0E2333" />
      </svg>
    )
  },
  {
    id: 'sql',
    name: 'Azure SQL & SQL Server',
    tagline: 'High-Performance Relational OLTP Core',
    category: 'Relational DB',
    color: '#CC292B',
    iconSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <ellipse cx="20" cy="11" rx="11" ry="4" stroke="#CC292B" strokeWidth="2" fill="#240B0C" />
        <path d="M9 11V29C9 31.2 13.9 33 20 33C26.1 33 31 31.2 31 29V11" stroke="#CC292B" strokeWidth="2" fill="#240B0C" />
      </svg>
    )
  },
  {
    id: 'mlflow',
    name: 'MLflow & AI Ops',
    tagline: 'Automated Experiment Tracking & Model Registry',
    category: 'Machine Learning',
    color: '#0194E2',
    iconSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <circle cx="14" cy="14" r="4" stroke="#0194E2" strokeWidth="2" fill="#0A1E2B" />
        <circle cx="26" cy="14" r="4" stroke="#0194E2" strokeWidth="2" fill="#0A1E2B" />
        <circle cx="20" cy="26" r="4" stroke="#0194E2" strokeWidth="2" fill="#0A1E2B" />
        <path d="M14 18L20 22L26 18" stroke="#50E6FF" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    id: 'dlt',
    name: 'Delta Live Tables',
    tagline: 'Declarative ETL & Quality Assertions',
    category: 'Pipeline Framework',
    color: '#00ADD8',
    iconSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <rect x="8" y="10" width="24" height="6" rx="2" fill="#00ADD8" />
        <rect x="8" y="18" width="24" height="6" rx="2" fill="#0078D4" />
        <rect x="8" y="26" width="24" height="6" rx="2" fill="#003D2B" stroke="#C6F56F" strokeWidth="1" />
      </svg>
    )
  },
  {
    id: 'unity',
    name: 'Unity Catalog',
    tagline: 'Unified Data & AI Governance & Lineage',
    category: 'Governance & Security',
    color: '#003D2B',
    iconSvg: (
      <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
        <path d="M20 6L32 11V21C32 28 26.8 33.5 20 35C13.2 33.5 8 28 8 21V11L20 6Z" stroke="#C6F56F" strokeWidth="2" fill="#0B2117" />
        <path d="M16 20L19 23L25 17" stroke="#C6F56F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

// Exact coordinates from original SVG layout along radius = 699.5, center = (740, 744)
export const CIRCLE_NODE_COORDINATES = [
  { x: 704, y: 4 },    // 0: Fabric (Top center)
  { x: 885, y: 32 },   // 1: Databricks
  { x: 1055, y: 102 }, // 2: Azure
  { x: 1201, y: 213 }, // 3: Spark
  { x: 1315, y: 358 }, // 4: Delta
  { x: 1379, y: 528 }, // 5: Snowflake
  { x: 1408, y: 708 }, // 6: Power BI
  { x: 1379, y: 888 }, // 7: ADF
  { x: 1315, y: 1060 },// 8: PySpark
  { x: 1197, y: 1203 },// 9: Kafka
  { x: 1053, y: 1312 },// 10: OneLake
  { x: 887, y: 1387 }, // 11: ADLS
  { x: 704, y: 1408 }, // 12: SQL
  { x: 521, y: 1380 }, // 13: MLflow
  { x: 355, y: 1314 }, // 14: DLT
  { x: 209, y: 1203 }, // 15: Unity
  { x: 97, y: 1058 },  // 16
  { x: 33, y: 890 },   // 17
  { x: 4, y: 702 },    // 18
  { x: 33, y: 528 },   // 19
  { x: 97, y: 358 },   // 20
  { x: 209, y: 213 },  // 21
  { x: 355, y: 101 },  // 22
  { x: 523, y: 36 }    // 23
];

const ORBIT_CENTER = { x: 740, y: 744 };
const ORBIT_RADIUS = 699.5;

// Even spacing keeps a logo on the visible arc. The fixed coordinate list
// clusters every tool on one side, so the open gap rotates into view.
function orbitNodePosition(index: number, count: number) {
  const angle = -Math.PI / 2 + (index / count) * Math.PI * 2;
  return {
    x: ORBIT_CENTER.x + ORBIT_RADIUS * Math.cos(angle) - 36,
    y: ORBIT_CENTER.y + ORBIT_RADIUS * Math.sin(angle) - 36,
  };
}

const ToolIntegrationOrbit: React.FC = () => {
  const [activeTool, setActiveTool] = useState<ToolItem>(TOOLS_LIST[1]); // Azure Databricks default
  const [isRotating, setIsRotating] = useState(true);

  const selectTool = (tool: ToolItem) => {
    setActiveTool(tool);
  };

  return (
    <section 
      aria-label="Tool & API Integration Showcase"
      className="py-16 sm:py-20 lg:py-24 relative select-none bg-[#F4F7EE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal variant="up" className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3EDE0] border border-[#D5E1CE] shadow-xs mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#003D2B] animate-pulse" />
            <span className="text-xs font-bold text-[#003D2B] tracking-tight uppercase">
              Integration &amp; Ecosystem
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-[800] tracking-[-0.03em] text-[#141912] leading-[1.15]">
            Seamless Tool <span className="font-serif italic font-normal text-[#8B7355]">Integration</span>
          </h2>
          <p className="mt-2 text-[#4E5B49] text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
            Easily connect <strong className="text-[#003D2B]">Databricks</strong>, <strong className="text-[#003D2B]">Microsoft Azure</strong>, and <strong className="text-[#003D2B]">Microsoft Fabric</strong> with Snowflake, Apache Spark, and OneLake into one synchronized data engine.
          </p>
        </Reveal>

        {/* =========================================================================
            BENTO GRID ROW: Featuring the EXACT CARD from Image 2 (API Integration)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* =======================================================================
              CARD 1: EXACT MATCH TO USER'S 2ND IMAGE (API Integration Arc Card)
              ======================================================================= */}
          <Reveal 
            variant="left" 
            duration={700}
            className="lg:col-span-7 flex"
          >
            <div 
              className="relative w-full h-[370px] sm:h-[420px] lg:h-[450px] overflow-hidden rounded-[32px] sm:rounded-[40px] bg-white p-7 sm:p-9 md:p-[42px] border border-[#D5E1CE] shadow-[0_10px_32px_rgba(20,25,18,0.05)] flex flex-col justify-between"
              onMouseEnter={() => setIsRotating(false)}
              onMouseLeave={() => setIsRotating(true)}
            >
              
              {/* Card Header + platform filters, kept together so the chips sit under the title */}
              <div className="relative z-20">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl sm:text-2xl md:text-[26px] font-[700] text-[#141912] tracking-tight">
                    Data platforms
                  </h3>
                  
                  {/* Subtle active badge */}
                  <span 
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white uppercase tracking-wider transition-all"
                    style={{ backgroundColor: activeTool.color }}
                  >
                    {activeTool.name}
                  </span>
                </div>
                
                <p className="mt-1 text-xs sm:text-sm text-[#4E5B49] max-w-[340px] leading-relaxed">
                  Connect Databricks, Azure, and Fabric with your tools and automate modern data workflows.
                </p>

                <div className="flex flex-wrap items-center gap-1.5 pt-3">
                  {[
                    { id: 'databricks', label: 'Databricks', color: '#FF3621' },
                    { id: 'azure', label: 'Azure', color: '#0078D4' },
                    { id: 'fabric', label: 'Fabric', color: '#008272' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        const t = TOOLS_LIST.find((x) => x.id === item.id);
                        if (t) selectTool(t);
                      }}
                      className={`px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 transition-all ${
                        activeTool.id === item.id
                          ? 'bg-[#003D2B] text-white shadow-xs'
                          : 'bg-[#F4F7EE] hover:bg-[#EAEFE5] text-[#4E5B49] border border-[#D5E1CE]'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* ===================================================================
                  LOGO CIRCLE ARC: Exact placement and SVG from Image 2
                  =================================================================== */}
              <div className="absolute top-[168px] sm:top-[160px] md:top-[152px] left-1/2 -z-0 -translate-x-1/2 pointer-events-auto">
                <div className="w-[1050px] sm:w-[1250px] md:w-[1350px]">
                  <svg
                    className="w-full h-auto"
                    viewBox="0 0 1484 1484"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <style>{`
                      .ref-ring {
                        stroke: #F4EFE7;
                        stroke-width: 1.5;
                      }
                      .ref-node-bg {
                        fill: #0D1017;
                        stroke: #F4EFE7;
                        stroke-width: 8;
                        cursor: pointer;
                        transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);
                      }
                      .ref-node-bg:hover {
                        stroke: #C6F56F;
                        fill: #003D2B;
                      }
                      @keyframes orbit-spin {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                      }
                      @keyframes orbit-counter {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(-360deg); }
                      }
                      .orbit-spin {
                        transform-origin: 740px 744px;
                        animation: orbit-spin 90s linear infinite;
                      }
                      .orbit-counter {
                        transform-origin: 36px 36px;
                        animation: orbit-counter 90s linear infinite;
                      }
                      .orbit-paused {
                        animation-play-state: paused;
                      }
                    `}</style>

                    {/* Rotating Group around center (740, 744) */}
                    <g className={`orbit-spin${isRotating ? '' : ' orbit-paused'}`}>
                      {/* Gentle reference circular ring line */}
                      <circle className="ref-ring" cx="740" cy="744" r="699.5" />

                      {/* Tool nodes passing along the arc */}
                      {TOOLS_LIST.map((tool, idx) => {
                        const pos = orbitNodePosition(idx, TOOLS_LIST.length);
                        const isSelected = activeTool.id === tool.id;

                        return (
                          <g
                            key={tool.id}
                            transform={`translate(${pos.x} ${pos.y})`}
                            onClick={() => selectTool(tool)}
                          >
                            {/* Counter-rotate each icon so it stays upright as it orbits */}
                            <g className={`orbit-counter${isRotating ? '' : ' orbit-paused'}`}>
                              {/* Pulsing ring around active node */}
                              {isSelected && (
                                <circle
                                  cx="36"
                                  cy="36"
                                  r="40"
                                  stroke={tool.color}
                                  strokeWidth="2.5"
                                  strokeDasharray="4 3"
                                  fill="none"
                                />
                              )}

                              {/* Exact Node Circle styling from 2nd Image:
                                  fill: #0d1017; stroke: #f4efe7; stroke-width: 8 */}
                              <circle
                                className="ref-node-bg"
                                cx="36"
                                cy="36"
                                r="32"
                                style={{
                                  stroke: isSelected ? '#C6F56F' : '#F4EFE7',
                                  fill: isSelected ? '#003D2B' : '#0D1017',
                                }}
                              />

                              {/* Centered Tool Icon */}
                              <foreignObject x="18" y="18" width="36" height="36" className="pointer-events-none">
                                <div className="w-full h-full flex items-center justify-center">
                                  {tool.iconSvg}
                                </div>
                              </foreignObject>
                            </g>
                          </g>
                        );
                      })}
                    </g>
                  </svg>
                </div>
              </div>

              {/* Bottom Info Strip for hovered/selected tool */}
              <div className="relative z-20 pt-2 border-t border-[#D5E1CE]/50 flex items-center justify-between text-xs text-[#4E5B49]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeTool.color }} />
                  <span className="font-bold text-[#141912]">{activeTool.name}</span>
                  <span className="hidden sm:inline text-[#616E7C]">&bull; {activeTool.tagline}</span>
                </div>
                <span className="font-mono text-[10px] text-[#8B7355] bg-[#F4F7EE] px-2 py-0.5 rounded border border-[#D5E1CE]">
                  {activeTool.category}
                </span>
              </div>

            </div>
          </Reveal>

          {/* =======================================================================
              CARD 2: UNIFIED LAKEHOUSE STREAM & AUTOMATION COMPANION CARD
              ======================================================================= */}
          <Reveal 
            variant="right" 
            duration={700}
            delay={150}
            className="lg:col-span-5 flex"
          >
            <div className="relative w-full h-[370px] sm:h-[420px] lg:h-[450px] overflow-hidden rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-[#003D2B] via-[#022D20] to-[#011C14] text-white p-7 sm:p-9 md:p-[42px] border border-[#2D452C] shadow-[0_12px_36px_rgba(0,61,43,0.18)] flex flex-col justify-between">
              
              {/* Top ambient glow */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#C6F56F]/15 rounded-full blur-[60px] pointer-events-none" />

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#C6F56F] text-[11px] font-semibold mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6F56F] animate-ping" />
                  <span>Real-Time Lakehouse Engine</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-[800] text-white tracking-tight">
                  Unified Cloud Pipeline
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-white/75 leading-relaxed">
                  Automate raw ingestion, medallion transformations, and direct semantic publishing across multi-cloud infrastructure.
                </p>
              </div>

              {/* Active Pipeline Metrics */}
              <div className="space-y-2.5 my-auto">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#FF3621]/20 text-[#FF3621] flex items-center justify-center text-xs">
                      <i className="fas fa-fire" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Azure Databricks Spark</div>
                      <div className="text-[10px] text-white/60">Photon Vectorized Cluster</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#C6F56F]">10x Faster</span>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#008272]/20 text-[#C6F56F] flex items-center justify-center text-xs">
                      <i className="fas fa-cubes" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Fabric OneLake</div>
                      <div className="text-[10px] text-white/60">Zero-Copy Shortcuts</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#50E6FF]">Zero Duplication</span>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#F2C811]/20 text-[#F2C811] flex items-center justify-center text-xs">
                      <i className="fas fa-bolt" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Power BI DirectLake</div>
                      <div className="text-[10px] text-white/60">Sub-Second Semantic Query</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#F2C811]">Sub-Second</span>
                </div>
              </div>

              {/* Bottom Action Link */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-white/60">DREAM Lab Standard</span>
                <a
                  href="#architecture-showcase"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C6F56F] hover:text-white transition-colors"
                >
                  <span>Explore Blueprint</span>
                  <i className="fas fa-arrow-right text-[10px]" />
                </a>
              </div>

            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};

export default ToolIntegrationOrbit;
