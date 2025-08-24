import React, { Component } from 'react';
import type { Task } from './TodoApp';

type Props = {
  task: Task;
  onDelete: (id: number) => void;
  onEdit: (task: Task) => void;
  onToggle: (id: number) => void;
};

export default class TaskItem extends Component<Props> {
  render() {
    const { task, onDelete, onEdit, onToggle } = this.props;
    return (
      <li style={{ marginBottom: '8px' }}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span
          style={{
            textDecoration: task.completed ? 'line-through' : 'none',
            marginLeft: '8px',
          }}
        >
          {task.name}
        </span>
        <button onClick={() => onEdit(task)} style={{ marginLeft: '10px' }}>
          Sửa
        </button>
        <button onClick={() => onDelete(task.id)} style={{ marginLeft: '5px' }}>
          Xóa
        </button>
      </li>
    );
  }
}
