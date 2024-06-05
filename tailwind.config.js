/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#B7C9F2',
        headerFooterColor: '#9195F6',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

