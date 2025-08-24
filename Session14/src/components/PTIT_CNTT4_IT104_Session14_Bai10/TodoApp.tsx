import React, { Component } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import EditModal from './EditModal';

export type Task = {
  id: number;
  name: string;
  completed: boolean;
};

type State = {
  tasks: Task[];
  newTask: string;
  error: string;
  editingTask: Task | null;
  editingName: string;
};

export default class TodoApp extends Component<{}, State> {
  state: State = {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
    newTask: '',
    error: '',
    editingTask: null,
    editingName: '',
  };

  updateLocalStorage = (tasks: Task[]) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  handleAddTask = () => {
    const { newTask, tasks } = this.state;
    const trimmed = newTask.trim();

    if (!trimmed) return this.setState({ error: 'Không được để trống' });
    if (tasks.some((t) => t.name === trimmed)) return this.setState({ error: 'Trùng tên' });

    const newItem: Task = { id: Date.now(), name: trimmed, completed: false };
    const updated = [...tasks, newItem];
    this.setState({ tasks: updated, newTask: '', error: '' });
    this.updateLocalStorage(updated);
  };

  handleDelete = (id: number) => {
    const updated = this.state.tasks.filter((t) => t.id !== id);
    this.setState({ tasks: updated });
    this.updateLocalStorage(updated);
  };

  handleToggleComplete = (id: number) => {
    const updated = this.state.tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    this.setState({ tasks: updated });
    this.updateLocalStorage(updated);
  };

  handleEdit = (task: Task) => {
    this.setState({ editingTask: task, editingName: task.name });
  };

  handleEditChange = (value: string) => {
    this.setState({ editingName: value });
  };

  handleSaveEdit = () => {
    const { editingTask, editingName, tasks } = this.state;
    if (!editingTask) return;

    const trimmed = editingName.trim();
    if (!trimmed) return this.setState({ error: 'Không được để trống' });

    const updated = tasks.map((t) =>
      t.id === editingTask.id ? { ...t, name: trimmed } : t
    );
    this.setState({ tasks: updated, editingTask: null, editingName: '', error: '' });
    this.updateLocalStorage(updated);
  };

  handleCancelEdit = () => {
    this.setState({ editingTask: null, editingName: '', error: '' });
  };

  render() {
    const { tasks, newTask, error, editingTask, editingName } = this.state;
    const completedCount = tasks.filter((t) => t.completed).length;
    const allCompleted = tasks.length > 0 && completedCount === tasks.length;

    return (
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <h2>Danh sách công việc</h2>
        <TaskInput
          value={newTask}
          onChange={(val) => this.setState({ newTask: val })}
          onAdd={this.handleAddTask}
          error={error}
        />
        <TaskList
            tasks={tasks}
            onDelete={this.handleDelete}
            onEdit={this.handleEdit}
            onToggle={this.handleToggleComplete}
            />

            
            {allCompleted ? <p style={{ color: 'green', fontWeight: 'bold' }}>Hoàn thành công việc</p>: <p> Công việc đã hoàn thành: {completedCount}/{tasks.length} </p>}

            {editingTask && (
            <EditModal 
                value={editingName}
                onChange={this.handleEditChange}
                onSave={this.handleSaveEdit}
                onCancel={this.handleCancelEdit}
            />
            )}
      </div>
    );
  }
}
