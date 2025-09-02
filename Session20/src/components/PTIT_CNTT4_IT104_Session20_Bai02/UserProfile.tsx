import React, { useState } from 'react'

type InitialState = {
  name: string,
  email: string
}

export default function UserProfile() {
  const [user, setUser] = useState<InitialState>({ name: "", email: "" });
  const [visibility, setVisibility] = useState<boolean>(false); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setVisibility(true); 
  }

  return (
    <div>
      <h2>Thông tin người dùng</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={user.name}
          name="name"
          placeholder="Nhập tên"
          onChange={handleChange}
        /><br />
        <input
          type="text"
          value={user.email}
          name="email"
          placeholder="Nhập email"
          onChange={handleChange}
        /><br />
        <button type="submit">Gửi</button>
      </form>

      <span style={{ display: visibility ? "block" : "none" }}>
        Tên: {user.name} <br />
        Email: {user.email}
      </span>
    </div>
  )
}
