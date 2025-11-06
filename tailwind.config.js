/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryRose: "#F4C2C2",
        background: "#1F0B0A",
        aboutBg: "#4C2628",
        projectsBg: "#734A4A",
        subtitles: "#AC7E7F",
        highlights: "#734A4A",
        buttons: "#4C2628",
        hmm: "#D4A4A4",
        valorantRed: "#FF4655",
        cloudMist: "#FAF9F6",
        midnight: "#2F2F3A",
        deepPurple: "#2E1A47",
        dusty: "#B8AFA1",
        moonlit: "#D6CDEA",
        white: "#F8F8F8",
      },
    },
  },
  plugins: [],
}