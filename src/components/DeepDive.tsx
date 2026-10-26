import { Link } from 'react-router-dom';

const DeepDive: React.FC = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-transparent to-gray-900/50">
            <div className="container mx-auto px-5 max-w-7xl">
                {/* Header */}
                <div className="mb-12">
                    <span className="inline-block px-4 py-1.5 bg-slate-800/50 border border-white/10 rounded-full text-slate-200 text-sm font-normal backdrop-blur-sm">
                        More Features
                    </span>
                </div>

                {/* Title and Buttons */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        <span className="text-white">Achieve Enterprise-Wide</span>
                        <br />
                        <span className="text-blue-400">Productivity With AI Agents</span>
                    </h2>
                    <div className="flex gap-4">
                        <Link to="/company/contact-us" className="px-6 py-3 bg-transparent hover:bg-white/5 text-white rounded-lg font-medium transition-colors border border-white/20">
                            Book a Demo
                        </Link>
                    </div>
                </div>

                {/* Features Grid Wrapper */}
                <div className="relative">
                    {/* Background Glow */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <img
                            src="/back.avif"
                            alt=""
                            className="w-full h-full object-cover opacity-100"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                        {/* LLM-Agnostic Framework */}
                        <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-colors">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-cog text-blue-400 text-xl"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-white">LLM-Agnostic Framework</h3>
                            </div>

                            {/* Dropdown/Select UI */}
                            <div className="bg-slate-950/80 border border-white/10 rounded-lg p-4 mb-6">
                                <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/10">
                                    <span className="text-gray-400 text-sm">Select</span>
                                    <i className="fas fa-chevron-down text-gray-400 text-xs"></i>
                                </div>
                                <div className="space-y-2 max-h-48 overflow-y-auto">
                                    {[
                                        'Google Gemini Pro 1.5 (0813)',
                                        'Google Gemini 1.5 Flash Experimental',
                                        'Google Gemini Flash 8B 1.5 Experimental',
                                        'Meta-Llama 3.2 11B Vision Instruct (free)',
                                        'Meta-Llama 3.2 1B Instruct (free)',
                                        'Meta-Llama 3.2 3B Instruct (free)',
                                        'Meta-Llama 3.1 8B Instruct (free)',
                                        'Meta-Llama 3.2 3B Instruct',
                                        'Meta-Llama 3.2 3B Instruct',
                                        'Google Gemini 1.5 Flash-8B'
                                    ].map((model, index) => (
                                        <div
                                            key={index}
                                            className="text-gray-300 text-sm py-2 px-3 hover:bg-white/5 rounded cursor-pointer transition-colors"
                                        >
                                            {model}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                Select different models for diverse functions to optimize AI performance throughout the entire implementation process.
                            </p>
                        </div>

                        {/* Session Monitoring */}
                        <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-colors">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-search text-blue-400 text-xl"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-white">Session Monitoring</h3>
                            </div>

                            {/* Session Monitoring UI */}
                            <div className="bg-slate-950/80 border border-white/10 rounded-lg p-4 mb-6 space-y-4">
                                {/* Request Complete Card */}
                                <div className="bg-slate-900/50 border border-white/10 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <i className="fas fa-check-circle text-green-400"></i>
                                            <span className="text-white text-sm font-medium">Request Complete</span>
                                        </div>
                                        <span className="text-gray-400 text-xs">Thinking</span>
                                    </div>
                                    <p className="text-gray-400 text-xs leading-relaxed mb-3">
                                        I'll analyze this incoming email request from Emily Johnson regarding checking account balance inquiry. Key points to consider:
                                    </p>
                                    <ol className="text-gray-400 text-xs space-y-1 ml-4 list-decimal mb-3">
                                        <li>This is a request for sensitive account information (balance inquiry)</li>
                                        <li>The email contains account number information needing in...</li>
                                        <li>We need to handle this with appropriate security protocols</li>
                                        <li>First, we should understand the type of request and analyze sentiment</li>
                                    </ol>
                                    <p className="text-gray-400 text-xs">
                                        Let's first classify the email and analyze its sentiment to determine how to handle this request appropriately.
                                    </p>
                                </div>

                                {/* Email Classification Agent Card */}
                                <div className="bg-slate-900/50 border border-white/10 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <i className="fas fa-check-circle text-green-400"></i>
                                            <span className="text-white text-sm font-medium">Request Complete</span>
                                        </div>
                                        <span className="text-gray-400 text-xs">Action</span>
                                    </div>
                                    <div className="bg-slate-950/80 border border-blue-500/30 rounded p-3 mb-2">
                                        <div className="flex items-center gap-2 mb-2">
                                            <i className="fas fa-envelope text-blue-400 text-xs"></i>
                                            <span className="text-blue-400 text-xs font-medium">Email Classification Agent</span>
                                            <i className="fas fa-check text-green-400 text-xs ml-auto"></i>
                                        </div>
                                        <div className="text-gray-400 text-xs font-mono">
                                            {`{"email": "Subject: Checking Account Balance Inquiry\\n\\nCould you please tell me my current checking account balance? Account ending in -1234.\\n\\nThank you for your assistance.\\n\\nRegards,\\nEmily Johnson"}`}
                                        </div>
                                    </div>
                                    <button className="text-gray-400 text-xs hover:text-white transition-colors flex items-center gap-1">
                                        View Content
                                        <i className="fas fa-chevron-down text-xs"></i>
                                    </button>
                                </div>
                            </div>


                            <p className="text-gray-400 leading-relaxed">
                                Gain deep insights by analyzing historical sessions, tracking LLM calls, control flows, and decision-making processes.
                            </p>
                        </div>

                        {/* Flexible Deployment Options */}
                        <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-colors">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-server text-blue-400 text-xl"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-white">Flexible Deployment Options</h3>
                            </div>

                            {/* Cloud Platforms Grid */}
                            <div className="bg-slate-950/80 border border-white/10 rounded-lg p-6 mb-6">
                                <div className="grid grid-cols-2 gap-4">
                                    {/* AWS */}
                                    <div className="bg-slate-900/50 border border-white/10 rounded-lg p-4 flex items-center gap-3 hover:border-blue-500/30 transition-colors">
                                        <div className="w-10 h-10 flex items-center justify-center">
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                                                alt="AWS"
                                                className="w-8 h-8 object-contain"
                                            />
                                        </div>
                                        <span className="text-gray-300 text-sm font-medium">Amazon AWS</span>
                                    </div>

                                    {/* Google Cloud */}
                                    <div className="bg-slate-900/50 border border-white/10 rounded-lg p-4 flex items-center gap-3 hover:border-blue-500/30 transition-colors">
                                        <div className="w-10 h-10 flex items-center justify-center">
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg"
                                                alt="Google Cloud"
                                                className="w-8 h-8 object-contain"
                                            />
                                        </div>
                                        <span className="text-gray-300 text-sm font-medium">Google Cloud</span>
                                    </div>

                                    {/* Microsoft Azure */}
                                    <div className="bg-slate-900/50 border border-white/10 rounded-lg p-4 flex items-center gap-3 hover:border-blue-500/30 transition-colors">
                                        <div className="w-10 h-10 flex items-center justify-center">
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg"
                                                alt="Microsoft Azure"
                                                className="w-8 h-8 object-contain"
                                            />
                                        </div>
                                        <span className="text-gray-300 text-sm font-medium">Microsoft Azure</span>
                                    </div>

                                    {/* Salesforce */}
                                    <div className="bg-slate-900/50 border border-white/10 rounded-lg p-4 flex items-center gap-3 hover:border-blue-500/30 transition-colors">
                                        <div className="w-10 h-10 flex items-center justify-center">
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
                                                alt="Salesforce"
                                                className="w-8 h-8 object-contain"
                                            />
                                        </div>
                                        <span className="text-gray-300 text-sm font-medium">Salesforce</span>
                                    </div>

                                    {/* Digital Ocean */}
                                    <div className="bg-slate-900/50 border border-white/10 rounded-lg p-4 flex items-center gap-3 hover:border-blue-500/30 transition-colors">
                                        <div className="w-10 h-10 flex items-center justify-center">
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/f/ff/DigitalOcean_logo.svg"
                                                alt="Digital Ocean"
                                                className="w-8 h-8 object-contain"
                                            />
                                        </div>
                                        <span className="text-gray-300 text-sm font-medium">Digital Ocean</span>
                                    </div>

                                    {/* Oracle Cloud */}
                                    <div className="bg-slate-900/50 border border-white/10 rounded-lg p-4 flex items-center gap-3 hover:border-blue-500/30 transition-colors">
                                        <div className="w-10 h-10 flex items-center justify-center">
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
                                                alt="Oracle Cloud"
                                                className="w-8 h-8 object-contain"
                                            />
                                        </div>
                                        <span className="text-gray-300 text-sm font-medium">Oracle Cloud</span>
                                    </div>
                                </div>
                            </div>


                            <p className="text-gray-400 leading-relaxed">
                                Deploy effortlessly across major cloud platforms (AWS, Azure, GCP, and more), within your own Virtual Private Cloud (VPC), or on-premise.
                            </p>
                        </div>

                        {/* PII Masking and Encryption */}
                        <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-colors">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-shield-alt text-blue-400 text-xl"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-white">PII Masking and Encryption</h3>
                            </div>

                            {/* Security Visualization */}
                            <div className="bg-slate-950/80 border border-white/10 rounded-lg p-6 mb-6">
                                <div className="flex items-center justify-center mb-4">
                                    <div className="relative">
                                        {/* Lock Icon */}
                                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/30 flex items-center justify-center">
                                            <i className="fas fa-lock text-blue-400 text-4xl"></i>
                                        </div>
                                        {/* Orbiting dots */}
                                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                                        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
                                    </div>
                                </div>

                                <div className="bg-slate-900/50 border border-white/10 rounded-lg p-4">
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        <span className="text-blue-400 font-mono">████-██-████</span> Social Security Number detected and masked
                                    </p>
                                    <p className="text-gray-400 text-sm leading-relaxed mt-2">
                                        <span className="text-blue-400 font-mono">████@████.com</span> Email address encrypted
                                    </p>
                                    <p className="text-gray-400 text-sm leading-relaxed mt-2">
                                        Credit card <span className="text-blue-400 font-mono">****-****-****-1234</span> protected
                                    </p>
                                </div>
                            </div>


                            <p className="text-gray-400 leading-relaxed">
                                Protect sensitive information with PII data masking and encryption techniques.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeepDive;
