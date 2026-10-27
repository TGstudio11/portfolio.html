/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dream: {
          950: '#06020c',
          900: '#0c0517',
          850: '#120822',
          800: '#1a0b32',
          700: '#2b1254',
          600: '#4c1d95',
          500: '#7c3aed',
          400: '#a855f7',
          300: '#c084fc',
          200: '#d8b4fe',
          100: '#ede9fe',
          50: '#f5f3ff',
        },
        lavender: {
          light: '#f3e8ff',
          DEFAULT: '#d8b4fe',
          muted: '#c4b5fd',
          deep: '#8b5cf6',
        },
        neon: {
          violet: '#bf5af2',
          purple: '#d946ef',
          cyan: '#38bdf8',
        }
      },
      fontFamily: {
        heading: ['"Syne"', '"Outfit"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(168, 85, 247, 0.25)',
        'glow-md': '0 0 30px rgba(168, 85, 247, 0.35)',
        'glow-lg': '0 0 50px rgba(192, 132, 252, 0.45)',
        'glow-neon': '0 0 25px rgba(217, 70, 239, 0.55)',
        'glass': '0 8px 32px 0 rgba(12, 5, 23, 0.45)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'float-fast': 'float 3.5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.06)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}

