import React from 'react';

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

export default ZooloLogo;