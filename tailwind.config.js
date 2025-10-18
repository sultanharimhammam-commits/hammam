/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#C89B3C',
        sand: '#E6D6B8',
        terracotta: '#5E3D2C',
        stone: '#8C8C8C',
        dark: '#1C1C1C',
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
