// Layout.jsx
// src/components/Layout/Layout.js
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
import VideoBackground from "../pages/VideoBackground";

const Layout = () => {
  const { pathname } = useLocation();
  const excludeRoutes = ["/login", "/register", "/carowner-login", "/home","/about","/school","/vehicle","/contact","/admissions","/rules"];
  const showVideo = !excludeRoutes.includes(pathname);

  return (
    <>
      <Navbar />

      {showVideo && <VideoBackground />}

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;


