// Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../UI/Navbar';
import Footer from '../UI/Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

