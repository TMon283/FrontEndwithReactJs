import React from 'react'

export default function Ex1() {
  const cartItems = [
    {id:1,name:"San pham 1" , price : 100000 , quantity : 2},
    {id:2,name:"San pham 2" , price : 200000 , quantity : 3}
  ]
  const reslut = cartItems.reduce((sum,value) => sum + value.price * value.quantity ,0)
    return (
    <div>
      Tổng tiền trong giỏ hàng : {reslut.toLocaleString()}
    </div>
  )
}