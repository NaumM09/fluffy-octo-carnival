import React from 'react';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const PartnerSection = () => {
  const partnerSteps = [
    {
      step: 1,
      tag: 'For Couriers',
      title: 'Create Bookings',
      description: 'Post your available routes with dates and pricing. Bookings go live instantly for pet owners to reserve.',
      // Replace with your actual screenshot URL or path
      imageUrl: 'https://i.ibb.co/FLWzm8RM/partner-img.png',
      highlights: [
        'Post routes & schedules',
        'Set your own pricing',
        'Instant availability',
        'Manage capacity'
      ]
    },
    {
      step: 2,
      tag: 'Stay Connected',
      title: 'Get Bookings',
      description: 'Receive instant notifications when pet owners book your routes. Communicate directly with clients.',
      // Replace with your actual screenshot URL or path
      imageUrl: 'https://i.ibb.co/GQvrSLWT/partner-img1.png',
      highlights: [
        'Instant notifications',
        'Client messaging',
        'Coordinate pickups',
        'Share updates'
      ]
    },
    {
      step: 3,
      tag: 'Grow Your Business',
      title: 'Transport & Earn',
      description: 'Complete deliveries, confirm with photos, and receive instant payment via escrow. Build your reputation.',
      // Replace with your actual screenshot URL or path
      imageUrl: 'https://i.ibb.co/DFg4gwt/partner-img2.png',
      highlights: [
        'Photo confirmations',
        'Instant payments',
        'Earn 5-star ratings',
        'Grow with ZOOLO'
      ]
    }
  ];

  return (
    <section id="partners" className="partner-section-modern">
      <div className="container">
        <div className="partner-header-modern">
          <span className="partner-badge-modern">Partner With Us</span>
          <h2 className="partner-title-modern">Turn Your Routes Into Revenue</h2>
          <p className="partner-description-modern">
            Join South Africa's fastest-growing animal transport marketplace
          </p>
        </div>
        
        <div className="partner-grid-modern">
          {partnerSteps.map((feature, index) => (
            <div key={index} className="partner-card-modern">
              <div className="partner-phone-mockup">
                <div className="phone-bezel dark">
                  <div className="phone-notch"></div>
                  <div className="phone-screen">
                    <img 
                      src={feature.imageUrl} 
                      alt={feature.title}
                      className="phone-screenshot"
                    />
                  </div>
                </div>
                <div className="partner-step-badge">{feature.step}</div>
              </div>
              
              <div className="partner-card-content">
                <span className="partner-tag">{feature.tag}</span>
                <h3 className="partner-card-title">{feature.title}</h3>
                <p className="partner-card-description">{feature.description}</p>
                
                <ul className="partner-list-modern">
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

        <div className="partner-cta-modern">
            <button className="partner-cta-button">
              <span>Become a Partner</span>
              <FaArrowRight size={16} />
            </button>
          </div>
      </div>
    </section>
  );
};

export default PartnerSection;