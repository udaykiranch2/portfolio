import { Components } from '@mui/material';
import { CustomThemeOptions } from './types';

// Shared color palette
const colors = {
  blue: {
    50: '#E3F2FD',
    100: '#BBDEFB',
    200: '#90CAF9',
    300: '#64B5F6',
    400: '#42A5F5',
    500: '#2196F3',
    600: '#1E88E5',
    700: '#1976D2',
    800: '#1565C0',
    900: '#0D47A1',
  },
  purple: {
    50: '#F3E5F5',
    100: '#E1BEE7',
    200: '#CE93D8',
    300: '#BA68C8',
    400: '#AB47BC',
    500: '#9C27B0',
    600: '#8E24AA',
    700: '#7B1FA2',
    800: '#6A1B9A',
    900: '#4A148C',
  },
  slate: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  },
};

// Common typography settings
const typography = {
  fontFamily: "'Inter', sans-serif",
  h1: {
    fontSize: '3.5rem',
    fontWeight: 700,
  },
  h2: {
    fontSize: '2.5rem',
    fontWeight: 600,
  },
  h3: {
    fontSize: '2rem',
    fontWeight: 600,
  },
  h6: {
    fontWeight: 600,
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.5,
  },
};

// Common component overrides
const components: Components = {

  MuiButton: {
    styleOverrides: {
      root: () => ({
        textTransform: 'none',
        fontWeight: 500,
      }),
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: () => ({
        backgroundImage: 'none',
      }),
    },
  },
};

export const lightTheme: CustomThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: colors.blue[500],
      light: colors.blue[300],
      dark: colors.blue[700],
    },
    secondary: {
      main: colors.purple[500],
      light: colors.purple[300],
      dark: colors.purple[700],
    },
    background: {
      default: colors.slate[50],
      paper: 'rgba(255, 255, 255, 0.8)',
    },
    text: {
      primary: colors.slate[900],
      secondary: colors.slate[600],
    },
  },
  typography,
  components: {
    ...components,
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(0,0,0,0.1)',
            },
          },
          '& label': {
            color: colors.slate[600],
          },
          '& input, & textarea': {
            color: colors.slate[900],
          },
        },
      },
    },
  },
};

export const darkTheme: CustomThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: colors.blue[400],
      light: colors.blue[300],
      dark: colors.blue[600],
    },
    secondary: {
      main: colors.purple[400],
      light: colors.purple[300],
      dark: colors.purple[600],
    },
    background: {
      default: colors.slate[900],
      paper: 'rgba(30, 41, 59, 0.8)',
    },
    text: {
      primary: colors.slate[100],
      secondary: colors.slate[400],
    },
  },
  typography,
  components: {
    ...components,
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(255,255,255,0.1)',
            },
          },
          '& label': {
            color: colors.slate[400],
          },
          '& input, & textarea': {
            color: colors.slate[100],
          },
        },
      },
    },
  },
}; 