import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter",
    initialState: 0,
    reducers:{
        increment: (state) =>{
            return state + 1;
        },
        decrement: state => {
            return state -1;
        },
        setSpecificValue: (state, action) =>{
            return action.payload
        }
    }
})

export const {increment, decrement, setSpecificValue} = counterSlice.actions;

export default counterSlice.reducer;