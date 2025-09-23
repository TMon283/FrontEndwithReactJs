import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    lang: "en", 
  },
  reducers: {
    change: (state, action) => {
      state.lang = action.payload; 
    },
  },
});

export const { change } = languageSlice.actions;
export default languageSlice.reducer;
