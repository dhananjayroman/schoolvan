// App.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./components/pages/Login";
import Layout from "./components/Layout/Layout";
import About from "./components/pages/Abou";
import School from "./components/pages/School";
import Vehicle from "./components/pages/Vehicle";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import ViewAdmission from "./components/pages/ViewAdmissions";
import Rules from "./components/pages/Rules";
import ErrorPage from "./components/pages/ErrorPage";
import ProtectedRoute from "./components/ProtectedRoute";

import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Navbar + Footer always visible
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Login />, // Login page with Navbar + Footer
      },
      {
        path: "home",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "about",
        element: (
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        ),
      },
      {
        path: "school",
        element: (
          <ProtectedRoute>
            <School />
          </ProtectedRoute>
        ),
      },
      {
        path: "vehicle",
        element: (
          <ProtectedRoute>
            <Vehicle />
          </ProtectedRoute>
        ),
      },
      {
        path: "contact",
        element: (
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        ),
      },
      {
        path: "admissions",
        element: (
          <ProtectedRoute>
            <ViewAdmission />
          </ProtectedRoute>
        ),
      },
      {
        path: "rules",
        element: (
          <ProtectedRoute>
            <Rules />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;





