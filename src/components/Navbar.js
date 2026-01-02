import React from 'react';
import { Link } from 'react-router-dom';
import ZooloLogo from './ZooloLogo';

const Navbar = ({ scrolled }) => {
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ZooloLogo size={28} />
          </Link>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#download" className="nav-cta">Download App</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;