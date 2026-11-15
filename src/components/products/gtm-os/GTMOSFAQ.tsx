import React, { useState } from 'react';
import Reveal from '../../Reveal';
import { 
  HelpCircle, 
  ChevronDown, 
  ArrowRight
} from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const GTMOSFAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'What is Genquantaa GTM OS?',
      answer: 'Genquantaa GTM OS is an AI-powered Go-To-Market Operating System designed to unify customer discovery, lead intelligence, multichannel campaign execution, and performance analytics into a single coordinated workspace.',
      category: 'General'
    },
    {
      id: 2,
      question: 'How does the platform help businesses acquire customers?',
      answer: 'The platform coordinates an end-to-end customer acquisition lifecycle: it autonomously searches verified business directories, validates emails and WhatsApp numbers, scores leads against your Ideal Customer Profile (ICP), synthesizes contextual campaign copy and visuals, and orchestrates personalized outreach across email, LinkedIn, WhatsApp, and voice.',
      category: 'Capabilities'
    },
    {
      id: 3,
      question: 'Which communication channels and integrations are supported?',
      answer: 'Supported channels include Cold & Lifecycle Email (with domain warm-up and multi-inbox rotation), official WhatsApp Business Cloud API, SMS/telephony via Twilio, and configurable LinkedIn outreach and AI Voice Calling. It interfaces seamlessly with Google Workspace, Microsoft 365, Salesforce, HubSpot, and custom REST webhooks.',
      category: 'Channels & Integrations'
    },
    {
      id: 4,
      question: 'Is Genquantaa GTM OS available as SaaS or dedicated software purchase?',
      answer: 'Both models are fully supported. You can subscribe via Managed Cloud SaaS (instant browser access, fully managed cloud infrastructure, continuous model updates) or purchase dedicated Enterprise Software Licensing with custom environment configuration, deployment planning, and commercial agreements.',
      category: 'Commercial Models'
    },
    {
      id: 5,
      question: 'How do I request a product demonstration or get custom pricing?',
      answer: 'You can request a live guided demonstration by selecting "Book Demo" or submitting our consultation form below. Our technical team will coordinate an interactive walkthrough demonstrating prospect discovery, campaign execution, and multi-agent workflows tailored to your target industry.',
      category: 'Getting Started'
    }
  ];

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="faq-section"
      className="py-20 sm:py-28 bg-[#F4F7EE] text-[#141912] relative overflow-hidden border-t border-[#D5E1CE]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
        
        {/* Section Header */}
        <Reveal variant="up" className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] text-[#003D2B] text-xs font-semibold mb-4 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#003D2B]" />
            <span>Clear &amp; Transparent Answers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[800] tracking-tight leading-[1.12] text-[#141912] mb-5">
            Frequently Asked{' '}
            <span className="text-[#003D2B]">
              Questions.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#4E5B49] leading-relaxed">
            Essential information regarding platform capabilities, communication channels, commercial licensing, and deployment.
          </p>
        </Reveal>

        {/* 5 Curated Accordions */}
        <div className="space-y-3.5 mb-12">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <Reveal key={faq.id} variant="up" delay={index * 60}>
                <div
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'bg-white border-[#003D2B] shadow-sm' 
                      : 'bg-white/85 border-[#D5E1CE] hover:border-[#003D2B]/50 hover:bg-white'
                  }`}
                >
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className="w-6 h-6 rounded-lg bg-[#E3EDE0] border border-[#D3E2CF] text-[#003D2B] text-xs font-mono font-bold flex items-center justify-center shrink-0">
                        0{faq.id}
                      </span>
                      <span className="text-base sm:text-lg font-bold text-[#141912] group-hover:text-[#003D2B] transition-colors">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-[#6B7866] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#003D2B]' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#4E5B49] leading-relaxed border-t border-[#D5E1CE]/50">
                      <p>{faq.answer}</p>
                      <div className="mt-3 flex items-center gap-2 text-xs font-mono text-[#6B7866]">
                        <span className="px-2 py-0.5 rounded bg-[#F4F7EE] border border-[#D5E1CE]">Category: {faq.category}</span>
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Still Have Questions Banner */}
        <Reveal variant="up" delay={200}>
          <div className="p-6 sm:p-8 rounded-2xl bg-[#E3EDE0]/60 border border-[#D3E2CF] text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
            <div className="text-left">
              <div className="text-base font-bold text-[#141912]">Have a specific architectural or compliance question?</div>
              <p className="text-xs text-[#4E5B49] mt-0.5">Our engineering and revenue architecture team is available to assist.</p>
            </div>
            <button
              onClick={scrollToContact}
              className="px-6 py-2.5 rounded-full bg-[#003D2B] hover:bg-[#022D20] text-white font-semibold text-xs shadow-xs transition-all flex items-center gap-2 shrink-0 cursor-pointer hover:scale-105 active:scale-95"
            >
              <span>Ask our team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default GTMOSFAQ;