import React from 'react';
import './Home.css';

const Home = () => {
  const services = [
    { title: 'Manage IT services', 
      image: '/images/one.jpg', 
      description: 'We offer managed IT services for businesses.' 
    },
    { title: 'UI/UX Design Services', 
      image: '/images/uiux.jpeg', 
      description: 'Our team provides UI/UX services to enhance your applications.' 
    },
    { title: 'Digital experience', 
      image: '/images/digital.jpeg', 
      description: 'We deliver top-tier digital experiences for your customers.' 
    }
  ];

  return (
    <div className="cards-container-row">
      {services.map((service, index) => (
        <div className="card-square" key={index}>
          <div className="card-image-square">
            <img src={service.image} alt={service.title} className="card-image" />
          </div>
          <div className="card-content-square">
            <h3 className="card-title">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        </div>
      ))}


    </div>
  );
};

export default Home;

