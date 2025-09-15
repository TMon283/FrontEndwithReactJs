import React, { useState } from 'react'
import { useSearchParams  } from 'react-router-dom'


export default function Bai4() {
    const [name , setName] = useSearchParams();
    const [name2, setName2] = useState("");
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setName2(e.target.value);
    }
    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
      // useSearchParams truyen du lieu len thanh URL 
        e.preventDefault();
        setName({
          name:name2
        })
        console.log(name);
    }
  return (
    <div>
      <label htmlFor="">nhap</label>
      <input type="text" name="" id="" onChange={handleChange}/>
      <button onClick={handleClick}>Tim kiem</button>
      <p>gia tri vua tim kiem : {name.get("name")}</p>
    </div>
  )
}