import React, { Component } from 'react';

type Props = {
  value: string;
  onChange: (val: string) => void;
  onSave: () => void;
  onCancel: () => void;
};

export default class EditModal extends Component<Props> {
  render() {
    const { value, onChange, onSave, onCancel } = this.props;
    return (
      <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '20px' }}>
        <h3>Sửa công việc</h3>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Tên mới"
        />
        <button onClick={onSave}>Lưu</button>
        <button onClick={onCancel} style={{ marginLeft: '5px' }}>
          Hủy
        </button>
      </div>
    );
  }
}
