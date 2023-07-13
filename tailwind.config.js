/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      amatic: ["Amatic SC", "cursive"],
      math: ["Lora", "serif"],
      unit: ["Manrope", "sans-serif"],
    },
    extend: {
      colors: {
        first: "#3EA1FA",
        second: "#FAB13F",
        third: "#095FAD",
        fourth: "#FFBF59",
        fifth: "#875A12",
        navColor: "#095FAD",
        bgColor: "#fef7e5",
      },
    },
  },
  plugins: [require("daisyui")],
};
