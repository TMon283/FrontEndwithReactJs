import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
export default function Bai1() {
  return (
    <div>
        <NavLink to={"/bai1/home"}>Home</NavLink><br />
        <NavLink to={"/bai1/about"}>About </NavLink><br />
        <NavLink to={"/bai1/contact"}>Contact</NavLink><br />
        <Outlet></Outlet>
    </div>
  )
}