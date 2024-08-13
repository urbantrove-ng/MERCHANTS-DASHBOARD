/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryOne: "#647c0c",
        primaryTwo: "#e3e5da",
        white: "#fff",
        black: "#333",
        footer: "#9ca3af",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        roboto: ["Roboto Condensed", "sans-serif"],
      },
      boxShadow: {
        "1xl": "0 5px 15px #737373",
        "2xl": "0 5px 5px #333",
        "3xl": "0 2px 5px #333;",
        "4xl": "0 5px 5px 1px #d4d4d8",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ preferredStrategy: "pseudoelements" }),
  ],
};
