import React from "react";
import { motion } from "framer-motion";
import useScrollDirection from "../../hooks/useScrollDirection";

import CustomerFeedback from "../../components/Home/CustomerFeedback/CustomerFeedback";
import HowItWorks from "../../components/Home/HowItWorks/HowItWorks";
import LoanEligibilitySection from "../../components/Home/LoanEligibilitySection/LoanEligibilitySection";
import LoanComparison from "../../components/Home/LoanComparisonSection/LoanComparison";
import Banner from "../../components/Home/Banner/Banner";
import AllLoansLogo from "../../components/Home/AllLoansLogo/AllLoansLogo";
import AvailableLoans from "../../components/Home/AvailableLoans/AvailableLoans";
import LoanCategoriesSection from "../../components/Home/LoanCategorySection/LoanCategoriesSection";
import StatisticsSection from "../../components/Home/StatisticsSection/StatisticsSection";
import FAQSection from "../../components/Home/FAQSection/FAQSection";
import WhyChooseLoanLink from "../../components/Home/WhyChooseLoanLink/WhyChooseLoanLink";

const customersFeedbackData = fetch("/CustomerFeedback.json").then((res) =>
  res.json()
);

const Home = () => {
  const direction = useScrollDirection();

  const animation = {
    hidden: { opacity: 0, y: direction === "down" ? 80 : -80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div>
      <motion.div
        variants={animation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <Banner />
      </motion.div>

      <motion.div
        variants={animation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        >
        <AvailableLoans />
      </motion.div>

      <motion.div
        variants={animation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        >
        <WhyChooseLoanLink></WhyChooseLoanLink>
      </motion.div>

      <motion.div
        variants={animation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <HowItWorks />
      </motion.div>

      <motion.div
        variants={animation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <LoanCategoriesSection></LoanCategoriesSection>
      </motion.div>

      <motion.div
        variants={animation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <LoanEligibilitySection />
      </motion.div>

      <motion.div
        variants={animation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <LoanComparison />
      </motion.div>

      <motion.div
        variants={animation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <CustomerFeedback customersFeedbackData={customersFeedbackData} />
      </motion.div>

      <motion.div
        variants={animation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <AllLoansLogo />
      </motion.div>

      <motion.div
        variants={animation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
      <StatisticsSection></StatisticsSection>
      </motion.div>

      <motion.div
        variants={animation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
      <FAQSection></FAQSection>
      </motion.div>
    </div>
  );
};

export default Home;
