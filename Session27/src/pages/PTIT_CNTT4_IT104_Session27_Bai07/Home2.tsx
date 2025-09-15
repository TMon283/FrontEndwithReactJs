import React from "react";
import { Link } from "react-router-dom";

export default function Home2() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Trang chủ</h1>
      <p>Chào mừng bạn đến với ứng dụng React Router.</p>
      <Link to="/about">Đi đến trang About</Link>
    </div>
  );
}
