import React from "react";
import { motion } from "framer-motion";

const SkeletonCard = () => {
  return (
    <motion.div
      className="border border-gray-200 dark:border-gray-700 p-4 rounded-md shadow animate-pulse bg-gray-200 dark:bg-gray-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-600 rounded mb-3"></div>
      <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
      <div className="h-3 w-full bg-gray-300 dark:bg-gray-600 rounded"></div>
      <div className="h-3 w-5/6 bg-gray-300 dark:bg-gray-600 rounded mt-2"></div>
    </motion.div>
  );
};

const LoanSkeleton = ({ count = 8 }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mb-16">
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default LoanSkeleton;