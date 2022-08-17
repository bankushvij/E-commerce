/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'spin-slow': 'spin 1s linear ',
        'ping-slow': 'ping 5s cubic-bezier(1, 1, 0.2, 1) infinite',
        wiggle: 'wiggle 0.2s ease-in-out 50ms',
        'fade-in-up': 'fade-in-up 1s ease-out',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-20deg)' },
          '50%': { transform: 'rotate(20deg)' },
        },
        'fade-in-up': {
          '0%': {
              opacity: '0',
              transform: 'translateY(200px)'
          },
          '50%': {
              opacity: '0.5',
              transform: 'translateY(50px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
      },
      }
    },
  },


  plugins: [
    require('@tailwindcss/forms'),
  ],
}
