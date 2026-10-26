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
        <section className="py-24 bg-[#030712] overflow-hidden">
            <div className="container mx-auto px-5 mb-16 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                    <div className="max-w-2xl">
                        <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm font-medium mb-6">
                            More Use Cases
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            AI Agents Built for <br />
                            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Enterprise Brilliance</span>
                        </h2>
                    </div>
                    <div className="max-w-xl text-gray-400 text-lg leading-relaxed">
                        <p className="mb-6">
                            Businesses are crippled with high operational costs, decreasing employee productivity, operational challenges, poor customer experience, mediocre data utilization, security vulnerabilities, and limited scalability.
                        </p>
                        <p>
                            Transform your enterprise challenges into stories of efficiency, accuracy, and success with AI agents.
                        </p>
                    </div>
                </div>
            </div>

            {/* Marquee Rows */}
            <div className="relative w-full">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10"></div>

                {/* Row 1 */}
                <div className="flex gap-6 mb-6 animate-marquee whitespace-nowrap">
                    {[...useCases, ...useCases].map((item, index) => (
                        <div
                            key={`row1-${index}`}
                            className="inline-block w-[400px] bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors whitespace-normal flex-shrink-0"
                        >
                            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Row 2 (Reverse) */}
                <div className="flex gap-6 animate-marquee-reverse whitespace-nowrap">
                    {[...useCases.reverse(), ...useCases].map((item, index) => (
                        <div
                            key={`row2-${index}`}
                            className="inline-block w-[400px] bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors whitespace-normal flex-shrink-0"
                        >
                            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
