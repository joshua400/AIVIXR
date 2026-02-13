import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        calisto: {
          white: '#ffffff',
          gray: '#f5f5f5',
          dark: '#0d0d0d',
          blue: '#255ccc',
          'bright-blue': '#308dff',
        },
        navy: {
          DEFAULT: '#031457',
          dark: '#020e3a',
          darkest: '#060b1f',
          surface: '#121426',
        },
        accent: {
          blue: '#2934ff',
          'blue-hover': '#3d47ff',
          'light-blue': '#8aa5ff',
          purple: '#854dff',
          gold: 'gold',
        },
        glass: {
          border: 'rgba(230, 235, 255, 0.08)',
          subtle: 'rgba(255, 255, 255, 0.05)',
        },
        muted: '#e6ecffb3',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        tight: ['Inter Tight', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      animation: {
        'marquee-left': 'marquee-left 25s linear infinite',
        'marquee-right': 'marquee-right 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 30s linear infinite',
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.25,0.46,0.45,0.94) forwards',
        'scale-in': 'scale-in 0.6s cubic-bezier(0.25,0.46,0.45,0.94) forwards',
      },
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-15px) rotate(2deg)' },
          '50%': { transform: 'translateY(-8px) rotate(-1deg)' },
          '75%': { transform: 'translateY(-20px) rotate(1deg)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(160px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(160px) rotate(-360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.8)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
