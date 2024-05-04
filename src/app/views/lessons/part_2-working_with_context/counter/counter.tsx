/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Fragment } from 'react';
import { useCounter } from '../context/counter/context';

const Counter = () => {
    const { count, increase, decrease } = useCounter();

    return (
        <div className='my-5'>
            <h1>Counter</h1>
            <button className="btn btn-primary mx-1" onClick={() => increase()}>
                +
            </button>
            <button className="btn btn-primary mx-1" onClick={() => decrease()}>
                -
            </button>

            {count}
        </div>
    );
};

export default Counter;

// ______________________________USING DATA CONTEXT______________________________
// const Counter = () => {
//     const { outputEvent } = useDataContext();
//     const [count, setCount] = useState(0);
//     const increase = () => setCount((count) => count + 1);
//     const decrease = () => setCount((count) => count - 1);

//     useEffect(() => {
//         outputEvent({
//             name: 'count',
//             data: count,
//         });
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [count]);

//     return (
//         <Fragment>
//             <h1>Counter</h1>
//             <button className="btn btn-primary mx-1" onClick={() => increase()}>
//                 +
//             </button>
//             <button className="btn btn-primary mx-1" onClick={() => decrease()}>
//                 -
//             </button>

//             {count}
//         </Fragment>
//     );
// };

// export default Counter;
