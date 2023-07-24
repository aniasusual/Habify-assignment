import React from 'react'
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Home from "./pages/home/Home";
import Register from './pages/register/Register';



function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    
    {
      path: "/register",
      element: <Register/>,
    },
    
  ]);
  
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
