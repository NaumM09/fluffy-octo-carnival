import React from 'react';
import { Link } from 'react-router-dom';
import ZooloLogo from './ZooloLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <ZooloLogo size={24} darkMode={true} />
            <p>Animal Transport, Built for Trust.</p>
            <p className="footer-location">Operating across South Africa</p>
          </div>
          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/support">Support</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {currentYear} ZOOLO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;