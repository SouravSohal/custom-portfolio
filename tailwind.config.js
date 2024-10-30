/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        animate: 'animate 25s linear infinite',
        gradientBackground: 'gradientBackground 15s ease-in-out infinite alternate',
      },
      keyframes: {
        animate: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '100%': { transform: 'translate(-100%, -100%) rotate(360deg)' },
        },
        gradientBackground: {
          '0%': { backgroundColor: '#050816' },
          '100%': { backgroundColor: '#151030' },
        },
      },
      spacing: {
        '7.5': '30px',
      },
    },
  },
  variants: {},
  plugins: [],
};



