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
      background: '#0B0F14',       // Deep navy-black for premium feel
      surface: '#161B22',          // Dark blue-gray for card backgrounds
      primary: '#00A38C',          // Muted teal, less neon, more refined
      primaryHover: '#14B8A6',     // Slightly brighter teal for hover
      textMain: '#F5F7FA',         // Off-white for softer readability
      textMuted: '#94A3B8',        // Cool gray-blue for subtle text
      border: '#2D3748',           // Softer neutral border
    },
    
      fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
  }
},
  plugins: [],
};
export default config;
