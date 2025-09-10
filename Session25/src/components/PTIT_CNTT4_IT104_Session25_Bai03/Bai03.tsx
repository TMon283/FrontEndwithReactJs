import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Bai3() {
    const navigate = useNavigate();
     const handleLogin = () => {
         navigate("/login");
    }
  return ( 
    <div>
      <p>Bai 3</p>
      <button onClick={handleLogin}>login</button>
    </div>
  )
}