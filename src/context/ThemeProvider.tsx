import { ReactNode, useState } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeContext } from './ThemeContext';
import { lightTheme, darkTheme } from '../theme/config';
import { GlobalStyles } from '@mui/material';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(true);
  
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <MuiThemeProvider theme={createTheme(darkMode ? darkTheme : lightTheme)}>
        <GlobalStyles
          styles={(theme) => ({
            body: {
              position: 'relative',
              backgroundColor: theme.palette.background.default,
              '&::before': {
                content: '""',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.6,
                zIndex: -1,
                background: darkMode
                  ? `
                    radial-gradient(100% 100% at 50% -20%, ${theme.palette.primary.dark}40 0%, transparent 100%),
                    radial-gradient(70% 70% at 100% 20%, ${theme.palette.secondary.dark}40 0%, transparent 100%),
                    radial-gradient(60% 60% at 0% 80%, ${theme.palette.primary.dark}40 0%, transparent 100%),
                    repeating-linear-gradient(45deg, ${theme.palette.background.paper} 0%, transparent 1px, transparent 2px, ${theme.palette.background.paper} 3px)
                  `
                  : `
                    radial-gradient(100% 100% at 50% -20%, ${theme.palette.primary.light}30 0%, transparent 100%),
                    radial-gradient(70% 70% at 100% 20%, ${theme.palette.secondary.light}30 0%, transparent 100%),
                    radial-gradient(60% 60% at 0% 80%, ${theme.palette.primary.light}30 0%, transparent 100%),
                    repeating-linear-gradient(45deg, ${theme.palette.background.paper} 0%, transparent 1px, transparent 2px, ${theme.palette.background.paper} 3px)
                  `,
                pointerEvents: 'none',
                transition: 'background 0.5s ease-in-out',
              },
              '&::after': {
                content: '""',
                position: 'fixed',
                inset: 0,
                background: darkMode
                  ? 'radial-gradient(100% 100% at 50% 50%, transparent 45%, rgba(0,0,0,0.4) 100%)'
                  : 'radial-gradient(100% 100% at 50% 50%, transparent 45%, rgba(0,0,0,0.05) 100%)',
                backdropFilter: 'blur(100px)',
                pointerEvents: 'none',
                zIndex: -1,
                transition: 'background 0.5s ease-in-out',
              }
            },
            '@keyframes gradient-shift': {
              '0%': {
                backgroundPosition: '0% 50%'
              },
              '50%': {
                backgroundPosition: '100% 50%'
              },
              '100%': {
                backgroundPosition: '0% 50%'
              }
            }
          })}
        />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}; 