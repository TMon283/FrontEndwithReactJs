import React, { Component } from 'react';

type Props = {
  addTask: (taskName: string) => void;
  error: string;
};

type State = {
  taskName: string;
};

export default class TaskForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { taskName: '' };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ taskName: e.target.value });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.addTask(this.state.taskName);
    this.setState({ taskName: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.taskName}
          onChange={this.handleChange}
          placeholder="Nhập tên công việc"
        />
        <button type="submit">Thêm</button>
        {this.props.error && <p style={{ color: 'red' }}>{this.props.error}</p>}
      </form>
    );
  }
}
