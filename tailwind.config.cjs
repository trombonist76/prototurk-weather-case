/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          light: "#10192C",
          DEFAULT: "#020617",
        },
      },
    },
  },
  plugins: [],
};
