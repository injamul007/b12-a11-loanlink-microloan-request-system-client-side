import React from 'react';

const DashboardFooter = () => {
  return (
    <div className='text-center bg-[#071422] h-10 flex items-center justify-center'>
      © {new Date().getFullYear()} MicroLoan. All rights reserved.
    </div>
  );
};

export default DashboardFooter;