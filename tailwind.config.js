/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        interBold: ["Bold", "sans-serif"],
        interRegular: ["Regular", "sans-serif"],
        interMedium: ["Medium", "sans-serif"],
        interSemiBold: ["SemiBold", "sans-serif"],
        interLight: ["Light", "sans-serif"],
      },
      colors: {
        main: {
          100: "#FF3C8B",
          200: "#403B3B",
        },
      },
    },
  },
  plugins: [],
};
