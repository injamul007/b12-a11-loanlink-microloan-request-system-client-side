import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SpinnerForDashboardRoute from "../../../components/Shared/SpinnerForDashboardRoute/SpinnerForDashboardRoute";
import DashboardErrorPage from "../DashboardErrorPage/DashboardErrorPage";
import MyContainer from "../../../components/Shared/MyContainer/MyContainer";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const LoanApplications = () => {
  const axiosInstance = useAxiosSecure();

  const {
    data: loanApplications = [],
    isLoading,
    isError,
    // refetch,
  } = useQuery({
    queryKey: ["loan-applications"],
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

  if (isLoading) return <SpinnerForDashboardRoute></SpinnerForDashboardRoute>;
  if (isError) return <DashboardErrorPage></DashboardErrorPage>;

  return (
    <MyContainer>
      <title>LoanLink || All Loan Application</title>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="lg:text-2xl text-xl font-bold text-center my-10">
            All Loan Applications
          </h1>
          <p className="bg-[#4DA3FF] p-1 text-sm font-semibold rounded-lg">
            {loanApplications.length
              ? `Showing: ${loanApplications.length} data`
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
                  <th>User Name and Email</th>
                  <th>Loan Category</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {loanApplications.map((application, idx) => (
                  <tr key={application._id}>
                    <th>{idx + 1}</th>

                    {/* Loan ID */}
                    <td className="md:table-cell max-w-[180px]">
                      {application.loan_id}
                    </td>

                    {/* Borrower Info */}
                    <td className="max-w-[200px]">
                      <div className="flex flex-col">
                        <span className="font-medium">
                          {application.borrower_name}
                        </span>
                        <span className="text-sm text-gray-500 break-all">
                          {application.borrower_email}
                        </span>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="whitespace-nowrap font-semibold">
                      {application.category} Category
                    </td>

                    {/* Amount */}
                    <td className="whitespace-nowrap font-semibold">
                      ৳{application.loan_amount}
                    </td>

                    {/* Status */}
                    <td className="md:table-cell max-w-[180px] font-semibold">
                      {application.status}
                    </td>

                    {/* Actions */}
                    <td>
                      <div className="flex flex-wrap gap-2">
                        <div
                          className="tooltip before:bg-[#4DA3FF] before:text-black
    dark:before:bg-[#4DA3FF] dark:before:text-white"
                          data-tip="View"
                        >
                          <button
                            // onClick={() => {
                            //   setSelectedLoan(application);
                            //   setIsOpen(true);
                            // }}
                            className="btn btn-square btn-sm dark:bg-gray-800 hover:bg-[#4DA3FF]"
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
            {/* loan application details by Modal */}
            {/* <PendingLoanViewModal
              isOpen={isOpen}
              closeModal={closeModal}
              application={selectedLoan}
            ></PendingLoanViewModal> */}
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default LoanApplications;
