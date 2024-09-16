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
      <span>Welcome to NBA TECH - Shaping Tomorrow, Today</span></h2>
      <p>⋆ Founded on July 11th, 2024, NBA TECH is driven by a powerful vision to secure and propel the future of technology. Mentored by an industry expert with over 25 years of experience in IT and Cybersecurity, NBA TECH is committed to providing cutting-edge solutions to businesses, ensuring they remain at the forefront of the digital age. Our aim is to create a quantum-safe world, where technology not only empowers but also protects.</p>
      <p>⋆At NBA TECH, we pride ourselves on delivering a comprehensive range of services, including software development, web and mobile application development, digital marketing, cybersecurity, IT infrastructure solutions, and more. Our forward-thinking team is dedicated to crafting innovative solutions that meet the evolving demands of the digital landscape.</p>
      <CoreValues />
    </div>
  );
}

export default Main;
