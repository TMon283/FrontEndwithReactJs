import React, { Component } from 'react';

type ClockState = {
  time: string;
};

let intervalId: number;

export default class Clock extends Component<object, ClockState> {
  constructor(props: object) {
    super(props);
    this.state = {
      time: this.getCurrentTime(),
    };
  }

  componentDidMount() {
    intervalId = window.setInterval(() => {
      this.setState({ time: this.getCurrentTime() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(intervalId);
  }

  getCurrentTime(): string {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours} : ${minutes} : ${seconds}`;
  }

  render() {
    return (
      <div>
        <h2>Thời gian hiện tại: {this.state.time}</h2>
      </div>
    );
  }
}
