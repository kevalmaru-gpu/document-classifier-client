/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      cursive: 'Dancing Script',
      playfair: 'Playfair Display'
    },
    extend: {
      colors: {
        'body': '#FDF6EC',
        'header': '#fae9d1',
        'button': '#FFD8A9',
        'footer': '#FFEDDB'
      }
    },
  },
  plugins: [],
}