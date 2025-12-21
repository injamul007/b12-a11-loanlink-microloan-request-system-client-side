import React from "react";
import MyContainer from "../../components/Shared/MyContainer/MyContainer";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axios from "axios";
import BigLoadSpinnerWhite from "../../components/Shared/BigLoadSpinnerWhite/BigLoadSpinnerWhite";
import ErrorPage from "../Error404Page/ErrorPage";
import LoanCard from "../../components/Card/LoanCard";

const AllLoans = () => {

  const {data: allLoans =[], isLoading, isError} = useQuery({
    queryKey: ['all-loans'],
    queryFn: async()=> {
      try {
        const result = await axios.get(`${import.meta.env.VITE_SERVER_API_URL_KEY}/all-loans`)
        return result.data.result;
      } catch (error) {
        console.log(error.message)
        toast.error(error.message)
      }
    }
  })

  if(isLoading) return <BigLoadSpinnerWhite></BigLoadSpinnerWhite>
  if(isError) return <ErrorPage></ErrorPage>

  return (
    <div>
      <MyContainer className="lg:pt-14 pt-14 lg:pb-16 pb-10 px-6">
        <title>LoanLink || All Loans</title>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-text">
            All Loans
          </h2>
          <p className="mt-6 text-md text-gray-500 font-semibold max-w-2xl mx-auto">
            Explore all our microloans
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {
            allLoans.map(loan => <LoanCard key={loan._id} loan={loan}></LoanCard>)
          }
        </div>
      </MyContainer>
    </div>
  );
};

export default AllLoans;
