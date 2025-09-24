import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Task } from "../interfaces/task.interface";
import axiosInstance from "../utils/axiosInstance";

export const getAllTasks = createAsyncThunk("task/getAllTasks", async () => {
  const response = await axiosInstance.get("tasks");
  return response.data;
});

export const createTask = createAsyncThunk(
  "task/createTask",
  async (task: Omit<Task, "id">) => {
    const response = await axiosInstance.post("tasks", task);
    return response.data;
  }
);

export const updateTask = createAsyncThunk(
  "task/updateTask",
  async (task: Task) => {
    const { id, ...updateData } = task;
    const response = await axiosInstance.put(`tasks/${id}`, updateData);
    return response.data;
  }
);

export const deleteTask = createAsyncThunk(
  "task/deleteTask",
  async (id: number) => {
    await axiosInstance.delete(`tasks/${id}`);
    return id;
  }
);

export const toggleTaskCompletion = createAsyncThunk(
  "task/toggleTaskCompletion",
  async (task: Task) => {
    const response = await axiosInstance.put(`tasks/${task.id}`, {
      ...task,
      completed: !task.completed,
    });
    return response.data;
  }
);