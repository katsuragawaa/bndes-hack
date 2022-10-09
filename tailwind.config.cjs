/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "hack-green": "#72DE81",
        "hack-blue": "#51A5F0",
        "hack-blue-dark": "#5D6FEA",
      },
      fontFamily: {
        sans: ['Lato', 'serif'],
      },
    },
  },
  plugins: [],
};
