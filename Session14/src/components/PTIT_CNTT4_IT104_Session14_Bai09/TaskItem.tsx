import React, { Component } from 'react';

type Props = {
  task: string;
  onDelete: (taskName: string) => void;
};

export default class TaskItem extends Component<Props> {
  render() {
    return (
      <li>
        {this.props.task}
        <button onClick={() => this.props.onDelete(this.props.task)}>Xóa</button>
      </li>
    );
  }
}