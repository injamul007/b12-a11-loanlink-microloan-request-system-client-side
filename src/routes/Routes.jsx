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
import AllLoan from "../pages/Dashboard/Admin/AllLoan";
import LoanApplications from "../pages/Dashboard/Admin/LoanApplications";
import AddLoan from "../pages/Dashboard/Manager/AddLoan";
import ManageLoans from "../pages/Dashboard/Manager/ManageLoans";
import PendingApplications from "../pages/Dashboard/Manager/PendingAplpications";
import ApprovedApplications from "../pages/Dashboard/Manager/ApprovedApplications";
import MyLoans from "../pages/Dashboard/Borrower/MyLoans";
import DashboardErrorPage from "../pages/Dashboard/DashboardErrorPage/DashboardErrorPage";
import AllLoans from "../pages/AllLoans/AllLoans";
import AboutUs from "../pages/AboutUS/AboutUs";
import Contact from "../pages/Contact/Contact";
import LoanDetails from "../pages/LoanDetails/LoanDetails";

const router = createBrowserRouter([
  {
    path: "/",
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
      {
        path: "/all-loans",
        element: <AllLoans></AllLoans>,
      },
      {
        path: `/all-loans/:id`,
        element: <PrivateRoute><LoanDetails></LoanDetails></PrivateRoute>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
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
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: false,
        path: "*",
        element: <DashboardErrorPage></DashboardErrorPage>,
      },
      {
        path: "/dashboard/manage-users",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "/dashboard/all-loan",
        element: <AllLoan></AllLoan>,
      },
      {
        path: "/dashboard/loan-applications",
        element: <LoanApplications></LoanApplications>,
      },
      {
        path: "/dashboard/add-loan",
        element: <AddLoan></AddLoan>,
      },
      {
        path: "/dashboard/manage-loans",
        element: <ManageLoans></ManageLoans>,
      },
      {
        path: "/dashboard/pending-loans",
        element: <PendingApplications></PendingApplications>,
      },
      {
        path: "/dashboard/approved-loans",
        element: <ApprovedApplications></ApprovedApplications>,
      },
      {
        path: "/dashboard/my-loans",
        element: <MyLoans></MyLoans>,
      },
      {
        path: "/dashboard/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/dashboard/settings",
        element: <Settings></Settings>,
      },
    ],
  },
]);

export default router;
