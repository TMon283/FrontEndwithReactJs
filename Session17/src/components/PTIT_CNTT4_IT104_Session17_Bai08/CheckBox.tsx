import React, { useState } from "react";

export default function Checkbox() {
  const [hobbies, setHobbies] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setHobbies((prev) =>
      checked ? [...prev, value] : prev.filter((hobby) => hobby !== value)
    );
  };

  const hobbyOptions = ["Đi chơi", "Code", "Bơi lội", "Nhảy dây"];

  return (
    <div>
      <p>Sở thích: {hobbies.length > 0 ? hobbies.join(", ") : "Chưa chọn"}</p>

      {hobbyOptions.map((hobby) => (
        <label key={hobby}>
          <input
            type="checkbox"
            value={hobby}
            checked={hobbies.includes(hobby)}
            onChange={handleChange}
          />
          {hobby}
          <br />
        </label>
      ))}
    </div>
  );
}
