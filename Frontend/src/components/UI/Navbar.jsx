import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../UI/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
    <nav className="classic-navbar">
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => navigate('/')}>
          <img src="/images/gadilogo.png" alt="Logo" />
          <span>GadiWaleKaka</span>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
        </button>

        <div className={`navbar-links ${isOpen ? 'show' : ''}`}>
          
          <NavLink to="/home" activeClassName="active" onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/about" activeClassName="active" onClick={toggleMenu}>About</NavLink>
          <NavLink to="/school" activeClassName="active" onClick={toggleMenu}>Schools</NavLink>
          <NavLink to="/vehicle" activeClassName="active" onClick={toggleMenu}>Vehicle</NavLink>
          <NavLink to="/contact" activeClassName="active" onClick={toggleMenu}>Contact</NavLink>
          <NavLink to="/admissions" activeClassName="active" onClick={toggleMenu}>Admissions</NavLink>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

