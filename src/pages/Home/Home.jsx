import React from 'react';
import CustomerFeedback from '../../components/Home/CustomerFeedback/CustomerFeedback';
import HowItWorks from '../../components/Home/HowItWorks/HowItWorks';
import LoanEligibilitySection from '../../components/Home/LoanEligibilitySection/LoanEligibilitySection';
import LoanComparison from '../../components/Home/LoanComparisonSection/LoanComparison';
import Banner from '../../components/Home/Banner/Banner';
import AllLoansLogo from '../../components/Home/AllLoansLogo/AllLoansLogo';
import AvailableLoans from '../../components/Home/AvailableLoans/AvailableLoans';

const customersFeedbackData = fetch('/CustomerFeedback.json').then(res=>res.json())

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AvailableLoans></AvailableLoans>
      <HowItWorks></HowItWorks>
      <AllLoansLogo></AllLoansLogo>
      <CustomerFeedback customersFeedbackData={customersFeedbackData}></CustomerFeedback>
      <LoanEligibilitySection></LoanEligibilitySection>
      <LoanComparison></LoanComparison>
    </div>
  );
};

export default Home;