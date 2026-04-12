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
        // Curantis accent — deep teal
        brand: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#66f0d7',
          400: '#33e3ca',
          500: '#2AAFA3',
          600: '#229085',
          700: '#1a7167',
          800: '#155952',
          900: '#0f423d',
          950: '#0a211f',
        },
        navy: {
          50: '#f1f1f5',
          100: '#e2e2eb',
          200: '#c5c5d7',
          300: '#a8a8c3',
          400: '#6b6b9e',
          500: '#4e4e79',
          600: '#3e3e61',
          700: '#2f2f49',
          800: '#1E214F',
          900: '#123E5A',
          950: '#0d0d1f',
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
        primary: {
          50: '#e6f0f5',
          100: '#cce1eb',
          200: '#99c3d7',
          300: '#66a5c3',
          400: '#3387af',
          500: '#0B3D5C',
          600: '#0a354f',
          700: '#082d42',
          800: '#062535',
          900: '#051d28',
          950: '#030f14',
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
