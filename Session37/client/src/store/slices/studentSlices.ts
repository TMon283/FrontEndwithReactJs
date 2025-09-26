import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_GETALL_STUDENT } from "../../apis/apis";
import type { Student } from "../../utils/type";

// HÀM LẤY TẤT CẢ SINH VIÊN
export const getAllStudent = createAsyncThunk("getAllUser", async () => {
  try {
    const res: any = await axios.get(API_GETALL_STUDENT);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
// HÀM THÊM MỚI SINH VIÊN
export const addStudent = createAsyncThunk(
  "addStudent",
  async (new_student: Student) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/students",
        new_student
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// xoa
export const deleStudent = createAsyncThunk(
  "deleStudent",
  async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/students/${id}`);
      return id;
    } catch (error) {
      console.log(error);
    }
  }
);
// sua
export const updateStudent = createAsyncThunk("update", async (newUser: any) => {
  try {
    const res = await axios.put(
      `http://localhost:8080/students/${newUser.id}`,
      newUser
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
const studentSlice = createSlice({
  name: "student",
  initialState: {
    students: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllStudent.pending, (state, action) => {})
      .addCase(getAllStudent.fulfilled, (state, action) => {
        state.loading = true;
        state.students = action.payload;
      })
      .addCase(addStudent.fulfilled, (state: any, action) => {
        state.students.push(action.payload);
      })
      .addCase(deleStudent.fulfilled, (state, action) => {
        state.students = state.students.filter(
          (user: any) => user.id !== action.payload
        );
      })
      .addCase(updateStudent.fulfilled, (state: any, action) => {
        const index = state.students.findIndex(
          (item: any) => item.id == action.payload.id
        );
        state.students[index] = action.payload;
      });
  },
});
export default studentSlice.reducer;
