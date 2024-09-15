import React, { useState } from 'react';
import './Business.css'; // Make sure to import the CSS file

const Business = () => {
  const [showMore, setShowMore] = useState(false);

  const handleDiscoverMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="business-container">
      <button className="discover-button" onClick={handleDiscoverMore}>
        {showMore ? 'Show Less' : 'Discover More'}
      </button>

      {showMore && (
        <div className="more-info">
          <h2>Our Mission</h2>
          <p>&#8594;To empower businesses by delivering secure, scalable, and future-ready IT solutions that ensure long-term sustainability, success, and resilience against the challenges of the digital age.</p>
          <p>&#8594; Our Vision is to build a quantum-safe, tech-forward world where businesses thrive through the power of innovation, security, and cutting-edge technology.</p>
          <p>Contact us for more information!!</p>
        </div>
      )}
    </div>
  );
};

export default Business;

