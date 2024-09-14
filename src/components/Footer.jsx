import React from 'react';
import './Footer.css';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
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
          <p><a href="tel:+919344269970">+91 9344269970</a></p>
          <p><a href="mailto:nbatechofficial@gmail.com">nbatechofficial@gmail.com</a></p>
          <p>Coimbatore, Tamil Nadu</p>
          <div className="footer-social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        © All Copyright 2024 by NBA Tech Solutions
      </div>
    </footer>
  );
};

export default Footer;
