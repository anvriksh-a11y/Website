import React from 'react';
import { COMPANY_DETAILS } from '../constants/contact';
import { trackWhatsAppClick } from '../utils/analytics';

const WhatsAppBot: React.FC = () => {
    const phoneNumber = COMPANY_DETAILS.primaryPhoneRaw;
    const message = 'Hello! I am interested in your AI and software solutions.';

    const handleClick = () => {
        trackWhatsAppClick('floating_widget');
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 flex items-center gap-3">
            <div className="glass-strong px-4 py-2.5 rounded-2xl shadow-lg hidden md:flex items-center gap-2.5 animate-fadeIn">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-slate-700 text-sm font-semibold whitespace-nowrap">Need help? Chat with us</p>
            </div>

            <div className="relative">
                <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping" style={{ animationDuration: '2.4s' }} />
                <button
                    onClick={handleClick}
                    className="relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-[0_12px_32px_rgba(37,211,102,0.45)] hover:scale-110 active:scale-95 transition-all"
                    style={{ background: 'linear-gradient(145deg,#2EEA6B 0%, #25D366 45%, #128C4B 100%)', border: '1px solid rgba(255,255,255,0.5)', boxShadow: '0 12px 32px rgba(37,211,102,0.45), inset 0 1px 0 rgba(255,255,255,0.45)' }}
                    aria-label="Chat on WhatsApp"
                >
                    <i className="fab fa-whatsapp text-[26px]" />
                </button>
            </div>
        </div>
    );
};

export default WhatsAppBot;
