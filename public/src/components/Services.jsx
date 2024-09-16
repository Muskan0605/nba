import React from 'react';
import './Services.css';
import { FcCustomerSupport } from "react-icons/fc";

const services = [
  {
    name: 'Software Development',
    imageUrl: '/images/software.jpeg',
  },
  {
    name: 'Cyber Security Services',
    imageUrl: '/images/cyber.jpeg',
  },
  {
    name: 'IT Infrastructure & Services',
    imageUrl: '/images/itinfra.png',
  },
  {
    name: 'Digital Marketing & Communication',
    imageUrl: '/images/digitalmarketing.jpeg',
  },
  {
    name: 'HR Services & Training',
    imageUrl: '/images/hr.jpeg',
  },
];

const Services = () => {
  return (
    <div className="services">
      <h3>
        Services we are providing to <br />
        <span>Our Customers <FcCustomerSupport /></span>
      </h3>
      <div className="services-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.imageUrl} alt={service.name} />
            <h4>{service.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
