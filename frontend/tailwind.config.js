const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Setel Poppins sebagai font default
      },
      colors: {
        customBrown: '#8D6B44',
        customBrowntwo: '#BD9260',
        customOrage : '#FF8A00'
      },
    },
  },
  plugins: [],
});
