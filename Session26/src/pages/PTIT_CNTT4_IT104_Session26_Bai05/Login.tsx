import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");
  const [redirect, setRedirect] = useState(false);
  const handleEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePass = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleRoll = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setRol(e.target.value);
  };
  const user = {
    email:"user@gmail.com",
    pass:"123456",
    rol:"User",
  }


  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(
        email.toLocaleLowerCase().trim() === user.email.toLocaleLowerCase().trim() ||
        password.toLocaleLowerCase().trim() === user.pass.toLocaleLowerCase().trim() ||
        rol.toLocaleLowerCase().trim() === user.rol.toLocaleLowerCase().trim() 
    ){
      console.log("dang nhap thanh cong");
      setRedirect(true);
    }else{
      alert("dang nhap that bai");
    }
  };
  if(redirect){
    return <Navigate to="/account"></Navigate>
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Nhap email' onChange={handleEmail}/><br />
        <input type="password" placeholder='Nhap mat khau'onChange={handlePass}/><br />
        <select onChange={handleRoll}>
          <option value="">--Chon quyen--</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select><br />
        <button>Dang nhap</button>
      </form>
    </div>
  )
}