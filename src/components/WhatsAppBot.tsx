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
        <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3">
            <div className="bg-slate-900/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl shadow-lg hidden md:block">
                <p className="text-gray-200 text-sm font-medium whitespace-nowrap">Need help? Chat with us</p>
            </div>

            <button
                onClick={handleClick}
                className="w-14 h-14 bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center hover:bg-[#25D366] transition-all duration-300 group shadow-lg hover:shadow-[#25D366]/20"
                aria-label="Chat on WhatsApp"
            >
                <i className="fab fa-whatsapp text-[#25D366] text-3xl group-hover:text-white transition-colors"></i>
            </button>
        </div>
    );
};

export default WhatsAppBot;
