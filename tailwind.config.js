/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Inconsolata", "system-ui", "sans-serif"],
      },
      colors: {
        blue: {
          DEFAULT: "#0091FF",
        },
        gray: {
          50: "#EDEDED",
          100: "#888888",
          150: "#333333",
        },
      },
    },
  },
};
