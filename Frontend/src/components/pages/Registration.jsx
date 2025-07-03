/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Swal from "sweetalert2";
import "../css/Registration.css";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    parentPhone: "",
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false); // 👈 State to toggle visibility

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.parentPhone || !formData.email || !formData.password) {
      return Swal.fire("All fields are required!", "", "warning");
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.ok) {
        Swal.fire("Registered Successfully!", "", "success");
        setFormData({
          fullName: "",
          parentPhone: "",
          email: "",
          password: ""
        });
        navigate("/login");
      } else {
        Swal.fire("Registration Failed", data.error || "Please try again", "error");
      }
    } catch (err) {
      Swal.fire("Server Error", "Something went wrong", "error");
    }
  };

  return (
    <div className="registration-wrapper">
      <div className="registration-box">
        <h2>Student Registration</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Student Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="parentPhone"
            placeholder="Parent's Phone Number"
            value={formData.parentPhone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Student Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
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

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;



