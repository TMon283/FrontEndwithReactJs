import React, { useReducer } from 'react'
type Value = {
    value:string,
    type:"SETCHANGE"
}
export default function FormEvent() {
    const initial:Value= {
        value:"",
        type:"SETCHANGE"
    }
    const dataReducer = (state:any,action:any) => {
        switch(action.type){
            case "SETCHANGE":
                return {...state,value:action.payload}
            default : 
            return state
        }
    }
    const [data,dispatch] =  useReducer(dataReducer , initial);
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type:"SETCHANGE" , payload:e.target.value})
    }
  return (
    <div>
      {data.value} <br />
      <input type="text" name="dataInput" id="" onChange={handleChange}/>
    </div>
  )
}