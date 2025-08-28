import React, { useReducer } from 'react'

export default function Radio() {
    const initial = {
        selectGender : ""
    }
    const renderReducer = (state:any,action:any) => {
        switch (action.type) {
            case "GENDER":
                return {...state,selectGender:action.payload}
            default:
                return state
        }
    }
    const [render , dispatch] = useReducer(renderReducer , initial);
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type:"GENDER",payload:e.target.value})
    }
  return (
    <div>
      <input type="radio" name='gender' value='nam' onChange={handleChange}/>
      <label htmlFor="">Nam</label><br />
      <input type="radio" name='gender' value='nu' onChange={handleChange}/>
      <label htmlFor="">Nữ</label><br />
      <input type="radio" name='gender' value='khac' onChange={handleChange}/>
      <label htmlFor="">Khác</label>
      <p>Giới tính đã chọn: {render.selectGender}</p>
    </div>
  )
}