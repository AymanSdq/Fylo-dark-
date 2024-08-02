/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        darkBlueEmail : "#1c2431",
        darkBlueBg : "#181f2a",
        darkBlueFooter : "#0b1523",
        darkBlueTest : "#202a3c",
        colorCyan : "#65e2d9",
        colorBlue : "#339ecc",
        lightRed : "#ff4242"
      }
    },
  },
  plugins: [],
}

