import React from 'react';
import useCounterStore from './store';

const CounterWithZustand = () => {
    const { counter, increment, reset } = useCounterStore();
    
    // const [count, setCount] = useState(0);

    // const increase = () => {
    //     setCount((prev) => prev + 1);
    // };

    return (
        <div>
            <button className="btn btn-primary m-3" onClick={increment}>
                Increase
            </button>
            <button className="btn btn-warning m-3" onClick={reset}>
                Reset
            </button>
            {counter}
        </div>
    );
};

export default CounterWithZustand;
