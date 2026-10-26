import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
    return (
        <section className="py-24">
            <div className="container mx-auto px-5">
                <div className="bg-gradient-to-br from-slate-900/50 to-gray-900/80 border border-indigo-500/30 rounded-3xl p-16 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.2),transparent_70%)] pointer-events-none"></div>
                    <h2 className="text-4xl font-bold mb-4 relative z-10">Ready to Transform Your Workflow?</h2>
                    <p className="text-gray-400 text-xl mb-10 relative z-10">Partner with our technical team to engineer intelligent, scalable solutions for your business.</p>
                    <div className="flex justify-center gap-4 relative z-10">
                        <Link to="/company/contact-us" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-medium text-white bg-gradient-to-b from-slate-900/60 to-slate-900 border border-sky-500 shadow-[0_0_20px_rgba(14,165,233,0.4),inset_0_0_10px_rgba(14,165,233,0.2)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6),inset_0_0_15px_rgba(14,165,233,0.3)] hover:border-sky-400 hover:-translate-y-px transition-all">
                            Get Started Now
                        </Link>
                        <Link to="/company/contact-us" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
