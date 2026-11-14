import React from 'react';

const UseCases: React.FC = () => {
    const useCases = [
        {
            title: "Knowledge Management Agent",
            description: "Centralizes and retrieves relevant information instantly, empowering agents to resolve issues quickly."
        },
        {
            title: "Campaign Performance Agent",
            description: "Consolidates data and delivers actionable insights instantly, optimizing campaign ROI."
        },
        {
            title: "Contract Management Agent",
            description: "Automates contract tracking, renewal reminders, and approval workflows, reducing administrative workload and preventing missed deadlines."
        },
        {
            title: "Customer Feedback Analysis Agent",
            description: "Automatically categorizes and analyzes customer feedback, providing actionable insights for improving products and services."
        },
        {
            title: "Response Time Optimization Agent",
            description: "Handles initial inquiries and escalates complex issues to human agents, ensuring faster response times and improved customer satisfaction."
        },
        {
            title: "Policy Management Agent",
            description: "Monitors changes, updates policies, and generates compliance reports automatically."
        },
        {
            title: "AI Sales Assistance",
            description: "Analyze customer interactions, suggest the best outreach strategies, and provide data-driven recommendations to close more deals efficiently."
        }
    ];

    return (
        <section className="py-20 sm:py-28 bg-[#F4F7EE] overflow-hidden relative select-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <div className="absolute -top-24 left-1/3 w-[560px] h-[280px] rounded-full pointer-events-none opacity-40" style={{ background: 'radial-gradient(ellipse at center, #E3EDE0 0%, transparent 70%)', filter: 'blur(56px)' }} />
            <div className="container mx-auto px-5 mb-14 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] shadow-xs mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2D452C] animate-pulse" />
                            <span className="text-[12px] sm:text-[13px] font-semibold text-[#2D452C] tracking-tight">More Use Cases</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-[800] text-[#141912] leading-[1.08] tracking-[-0.035em]">
                            AI Agents Built for <br />
                            <span className="text-[#003D2B]">Enterprise Brilliance</span>
                        </h2>
                    </div>
                    <div className="max-w-xl text-[#4E5B49] text-base sm:text-lg leading-relaxed">
                        <p className="mb-4">
                            Businesses are crippled with high operational costs, manual bottlenecks, poor customer response times, and limited scalability.
                        </p>
                        <p>
                            Transform your enterprise workflows into stories of efficiency, speed, and precision with custom autonomous AI agents.
                        </p>
                    </div>
                </div>
            </div>

            {/* Marquee Rows */}
            <div className="relative w-full">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F4F7EE] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F4F7EE] to-transparent z-10 pointer-events-none"></div>

                {/* Row 1 */}
                <div className="flex gap-5 mb-5 animate-marquee whitespace-nowrap py-1">
                    {[...useCases, ...useCases].map((item, index) => (
                        <div
                            key={`row1-${index}`}
                            className="inline-block w-[360px] bg-white border border-[#D5E1CE] shadow-[0_4px_16px_rgba(21,24,17,0.04)] rounded-[22px] p-7 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,61,43,0.12)] transition-all duration-300 whitespace-normal flex-shrink-0"
                        >
                            <div className="w-9 h-9 rounded-xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center mb-4">
                                <i className="fas fa-sparkles text-[#003D2B] text-xs" />
                            </div>
                            <h3 className="text-base font-[800] text-[#141912] mb-2 tracking-tight">{item.title}</h3>
                            <p className="text-[#4E5B49] leading-relaxed text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Row 2 (Reverse) */}
                <div className="flex gap-5 animate-marquee-reverse whitespace-nowrap py-1">
                    {[...useCases.slice().reverse(), ...useCases].map((item, index) => (
                        <div
                            key={`row2-${index}`}
                            className="inline-block w-[360px] bg-white border border-[#D5E1CE] shadow-[0_4px_16px_rgba(21,24,17,0.04)] rounded-[22px] p-7 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,61,43,0.12)] transition-all duration-300 whitespace-normal flex-shrink-0"
                        >
                            <div className="w-9 h-9 rounded-xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center mb-4">
                                <i className="fas fa-bolt text-[#003D2B] text-xs" />
                            </div>
                            <h3 className="text-base font-[800] text-[#141912] mb-2 tracking-tight">{item.title}</h3>
                            <p className="text-[#4E5B49] leading-relaxed text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
