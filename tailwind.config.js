/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-image": "url('/src/images/wallpaper.webp')",
      },
    },
  },
  plugins: [],
};
