import { Components } from '@mui/material';
import { CustomThemeOptions } from './types';

// Shared color palette based on your design
const colors = {
  blue: {
    50: '#E3F2FD',
    100: '#CDEBF7',
    200: '#A5D8F3',
    300: '#9fd3e0', // Updated to match extracted theme
    400: '#9dcee6', // Lighter primary blue
    500: '#9ecee7', // Main primary color
    600: '#9fcde9',
    700: '#85B8D0',
    800: '#6AA2B6',
    900: '#4F8D9C',
  },
  purple: {
    50: '#F3E5F5',
    100: '#E1BEE7',
    200: '#D1A7DA',
    300: '#BE8EC8',
    400: '#AA77B5',
    500: '#9461A2',
    600: '#7D4C8F',
    700: '#65367D',
    800: '#4E226A',
    900: '#370D57',
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
        borderRadius: 8,
      }),
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: () => ({
        backgroundImage: 'none',
        borderRadius: 8,
      }),
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 8,
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: 8,
        },
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: 8,
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 8,
      },
    },
  },
  MuiGrid2: {
    styleOverrides: {
      root: {
        '&::after': {
          display: 'none !important',
        },
      },
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
      default: '#ffffff',
      paper: 'rgba(255, 255, 255, 0.9)',
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
  }
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
      paper: ''
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
