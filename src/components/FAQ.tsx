import React, { useState, useEffect } from 'react';
import Reveal from './Reveal';

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
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
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
      if (script && script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 sm:py-28 bg-[#F4F7EE] relative overflow-hidden select-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[640px] h-[300px] rounded-full pointer-events-none opacity-40" style={{ background: 'radial-gradient(ellipse at center, #E3EDE0 0%, transparent 70%)', filter: 'blur(52px)' }} />
      <div className="container mx-auto px-5 max-w-3xl relative z-10">
        <Reveal variant="up" duration={750}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] shadow-xs mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2D452C] animate-pulse" />
              <span className="text-[12px] sm:text-[13px] font-semibold text-[#2D452C] tracking-tight">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-[800] mb-3 tracking-[-0.035em] text-[#141912]">Frequently Asked Questions</h2>
            <p className="text-[#4E5B49] text-base">Everything you need to know about our solutions and delivery process.</p>
          </div>
        </Reveal>

        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <Reveal key={index} variant="up" duration={600} delay={index * 70}>
                <div className={`bg-white border border-[#D5E1CE] rounded-[20px] overflow-hidden transition-all duration-300 shadow-xs ${open ? 'ring-1 ring-[#003D2B]/40 shadow-md' : 'hover:shadow-md'}`}>
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center gap-4"
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                  >
                    <span className="font-[800] text-[15px] sm:text-base text-[#141912]">{faq.question}</span>
                    <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${open ? 'bg-[#003D2B] text-white rotate-180 shadow-xs' : 'bg-[#E3EDE0] text-[#2D452C]'}`}>
                      <i className="fas fa-chevron-down text-xs" />
                    </span>
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-44 pb-5' : 'max-h-0'}`}>
                    <p className="text-[#4E5B49] leading-relaxed text-sm sm:text-[15px] border-t border-[#EAEFE5] pt-4">{faq.answer}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
