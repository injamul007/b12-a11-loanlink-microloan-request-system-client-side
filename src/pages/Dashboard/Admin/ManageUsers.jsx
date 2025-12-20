import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import MyContainer from "../../../components/Shared/MyContainer/MyContainer";
import { FaUserCog } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import SpinnerForDashboardRoute from "../../../components/Shared/SpinnerForDashboardRoute/SpinnerForDashboardRoute";
import DashboardErrorPage from "../DashboardErrorPage/DashboardErrorPage";
import ViewUsersInfoModal from "../../../components/Modal/ViewUsersInfoModal";
import UpdateUserRoleModal from "../../../components/Modal/UpdateUserRoleModal";

const ManageUsers = () => {
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [userRole, setUserRole] = useState(null);
  let [isOpen, setIsOpen] = useState(false);
  let [isOpen2, setIsOpen2] = useState(false);

  //? this close modal function is for viewing user information
  const closeModal = () => {
    setIsOpen(false);
    setSelectedLoan(null);
  };
  
  //? this close modal function is for update user role
  const closeModal2 = () => {
    setIsOpen2(false);
    setUserRole(null);
  };


  const {
    data: allUsers = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["all-users", user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/manage-users`);
      return res.data.users;
    },
  });

  if (isLoading) return <SpinnerForDashboardRoute></SpinnerForDashboardRoute>;
  if (isError) return <DashboardErrorPage></DashboardErrorPage>;

  return (
    <MyContainer>
      <title>MicroLoan || Manage Users</title>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="lg:text-2xl text-xl font-bold text-center my-10">
            User Management System
          </h1>
          <p className="bg-[#4DA3FF] p-1 font-semibold text-sm rounded-lg">
            {allUsers.length
              ? `Total User: ${allUsers.length}`
              : "No User Found"}
          </p>
        </div>

        <div>
          <div className="w-full overflow-x-auto rounded-box border border-base-content/5 bg-base-200 mb-8 shadow-lg dark:shadow-sm dark:shadow-gray-600">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {allUsers.map((user, idx) => (
                  <tr key={user._id}>
                    <th>{idx + 1}</th>

                    {/* user name */}
                    <td className="md:table-cell max-w-[180px]">{user.name}</td>

                    {/* user email */}
                    <td className="md:table-cell max-w-[180px] truncate">
                      {user.email}
                    </td>

                    {/* role */}
                    <td className="whitespace-nowrap font-semibold">
                      {user.role}
                    </td>

                    {/* Actions */}
                    <td>
                      <div className="flex flex-wrap gap-2">
                        <div
                          className="tooltip before:bg-blue-400 before:text-black
    dark:before:bg-blue-400 dark:before:text-white"
                          data-tip="Update Role"
                        >
                          <button
                            onClick={() => {
                              setUserRole(user);
                              setIsOpen2(true);
                            }}
                            className="btn btn-square btn-sm dark:bg-gray-800 hover:bg-[#4DA3FF]"
                          >
                            <FaUserCog size={24}></FaUserCog>
                          </button>
                        </div>
                        <div
                          className="tooltip before:bg-yellow-400 before:text-black
    dark:before:bg-yellow-400 dark:before:text-white"
                          data-tip="View"
                        >
                          <button
                            onClick={() => {
                              setSelectedLoan(user);
                              setIsOpen(true);
                            }}
                            className="btn btn-square btn-sm dark:bg-gray-800 hover:bg-[#FFB703]"
                          >
                            <MdOutlineRemoveRedEye size={24} />
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* //? View User details with Modal */}
            <ViewUsersInfoModal
              isOpen={isOpen}
              closeModal={closeModal}
              user={selectedLoan}
            ></ViewUsersInfoModal>
            {/* //? Update User Role Modal */}
            <UpdateUserRoleModal
            isOpen={isOpen2}
            closeModal={closeModal2}
            user={userRole}
            refetch={refetch}
            >
            </UpdateUserRoleModal>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default ManageUsers;
