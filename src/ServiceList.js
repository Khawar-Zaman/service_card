// src/ServiceList.js

import React from 'react';
import ServiceCard from './ServiceCard';
import './ServiceList.css';

const ServiceList = () => {
  return (
    <div className="service-list-container">
      <ServiceCard 
        title="Web Design" 
        description="We create stunning, user-friendly websites with modern designs and web designs." 
      />
      <ServiceCard 
        title="App Development" 
        description="Building powerful and scalable mobile applications for iOS and Android." 
      />
      <ServiceCard 
        title="SEO & Marketing" 
        description="Driving traffic and boosting your online presence with expert strategies." 
      />
      <ServiceCard 
        title="Content Creation" 
        description="Crafting engaging and relevant content to connect with your audience." 
      />
    </div>
  );
};

export default ServiceList;