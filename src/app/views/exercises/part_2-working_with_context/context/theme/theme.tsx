import { useState } from 'react';
import { IContext } from '../../../../../common/interfaces';
import { Context } from './context';

const ThemeProvider = ({ children }: IContext) => {
    const [isDarkMode, setDarkMode] = useState<boolean>(false);

    const handleDarkMode = () => {
        setDarkMode((prevState) => !prevState);
    };

    return (
        <Context.Provider value={{ isDarkMode, handleDarkMode }}>
            {children}
        </Context.Provider>
    );
};

export default ThemeProvider;
