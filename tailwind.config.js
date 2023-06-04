import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
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
          '0 25px 25px rgba(240, 240, 240, 0.25)',
          '0 35px 35px rgba(40, 40, 40, 0.25)',
        ]
      }
    },
  },
  plugins: [],
}

