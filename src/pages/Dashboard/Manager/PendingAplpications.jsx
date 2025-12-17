import React, { useState } from "react";
import MyContainer from "../../../components/Shared/MyContainer/MyContainer";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import DashboardErrorPage from "../DashboardErrorPage/DashboardErrorPage";
import { LuView } from "react-icons/lu";
import { GiCrossMark } from "react-icons/gi";
import { MdDoneOutline, MdOutlineRemoveRedEye } from "react-icons/md";
import SpinnerForDashboardRoute from "../../../components/Shared/SpinnerForDashboardRoute/SpinnerForDashboardRoute";
import Swal from "sweetalert2";
import PendingLoanViewModal from "../../../components/Modal/PendingLoanViewModal";

const PendingApplications = () => {
  const axiosInstance = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState(null);

  const closeModal = () => {
    setSelectedLoan(null);
    setIsOpen(false);
  };

  const {
    data: pendingApplication = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["pending-application"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/pending-application");
        return res.data.result;
      } catch (error) {
        console.log(error.message);
        toast.error(error.message);
      }
    },
  });

  const handleApproved = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure to Approve?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Approve it!",
        customClass: {
          popup: "confirmation-swal-popup",
        },
      });

      if (result.isConfirmed) {
        const res = await axiosInstance.patch(
          `/pending-application/approved/${id}`
        );
        if (res.data.result.modifiedCount) {
          toast.success("Application Approved");
          refetch();
        }
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const handleRejected = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure to Reject?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Reject it!",
        customClass: {
          popup: "confirmation-swal-popup",
        },
      });

      if (result.isConfirmed) {
        const res = await axiosInstance.patch(
          `/pending-application/rejected/${id}`
        );
        if (res.data.result.modifiedCount) {
          toast.success("Application Rejected");
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
      <title>MicroLoan || Pending Application</title>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-center my-10">
            All the Pending Loan Applications
          </h1>
          <p className="bg-[#4DA3FF] p-1 text-sm font-semibold rounded-lg">
            {pendingApplication.length
              ? `Showing: ${pendingApplication.length} data`
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
                  <th>Loan ID</th>
                  <th>Borrower Name and Email</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingApplication.map((pending, idx) => (
                  <tr key={pending._id}>
                    <th>{idx + 1}</th>

                    {/* Loan ID */}
                    <td className="md:table-cell max-w-[180px]">
                      {pending.loan_id}
                    </td>

                    {/* Borrower Info */}
                    <td className="max-w-[200px]">
                      <div className="flex flex-col">
                        <span className="font-medium">
                          {pending.borrower_name}
                        </span>
                        <span className="text-sm text-gray-500 break-all">
                          {pending.borrower_email}
                        </span>
                      </div>
                    </td>

                    {/* Amount */}
                    <td className="whitespace-nowrap font-semibold">
                      ৳{pending.loan_amount}
                    </td>

                    {/* Date */}
                    <td className="md:table-cell max-w-[180px]">
                      {pending.created_at}
                    </td>

                    {/* Actions */}
                    <td>
                      <div className="flex flex-wrap gap-2">
                        <div
                          className="tooltip before:bg-blue-400 before:text-black
    dark:before:bg-blue-400 dark:before:text-white"
                          data-tip="Approve"
                        >
                          <button
                            onClick={() => handleApproved(pending._id)}
                            className="btn btn-square btn-sm dark:bg-gray-800 hover:bg-[#4DA3FF]"
                          >
                            <MdDoneOutline size={22} />
                          </button>
                        </div>

                        <div
                          className="tooltip before:bg-red-400 before:text-black
    dark:before:bg-red-400 dark:before:text-white"
                          data-tip="Reject"
                        >
                          <button
                            onClick={() => handleRejected(pending._id)}
                            className="btn btn-square btn-sm dark:bg-gray-800 hover:bg-error"
                          >
                            <GiCrossMark size={22} />
                          </button>
                        </div>

                        <div
                          className="tooltip before:bg-yellow-400 before:text-black
    dark:before:bg-yellow-400 dark:before:text-white"
                          data-tip="View"
                        >
                          <button
                            onClick={() => {
                              setSelectedLoan(pending);
                              setIsOpen(true);
                            }}
                            className="btn btn-square btn-sm dark:bg-gray-800 hover:bg-[#FFB703]"
                            title="View"
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
            {/* Pending loan application details by Modal */}
            <PendingLoanViewModal
              isOpen={isOpen}
              closeModal={closeModal}
              pendingLoan={selectedLoan}
            ></PendingLoanViewModal>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default PendingApplications;
