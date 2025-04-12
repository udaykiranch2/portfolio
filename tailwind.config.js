/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        slate: {
          800: "#1E293B",
          900: "#0F172A",
        },
        blue: {
          500: "#3B82F6",
          600: "#2563EB",
        },
        primary: {
          light: "#60A5FA",
          DEFAULT: "#3B82F6",
          dark: "#1D4ED8",
        },
        secondary: {
          light: "#A78BFA",
          DEFAULT: "#8B5CF6",
          dark: "#6D28D9",
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};
