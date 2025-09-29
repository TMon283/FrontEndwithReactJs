import { configureStore } from "@reduxjs/toolkit";
import product_slice from "./slices/productSlice"
import image_slice from "./slices/imageSlice"
const store =configureStore({
    reducer:{
        products:product_slice,
        images:image_slice
    }
})

export default store;