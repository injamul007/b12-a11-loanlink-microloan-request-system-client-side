import React from 'react';
import Navbar from '../components/Shared/Navbar/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div>
      <header>
      <Navbar></Navbar>
      </header>
      <main className='min-h-[calc(100vh-508px)]'>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </div>
  );
};

export default MainLayout;