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
        sideColor: "#DFD5BD",
        bgColor: "#fef7e5",
        navColor: "#68B9FF",
        borderColor: "#095FAD",
      },
    },
  },
  plugins: [require("daisyui")],
};
