import { createSlice } from "@reduxjs/toolkit";

const listModeSlice = createSlice({
    name:"listMode",
    initialState:{
        status:true
    },
    reducers:{
        compact : (state) => {
            state.status = !state.status
        }
    }
})

export const {compact} = listModeSlice.actions
export default listModeSlice.reducer