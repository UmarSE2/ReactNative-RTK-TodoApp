import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 1, text: 'Learn React Native' },
    { id: 2, text: 'Build a todo app' },
    { id: 3, text: 'Teach a todo app' },
];

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    // initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload,
            };
            state.push(newTodo);
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todoToUpdate = state.find(todo => todo.id === id);
            if (todoToUpdate) {
                todoToUpdate.text = text;
            }
        },
        deleteTodo: (state, action) => {
            const { id } = action.payload;
            const index = state.findIndex(todo => todo.id === id);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
    },
});

export const { addTodo, updateTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
