import React, { useState } from "react";
import { motion } from "framer-motion";
import MyContainer from "../../Shared/MyContainer/MyContainer";

const faqs = [
  {
    id: 1,
    question: "How can I apply for a loan?",
    answer:
      "Visit the All Loans page, select a loan, open View Details, and apply instantly.",
  },
  {
    id: 2,
    question: "What is the approval time?",
    answer:
      "Most loan applications are reviewed and approved within 24–48 hours.",
  },
  {
    id: 3,
    question: "What documents are required?",
    answer:
      "You will need a valid ID, bank statement, and proof of income to apply for a loan.",
  },
];

const FAQSection = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <motion.section
      className="lg:py-20 py-16 pb-26 bg-blue-50 dark:bg-[#1d232a]"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <MyContainer>
        <div className="px-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white dark:bg-[#292d35] rounded-lg shadow-sm overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex justify-between items-center p-5 text-left font-semibold focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <span className="text-xl">
                    {activeId === faq.id ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                {activeId === faq.id && (
                  <div className="px-5 pb-5 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </MyContainer>
    </motion.section>
  );
};

export default FAQSection;
