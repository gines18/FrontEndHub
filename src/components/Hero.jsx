import React from "react";
import "./Styles.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
    >
      <div className="welcome">
        <h1>Welcome to Our Website</h1>
        <p>Your go-to destination for amazing content.</p>
      </div>
      <div className="image"></div>
    </motion.div>
  );
};

export default Hero;
