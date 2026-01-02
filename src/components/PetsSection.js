import React from 'react';

const PetsSection = () => {
  const pets = [
    { emoji: '🐕', name: 'Dogs', className: 'bubble-1' },
    { emoji: '🐈', name: 'Cats', className: 'bubble-2' },
    { emoji: '🦜', name: 'Poultry & Birds', className: 'bubble-3' },
    { emoji: '🐄', name: 'Livestock', className: 'bubble-4' },
    { emoji: '🦎', name: 'Exotics', className: 'bubble-5' },
  ];

  return (
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
            {pets.map((pet, index) => (
              <div key={index} className={`pet-bubble ${pet.className}`}>
                <div className="bubble-content">
                  <span className="pet-emoji">{pet.emoji}</span>
                  <span className="pet-name">{pet.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetsSection;