import React, { useEffect, useState } from "react";
import { Link, useNavigate, useRouteError } from "react-router";
import pageNotFound from "../../assets/error-404.png";
import MyContainer from "../../components/Shared/MyContainer/MyContainer";

const DashboardErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate()

  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("MicroLoan_theme") || "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === "MicroLoan_theme") {
        setTheme(e.newValue || "dark");
      }
    };

    window.addEventListener("storage", onStorage);

    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <>
      <title>MicroLoan || Dashboard Error-404</title>

      <MyContainer>
        <div
          className={
            theme === "dark"
              ? "min-h-screen dark:bg-[#1d232a] text-gray-100 flex items-center justify-center flex-col"
              : "min-h-screen bg-white text-gray-900 flex items-center justify-center flex-col"
          }
        >
          <img className="lg:w-fit w-80" src={pageNotFound} alt="error_img" />

          <h1 className="text-center text-gray-600 text-4xl font-bold">
            Oops, Page Not Found
          </h1>

          <p className="text-gray-400 my-3">
            The page you are looking for is not available in Dashboard.
          </p>

          <div className="pb-3 text-gray-300">{error?.message}</div>

          <div>
            <Link to={"/dashboard"}>
              <button
                className="btn bg-linear-to-r from-[#0B5FFF] to-[#0B73FF] text-white px-6 
              hover:shadow-[2px_4px_6px_rgba(78,77,77,0.5),-2px_-4px_6px_rgba(65,64,64,0.6)]
              hover:bg-linear-to-r hover:from-[#FFB703] hover:to-[#0B73FF]
              transition-all duration-300 mr-4"
              >
                Take me Home!
              </button>
            </Link>
            <button
            onClick={() => navigate(-1)}
              className="btn bg-linear-to-r from-[#0B5FFF] to-[#0B73FF] text-white px-6 
              hover:shadow-[2px_4px_6px_rgba(78,77,77,0.5),-2px_-4px_6px_rgba(65,64,64,0.6)]
              hover:bg-linear-to-r hover:from-[#FFB703] hover:to-[#0B73FF]
              transition-all duration-300"
            >
              One Step Back!
            </button>
          </div>
        </div>
      </MyContainer>
    </>
  );
};

export default DashboardErrorPage;
