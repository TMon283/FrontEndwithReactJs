import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
    const param = useParams();
    console.log(param);
  return (
    <div>
      danh sach san pham
    </div>
  )
}