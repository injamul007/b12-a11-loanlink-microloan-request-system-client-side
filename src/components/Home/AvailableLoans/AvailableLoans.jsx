import React from "react";
import { motion } from "framer-motion";
import MyContainer from "../../Shared/MyContainer/MyContainer";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BigLoadSpinnerWhite from "../../Shared/BigLoadSpinnerWhite/BigLoadSpinnerWhite";
import LoanCard from "../../Card/LoanCard";
import toast from "react-hot-toast";

const AvailableLoans = () => {
  const { data: availableLoans = [], isLoading } = useQuery({
    queryKey: ["available-loans"],
    queryFn: async () => {
      try {
        const result = await axios.get(
          `${import.meta.env.VITE_SERVER_API_URL_KEY}/available-loans`
        );
        return result.data.result;
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  if (isLoading) return <BigLoadSpinnerWhite />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <MyContainer className="lg:pt-34 pt-14 lg:pb-6 px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-text">Available Loans</h2>
          <p className="mt-6 text-md text-gray-500 font-semibold max-w-2xl mx-auto">
            {availableLoans.length
              ? `Explore our top ${availableLoans.length} Microloans`
              : "No data found"}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {availableLoans.map((loan) => (
            <LoanCard key={loan._id} loan={loan} />
          ))}
        </div>
      </MyContainer>
    </motion.div>
  );
};

export default AvailableLoans;
