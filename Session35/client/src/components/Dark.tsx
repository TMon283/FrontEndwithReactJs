import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../store/slice/darkSlice';

export default function Dark() {
    const reslut = useSelector((data:any) =>{
        return data.dark.isDarkMode
    })
    const dispatch = useDispatch()
    const handleToggle = () => {
        dispatch(toggleTheme())
    }
  return (
    <div> 
        <h1>Bài 3</h1>
    <div style={{
        border:"1px solid red" , 
        width:"200px",
        height:"200px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor : reslut == true ? "black" : "white",
    }}>
      <button onClick={handleToggle}>{reslut == true  ?  "dark" : "light"}</button>
    </div>
    </div>
  )
}