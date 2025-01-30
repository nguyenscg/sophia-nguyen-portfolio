/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonCyan: "#00E6E6",
        valorantRed: "#FF4655",
        darkSlate: "#1C1C28",
        deepPurple: "#2E1A47",
        white: "#F8F8F8",
      },
    },
  },
  plugins: [],
}