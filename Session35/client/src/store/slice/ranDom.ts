import { createSlice } from "@reduxjs/toolkit";


const ranDom = createSlice({
    name:"ranDom",
    initialState:{
        arr : []
    },
    reducers:{
        random : (state) => {
            const number : number = Math.floor(Math.random() * 99);
            state.arr.push(number);
        }
    }
})

export const { random } = ranDom.actions
export default ranDom.reducer