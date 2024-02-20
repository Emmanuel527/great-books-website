/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {

      backgroundImage: {
        'heroImg': "url('/images/hero-img.png')",
      }
      
    },
    fontFamily: {
      roman : 'Romanesco'
    }

  },

  plugins: [],

}
