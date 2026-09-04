/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0B0B',
          900: '#0B0B0B',
          800: '#1A1A1A',
          700: '#2A2A2A',
        },
        paper: {
          DEFAULT: '#F4EFE6',
          50: '#FBF8F2',
          100: '#F4EFE6',
          200: '#E8E0D2',
          300: '#D9CFBC',
        },
        clay: {
          DEFAULT: '#C8521E',
          400: '#D9683A',
          500: '#C8521E',
          600: '#A8421A',
          700: '#8A3515',
        },
        indigo: {
          DEFAULT: '#1C3A5E',
          500: '#1C3A5E',
          600: '#162E4A',
          700: '#102338',
        },
        sun: {
          DEFAULT: '#E8B931',
          400: '#F0C95A',
          500: '#E8B931',
          600: '#C79E26',
        },
        earth: {
          DEFAULT: '#3A2418',
          600: '#3A2418',
          700: '#2A1810',
          800: '#1C0F08',
        },
      },
      fontFamily: {
        display: ['Anton', 'system-ui', 'sans-serif'],
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        widest: '0.3em',
      },
      maxWidth: {
        edge: '1600px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'clip-reveal': {
          '0%': { 'clip-path': 'inset(0 100% 0 0)' },
          '100%': { 'clip-path': 'inset(0 0 0 0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 1s ease both',
        'slide-in': 'slide-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        'clip-reveal': 'clip-reveal 1s cubic-bezier(0.77, 0, 0.18, 1) both',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};
