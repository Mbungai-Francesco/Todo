/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        myBlue: {
          100: "hsl(192, 100%, 67%) ",
          200: "hsl(220, 98%, 61%)",
        },
        myDarkBlue: {
          100: "hsl(236, 33%, 92%)",
          200: "hsl(234, 39%, 85%)",
          300: "hsl(234, 11%, 52%)",
          400: "hsl(233, 14%, 35%)",
          500: "hsl(237, 14%, 26%)",
          600: "hsl(235, 24%, 19%)",
          700: " hsl(235, 21%, 11%)",
        },
        myPurple: "hsl(280, 87%, 65%)",
        myGray: {
          100: "hsl(0, 0%, 98%)",
          200: "hsl(236, 33%, 92%)",
          300: "hsl(233, 11%, 84%)",
          400: "hsl(236, 9%, 61%)",
          500: "hsl(235, 19%, 35%)",
        },
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
