import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import welcomeScreen from '../welcome_screen.png';

const APP_STORE_URL = 'https://apps.apple.com/app/zoolo';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.zoolo';

const Hero = () => {
  const handleAppStoreClick = () => {
    window.open(APP_STORE_URL, '_blank', 'noopener,noreferrer');
  };

  const handlePlayStoreClick = () => {
    window.open(PLAY_STORE_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Professional Animal Transport Made Simple
            </h1>
            <p className="hero-subtitle">
              Connect with verified transport partners for safe, reliable animal logistics across South Africa
            </p>
            
            <div className="trust-badges minimal">
              <span>Verified Partners</span>
              <span>Real-Time Tracking</span>
              <span>Secure Payments</span>
            </div>

            <div className="download-buttons">
              <button className="store-button apple" onClick={handleAppStoreClick}>
                <FaApple size={24} />
                <div>
                  <div className="store-text-small">Download on the</div>
                  <div className="store-text-large">App Store</div>
                </div>
              </button>
              <button className="store-button google" onClick={handlePlayStoreClick}>
                <FaGooglePlay size={22} />
                <div>
                  <div className="store-text-small">GET IT ON</div>
                  <div className="store-text-large">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          <div className="hero-image">
            <div className="phone-frame">
              <img src={welcomeScreen} alt="ZOOLO Welcome Screen" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;