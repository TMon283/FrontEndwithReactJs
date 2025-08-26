import React from 'react';
type Props = {
  job: {
    id: number;
    title: string;
    status: boolean;
  };
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function TodoItem({ job, onToggle, onDelete }: Props) {
  return (
    <li>
      <input
        type="checkbox"
        checked={job.status}
        onChange={() => onToggle(job.id)}
      />
      <span style={{ textDecoration: job.status ? 'line-through' : 'none' }}>
        {job.title}
      </span>
      <button onClick={() => onDelete(job.id)}>Xóa</button>
    </li>
  );
}
