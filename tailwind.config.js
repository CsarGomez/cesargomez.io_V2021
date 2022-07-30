/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      mine: '#333333',
      tundora: '#404040',
      gray: '#8C8C8C',
      alto: '#D9D9D9',
      concrete: '#F2F2F2',
      white: '#FFFFFF',
      silver: '#B0B0B0',
      boulder: '#7A7A7A',
      black: '#000000',
      radical: '#ff4b5a',
    },
    fontFamily: {
      rubik: 'Rubik, sans-serif',
      taviraj: 'Taviraj, serif',
    },
    extend: {},
  },
  plugins: [],
};
