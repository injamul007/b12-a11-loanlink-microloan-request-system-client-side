import React from "react";
import { Link } from "react-router";
import { FiHeart, FiChevronRight } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";

const LoanCard = ({ loan }) => {

  const {_id, loan_title, max_loan_limit, interest_rate, category, description, image, show_on_home } = loan || {};

  return (
      <div
        className="group rounded-xl bg-white dark:bg-[#292d35] overflow-hidden shadow-sm hover:shadow-lg shadow-gray-400 transform hover:-translate-y-1 transition-all duration-300"
      >
        
        {/* Image */}
        <div className="relative">
          <img
            src={image}
            alt={loan_title}
            className="w-full h-52 object-cover"
            loading="lazy"
          />

          {/* category badge */}
          <span
            className={`absolute left-3 top-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
            ${
              show_on_home
                ? "bg-primary text-white"
                : "bg-[#FFB703] text-gray-800"
            }`}
          >
            {category}
          </span>

          {/* favorite button */}
          <button
            className="absolute right-3 top-3 p-2 rounded-lg bg-white/90 text-gray-800 hover:scale-105 transition"
            title="Add to favorites"
          >
            <FiHeart />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 pt-6">
          <h3
            className="text-md font-semibold mb-2 line-clamp-1"
          >
            {loan_title}
          </h3>

            <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
              <HiOutlineDocumentText className="text-lg text-[#4DA3FF]" />
              <span className="line-clamp-1">{description}</span>
            </div>

          <p className="text-sm text-[#4DA3FF] mb-3 font-bold">Max Loan Limit: {max_loan_limit ? <span className="text-[#FFB703]">৳{max_loan_limit}</span> : null}</p>

          <div className="h-px bg-gray-100 my-3"></div>

          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-bold text-[#4DA3FF]`}>Interest: <span className="text-[#FFB703]">{interest_rate}</span></p>
            </div>

            <Link
              to={`/all-loans/${_id}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-[#FFB703] transition"
              aria-label={`View details for ${loan_title}`}
            >
              View Details <FiChevronRight />
            </Link>
          </div>
        </div>
      </div>
  );
}

export default LoanCard;