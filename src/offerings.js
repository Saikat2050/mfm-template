import React, { useState, useRef } from 'react';
import './offerings.css';
// import fragranceIcon from './fragrances.jpg';
import fragranceIcon from './dark-glass-bottle-with-single-liquid-drop-generative-ai.jpg';
import flavorIcon from './flavors.jpg';
import ingredientIcon from './beautiful-lilac-bouquet-blue-glass-bottle-delicious-chocolates.jpg';

export default function Offerings() {
  // State to track which category is selected
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  // Refs for the card elements to adjust their heights
  const fragCardRef = useRef(null);
  const flavorCardRef = useRef(null);
  const aromaCardRef = useRef(null);
  
    // If there's a selected category, ensure all cards have the same min height
    if (selectedCategory) {
      const cardRefs = [fragCardRef, flavorCardRef, aromaCardRef];
      const activeCardRef = 
        selectedCategory === "Fragrances" ? fragCardRef :
        selectedCategory === "Flavors" ? flavorCardRef : aromaCardRef;
      
      // Reset all heights first
      cardRefs.forEach(ref => {
        if (ref.current) {
          ref.current.style.minHeight = "auto";
        }
      });
      
      // Wait for the DOM to update with the list content
      setTimeout(() => {
        const activeHeight = activeCardRef.current.scrollHeight;
        
        // Set all cards to match the height of the active card
        cardRefs.forEach(ref => {
          if (ref.current && ref !== activeCardRef) {
            ref.current.style.minHeight = `${activeHeight}px`;
          }
        });
      }, 10);
    } else {
      // Reset all heights when no category is selected
      [fragCardRef, flavorCardRef, aromaCardRef].forEach(ref => {
        if (ref.current) {
          ref.current.style.minHeight = "auto";
        }
      });
    }

 // Dummy data for each category
 const dummyData = {
  Fragrances: [
    { id: 1, name: "Royal Oud", description: "A majestic blend of rare oud and sandalwood" },
    { id: 2, name: "Midnight Jasmine", description: "Intoxicating jasmine with hints of vanilla" },
    { id: 3, name: "Amber Dreams", description: "Warm amber with spicy undertones" },
    { id: 4, name: "Ocean Breeze", description: "Fresh marine notes with citrus accents" },
    { id: 5, name: "Velvet Rose", description: "Luxurious rose with damascone highlights" },
  ],
  Flavors: [
    { id: 1, name: "Golden Caramel", description: "Rich buttery caramel with sea salt accents" },
    { id: 2, name: "Exotic Mango", description: "Tropical mango with subtle floral notes" },
    { id: 3, name: "Spiced Vanilla", description: "Madagascar vanilla with warm spices" },
    { id: 4, name: "Wild Berry", description: "Forest berries with natural sweetness" },
    { id: 5, name: "Citrus Symphony", description: "Harmonious blend of citrus zests" },
    { id: 6, name: "Golden Caramel 1", description: "Rich buttery caramel with sea salt accents" },
    { id: 7, name: "Exotic Mango 1", description: "Tropical mango with subtle floral notes" },
    { id: 8, name: "Spiced Vanilla 1", description: "Madagascar vanilla with warm spices" },
    { id: 9, name: "Wild Berry 1", description: "Forest berries with natural sweetness" },
    { id: 10, name: "Citrus Symphony 1", description: "Harmonious blend of citrus zests" },
  ],
  "Aroma Ingredients": [
    { id: 1, name: "Pure Bergamot", description: "Cold-pressed Italian bergamot essence" },
    { id: 2, name: "Cedar Wood Extract", description: "Sustainable sourced cedar with woody depth" },
    { id: 3, name: "Lavender Complex", description: "Multifaceted lavender with herbal notes" },
    { id: 4, name: "Tonka Absolute", description: "Rich, warm tonka bean extract" },
    { id: 5, name: "Vetiver Root", description: "Earthy vetiver with smoky undertones" },
    { id: 6, name: "Vetiver Root 2", description: "Earthy vetiver with smoky undertones" },
  ]
};

  // Handler for clicking on a category
  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null); // Close if already open
    } else {
      setSelectedCategory(category); // Open the clicked category and close others
    }
  };

  return (
    <div className="offerings-page">
      <div className="offerings-header">
        <h1>Our Offerings</h1>
        <p className="offerings-subheading">
          At MFM, we bring together the best of science, art, and sustainability to offer three core
          product lines designed to elevate your sensory world.
        </p>
      </div>

      <div className="offerings-cards">
        {/* Fragrances Card */}
        <div className={`offering-card ${selectedCategory === "Fragrances" ? "expanded" : ""}`} ref={fragCardRef}>
          <div 
            className="offering-clickable"
            onClick={() => handleCategoryClick("Fragrances")}
          >
            <img 
              src={fragranceIcon} 
              alt="Fragrances" 
              className="offering-icon-large" 
            />
            <h2>Fragrances</h2>
            <p>
              Luxurious fragrances designed for fine perfumery, personal care, 
              and home ambiance. Crafted with emotional depth and global 
              trend insights.
            </p>
          </div>
          
          {/* Product list for Fragrances */}
          {selectedCategory === "Fragrances" && (
            <div className="product-list-container">
              <div className="product-list">
                <h3>Our Fragrance Collection</h3>
                {dummyData.Fragrances.map(product => (
                  <div key={product.id} className="product-item">
                    <div className="product-name">{product.name}</div>
                    <div className="product-description">{product.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Flavors Card */}
        <div className={`offering-card ${selectedCategory === "Flavors" ? "expanded" : ""}`} ref={flavorCardRef}>
          <div 
            className="offering-clickable"
            onClick={() => handleCategoryClick("Flavors")}
          >
            <img 
              src={flavorIcon} 
              alt="Flavors" 
              className="offering-icon-large" 
            />
            <h2>Flavors</h2>
            <p>
              Flavor innovations that enhance the everyday food and beverage 
              experience — from nostalgic favorites to bold new blends.
            </p>
          </div>
          
          {/* Product list for Flavors */}
          {selectedCategory === "Flavors" && (
            <div className="product-list-container">
              <div className="product-list">
                <h3>Our Flavor Collection</h3>
                {dummyData.Flavors.map(product => (
                  <div key={product.id} className="product-item">
                    <div className="product-name">{product.name}</div>
                    <div className="product-description">{product.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Aroma Ingredients Card */}
        <div className={`offering-card ${selectedCategory === "Aroma Ingredients" ? "expanded" : ""}`} ref={aromaCardRef}>
          <div 
            className="offering-clickable"
            onClick={() => handleCategoryClick("Aroma Ingredients")}
          >
            <img 
              src={ingredientIcon} 
              alt="Aroma Ingredients" 
              className="offering-icon-large" 
            />
            <h2>Aroma Ingredients</h2>
            <p>
              A comprehensive range of aroma molecules — both natural and 
              synthetic — tailored for performance, stability, and sensory 
              brilliance.
            </p>
          </div>
          
          {/* Product list for Aroma Ingredients */}
          {selectedCategory === "Aroma Ingredients" && (
            <div className="product-list-container">
              <div className="product-list">
                <h3>Our Aroma Ingredients Collection</h3>
                {dummyData["Aroma Ingredients"].map(product => (
                  <div key={product.id} className="product-item">
                    <div className="product-name">{product.name}</div>
                    <div className="product-description">{product.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="custom-solutions-section">
        <h2>Custom Solutions</h2>
        <p className="custom-solutions-text">
          Whether you need a signature fragrance for your brand or a breakthrough flavor solution, 
          our team collaborates with clients to develop customized formulations that align with your 
          vision and goals.
        </p>
      </div>
    </div>
  );
}