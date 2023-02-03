/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ['Unbounded', 'cursive'],
        poppins:['Poppins', 'sans-serif']
    },
  },
  plugins: [],
  }
}
