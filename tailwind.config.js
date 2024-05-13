/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DBD56E',
        secondary: {
          100: '#034732',
          200: '#EF8A17',
        }
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}

