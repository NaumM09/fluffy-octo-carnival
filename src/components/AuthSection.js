import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import authScreen from '../auth_screen.png';

const APP_STORE_URL = 'https://apps.apple.com/app/zoolo';

const AuthSection = () => {
  const handleAppStoreClick = () => {
    window.open(APP_STORE_URL, '_blank', 'noopener,noreferrer');
  };

  const features = [
    'Quick registration with email or phone',
    'Secure identity verification',
    'Instant access to transport partners',
  ];

  return (
    <section className="auth-section">
      <div className="container">
        <div className="auth-content-wrapper">
          <div className="auth-image">
            <div className="phone-frame">
              <img src={authScreen} alt="ZOOLO Sign Up Screen" />
            </div>
          </div>
          <div className="auth-text">
            <h2 className="section-title-left">Ready to Get Started?</h2>
            <p className="auth-description">
              Create your account in seconds and join thousands of pet owners who trust ZOOLO for their animal transport needs. Sign up now to access verified transport partners, real-time tracking, and secure payment protection.
            </p>
            <div className="auth-features">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <FaCheckCircle color="#10B981" size={20} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button className="primary-cta-button" onClick={handleAppStoreClick}>
              Create Your Account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthSection;