import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name:"menu",
    initialState:{
        flag:true
    },
    reducers:{
        handleClick : (state) => {
            state.flag = !state.flag
        }
    }
});
export const {handleClick} = menuSlice.actions
export default menuSlice.reducer 