import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(from var(--background) h s l / <alpha-value>)",
        foreground: "hsl(from var(--foreground) h s l / <alpha-value>)",
        primary: "hsl(from var(--primary) h s l / <alpha-value>)",
        header: "hsl(from var(--header) h s l / <alpha-value>)",
        "header-lighter":
          "hsl(from var(--header-lighter) h s l / <alpha-value>)",
        card: {
          DEFAULT: "hsl(from var(--card) h s l / <alpha-value>)",
          foreground: "hsl(from var(--card-foreground) h s l / <alpha-value>)",
        },
        border: "hsl(from var(--border) h s l / <alpha-value>)",
      },
      fontFamily: {
		runescape: ['"RuneScape UF"', ...defaultTheme.fontFamily.mono],
	  },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
