import React from "react";
import "./Styles.css"; 
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className="hero">
      <div className="welcome">
        <h1>Welcome to Our Website</h1>
        <p>Your go-to destination for amazing content.</p>
      </div>
      <motion.div className="image"
      initial= {{scale: 0}}
      animate={{scale: 1}}
      transition={{
        duration: 1.5
      }}
      
      
      ></motion.div>
    </div>
  );
};

export default Hero;
