/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'display': ['Great Vibes', 'cursive'],
      'body': ['Josefin Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

