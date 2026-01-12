import React, { useEffect, useState } from "react";
import MyContainer from "../../components/Shared/MyContainer/MyContainer";
import {  useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axios from "axios";
// import BigLoadSpinnerWhite from "../../components/Shared/BigLoadSpinnerWhite/BigLoadSpinnerWhite";
import ErrorPage from "../Error404Page/ErrorPage";
import LoanCard from "../../components/Card/LoanCard";
import { IoSearchOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import LoanSkeleton from "../../components/Shared/LoanSkeleton/LoanSkeleton";

const AllLoans = () => {
  const [page, setPage] = useState(1);
  const limit = 10;
  const [category, setCategory] = useState("");
  const [minLoanLimit, setMinLoanLimit] = useState("");
  const [maxLoanLimit, setMaxLoanLimit] = useState("");
  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [sort, setSort] = useState("created_at");
  const [order, setOrder] = useState("desc");

  //? Debounce Effect
  useEffect(() => {
    const searchTimer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 500);
    return () => clearTimeout(searchTimer);
  }, [searchText]);

  const { data, isFetching, isError } = useQuery({
    queryKey: [
      "all-loans",
      page,
      category,
      minLoanLimit,
      maxLoanLimit,
      debouncedSearch,
      sort,
      order,
    ],
    queryFn: async () => {
      try {
        const res = await axios.get(
          `${
            import.meta.env.VITE_SERVER_API_URL_KEY
          }/all-loans?page=${page}&limit=${limit}&category=${category}&minLoanLimit=${minLoanLimit}&maxLoanLimit=${maxLoanLimit}&search=${debouncedSearch}&sort=${sort}&order=${order}`
        );
        return res.data;
      } catch (error) {
        console.log(error.message);
        toast.error(error.message);
        toast.error(error.response?.data?.message || error.message);
        throw error;
      }
    },
  });


  if (isError) return <ErrorPage></ErrorPage>;

  const allLoans = data?.result ?? [];
  const totalPages = data?.totalPages ?? 0;
  const total = data?.total ?? 0;

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
      const { min, max } = JSON.parse(value);
      setMinLoanLimit(min);
      setMaxLoanLimit(max);
    }
    setPage(1);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    setPage(1);
  };

  const handleSorting = (e) => {
    const value = e.target.value;
    if (!value) return;

    const [sortField, sortOrder] = value.split("-");

    setSort(sortField);
    setOrder(sortOrder);
    setPage(1);
  };

  // motion variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
            Explore all our microloans (
            <span className="text-[#4DA3FF] font-bold">Loan Found {total}</span>
            )
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
              <option value={JSON.stringify({ min: 0, max: 3000 })}>
                Under ৳3000
              </option>
              <option value={JSON.stringify({ min: 3000, max: 8000 })}>
                ৳3000 - ৳8000
              </option>
              <option value={JSON.stringify({ min: 8000, max: 12000 })}>
                ৳8000 - ৳12000
              </option>
              <option value={JSON.stringify({ min: 12000, max: 16000 })}>
                ৳12000 - ৳16000
              </option>
              <option value={JSON.stringify({ min: 16000, max: 20000 })}>
                ৳16000 - ৳20000
              </option>
              <option value={JSON.stringify({ min: 20000, max: 25000 })}>
                ৳20000 - ৳25000
              </option>
              <option value={JSON.stringify({ min: 25000, max: 30000 })}>
                ৳25000 - ৳30000
              </option>
              <option value={JSON.stringify({ min: 30000, max: 35000 })}>
                ৳30000 - ৳35000
              </option>
              <option value={JSON.stringify({ min: 35000, max: 99999 })}>
                ৳35000+
              </option>
            </select>
          </div>
          <div>
            <label className="input">
              <IoSearchOutline size={20} />
              <input
                onChange={handleSearch}
                type="search"
                className="grow"
                placeholder="Search by Loan Title"
              />
            </label>
          </div>
          <div>
            <select
              value={`${sort}-${order}`}
              onChange={handleSorting}
              className="select"
            >
              <option value="" disabled>
                Sort by
              </option>

              <option value="created_at-desc">Loan → New - Old</option>
              <option value="created_at-asc">Loan → Old - New</option>

              <option value="max_loan_limit-asc">Max Loan Limit → Low - High</option>
              <option value="max_loan_limit-desc">Max Loan Limit → High - Low</option>

              <option value="interest_rate-asc">Interest Rate → Low - High</option>
              <option value="interest_rate-desc">Interest Rate → High - Low</option>
            </select>
          </div>
        </div>

        {/* Sub loading on sorting */}
        {isFetching && (
          <p className="text-center text-sm text-gray-400 mb-4">
            Updating loan data...
          </p>
        )}

        {isFetching ? (
          // <BigLoadSpinnerWhite></BigLoadSpinnerWhite>
          <LoanSkeleton count={8}></LoanSkeleton>
        ) : allLoans.length === 0 &&
          (category || minLoanLimit || maxLoanLimit || searchText) ? (
          <div className="text-center text-gray-500 my-20">
            <h3 className="text-2xl font-semibold">No Loan found 😕</h3>
            <p className="mt-2">
              Try searching or filtering with a different value
            </p>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mb-16">
              {allLoans.map((loan) => (
                <motion.div key={loan._id} variants={fadeUp}>
                  <LoanCard loan={loan}></LoanCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
