import React from 'react';
import ZooloLogo from './ZooloLogo';

const Footer = () => {
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
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#support">Support</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 ZOOLO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;