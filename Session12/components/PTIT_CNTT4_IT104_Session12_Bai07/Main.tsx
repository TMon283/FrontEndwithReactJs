import React from 'react'
import Cart from './Cart'
export default function Main() {
  return (
    <div style={{
        height:"620px",
        width:"1220px",
        backgroundColor:"pink",
        display:"flex",
        flexDirection:"column",
        gap:"20px"
    }}>
      <div style={{
        display:"flex",
        justifyContent:"space-evenly",
        marginTop:"30px"
      }}>
        <Cart></Cart>
        <Cart></Cart>
        <Cart></Cart>
        <Cart></Cart>
      </div>
      <div style={{
        display:"flex",
        justifyContent:"space-evenly"
      }}>
        <Cart></Cart>
        <Cart></Cart>
        <Cart></Cart>
        <Cart></Cart>
      </div>
      <div style={{
        display:"flex",
        justifyContent:"space-evenly"
      }}>
        <Cart></Cart>
        <Cart></Cart>
        <Cart></Cart>
        <Cart></Cart>
      </div>
      <div style={{
        display:"flex",
        justifyContent:"space-evenly"
      }}>
        <Cart></Cart>
        <Cart></Cart>
        <Cart></Cart>
        <Cart></Cart>
      </div>
    </div>
  )
}