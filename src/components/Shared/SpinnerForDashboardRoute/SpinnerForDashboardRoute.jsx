import React from "react";
import reactSpinnerLogo from "../../../assets/React_Logo_Spinner.png"

const SpinnerForDashboardRoute = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <img
        className="w-20 animate-spin"
        src={reactSpinnerLogo}
        alt="animateSpinner"
      />
    </div>
  );
};

export default SpinnerForDashboardRoute;