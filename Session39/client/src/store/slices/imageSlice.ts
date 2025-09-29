import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllImage = createAsyncThunk("getAllImage", async () => {
  try {
    const res: any = await axios.get("http://localhost:8080/images");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const addImage = createAsyncThunk(
  "addImage",
  async (new_Image:any) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/images",
        new_Image
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateImage = createAsyncThunk("update", async (newImage: any) => {
  try {
    const res = await axios.put(
      `http://localhost:8080/images/${newImage.id}`,
      newImage
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
const imageSlice = createSlice({
  name: "image",
  initialState: {
    images: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllImage.pending, (state, action) => {})
      .addCase(getAllImage.fulfilled, (state, action) => {
    
        state.images = action.payload;
      })
      .addCase(addImage.fulfilled, (state: any, action) => {
        state.images.push(action.payload);
      })
      .addCase(updateImage.fulfilled, (state: any, action) => {
        const index = state.images.findIndex(
          (item: any) => item.id == action.payload.id
        );
        state.images[index] = action.payload;
      });
  },
});
export default imageSlice.reducer;
