/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  screens: {
    md: "987px",
    // => @media (min-width: 640px) { ... }

    // laptop: "1024px",
    // // => @media (min-width: 1024px) { ... }

    laptop: "1280px",
    // => @media (min-width: 1280px) { ... }
  },
  purge: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// module.exports = {
//   content: [
//     "./index.html",
//     ".src/**/*. {vue,ts,js} "
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
