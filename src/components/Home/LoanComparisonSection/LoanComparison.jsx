import React from "react";
import MyContainer from "../../Shared/MyContainer/MyContainer";

function Row({ loanType, maxAmount, interest, time, eligibility, tag }) {
  return (
    <tr className="hover:bg-base-200 dark:hover:bg-[#191c22]">
      <td className="px-4 py-3 font-medium">{loanType}</td>
      <td className="px-4 py-3">৳{maxAmount.toLocaleString()}</td>
      <td className="px-4 py-3">{interest}</td>
      <td className="px-4 py-3">{time}</td>
      <td className="px-4 py-3">{eligibility}</td>
      <td className="px-4 py-3">
        {tag && <span className="badge outline lg:py-2 py-6  lg:text-md text-sm">{tag}</span>}
      </td>
    </tr>
  );
}

const LoanComparison = () => {
  return (
    <section className="py-20">
      <MyContainer>
        <div className="px-6">
          <div className="text-center lg:mb-12 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Compare Loan Plans
              </h2>
              <p className="mt-6 text-md text-gray-500 font-semibold max-w-2xl mx-auto">
                Compare limits, interest rates and processing time — choose the
                loan that fits your need.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto bg-white dark:bg-[#292d35] rounded-xl shadow-sm">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left">Loan Type</th>
                  <th className="px-4 py-3">Max Amount</th>
                  <th className="px-4 py-3">Interest</th>
                  <th className="px-4 py-3">Processing Time</th>
                  <th className="px-4 py-3">Eligibility</th>
                  <th className="px-4 py-3">Best For</th>
                </tr>
              </thead>

              <tbody>
                <Row
                  loanType="Starter Loan"
                  maxAmount={10000}
                  interest="5% p.a."
                  time="24 hours"
                  eligibility="Basic documents"
                  tag="Beginner"
                />
                <Row
                  loanType="Emergency Loan"
                  maxAmount={8000}
                  interest="6.5% p.a."
                  time="30 minutes"
                  eligibility="NID only"
                  tag="Fast Approval"
                />
                <Row
                  loanType="Small Business Loan"
                  maxAmount={30000}
                  interest="8% p.a."
                  time="48 hours"
                  eligibility="Business docs"
                  tag="High Limit"
                />
                <Row
                  loanType="Micro Loan (Freelancer)"
                  maxAmount={5000}
                  interest="4.5% p.a."
                  time="24 hours"
                  eligibility="Bank txn proof"
                  tag="Freelancers"
                />
                <Row
                  loanType="Student Loan"
                  maxAmount={3000}
                  interest="4.0% p.a."
                  time="48 hours"
                  eligibility="Student ID + NID"
                  tag="Students"
                />
              </tbody>
            </table>
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default LoanComparison;
