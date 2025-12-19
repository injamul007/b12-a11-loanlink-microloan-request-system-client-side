import BigLoadSpinner from "../components/Shared/BigLoadSpinner/BigLoadSpinner";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <BigLoadSpinner></BigLoadSpinner>;
  if (user && user?.email) return children;
  return <Navigate to="/login" state={location.pathname} replace="true" />;
};

export default PrivateRoute;
