/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#b65e11',
        'primary-dark': '#ea9852',
        'text-light': '#222',
        'text-dark': '#fdfdfd',
        'bg-light': '#fdfdfd',
        'bg-dark': '#222',
        'black-transparency': '#2222221c',
        'white-transparency': '#fdfdfd1c',

      }
    },
  },
  plugins: [],
}

