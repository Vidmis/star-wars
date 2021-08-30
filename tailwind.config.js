module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        palette: {
          sun: "#FAE125",
          sky: { 200: "#9cf7eb", 300: "#49BFAF" },
          space: "#201652",
          mars: "#CE102C",
          jupiter: "#F3DCB3",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
