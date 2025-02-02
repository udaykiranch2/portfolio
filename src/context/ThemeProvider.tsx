import { ReactNode, useState } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeContext } from './ThemeContext';
import { lightTheme, darkTheme } from '../theme/config';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(true);
  
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <MuiThemeProvider theme={createTheme(darkMode ? darkTheme : lightTheme)}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}; 