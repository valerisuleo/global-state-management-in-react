import { Fragment, useEffect, useReducer } from 'react';
import { todoReducer } from './reducer';
import http from '../../api-client';
import { ITodo } from './interfaces';

const Todos = () => {
    const [value, dispatch] = useReducer(todoReducer, []);
    const newTodo = {
        userId: 1,
        id: 4,
        title: 'new todo',
        completed: false,
    };

    useEffect(() => {
        getTodos();
    }, []);

    async function getTodos() {
        const response = await http.get('todos', { params: { _limit: 3 } });
        const data: ITodo[] = response.data;
        dispatch({ type: 'SET_TODOS', items: data });
    }

    const handleBtnClick = () => {
        dispatch({ type: 'ADD', item: newTodo });
    };

    const handleDelete = (todo: ITodo) => {
        dispatch({ type: 'REMOVE', id: todo.id });
    };

    return (
        <Fragment>
            <h1>todos</h1>
            <button className="btn btn-primary my-5" onClick={handleBtnClick}>
                Add todo
            </button>

            <ul className="list-group">
                {value.map((item: ITodo) => (
                    <li
                        key={item.id}
                        className="list-group-item d-flex justify-content-between align-items-center"
                    >
                        {item.title}
                        <button
                            onClick={() => handleDelete(item)}
                            className="btn btn-sm btn-danger"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
};

export default Todos;
