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
import MedicineDetails from "../pages/Home/MedicineDetails";

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
          path: 'medicines/:id',
          element: <PrivateRoute>
                      <MedicineDetails></MedicineDetails>
                   </PrivateRoute>,
          loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/medicines/${params.id}`)
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
          path: '/queries',
          element: <PrivateRoute><Blogs></Blogs></PrivateRoute>
        },
        {
          path:'/profile',
          element: <Profile></Profile>
        }
      ]
    },
  ]);