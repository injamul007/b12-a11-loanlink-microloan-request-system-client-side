import React from "react";
import { motion } from "framer-motion";
import MyContainer from "../../Shared/MyContainer/MyContainer";

const stats = [
  { id: 1, label: "Loans Approved", value: "1,250+" },
  { id: 2, label: "Happy Customers", value: "3,500+" },
  { id: 3, label: "Total Amount Disbursed", value: "$5M+" },
];

const StatisticsSection = () => {
  return (
    <motion.section
      className="lg:py-18 py-16 bg-blue-50 dark:bg-[#1d232a]"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <MyContainer>
        <div className="px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Achievements</h2>
          <div className="flex justify-center gap-10 flex-wrap">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="p-6 bg-white dark:bg-[#292d35] rounded shadow w-40 hover:scale-105 duration-300"
              >
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </MyContainer>
    </motion.section>
  );
};

export default StatisticsSection;
