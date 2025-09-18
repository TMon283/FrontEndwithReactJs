import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ListPost from '../pages/ListPost';

export default function Router() {
    const routes = createBrowserRouter([
        {
            path: "/list-post",
            element: <ListPost></ListPost>
        }
    ]);
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}