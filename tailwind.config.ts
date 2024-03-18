import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "#F5F5F8",
        darkForeground: "#222423",
        background: "#F9F9FB",
        darkBackground: "#1D1F1E",
        text: "#2e3f51",
        darkText: "#f7f2df",
        accentBlue: "#47a6bd",
        accentRed: "#d15a44",
      },
    },
  },
  plugins: [],
};
export default config;
