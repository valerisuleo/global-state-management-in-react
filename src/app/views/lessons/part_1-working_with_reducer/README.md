# README: How to Refactor Your React Todos Component with `useReducer`

Welcome to this quick guide on refactoring your React `Todos` component to use the `useReducer` hook! If you've been managing state with `useState` and find it a bit clunky for complex scenarios, you're in the right place. `useReducer` can help simplify how you handle state operations, especially when you have multiple actions that update the state in various ways.

### Why Use `useReducer`?

Using `useReducer` makes your component cleaner and your state changes more predictable. It's particularly great for handling more complex state logic that involves multiple sub-values or when the next state depends on the previous one. It also makes it easier to implement an undo feature or to log changes, which can be super helpful during development.

## Refactoring to `useReducer`

Let’s break down the refactoring process into simple steps, using our `Todos` component as an example.


### Original `Todos` Component with `useState`

Your original component structure might look something like this:

```javascript
import { Fragment, useEffect, useState } from 'react';
import http from '../../api-client';
import { ITodo } from './interfaces';

const Todos = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const newTodo = {
        userId: 1,
        id: 4,
        title: 'new todo',
        completed: false,
    };

    useEffect(() => {
        async function getTodos() {
            const response = await http.get('todos', { params: { _limit: 3 } });
            const data = response.data;
            setTodos(data);
        }
        getTodos();
    }, []);

    const handleBtnClick = () => {
        setTodos([newTodo, ...todos]);
    };

    const handleDelete = (todo) => {
        setTodos(todos.filter(t => t.id !== todo.id));
    };

    return (
        <Fragment>
            <h1>todos</h1>
            <button onClick={handleBtnClick}>Add todo</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                        <button onClick={() => handleDelete(todo)}>Delete</button>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
};
```

### Step 1: Define the Reducer

First, we define a `todoReducer` that handles various actions like adding a todo, removing a todo, and setting an initial list of todos.

```javascript
export function todoReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return [...state, action.item];
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        case 'SET_TODOS':
            return action.items;
        default:
            return state;
    }
}
```

### Step 2: Refactor the Component to Use `useReducer`

Now, let's refactor the component to use this reducer.

```javascript
import { Fragment, useEffect, useReducer } from 'react';
import http from '../../api-client';
import { ITodo } from './interfaces';

const Todos = () => {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const newTodo = {
        userId: 1,
        id: 4,
        title: 'new todo',
        completed: false,
    };

    useEffect(() => {
        async function getTodos() {
            const response = await http.get('todos', { params: { _limit: 3 } });
            const data = response.data;
            dispatch({ type: 'SET_TODOS', items: data });
        }
        getTodos();
    }, []);

    const handleBtnClick = () => {
        dispatch({ type: 'ADD', item: newTodo });
    };

    const handleDelete = (todo) => {
        dispatch({ type: 'REMOVE', id: todo.id });
    };

    return (
        <Fragment>
            <h1>todos</h1>
            <button onClick={handleBtnClick}>Add todo</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                        <button onClick={() => handleDelete(todo)}>Delete</button>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
};
```

## Summary of Changes and Benefits

1. **State Management**: We replaced `useState` with `useReducer`, which simplifies the state management especially when the logic gets complex.
2. **Handling Side Effects**: Actions related to fetching and updating the state are now dispatched in a consistent manner which can be traced more straightforwardly in larger applications.
3. **Scalability**: `useReducer` makes the component easier to extend. For example, adding undo functionality or more complex state transitions is simpler with `useReducer`.

This refactor not only cleans up the component by centralizing state logic but also improves the maintainability and scalability of the code.
