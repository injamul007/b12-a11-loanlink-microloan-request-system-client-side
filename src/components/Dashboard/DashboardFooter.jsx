import React from 'react';

const DashboardFooter = () => {
  return (
    <div className='text-center bg-[#071422] text-white h-10 flex items-center justify-center text-sm'>
      © {new Date().getFullYear()} MicroLoan. All rights reserved.
    </div>
  );
};

export default DashboardFooter;