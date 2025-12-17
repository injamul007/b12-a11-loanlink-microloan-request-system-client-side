import React, { useState } from "react";
import { GiCrossMark } from "react-icons/gi";
import { LuView } from "react-icons/lu";
import MyContainer from "../../../components/Shared/MyContainer/MyContainer";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import DashboardErrorPage from "../DashboardErrorPage/DashboardErrorPage";
import SpinnerForDashboardRoute from "../../../components/Shared/SpinnerForDashboardRoute/SpinnerForDashboardRoute";
import toast from "react-hot-toast";
import paymentIcon from "../../../assets/payment_icon.png";
import Swal from "sweetalert2";
import MyLoanViewModal from "../../../components/Modal/MyLoanViewModal";

const MyLoans = () => {
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();
  const [selectedLoan, setSelectedLoan] = useState(null);
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    setSelectedLoan(null);
  };

  const {
    data: myLoans = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["my-loans", user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/my-loans`);
      return res.data.result;
    },
  });

  const handleCancelPending = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure to remove it?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Remove it!",
        customClass: {
          popup: "confirmation-swal-popup",
        },
      });

      if (result.isConfirmed) {
        const res = await axiosInstance.delete(`/my-loans/canceled/${id}`);
        if (res.data.result?.deletedCount) {
          toast.success("Pending Loan Application Removed");
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
      <title>MicroLoan || MyLoans</title>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-center my-10">
            All My Loan Applications
          </h1>
          <p className="bg-[#4DA3FF] p-1 text-sm font-semibold rounded-lg">
            {
              myLoans.length ? `Showing: <span>${myLoans.length}</span>` : 'No Data Found'
            }
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
                    <td className="md:table-cell max-w-[180px]">
                      {loan.loan_id}
                    </td>

                    {/* Loan Info */}
                    <td className="max-w-[200px]">
                      <div className="flex flex-col">
                        <span className="font-medium">{loan.loan_title}</span>
                        <span className="text-sm text-gray-500 break-all">
                          {loan.interest_rate}
                        </span>
                      </div>
                    </td>

                    {/* Amount */}
                    <td className="whitespace-nowrap">৳{loan.loan_amount}</td>

                    {/* Status */}
                    <td
                      className={`lg:table-cell whitespace-nowrap font-semibold ${
                        loan.status === "approved"
                          ? "text-success"
                          : loan.status === "rejected"
                          ? "text-error"
                          : "text-[#FFB703]"
                      }`}
                    >
                      {loan.status}
                    </td>

                    {/* Actions */}
                    <td>
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => {
                            setSelectedLoan(loan);
                            setIsOpen(true);
                          }}
                          className="btn btn-square btn-sm dark:bg-gray-800 hover:bg-[#4DA3FF]"
                          title="View"
                        >
                          <LuView size={22} />
                        </button>

                        {loan.status === "pending" && (
                          <button
                            onClick={() => handleCancelPending(loan._id)}
                            className="btn btn-square btn-sm dark:bg-gray-800 hover:bg-error"
                            title="Remove"
                          >
                            <GiCrossMark size={22} />
                          </button>
                        )}

                        <button
                          className="btn btn-square btn-sm dark:bg-gray-800 hover:bg-[#FFB703]"
                          title="Pay"
                        >
                          <img src={paymentIcon} alt="paymentIcon" className="dark:invert" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* //? My Loan View Modal */}
            <MyLoanViewModal
              isOpen={isOpen}
              closeModal={closeModal}
              loan={selectedLoan}
            ></MyLoanViewModal>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default MyLoans;
