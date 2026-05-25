/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "serif"],
        poppins: ["Poppins", "serif"],
      },
      colors: {
        primary: "#FF6B1A",
        "primary-light": "#FF8A3D",
        "primary-lighter": "#FFB347",
        "appso-orange": "#FF6B1A",
        hero: {
          dark: "#0A1628",
          navy: "#0E1F3E",
          blue: "#132B50",
        },
        steps: {
          bg: "#0A1929",
          circle: "#0F1C3A",
        },
        "gray-600": "#4a5568",
        "gray-500": "#718096",
      },
    },
  },
  plugins: [],
};
