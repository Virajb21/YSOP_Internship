/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         primary: '#F5385D',
         'purple-beat': '#634cec',
         'browser-color': '#ffb91f',
         'viewport-color': '#5131a9',
         'tab-color': '#6e45df',
      },
    },
  },
  plugins: [],
}
