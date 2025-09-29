import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getAllProduct = createAsyncThunk("getAllProduct", async () => {
  try {
    const response = await axios.get("http://localhost:8080/products");
    return response.data
        
  } catch (error) {
    console.log(error);
  }
});


export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],

  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    
    .addCase(getAllProduct.fulfilled, (state:any, action) => {
        
      state.books = action.payload;
    })
    .addCase(getAllProduct.pending, (state:any, action) => {
          
    })
  },
});
export default productSlice.reducer;
