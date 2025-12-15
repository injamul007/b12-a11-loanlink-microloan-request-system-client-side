import React from "react";
import { GiCancel, GiCrossMark, GiPayMoney } from "react-icons/gi";
import { LuView } from "react-icons/lu";
import MyContainer from "../../../components/Shared/MyContainer/MyContainer";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import BigLoadSpinner from "../../../components/Shared/BigLoadSpinner/BigLoadSpinner";
import DashboardErrorPage from "../DashboardErrorPage/DashboardErrorPage";

const MyLoans = () => {
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();

  const {
    data: myLoans = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["my-loans", user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/my-loans`);
      return res.data.result;
    },
  });

  if (isLoading) return <BigLoadSpinner></BigLoadSpinner>;
  if (isError) return <DashboardErrorPage></DashboardErrorPage>;

  return (
    <MyContainer>
      <title>MicroLoan || MyLoans</title>
      <div>
        <h1 className="text-3xl font-bold text-center my-10">
          All My Loan Applications: {myLoans.length}
        </h1>

        <div>
          <div className="w-full overflow-x-auto rounded-box border border-base-content/5 bg-base-200 mb-8 shadow-lg dark:shadow-sm dark:shadow-gray-600">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Loan ID</th>
                  <th>Loan Info</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {myLoans.map((loan, idx) => (
                  <tr key={loan._id}>
                    <th>{idx + 1}</th>

                    {/* Loan ID */}
                    <td className="md:table-cell break-all max-w-[180px]">
                      {loan._id}
                    </td>

                    {/* Borrower Info */}
                    <td className="max-w-[200px]">
                      <div className="flex flex-col">
                        <span className="font-medium">
                          {loan.loan_title}
                        </span>
                        <span className="text-sm text-gray-500 break-all">
                          {loan.interest_rate}
                        </span>
                      </div>
                    </td>

                    {/* Amount */}
                    <td className="whitespace-nowrap">৳{loan.loan_amount}</td>

                    {/* Date hidden on tablet & mobile */}
                    <td className="lg:table-cell whitespace-nowrap">
                      {loan.status}
                    </td>

                    {/* Actions */}
                    <td>
                      <div className="flex flex-wrap gap-2">
                        <button
                          className="btn btn-square btn-sm dark:bg-gray-800 hover:bg-[#4DA3FF]"
                          title="View"
                        >
                        <LuView size={22} />
                        </button>

                        <button
                          className="btn btn-square btn-sm dark:bg-gray-800 hover:bg-error"
                          title="Cancel"
                        >
                          <GiCrossMark size={22} />
                        </button>

                        <button
                          className="btn btn-square btn-sm dark:bg-gray-800 hover:bg-[#FFB703]"
                          title="Pay"
                        >
                          <GiPayMoney size={22} />
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

export default MyLoans;
