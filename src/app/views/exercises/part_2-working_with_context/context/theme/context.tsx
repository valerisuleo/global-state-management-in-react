import { createContext, useContext } from 'react';

interface ITheme {
    isDarkMode: boolean;
    handleDarkMode: () => void;
}

export const Context = createContext<ITheme | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(Context);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
