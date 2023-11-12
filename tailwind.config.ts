/** @type {import('tailwindcss').Config} */
import { type Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        mobile: "url('/bg-intro-mobile.svg')",
        desktop: "url('/bg-intro-desktop.svg')",
		gradient: "bg-gradient-to-r from-teal-400 to-emerald-400",
      },
      colors: {
        primary: {
          blue: "hsl(233, 26%, 24%)",
          green: "hsl(136, 65%, 51%)",
          cyan: "hsl(192, 70%, 51%)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          gray: "hsl(0, 0%, 98%)",
          blue: "hsl(233, 8%, 62%)",
          lblue: "hsl(220, 16%, 96%)",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
