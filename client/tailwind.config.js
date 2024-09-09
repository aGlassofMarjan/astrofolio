/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}', // Adjust this to match your Astro project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
};
