import { createSlice } from '@reduxjs/toolkit';
import { getAllTasks, createTask, updateTask, deleteTask, toggleTaskCompletion } from '../../apis/task.api';
import type { TaskState } from '../../interfaces/task.interface';

const initialState: TaskState = {
  status: 'idle',
  tasks: [],
  error: null,
  selectedTask: null,
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setSelectedTask(state, action) {
      state.selectedTask = action.payload;
    },
    clearSelectedTask(state) {
      state.selectedTask = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTasks.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getAllTasks.fulfilled, (state, action) => {
        state.status = 'success';
        state.tasks = action.payload;
      })
      .addCase(getAllTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Lỗi khi lấy danh sách công việc';
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        );
        state.selectedTask = null;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      })
      .addCase(toggleTaskCompletion.fulfilled, (state, action) => {
        state.tasks = state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        );
      });
  },
});

export const { setSelectedTask, clearSelectedTask } = taskSlice.actions;
export default taskSlice.reducer;