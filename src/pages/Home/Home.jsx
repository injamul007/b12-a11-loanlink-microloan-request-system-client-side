import React from 'react';
import CustomerFeedback from '../../components/Home/CustomerFeedback/CustomerFeedback';

const customersFeedbackData = fetch('/CustomerFeedback.json').then(res=>res.json())

const Home = () => {
  return (
    <div>
      <CustomerFeedback customersFeedbackData={customersFeedbackData}></CustomerFeedback>
    </div>
  );
};

export default Home;