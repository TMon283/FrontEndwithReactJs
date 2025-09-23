import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { change } from '../store/slice/languageSlice';

export default function Language() {
  const lang = useSelector((state: any) => state.language.lang);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(change(e.target.value));
  };

  return (
    <div>
      <h1>Bài 6</h1>
      <select value={lang} onChange={handleChange}>
        <option value="en">English</option>
        <option value="vi">Vietnamese</option>
      </select>

      <p>{lang === "vi" ? "Học viện Rikkei" : "Rikkei Academy"}</p>
    </div>
  );
}
