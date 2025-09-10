import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Bai4() {
    const navigate = useNavigate();
     const handleLogin = () => {
         navigate("/register");
    }
  return ( 
    <div>
      <p>Bai 4</p>
      <button onClick={handleLogin}>Dang ky</button>
    </div>
  )
}