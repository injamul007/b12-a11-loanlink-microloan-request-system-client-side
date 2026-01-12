import React from "react";
import { motion } from "framer-motion";
import MyContainer from "../../Shared/MyContainer/MyContainer";

const loanCategories = [
  {
    id: 1,
    title: "Personal Loan",
    description:
      "Flexible loans for personal expenses, travel, or emergencies.",
  },
  {
    id: 2,
    title: "Business Loan",
    description: "Funding solutions to grow, manage, or expand your business.",
  },
  {
    id: 3,
    title: "Education Loan",
    description:
      "Financial support for higher education, courses, and training.",
  },
  {
    id: 4,
    title: "Starter Loan",
    description: "Small loans designed for first-time borrowers and beginners.",
  },
  {
    id: 5,
    title: "Emergency Loan",
    description:
      "Quick-access loans for urgent and unexpected financial needs.",
  },
  {
    id: 6,
    title: "SME Loan",
    description:
      "Tailored loan options for small and medium-sized enterprises.",
  },
];

const LoanCategoriesSection = () => {
  return (
    <motion.section
      className="py-20"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <MyContainer>
        <div className="px-6 text-center">
          <div className="text-center lg:mb-12 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Loan Categories</h2>
            <p className="mt-6 text-md text-gray-500 font-semibold max-w-2xl mx-auto">
              Explore a variety of loan options designed to meet different
              financial needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {loanCategories.map((loan) => (
              <div
                key={loan.id}
                className="p-6 bg-white dark:bg-[#292d35] rounded-lg shadow-sm hover:shadow-md transition hover:scale-105 duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{loan.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{loan.description}</p>
              </div>
            ))}
          </div>
        </div>
      </MyContainer>
    </motion.section>
  );
};

export default LoanCategoriesSection;
