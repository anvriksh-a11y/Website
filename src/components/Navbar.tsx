import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const handleMouseEnter = (menu: string) => {
        setActiveDropdown(menu);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <nav className="w-full max-w-5xl bg-gray-950/80 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-3 flex justify-between items-center shadow-lg">
                <Link to="/" className="flex items-center gap-2.5 font-bold text-xl tracking-tighter">
                    <img src="/logo1.png" alt="ANVRiksh Logo" className="w-48 h-14 rounded-md object-contain" />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 items-center">
                    <li><Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors">Agentic AI</Link></li>
                    <li><Link to="/gen-ai" className="text-gray-400 hover:text-white text-sm transition-colors">Gen AI</Link></li>
                    <li><Link to="/software-solutions" className="text-gray-400 hover:text-white text-sm transition-colors">Software Solutions</Link></li>
                    <li><Link to="/platform" className="text-gray-400 hover:text-white text-sm transition-colors">Platform</Link></li>

                    {/* Resources Dropdown */}
                    <li
                        className="relative"
                        onMouseEnter={() => handleMouseEnter('resources')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1">
                            Resources <i className="fas fa-chevron-down text-xs"></i>
                        </button>
                        {activeDropdown === 'resources' && (
                            <div className="absolute top-full left-0 pt-4 w-48">
                                <div className="bg-gray-900 border border-white/10 rounded-lg shadow-xl py-2 flex flex-col">
                                    <Link to="/resources/case-studies" className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5">Case Studies</Link>
                                    <Link to="/resources/blogs" className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5">Blogs</Link>
                                    <Link to="/resources/ebooks" className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5">E-books</Link>
                                    <Link to="/resources/whitepaper" className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5">Whitepaper</Link>
                                </div>
                            </div>
                        )}
                    </li>

                    {/* Company Dropdown */}
                    <li
                        className="relative"
                        onMouseEnter={() => handleMouseEnter('company')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1">
                            Company <i className="fas fa-chevron-down text-xs"></i>
                        </button>
                        {activeDropdown === 'company' && (
                            <div className="absolute top-full left-0 pt-4 w-48">
                                <div className="bg-gray-900 border border-white/10 rounded-lg shadow-xl py-2 flex flex-col">
                                    <Link to="/company/who-we-are" className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5">Who We Are</Link>
                                    <Link to="/company/contact-us" className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5">Contact Us</Link>
                                    {/* <Link to="/company/technical-partners" className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5">Technical Partners</Link> */}
                                </div>
                            </div>
                        )}
                    </li>
                </ul>

                <div className="hidden md:flex gap-3">
                    <Link to="/company/contact-us" className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm bg-indigo-500/10 text-indigo-400 border border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.1)] hover:bg-indigo-500/20 hover:shadow-[0_0_25px_rgba(99,102,241,0.3)] hover:-translate-y-px transition-all">
                        Book a Demo
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="absolute top-[70px] left-0 w-full bg-gray-950/95 border-b border-white/10 p-5 flex flex-col gap-4 md:hidden">
                        <Link to="/" className="text-gray-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>Agentic AI</Link>
                        <Link to="/gen-ai" className="text-gray-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>Gen AI</Link>
                        <Link to="/software-solutions" className="text-gray-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>Software Solutions</Link>
                        <Link to="/platform" className="text-gray-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>Platform</Link>

                        <div className="text-gray-400 font-medium">Resources</div>
                        <div className="pl-4 flex flex-col gap-2">
                            <Link to="/resources/case-studies" className="text-gray-500 hover:text-white text-sm" onClick={() => setIsMenuOpen(false)}>Case Studies</Link>
                            <Link to="/resources/blogs" className="text-gray-500 hover:text-white text-sm" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
                            <Link to="/resources/ebooks" className="text-gray-500 hover:text-white text-sm" onClick={() => setIsMenuOpen(false)}>E-books</Link>
                            <Link to="/resources/whitepaper" className="text-gray-500 hover:text-white text-sm" onClick={() => setIsMenuOpen(false)}>Whitepaper</Link>
                        </div>

                        <div className="text-gray-400 font-medium">Company</div>
                        <div className="pl-4 flex flex-col gap-2">
                            <Link to="/company/who-we-are" className="text-gray-500 hover:text-white text-sm" onClick={() => setIsMenuOpen(false)}>Who We Are</Link>
                            <Link to="/company/contact-us" className="text-gray-500 hover:text-white text-sm" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                            {/* <Link to="/company/technical-partners" className="text-gray-500 hover:text-white text-sm">Technical Partners</Link> */}
                        </div>

                        <div className="flex flex-col gap-3 mt-4">
                            <Link to="/company/contact-us" className="text-center py-2 bg-indigo-500/10 text-indigo-400 border border-indigo-500/50 rounded-lg" onClick={() => setIsMenuOpen(false)}>Book a Demo</Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
