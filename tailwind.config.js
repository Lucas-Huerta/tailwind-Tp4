/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        activeBackground: "#F7F7F7",
        activeColorDark: "#FEF089"
      },
      borderRadius: {
        '4xl': '1rem',
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
  darkMode: "class",
}