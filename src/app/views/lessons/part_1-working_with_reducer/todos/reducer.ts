import { ITodo, Action } from './interfaces';

export function todoReducer(state: ITodo[], action: Action): ITodo[] {
    switch (action.type) {
        case 'ADD':
            return [...state, action.item];
        case 'REMOVE':
            return state.filter((item) => item.id !== action.id);
        case 'SET_TODOS':
            return action.items;
        default:
            return state;
    }
}
