import React, { Component } from "react";

type Todo = {
  id: number;
  name: string;
  completed: boolean;
};

type State = {
  todos: Todo[];
  input: string;
  isEdit: boolean;
  editId: number | null;
};

class App extends Component<object, State> {
  constructor(props: object) {
    super(props);
    const saved = localStorage.getItem("todos");
    this.state = {
      todos: saved ? JSON.parse(saved) : [],
      input: "",
      isEdit: false,
      editId: null,
    };
  }

  componentDidUpdate(_: object, prevState: State) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ input: e.target.value });
  };

  handleAddOrUpdate = () => {
    const name = this.state.input.trim();
    const { todos, isEdit, editId } = this.state;

    if (name === "") {
      alert("Tên công việc không được để trống");
      return;
    }

    const isDuplicate = todos.some(
      (todo) =>
        todo.name.toLowerCase() === name.toLowerCase() &&
        todo.id !== editId
    );
    if (isDuplicate) {
      alert("Tên công việc đã tồn tại");
      return;
    }

    if (isEdit && editId !== null) {
      const updated = todos.map((todo) =>
        todo.id === editId ? { ...todo, name } : todo
      );
      this.setState({
        todos: updated,
        input: "",
        isEdit: false,
        editId: null,
      });
    } else {
      const newTodo: Todo = {
        id: Date.now(),
        name,
        completed: false,
      };
      this.setState({
        todos: [...todos, newTodo],
        input: "",
      });
    }
  };

  handleEdit = (id: number) => {
    const todo = this.state.todos.find((t) => t.id === id);
    if (todo) {
      this.setState({
        input: todo.name,
        isEdit: true,
        editId: id,
      });
    }
  };

  handleDelete = (id: number) => {
    if (window.confirm("Bạn có chắc muốn xóa công việc này?")) {
      const updated = this.state.todos.filter((t) => t.id !== id);
      this.setState({ todos: updated });
    }
  };

  handleToggle = (id: number) => {
    const updated = this.state.todos.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    this.setState({ todos: updated });
  };

  render() {
    const { todos, input, isEdit } = this.state;
    const completedCount = todos.filter((t) => t.completed).length;

    return (
      <div>
        <h2>Todo List</h2>
        <input
          type="text"
          placeholder="Nhập công việc"
          value={input}
          onChange={this.handleChange}
        />
        <button onClick={this.handleAddOrUpdate}>
          {isEdit ? "Cập nhật" : "Thêm"}
        </button>

        <ul>
          {todos.map((todo) => (
            <div key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => this.handleToggle(todo.id)}
              />
              <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                {todo.name}
              </span>
              <button onClick={() => this.handleEdit(todo.id)}>Sửa</button>
              <button onClick={() => this.handleDelete(todo.id)}>Xóa</button>
            </div>
          ))}
        </ul>

        <p>
          Hoàn thành {completedCount} / {todos.length}
        </p>
      </div>
    );
  }
}

export default App;
