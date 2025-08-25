import React, { Component } from 'react'
type InitState = {
    arr:{
        label:string,
        color:string
    }[]
}
export default class Button extends Component<object,InitState>{
    constructor(props:object){
        super(props)
        this.state = {
            arr:[
                {
                 label:"Primary",
                    color:"blue"
                },
                {
                 label:"Secondary",
                 color:"gray"
                },
                {
                label:"Success",
                   color:"green"
                },
                {
                 label:"Warning",
                    color:"yellow"
                },
                {
                label:"Danger",
                    color:"red"
                },
                {
                label:"info",
                    color:"purple"
                },
                {
                label:"light",
                 color:"white"
                },
                {
                 label:"dark",
                 color:"black"
                }
            ]
        }
    }
  render() {
    return (
      <div>
        {this.state.arr.map((v,i) => (
            <button key={i} style={{
                backgroundColor:`${v.color}`,
                color:"wheat"
            }}
            >{v.label}</button>
        ))}
      </div>
    )
  }
}