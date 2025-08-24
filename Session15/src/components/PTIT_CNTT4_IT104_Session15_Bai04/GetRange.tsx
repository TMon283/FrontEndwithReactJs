import React, { Component } from 'react'
type InitialState={
    range: string,
    isSubmit: boolean
}
export default class GetRange extends Component<object, InitialState> {
    constructor(props: object){
        super(props);
        this.state={
            range:"",
            isSubmit: false
        }
    }
    handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({range:e.target.value});
        this.setState({isSubmit:false});
    }
    handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        this.setState({isSubmit:true});
    }
  render() {
    return (
      <div>
        <h2>Tiến độ hoàn thành: {this.state.isSubmit ? this.state.range : ""} % </h2>
        <form onSubmit={this.handleSubmit}>
            <input type="range" onChange={this.handleChange}/>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
