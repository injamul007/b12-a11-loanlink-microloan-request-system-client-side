import React from "react";
import reactSpinnerLogo from "../../../assets/React_Logo_Spinner.png"

const SmallLoadSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[86vh] bg-gray-900 dark:bg-gray-900 transition-colors">
      <img
        className="w-8 animate-spin dark:filter"
        src={reactSpinnerLogo}
        alt="animateSpinner"
      />
    </div>
  );
};

export default SmallLoadSpinner;
