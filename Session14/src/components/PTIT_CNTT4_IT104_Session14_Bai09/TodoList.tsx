import React from 'react';

type Task = {
  id: number;
  name: string;
  completed: boolean;
};

type State = {
  tasks: Task[];
  newTask: string;
};

class TodoList extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
    };
  }

  componentDidMount() {
    const stored = localStorage.getItem('tasks');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          this.setState({ tasks: parsed });
        }
      } catch (error) {
        console.error('Lỗi khi đọc localStorage:', error);
      }
    }
  }

  componentDidUpdate(prevProps: {}, prevState: State) {
    if (prevState.tasks !== this.state.tasks) {
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newTask: e.target.value });
  };

  handleAddTask = () => {
    const { newTask, tasks } = this.state;
    if (!newTask.trim()) return;

    const newItem: Task = {
      id: Date.now(),
      name: newTask.trim(),
      completed: false,
    };

    this.setState({
      tasks: [...tasks, newItem],
      newTask: '',
    });
  };

  handleDeleteTask = (id: number) => {
    const updated = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks: updated });
  };

  render() {
    const { tasks, newTask } = this.state;

    return (
      <div>
        <h2>Danh sách công việc</h2>
        <input
          type="text"
          value={newTask}
          onChange={this.handleInputChange}
          placeholder="Nhập tên công việc"
        />
        <button onClick={this.handleAddTask}>Thêm</button>

        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {task.name}
              <button>Sửa</button>
              <button onClick={() => this.handleDeleteTask(task.id)}>Xóa</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
