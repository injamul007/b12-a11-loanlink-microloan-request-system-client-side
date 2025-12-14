import React from "react";
import reactSpinnerLogo from "../../../assets/React_Logo_Spinner.png"

const BigLoadSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#071422]">
      <img
        className="w-20 animate-spin"
        src={reactSpinnerLogo}
        alt="animateSpinner"
      />
    </div>
  );
};

export default BigLoadSpinner;
