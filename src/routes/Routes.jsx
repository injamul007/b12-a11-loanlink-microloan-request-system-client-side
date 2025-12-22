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
import LoanApplicationForm from "../pages/LoanApplicationForm/LoanApplicationForm";
import TermsAndPrivacy from "../pages/TermsAndCondition/TermsAndPrivacy";
import UpdateLoanEditPage from "../pages/UpdateLoanEditPage/UpdateLoanEditPage";
import Dashboard from "../components/Dashboard/Dashboard";
import AdminRoute from "./AdminRoute";
import ManagerRoute from "./ManagerRoute";
import UpdateLoanEditPageAdmin from "../pages/UpdateLoanEditPageAdmin/UpdateLoanEditPageAdmin";
import PaymentSuccess from "../pages/Payments/PaymentSuccess";
import PaymentCancelled from "../pages/Payments/PaymentCancelled";

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
        path: "/loan-application-form",
        element: <PrivateRoute><LoanApplicationForm></LoanApplicationForm></PrivateRoute>,
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
      {
        path: "/terms",
        element: <TermsAndPrivacy></TermsAndPrivacy>,
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
        index: true,
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/manage-users",
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>,
      },
      {
        path: "/dashboard/all-loan",
        element: <AdminRoute><AllLoan></AllLoan></AdminRoute>,
      },
      {
        path: "/dashboard/all-loan/update-loan/:id",
        element: <AdminRoute><UpdateLoanEditPageAdmin></UpdateLoanEditPageAdmin></AdminRoute>,
      },
      {
        path: "/dashboard/loan-applications",
        element: <AdminRoute><LoanApplications></LoanApplications></AdminRoute>,
      },
      {
        path: "/dashboard/add-loan",
        element: <ManagerRoute><AddLoan></AddLoan></ManagerRoute>,
      },
      {
        path: "/dashboard/manage-loans",
        element: <ManagerRoute><ManageLoans></ManageLoans></ManagerRoute>,
      },
      {
        path: "/dashboard/update-loan/:id",
        element: <ManagerRoute><UpdateLoanEditPage></UpdateLoanEditPage></ManagerRoute>
      },
      {
        path: "/dashboard/pending-loans",
        element: <ManagerRoute><PendingApplications></PendingApplications></ManagerRoute>,
      },
      {
        path: "/dashboard/approved-loans",
        element: <ManagerRoute><ApprovedApplications></ApprovedApplications></ManagerRoute>,
      },
      {
        path: "/dashboard/my-loans",
        element: <MyLoans></MyLoans>,
      },
      {
        path: "/dashboard/my-loans/payment-success",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "/dashboard/my-loans/payment-cancel",
        element: <PaymentCancelled></PaymentCancelled>,
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
