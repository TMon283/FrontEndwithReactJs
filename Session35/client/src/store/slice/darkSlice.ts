import { createSlice } from "@reduxjs/toolkit";

export const darkSlice = createSlice({
    name:"dark",
    initialState:{
        isDarkMode: true

    },
    reducers:{
        toggleTheme : (state) => {
            state.isDarkMode = !state.isDarkMode
        }
    }
})
export const {  toggleTheme } = darkSlice.actions
export default darkSlice.reducer