import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const singleImage = '/new.png'; 

  return (
    <>
      <section className='navbar-section'>
        <header className='header flex'>
          <div className='logoDiv'>
            <img src='/logo.jpg' alt='logo' />
          </div>
          <nav className='nav-links'>
            <ul>
              <li><a href="#home">Home</a></li>
              <li className='dropdown'>
                <a href="#services">Services</a>
                <ul>
                  <li><a href="#product development">Product Development</a></li>
                  <li><a href="#ui ux development">UI/UX Development</a></li>
                  <li><a href="#software development">Software Development</a></li>
                  <li><a href="#web development">Web Development</a></li>
                  <li><a href="#mobile application">Mobile Application</a></li>
                  <li><a href="#cloud solutions">Cloud Solutions</a></li>
                  <li><a href="#artificial intelligence">Artificial Intelligence</a></li>
                  <li><a href="#it consulting">IT Consulting</a></li>
                  <li><a href="#database management">Database Management</a></li>
                  <li><a href="#erp system">ERP System</a></li>
                </ul>
              </li>
              <li><a href="#about">About</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>
      </section>

<section className='main-content'>
<div className='paragraph-section'>
          <p>Empowering a Quantum Safe Future
          <br></br> 
          <span>With Advanced IT Solutions</span></p>
        </div>
<div className='image-section'>
        <div className='image-container'>
          <img src={singleImage} alt='single-slide' className='fade-in' />
        </div>
      </div>
</section>
    </>
  );
};

export default Navbar;
