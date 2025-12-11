import React from "react";
import reviewQuoteImg from "../../../assets/reviewQuote.png";

const CustomerFeedbackCard = ({ feedback }) => {
  const { userName, user_photoURL, loanType, rating, review: testimonial, date } = feedback || {};

  return (
    <div className="max-w-sm bg-base-100 shadow-lg rounded-xl p-6 border border-gray-200">
      {/* Quote Icon */}
      <img src={reviewQuoteImg} alt="" />

      {/* Review Section */}
      <h3 className="mb-2 font-bold">I applied for a {loanType}</h3>

      <p className="mb-4">{testimonial}</p>

      <p className="text-gray-500 text-center italic">"I'd like to give: {rating} Out of 5"</p>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-300 my-4"></div>

      {/* Profile */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-primary overflow-hidden">
          <img src={user_photoURL} alt="" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{userName}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedbackCard;
