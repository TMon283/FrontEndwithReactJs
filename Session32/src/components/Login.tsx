import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOGIN } from "../redux/constants/type";

export default function Login() {
  const auth = useSelector((state:any) => state.auth);
  console.log("Thông tin đăng nhập:", auth);

  const { email: savedEmail, password: savedPassword } = auth;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setEmail(savedEmail);
    setPassword(savedPassword);
  }, [savedEmail, savedPassword]);

  const handleLogin = () => {
    if (!email || !password) return alert("Vui lòng nhập email và mật khẩu!");
    if (email === savedEmail && password === savedPassword) {
      dispatch({ type: LOGIN, payload: { email } });
      alert(`Đăng nhập thành công: ${email}`);
    } else {
      alert("Sai email hoặc mật khẩu!");
    }
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
      <h2>Đăng nhập</h2>
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
        onClick={handleLogin}
        style={{
          width: "100%",
          padding: "10px",
          background: "#2563eb",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Đăng nhập
      </button>
    </div>
  );
}