/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1c1917",
        muted: "#78716c",
        cream: "#faf6f0",
        parchment: "#f3ece0",
        terracotta: "#c8553d",
        ember: "#a8422c",
        olive: "#5a6b3a",
        moss: "#3f4a2a",
        gold: "#c9a96a",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        serif: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -8px rgb(0 0 0 / 0.12)",
        lift: "0 12px 32px -12px rgb(0 0 0 / 0.18)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};