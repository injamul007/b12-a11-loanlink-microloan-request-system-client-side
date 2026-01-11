import React, { useState } from "react";
import MyContainer from "../../components/Shared/MyContainer/MyContainer";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axios from "axios";
import BigLoadSpinnerWhite from "../../components/Shared/BigLoadSpinnerWhite/BigLoadSpinnerWhite";
import ErrorPage from "../Error404Page/ErrorPage";
import LoanCard from "../../components/Card/LoanCard";

const AllLoans = () => {
  const [page, setPage] = useState(1);
  const limit = 10;
  const [category, setCategory] = useState("");
  const [minLoanLimit, setMinLoanLimit] = useState('');
  const [maxLoanLimit, setMaxLoanLimit] = useState('');

  const { data, isLoading, isError } = useQuery({
    queryKey: ["all-loans", page, category, minLoanLimit , maxLoanLimit],
    queryFn: async () => {
      try {
        const res = await axios.get(
          `${
            import.meta.env.VITE_SERVER_API_URL_KEY
          }/all-loans?page=${page}&limit=${limit}&category=${category}&minLoanLimit=${minLoanLimit}&maxLoanLimit=${maxLoanLimit}`
        );
        return res.data;
      } catch (error) {
        console.log(error.message);
        toast.error(error.message);
      }
    },
  });

  // if (isLoading) return <BigLoadSpinnerWhite></BigLoadSpinnerWhite>;
  if (isError) return <ErrorPage></ErrorPage>;

  const allLoans = data?.result || [];
  const totalPages = data?.totalPages || 0;
  const total = data?.total || 0;

  const handleCategoryFilter = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };

  const handleLoanLimitFilter = (e) => {
    const value = e.target.value;
    if (!value) {
      setMinLoanLimit("");
      setMaxLoanLimit("");
    } else {
      const {min, max} = JSON.parse(value);
      setMinLoanLimit(min);
      setMaxLoanLimit(max);
    }
    setPage(1);
  };

  return (
    <div>
      <MyContainer className="lg:pt-14 pt-14 lg:pb-16 pb-10 px-6">
        <title>LoanLink || All Loans</title>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-text">
            All Loans
          </h2>
          <p className="mt-6 text-md text-gray-600 dark:text-gray-300 font-semibold max-w-2xl mx-auto">
            Explore all our microloans <span>(Loan Found {total})</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-14 dark:text-gray-300 text-gray-600 font-semibold">
          <div>
            <select onChange={handleCategoryFilter} className="select">
              <option value={""}>Filter by Category</option>
              <option value={"beginner"}>Beginner</option>
              <option value={"emergency"}>Emergency</option>
              <option value={"business"}>Business</option>
              <option value={"freelancer"}>Freelancer</option>
              <option value={"education"}>Education</option>
              <option value={"women"}>Women</option>
              <option value={"agriculture"}>Agriculture</option>
              <option value={"health"}>Health</option>
              <option value={"personal"}>Personal</option>
              <option value={"worker"}>Worker</option>
              <option value={"startup"}>Startup</option>
              <option value={"housing"}>Housing</option>
              <option value={"online"}>Online</option>
              <option value={"vendor"}>Vendor</option>
            </select>
          </div>
          <div>
            <select onChange={handleLoanLimitFilter} className="select">
              <option value="">Filter By Loan Limit</option>
              <option value={JSON.stringify({ min: 0, max: 3000 })}>Under ৳3000</option>
              <option value={JSON.stringify({ min: 3000, max: 8000 })}>৳3000 - ৳8000</option>
              <option value={JSON.stringify({ min: 8000, max: 12000 })}>৳8000 - ৳12000</option>
              <option value={JSON.stringify({ min: 12000, max: 16000 })}>৳12000 - ৳16000</option>
              <option value={JSON.stringify({ min: 16000, max: 20000 })}>৳16000 - ৳20000</option>
              <option value={JSON.stringify({ min: 20000, max: 25000 })}>৳20000 - ৳25000</option>
              <option value={JSON.stringify({ min: 25000, max: 30000 })}>৳25000 - ৳30000</option>
              <option value={JSON.stringify({ min: 30000, max: 35000 })}>৳30000 - ৳35000</option>
              <option value={JSON.stringify({ min: 35000, max: 99999 })}>৳35000+</option>
            </select>
          </div>
          <div>Search</div>
          <div>Sort</div>
        </div>

        {isLoading ? (
          <BigLoadSpinnerWhite></BigLoadSpinnerWhite>
        ) : (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
            {allLoans.map((loan) => (
              <LoanCard key={loan._id} loan={loan}></LoanCard>
            ))}
          </div>
        )}

        <div className="flex justify-center gap-2 mt-10">
          {page > 1 && (
            <button
              onClick={() => setPage(page - 1)}
              className="btn bg-gray-200 hover:bg-[#4DA3FF] dark:bg-gray-600 dark:text-white "
            >
              Prev
            </button>
          )}
          {[...Array(totalPages).keys()].map((num) => (
            <button
              key={num}
              onClick={() => setPage(num + 1)}
              className={`px-4 py-2 rounded font-semibold cursor-pointer hover:bg-[#4DA3FF] duration-200
              ${
                page === num + 1
                  ? "bg-primary text-white"
                  : "bg-gray-200 dark:bg-gray-600 dark:text-white"
              } `}
            >
              {num + 1}
            </button>
          ))}
          {page < totalPages && (
            <button
              onClick={() => setPage(page + 1)}
              className="btn bg-gray-200 hover:bg-[#4DA3FF] dark:bg-gray-600 dark:text-white"
            >
              Next
            </button>
          )}
        </div>
      </MyContainer>
    </div>
  );
};

export default AllLoans;
