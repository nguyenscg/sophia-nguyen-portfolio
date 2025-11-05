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
        cloudMist: "#FAF9F6",
        rose: "#F4C2C2",
        midnight: "#2F2F3A",
        deepPurple: "#2E1A47",
        white: "#F8F8F8",
      },
    },
  },
  plugins: [],
}