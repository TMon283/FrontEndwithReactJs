import React from "react";
import { NavLink } from "react-router-dom";

export default function BlogLayout() {
  return (
    <>
      <div className="left" style={{
        height:"100vh",
        width:"20%",
        border:"1px solid red"
      }}>
        <div className="header">My Blog</div>
        <div className="siderba">
          <NavLink to={"#"}>Posts</NavLink>
        </div>
        <div className="footer">&copy; 2025 My Blog</div>
      </div>
    </>
  );
}