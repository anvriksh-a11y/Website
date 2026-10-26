import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import SEO from '../../components/SEO';
import { trackLead } from '../../utils/analytics';
import { COMPANY_DETAILS } from '../../constants/contact';

const ContactUs: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus('idle');

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        // Sign up at https://www.emailjs.com/
        const SERVICE_ID = 'service_ida6rx5';
        const TEMPLATE_ID = 'template_y98vp1n';
        const PUBLIC_KEY = 'oH3PozDzDNnz1dWJz';

        if (form.current) {
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
                .then((result) => {
                    console.log(result.text);
                    setLoading(false);
                    setStatus('success');
                    trackLead('contact_form');
                    if (form.current) form.current.reset();
                }, (error) => {
                    console.log(error.text);
                    setLoading(false);
                    setStatus('error');
                });
        }
    };

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact | ANVRiksh",
        "description": "Get in touch with ANVRiksh for AI consulting, software development, and enterprise orchestration solutions.",
        "mainEntity": {
            "@type": "Organization",
            "name": "ANVRiksh",
            "legalName": "ANVRiksh Tech Solutions LLP",
            "identifier": "ADA-3944",
            "contactPoint": [
                {
                    "@type": "ContactPoint",
                    "telephone": "+91 86182 93833",
                    "contactType": "customer service",
                    "email": "info@anvriksh.com",
                    "areaServed": "IN"
                }
            ]
        }
    };

    return (
        <div className="bg-[#030712] min-h-screen text-white font-sans selection:bg-blue-500/30">
            <SEO
                title="Contact Us"
                description="Ready to transform your business? Contact ANVRiksh today for a consultation on Agentic AI, Generative AI, and Custom Software."
                keywords="Contact ANVRiksh, Hire AI Developers, Software Consultancy, AI Consulting"
                canonicalUrl="https://anvriksh.com/company/contact-us"
                structuredData={structuredData}
            />

            {/* Main Contact Section */}
            <section className="pt-32 pb-20 container mx-auto px-6 max-w-7xl">
                <div className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden bg-[url('/background.avif')] bg-cover bg-center">
                    {/* Background Glows */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -z-10"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Left Column: Info */}
                        <div className="space-y-8">
                            <div>
                                <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-slate-300 mb-6">
                                    Contact Us
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                    Get in touch with us <br />
                                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                        today
                                    </span>
                                </h1>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                    Get in touch to learn how our AI solutions can transform your business. We're here to help!
                                </p>
                            </div>

                            <div className="space-y-6 pt-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-envelope text-blue-400"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-slate-300 mb-1">Send us a message</h3>
                                        <a href="mailto:info@anvriksh.com" className="text-white hover:text-blue-400 transition-colors">info@anvriksh.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-phone text-purple-400"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-slate-300 mb-1">Give us a call</h3>
                                        <a href="tel:+918618293833" className="text-white hover:text-purple-400 transition-colors">+91 86182 93833</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="bg-black/20 rounded-2xl p-6 md:p-8 border border-white/5">
                            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">Full Name</label>
                                        <input
                                            type="text"
                                            name="user_name"
                                            required
                                            placeholder="Name Surname"
                                            className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">Email Address</label>
                                        <input
                                            type="email"
                                            name="user_email"
                                            required
                                            placeholder="example@yourmail.com"
                                            className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">Phone Number</label>
                                        <div className="relative">
                                            <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2 border-r border-white/10 pr-2">
                                                <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-5" />
                                            </div>
                                            <input
                                                type="tel"
                                                name="user_phone"
                                                placeholder="xxxxx xxxxx"
                                                className="w-full bg-slate-900/50 border border-white/10 rounded-lg pl-16 pr-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">Company</label>
                                        <input
                                            type="text"
                                            name="user_company"
                                            placeholder="ex. Google"
                                            className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        placeholder="Tell us more"
                                        rows={4}
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                    ></textarea>
                                </div>

                                {status === 'success' && (
                                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm">
                                        <i className="fas fa-check-circle mr-2"></i>
                                        Message sent successfully! We'll get back to you soon.
                                    </div>
                                )}

                                {status === 'error' && (
                                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                                        <i className="fas fa-exclamation-circle mr-2"></i>
                                        Something went wrong. Please try again later.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-4 rounded-lg shadow-lg shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <span><i className="fas fa-spinner fa-spin mr-2"></i> Sending...</span>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Locations Section */}
            <section className="pb-32 container mx-auto px-6 max-w-7xl">
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                    <span className="w-1 h-8 bg-blue-500 rounded-full"></span>
                    Our locations
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Location Card */}
                    <div className="group p-8 rounded-2xl bg-slate-900/30 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-white mb-4">Registered Office — India</h3>
                        <p className="text-slate-400 leading-relaxed">
                            {COMPANY_DETAILS.address.line1}<br />
                            {COMPANY_DETAILS.address.line2}<br />
                            {COMPANY_DETAILS.address.line3}
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ContactUs;
