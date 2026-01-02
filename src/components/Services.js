import React from 'react';
import { 
  FaTruck, 
  FaMapMarkerAlt, 
  FaExclamationTriangle, 
  FaHospital, 
  FaRoad, 
  FaPlane,
  FaCheckCircle,
  FaBalanceScale,
  FaMapMarkedAlt,
  FaLock
} from 'react-icons/fa';
import "./../LegalPages.css";

const Services = () => {
  const services = [
    { 
      icon: <FaTruck size={32} />,
      name: 'Door-to-Door',
      description: 'Direct pickup and delivery from your location to the destination'
    },
    { 
      icon: <FaMapMarkerAlt size={32} />,
      name: 'Fixed Stop Routes',
      description: 'Scheduled routes with designated pickup and drop-off points'
    },
    { 
      icon: <FaExclamationTriangle size={32} />,
      name: 'Emergency Pickup',
      description: 'Urgent transport services for time-sensitive situations'
    },
    { 
      icon: <FaHospital size={32} />,
      name: 'Vet Drop-offs',
      description: 'Safe transport to veterinary clinics and animal hospitals'
    },
    { 
      icon: <FaRoad size={32} />,
      name: 'Long Distance',
      description: 'Cross-province transport with experienced long-haul couriers'
    },
    { 
      icon: <FaPlane size={32} />,
      name: 'Air Travel',
      description: 'Coming soon - Airport transfers and flight coordination',
      comingSoon: true
    },
  ];

  const benefits = [
    {
      icon: <FaCheckCircle size={24} />,
      title: 'Verified Courier Companies',
      description: 'All partners are vetted with company registration and driver documentation'
    },
    {
      icon: <FaBalanceScale size={24} />,
      title: 'Compare & Choose',
      description: 'Browse multiple courier options, read reviews, and select the best fit'
    },
    {
      icon: <FaMapMarkedAlt size={24} />,
      title: 'Real-Time GPS Tracking',
      description: 'Monitor your animal\'s journey with live location updates'
    },
    {
      icon: <FaLock size={24} />,
      title: 'Secure Escrow Payments',
      description: 'Your payment is held securely until safe delivery is confirmed'
    }
  ];

  return (
    <section id="services" className="pets-section">
      <div className="container">
        <h2 className="section-title">Your Complete Animal Transport Marketplace</h2>
        <p className="section-subtitle">
          ZOOLO connects animal owners with professional courier companies across South Africa. 
          Browse verified transporters, compare prices, and book the service that fits your needs.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card ${service.comingSoon ? 'coming-soon' : ''}`}>
              <div className="service-icon">
                {service.icon}
              </div>
              {service.comingSoon && <span className="coming-soon-badge">Coming Soon</span>}
              <h3 className="service-name">{service.name}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="service-benefits">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <div className="benefit-icon">
                {benefit.icon}
              </div>
              <div className="benefit-text">
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;