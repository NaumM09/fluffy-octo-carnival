import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      text: "ZOOLO made relocating my two dogs from Cape Town to Johannesburg so easy. The driver was professional, and I could track the whole journey. Highly recommend!",
      author: "Sarah M.",
      location: "Cape Town",
      avatar: "SM",
    },
    {
      text: "As a livestock farmer, I needed reliable transport for my animals. ZOOLO's verified transporters and real-time tracking give me complete peace of mind.",
      author: "John K.",
      location: "Pretoria",
      avatar: "JK",
    },
    {
      text: "The escrow payment system made me feel secure. My cat arrived safely and on time. The whole process was transparent and professional.",
      author: "Thandi N.",
      location: "Durban",
      avatar: "TN",
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">Join thousands of satisfied pet owners across South Africa</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-icon-wrapper">
                <FaQuoteLeft className="quote-icon" />
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div>
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.location}</p>
                </div>
              </div>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} color="#F59E0B" size={16} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;