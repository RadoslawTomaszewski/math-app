/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        first: "#3EA1FA",
        second: "#FAB13F",
        third: "#095FAD",
        fourth: "#FFBF59",
        fifth: "#875A12",
      },
    },
  },
  plugins: [require("daisyui")],
};
