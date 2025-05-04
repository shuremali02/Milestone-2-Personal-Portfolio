import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // tailwind.config.ts
theme: {
  extend: {
    colors: {
      background: '#0D0D0D',
      surface: '#1A1A1A',
      primary: '#00BFA6',
      primaryHover: '#00D4A7',
      textMain: '#FFFFFF',
      textMuted: '#B0B0B0',
      border: '#2E2E2E',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
  }
},
  plugins: [],
};
export default config;
