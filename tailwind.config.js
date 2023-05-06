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
        'sans': ['Raleway', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}

