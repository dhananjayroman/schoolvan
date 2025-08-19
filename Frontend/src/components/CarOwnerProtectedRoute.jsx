import React from "react";
import { Navigate } from "react-router-dom";

const CarOwnerProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem("carOwnerLoggedIn") === "true";
  return isAuth ? children : <Navigate to="/carowner-login" replace />;
};

export default CarOwnerProtectedRoute;




