import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EbookPopup: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        // Check if user has already seen the popup in this session
        const hasSeenPopup = sessionStorage.getItem('ebookPopupSeen');

        if (!hasSeenPopup) {
            setShouldRender(true);
            // Show popup after a short delay
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        // Mark as seen for this session
        sessionStorage.setItem('ebookPopupSeen', 'true');
        // Remove from DOM after animation
        setTimeout(() => setShouldRender(false), 500);
    };

    if (!shouldRender) return null;

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center px-4 transition-all duration-500 ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
                onClick={handleClose}
            ></div>

            {/* Modal Content */}
            <div className={`relative bg-[#0B0F19] border border-white/10 rounded-2xl p-1 max-w-lg w-full shadow-2xl transform transition-all duration-500 ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}>
                {/* Inner Content Container */}
                <div className="bg-[#0B0F19] rounded-xl overflow-hidden relative">
                    {/* Decorative top gradient */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-500"></div>

                    <div className="p-8 text-center relative z-10">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleClose();
                            }}
                            className="absolute top-0 right-0 text-gray-500 hover:text-white transition-colors p-2"
                            aria-label="Close popup"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/10 text-indigo-400 mb-4">
                            <i className="fas fa-book-open text-xl"></i>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                            Master Agentic AI
                        </h2>

                        <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-md mx-auto">
                            Get our comprehensive guide on building autonomous enterprise agents. Learn the strategies that are reshaping the industry.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link
                                to="/resources/ebooks"
                                onClick={handleClose}
                                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-all duration-200 bg-gradient-to-r from-sky-600 to-indigo-600 rounded-lg hover:from-sky-500 hover:to-indigo-500 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30"
                            >
                                View Ebook
                            </Link>
                            <button
                                onClick={handleClose}
                                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-gray-300 transition-all duration-200 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white"
                            >
                                Maybe Later
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EbookPopup;
