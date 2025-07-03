/* eslint-disable no-unused-vars */
// CarOwnerLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CarOwnerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/carowner/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.ok) {
        localStorage.setItem('carOwnerLoggedIn', 'true');
        Swal.fire('Success', 'Logged in as Car Owner', 'success');
        navigate('/admissions'); // redirect to protected car-owner page
      } else {
        Swal.fire('Login Failed', data.error || 'Invalid credentials', 'error');
      }
    } catch (error) {
      Swal.fire('Error', 'Server error. Try again.', 'error');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Car Owner Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
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

export default CarOwnerLogin;



