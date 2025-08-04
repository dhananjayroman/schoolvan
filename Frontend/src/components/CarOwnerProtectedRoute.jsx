import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const CarOwnerProtectedRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const auth = localStorage.getItem('carOwnerLoggedIn') === 'true';
    setIsAuth(auth);
  }, []);

  if (isAuth === null) return null; // or loading spinner

  return isAuth ? children : <Navigate to="/admissions" />;
};

export default CarOwnerProtectedRoute;



