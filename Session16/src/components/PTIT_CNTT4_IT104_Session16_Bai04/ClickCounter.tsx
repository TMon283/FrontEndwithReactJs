import React, { Component } from 'react'
type InitialState={
    count: number
}
export default class ClickCounter extends Component<object, InitialState> {
    constructor(props: object){
        super(props);
        this.state={
            count: 0
        }
    }
    handleClick = () => {
        this.setState((prevState) => ({
        count: prevState.count + 1,
        }));
    };
  render() {
    return (
      <div>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }
}
