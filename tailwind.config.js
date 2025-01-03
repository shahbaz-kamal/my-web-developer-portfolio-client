/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          "color-text": "#100c0d",
          "color-text-60": "rgba(8,13,2,.6)",
          background: "#fcfafa",
          primary: "#c83a4e",
          secondary: "#F3829E",
          accent: "#f5445c",
        },
        dark: {
          "color-text": "#e3e5f4",
          "color-text-60": "rgba(236, 238, 239,60)",
          background: "#050712",
          primary: "#919bea",
          secondary: "#122197",
          accent: "#354cf5",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
