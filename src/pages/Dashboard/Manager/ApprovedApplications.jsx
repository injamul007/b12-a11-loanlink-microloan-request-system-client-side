import React, { useState } from "react";
import MyContainer from "../../../components/Shared/MyContainer/MyContainer";
import { LuView } from "react-icons/lu";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import DashboardErrorPage from "../DashboardErrorPage/DashboardErrorPage";
import SpinnerForDashboardRoute from "../../../components/Shared/SpinnerForDashboardRoute/SpinnerForDashboardRoute";
import ApprovedLoanViewModal from "../../../components/Modal/ApprovedLoanViewModal";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const ApprovedApplications = () => {
  const axiosInstance = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState(null);

  const closeModal = () => {
    setSelectedLoan(null);
    setIsOpen(false);
  };

  const {
    data: approvedApplication = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["approved-application"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/approved-application");
        return res.data.result;
      } catch (error) {
        console.log(error.message);
        toast.error(error.message);
      }
    },
  });

  if (isLoading) return <SpinnerForDashboardRoute></SpinnerForDashboardRoute>;
  if (isError) return <DashboardErrorPage></DashboardErrorPage>;

  return (
    <MyContainer>
      <title>LoanLink || Approved Application</title>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="lg:text-2xl text-xl font-bold text-center my-10">
            Approved Loan Applications
          </h1>
          <p className="bg-[#4DA3FF] p-1 font-semibold text-sm rounded-lg">
            {approvedApplication.length
              ? `Showing: ${approvedApplication.length} data`
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
                  <th>Approved Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {approvedApplication.map((approved, idx) => (
                  <tr key={approved._id}>
                    <th>{idx + 1}</th>

                    {/* Loan ID */}
                    <td className="md:table-cell max-w-[180px]">
                      {approved.loan_id}
                    </td>

                    {/* Borrower Info */}
                    <td className="max-w-[200px]">
                      <div className="flex flex-col">
                        <span className="font-medium">
                          {approved.borrower_name}
                        </span>
                        <span className="text-sm text-gray-500 break-all">
                          {approved.borrower_email}
                        </span>
                      </div>
                    </td>

                    {/* Amount */}
                    <td className="whitespace-nowrap font-semibold">
                      ৳{approved.loan_amount}
                    </td>

                    {/* Date */}
                    <td className="md:table-cell max-w-[180px]">
                      {approved.created_at}
                    </td>

                    {/* Actions */}
                    <td>
                      <div className="flex flex-wrap gap-2">
                        <div
                          className="tooltip before:bg-blue-400 before:text-black
    dark:before:bg-blue-400 dark:before:text-white"
                          data-tip="View"
                        >
                          <button
                            onClick={() => {
                              setSelectedLoan(approved);
                              setIsOpen(true);
                            }}
                            className="btn btn-square btn-sm dark:bg-gray-800 hover:bg-[#4DA3FF]"
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
            {/* //? Approved loan details view with Modal */}
            <ApprovedLoanViewModal
              isOpen={isOpen}
              closeModal={closeModal}
              approvedLoan={selectedLoan}
            ></ApprovedLoanViewModal>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default ApprovedApplications;
