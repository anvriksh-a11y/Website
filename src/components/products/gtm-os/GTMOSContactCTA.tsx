import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { trackLead } from '../../../utils/analytics';
import { COMPANY_DETAILS } from '../../../constants/contact';
import { 
  Send, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Building2, 
  Mail, 
  Phone, 
  User, 
  MessageSquare,
  ArrowRight,
  Bot
} from 'lucide-react';
import Reveal from '../../Reveal';

export const GTMOSContactCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [interestedIn, setInterestedIn] = useState('Product Demo Walkthrough');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    // Authoritative EmailJS configuration matching the main Contact Us channel
    const SERVICE_ID = 'service_ida6rx5';
    const TEMPLATE_ID = 'template_y98vp1n';
    const PUBLIC_KEY = 'oH3PozDzDNnz1dWJz';

    // Format comprehensive message so template_y98vp1n conveys all GTM inquiry specifics
    const fullMessage = [
      `[INQUIRY: Genquantaa GTM OS]`,
      `[INTERESTED IN: ${interestedIn}]`,
      ``,
      `Company: ${formData.company}`,
      `Phone: ${formData.phone || 'N/A'}`,
      ``,
      `Project Details & Requirements:`,
      formData.message
    ].join('\n');

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone || 'N/A',
      user_company: formData.company,
      interested_in: interestedIn,
      message: fullMessage
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((result) => {
        console.log('GTM OS inquiry submitted successfully:', result.text);
        setLoading(false);
        setStatus('success');
        trackLead('gtm_os_inquiry', { interest: interestedIn, company: formData.company });
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: ''
        });
      }, (error) => {
        console.error('GTM OS inquiry error:', error.text);
        setLoading(false);
        setStatus('error');
      });
  };

  const scrollToPricing = () => {
    const el = document.getElementById('pricing-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="contact-section"
      className="py-20 sm:py-28 bg-[#F4F7EE] text-[#141912] relative overflow-hidden border-t border-[#D5E1CE]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Main CTA & Form Container Card */}
        <Reveal variant="up" delay={100}>
          <div className="rounded-[2.5rem] bg-white border border-[#D5E1CE] p-8 sm:p-12 lg:p-16 shadow-[0_20px_60px_rgba(20,25,18,0.08)] relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Heading & Value Story (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] text-[#003D2B] text-xs font-semibold shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#003D2B]" />
                <span>Accelerate Revenue Operations</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-[800] tracking-tight leading-[1.10] text-[#141912]">
                Ready to Build a{' '}
                <span className="text-[#003D2B]">
                  Smarter Growth Engine?
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#4E5B49] leading-relaxed">
                Bring prospect discovery, intelligent engagement, campaign automation, 
                and growth intelligence together with Genquantaa GTM OS.
              </p>

              <div className="space-y-3.5 pt-2">
                {[
                  'Live walkthrough tailored to your vertical & ICP',
                  'Clear evaluation of SaaS vs. Software Purchase options',
                  'Review of multichannel messaging compliance & pacing',
                  'Direct discussion with enterprise deployment architects'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#141912]">
                    <CheckCircle2 className="w-4 h-4 text-[#003D2B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4 text-xs text-[#6B7866]">
                <button
                  type="button"
                  onClick={scrollToPricing}
                  className="inline-flex items-center gap-1.5 text-[#003D2B] hover:text-[#022D20] font-semibold cursor-pointer underline underline-offset-4"
                >
                  <span>Explore Purchase Options</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span>•</span>
                <span>Response within 1 business day</span>
              </div>

            </div>

            {/* Right Column: Functional Enterprise Consultation Form (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#F4F7EE] border border-[#D5E1CE] shadow-xs">
                
                <div className="mb-6 pb-4 border-b border-[#D5E1CE] flex items-center justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#141912]">Request Demo &amp; Commercial Proposal</h3>
                    <p className="text-xs text-[#4E5B49] mt-0.5">Fill out your requirements below to connect directly with our engineering team.</p>
                  </div>
                  <Bot className="w-6 h-6 text-[#003D2B] hidden sm:block" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#141912] flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#003D2B]" />
                        <span>Full Name *</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Alex Henderson"
                        className="w-full bg-white border border-[#D5E1CE] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#141912] placeholder-[#6B7866] focus:outline-none focus:border-[#003D2B] transition-colors"
                      />
                    </div>

                    {/* Business Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#141912] flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#003D2B]" />
                        <span>Business Email *</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="alex@company.com"
                        className="w-full bg-white border border-[#D5E1CE] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#141912] placeholder-[#6B7866] focus:outline-none focus:border-[#003D2B] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#141912] flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-[#003D2B]" />
                        <span>Company Name *</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Acme Technologies"
                        className="w-full bg-white border border-[#D5E1CE] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#141912] placeholder-[#6B7866] focus:outline-none focus:border-[#003D2B] transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#141912] flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-[#003D2B]" />
                        <span>Phone Number</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-white border border-[#D5E1CE] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#141912] placeholder-[#6B7866] focus:outline-none focus:border-[#003D2B] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Interested In Select */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#141912] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#003D2B]" />
                      <span>Interested In *</span>
                    </label>
                    <select
                      value={interestedIn}
                      onChange={(e) => setInterestedIn(e.target.value)}
                      className="w-full bg-white border border-[#D5E1CE] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#141912] focus:outline-none focus:border-[#003D2B] transition-colors cursor-pointer"
                    >
                      <option value="Product Demo Walkthrough">Product Demo Walkthrough</option>
                      <option value="SaaS Subscription">SaaS Subscription (Managed Cloud)</option>
                      <option value="Software Purchase">Software Purchase (Licensing &amp; Dedicated Deployment)</option>
                      <option value="Enterprise Deployment Discussion">Enterprise Deployment Discussion</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#141912] flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-[#003D2B]" />
                      <span>Project Details &amp; Requirements *</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={3}
                      placeholder="Share your current outbound goals, monthly volume, or technical requirements..."
                      className="w-full bg-white border border-[#D5E1CE] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#141912] placeholder-[#6B7866] focus:outline-none focus:border-[#003D2B] transition-colors resize-none"
                    />
                  </div>

                  {/* Status Messages */}
                  {status === 'success' && (
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-2.5 animate-fadeIn">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        Thank you! Your request for Genquantaa GTM OS has been delivered. Our solutions team will reach out with demonstration details and proposal options within 24 hours.
                      </span>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2.5 animate-fadeIn">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span>
                        There was an issue delivering your request. Please reach us directly at {COMPANY_DETAILS.email} or call {COMPANY_DETAILS.primaryPhone}.
                      </span>
                    </div>
                  )}

                  {/* Primary Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-[#003D2B] hover:bg-[#022D20] text-white font-bold text-sm shadow-[0_4px_14px_rgba(0,61,43,0.22)] hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Request...</span>
                      </span>
                    ) : (
                      <>
                        <span>Book a Product Demo</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-[#6B7866] text-center pt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#003D2B]" />
                    <span>Your data is strictly confidential. Zero spam. Enterprise NDA compliant.</span>
                  </div>

                </form>

              </div>
            </div>

          </div>

        </div>
      </Reveal>

      </div>
    </section>
  );
};

export default GTMOSContactCTA;
