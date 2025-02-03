/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          "color-text": "#100c0d",
          "color-text-60": "rgba(8,13,2,.6)",
          background: "#fcfafa",
          primary: "#c83a4e",
          "primary-20": "rgba(200, 58, 78, .2)",
          secondary: "#F3829E",
          accent: "#f5445c",
        },
        dark: {
          "color-text": "#e3e5f4",
          "color-text-60": "rgba(236, 238, 239,60)",
          background: "#050712",
          primary: "#919bea",
          "primary-20": "rgba(145, 155, 234, .2)",
          "primary-70": "rgba(145, 155, 234, .6)",
          secondary: "#122197",
          "secondary-20": "rgba(18, 33, 151, .8)",
          accent: "#354cf5",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
