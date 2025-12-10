import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { GoHomeFill } from "react-icons/go";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { TiContacts } from "react-icons/ti";
import { MdDashboard } from "react-icons/md";
import navLogo from "../../../assets/loanLink_logo.png";
import Swal from "sweetalert2";
import { ClockLoader } from "react-spinners";
import { FaSun, FaMoon } from "react-icons/fa";
import MyContainer from "../MyContainer/MyContainer";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, setUser, loading, logOutFunc } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  // const navigate = useNavigate();
  const links = (
    <>
      <li>
        <NavLink to={"/"}>
          <GoHomeFill />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/all-loans"}>
          <TiContacts /> All Loans
        </NavLink>
      </li>

      {user && user?.email ? (
        <li>
          <NavLink to={"/dashboard"}>
            <MdDashboard /> Dashboard
          </NavLink>
        </li>
      ) : (
        <>
          <li>
            <NavLink to={"/about-us"}>
              <TiContacts /> About Us
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>
              <TiContacts /> Contact
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleLogOutUser = () => {
    logOutFunc()
      .then(() => {
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
        // navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="navbar shadow-sm  dark:bg-[#303233] relative z-1000">
      <MyContainer>
        <div className="flex justify-between items-center py-1">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost md:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-fit p-2 shadow absolute gap-2"
              >
                {links}
              </ul>
            </div>
            <Link
              to="/"
              className="flex items-center gap-1 font-extrabold text-2xl sm:text-3xl group select-none"
            >
              <p className="text-primary group-hover:text-[#0B73FF] transition-colors duration-300 flex items-center text-xl md:text-2xl lg:text-3xl hover:text-accent dark:hover:text-[#FFB703]">
                <img className="lg:w-10 w-9" src={navLogo} alt="navLogo" />
                Micro
                <span className="text-secondary relative transition-all duration-300 group-hover:scale-110 dark:text-[#FFB703] dark:hover:text-primary">
                  Loan
                  {/* subtle glowing underline */}
                  <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#FFB703] opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></span>
                </span>
              </p>
            </Link>
          </div>
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
          </div>
          <div className="navbar-end gap-3 mr-3">
            <div className="flex"></div>
            {loading ? (
              <ClockLoader color="#0B5FFF" size={34} />
            ) : user ? (
              <>
                <div className="dropdown dropdown-end z-50">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 h-10 border-2 border-gray-300 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        referrerPolicy="no-referrer"
                        src={
                          user.photoURL ||
                          "https://i.ibb.co.com/HLPwdmsS/User-Profile-PNG-Picture.png"
                        }
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-fit p-2 shadow"
                  >
                    <div className=" pb-3 border-b border-b-gray-200">
                      <li className="text-sm font-bold">{user.displayName}</li>
                      <li className="text-xs">{user.email}</li>
                    </div>
                    <li className="my-2">
                      <NavLink to={"/dashboard/profile"}>
                        <FaUser /> Profile
                      </NavLink>
                    </li>
                    <li>
                      <button
                        onClick={handleLogOutUser}
                        className="btn btn-sm my-btn flex lg:hidden"
                      >
                        <IoLogOut /> Logout
                      </button>
                    </li>
                  </ul>
                </div>
                <button
                  onClick={handleLogOutUser}
                  className="btn my-btn hidden lg:flex"
                >
                  <IoLogOut /> Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to={"/login"}
                  className="btn btn-sm md:btn-md lg:btn-md my-btn"
                >
                  {" "}
                  <IoLogIn /> Login
                </Link>

                <Link
                  to={"/register"}
                  className="btn btn-sm md:btn-md hidden lg:flex lg:btn-md my-btn"
                >
                  {" "}
                  <IoLogIn /> Register
                </Link>
              </>
            )}
          </div>
          {/* daisyUi swap theme */}
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={(e) => handleTheme(e.target.checked)}
              aria-label="Toggle theme"
            />

            {/* swap-on (dark mode) */}
            <FaSun className="swap-on w-6 h-6" />

            {/* swap-off (light mode) */}
            <FaMoon className="swap-off w-6 h-6" />
          </label>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
