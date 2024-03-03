/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#180344'
      }
    },
  },
  plugins: [require("daisyui")],
}

