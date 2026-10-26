/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-color': '#030712',
                'bg-card': 'rgba(17, 24, 39, 0.7)',
                'bg-card-hover': 'rgba(31, 41, 55, 0.8)',
                'primary': '#6366f1',
                'primary-hover': '#4f46e5',
                'secondary': '#1f2937',
                'text-main': '#f9fafb',
                'text-muted': '#9ca3af',
                'border-color': 'rgba(255, 255, 255, 0.1)',
            },
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
