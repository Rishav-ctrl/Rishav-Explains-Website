import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
        nepali: ['Noto Sans Devanagari', 'sans-serif'],
      },
      colors: {
        bg: "#0a0a0a",
        surface: "#111111",
        card: "#161616",
        border: "#222222",
        primary: "#ff3c3c",
        secondary: "#00c9a7",
        "text-primary": "#f0ece4",
        "text-muted": "#888888",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float2': 'float2 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.6' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)', opacity: '1' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)', opacity: '0.4' },
          '33%': { transform: 'translateY(-15px) translateX(10px)', opacity: '0.8' },
          '66%': { transform: 'translateY(10px) translateX(-5px)', opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
