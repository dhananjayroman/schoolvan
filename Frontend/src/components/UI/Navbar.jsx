import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import '../UI/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginRole, setLoginRole] = useState(""); // "student" | "carowner" | ""

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isStudent = localStorage.getItem('isLoggedIn') === 'true';
    const isCarOwner = localStorage.getItem('carOwnerLoggedIn') === 'true';

    if (isStudent) setLoginRole("student");
    else if (isCarOwner) setLoginRole("carowner");
    else setLoginRole("");
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);



const handleLogout = () => {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('carOwnerLoggedIn');
  navigate('/login');
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
          {loginRole === "student" && (
            <>
              <NavLink to="/home" onClick={toggleMenu}>Home</NavLink>
              <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
              <NavLink to="/school" onClick={toggleMenu}>Schools</NavLink>
              <NavLink to="/vehicle" onClick={toggleMenu}>Vehicle</NavLink>
              <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
             
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </>
          )}

          {loginRole === "carowner" && (
            <>
              <NavLink to="/admissions" onClick={toggleMenu}>Car-Owner</NavLink>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </>
          )}

          {loginRole === "" && (
            <>
              <NavLink to="/login" onClick={toggleMenu}>Login</NavLink>
              <NavLink to="/register" onClick={toggleMenu}>Register</NavLink>
              <NavLink to="/carowner-login" onClick={toggleMenu}>Car-Owner</NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;









