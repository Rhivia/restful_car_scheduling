import { createSlice } from '@reduxjs/toolkit';

export const carFormReducer = createSlice({
    name: 'carForm',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            console.log('increment');
            state.value += 1;
        },
        decrement: (state) => {
            console.log('decrement');
            state.value -= 1;
        },
    }
});

// Actions
export const { increment, decrement } = carFormReducer.actions;

// Selectors
export const selectCount = state => state.carForm.value;

// Reducers
export default carFormReducer.reducer;