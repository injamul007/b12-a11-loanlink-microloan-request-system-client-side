import React from "react";
import AdminStatistics from "./DashboardStatistics/AdminStatistics";
import ManagerStatistics from "./DashboardStatistics/ManagerStatistics";
import BorrowerStatistics from "./DashboardStatistics/BorrowerStatistics";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";
import SpinnerForDashboardRoute from "../Shared/SpinnerForDashboardRoute/SpinnerForDashboardRoute";

const Dashboard = () => {
  const { user } = useAuth();
  const { role, isRoleLoading } = useRole();

  if(isRoleLoading) return <SpinnerForDashboardRoute></SpinnerForDashboardRoute>
  return (
    <div>
      <div className="flex items-center justify-between gap-4 my-4">
        <div>
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <p className="text-sm">
            Welcome back{user && `, ${user?.displayName || ""}`} —{" "}
            {role === "borrower" &&
              "Track your loan applications and payment status."}
            {role === "manager" &&
              "Review loan applications, manage approvals, and monitor daily loan activities."}
            {role === "admin" &&
              "Manage users, oversee all loans, and monitor overall system performance."}
          </p>
        </div>
      </div>
      {role === 'admin' && <AdminStatistics></AdminStatistics>}
      {role === 'manager' && <ManagerStatistics></ManagerStatistics>}
      {role === 'borrower' && <BorrowerStatistics></BorrowerStatistics>}
    </div>
  );
};

export default Dashboard;