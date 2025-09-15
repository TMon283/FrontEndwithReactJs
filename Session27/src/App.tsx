import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bai1 from "./pages/PTIT_CNTT4_IT104_Session27_Bai01/Bai1";
import Home from "./pages/PTIT_CNTT4_IT104_Session27_Bai01/Home";
import About from "./pages/PTIT_CNTT4_IT104_Session27_Bai01/About";
import Contact from "./pages/PTIT_CNTT4_IT104_Session27_Bai01/Contact";
import Login from "./pages/PTIT_CNTT4_IT104_Session27_Bai08/Login";
import Register from "./pages/PTIT_CNTT4_IT104_Session27_Bai08/Register";
import ProductDetail from "./pages/PTIT_CNTT4_IT104_Session27_Bai02/ProductDetail";
import ProductList from "./pages/PTIT_CNTT4_IT104_Session27_Bai02/ProductList";
import TaskDetail from "./pages/PTIT_CNTT4_IT104_Session27_Bai03/TaskDetail";
import TaskList from "./pages/PTIT_CNTT4_IT104_Session27_Bai03/TaskList";
import BlogLayout from "./pages/PTIT_CNTT4_IT104_Session27_Bai05/BlogLayout";
import Bai6 from "./pages/PTIT_CNTT4_IT104_Session27_Bai06/Bai6";
gitg
import Home2 from "./pages/PTIT_CNTT4_IT104_Session27_Bai07/Home2";
import About2 from "./pages/PTIT_CNTT4_IT104_Session27_Bai07/About2";
import NotFound from "./pages/PTIT_CNTT4_IT104_Session27_Bai07/NotFound";
import Home1 from "./pages/PTIT_CNTT4_IT104_Session27_Bai06/Home1";
import Product from "./pages/PTIT_CNTT4_IT104_Session27_Bai06/Product";
import Detail from "./pages/PTIT_CNTT4_IT104_Session27_Bai06/Detail";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/bai1",
      element: <Bai1 />,
      children: [
        {
          index: true, 
          element: <Home />,
        },
        {
          path: "about", 
          element: <About />,
        },
        {
          path: "contact", 
          element: <Contact />,
        },
      ],
    },
{
  // bai2
      path: "/products",
      element: <ProductList></ProductList>,
    },
    {
      path: "/products/:id",
      element: <ProductDetail></ProductDetail>,
    },
    {
      // bai4
      path: "/products/:search",
      element: <ProductList></ProductList>,
    },
    {
      //bai3
      path:"/task",
      element:<TaskList></TaskList>
    },
    {
      path:"/task/:id",
      element:<TaskDetail></TaskDetail>
    },
     {
      //bai5
      path:"/blog",
      element:<BlogLayout></BlogLayout>
    },

{
   path: "/bai6",
        element: <Bai6></Bai6>,
        children: [
          {
            path: "home1",
            element: <Home1></Home1>,
          },
          {
            path: "product",
            element: <Product></Product>,
          },
          {
            path: "detail",
            element: <Detail></Detail>,
          },
        ],
},

//bai7
 {
            path: "home2",
            element: <Home2></Home2>,
          },
          {
            path: "about2",
            element: <About2></About2>,
          },
          {
            path: "*",
            element: <NotFound></NotFound>,
          },

    {
      //bai8
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}
