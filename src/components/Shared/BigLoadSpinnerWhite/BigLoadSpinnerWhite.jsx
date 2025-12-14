import React, { useEffect, useState } from "react";

const BigLoadSpinnerWhite = () => {
  const [theme] = useState(
    () =>
      localStorage.getItem("theme") ||
      (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div
      className={
        theme === "dark"
          ? "min-h-screen bg-[#1d232a] text-gray-100 flex items-center justify-center flex-col"
          : "min-h-screen bg-white text-gray-900 flex items-center justify-center flex-col"
      }
    >
      <img
        className="w-20 animate-spin"
        src={"https://i.ibb.co.com/4wCJZ08Y/react-JS-Logo.png"}
        alt="animateSpin"
      />
    </div>
  );
};

export default BigLoadSpinnerWhite;
