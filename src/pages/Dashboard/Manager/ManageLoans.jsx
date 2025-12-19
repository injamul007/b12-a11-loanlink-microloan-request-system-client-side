import React from "react";
import MyContainer from "../../../components/Shared/MyContainer/MyContainer";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import SpinnerForDashboardRoute from "../../../components/Shared/SpinnerForDashboardRoute/SpinnerForDashboardRoute";
import DashboardErrorPage from "../DashboardErrorPage/DashboardErrorPage";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const ManageLoans = () => {
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();

  const {
    data: manageLoans = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["manage-loans", user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/manage-loans`);
      return res.data.result;
    },
  });

  const handleDeleteLoan = async(id) => {
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
        const res = await axiosInstance.delete(
          `/manage-loans/deleted/${id}`
        );
        if (res.data.result.deletedCount) {
          toast.success("Loan Deleted Successful");
          refetch();
        }
      }
    } catch (error) {
      console.log(error.message)
      toast.error(error.message)
    }
  }

  if (isLoading) return <SpinnerForDashboardRoute></SpinnerForDashboardRoute>;
  if (isError) return <DashboardErrorPage></DashboardErrorPage>;

  return (
    <MyContainer>
      <title>MicroLoan || Manage Loans</title>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-center my-10">
            Loans Added by Manager
          </h1>
          <p className="bg-[#4DA3FF] p-1 text-sm font-semibold rounded-lg">
            {manageLoans.length
              ? `Showing: ${manageLoans.length} data`
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
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {manageLoans.map((manageLoan, idx) => (
                  <tr key={manageLoan._id}>
                    <th>{idx + 1}</th>

                    {/* Loan Image */}
                    <td className="md:table-cell max-w-[180px]">
                      <img
                        src={manageLoan.image}
                        alt="loanImage"
                        className="w-14 h-14 object-cover hover:scale-200 duration-500 rounded-xl"
                      />
                    </td>

                    {/* Loan Title */}
                    <td className="max-w-[200px]">
                      <div className="flex flex-col">
                        <span className="font-medium">
                          {manageLoan.loan_title}
                        </span>
                      </div>
                    </td>

                    {/* Interest Rate */}
                    <td className="whitespace-nowrap font-semibold">
                      {manageLoan.interest_rate}
                    </td>

                    {/* Date */}
                    <td className="md:table-cell max-w-[180px] font-semibold">
                      {manageLoan.category}
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
                            to={`/dashboard/update-loan/${manageLoan._id}`}
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
                          onClick={()=> handleDeleteLoan(manageLoan._id)}
                          className="btn btn-square btn-sm dark:bg-gray-800 hover:bg-error">
                            <FaRegTrashCan size={22} />
                          </button>
                        </div>
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

export default ManageLoans;
