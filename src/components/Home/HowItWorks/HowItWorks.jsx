import React from "react";
import { motion } from "framer-motion";
import MyContainer from "../../Shared/MyContainer/MyContainer";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router";
import loanOptionImg from "../../../assets/how it works images/loan_options_img.png";
import quickApplicationImg from "../../../assets/how it works images/quick_complete_img.png";
import secureLoanImg from "../../../assets/how it works images/secure_verification_img.png";
import fastPaymentImg from "../../../assets/how it works images/fast_payment_img.png";
import repaymentImg from "../../../assets/how it works images/repayment_img.png";

const Step = ({ number, title, text, img }) => (
  <div className="flex gap-2 items-start">
    <div className="shrink-0">
      <div className="w-6 h-6 rounded-lg bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center">
        <div className="text-primary font-bold">{number}</div>
      </div>
    </div>

    <div>
      <img className="w-30 rounded-2xl" src={img} alt="howItWorksImages" />
      <h4 className="mt-2 text-lg font-bold text-text">{title}</h4>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 font-semibold">
        {text}
      </p>
    </div>
  </div>
);

export default function HowItWorks() {
  return (
    <motion.section
      className="lg:pt-36 pt-22 lg:pb-18 pb-8"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <MyContainer>
        <div className="px-6">
          <div className="text-center max-w-2xl mx-auto lg:mb-14 mb-10">
            <h2 className="text-3xl font-bold text-text">
              How LoanLink Works
            </h2>
            <p className="mt-6 text-md text-gray-500 dark:text-gray-400 font-semibold">
              A simple, secure, and fast five-step process to get microloans —
              from browsing offers to repayment and support.
            </p>
          </div>

          <div className="grid gap-6 md:gap-4 md:grid-cols-3 lg:grid-cols-5 items-start">
            <div className="md:col-span-1 bg-white dark:bg-[#292d35] rounded-2xl p-6 shadow-sm">
              <Step number="1" img={loanOptionImg} title="Explore Loan Options"
                text="Browse curated loan packages — compare limits, interest, and repayment plans. Use filters to find the best fit."
              />
            </div>

            <div className="hidden md:flex md:items-center min-h-[50vh] md:justify-center">
              <div className="w-full h-0.5 bg-[#0B5FFF]/10 rounded-full"></div>
              <FaLongArrowAltRight className="text-[#0B5FFF]/50" />
            </div>

            <div className="md:col-span-1 bg-white dark:bg-[#292d35] rounded-2xl p-6 shadow-sm">
              <Step number="2" img={quickApplicationImg} title="Complete Quick Application"
                text="Fill a short online form with basic info and upload required documents — takes just a few minutes."
              />
            </div>

            <div className="hidden md:flex md:items-center md:justify-center min-h-[50vh]">
              <div className="w-full h-0.5 bg-[#0B5FFF]/10 rounded-full"></div>
              <FaLongArrowAltRight className="text-[#0B5FFF]/50" />
            </div>

            <div className="md:col-span-1 bg-white dark:bg-[#292d35] rounded-2xl p-6 shadow-sm">
              <Step number="3" img={secureLoanImg} title="Secure Verification"
                text="We securely verify identity and documents. Status updates are sent by email and shown in your dashboard."
              />
            </div>

            <div className="hidden md:flex md:items-center md:justify-center min-h-[50vh]">
              <div className="w-full h-0.5 bg-[#0B5FFF]/10 rounded-full"></div>
              <FaLongArrowAltRight className="text-[#0B5FFF]/50" />
            </div>

            <div className="md:col-span-1 bg-white dark:bg-[#292d35] rounded-2xl p-6 shadow-sm">
              <Step number="4" img={fastPaymentImg} title="Fast Approval & Disbursement"
                text="Once approved, funds are disbursed directly to your chosen account — usually within 24–72 hours."
              />
            </div>

            <div className="hidden md:flex md:items-center md:justify-center min-h-[50vh]">
              <div className="w-full h-0.5 bg-[#0B5FFF]/10 rounded-full"></div>
              <FaLongArrowAltRight className="text-[#0B5FFF]/50" />
            </div>

            <div className="md:col-span-1 bg-white dark:bg-[#292d35] rounded-2xl p-6 shadow-sm">
              <Step number="5" img={repaymentImg} title="Repayment & Ongoing Support"
                text="Repay easily through scheduled EMIs, track from dashboard, and contact support for any help."
              />
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link to={"/all-loans"} className="cta_btn">
              See Our Loans <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
      </MyContainer>
    </motion.section>
  );
}
