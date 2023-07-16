/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#b65e11",
        "primary-dark": "#ea9852",
        "error-light": "#d32f2f",
        "error-dark": "#ff6659",
        "success-light": "#388e3c",
        "success-dark": "#5ff56f",
        "warning-light": "#fbc02d",
        "warning-dark": "#fffb5c",
        "info-light": "#1976d2",
        "info-dark": "#63a4ff",
        "link-light": "#1565c0",
        "link-dark": "#5e92f3",
        "accent-light": "#7c4dff",
        "accent-dark": "#b47cff",
        "neutral-light": "#9e9e9e",
        "neutral-dark": "#cfcfcf",
        "text-light": "#222",
        "text-dark": "#fdfdfd",
        "bg-light": "#fdfdfd",
        "bg-dark": "#222",
        "black-transparency": "#2222221c",
        "white-transparency": "#fdfdfd1c",
      },
    },
  },
  plugins: [],
};
