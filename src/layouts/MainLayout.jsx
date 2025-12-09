import React from 'react';
import Navbar from '../components/Shared/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Shared/Footer/Footer';

const MainLayout = () => {
  return (
    <div>
      <header>
      <Navbar></Navbar>
      </header>
      <main className='min-h-[calc(100vh-510px)]'>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;