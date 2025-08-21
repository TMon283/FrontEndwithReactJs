import React, { Component } from 'react';
import type { Task } from './TodoApp';
import TaskItem from './TaskItem';

type Props = {
  tasks: Task[];
  onDelete: (id: number) => void;
  onEdit: (task: Task) => void;
  onToggle: (id: number) => void;
};

export default class TaskList extends Component<Props> {
  render() {
    const { tasks, onDelete, onEdit, onToggle } = this.props;
    return (
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onEdit={onEdit}
            onToggle={onToggle}
          />
        ))}
      </ul>
    );
  }
}
