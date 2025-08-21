import React, { Component } from 'react';

type Props = {
  value: string;
  onChange: (val: string) => void;
  onAdd: () => void;
  error: string;
};

export default class TaskInput extends Component<Props> {
  render() {
    const { value, onChange, onAdd, error } = this.props;
    return (
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Nhập tên công việc"
        />
        <button onClick={onAdd}>Thêm</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    );
  }
}
