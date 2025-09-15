import React from "react";
import { Link } from "react-router-dom";

export default function About2() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>About</h1>
      <p>Đây là trang giới thiệu.</p>
      <Link to="/">Quay về trang chủ</Link>
    </div>
  );
}
