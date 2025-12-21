import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import BigLoadSpinnerWhite from "../../components/Shared/BigLoadSpinnerWhite/BigLoadSpinnerWhite";
import ErrorPage from "../Error404Page/ErrorPage";
import MyContainer from "../../components/Shared/MyContainer/MyContainer";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const LoanDetails = () => {
  const { id } = useParams();
  const {user} = useAuth();
  const axiosInstance = useAxiosSecure()
  const navigate = useNavigate()
  const {role, isRoleLoading} = useRole();

  const {
    data: singleLoan = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["singleLoan", id],
    queryFn: async () => {
      try {
        const result = await axiosInstance.get(
          `/all-loans/${id}`
        );
        return result.data.result;
      } catch (error) {
        console.log(error.message);
        toast.error(error.message);
      }
    },
  });

  const {
    image,
    loan_title,
    description,
    category,
    interest_rate,
    max_loan_limit,
    emi_plans,
    required_documents,
    show_on_home
  } = singleLoan || {};

  
  const handleApplyNow = (loanData) => {
    const LoanInfoWithUserEmail = {
      userEmail: user?.email || "",
      loan_id: loanData?.loanId,
      loan_title: loanData?.loan_title,
      interest_rate: loanData?.interest_rate
    }
    
    navigate('/loan-application-form', {state:{LoanInfoWithUserEmail}})
  }
  
  if (isLoading) return <BigLoadSpinnerWhite></BigLoadSpinnerWhite>;
  if(isRoleLoading) return <BigLoadSpinnerWhite></BigLoadSpinnerWhite>
  if (isError) return <ErrorPage></ErrorPage>;


  return (
    <MyContainer className="lg:pt-14 pt-14 lg:pb-16 pb-10 px-6">
      <title>LoanLink || Loan Details</title>
      <div className="bg-white dark:bg-[#292d35] rounded-2xl shadow-xl overflow-hidden max-w-3xl mx-auto hover:shadow-lg hover:shadow-gray-600 dark:hover:shadow-lg dark:hover:shadow-white duration-700">
        {/* Image Section */}
        <div className="relative lg:h-[400px] md:h-84">
          <img
            src={image}
            alt={loan_title}
            className="w-full h-full object-cover"
          />
          <span className={`absolute top-4 left-4 font-semibold text-sm px-4 py-1 rounded-full shadow ${
              show_on_home
                ? "bg-primary text-white"
                : "bg-[#FFB703] text-gray-800"
            }`}>
            {category}
          </span>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              {loan_title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {description}
            </p>
          </div>

          {/* Loan Info Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-100 dark:bg-[#2a2c2e] rounded-xl">
              <p className="text-sm text-gray-500">Interest Rate</p>
              <p className="text-lg font-bold text-primary">
                {interest_rate}
              </p>
            </div>

            <div className="p-4 bg-gray-100 dark:bg-[#2a2c2e] rounded-xl">
              <p className="text-sm text-gray-500">Max Loan Limit</p>
              <p className="text-lg font-bold text-[#FFB703]">
                ৳{max_loan_limit}
              </p>
            </div>
          </div>

          {/* Documents */}
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
              Required Documents
            </h3>
            <div className="flex flex-wrap gap-2">{required_documents}</div>
          </div>

          {/* EMI Plans */}
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
              EMI Plans
            </h3>
            <div className="flex flex-wrap gap-2">{emi_plans}</div>
          </div>

          {/* Action Button */}
          {
            role === 'borrower' && <button
          onClick={()=>handleApplyNow(singleLoan)}
          className="w-full cta_btn inline-flex justify-center cursor-pointer">
            Apply Now
          </button>
          }
        </div>
      </div>
    </MyContainer>
  );
};

export default LoanDetails;
