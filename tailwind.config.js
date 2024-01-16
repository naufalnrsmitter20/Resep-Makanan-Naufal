/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "Hero-image": "url('img/heroImage.jpg')",
      },
      backgroundColor: {
        transparants: "rgba(255, 255, 255, 0.466)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
