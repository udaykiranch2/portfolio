import { Components } from '@mui/material';
import { CustomThemeOptions } from './types';

// Shared color palette
const colors = {
  blue: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    400: '#60A5FA',
    500: '#3B82F6',
    600: '#2563EB',
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
  green: {
    400: '#34D399',
    500: '#10B981',
    600: '#059669',
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
      light: colors.blue[400],
      dark: colors.blue[600],
    },
    secondary: {
      main: colors.green[500],
      light: colors.green[400],
      dark: colors.green[600],
    },
    background: {
      default: colors.slate[50],
      paper: '#FFFFFF',
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
      main: colors.blue[500],
      light: colors.blue[400],
      dark: colors.blue[600],
    },
    secondary: {
      main: colors.green[500],
      light: colors.green[400],
      dark: colors.green[600],
    },
    background: {
      default: colors.slate[900],
      paper: colors.slate[800],
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