import React from 'react';
import CustomerFeedback from '../../components/Home/CustomerFeedback/CustomerFeedback';
import HowItWorks from '../../components/Home/HowItWorks/HowItWorks';
import LoanEligibilitySection from '../../components/Home/LoanEligibilitySection/LoanEligibilitySection';
import LoanComparison from '../../components/Home/LoanComparisonSection/LoanComparison';

const customersFeedbackData = fetch('/CustomerFeedback.json').then(res=>res.json())

const Home = () => {
  return (
    <div>
      <HowItWorks></HowItWorks>
      <CustomerFeedback customersFeedbackData={customersFeedbackData}></CustomerFeedback>
      <LoanEligibilitySection></LoanEligibilitySection>
      <LoanComparison></LoanComparison>
    </div>
  );
};

export default Home;