/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: { 
      backgroundImage: {
     'cow-image':"url('/assets/closeup-shot-cows-grazing-field-sunny-afternoon.jpg')"
    }},
  },
  plugins: [],
}

