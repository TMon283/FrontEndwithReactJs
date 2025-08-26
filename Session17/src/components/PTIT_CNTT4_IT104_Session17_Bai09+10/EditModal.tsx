import React from 'react';

type Props = {
  editValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onUpdate: () => void;
  onCancel: () => void;
};

export default function EditModal({ editValue, onChange, onUpdate, onCancel }: Props) {
  return (
    <div>
      <h4>Cập nhật công việc</h4>
      <input type="text" value={editValue} onChange={onChange} />
      <div style={{ marginTop: 10 }}>
        <button onClick={onUpdate}>Cập nhật</button>
        <button onClick={onCancel} style={{ marginLeft: 10 }}>Hủy</button>
      </div>
    </div>
  );
}
