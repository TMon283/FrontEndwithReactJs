import React, { Component } from 'react'
type Status = {
    theme: string;
    language: string;
}
export default class Exercise07 extends Component<object, Status> {
    constructor(props: object){
        super(props);
        this.state = {
            theme:"dark",
            language:"Vietnamese"
        }
    }
  render() {
    return (
      <div>
        <>
        {this.state.theme === "light" ? (
          <div style={{
            height:"250px",
            border:"1px solid gray",
            color:"black",
            backgroundColor:"white"
          }}>
            <h2>Nền: Sáng</h2>
            <h2>Ngôn ngữ: Tiếng Việt</h2>
          </div>
        ) : (
          <div style={{
            height:"250px",
            border:"1px solid gray",
            color:"white",
            backgroundColor:"black"
          }}>
            <h2>Nền: Tối</h2>
            <h2>Ngôn ngữ: Tiếng Việt</h2>
          </div>
        )}
      </>
      </div>
    )
  }
}
