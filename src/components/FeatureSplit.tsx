import React from 'react';

interface FeatureSplitProps {
    title: string;
    description: string;
    imageSrc?: string;
    reversed?: boolean;
    children?: React.ReactNode;
}

const FeatureSplit: React.FC<FeatureSplitProps> = ({ title, description, imageSrc, reversed = false, children }) => {
    return (
        <section className="py-24 border-b border-white/5">
            <div className="container mx-auto px-5 max-w-7xl">
                <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{title}</h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">{description}</p>
                        {children}
                    </div>
                    <div className="flex-1 w-full">
                        <div className="relative rounded-2xl border border-white/10 bg-slate-900/50 p-2 shadow-2xl overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            {imageSrc ? (
                                <img src={imageSrc} alt={title} className="w-full h-auto rounded-xl relative z-10" />
                            ) : (
                                // Fallback placeholder UI if no image provided
                                <div className="w-full aspect-video bg-slate-950 rounded-xl relative z-10 flex items-center justify-center border border-white/5">
                                    <div className="text-center">
                                        <i className="fas fa-chart-line text-5xl text-indigo-500/30 mb-4"></i>
                                        <p className="text-gray-600 font-mono text-sm">UI Preview: {title}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSplit;
