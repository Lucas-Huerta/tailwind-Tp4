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
      }, 
      backgroundImage: {
        'drink': "url('./assets/imgDrink.jpeg')",
      }, 
      borderWidth: {
        '2xs': '0.125rem',
        '3xs': '0.0125rem',
      }, 
      padding: {
        "2xs": '0.125rem',
        "xs": '0.25rem',
      }
    },
  },
  plugins: [],
  darkMode: "class",
}