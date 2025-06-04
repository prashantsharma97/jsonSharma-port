/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: { 
      colors: {
        primary: 'hsl(var(--primary))',
        background: 'hsl(var(--background))',
        secondary: 'hsl(var(--secondary))',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in forwards',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',

      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};