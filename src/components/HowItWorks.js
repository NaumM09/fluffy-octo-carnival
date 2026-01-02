import React from 'react';
import { FaMapMarkerAlt, FaCheckCircle, FaTruck } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: <FaMapMarkerAlt size={32} color="#10B981" />,
      title: 'Search Routes',
      description: 'Enter pickup and destination cities. Browse verified transporters available for your route.',
    },
    {
      number: 2,
      icon: <FaCheckCircle size={32} color="#10B981" />,
      title: 'Book & Pay',
      description: 'Select your transporter, confirm details, and pay securely with our escrow system.',
    },
    {
      number: 3,
      icon: <FaTruck size={32} color="#10B981" />,
      title: 'Track Journey',
      description: 'Get real-time updates as your animal travels safely to their destination.',
    },
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">Three simple steps to safe animal transport</p>
        
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-icon-wrapper">
                <div className="step-number">{step.number}</div>
              </div>
              <div className="step-icon-bg">
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;