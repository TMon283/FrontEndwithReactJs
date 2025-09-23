import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { random } from '../store/slice/ranDom';

export default function RanDom() {
    const reslut = useSelector((data:any) => {
        return data.random.arr
    });
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(random())
    }
    return (
    <div>
      <h1>Bài 2</h1>
      <p>[{reslut.join(",")}]</p>
      <button onClick={handleClick}>Random</button>
    </div>
  )
}