import React from "react";
import MyContainer from "../../Shared/MyContainer/MyContainer";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router";
import loanOptionImg from "../../../assets/loan_options_img.png"
import quickApplicationImg from "../../../assets/quick_complete_img.png"
import secureLoanImg from "../../../assets/secure_verification_img.png"
import fastPaymentImg from "../../../assets/fast_payment_img.png"
import repaymentImg from "../../../assets/repayment_img.png"

const Step = ({ number, title, text, img }) => (
  <div className="flex gap-2 items-start">
    <div className="shrink-0">
      <div className="w-6 h-6 rounded-lg bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center">
        <div className="text-primary font-bold">{number}</div>
      </div>
    </div>

    <div>
      <img className="w-30 dark:bg-gray-900 rounded-2xl" src={img} alt="howItWorksImages" />
      <h4 className="mt-2 text-lg font-bold text-text">{title}</h4>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 font-semibold">{text}</p>
    </div>
  </div>
);

export default function HowItWorks() {
  return (
    <section className="py-36">
      <MyContainer>
        <div className="px-6">
          <div className="text-center max-w-2xl mx-auto lg:mb-14 mb-10">
            <h2 className="text-3xl font-bold text-text">
              How Microloan Works
            </h2>
            <p className="mt-6 text-md text-gray-500 dark:text-gray-400 font-semibold">
              A simple, secure, and fast five-step process to get microloans —
              from browsing offers to repayment and support.
            </p>
          </div>

          <div className="grid gap-6 md:gap-4 md:grid-cols-3 lg:grid-cols-5 items-start">
            {/* Step 1 */}
            <div className="md:col-span-1 bg-white dark:bg-[#292d35] rounded-2xl p-6 shadow-sm">
              <Step
                number="1"
                img={loanOptionImg}
                title="Explore Loan Options"
                text="Browse curated loan packages — compare limits, interest, and repayment plans. Use filters to find the best fit."
                />
            </div>

            {/* Connector for large screens */}
            <div className="hidden md:flex md:items-center min-h-[50vh] md:justify-center">
              <div className="w-full h-0.5 bg-[#0B5FFF]/10 rounded-full"></div><FaLongArrowAltRight className="text-[#0B5FFF]/50" />
            </div>

            {/* Step 2 */}
            <div className="md:col-span-1 bg-white dark:bg-[#292d35] rounded-2xl p-6 shadow-sm">
              <Step
                number="2"
                img={quickApplicationImg}
                title="Complete Quick Application"
                text="Fill a short online form with basic info and upload required documents — takes just a few minutes."
                />
            </div>

            <div className="hidden md:flex md:items-center md:justify-center min-h-[50vh]">
              <div className="w-full h-0.5 bg-[#0B5FFF]/10 rounded-full"></div><FaLongArrowAltRight className="text-[#0B5FFF]/50" />
            </div>

            {/* Step 3 */}
            <div className="md:col-span-1 bg-white dark:bg-[#292d35] rounded-2xl p-6 shadow-sm">
              <Step
                number="3"
                img={secureLoanImg}
                title="Secure Verification"
                text="We securely verify identity and documents. Status updates are sent by email and shown in your dashboard."
                />
            </div>

            <div className="hidden md:flex md:items-center md:justify-center min-h-[50vh]">
              <div className="w-full h-0.5 bg-[#0B5FFF]/10 rounded-full"></div><FaLongArrowAltRight className="text-[#0B5FFF]/50" />
            </div>

            {/* Step 4 */}
            <div className="md:col-span-1 bg-white dark:bg-[#292d35] rounded-2xl p-6 shadow-sm">
              <Step
                number="4"
                img={fastPaymentImg}
                title="Fast Approval & Disbursement"
                text="Once approved, funds are disbursed directly to your chosen account — usually within 24–72 hours."
                />
            </div>

            <div className="hidden md:flex md:items-center md:justify-center min-h-[50vh]">
              <div className="w-full h-0.5 bg-[#0B5FFF]/10 rounded-full"></div><FaLongArrowAltRight className="text-[#0B5FFF]/50" />
            </div>

            {/* Step 5 */}
            <div className="md:col-span-1 bg-white dark:bg-[#292d35] rounded-2xl p-6 shadow-sm">
              <Step
                number="5"
                img={repaymentImg}
                title="Repayment & Ongoing Support"
                text="Repay easily through scheduled EMIs, track from dashboard, and contact support for any help."
              />
            </div>
          </div>

          {/* CTA Button*/}
          <div className="mt-10 text-center">
            <Link
            to={'/apply-loan'}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-lg shadow-md bg-primary text-base-100 font-medium hover:bg-accent hover:text-black transition dark:hover:bg-[#FFB703]"
              aria-label="Start application"
            >
              Start Your Application
              <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
      </MyContainer>
    </section>
  );
}
