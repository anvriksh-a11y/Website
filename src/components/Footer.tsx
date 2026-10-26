import React from 'react';
import { Link } from 'react-router-dom';
import { trackWhatsAppClick, trackPhoneClick } from '../utils/analytics';
import { COMPANY_DETAILS } from '../constants/contact';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#030712] border-t border-white/10 pt-20 pb-10 font-sans text-white relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -z-10"></div>

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-2.5 font-bold text-2xl tracking-tighter">
                            <img src="/logo1.png" alt="ANVRiksh Logo" className="w-72 h-16 rounded-lg object-contain" />
                        </Link>
                        <p className="text-slate-400 leading-relaxed">
                            Empowering enterprises with Agentic AI and intelligent software solutions. Building the autonomous future, today.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a
                                href="https://www.linkedin.com/company/anvriksh/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a
                                href="https://wa.me/918618293833"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackWhatsAppClick('footer')}
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300"
                            >
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/anvriksh/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-pink-500 transition-all duration-300"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <span className="w-1 h-5 bg-blue-500 rounded-full"></span>
                            Solutions
                        </h4>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-slate-400 hover:text-blue-400 transition-colors">Agentic AI</Link></li>
                            <li><Link to="/gen-ai" className="text-slate-400 hover:text-blue-400 transition-colors">Generative AI</Link></li>
                            <li><Link to="/software-solutions" className="text-slate-400 hover:text-blue-400 transition-colors">Software Solutions</Link></li>
                            <li><Link to="/platform" className="text-slate-400 hover:text-blue-400 transition-colors">Yugma Platform</Link></li>
                        </ul>
                    </div>

                    {/* Resources & Company */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <span className="w-1 h-5 bg-purple-500 rounded-full"></span>
                            Company
                        </h4>
                        <ul className="space-y-3">
                            <li><Link to="/company/who-we-are" className="text-slate-400 hover:text-purple-400 transition-colors">Who We Are</Link></li>
                            <li><Link to="/resources/case-studies" className="text-slate-400 hover:text-purple-400 transition-colors">Case Studies</Link></li>
                            <li><Link to="/resources/blogs" className="text-slate-400 hover:text-purple-400 transition-colors">Blogs</Link></li>
                            <li><Link to="/company/contact-us" className="text-slate-400 hover:text-purple-400 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <span className="w-1 h-5 bg-green-500 rounded-full"></span>
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-400">
                                <i className="fas fa-map-marker-alt mt-1.5 text-green-400"></i>
                                <span>
                                    {COMPANY_DETAILS.address.line1}<br />
                                    {COMPANY_DETAILS.address.line2}<br />
                                    {COMPANY_DETAILS.address.line3}
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <i className="fas fa-envelope text-green-400"></i>
                                <a href="mailto:info@anvriksh.com" className="hover:text-white transition-colors">info@anvriksh.com</a>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <i className="fas fa-phone text-green-400"></i>
                                <a href="tel:+918618293833" onClick={() => trackPhoneClick('footer')} className="hover:text-white transition-colors">+91 86182 93833</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col gap-1">
                        <p className="text-slate-500 text-sm">
                            &copy; {currentYear} ANVRiksh Tech Solutions LLP. All rights reserved.
                        </p>
                        <p className="text-slate-600 text-xs">
                            Registered under LLP Act · ID: ADA-3944
                        </p>
                    </div>
                    <div className="flex gap-6 text-sm text-slate-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
