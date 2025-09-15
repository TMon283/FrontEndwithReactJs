import React, { useState, ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";

export default function Bai3() {
  const [names, setNames] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNames(e.target.value);
  };

  const handleClick = () => {
    setSearchParams({ name: names });
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Tìm kiếm</button>
    </div>
  );
}
