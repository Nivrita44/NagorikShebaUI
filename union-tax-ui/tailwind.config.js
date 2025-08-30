/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        solaiman: ["SolaimanLipi", "sans-serif"],
      },
    },
  },
  plugins: [],
};
