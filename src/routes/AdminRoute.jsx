import React from 'react';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import Forbidden from '../components/Forbidden/Forbidden';
import SpinnerForDashboardRoute from '../components/Shared/SpinnerForDashboardRoute/SpinnerForDashboardRoute';

const AdminRoute = ({children}) => {
  const {loading} = useAuth();
  const {role, isRoleLoading} = useRole();

  if(loading || isRoleLoading) return <SpinnerForDashboardRoute></SpinnerForDashboardRoute>

  if(role !== 'admin') {
    return <Forbidden></Forbidden>
  }


  return children;
};

export default AdminRoute;