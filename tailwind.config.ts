import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        hand: ['var(--font-caveat)', 'cursive'],
        display: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-dm-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        floatDeco: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%': { transform: 'translateX(-50%) translateY(7px)' },
        },
        panelIn: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        revealUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        floatDeco: 'floatDeco 4s ease-in-out infinite',
        scrollBounce: 'scrollBounce 2s ease-in-out infinite',
        panelIn: 'panelIn 0.4s cubic-bezier(0.4,0,0.2,1) both',
        revealUp: 'revealUp 0.7s cubic-bezier(0.4,0,0.2,1) both',
      },
    },
  },
  plugins: [],
}

export default config
