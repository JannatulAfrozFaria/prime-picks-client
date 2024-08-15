import {
    createBrowserRouter,
    // RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AddMedicine from "../pages/AddMedicine/AddMedicine";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main> ,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/addMedicine',
            element: <AddMedicine></AddMedicine>
        }
      ]
    },
  ]);