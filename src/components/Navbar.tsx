import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface ServiceDropdownItem {
  label: string;
  to: string;
  icon: string;
}

const serviceItems: ServiceDropdownItem[] = [
  { label: 'Calling Agent', to: '/gen-ai', icon: 'fas fa-phone-alt' },
  { label: 'Website Development', to: '/software-solutions', icon: 'fas fa-laptop-code' },
  { label: 'Gen AI', to: '/gen-ai', icon: 'fas fa-brain' },
  { label: 'Agentic AI', to: '/#services-section', icon: 'fas fa-network-wired' },
  { label: 'Data Security', to: '/platform', icon: 'fas fa-shield-alt' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none select-none">
      
      {/* ————————————————— MODERN GEN-Z FLOATING CAPSULE NAVBAR ————————————————— */}
      <header
        className={`pointer-events-auto w-full max-w-[900px] rounded-full transition-all duration-300 ease-out border bg-[#F4F7EE]/90 backdrop-blur-xl border-[#CCD8C3]/80 shadow-[0_8px_32px_rgba(20,25,18,0.08),0_1px_2px_rgba(20,25,18,0.04)] ${
          scrolled
            ? 'py-1.5 px-4 sm:px-6 shadow-[0_12px_36px_rgba(20,25,18,0.10),0_2px_4px_rgba(20,25,18,0.05)]'
            : 'py-1.5 sm:py-2 px-4 sm:px-6'
        }`}
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        <div className="flex items-center justify-between">
          
          {/* ————————————————— LEFT: PROMINENT ANVRIKSH LOGO ————————————————— */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group shrink-0 transition-transform duration-200 active:scale-95 py-0.5" 
            aria-label="ANVRiksh home"
          >
            <img
              src="/anvriksh_logo_clean.png"
              alt="ANVRiksh"
              className="h-9 sm:h-10.5 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-xs"
            />
          </Link>

          {/* ————————————————— CENTER: NAVIGATION ITEMS ————————————————— */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 p-1 rounded-full bg-[#EAEFE5]/50 border border-[#D5E1CE]/60">
            
            {/* 1. Platform */}
            <Link
              to="/platform"
              className={`relative px-3.5 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-200 ${
                location.pathname === '/platform'
                  ? 'text-[#003D2B] bg-white shadow-xs'
                  : 'text-[#4E5B49] hover:text-[#141912] hover:bg-white/60'
              }`}
            >
              Platform
            </Link>

            {/* 2. Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-200 ${
                  isServicesOpen || location.pathname === '/gen-ai' || location.pathname === '/software-solutions'
                    ? 'text-[#003D2B] bg-white shadow-xs'
                    : 'text-[#4E5B49] hover:text-[#141912] hover:bg-white/60'
                }`}
                aria-expanded={isServicesOpen}
              >
                <span>Services</span>
                <svg
                  className={`w-3 h-3 text-[#4E5B49] transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-[#003D2B]' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {/* Floating Dropdown Card */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 z-50 ${
                  isServicesOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto visible'
                    : 'opacity-0 -translate-y-2 pointer-events-none invisible'
                }`}
              >
                <div className="w-56 rounded-[20px] p-2 bg-white/95 backdrop-blur-xl border border-[#D5E1CE] shadow-[0_16px_40px_rgba(20,25,18,0.12)] space-y-1">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={() => setIsServicesOpen(false)}
                      className="flex items-center gap-3 px-3 py-2 rounded-xl text-[13px] font-semibold text-[#141912] hover:text-[#003D2B] hover:bg-[#F4F7EE] transition-all group"
                    >
                      <span className="w-7 h-7 rounded-lg bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center text-[#003D2B] group-hover:scale-110 group-hover:bg-[#003D2B] group-hover:text-white transition-all shrink-0">
                        <i className={`${item.icon} text-xs`} />
                      </span>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Blogs */}
            <Link
              to="/resources/blogs"
              className={`relative px-3.5 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-200 ${
                location.pathname === '/resources/blogs'
                  ? 'text-[#003D2B] bg-white shadow-xs'
                  : 'text-[#4E5B49] hover:text-[#141912] hover:bg-white/60'
              }`}
            >
              Blogs
            </Link>

            {/* 4. Company */}
            <Link
              to="/company/who-we-are"
              className={`relative px-3.5 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-200 ${
                location.pathname === '/company/who-we-are'
                  ? 'text-[#003D2B] bg-white shadow-xs'
                  : 'text-[#4E5B49] hover:text-[#141912] hover:bg-white/60'
              }`}
            >
              Company
            </Link>

          </nav>

          {/* ————————————————— RIGHT: GET IN TOUCH BUTTON ————————————————— */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              to="/company/contact-us"
              className="group relative inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-[13px] font-bold text-white bg-[#003D2B] hover:bg-[#022D20] shadow-[0_4px_14px_rgba(0,61,43,0.22)] hover:shadow-[0_6px_20px_rgba(0,61,43,0.32)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            >
              <span>Get in touch</span>
              <svg 
                className="w-3 h-3 text-white/90 transition-transform duration-200 group-hover:translate-x-0.5" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-8 h-8 rounded-full bg-[#EAEFE5] border border-[#D5E1CE] flex items-center justify-center text-[#141912] transition-transform active:scale-90"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className="relative block w-3.5 h-2.5">
                <span className={`absolute left-0 top-0 h-[1.5px] w-full bg-current rounded-full transition-all duration-300 ${isMenuOpen ? 'top-[4px] rotate-45' : ''}`} />
                <span className={`absolute left-0 top-[4px] h-[1.5px] w-full bg-current rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`absolute left-0 top-[8px] h-[1.5px] w-full bg-current rounded-full transition-all duration-300 ${isMenuOpen ? 'top-[4px] -rotate-45' : ''}`} />
              </span>
            </button>
          </div>

        </div>

        {/* ————————————————— MOBILE DROPDOWN FLOATING SHEET ————————————————— */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-[420px] opacity-100 pt-3 mt-2.5 border-t border-[#D5E1CE]/80'
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col gap-1 pb-2">
            
            {/* Mobile 1. Platform */}
            <Link
              to="/platform"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-[#141912] hover:bg-black/[0.04]"
            >
              Platform
            </Link>

            {/* Mobile 2. Services Collapsible */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-2 rounded-xl text-sm font-semibold text-[#141912] hover:bg-black/[0.04]"
              >
                <span>Services</span>
                <svg
                  className={`w-3.5 h-3.5 text-[#4E5B49] transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {/* Sub-items */}
              <div
                className={`overflow-hidden transition-all duration-200 pl-4 space-y-1 ${
                  isMobileServicesOpen ? 'max-h-60 opacity-100 mt-1 mb-2' : 'max-h-0 opacity-0'
                }`}
              >
                {serviceItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#4E5B49] hover:text-[#003D2B] hover:bg-black/[0.04]"
                  >
                    <i className={`${item.icon} text-[10px] text-[#003D2B]`} />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile 3. Blogs */}
            <Link
              to="/resources/blogs"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-[#141912] hover:bg-black/[0.04]"
            >
              Blogs
            </Link>

            {/* Mobile 4. Company */}
            <Link
              to="/company/who-we-are"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-[#141912] hover:bg-black/[0.04]"
            >
              Company
            </Link>

            <div className="h-px bg-[#D5E1CE] my-1" />

            <div className="pt-1 flex items-center justify-between px-2">
              <Link
                to="/company/contact-us"
                onClick={() => setIsMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-[#003D2B]"
              >
                <span>Get in touch</span>
                <i className="fas fa-arrow-right text-[10px]" />
              </Link>
            </div>

          </div>
        </div>

      </header>

    </div>
  );
};

export default Navbar;
