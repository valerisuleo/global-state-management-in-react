export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


export interface Action {
    type: 'ADD' | 'REMOVE' | 'SET_TODOS';
    item?: ITodo;
    id?: number;
    items?: ITodo[]; // For SET_TODOS action
}
