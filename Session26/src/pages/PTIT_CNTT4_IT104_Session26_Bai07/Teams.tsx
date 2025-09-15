import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Teams() {
  return (
    <div>
      Teams
      <Outlet></Outlet>
    </div>
  )
}