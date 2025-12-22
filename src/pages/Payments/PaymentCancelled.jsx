import React from 'react';
import { Link, } from 'react-router';

const PaymentCancelled = () => {
  
  return (
    <div className='text-center lg:text-3xl md:text-2xl text-xl lg:mt-18 md:mt-16 mt-14'>
      <h1>Payment is cancelled. Please try again</h1>
      <Link to={'/dashboard/my-loans'} className='btn bg-[#4DA3FF] hover:bg-primary'>Go Back</Link>
    </div>
  );
};

export default PaymentCancelled;