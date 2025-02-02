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
              '&::before': {
                content: '""',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.15,
                zIndex: -1,
                background: darkMode
                  ? `
                    radial-gradient(80% 80% at 50% -20%, ${theme.palette.primary.dark}80 0%, transparent 100%),
                    radial-gradient(50% 50% at 25% 25%, ${theme.palette.secondary.dark}80 0%, transparent 100%),
                    radial-gradient(30% 30% at 75% 75%, ${theme.palette.primary.dark}80 0%, transparent 100%),
                    radial-gradient(70% 70% at 100% 50%, ${theme.palette.secondary.dark}80 0%, transparent 100%),
                    radial-gradient(40% 40% at 15% 75%, ${theme.palette.primary.dark}80 0%, transparent 100%),
                    radial-gradient(60% 60% at 85% 15%, ${theme.palette.secondary.dark}80 0%, transparent 100%)
                  `
                  : `
                    radial-gradient(80% 80% at 50% -20%, ${theme.palette.primary.light}80 0%, transparent 100%),
                    radial-gradient(50% 50% at 25% 25%, ${theme.palette.secondary.light}80 0%, transparent 100%),
                    radial-gradient(30% 30% at 75% 75%, ${theme.palette.primary.light}80 0%, transparent 100%),
                    radial-gradient(70% 70% at 100% 50%, ${theme.palette.secondary.light}80 0%, transparent 100%),
                    radial-gradient(40% 40% at 15% 75%, ${theme.palette.primary.light}80 0%, transparent 100%),
                    radial-gradient(60% 60% at 85% 15%, ${theme.palette.secondary.light}80 0%, transparent 100%)
                  `,
                pointerEvents: 'none',
              },
              '&::after': {
                content: '""',
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '150vmax',
                height: '150vmax',
                background: darkMode
                  ? `radial-gradient(circle, transparent 35%, ${theme.palette.background.default} 100%)`
                  : `radial-gradient(circle, transparent 35%, ${theme.palette.background.default} 100%)`,
                opacity: 0.9,
                zIndex: -1,
                pointerEvents: 'none',
              }
            }
          })}
        />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}; 