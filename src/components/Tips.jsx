import React from "react";
import "./Styles.css";
import { motion } from "framer-motion";

const Tips = () => {
  return (
    <header>
    <motion.div
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
    >
      <div className="image"></div>
      <div className="welcome">
        <h1>Welcome to Our Website</h1>
        <p>Your go-to destination for amazing content.</p>
      </div>
    </motion.div>
    </header>
  );
};

export default Tips;
