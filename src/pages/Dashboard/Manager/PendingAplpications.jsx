import React from "react";
import MyContainer from "../../../components/Shared/MyContainer/MyContainer";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import DashboardErrorPage from "../DashboardErrorPage/DashboardErrorPage";
import { LuView } from "react-icons/lu";
import { GiCrossMark } from "react-icons/gi";
import { MdDoneOutline } from "react-icons/md";
import SpinnerForDashboardRoute from "../../../components/Shared/SpinnerForDashboardRoute/SpinnerForDashboardRoute";

const PendingApplications = () => {
  const axiosInstance = useAxiosSecure();

  const {
    data: pendingApplication = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["pending-application"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/pending-application");
        console.log(res.data.result);
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
      <title>MicroLoan || Pending Application</title>
      <div>
        <h1 className="text-3xl font-bold text-center my-10">
          All the Pending Loan Applications: {pendingApplication.length}
        </h1>

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
                    <td className="md:table-cell break-all max-w-[180px]">
                      {pending._id}
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
                    <td className="whitespace-nowrap font-semibold">৳{pending.loan_amount}</td>

                    {/* Date hidden on tablet & mobile */}
                    <td className="md:table-cell break-all max-w-[180px]">
                      {pending.created_at}
                    </td>

                    {/* Actions */}
                    <td>
                      <div className="flex flex-wrap gap-2">
                        <button
                          className="btn btn-square btn-sm dark:bg-gray-800 hover:bg-[#4DA3FF]"
                          title="Approve"
                        >
                          <MdDoneOutline size={18} />
                        </button>

                        <button
                          className="btn btn-square btn-sm dark:bg-gray-800 hover:bg-error"
                          title="Reject"
                        >
                          <GiCrossMark size={18} />
                        </button>

                        <button
                          className="btn btn-square btn-sm dark:bg-gray-800 hover:bg-[#FFB703]"
                          title="View"
                        >
                          <LuView size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default PendingApplications;
