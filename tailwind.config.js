/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'rotate': 'transform',
      },      
      colors: {
        'apple-music': '#fc3c44',
        'mgm': '#c7a338',
        'paramount': '#0164ff',
        'spotify': '#1dB954',
      },
    },
  },
  plugins: [],
}