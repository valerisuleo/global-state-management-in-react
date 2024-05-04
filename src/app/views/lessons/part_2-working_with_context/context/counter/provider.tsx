import { useState } from 'react';
import { Context } from './context';
import { IContext } from '../../../../../common/interfaces';

// Creating the provider component
export const CounterProvider = ({ children }: IContext) => {
    const [count, setCount] = useState(0);
    const increase = () => setCount((count) => count + 1);
    const decrease = () => setCount((count) => count - 1);

    return (
        <Context.Provider value={{ increase, decrease, count }}>
            {children}
        </Context.Provider>
    );
};
