/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import axios from "axios"

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      navigate("/home");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("https://schoolvan-1.onrender.com/api/auth/login", {
      email,
      password
    });

    console.log("Response:", res);

    const data = res.data;
    console.log(data);

    if (data.ok) {
      localStorage.setItem("isLoggedIn", "true");
      Swal.fire("Login Successful!", "", "success");
      navigate("/home");
    } else {
      Swal.fire("Invalid Credentials", data.error || "Please check email or password", "error");
    }
  } catch (error) {
    console.error("Login error:", error);
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
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;







