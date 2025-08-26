import React, { useState } from 'react';

export default function GetCity() {
  const [city, setCity] = useState<string>("");

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <p>Thành phố: {city}</p>
      <select onChange={handleCityChange} value={city}>
        <option value="">-Chọn thành phố-</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Thanh Hóa">Thanh Hóa</option>
        <option value="Hà Nam">Hà Nam</option>
        <option value="Ninh Bình">Ninh Bình</option>
        <option value="Nghệ An">Nghệ An</option>
      </select>
    </div>
  );
}
