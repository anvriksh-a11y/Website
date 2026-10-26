import React, { useState, useEffect, useRef } from 'react';

// Provider credentials removed from client bundle for security.
// Chat completions must be routed through a secure authenticated backend proxy.
const GROQ_API_KEY = "";

const SYSTEM_PROMPT = `
You are the official AI Assistant for ANVRiksh Tech Solutions LLP.
Website: https://anvriksh.com/
Founder & CEO: [[Raj Mange]]

### FORMATTING RULES:
1. NO SYMBOLS: Do not use symbols like *, -, or #.
2. NO BOLDING: Do not use **.
3. LINE BREAKS: Put every point on a new line.
4. NO FILLER: Avoid repetitive sentences. Provide direct, deep information.
5. HIGHLIGHTING: Use double square brackets [[ ]] around important product names and key phrases to highlight them in color.

### MAIN SOLUTIONS:
[[CRM Calling Agent]]: Autonomous voice AI for outbound sales, lead qualification, and real-time CRM updates.
[[LinkedIn Automation]]: Intelligent networking agent for prospecting and personalized lead nurturing.
[[WhatsApp Booking]]: 24/7 assistant that handles appointment scheduling and customer conversations.
[[Blockchain FTP]]: Secure decentralized protocol for immutable and encrypted file transfers.
[[Fake Video Analyzer]]: Advanced forensic AI for detecting deepfakes and manipulated video content.
[[Earthquake Prediction]]: Machine learning models that analyze seismic patterns for risk forecasting.
[[Business Web Builder]]: Professional agent that designs and deploys custom business sites instantly.
[[Agentic AI]]: Self-learning autonomous systems that execute complex enterprise workflows.
[[Generative AI]]: Custom transformer models tailored specifically to your business data.
[[Custom Development]]: Deep engineering of scalable, high-performance software and integrations.

### CONTACT & SUPPORT:
For more details, please visit https://anvriksh.com/
Or reach out to us:
Phone: +91 9980113561
Email: info@anvriksh.com

If you do not know an answer, provide the contact details above.
`;

interface Message {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

const AIChatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: 'Hi! I\'m the ANVRiksh AI Assistant. How can I help you explore our Agentic AI solutions today?' }
    ]);

    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');
        
        // Add user message to UI immediately
        const newMessages: Message[] = [...messages, { role: 'user', content: userMessage }];
        setMessages(newMessages);
        setIsLoading(true);

        try {
            console.log('Calling Groq API...');
            const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${GROQ_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'llama-3.3-70b-versatile', // Using a more robust model
                    messages: [
                        { role: 'system', content: SYSTEM_PROMPT },
                        ...newMessages.map(m => ({ role: m.role, content: m.content }))
                    ],
                    temperature: 0.7,
                    max_tokens: 1024,
                    stream: false
                })
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Groq API Error Response:', errorText);
                throw new Error(`API Error: ${response.status}`);
            }

            const data = await response.json();
            
            if (data.choices && data.choices[0] && data.choices[0].message) {
                const botMessage = data.choices[0].message.content;
                setMessages((prev: Message[]) => [...prev, { role: 'assistant', content: botMessage }]);
            } else {
                throw new Error('Invalid response format');
            }
        } catch (error: any) {
            console.error('Detailed Error:', error);
            
            let errorMessage = "I'm sorry, I'm having trouble connecting right now. This might be due to a technical limitation with direct browser requests (CORS).";
            
            if (error.message.includes('401')) errorMessage = "Invalid API Key. Please check the Groq API key.";
            if (error.message.includes('404')) errorMessage = "Model not found or API endpoint is incorrect.";
            if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
                errorMessage = "Network error or CORS issue detected. Groq API might be blocking direct browser requests for security.";
            }

            setMessages((prev: Message[]) => [...prev, { role: 'assistant', content: errorMessage + " Please try again or contact support if the issue persists." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-24 right-8 z-[60]">
            {/* Chat Window */}
            {isOpen && (
                <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fadeInUp">
                    {/* Header */}
                    <div className="p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                                <i className="fas fa-robot text-white"></i>
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-sm">ANVRiksh AI Assistant</h3>
                                <div className="flex items-center gap-1">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    <span className="text-gray-400 text-[10px]">Online & Ready</span>
                                </div>
                            </div>
                        </div>
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                        {messages.map((msg: Message, idx: number) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] p-3 rounded-2xl text-sm whitespace-pre-wrap ${
                                    msg.role === 'user' 
                                    ? 'bg-blue-600 text-white rounded-tr-none' 
                                    : 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-none'
                                }`}>
                                    {msg.content.split(/(\[\[.*?\]\])/g).map((part: string, i: number) => {
                                        if (part.startsWith('[[') && part.endsWith(']]')) {
                                            return <span key={i} className="text-blue-400 font-medium">{part.slice(2, -2)}</span>;
                                        }
                                        return part;
                                    })}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white/5 border border-white/10 p-3 rounded-2xl rounded-tl-none flex gap-1">
                                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-100"></span>
                                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-200"></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-white/10 bg-black/20">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask about our AI agents..."
                                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                            />
                            <button 
                                onClick={handleSend}
                                disabled={isLoading}
                                className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-500 transition-colors disabled:opacity-50"
                            >
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </div>
                        <p className="text-[10px] text-gray-500 mt-2 text-center">
                            Powered by ANVRiksh Agentic Framework
                        </p>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${
                    isOpen ? 'bg-slate-800 rotate-90' : 'bg-gradient-to-br from-blue-500 to-purple-600'
                } border border-white/20`}
                aria-label="Toggle AI Chat"
            >
                {isOpen ? (
                    <i className="fas fa-times text-white text-xl"></i>
                ) : (
                    <i className="fas fa-comment-dots text-white text-2xl"></i>
                )}
                
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-slate-900 rounded-full"></span>
                )}
            </button>

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default AIChatbot;
