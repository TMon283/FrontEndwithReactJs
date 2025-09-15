import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ color: "red" }}>404</h1>
      <p>Trang bạn tìm không tồn tại.</p>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            marginRight: "10px",
            padding: "8px 16px",
            background: "blue",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Quay về trang chủ
        </button>
        <button
          onClick={() => navigate(-1)}
          style={{
            padding: "8px 16px",
            background: "gray",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Quay lại
        </button>
      </div>
    </div>
  );
}
