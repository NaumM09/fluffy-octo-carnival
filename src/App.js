// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { 
  FaApple, 
  FaGooglePlay, 
  FaShieldAlt, 
  FaStar, 
  FaTruck, 
  FaCheckCircle,
  FaQuoteLeft,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa';

// Import your images - make sure these paths match your actual file structure
import welcomeScreen from './welcome_screen.png';
import authScreen from './auth_screen.png';
import homeScreen from './home_screen.png';

// Constants
const APP_STORE_URL = 'https://apps.apple.com/app/zoolo';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.zoolo';

// Production-grade Logo Component
const ZooloLogo = ({ size = 32, darkMode = false }) => {
  return (
    <div
      className={`zoolo-logo ${darkMode ? 'dark' : ''}`}
      style={{ fontSize: size }}
      aria-label="ZOOLO logo"
    >
      <span>Z</span>
      <span>O</span>
      <span className="accent">O</span>
      <span>L</span>
      <span>O</span>
    </div>
  );
};

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAppStoreClick = () => {
    window.open(APP_STORE_URL, '_blank', 'noopener,noreferrer');
  };

  const handlePlayStoreClick = () => {
    window.open(PLAY_STORE_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-content">
            <ZooloLogo size={28} />
            <div className="nav-links">
              <a href="#features">Features</a>
              <a href="#download" className="nav-cta">Get App</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Welcome Screen */}
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

      {/* Pets Section - Fun Bubbles */}
      <section id="pets" className="pets-section">
        <div className="container">
          <div className="pets-content">
            <div className="pets-text">
              <h2 className="section-title-left">We Transport All Your Animals</h2>
              <p className="pets-description">
                From household pets to livestock—every animal deserves 
                a safe, stress-free journey. Our verified transporters follow strict 
                animal welfare guidelines and safety protocols.
              </p>
            </div>
            
            <div className="pets-bubbles">
              <div className="pet-bubble bubble-1">
                <div className="bubble-content">
                  <span className="pet-emoji">🐕</span>
                  <span className="pet-name">Dogs</span>
                </div>
              </div>
              
              <div className="pet-bubble bubble-2">
                <div className="bubble-content">
                  <span className="pet-emoji">🐈</span>
                  <span className="pet-name">Cats</span>
                </div>
              </div>
              
              <div className="pet-bubble bubble-3">
                <div className="bubble-content">
                  <span className="pet-emoji">🦜</span>
                  <span className="pet-name">Poultry & Birds</span>
                </div>
              </div>
              
              <div className="pet-bubble bubble-4">
                <div className="bubble-content">
                  <span className="pet-emoji">🐄</span>
                  <span className="pet-name">Livestock</span>
                </div>
              </div>
              
              <div className="pet-bubble bubble-5">
                <div className="bubble-content">
                  <span className="pet-emoji">🦎</span>
                  <span className="pet-name">Exotics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Auth Section - Sign Up Prompt */}
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
                <div className="feature-item">
                  <FaCheckCircle color="#10B981" size={20} />
                  <span>Quick registration with email or phone</span>
                </div>
                <div className="feature-item">
                  <FaCheckCircle color="#10B981" size={20} />
                  <span>Secure identity verification</span>
                </div>
                <div className="feature-item">
                  <FaCheckCircle color="#10B981" size={20} />
                  <span>Instant access to transport partners</span>
                </div>
              </div>
              <button className="primary-cta-button" onClick={handleAppStoreClick}>
                Create Your Account
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Three simple steps to safe animal transport</p>
          
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-icon-wrapper">
                <div className="step-number">1</div>
              </div>
              <div className="step-icon-bg">
                <FaMapMarkerAlt size={32} color="#10B981" />
              </div>
              <h3>Search Routes</h3>
              <p>Enter pickup and destination cities. Browse verified transporters available for your route.</p>
            </div>

            <div className="step-card">
              <div className="step-icon-wrapper">
                <div className="step-number">2</div>
              </div>
              <div className="step-icon-bg">
                <FaCheckCircle size={32} color="#10B981" />
              </div>
              <h3>Book & Pay</h3>
              <p>Select your transporter, confirm details, and pay securely with our escrow system.</p>
            </div>

            <div className="step-card">
              <div className="step-icon-wrapper">
                <div className="step-number">3</div>
              </div>
              <div className="step-icon-bg">
                <FaTruck size={32} color="#10B981" />
              </div>
              <h3>Track Journey</h3>
              <p>Get real-time updates as your animal travels safely to their destination.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - App Elements */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Experience The Journey</h2>
          <p className="section-subtitle">See how ZOOLO keeps you connected every step of the way</p>
          
          <div className="app-features-grid">
            {/* Home Screen - Search Interface */}
            <div className="app-feature-card">
              <div className="home-screen-card">
                <div className="phone-frame-small">
                  <img src={homeScreen} alt="ZOOLO Home Screen" />
                </div>
              </div>
              <div className="feature-label">
                <h3>Easy Search</h3>
                <p>Find transport partners in seconds with our intuitive search interface</p>
              </div>
            </div>

            {/* Chat Notification Card */}
            <div className="app-feature-card">
              <div className="phone-notification">
                <div className="notification-header">
                  <div className="driver-avatar">PT</div>
                  <div className="notification-details">
                    <h4>PetTrans Express</h4>
                    <p className="notification-time">Driver: John M. • 2 min ago</p>
                  </div>
                </div>
                <div className="notification-message">
                  <div className="message-photo">
                    <div className="photo-placeholder">
                      <span className="dog-emoji">🐕</span>
                    </div>
                  </div>
                  <p className="message-text">"Russell has been picked up safely! He's already making friends 😊"</p>
                </div>
                <div className="notification-badge">
                  <FaCheckCircle size={16} color="#10B981" />
                  <span>Pickup Confirmed</span>
                </div>
              </div>
              <div className="feature-label">
                <h3>Live Updates</h3>
                <p>Get real-time notifications with photos from your transport company</p>
              </div>
            </div>

            {/* GPS Tracking Card */}
            <div className="app-feature-card">
              <div className="tracking-card">
                <div className="map-header">
                  <FaMapMarkerAlt color="#10B981" size={20} />
                  <span className="route-label">Cape Town → Johannesburg</span>
                </div>
                <div className="map-visual">
                  <div className="route-line"></div>
                  <div className="location-pin start">
                    <div className="pin-dot"></div>
                  </div>
                  <div className="location-pin moving">
                    <FaTruck color="#10B981" size={24} />
                  </div>
                  <div className="location-pin end">
                    <div className="pin-dot"></div>
                  </div>
                </div>
                <div className="tracking-status">
                  <div className="status-row">
                    <FaClock color="#64748B" size={14} />
                    <span>Est. arrival: 4:30 PM</span>
                  </div>
                  <div className="distance-badge">385 km remaining</div>
                </div>
              </div>
              <div className="feature-label">
                <h3>Real Time Updates</h3>
                <p>Follow the journey in real-time with live location updates</p>
              </div>
            </div>

            {/* Drop-off Confirmation Card */}
            <div className="app-feature-card">
              <div className="confirmation-card">
                <div className="confirmation-icon">
                  <div className="success-circle">
                    <FaCheckCircle size={48} color="#10B981" />
                  </div>
                </div>
                <h4 className="confirmation-title">Russell Delivered Safely!</h4>
                <div className="confirmation-photo">
                  <div className="photo-frame">
                    <span className="happy-dog">🐕</span>
                  </div>
                  <p className="photo-caption">"Safe and sound with his new family!"</p>
                </div>
                <div className="rating-prompt">
                  <p>How was your experience?</p>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} color="#F59E0B" size={24} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="feature-label">
                <h3>Verified Delivery</h3>
                <p>Photo confirmation ensures your animal arrived safely</p>
              </div>
            </div>

            {/* Payment Security Card */}
            <div className="app-feature-card">
              <div className="payment-card">
                <div className="payment-header">
                  <FaShieldAlt size={32} color="#3B82F6" />
                  <h4>Payment Protected</h4>
                </div>
                <div className="escrow-flow">
                  <div className="escrow-step">
                    <div className="step-icon active">1</div>
                    <span>You pay R850</span>
                  </div>
                  <div className="flow-arrow">→</div>
                  <div className="escrow-step">
                    <div className="step-icon active">2</div>
                    <span>Held in escrow</span>
                  </div>
                  <div className="flow-arrow">→</div>
                  <div className="escrow-step">
                    <div className="step-icon">3</div>
                    <span>Released on delivery</span>
                  </div>
                </div>
                <p className="security-note">
                  <FaCheckCircle color="#10B981" size={16} />
                  Payment only released when you confirm safe delivery
                </p>
              </div>
              <div className="feature-label">
                <h3>Secure Payments</h3>
                <p>Escrow protection ensures safe transactions for everyone</p>
              </div>
            </div>

            {/* Verified Transporter Card */}
            <div className="app-feature-card">
              <div className="transporter-card">
                <div className="transporter-profile">
                  <div className="profile-avatar verified">
                    <span>PT</span>
                    <div className="verified-badge">
                      <FaCheckCircle size={16} color="white" />
                    </div>
                  </div>
                  <div className="profile-info">
                    <h4>PetTrans Express</h4>
                    <div className="rating-row">
                      <FaStar color="#F59E0B" size={14} />
                      <span>4.9 (342 trips)</span>
                    </div>
                  </div>
                </div>
                <div className="verification-badges">
                  <div className="badge">
                    <FaCheckCircle color="#10B981" size={12} />
                    <span>Company Verified</span>
                  </div>
                  <div className="badge">
                    <FaCheckCircle color="#10B981" size={12} />
                    <span>All Drivers Vetted</span>
                  </div>
                  <div className="badge">
                    <FaCheckCircle color="#10B981" size={12} />
                    <span>Licensed & Insured</span>
                  </div>
                </div>
                <div className="driver-count">
                  <FaTruck size={14} color="#64748B" />
                  <span>5 Active Drivers</span>
                </div>
                <p className="specialty">Specialises in: Dogs, Cats, Small Animals, Poultry</p>
              </div>
              <div className="feature-label">
                <h3>Trusted Companies</h3>
                <p>Every transport company is verified with vetted drivers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">Join thousands of satisfied pet owners across South Africa</p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="quote-icon-wrapper">
                <FaQuoteLeft className="quote-icon" />
              </div>
              <p className="testimonial-text">
                "ZOOLO made relocating my two dogs from Cape Town to Johannesburg so easy. 
                The driver was professional, and I could track the whole journey. Highly recommend!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">SM</div>
                <div>
                  <h4>Sarah M.</h4>
                  <p>Cape Town</p>
                </div>
              </div>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} color="#F59E0B" size={16} />
                ))}
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-icon-wrapper">
                <FaQuoteLeft className="quote-icon" />
              </div>
              <p className="testimonial-text">
                "As a livestock farmer, I needed reliable transport for my animals. ZOOLO's 
                verified transporters and real-time tracking give me complete peace of mind."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">JK</div>
                <div>
                  <h4>John K.</h4>
                  <p>Pretoria</p>
                </div>
              </div>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} color="#F59E0B" size={16} />
                ))}
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-icon-wrapper">
                <FaQuoteLeft className="quote-icon" />
              </div>
              <p className="testimonial-text">
                "The escrow payment system made me feel secure. My cat arrived safely and on time. 
                The whole process was transparent and professional."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">TN</div>
                <div>
                  <h4>Thandi N.</h4>
                  <p>Durban</p>
                </div>
              </div>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} color="#F59E0B" size={16} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="cta-section">
        <div className="container">
          <div className="cta-content">
            <ZooloLogo size={56} darkMode={true} />
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

      {/* Footer */}
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
    </div>
  );
}

export default App;