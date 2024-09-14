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
          <h2>About Our Business</h2>
          <p>We specialize in providing top-notch services and products to our clients.</p>
          <p>Our mission is to deliver quality and excellence in every aspect of our work.</p>
          <p>Contact us for more information!</p>
        </div>
      )}
    </div>
  );
};

export default Business;

