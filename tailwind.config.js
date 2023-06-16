/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      md: '900px',
    },
    extend: {
      colors: {
        primary: '#F5EFE7',
        secondary: '#D8C4B6',
        blue: '#4F709C',
        navy: '#213555',
        yellow: '#FFC26F',
      },
      animation: {
        blob: 'blob 20s infinite',
        blob2: 'blob2 10s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(10px, -5px) scale(1)',
          },
          '66%': {
            transform: 'translate(20px, -5px) scale(1)',
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)',
          },
        },
        blob2: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(-10px, 0px) scale(1)',
          },
          '66%': {
            transform: 'translate(-15px, 4px) scale(1)',
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
}
