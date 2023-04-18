/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark-blue': '#00213e',
        'brand-middle-blue': '#0066b0',
        'boredr-color': '#dee2e6'
      },
    },
  },
  plugins: [],
}

