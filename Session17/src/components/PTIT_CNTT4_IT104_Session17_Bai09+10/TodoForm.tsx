import React from 'react';

type Props = {
  taskName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function TodoForm({ taskName, onChange, onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={taskName} onChange={onChange} />
      <button>Thêm</button>
    </form>
  );
}
