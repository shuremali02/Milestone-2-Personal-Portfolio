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
      background: '#0B0F14',       // Deep navy-black for a sleek premium background
  surface: '#161B22',          // Slightly lighter dark tone for cards/sections
  primary: '#00A38C',          // Muted teal (elegant + modern)
  primaryHover: '#14B8A6',     // Brighter teal for hover/active state
  accent: '#3B82F6',           // Subtle blue accent (for links/highlights)
  textMain: '#F5F7FA',         // Soft off-white for main text
  textMuted: '#94A3B8',        // Cool gray-blue for secondary text
  border: '#2D3748',            // Light gray borders
    }
    ,
    
    
      fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
  }
},
  plugins: [],
};
export default config;
