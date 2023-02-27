/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
      colors: {
        logo: "#7ce1c4",
        primary: "#f9f9f9",
        purple: "#5943be",
        organce: "#ffd3b6",
        lightGray: "#154687",
        darkGreen: " #889d71",
        rosyBrown: "#9e8891",
        linen: "linen",
        ghostWhite: "#f6f4ff",
      },
    },
  },
  plugins: [],
};
