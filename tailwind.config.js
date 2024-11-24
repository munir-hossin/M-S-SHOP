/* eslint-disable no-undef */

// const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'selector',
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // flowbite.plugin(),
    require('daisyui'),
    require('tailwind-scrollbar-hide')
  ],
}

// module.exports = {
//   darkMode: 'class', // Ensure this line is present
//   // Other configurations...
// };





















// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
  
// }



