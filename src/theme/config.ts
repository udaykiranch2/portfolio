import { CustomThemeOptions } from './types';

export const lightTheme: CustomThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: "#3B82F6",
      light: "#60A5FA",
      dark: "#2563EB",
    },
    secondary: {
      main: "#10B981",
      light: "#34D399",
      dark: "#059669",
    },
    background: {
      default: "#F8FAFC",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#0F172A",
      secondary: "#334155",
    },
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    h1: { fontSize: "3.5rem", fontWeight: 700, color: "#0F172A" },
    h2: { fontSize: "2.5rem", fontWeight: 600, color: "#0F172A" },
    h3: { fontSize: "2rem", fontWeight: 600, color: "#0F172A" },
    body1: { color: "#334155" },
  },
};

export const darkTheme: CustomThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: "#3B82F6",
      light: "#60A5FA",
      dark: "#2563EB",
    },
    secondary: {
      main: "#10B981",
      light: "#34D399",
      dark: "#059669",
    },
    background: {
      default: "#0F172A",
      paper: "#1E293B",
    },
    text: {
      primary: "#F1F5F9",
      secondary: "#94A3B8",
    },
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    h1: { fontSize: "3.5rem", fontWeight: 700, color: "#F1F5F9" },
    h2: { fontSize: "2.5rem", fontWeight: 600, color: "#F1F5F9" },
    h3: { fontSize: "2rem", fontWeight: 600, color: "#F1F5F9" },
    body1: { color: "#94A3B8" },
  },

}; 