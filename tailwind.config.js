import defaultTheme from 'tailwindcss/defaultTheme'

const cor = 'rgba(239,239,239,0.71)';


/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cultured': '#F8F8F8',
        'black-olive': '#404040',
        'black-smoky': '#0E0E0E',
        ...defaultTheme.colors
      },
      fontFamily: {
        'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      dropShadow: {
        '4xl': [
          '0 20px 20px '+cor,
          '0 60px 60px rgba(40, 40, 40, 0.2)',
        ]
      }
    },
  },
  plugins: [],
}

