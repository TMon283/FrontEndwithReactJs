import { createSlice } from "@reduxjs/toolkit";


const studenSlice =createSlice({
    name:"student",
    initialState:{
        students:[
            {
                id:1,
                name:"Minh Thu"
            },
            {
                id:2,
                name:"Yen Chi"
            }
        ],
    },
    reducers:{
      addStudent:(state,action)=>{
    
         state.students.push(action.payload)
      },
      deleteStudent: (state, action) => {
  return {
    ...state,
    students: state.students.filter((item) => item.id !== action.payload.id),
  };
}

    },
})
export const {deleteStudent}=studenSlice.actions;
export const {addStudent}=studenSlice.actions;
export default studenSlice.reducer;