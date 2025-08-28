import React, { useCallback, useState } from 'react'
export default function handleColor() {
    const [color,setColor] = useState("");
    const handleColor = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
            setColor(e.target.value)
        },[color])
  return (
    <div>
      <label htmlFor="">Choice corlor:</label><br />
      <input type="color" name="color" id="" onChange={handleColor}/>
      <p>Show corlor:</p>
      <div style={{width:"200px",height:"200px",backgroundColor:`${color}`}}></div>
    </div>
  )
}