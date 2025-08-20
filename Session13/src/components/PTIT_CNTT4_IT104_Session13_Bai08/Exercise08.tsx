import React, { Component } from 'react';

type Task = {
  id: number;
  name: string;
  assign: string;
  status: boolean;
  created_at: Date;
};

type State = {
  tasks: Task[];
};

export default class Todolist extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          name: "Thiết kế giao diện Header",
          assign: "Nguyễn Văn A",
          status: false,
          created_at: new Date("2024-03-21T13:12:12")
        },
        {
          id: 2,
          name: "Thiết kế giao diện Footer",
          assign: "Nguyễn Văn B",
          status: true,
          created_at: new Date("2024-03-21T15:10:50")
        }
      ]
    };
  }

  formatDate = (date: Date): string => {
    const d = date.getDate().toString().padStart(2, '0');
    const m = (date.getMonth() + 1).toString().padStart(2, '0');
    const y = date.getFullYear();
    const h = date.getHours().toString().padStart(2, '0');
    const min = date.getMinutes().toString().padStart(2, '0');
    const s = date.getSeconds().toString().padStart(2, '0');
    return `${d}/${m}/${y} ${h}:${min}:${s}`;
  };

  formatStatus = (status: boolean): string => {
    return status ? "Hoàn thành" : "Chưa hoàn thành";
  };

  handleDelete = (id: number) => {
    const updatedTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks: updatedTasks });
  };

  handleEdit = (id: number) => {
    console.log("Sửa công việc có id:", id);
  };

  render() {
    return (
      <div>
        <h2>Danh sách công việc</h2>
        <table border={1} cellPadding={10}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên công việc</th>
              <th>Người thực hiện</th>
              <th>Trạng thái</th>
              <th>Thời gian tạo</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tasks.map((task, index) => (
              <tr key={task.id}>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td>{task.assign}</td>
                <td>{this.formatStatus(task.status)}</td>
                <td>{this.formatDate(task.created_at)}</td>
                <td>
                  <button onClick={() => this.handleEdit(task.id)}>Sửa</button>
                  <button onClick={() => this.handleDelete(task.id)}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
