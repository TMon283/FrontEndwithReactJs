import React, { Component } from 'react';
import TaskItem from './TaskItem';

type Props = {
  tasks: string[];
  onDelete: (taskName: string) => void;
};

export default class TaskList extends Component<Props> {
  render() {
    return (
      <ul>
        {this.props.tasks.map((task) => (
          <TaskItem key={task} task={task} onDelete={this.props.onDelete} />
        ))}
      </ul>
    );
  }
}