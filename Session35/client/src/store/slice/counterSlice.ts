import { createSlice } from "@reduxjs/toolkit";

const counterSlice =createSlice({
    name:"counter",
    initialState:{
        value:0
        
    },
    reducers:{
        increment:(state)=>{
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            state.value+=1;
        },
        reduce:(state)=>{
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            state.value-=1;
        }
    }
    
})
export const {reduce} =counterSlice.actions;
export const {increment} =counterSlice.actions;
export default counterSlice.reducer;