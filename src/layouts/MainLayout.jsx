import React from 'react';
import Navbar from '../components/Shared/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Shared/Footer/Footer';

const MainLayout = () => {
  return (
    <div className="bg-base-200 dark:bg-[#1d232a]">
      <header>
      <Navbar></Navbar>
      </header>
      <main className='min-h-[calc(100vh-394px)] lg:pt-19 md:pt-19 pt-16'>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;