import React, { useState, useRef } from "react";

export default function RenderCounter() {
  const [value, setValue] = useState("");
  const renderCount = useRef(0);

  renderCount.current++;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>Render Count: {renderCount.current}</p>
    </div>
  );
}