/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#080baf",
        skyBlue: "#5773f0"
      }
    },
  },
  plugins: [],
}

