/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      cursive: 'Dancing Script'
    },
    extend: {
      colors: {
        'body': '#FDF6EC',
        'header': '#fef3e7',
        'button': '#FFD8A9'
      }
    },
  },
  plugins: [],
}