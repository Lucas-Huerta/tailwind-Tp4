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
      }, 
      fontSize: {
        mainTitle: '3.5rem',
      }
    },
  },
  plugins: [],
  darkMode: "class",
}