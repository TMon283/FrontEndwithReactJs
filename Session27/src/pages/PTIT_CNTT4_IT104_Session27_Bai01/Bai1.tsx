import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Bai1() {
  return (
    <>  
      <div style={{
          width:"100%",
          height:"50px",
          background:"blue",
          display:"flex",
          justifyContent:"space-evenly",
          fontSize:"30px",
          alignItems:"center"
      }}>
        <NavLink to={""} style={{color:"white"}}>Home</NavLink>
        <NavLink to={"about"} style={{color:"white"}}>About</NavLink>
        <NavLink to={"contact"} style={{color:"white"}}>Contact</NavLink>
      </div>
      <Outlet />
    </>
  )
}
