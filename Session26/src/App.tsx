import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bai3 from "./pages/PTIT_CNTT4_IT104_Session26_Bai03/Bai3";
import ProductDetail from './pages/PTIT_CNTT4_IT104_Session26_Bai01/ProductDetail';

import Bai1 from './pages/PTIT_CNTT4_IT104_Session26_Bai01/Bai1'
import Bai2 from './pages/PTIT_CNTT4_IT104_Session26_Bai02/Bai2'
import Student from './pages/PTIT_CNTT4_IT104_Session26_Bai02/Student'
import Bai4 from './pages/PTIT_CNTT4_IT104_Session26_Bai04/Bai4'
import Home from './pages/PTIT_CNTT4_IT104_Session26_Bai05/Home'
import PrivateRouter from './pages/PTIT_CNTT4_IT104_Session26_Bai05/PrivateRouter'
import Account from './pages/PTIT_CNTT4_IT104_Session26_Bai05/Account'
import Login from './pages/PTIT_CNTT4_IT104_Session26_Bai05/Login'
import Teams from './pages/PTIT_CNTT4_IT104_Session26_Bai07/Teams'
import TeamsIndex from './pages/PTIT_CNTT4_IT104_Session26_Bai07/TeamsIndex'
import Team from './pages/PTIT_CNTT4_IT104_Session26_Bai07/Team'

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/bai3",
      element: <Bai3 />,
    },
    {
         path: "/bai4",
      element: <Bai4 />,
    },
     {
      path:"/product",
      element:<Bai1></Bai1>
    },
    {
      path:"/product/:id",
      element:<ProductDetail></ProductDetail>
    },
    {
      path:"/student",
      element:<Bai2></Bai2>
    },
    {
      path:"/student/:name",
      element:<Student></Student>
    },
   
    {
      path:"/",
      element:<Home></Home>
    },
    {
      
  path:"/account",
  element: <PrivateRouter element={<Account></Account>}></PrivateRouter>
},

    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/teams",
      element:<Teams></Teams>,
      children:[
        {
          index:true,
          element:<TeamsIndex></TeamsIndex>
        },
        {
          path:":id",
          element:<Team></Team>
        }
      ]
    }

  ]);

  return (
    <RouterProvider router={router} />
  );
}
