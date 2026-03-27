/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f9',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#607d8b',
          600: '#486581',
          700: '#3a5a7a',
          800: '#2d4464',
          900: '#1a365d',
          950: '#0f2542',
        },
        gold: {
          50: '#faf7f2',
          100: '#f5eee3',
          200: '#ebdcc5',
          300: '#dfc7a6',
          400: '#d4a574',
          500: '#c88747',
          600: '#b86a2f',
          700: '#8d4f23',
          800: '#6d3d1c',
          900: '#4f3015',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
