// CarOwnerProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const CarOwnerProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('carOwnerLoggedIn') === 'true';

  return isLoggedIn ? children : <Navigate to="/carowner-login" />;
};

export default CarOwnerProtectedRoute;

