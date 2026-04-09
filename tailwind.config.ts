import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Curantis primary = same family as Who We Serve (navy-900); replaces former green
        brand: {
          50: '#f2f5f9',
          100: '#e1e7f0',
          200: '#c5d0e3',
          300: '#9bb0cf',
          400: '#6e8bb6',
          500: '#4d6d9e',
          600: '#1e2a40', // solid CTAs — matches navy-900 / Who We Serve background
          700: '#141c2d', // hover
          800: '#101824', // active / pressed
          900: '#0d131c',
          950: '#0a0f16',
        },
        navy: {
          50: '#f2f5f9',
          100: '#e1e7f0',
          200: '#c5d0e3',
          300: '#9bb0cf',
          400: '#6e8bb6',
          500: '#4d6d9e',
          600: '#3c5685',
          700: '#32466c',
          800: '#2c3c5a',
          900: '#1e2a40',   // Deep navy — authority, medical credibility
          950: '#141c2d',
        },
        sage: {
          50: '#f6f7f5',
          100: '#e8ebe4',
          200: '#d3d9cc',
          300: '#b3bda8',
          400: '#93a083',
          500: '#768568',
          600: '#5d6a52',
          700: '#4a5442',
          800: '#3d4537',
          900: '#333a2f',
        },
        warm: {
          50: '#fdf8f4',
          100: '#faf0e6',
          200: '#f4ddcc',
          300: '#ecc5a8',
          400: '#e2a67d',
          500: '#d98c5e',
          600: '#cb7345',
          700: '#aa5c38',
          800: '#884b32',
          900: '#6e3f2c',
        },
      },
      fontFamily: {
        // Elegant + readable pairing for medical/wellness
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.08)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
