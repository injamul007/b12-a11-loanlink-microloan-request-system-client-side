import React from "react";

const BigLoadSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 dark:bg-gray-900 transition-colors">
      <img
        className="w-20 animate-spin dark:filter dark:invert"
        src={"https://i.ibb.co.com/4wCJZ08Y/react-JS-Logo.png"}
        alt="animateSpin"
      />
    </div>
  );
};

export default BigLoadSpinner;
