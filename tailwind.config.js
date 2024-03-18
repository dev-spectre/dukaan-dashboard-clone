/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#146eb4",
        "primary-200": "#0e4f82",
        "secondary-450": "#f2f2f2",
        "grey": "#4d4d4d",
      },
      backgroundColor: {
        "primary-100": "#fff",
        "primary-200": "#fafafa",
        "primary-450": "#f2f2f2",
        "primary-500": "#e6e6e6",
        "secondary-100": "#146eb4",
        "secondary-200": "#0e4f82",
      },
      fontFamily: {
        sans: ["system-ui"],
      },
    },
  },
  plugins: [],
};
