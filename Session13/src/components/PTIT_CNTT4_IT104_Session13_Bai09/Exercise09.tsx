import React, { Component } from 'react'

type nameState = {
    name: string;
}
export default class Exercise09 extends Component<object, nameState> { 
    constructor(props: object){
        super(props);
        this.state = {
            name:"RikkeiAcademy"
        }
    }
    changeName = () => {
        this.setState({name: "Rikkeisoft"})
    }
  render() {
    return (
      <div>
        <h2>Tên công ty: {this.state.name}</h2>
        <button onClick={this.changeName}>Change</button>
      </div>
    )
  }
}
