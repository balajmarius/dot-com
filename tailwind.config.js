/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "system-ui", "sans-serif"],
      },
      colors: {
        gray: {
          50: "#A1A1A1",
          100: "#888888",
          150: "#333333",
        },
      },
    },
  },
};
