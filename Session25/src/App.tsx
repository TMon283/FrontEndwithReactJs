import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Bai1 from './components/PTIT_CNTT4_IT104_Session25_Bai01/Bai01';
import Home from './components/PTIT_CNTT4_IT104_Session25_Bai01/Home';
import About from './components/PTIT_CNTT4_IT104_Session25_Bai01/About';
import Contact from './components/PTIT_CNTT4_IT104_Session25_Bai01/Contact';
import Bai3 from './components/PTIT_CNTT4_IT104_Session25_Bai03/Bai03';
import Login from './components/PTIT_CNTT4_IT104_Session25_Bai03/Login';
import Bai4 from './components/PTIT_CNTT4_IT104_Session25_Bai04/Bai04';
import Register from './components/PTIT_CNTT4_IT104_Session25_Bai04/Register';
import NotFound  from './components/PTIT_CNTT4_IT104_Session25_Bai05/NotFound';
import Bai6  from './components/PTIT_CNTT4_IT104_Session25_Bai06/Bai06';
import Home1  from './components/PTIT_CNTT4_IT104_Session25_Bai06/Home1';
import Product  from './components/PTIT_CNTT4_IT104_Session25_Bai06/Product';
import Detail  from './components/PTIT_CNTT4_IT104_Session25_Bai06/Detail';
import Bai7  from './components/PTIT_CNTT4_IT104_Session25_Bai07/Bai07';
import CustomLink  from './components/PTIT_CNTT4_IT104_Session25_Bai07/CustomLink';
import  Home2 from './components/PTIT_CNTT4_IT104_Session25_Bai07/Home2';
import  ListUser from './components/PTIT_CNTT4_IT104_Session25_Bai08/ListUser';
import  UserDetail from './components/PTIT_CNTT4_IT104_Session25_Bai08/UserDetail';

export default function App() {
  const routers = createBrowserRouter([
    {
      path:"/bai1",
      element: <Bai1></Bai1>,
        children: [
        {
          path: "home",
          element: <Home></Home>,
        },
        {
          path: "about",
          element: <About></About>,
        },
        {
          path: "contact",
          element: <Contact></Contact>,
        },
      ],
    },
    {
      path:"/bai3",
      element:<Bai3></Bai3>
    },
    {
      path:"/login",
      element:<Login></Login>
    }
    , {
      path:"/bai4",
      element:<Bai4></Bai4>
    },
    {
      path:"/register",
      element:<Register></Register>
    }
    ,
{
      path:"*",
      element:<NotFound></NotFound>
    },
 {
      path: "bai6",
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
     {
      path: "Bai7",
      element: <Bai7></Bai7>,
    },
    {
      path: "home2",
      element: <Home2></Home2>,
    },
    {
      path: "custom",
      element: <CustomLink></CustomLink>,
    },
    {
      path:"listUser",
      element:<ListUser></ListUser>
    },
    {
      path:"listUser/:id",
      element:<ListUser></ListUser>
    },
     {
      path:"userDetail",
      element:<UserDetail></UserDetail>
    },
  ])
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}