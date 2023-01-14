const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        serif: ["Lora", ...fontFamily.serif],
        mono: ["JetBrains Mono", ...fontFamily.mono],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
