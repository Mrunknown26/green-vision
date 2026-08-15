/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          lime: '#A0C60F',
          'lime-hover': '#8eb30b',
          'lime-light': '#BCE526',
          'lime-glow': 'rgba(160, 198, 15, 0.35)',
          green: '#00FF66',
          dark: '#080A08',
          surface: '#0F1410',
          card: '#151C16',
          'card-hover': '#1B241C',
          border: 'rgba(160, 198, 15, 0.15)',
          'border-subtle': 'rgba(255, 255, 255, 0.08)',
          coral: '#FF4D4D',
          amber: '#F59E0B',
          purple: '#9333EA',
          cyan: '#06B6D4',
        }
      },
      fontFamily: {
        serif: ['var(--font-instrument-serif)', 'Instrument Serif', 'Georgia', 'serif'],
        sans: ['var(--font-instrument-sans)', 'var(--font-inter)', 'Instrument Sans', 'Inter', 'sans-serif'],
        hand: ['var(--font-nanum)', 'Nanum Pen Script', 'Caveat', 'cursive'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'marquee-fast': 'marquee 18s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1.5deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        }
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': "linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
};
