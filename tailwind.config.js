/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        jetbrainsmono: ['JetBrains Mono', 'sans-serif'],
        hanken: ['Hanken Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}