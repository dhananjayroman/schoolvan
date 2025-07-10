import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import ErrorPage from "./components/pages/ErrorPage";

import ProtectedRoute from "./components/ProtectedRoute";
import CarOwnerProtectedRoute from "./components/CarOwnerProtectedRoute";

import Login from "./components/pages/Login";
import Registration from "./components/pages/Registration";
import CarOwnerLogin from "./components/pages/CarOwnerLogin";

import Home from "./components/pages/Home";
import About from "./components/pages/Abou";
import School from "./components/pages/School";
import Vehicle from "./components/pages/Vehicle";
import Contact from "./components/pages/Contact";
import ViewAdmission from "./components/pages/ViewAdmissions";
import Rules from "./components/pages/Rules";

import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      // Public Routes
      { path: "login", element: <Login /> },
      { path: "register", element: <Registration /> },
      { path: "carowner-login", element: <CarOwnerLogin /> },

      // Protected Routes (Students)
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
        path: "rules",
        element: (
          <ProtectedRoute>
            <Rules />
          </ProtectedRoute>
        ),
      },

      // Protected Routes (Car Owners)
      {
        path: "admissions",
        element: (
          <CarOwnerProtectedRoute>
            <ViewAdmission />
          </CarOwnerProtectedRoute>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;







