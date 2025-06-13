import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const ProtectedRoute = ({ children }) => {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [checked, setChecked] = useState(false); // ensures redirect only happens after Swal

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (!isLoggedIn) {
      Swal.fire({
        icon: "warning",
        title: "Access Denied",
        text: "Please login first to access this page.",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      }).then(() => {
        setShouldRedirect(true);
        setChecked(true);
      });
    } else {
      setChecked(true); // valid login, no need to redirect
    }
  }, []);

  if (!checked) {
    return null; // Or show a loading spinner here if you prefer
  }

  if (shouldRedirect) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;



