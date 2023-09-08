/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#ECEDEE',
          100: '#DCDDDE',
          200: '#B98BBE',
          300: '#8E9297',
          400: '#72767D',
          500: '#5C6067',
          600: '#464950',
          700: '#36393F',
          800: '#2F3136',
          900: '#202225',
        }
      }
    },
  },
  plugins: [],
}

