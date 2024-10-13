const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["variant", "&:is(.dark *)&:not(.light *)"],
  content: [
    "./app/**/*.{js,jsx,md,mdx,ts,tsx}",
    "./components/**/*.{js,jsx,md,mdx,ts,tsx}",
    "./data/**/*.{js,jsx,ts,tsx}",
    "./examples/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E7F2F6",
          100: "#CFE5ED",
          200: "#B7D8E3",
          300: "#9FCBDA",
          400: "#87BFD1",
          500: "#3E98B5",
          600: "#268BAC",
          700: "#0E7EA3",
          800: "#0A5872",
          900: "#084C62",
        },
      },
      maxWidth: {
        "8xl": "90rem",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fadeIn 200ms ease-in-out",
      },
      boxShadow: {
        "lg-light": "0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)",
      },
    },
    fontFamily: {
      sans: [
        "var(--font-inter)",
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      mono: [
        "var(--font-roboto-mono)",
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
  },
  plugins: [flowbite],
};
