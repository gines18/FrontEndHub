import React from "react";
import "./Hero.css"; // Create a CSS file for styling

const Hero = () => {
  return (
    <div className="hero">
      <div className="welcome">
        <h1>Welcome to Our Website</h1>
        <p>Your go-to destination for amazing content.</p>
      </div>
      <div className="image"></div>
    </div>
  );
};

export default Hero;
