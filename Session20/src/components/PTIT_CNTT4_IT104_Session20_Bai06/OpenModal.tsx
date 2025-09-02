import React, { useState, useRef, useEffect } from 'react';
type ModalProps = {
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
});


  return (
    <div>
      <div>
        <h2>Đăng nhập</h2> <br />
        <input
          ref={inputRef}
          type="text"
          placeholder="Nhập tên người dùng"
        /> <br />
        <button onClick={onClose}> Đóng </button>
      </div>
    </div>
  );
};

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <button onClick={() => setShowModal(true)}> Hiển thị Modal </button>

      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default App;
