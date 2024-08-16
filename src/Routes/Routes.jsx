import {
    createBrowserRouter,
    // RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AddMedicine from "../pages/AddMedicine/AddMedicine";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blogs from "../pages/Blogs/Blogs";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile/Profile";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main> ,
      errorElement: <ErrorPage />,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/addMedicine',
            element: <AddMedicine></AddMedicine>
        },
        {
            path: '/SignUp',
            element: <SignUp></SignUp>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
          path: '/blogs',
          element: <PrivateRoute><Blogs></Blogs></PrivateRoute>
        },
        {
          path:'/profile',
          element: <Profile></Profile>
        }
      ]
    },
  ]);