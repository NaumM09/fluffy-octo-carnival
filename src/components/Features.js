import React from 'react';
import { FaCheckCircle} from 'react-icons/fa';

const Features = () => {
  const clientSteps = [
    {
      step: 1,
      tag: 'For Pet Owners',
      title: 'Search',
      description: 'Browse verified courier companies, compare prices instantly, and book your preferred transporter.',
      // Replace with your actual screenshot URL or path
      imageUrl: 'https://i.ibb.co/Zp3nwFHP/client-img.png',
      highlights: [
        'Compare multiple quotes',
        'Verified reviews & ratings',
        'Filter by animal type',
        'Instant booking'
      ]
    },
    {
      step: 2,
      tag: 'Available Transport',
      title: 'Book',
      description: 'Live updates, direct in-app messaging throughout the trip.',
      // Replace with your actual screenshot URL or path
      imageUrl: 'https://i.ibb.co/zVKt0p7v/client-img2.png',
      highlights: [
        'Live GPS tracking',
        'Photo updates',
        'Direct messaging',
        'ETA notifications'
      ]
    },
    {
      step: 3,
      tag: 'Safe & Secure',
      title: 'Confirm & Rate',
      description: 'Photo proof of delivery, secure escrow release, and rate your experience to build trust.',
      // Replace with your actual screenshot URL or path
      imageUrl: 'https://i.ibb.co/23YcBYm0/client-img1.png',
      highlights: [
        'Photo confirmation',
        'Escrow protection',
        'Rate & review',
        'Build community trust'
      ]
    }
  ];

  return (
    <section id="features" className="features-modern">
      <div className="container">
        <div className="features-header">
          <span className="features-tag">How It Works</span>
          <h2 className="features-title">Book Safe Transport in 3 Simple Steps</h2>
          <p className="features-description">
            From search to delivery, we've made animal transport simple, transparent, and secure
          </p>
        </div>
        
        <div className="features-grid-modern">
          {clientSteps.map((feature, index) => (
            <div key={index} className="feature-card-modern">
              <div className="feature-phone-mockup">
                <div className="phone-bezel">
                  <div className="phone-notch"></div>
                  <div className="phone-screen">
                    <img 
                      src={feature.imageUrl} 
                      alt={feature.title}
                      className="phone-screenshot"
                    />
                  </div>
                </div>
                <div className="feature-step-badge">{feature.step}</div>
              </div>
              
              <div className="feature-card-content">
                <span className="feature-tag">{feature.tag}</span>
                <h3 className="feature-card-title">{feature.title}</h3>
                <p className="feature-card-description">{feature.description}</p>
                
                <ul className="feature-list-modern">
                  {feature.highlights.map((highlight, idx) => (
                    <li key={idx}>
                      <FaCheckCircle size={16} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;