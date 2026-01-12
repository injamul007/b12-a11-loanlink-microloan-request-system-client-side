import React from "react";
import { motion } from "framer-motion";
import MyContainer from "../../Shared/MyContainer/MyContainer";

const features = [
  {
    id: 1,
    title: "Fast Approval Process",
    description:
      "Get loan decisions within 24–48 hours with a streamlined approval workflow.",
  },
  {
    id: 2,
    title: "Secure & Transparent",
    description:
      "Your data is protected and all loan terms are clearly explained upfront.",
  },
  {
    id: 3,
    title: "Flexible Loan Options",
    description:
      "Choose loan amounts and repayment plans that fit your financial needs.",
  },
  {
    id: 4,
    title: "Real-Time Tracking",
    description:
      "Track your loan status from application to approval in real time.",
  },
];

const WhyChooseLoanLink = () => {
  return (
    <motion.section
      className="pt-24"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <MyContainer>
        <div className="px-6">
          {/* Section Header */}
          <div className="text-center lg:mb-12 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              Why Choose LoanLink?
            </h2>
            <p className="mt-6 text-md text-gray-500 font-semibold max-w-2xl mx-auto">
              We simplify the loan process with transparency, speed, and
              reliability.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="p-6 border rounded-xl hover:shadow-md transition bg-white dark:bg-[#292d35] hover:scale-105 duration-300"
              >
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </MyContainer>
    </motion.section>
  );
};

export default WhyChooseLoanLink;
