import React from "react";
import { Link } from "react-router";
import MyContainer from "../../Shared/MyContainer/MyContainer";
import { motion } from "framer-motion";

const LoanEligibilitySection = () => {
  return (
    <motion.section
      className="lg:pt-18 md:pt-18 pt-12 lg:pb-18"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <MyContainer>
        <div className="px-6">
          <div className="text-center lg:mb-12 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-text">
              Loan Eligibility & Requirements
            </h2>
            <p className="mt-6 text-md text-gray-500 font-semibold max-w-2xl mx-auto">
              Check the common eligibility criteria and documents required
              before applying — this helps speed up approval.
            </p>
          </div> 

          <div className="grid gap-6 md:grid-cols-3">
            {/* Eligibility Criteria */}
            <div className="bg-white dark:bg-[#292d35] rounded-xl p-6 shadow-sm hover:scale-105 duration-200 transform-content">
              <h3 className="font-semibold text-lg mb-3">
                Eligibility (Common)
              </h3>
              <ul className="space-y-2 text-sm text-text/80 dark:text-gray-300">
                <li>• Age 18 or above</li>
                <li>• Valid National ID / Passport</li>
                <li>• Stable monthly income (varies by loan)</li>
                <li>• Active mobile number and email</li>
                <li>• Resident of Bangladesh</li>
              </ul>
            </div>

            {/* Required Documents */}
            <div className="bg-white dark:bg-[#292d35] rounded-xl p-6 shadow-sm hover:scale-105 duration-200 transform-content">
              <h3 className="font-semibold text-lg mb-3">Required Documents</h3>
              <ul className="space-y-2 text-sm text-text/80 dark:text-gray-300">
                <li>• National ID / Passport copy</li>
                <li>• Recent passport photo</li>
                <li>• Bank statement (last 3 months)</li>
                <li>• Proof of income / salary slip</li>
                <li>• Address proof (utility bill / NID)</li>
              </ul>
            </div>

            {/* Approval Indicator */}
            <div className="bg-white dark:bg-[#292d35] dark:text-gray-300 rounded-xl p-6 shadow-sm hover:scale-105 duration-200 transform-content">
              <h3 className="font-semibold text-lg mb-3">Approval Indicator</h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-text/80 dark:text-gray-300">
                    High Chance
                  </div>
                  <div className="badge badge-success text-white">
                    Recommended
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-text/80 dark:text-gray-300">
                    Medium Chance
                  </div>
                  <div className="badge badge-secondary dark:badge-primary">
                    Review
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-text/80 dark:text-gray-300">
                    Low Chance
                  </div>
                  <div className="badge badge-error text-white">Low</div>
                </div>

                <p className="mt-3 text-xs text-text/70 dark:text-gray-300">
                  Note: Eligibility and approval depend on submitted documents
                  and verification. Use the dashboard to track status.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button*/}
          <div className="mt-10 text-center">
            <Link
              to={"/all-loans"}
              className="cta_btn"
              aria-label="Start application"
            >
              View Available Loans
            </Link>
          </div>
        </div>
      </MyContainer>
    </motion.section>
  );
};

export default LoanEligibilitySection;
