/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#071524",
        secondary: "#0E2238",
        accent: "#D32F2F",
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        numbers: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
