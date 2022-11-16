/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "lounge-black": "#1E1E1E",
        "lounge-white": "#A3A3A3",
      },
      fontFamily: {
        lancelot: ['"Lancelot"', ...defaultTheme.fontFamily.sans],
        quicksand: ['"Quicksand"', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        headShake: {
          "0%": {
            transform: "translateX(0)",
          },
          "6.5%": {
            transform: "translateX(-6px) rotateY(-9deg)",
          },
          "18.5%": {
            transform: "translateX(5px) rotateY(7deg)",
          },
          "31.5%": {
            transform: "translateX(-3px) rotateY(-5deg)",
          },
          "43.5%": {
            transform: "translateX(2px) rotateY(3deg)",
          },
          "50%": {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        headShake: "headShake .5s 1",
      },
    },
  },
  plugins: [],
};
