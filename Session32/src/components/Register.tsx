import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { REGISTER } from "../redux/constants/type";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!email || !password) return alert("Vui lòng nhập đủ thông tin!");
    dispatch({ type: REGISTER, payload: { email, password } });
    navigate("/login");
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        width: "250px",
        margin: "20px auto",
        textAlign: "center",
      }}
    >
      <h2>Đăng ký</h2>
      <input
        type="email"
        placeholder="Nhập email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
        }}
      />
      <input
        type="password"
        placeholder="Nhập mật khẩu..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
        }}
      />
      <button
        onClick={handleRegister}
        style={{
          width: "100%",
          padding: "10px",
          background: "#2563eb",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Đăng ký
      </button>
    </div>
  );
}