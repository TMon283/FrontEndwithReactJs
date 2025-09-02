import React, { useState, useEffect } from 'react';

const PageTitle = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (name.trim() === '') {
      document.title = 'Chào bạn đến với trang của chúng tôi';
    } else {
      document.title = `Xin chào, ${name}!`;
    }
  }, [name]);

  return (
    <div>
      <input
        id="nameInput"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nhập tên của bạn"
      />
    </div>
  );
};

export default PageTitle;
