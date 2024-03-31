/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        hexleap:"#738FFF",
        hexleapcolor:"#f7f7f8",
        dark: "#232a3c", 
        medium: "#293245"
      }
    },
  },
  plugins: [],
}

