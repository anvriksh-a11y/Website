import React from 'react';

interface KeyTakeawaysProps {
    takeaways: string[];
}

const KeyTakeaways: React.FC<KeyTakeawaysProps> = ({ takeaways }) => {
    if (!takeaways || takeaways.length === 0) return null;

    return (
        <section className="py-12 my-12 relative overflow-hidden rounded-[2rem] border border-sky-500/20 bg-slate-900/40 p-8 shadow-[0_0_30px_rgba(14,165,233,0.1)] backdrop-blur-md" aria-label="Key Takeaways">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent"></div>
            
            <h3 className="text-3xl font-semibold mb-8 flex items-center gap-4 bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent tracking-tight">
                <i className="fas fa-bolt text-sky-400 text-2xl drop-shadow-[0_0_10px_rgba(14,165,233,0.5)]"></i>
                Key Takeaways
            </h3>
            <ul className="space-y-6">
                {takeaways.map((takeaway, index) => (
                    <li key={index} className="flex gap-5 group">
                        <div className="mt-1 w-6 h-6 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-sky-500/20 group-hover:border-sky-400 transition-all shadow-[0_0_10px_rgba(14,165,233,0)] group-hover:shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                            <i className="fas fa-check text-sky-400 text-xs"></i>
                        </div>
                        <span className="text-gray-300 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: takeaway }}></span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default KeyTakeaways;
