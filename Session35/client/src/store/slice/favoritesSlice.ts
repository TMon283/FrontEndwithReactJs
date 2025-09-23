import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    user: [
      { id: 1, userName: "Nguyen Van A", status: false },
      { id: 2, userName: "Nguyen Van B", status: false },
      { id: 3, userName: "Nguyen Van C", status: false },
      { id: 4, userName: "Nguyen Van D", status: false }
    ],
  },
  reducers: {
    changeStatue: (state, action) => {
      const index = state.user.findIndex((i) => i.id === action.payload);
      if (index !== -1) {
        state.user[index].status = !state.user[index].status; 
      }
    },
  },
});

export const { changeStatue } = favoritesSlice.actions;
export default favoritesSlice.reducer;
