import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { FiMenu } from "react-icons/fi";
import { BsSun, BsMoon } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
import MyContainer from "../Shared/MyContainer/MyContainer";
import dashboardLogo from "../../assets/microloan_logo.png";
import Swal from "sweetalert2";
import { RiLogoutBoxRLine } from "react-icons/ri";
import useRole from "../../hooks/useRole";

const DashboardNavbar = ({ onOpenSidebar }) => {
  const { user, logOutFunc, setUser} = useAuth();
  const {role} = useRole()
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("MicroLoan_theme") || "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    // apply theme to html as data-theme (works well with daisyUI)
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("MicroLoan_theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const handleLogout = async () => {
    try {
      await logOutFunc();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "LogOut Successful",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          popup: "small-swal-popup",
        },
      });
      setUser(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header className="w-full sticky top-0 z-40 bg-linear-to-br from-[#061521] to-[#071422] text-white">
      <MyContainer>
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenSidebar}
              aria-label="Open menu"
              className="lg:hidden p-2 rounded-md text-white bg-white/5 hover:bg-white/6 transition cursor-pointer"
            >
              <FiMenu />
            </button>

            <Link to="/" className="flex items-center gap-3">
              <span className="font-extrabold lg:text-xl md:text-xl text-[16px] flex items-center">
                <img
                  src={dashboardLogo}
                  alt="dashboardLogo"
                  className="lg:w-10 w-7 lg:block md:block hidden"
                />
                <span className="text-[#4DA3FF]">Loan</span>
                <span className="text-[#FFB703]">Link</span>
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-white/90">
            {/* content will come soon here... */}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full bg-white/5 hover:bg-white/7 transition"
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <BsSun /> : <BsMoon />}
            </button>

            {user ? (
              <>
                <div className="hidden sm:flex items-center gap-3">
                  <img
                    src={
                      user.photoURL ||
                      "https://i.ibb.co/bN9JNsZ/portfolio-course.jpg"
                    }
                    alt={user.displayName || user.email}
                    className="w-9 h-9 rounded-full border-2 border-white/10"
                  />
                  <div className="text-sm">
                    <div className="font-medium text-white/90">
                      {user.displayName || user.email.split("@")[0]}
                    </div>
                    <div className="text-xs text-white/60">{role}</div>
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  className="ml-2 inline-flex items-center gap-2 bg-[#4DA3FF] hover:bg-[#0B5FFF] cursor-pointer px-4 py-2 rounded-full text-sm font-semibold duration-300"
                >
                  <RiLogoutBoxRLine size={22} /> Logout
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </MyContainer>
    </header>
  );
};

export default DashboardNavbar;
