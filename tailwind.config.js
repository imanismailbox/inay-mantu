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
  daisyui: {
    // themes: ["light", "dark", "cupcake"],
    themes: [
        {
          mytheme: {
            "primary": "#9F7AEA",
            "secondary": "#463aa1",
            "accent": "#c149ad",
            "neutral": "#021431",
            "base-100": "#ffffff",
            "info": "#93e6fb",
            "success": "#80ced1",
            "warning": "#efd8bd",
            "error": "#e58b8b",
            "--rounded-btn": "1.9rem",
          },
        },
      ],
  },
}

