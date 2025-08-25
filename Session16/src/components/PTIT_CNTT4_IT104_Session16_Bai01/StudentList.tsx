import React, { Component } from 'react'
type InitialState={
    subjects: string[];
}
export default class StudentList extends Component<object, InitialState> {
    constructor(props: object){
        super(props);
        this.state={
            subjects: ["Toán", "Văn", "Anh", "Hóa", "Sinh"]
        }
    }
  render() {
    return (
      <div>
        <ul>
          {this.state.subjects.map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
      </div>
    )
  }
}
