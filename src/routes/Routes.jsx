import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/Error404Page/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Dashboard/Common/Profile";
import Settings from "../pages/Dashboard/Common/Settings";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import AllLoans from "../pages/Dashboard/Admin/AllLoans";
import LoanApplications from "../pages/Dashboard/Admin/LoanApplications";
import AddLoan from "../pages/Dashboard/Manager/AddLoan";
import ManageLoans from "../pages/Dashboard/Manager/ManageLoans";
import PendingApplications from "../pages/Dashboard/Manager/PendingAplpications";
import ApprovedApplications from "../pages/Dashboard/Manager/ApprovedApplications";


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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: '/dashboard/manage-users',
        element: <ManageUsers></ManageUsers>
      },
      {
        path: '/dashboard/all-loan',
        element: <AllLoans></AllLoans>
      },
      {
        path: '/dashboard/loan-applications',
        element: <LoanApplications></LoanApplications>
      },
      {
        path: '/dashboard/add-loan',
        element: <AddLoan></AddLoan>
      },
      {
        path: '/dashboard/manage-loans',
        element: <ManageLoans></ManageLoans>
      },
      {
        path: '/dashboard/pending-loans',
        element: <PendingApplications></PendingApplications>
      },
      {
        path: '/dashboard/approved-loans',
        element: <ApprovedApplications></ApprovedApplications>
      },
      {
        path: '/dashboard/profile',
        element: <Profile></Profile>
      },
      {
        path: '/dashboard/profile',
        element: <Profile></Profile>
      },
      {
        path: '/dashboard/settings',
        element: <Settings></Settings>
      },
    ]
  }
])

export default router;