import React, { Component } from 'react'
type InitialState={
    email: string,
}
export default class FormInput extends Component<object, InitialState> {
    constructor(props: object){
        super(props);
        this.state={
            email:""
        }
    }
    handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({email: e.target.value});
    }
    handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(this.state.email);
    }
  render() {
    return (
      <div>
        <h2>Form</h2>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="" aria-placeholder='nva@gmail.com'>Email</label><br />
            <input type="text" onChange={this.handleChange}/>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
