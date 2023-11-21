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
        'drink': "url('https://st5.depositphotos.com/18778506/65104/i/450/depositphotos_651046062-stock-photo-young-healthy-girl-sport-water.jpg')",
      }, 
      borderWidth: {
        '2xs': '0.125rem',
        '3xs': '0.0125rem',
      }, 
      padding: {
        "2xs": '0.125rem',
        "xs": '0.25rem',
      }, 
      keyframes: {
        swoosh: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(1000px)' },
        }
      }, 
      animation: {
        'swoosh-button': 'swoosh 3s linear',
      }
    },
  },
  plugins: [],
  darkMode: "class",
}