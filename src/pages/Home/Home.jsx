import React from 'react';
import CustomerFeedback from '../../components/Home/CustomerFeedback/CustomerFeedback';
import HowItWorks from '../../components/Home/HowItWorks/HowItWorks';
import LoanEligibilitySection from '../../components/Home/LoanEligibilitySection/LoanEligibilitySection';

const customersFeedbackData = fetch('/CustomerFeedback.json').then(res=>res.json())

const Home = () => {
  return (
    <div>
      <HowItWorks></HowItWorks>
      <CustomerFeedback customersFeedbackData={customersFeedbackData}></CustomerFeedback>
      <LoanEligibilitySection></LoanEligibilitySection>
    </div>
  );
};

export default Home;