import React, { Component } from 'react'
type InitialState={
    date: string,
    isSubmit: boolean
}
export default class GetDate extends Component<object, InitialState>{
    constructor(props: object){
        super(props);
        this.state={
            date:"",
            isSubmit: false
        }
    }
    handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({date:e.target.value});
        this.setState({isSubmit: false});
    }
    handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        this.setState({isSubmit:true});
    }
  render() {
    return (
      <div>
        <h3>Ngày sinh {this.state.isSubmit ? this.state.date : ""}</h3>
        <form action="" onSubmit={this.handleSubmit}>
            <input type="date" onChange={this.handleChange}/><br />
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
