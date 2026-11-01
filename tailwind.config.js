/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kos: {
          // Primary Background
          navy: '#223246',
          'navy-dark': '#162130',
          'navy-deep': '#0f1722',
          'navy-surface': '#1c293a',

          // Senku Mint / Cyan Glow
          mint: '#97D8C4',
          'mint-dark': '#529993',
          'mint-glow': '#bbf0e1',

          // Terracotta / Empire Orange
          terra: '#E76F51',
          'terra-dark': '#D35400',
          'terra-glow': '#f4a261',

          // Parchment / Linen Tan
          parchment: '#F4E9D8',
          linen: '#E6D5B8',
          'linen-muted': '#cfbd9c',

          // Petrified Clay Brown
          clay: '#9E6B55',
          'clay-dark': '#704A3A',
          'clay-light': '#b5836c',
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', '"Syne"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
        mono: ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'mint-sm': '0 0 12px rgba(151, 216, 196, 0.25)',
        'mint-md': '0 0 25px rgba(151, 216, 196, 0.4)',
        'mint-lg': '0 0 45px rgba(151, 216, 196, 0.55)',
        'terra-sm': '0 0 15px rgba(231, 111, 81, 0.3)',
        'terra-md': '0 0 30px rgba(231, 111, 81, 0.45)',
        'lab-card': '0 8px 32px 0 rgba(15, 23, 34, 0.65)',
        'hairline': '0 0 0 1px rgba(151, 216, 196, 0.2)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'pulse-mint': 'pulseMint 3s ease-in-out infinite',
        'telemetry-scan': 'telemetryScan 2s linear infinite',
        'sparkle': 'sparkle 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseMint: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 4px #97D8C4)' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 14px #97D8C4)' },
        },
        telemetryScan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
