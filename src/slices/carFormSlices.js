import { createSlice } from '@reduxjs/toolkit';

export const carFormReducer = createSlice({
    name: 'carForm',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
    }
});

// Actions
export const { increment, decrement } = carFormReducer.actions;

// Reducers
export default carFormReducer.reducer;