/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#ED7D2D",
      "primary-light": "#F9D8C0",
      secondary: "#171A1F",
      white: colors.white,
      gray: colors.gray,
      bone: "#fafafa",
    },
    extend: {},
  },
  plugins: [],
};
