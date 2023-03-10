/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
      },
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        green: {
          100: "#2EF2BB",
          200: "#092E31",
        },
      },
      fontFamily: {
        comforta: ["Comfortaa", "cursive"],
      },
    },
  },
  plugins: [],
};
