// components/pages/ErrorPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../css/ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-container">
      {/* Animated Bus */}
      <div className="bus-animation">
  <img src="/images/bus.png" alt="Bus" className="bus-img" />
</div>


      <div className="error-box">
        <h1 className="error-code">404</h1>
        <p className="error-message">Oops! Page Not Found</p>
        <p className="error-description">
          Looks like the school van took a wrong turn. The page you're looking for doesn’t exist.
        </p>
        <Link to="/" className="error-button">
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

