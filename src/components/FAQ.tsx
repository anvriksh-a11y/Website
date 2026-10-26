import React, { useState, useEffect } from 'react';

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        { question: "How do AI Agents work?", answer: "AI Agents are autonomous programs that can perceive their environment, reason about it, and take actions to achieve specific goals. They use LLMs to understand instructions and various tools to execute tasks." },
        { question: "Do I need coding knowledge?", answer: "No! Our platform offers a no-code builder for creating simple agents. However, for advanced customizations and complex workflows, we provide a robust SDK for developers." },
        { question: "Is my data secure?", answer: "Absolutely. We use enterprise-grade encryption for all data in transit and at rest, maintain strict access controls, and never train our models on your proprietary data." },
        { question: "Can I integrate with my own API?", answer: "Yes, you can connect any custom API to your agents. Our platform supports OpenAPI specifications for automatic tool generation." },
    ];

    useEffect(() => {
        const schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        };
        let script = document.querySelector('#faq-schema');
        if (!script) {
            script = document.createElement('script');
            script.id = 'faq-schema';
            script.setAttribute('type', 'application/ld+json');
            document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(schema);
        
        return () => {
            if (script && script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    return (
        <section className="py-24">
            <div className="container mx-auto px-5 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-400">Everything you need to know about our solutions and delivery process.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-white/10 rounded-xl bg-white/5 overflow-hidden">
                            <button
                                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-medium text-lg">{faq.question}</span>
                                <i className={`fas fa-chevron-down transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-indigo-400' : 'text-gray-500'}`}></i>
                            </button>
                            <div
                                className={`px-6 text-gray-400 leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 py-4 border-t border-white/5' : 'max-h-0'}`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
