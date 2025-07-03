/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      navigate("/home");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include"
      });

      console.log("resposse printed", res)

      const data = await res.json();
      console.log(data)

      if (data.ok) {
        // Login successful
        localStorage.setItem("isLoggedIn", "true");
        Swal.fire("Login Successful!", "", "success");
        navigate("/home");
      } else {
        // Login failed
        Swal.fire("Invalid Credentials", data.error || "Please check email or password", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Something went wrong. Try again later.", "error");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="show-password">
            <label className="switch">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(prev => !prev)}
              />
              <span className="slider"></span>
            </label>
            <span>Show Password</span>
          </div>

          <button type="submit">Login</button>

          <div className="text-center mt-3">
            <p>Don't have an account? <a href="/register" className="text-primary">Register here</a></p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;



