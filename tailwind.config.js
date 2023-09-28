// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Specify your project's HTML and JavaScript/JSX files
  darkMode: false, // Set to 'media' or 'class' for dark mode support
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans'], // Customize your project's font stack
      },
      colors: {
        primary: '#007bff', // Define custom colors
        secondary: '#ff9900',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // ...other plugins
    require('tailwindcss-transitions')(),
    require('tailwindcss-transforms')(),
  ],
};
