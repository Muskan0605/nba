import React from 'react';
import './Services.css';
import { FcCustomerSupport } from "react-icons/fc";

const services = [
  {
    name: 'Product Development',
    imageUrl: '/images/product.png',
  },
  {
    name: 'Cloud Solutions',
    imageUrl: '/images/cloud.jpeg',
  },
  {
    name: 'Artificial Intelligence',
    imageUrl: '/images/ai.jpeg',
  },
  {
    name: 'Digital Marketing',
    imageUrl: '/images/digitalmarketing.jpeg',
  },
  {
    name: 'UI UX Designing',
    imageUrl: '/images/uiuxde.jpeg',
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
