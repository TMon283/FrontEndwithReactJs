import React from 'react'
import {tasks} from "./TaskList"
import { Link, useParams } from 'react-router-dom'

export default function TaskDetail() {
    const {id} = useParams();
    const data = tasks.find( i => i.id === Number(id));
  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>
      <div style={{
        width:"100px" , 
        height:"30px",
        background:"blue",
        lineHeight:"30px",
        textAlign:"center",
        borderRadius:"5px",      
      }}>
            <Link to={"/task"} style={{color:"white" , textDecoration:"none"}}>Quay lai</Link>
      </div>
    </div>
  )
}