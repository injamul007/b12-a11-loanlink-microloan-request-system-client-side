import React, { useEffect, useState } from "react";
import { Link, useRouteError } from "react-router";
import pageNotFound from "../../assets/error-404.png";
import MyContainer from "../../components/Shared/MyContainer/MyContainer";

const ErrorPage = () => {
  const error = useRouteError();
  const [theme] = useState(
    () => localStorage.getItem("theme") || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <>
      <title>LoanLink || Error-404</title>
      <MyContainer>
        <div className={theme === "dark" ? "min-h-screen bg-[#1d232a] text-gray-100 flex items-center justify-center flex-col" : "min-h-screen bg-white text-gray-900 flex items-center justify-center flex-col"}>
          <img className="lg:w-fit w-80" src={pageNotFound} alt="error_img" />
          <h1 className="text-center text-4xl font-bold">
            Oops, Page Not Found
          </h1>
          <p className="text-gray-400 my-3">
            The page you are looking for is not available.
          </p>
          <div className="pb-3 text-gray-300">{error.message}</div>
          <Link to={"/"}>
            <button
              className="btn bg-linear-to-r from-[#0B5FFF] to-[#0B73FF] text-white px-6 hover:shadow-[2px_4px_6px_rgba(78,77,77,0.5),-2px_-4px_6px_rgba(65,64,64,0.6)]
             hover:bg-linear-to-r hover:from-[#FFB703] hover:to-[#0B73FF]
             transition-all duration-300"
            >
              Back to Home!
            </button>
          </Link>
        </div>
      </MyContainer>
    </>
  );
};

export default ErrorPage;
