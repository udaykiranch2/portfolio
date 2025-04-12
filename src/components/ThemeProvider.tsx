import { useEffect } from 'react';
import { useThemeStore } from '../utils/theme';

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const { isDarkMode } = useThemeStore();

    useEffect(() => {
        // Force a re-render of dark mode classes
        document.documentElement.classList.remove('dark');
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        }
    }, [isDarkMode]);

    return <>{children}</>;
}; 