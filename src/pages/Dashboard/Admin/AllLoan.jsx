import React, { useState } from "react";
import MyContainer from "../../../components/Shared/MyContainer/MyContainer";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SpinnerForDashboardRoute from "../../../components/Shared/SpinnerForDashboardRoute/SpinnerForDashboardRoute";
import DashboardErrorPage from "../DashboardErrorPage/DashboardErrorPage";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import ViewLoanModalInManageLoans from "../../../components/Modal/ViewLoanModalInManageLoans";

const AllLoan = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLoan, setSelectedLoan] = useState(null)
  const axiosInstance = useAxiosSecure();

  const closeModal = () => {
    setSelectedLoan(null)
    setIsOpen(false)
  }

  const {
    data: manageUsersLoan = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["manageUsersLoan",],
    queryFn: async () => {
      const res = await axiosInstance.get(`/manage-users/all-loan`);
      return res.data.result;
    },
  });

  const handleDeleteLoan = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure to Delete?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Delete it!",
        customClass: {
          popup: "confirmation-swal-popup",
        },
      });

      if (result.isConfirmed) {
        const res = await axiosInstance.delete(`/manage-loans/deleted/${id}`);
        if (res.data.result.deletedCount) {
          toast.success("Loan Deleted Successful");
          refetch();
        }
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  if (isLoading) return <SpinnerForDashboardRoute></SpinnerForDashboardRoute>;
  if (isError) return <DashboardErrorPage></DashboardErrorPage>;

  return (
    <MyContainer>
      <title>LoanLink || All Loan</title>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="lg:text-2xl text-xl font-bold text-center my-10">
            All Loans
          </h1>
          <p className="bg-[#4DA3FF] p-1 text-sm font-semibold rounded-lg">
            {manageUsersLoan.length
              ? `Showing: ${manageUsersLoan.length} data`
              : "No Data Found"}
          </p>
        </div>

        <div>
          <div className="w-full overflow-x-auto rounded-box border border-base-content/5 bg-base-200 mb-8 shadow-lg dark:shadow-sm dark:shadow-gray-600">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Interest</th>
                  <th>Category</th>
                  <th>Created By</th>
                  <th>Show on Home</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {manageUsersLoan.map((loan, idx) => (
                  <tr key={loan._id}>
                    <th>{idx + 1}</th>

                    {/* Loan Image */}
                    <td className="md:table-cell max-w-[180px]">
                      <img
                        src={loan.image}
                        alt="loanImage"
                        className="w-14 h-14 object-cover hover:scale-200 duration-500 rounded-xl"
                      />
                    </td>

                    {/* Loan Title */}
                    <td className="max-w-[200px]">
                      <div className="flex flex-col">
                        <span className="font-medium">
                          {loan.loan_title}
                        </span>
                      </div>
                    </td>

                    {/* Interest Rate */}
                    <td className="whitespace-nowrap font-semibold">
                      {loan.interest_rate}
                    </td>

                    {/* Category */}
                    <td className="md:table-cell max-w-[180px] font-semibold">
                      {loan.category}
                    </td>

                    {/* Created By */}
                    <td className="md:table-cell max-w-[180px] truncate">
                      {loan.created_by}
                    </td>

                    {/* Show on Home */}
                    <td className="md:table-cell max-w-[180px] font-semibold">
                      {loan.show_on_home ? "Yes" : "No"}
                    </td>

                    {/* Actions */}
                    <td>
                      <div className="flex flex-wrap gap-2">
                        <div
                          className="tooltip before:bg-blue-400 before:text-white
    dark:before:bg-blue-400 dark:before:text-black"
                          data-tip="Update"
                        >
                          <Link
                            to={`/dashboard/update-loan/${loan._id}`}
                            className="btn btn-square btn-sm dark:bg-gray-800 hover:bg-[#4DA3FF]"
                          >
                            <FaRegEdit size={22} />
                          </Link>
                        </div>

                        <div
                          className="tooltip before:bg-red-400 before:text-white
    dark:before:bg-red-400 dark:before:text-black"
                          data-tip="Delete"
                        >
                          <button
                            onClick={() => handleDeleteLoan(loan._id)}
                            className="btn btn-square btn-sm dark:bg-gray-800 hover:bg-error"
                          >
                            <FaRegTrashCan size={22} />
                          </button>
                        </div>

                        <div
                          className="tooltip before:bg-yellow-400 before:text-black
                            dark:before:bg-yellow-400 dark:before:text-white"
                          data-tip="View"
                        >
                          <button
                            onClick={() => {
                              setSelectedLoan(loan);
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
            {/* //? Modal for view loan details */}
            <ViewLoanModalInManageLoans
            isOpen={isOpen}
            closeModal={closeModal}
            loan={selectedLoan}
            ></ViewLoanModalInManageLoans>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default AllLoan;
