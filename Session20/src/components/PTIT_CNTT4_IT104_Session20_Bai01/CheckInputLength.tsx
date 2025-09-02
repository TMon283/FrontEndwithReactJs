import React, { useState } from 'react'

export default function CheckInputLength() {
    const [mess, setMess] = useState<string>("");
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const length = e.target.value.length;
        if (length > 5){
            setMess("Độ dài của chuỗi lớn hơn 5");
        } else {
            setMess("")
        }
    }
  return (
    <div>
      <h2>Kiểm tra độ dài chuỗi nhập vào</h2>
      <form action="">
        <input type="text" placeholder='Nhập vào đây' onChange={handleChange}/>
      </form>
      <p style={{color:"red"}}>{mess}</p>
    </div>
  )
}
