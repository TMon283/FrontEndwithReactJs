import React, { Component } from 'react'
type InitialState={
    color: string,
    isSubmit: boolean
}
export default class ColorInput extends Component<object, InitialState> {
    constructor(props: object){
        super(props);
        this.state={
            color:"",
            isSubmit: false
        }
    }
    handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({color:e.target.value});
        this.setState({isSubmit: false})
    }
    handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        this.setState({isSubmit: true});
    }
  render() {
    return (
      <div>
        <h2>Color: {this.state.isSubmit ? this.state.color : ""}</h2>
        <form onSubmit={this.handleSubmit}>
            <input type="color" onChange={this.handleChange}/><br />
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
