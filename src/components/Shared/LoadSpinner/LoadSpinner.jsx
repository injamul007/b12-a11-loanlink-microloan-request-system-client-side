import React from "react";
import spinner from "../../assets/loading_spinner.png"

const LoadSpinner = () => {
  return (
    <div className="flex justify-center bg-transparent items-center py-16">
      <h2 className="lg:text-[50px] text-4xl font-bold flex items-center justify-center bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
        L <img className="lg:w-16 w-12 animate-spin" src={spinner} alt="" /> ading...
      </h2>
    </div>
  );
};

export default LoadSpinner;
