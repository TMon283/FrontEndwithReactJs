import React, { Component } from 'react';

type Count = {
  count: number;
};

let intervalId: number;

export default class Bai8 extends Component<object, Count> {
  constructor(props: object) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    intervalId = window.setInterval(() => this.counter(), 1000);
  }

  componentWillUnmount() {
    clearInterval(intervalId);
  }

  counter() {
    const newCount = this.state.count === 10 ? 0 : this.state.count + 1;
    this.setState({ count: newCount });
  }

  render() {
    return <div>Count : {this.state.count}</div>;
  }
}
