/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#591ddd",
        accent_secondary: "#8728e1",
      },
      backgroundImage: {
        body: "url('/body-bg.png')",
      },
    },
  },
  plugins: [],
};
