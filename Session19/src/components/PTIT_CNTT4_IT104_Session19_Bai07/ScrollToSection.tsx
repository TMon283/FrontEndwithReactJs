import React, { useRef } from "react";

export default function ScrollIntoView() {
  const content = useRef<HTMLSpanElement>(null);
  const handleClick = () => {
    content.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <h1>Cuộn tới nội dung</h1>
      <button onClick={handleClick}>Đi tới nội dung</button>
      <div style={{ height: "700px" }}></div>
      <span ref={content}>Đây là nội dung giả lập</span>
    </div>
  );
}