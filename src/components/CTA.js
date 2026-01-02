import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import ZooloLogo from './ZooloLogo';

const APP_STORE_URL = 'https://apps.apple.com/app/zoolo';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.zoolo';

const CTA = () => {
  const handleAppStoreClick = () => {
    window.open(APP_STORE_URL, '_blank', 'noopener,noreferrer');
  };

  const handlePlayStoreClick = () => {
    window.open(PLAY_STORE_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="download" className="cta-section">
      <div className="container">
        <div className="cta-content">
          <ZooloLogo size={48} darkMode={true} />
          <h2>Ready to get started?</h2>
          <p>Trusted by transporters and animal owners across South Africa.</p>
          
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
      </div>
    </section>
  );
};

export default CTA;