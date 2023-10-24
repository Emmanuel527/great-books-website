/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {

      backgroundImage: {
        'hero-img': "url('/public/images/hero-img.png')",
      }
      
    },
    fontFamily: {
      roman : 'Romanesco'
    }

  },

  plugins: [],

}
