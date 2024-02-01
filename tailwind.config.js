/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        accent: "#2f80ed",
        primary: "#23262f",
        secondary: "#3b3e46",
        background: "#4d4e56",
        destructive: "#e31748",
      }
    },
  },
  plugins: [],
}