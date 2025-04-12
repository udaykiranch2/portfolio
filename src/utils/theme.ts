import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

// Initialize theme based on localStorage or system preference
const getInitialTheme = () => {
    if (typeof window === 'undefined') return false;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

// Set the dark class on the document element
const setDarkClass = (isDark: boolean) => {
    if (isDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
};

export const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            isDarkMode: getInitialTheme(),
            toggleTheme: () =>
                set((state) => {
                    const newTheme = !state.isDarkMode;
                    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
                    setDarkClass(newTheme);
                    return { isDarkMode: newTheme };
                }),
        }),
        {
            name: 'theme-storage',
        }
    )
); 