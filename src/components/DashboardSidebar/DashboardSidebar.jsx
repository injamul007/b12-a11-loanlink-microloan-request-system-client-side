import React from "react";
import { NavLink } from "react-router";
import { MdDashboard, MdOutlinePendingActions, MdOutlinePostAdd } from "react-icons/md";
import { BiBookAdd } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaUsersCog } from "react-icons/fa";
import { HiDocumentCurrencyDollar } from "react-icons/hi2";
import { GrDocumentConfig } from "react-icons/gr";
import { BsClipboard2CheckFill } from "react-icons/bs";

const DashboardSidebar = ({ onClose }) => {
  const baseLink =
    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition hover:bg-white/5";
  const activeClass = "bg-white/6 text-[#4DA3FF] font-semibold ring-1 ring-[#4DA3FF]/10";

  return (
    <aside className="bg-[#071422] text-white lg:w-64 w-60 h-full p-2 lg:p-4 lg:block">
      <nav className="space-y-3">
        <div className="text-xs text-white/60 uppercase mb-2">Dashboard</div>

        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) => `${baseLink} ${isActive ? activeClass : "text-white/90"}`}
          onClick={onClose}
        >
          <MdDashboard className="text-xl" />
          <span>My Dashboard</span>
        </NavLink>

        <NavLink
          to="/dashboard/my-loans"
          className={({ isActive }) => `${baseLink} ${isActive ? activeClass : "text-white/90"}`}
          onClick={onClose}
        >
          <GiTakeMyMoney  className="text-xl" />
          <span>My Loans</span>
        </NavLink>

        <NavLink
          to="/dashboard/add-loan"
          className={({ isActive }) => `${baseLink} ${isActive ? activeClass : "text-white/90"}`}
          onClick={onClose}
        >
          <BiBookAdd className="text-xl" />
          <span>Add Loan</span>
        </NavLink>

        <NavLink
          to="/dashboard/manage-loans"
          className={({ isActive }) => `${baseLink} ${isActive ? activeClass : "text-white/90"}`}
          onClick={onClose}
        >
          <GrDocumentConfig className="text-xl" />
          <span>Manage Loans</span>
        </NavLink>

        <NavLink
          to="/dashboard/pending-loans"
          className={({ isActive }) => `${baseLink} ${isActive ? activeClass : "text-white/90"}`}
          onClick={onClose}
        >
          <MdOutlinePendingActions className="text-xl" />
          <span>Pending Applications</span>
        </NavLink>

        <NavLink
          to="/dashboard/approved-loans"
          className={({ isActive }) => `${baseLink} ${isActive ? activeClass : "text-white/90"}`}
          onClick={onClose}
        >
          <BsClipboard2CheckFill  className="text-xl" />
          <span>Approved Applications</span>
        </NavLink>

        <NavLink
          to="/dashboard/manage-users"
          className={({ isActive }) => `${baseLink} ${isActive ? activeClass : "text-white/90"}`}
          onClick={onClose}
        >
          <FaUsersCog className="text-xl" />
          <span>Manage Users</span>
        </NavLink>

        <NavLink
          to="/dashboard/all-loan"
          className={({ isActive }) => `${baseLink} ${isActive ? activeClass : "text-white/90"}`}
          onClick={onClose}
        >
          <MdOutlinePostAdd className="text-xl" />
          <span>All Loan</span>
        </NavLink>

        <NavLink
          to="/dashboard/loan-applications"
          className={({ isActive }) => `${baseLink} ${isActive ? activeClass : "text-white/90"}`}
          onClick={onClose}
        >
          <HiDocumentCurrencyDollar className="text-xl" />
          <span>Loan Applications</span>
        </NavLink>

        <div className="border-t border-gray-800 my-3"></div>

        <NavLink
          to="/dashboard/profile"
          className={({ isActive }) => `${baseLink} ${isActive ? activeClass : "text-white/90"}`}
          onClick={onClose}
        >
          <AiOutlineUser className="text-xl" />
          <span>Profile</span>
        </NavLink>

        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) => `${baseLink} ${isActive ? activeClass : "text-white/90"}`}
          onClick={onClose}
        >
          <span className=" w-5 h-5 border rounded-sm text-xs flex items-center justify-center">⚙</span>
          <span>Settings</span>
        </NavLink>
      </nav>
    </aside>
  );
}

export default DashboardSidebar;