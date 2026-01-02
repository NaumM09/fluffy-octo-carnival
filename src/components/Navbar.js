import React from 'react';
import ZooloLogo from './ZooloLogo';

const Navbar = ({ scrolled }) => {
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <ZooloLogo size={28} />
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