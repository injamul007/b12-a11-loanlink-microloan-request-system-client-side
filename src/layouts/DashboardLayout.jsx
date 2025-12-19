import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import { FiX } from "react-icons/fi";
import dashboardLogo from "../assets/microloan_logo.png";
import MyContainer from "../components/Shared/MyContainer/MyContainer";
import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import DashboardSidebar from "../components/Dashboard/DashboardSidebar";
import DashboardFooter from "../components/Dashboard/DashboardFooter";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen  flex flex-col">
      <title>MicroLoan || Dashboard</title>

      <DashboardNavbar onOpenSidebar={() => setOpen(true)} />

      <div className="flex flex-1">
        {/* Desktop sidebar */}
        {/* <div className=" fixed h-full"> */}
          <div className="hidden lg:block fixed left-0 top-15 h-[calc(100vh-3rem)] w-72">
            <DashboardSidebar />
          </div>
        {/* </div> */}

        {/* Mobile sidebar */}
        {open && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="absolute inset-0 "
              onClick={() => setOpen(false)}
            ></div>

            <div className="absolute left-0 top-0 bottom-0 w-72 bg-[#071422] p-4 overflow-auto text-white">
              <div className="flex items-center justify-between mb-4">
                <Link
                  to="/"
                  className="flex items-center gap-3"
                  onClick={() => setOpen(false)}
                >
                  <span className="font-extrabold text-[#4DA3FF] flex items-center">
                    <img
                      src={dashboardLogo}
                      alt="dashboardLogo"
                      className="lg:w-10 w-8"
                    />{" "}
                    Micro<span className="text-[#FFB703]">Loan</span>
                  </span>
                </Link>

                <button
                  onClick={() => setOpen(false)}
                  className="p-2 bg-white/5 rounded-md cursor-pointer"
                >
                  <FiX />
                </button>
              </div>

              <DashboardSidebar onClose={() => setOpen(false)} />
            </div>
          </div>
        )}

        {/* Main content */}
        <MyContainer>
          <main className="flex-1 p-4 lg:p-0 lg:ml-64">
            <div className="container mx-auto">
              <div className="space-y-4 lg:space-y-2">
                <Outlet></Outlet>
              </div>
            </div>
          </main>
        </MyContainer>
      </div>
      <DashboardFooter></DashboardFooter>
    </div>
  );
};

export default DashboardLayout;
