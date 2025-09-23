import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import type { Student } from '../utils/types';
import { addStudent } from '../store/slice/studenSlice';
import { useDispatch } from 'react-redux';
import { deleteStudent } from '../store/slice/studenSlice';
export default function StudentManager() {

    const [user,setUser]=useState<Student>({
  id:Math.floor(Math.random()*99999),
  name:"",
    })
    const result =useSelector((data:any)=>{
        console.log(data);
        return data.students.students
        
    })
    const dispatch =useDispatch();
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
      setUser({...user,name:e.target.value})
    }
    const addNewStudent=()=>{
       dispatch (addStudent(user))
    }
   const deleStudent =(item:Student)=>{
     dispatch (deleteStudent(item))
   }
  return (
    <div>
        <h1>Quản lý sinh viên</h1>

        <input type="text" onChange={handleChange}/>
        <button onClick={addNewStudent}>them</button>
  <ul>
    {result.map((item:Student,index:number)=>(
        <li key={index}>{item.name}  <button onClick={()=>deleStudent(item)}>Xóa</button></li>
    ))}
  </ul>

    </div>
  )
}
