import { configureStore } from "@reduxjs/toolkit";
import counter from "./slice/counterSlice"
import students from "./slice/studenSlice"
import  random  from "./slice/ranDom";
import  dark  from "./slice/darkSlice";
import listMode from "./slice/listModeSlice";
import menu from "./slice/menuSlice";
import language from "./slice/languageSlice";
import favorites from "./slice/favoritesSlice";
export const store = configureStore({
    reducer:{
        counter,
        students,
        random,
        dark,
        listMode,
        menu,
        language,
        favorites
        
    }

})
