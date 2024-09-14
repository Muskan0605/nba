import React, { useState, useEffect } from 'react';
import './Main.css';

const CoreValues = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 5);
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="core-values">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        <div className="slide">
          <h3>Innovation</h3>
          <p>We continuously seek new ideas and approaches to stay ahead of the curve.</p>
        </div>
        <div className="slide">
          <h3>Integrity</h3>
          <p>We uphold the highest standards of honesty and transparency in all our actions.</p>
        </div>
        <div className="slide">
          <h3>Customer Focus</h3>
          <p>We are dedicated to meeting and exceeding the needs of our clients.</p>
        </div>
        <div className="slide">
          <h3>Excellene</h3>
          <p>We are committed to excellence in every aspect of our work, from service delivery to customer
          support.</p>
        </div>
        <div className="slide">
          <h3>Collaboration</h3>
          <p>We believe in the power of teamwork, working closely with our clients and partners to achieve
          shared goals.</p>
        </div>
        <div className="slide">
          <h3>Cyber Security</h3>
          <p>Protects businesses from cyber threats like hacking, malware, and data breaches by implementing security measures and providing ongoing monitoring </p>
        </div>
        <div className="slide">
          <h3>Software Development</h3>
          <p>Provides services like software consulting, visual and technical design, web development, mobile app development, data science, and artificial intelligence </p>
        </div>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div>
      <h2>About <br></br>
      <span>NBA Tech</span></h2>
      <p>NBA Tech is a cutting-edge Information Technology firm dedicated to delivering comprehensive
        IT solutions that empower businesses to thrive in the digital age. From consultancy services to
        software development and cybersecurity, NBA Tech offers a full spectrum of services tailored to
        meet the dynamic needs of our clients.</p>
      <CoreValues />
    </div>
  );
}

export default Main;
