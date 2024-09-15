import React, { useState } from 'react';
import './Footer.css';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(!showForm); // Toggle form visibility
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-logo-section">
          <img src="/logo.jpg" alt="NBA Tech Solutions Logo" className="footer-logo" />
        </div>

        {/* Links Section */}
        <div className="footer-links-section">
          <h4>Links</h4>
          <ul>
            <li><a href="/about">About us</a></li>
            <li><a href="/team">Meet our team</a></li>
            <li><a href="/projects">Our projects</a></li>
            <li><a href="/contact">Contacts</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact-section">
          <h4>Contact</h4>
          <p><a href="tel:+91 9170364639">+91 9170364639</a></p>
          <p><a href="mailto:nbatechofficial@gmail.com">Nbatech467@gmail.com </a></p>
          <p>Address - C 403 Royal Estate Apartment 7 B Laplace Lucknow-226001</p>
          <div className="footer-social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Button to Show Form */}
      <div className="btn">
        <button onClick={handleButtonClick}>Connect With Us</button>
      </div>

      {/* Form that shows when button is clicked */}
      {showForm && (
        <div className="footer-contact-form">
          <form className="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="contact">Contact No:</label>
            <input type="tel" id="contact" name="contact"required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" required />

            <button type="submit">Submit</button>
          </form>
        </div>
      )}

      <div className="footer-copyright">
        © All Copyright 2024 by NBA Tech Solutions
      </div>
    </footer>
  );
};

export default Footer;
