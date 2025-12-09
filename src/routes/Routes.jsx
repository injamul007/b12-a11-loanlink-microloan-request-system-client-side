import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/Error404Page/ErrorPage";
import Home from "../pages/Home/Home";


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      // {
      //   path: "/all-loans",
      //   element: ,
      // },
      // {
      //   path: "/login",
      //   element: ,
      // },
      // {
      //   path: "/register",
      //   element: ,
      // },
    ],
  },
])

export default router;