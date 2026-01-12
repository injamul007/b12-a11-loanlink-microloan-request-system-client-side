import React from "react";
import { NavLink } from "react-router";
import {
  MdDashboard,
  MdOutlinePendingActions,
  MdOutlinePostAdd,
} from "react-icons/md";
import { BiBookAdd } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaUsersCog } from "react-icons/fa";
import { HiDocumentCurrencyDollar } from "react-icons/hi2";
import { GrDocumentConfig } from "react-icons/gr";
import { BsClipboard2CheckFill } from "react-icons/bs";
import useRole from "../../hooks/useRole";
import SmallLoadSpinner from "../Shared/SmallLoadSpinner/SmallLoadSpinner";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const DashboardSidebar = ({ onClose }) => {
  const { logOutFunc } = useAuth();
  const { role, isRoleLoading } = useRole();
  const baseLink =
    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition hover:bg-white/5";
  const activeClass =
    "bg-white/6 text-[#4DA3FF] font-semibold ring-1 ring-[#4DA3FF]/10";

  if (isRoleLoading) return <SmallLoadSpinner></SmallLoadSpinner>;

  return (
    <aside className="bg-[#071422] text-white lg:w-64 w-60 h-full p-2 lg:p-4 lg:block">
      <nav className="space-y-48">
        <div className=" space-y-2">
          <div className="text-xs text-white/60 uppercase mb-2">Dashboard</div>

          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeClass : "text-white/90"}`
            }
            onClick={onClose}
          >
            <MdDashboard size={28} />
            <span>Dashboard</span>
          </NavLink>

          {/* //? Borrower Role system Route show */}
          {role === "borrower" && (
            <>
              <NavLink
                to="/dashboard/my-loans"
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? activeClass : "text-white/90"}`
                }
                onClick={onClose}
              >
                <GiTakeMyMoney size={30} />
                <span>My Loans</span>
              </NavLink>
            </>
          )}

          {/* //? Manager Role system Route show */}
          {role === "manager" && (
            <>
              <NavLink
                to="/dashboard/add-loan"
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? activeClass : "text-white/90"}`
                }
                onClick={onClose}
              >
                <BiBookAdd size={30} />
                <span>Add Loan</span>
              </NavLink>

              <NavLink
                to="/dashboard/manage-loans"
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? activeClass : "text-white/90"}`
                }
                onClick={onClose}
              >
                <GrDocumentConfig size={28} />
                <span>Manage Loans</span>
              </NavLink>

              <NavLink
                to="/dashboard/pending-loans"
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? activeClass : "text-white/90"}`
                }
                onClick={onClose}
              >
                <MdOutlinePendingActions size={30} />
                <span>Pending Applications</span>
              </NavLink>

              <NavLink
                to="/dashboard/approved-loans"
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? activeClass : "text-white/90"}`
                }
                onClick={onClose}
              >
                <BsClipboard2CheckFill size={26} />
                <span>Approved Applications</span>
              </NavLink>
            </>
          )}

          {/* //? Admin Role system Route show */}
          {role === "admin" && (
            <>
              {" "}
              <NavLink
                to="/dashboard/manage-users"
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? activeClass : "text-white/90"}`
                }
                onClick={onClose}
              >
                <FaUsersCog size={28} />
                <span>Manage Users</span>
              </NavLink>
              <NavLink
                to="/dashboard/all-loan"
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? activeClass : "text-white/90"}`
                }
                onClick={onClose}
              >
                <MdOutlinePostAdd size={30} />
                <span>All Loan</span>
              </NavLink>
              <NavLink
                to="/dashboard/loan-applications"
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? activeClass : "text-white/90"}`
                }
                onClick={onClose}
              >
                <HiDocumentCurrencyDollar size={28} />
                <span>Loan Applications</span>
              </NavLink>
            </>
          )}

          <div className="border-t border-gray-800 my-3"></div>

          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeClass : "text-white/90"}`
            }
            onClick={onClose}
          >
            <AiOutlineUser size={28} />
            <span>Profile</span>
          </NavLink>
        </div>

        <button
          className="flex items-center gap-4 ml-1 cursor-pointer hover:bg-gray-800/40 p-3 rounded-lg w-full"
          onClick={async () => {
            try {
              await logOutFunc();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Logout Successful",
                showConfirmButton: false,
                timer: 1500,
                customClass: { popup: "small-swal-popup" },
              });
            } catch (err) {
              console.error(err);
              Swal.fire({
                icon: "error",
                title: "Logout Failed",
                text: "Something went wrong!",
              });
            }
          }}
        >
          <span className="rounded-sm text-xl flex items-center justify-center">
            <RiLogoutBoxRLine size={28} />
          </span>
          <span>Log Out</span>
        </button>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
