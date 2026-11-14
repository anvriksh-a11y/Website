import { Link } from 'react-router-dom';
import Reveal from './Reveal';

const DeepDive: React.FC = () => {
    return (
        <section className="py-20 sm:py-28 bg-[#F4F7EE] relative overflow-hidden select-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <div className="absolute top-0 right-0 w-[480px] h-[320px] rounded-full pointer-events-none opacity-40" style={{ background: 'radial-gradient(circle, #E3EDE0 0%, transparent 70%)', filter: 'blur(60px)' }} />
            <div className="container mx-auto px-5 max-w-7xl relative z-10">
                {/* Header */}
                <Reveal variant="up" duration={700}>
                    <div className="mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] shadow-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2D452C] animate-pulse" />
                            <span className="text-[12px] sm:text-[13px] font-semibold text-[#2D452C] tracking-tight">More Features</span>
                        </span>
                    </div>
                    {/* Title and Buttons */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 sm:mb-16 gap-6">
                        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-[800] leading-[1.08] text-[#141912] tracking-[-0.035em]">
                            Achieve Enterprise-Wide
                            <br />
                            <span className="text-[#003D2B]">Productivity With AI Agents</span>
                        </h2>
                        <div className="flex gap-3.5 shrink-0">
                            <Link to="/company/contact-us" className="px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#003D2B] hover:bg-[#022D20] shadow-[0_12px_28px_rgba(0,61,43,0.30)] hover:shadow-[0_16px_36px_rgba(0,61,43,0.40)] hover:scale-105 active:scale-100 transition-all">
                                Book a Demo
                            </Link>
                        </div>
                    </div>
                </Reveal>

                {/* Features Grid Wrapper */}
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 relative z-10">
                        {/* LLM-Agnostic Framework */}
                        <div className="bg-white border border-[#D5E1CE] shadow-[0_4px_16px_rgba(21,24,17,0.04)] hover:shadow-[0_16px_36px_rgba(0,61,43,0.10)] rounded-[22px] p-7 sm:p-8 transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-cog text-[#003D2B] text-xl"></i>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-[800] text-[#141912] tracking-tight">LLM-Agnostic Framework</h3>
                            </div>

                            {/* Dropdown/Select UI */}
                            <div className="bg-[#F4F7EE] border border-[#D5E1CE] rounded-xl p-4 mb-6">
                                <div className="flex items-center justify-between mb-3 pb-3 border-b border-[#D5E1CE]">
                                    <span className="text-[#4E5B49] text-xs font-semibold uppercase tracking-wider">Select AI Model</span>
                                    <i className="fas fa-chevron-down text-[#4E5B49] text-xs"></i>
                                </div>
                                <div className="space-y-1.5 max-h-48 overflow-y-auto">
                                    {[
                                        'Google Gemini 2.0 Flash / Pro',
                                        'OpenAI GPT-4o & GPT-4o-mini',
                                        'Anthropic Claude 3.5 Sonnet',
                                        'Meta-Llama 3.3 70B Instruct',
                                        'Mistral Large 2',
                                        'Custom Fine-Tuned Domain Models'
                                    ].map((model, index) => (
                                        <div
                                            key={index}
                                            className="text-[#141912] text-xs sm:text-sm py-2 px-3 hover:bg-white rounded-lg cursor-pointer transition-colors font-medium flex items-center justify-between"
                                        >
                                            <span>{model}</span>
                                            {index === 0 && <span className="w-2 h-2 rounded-full bg-[#003D2B]" />}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <p className="text-[#4E5B49] leading-relaxed text-sm">
                                Select different models for diverse functions to optimize AI performance throughout the entire implementation process.
                            </p>
                        </div>

                        {/* Session Monitoring */}
                        <div className="bg-white border border-[#D5E1CE] shadow-[0_4px_16px_rgba(21,24,17,0.04)] hover:shadow-[0_16px_36px_rgba(0,61,43,0.10)] rounded-[22px] p-7 sm:p-8 transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-search text-[#003D2B] text-xl"></i>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-[800] text-[#141912] tracking-tight">Session Monitoring</h3>
                            </div>

                            {/* Session Monitoring UI */}
                            <div className="bg-[#F4F7EE] border border-[#D5E1CE] rounded-xl p-4 mb-6 space-y-3">
                                <div className="bg-white border border-[#D5E1CE] rounded-lg p-3.5 shadow-xs">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <i className="fas fa-check-circle text-[#003D2B] text-xs"></i>
                                            <span className="text-[#141912] text-xs font-bold">Request Complete</span>
                                        </div>
                                        <span className="text-[#2D452C] bg-[#E3EDE0] text-[10px] font-semibold px-2 py-0.5 rounded-full">Thinking</span>
                                    </div>
                                    <p className="text-[#4E5B49] text-xs leading-relaxed">
                                        Analyzing incoming customer intent, extracting key entities, and routing to specialized agent flow.
                                    </p>
                                </div>

                                <div className="bg-white border border-[#D5E1CE] rounded-lg p-3.5 shadow-xs">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <i className="fas fa-envelope text-[#003D2B] text-xs"></i>
                                            <span className="text-[#141912] text-xs font-bold">Classification Agent</span>
                                        </div>
                                        <span className="text-[#2D452C] bg-[#E3EDE0] text-[10px] font-semibold px-2 py-0.5 rounded-full">Action</span>
                                    </div>
                                    <div className="text-[#4E5B49] text-xs font-mono bg-[#F4F7EE] p-2 rounded border border-[#D5E1CE]">
                                        {`{"status": "classified", "urgency": "high", "routing": "sales"}`}
                                    </div>
                                </div>
                            </div>

                            <p className="text-[#4E5B49] leading-relaxed text-sm">
                                Gain deep insights by analyzing historical sessions, tracking LLM calls, control flows, and decision-making processes.
                            </p>
                        </div>

                        {/* Flexible Deployment Options */}
                        <div className="bg-white border border-[#D5E1CE] shadow-[0_4px_16px_rgba(21,24,17,0.04)] hover:shadow-[0_16px_36px_rgba(0,61,43,0.10)] rounded-[22px] p-7 sm:p-8 transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-server text-[#003D2B] text-xl"></i>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-[800] text-[#141912] tracking-tight">Flexible Deployment Options</h3>
                            </div>

                            <div className="bg-[#F4F7EE] border border-[#D5E1CE] rounded-xl p-5 mb-6">
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        { name: 'Amazon AWS', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
                                        { name: 'Google Cloud', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' },
                                        { name: 'Microsoft Azure', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg' },
                                        { name: 'Private VPC', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' }
                                    ].map((platform, idx) => (
                                        <div key={idx} className="bg-white border border-[#D5E1CE] rounded-lg p-3 flex items-center gap-3 shadow-xs">
                                            <img src={platform.icon} alt={platform.name} className="w-6 h-6 object-contain" />
                                            <span className="text-[#141912] text-xs font-semibold">{platform.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="text-[#4E5B49] leading-relaxed text-sm">
                                Deploy effortlessly across major cloud platforms, within your own Virtual Private Cloud (VPC), or on-premise with zero vendor lock-in.
                            </p>
                        </div>

                        {/* PII Masking and Encryption */}
                        <div className="bg-white border border-[#D5E1CE] shadow-[0_4px_16px_rgba(21,24,17,0.04)] hover:shadow-[0_16px_36px_rgba(0,61,43,0.10)] rounded-[22px] p-7 sm:p-8 transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-shield-alt text-[#003D2B] text-xl"></i>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-[800] text-[#141912] tracking-tight">PII Masking & Encryption</h3>
                            </div>

                            <div className="bg-[#F4F7EE] border border-[#D5E1CE] rounded-xl p-5 mb-6">
                                <div className="space-y-2.5">
                                    <div className="bg-white border border-[#D5E1CE] rounded-lg p-3 shadow-xs text-xs text-[#141912]">
                                        <span className="text-[#003D2B] font-mono font-bold">████-██-████</span> Identity data sanitized
                                    </div>
                                    <div className="bg-white border border-[#D5E1CE] rounded-lg p-3 shadow-xs text-xs text-[#141912]">
                                        <span className="text-[#003D2B] font-mono font-bold">████@████.com</span> Email encrypted via AES-256
                                    </div>
                                    <div className="bg-white border border-[#D5E1CE] rounded-lg p-3 shadow-xs text-xs text-[#141912]">
                                        Payment info <span className="text-[#003D2B] font-mono font-bold">****-****-****-1234</span> tokenized
                                    </div>
                                </div>
                            </div>

                            <p className="text-[#4E5B49] leading-relaxed text-sm">
                                Protect enterprise and customer information with automated PII masking, tokenization, and SOC2-compliant encryption.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeepDive;
