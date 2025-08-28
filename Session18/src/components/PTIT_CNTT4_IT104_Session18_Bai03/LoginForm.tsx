import React, { useState, useCallback } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      console.log({
       email: email,
        password: password,
      });
    },
    [email, password]
  );
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <label>Email</label><br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Password</label><br />
          <input type="password"value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}