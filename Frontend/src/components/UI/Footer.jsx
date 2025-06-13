import React from 'react';
import './Footer.css'; // optional if you want to separate CSS

const Footer = () => {
  return (
    <footer className="gradient-footer">
      <div className="container text-center">
        <h4 className="footer-logo">
          <img src="/images/gadilogo.png" alt="Logo" className="footer-logo-img" />
          GadiWaleKaka.Com
        </h4>
        <p className="footer-description">Safe, Reliable & Comfortable Rides for Your Little Ones</p>
        
        

        <p className="footer-text">
          &copy; 2025 GadiWale Kaka. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
