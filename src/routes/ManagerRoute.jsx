import React from 'react';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import SpinnerForDashboardRoute from '../components/Shared/SpinnerForDashboardRoute/SpinnerForDashboardRoute';
import Forbidden from '../components/Forbidden/Forbidden';

const ManagerRoute = ({children}) => {
  const {loading} = useAuth();
  const {role, isRoleLoading} = useRole();

  if(loading || isRoleLoading) return <SpinnerForDashboardRoute></SpinnerForDashboardRoute>

  if(role !== 'manager') {
    return <Forbidden></Forbidden>
  }


  return children;
};

export default ManagerRoute;