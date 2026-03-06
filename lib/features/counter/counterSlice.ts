import { createSlice } from "@reduxjs/toolkit";

// Define type or interface
export interface CounterState {
    value : number ;
}

// 1. define initialState
const initialState : CounterState = {
    value : 0 
}

// 2. define reducer
export const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers: {
        increment : (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1 
        }
    }
})

// 3. export action of reducer
export const  {increment , decrement} = counterSlice.actions


// 4. Export Reducer
export default counterSlice.reducer