import React from 'react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import MyContainer from '../../../components/Shared/MyContainer/MyContainer';
import { FaUserCog } from 'react-icons/fa';

const ManageUsers = () => {
  return (
    <MyContainer>
      <title>MicroLoan || Manage Users</title>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="lg:text-2xl text-xl font-bold text-center my-10">
            User Management System
          </h1>
          <p className="bg-[#4DA3FF] p-1 font-semibold text-sm rounded-lg">
            {/* {approvedApplication.length
              ? `Total User: ${approvedApplication.length}`
              : "No User Found"} */}
              No User Found
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
                {/* {approvedApplication.map((approved, idx) => ( */}
                  {/* <tr key={approved._id}> */}
                    {/* <th>{idx + 1}</th> */}

                    {/* Loan ID */}
                    <td className="md:table-cell max-w-[180px]">
                      {/* {approved.loan_id} */}
                    </td>

                    {/* Borrower Info */}
                    <td className="max-w-[200px]">
                      <div className="flex flex-col">
                        <span className="font-medium">
                          {/* {approved.borrower_name} */}
                        </span>
                        <span className="text-sm text-gray-500 break-all">
                          {/* {approved.borrower_email} */}
                        </span>
                      </div>
                    </td>

                    {/* Amount */}
                    <td className="whitespace-nowrap font-semibold">
                      {/* ৳{approved.loan_amount} */}
                    </td>

                    {/* Date */}
                    <td className="md:table-cell max-w-[180px]">
                      {/* {approved.created_at} */}
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
                            // onClick={() => {
                            //   setSelectedLoan(approved);
                            //   setIsOpen(true);
                            // }}
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
                            // onClick={() => {
                            //   setSelectedLoan(approved);
                            //   setIsOpen(true);
                            // }}
                            className="btn btn-square btn-sm dark:bg-gray-800 hover:bg-[#FFB703]"
                          >
                            <MdOutlineRemoveRedEye size={24} />
                          </button>
                        </div>
                      </div>
                    </td>
                  {/* </tr> */}
                {/* ))} */}
              </tbody>
            </table>
            {/* //? Approved loan details view with Modal */}
            {/* <ApprovedLoanViewModal
              isOpen={isOpen}
              closeModal={closeModal}
              approvedLoan={selectedLoan}
            ></ApprovedLoanViewModal> */}
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default ManageUsers;