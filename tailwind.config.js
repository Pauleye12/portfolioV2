/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBG: "#161719",
        secondaryBG: "#6E5CB5",
        auxilaryBG: "#262428",
        primaryText: "#c0c0c3",
        secondaryText: "#6855E5",
      },
    },
  },
  plugins: [],
};
