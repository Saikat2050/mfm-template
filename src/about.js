import React from 'react';
import './about.css'; // You'll need to create this CSS file
import image from './indian-men-resting-by-bonfire-with-their-camel.jpg'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Modern Fragrant Merchants</h1>
      </div>
      
      <div className="about-intro">
        <p className="about-description">
          Modern Fragrant Merchants (MFM) is a legacy of excellence in fragrance and flavor innovation. For decades, 
          we've brought artistry and science together to deliver multi-sensory experiences that touch lives across the 
          globe.
        </p>
      </div>
      
      <div className="about-content">
        <div className="about-image-container">
          <img src={image} alt="About Us" className="about-image" />
        </div>
        
        <div className="about-story">
          <h2>Our Story</h2>
          <p>
            Founded on a passion for fine aromas and innovative formulation, MFM has grown into one of the most 
            respected names in the industry. With deep roots in tradition and eyes firmly set on the future, we craft 
            products that resonate with emotion and purpose.
          </p>
          <p>
            From humble beginnings to global partnerships, our journey is fueled by quality, creativity, and a commitment 
            to excellence in everything we do.
          </p>
        </div>
      </div>
      
      <div className="values-section">
        <h2>What We Stand For</h2>
        <ul className="values-list">
          <li><span className="value-icon">🌱</span> Sustainability and ethical sourcing practices</li>
          <li><span className="value-icon">🔬</span> Cutting-edge innovation with a human touch</li>
          <li><span className="value-icon">🤝</span> Long-term partnerships with clients and communities</li>
          <li><span className="value-icon">👃</span> Sensory craftsmanship driven by passion and precision</li>
        </ul>
      </div>
    </div>
  );
};

export default About;