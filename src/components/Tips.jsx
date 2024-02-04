import React from "react";
import "./Styles.css";
import { motion } from "framer-motion";

const Tips = ({ tips }) => {
  return (
    <header className="header-tips">
      <motion.div
        className="hero-tips"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
        }}
      >
        <div
          className="image-tips"
          style={{ backgroundImage: `url(${tips[0].imgUrl})` }}
        ></div>

        <div className="welcome-tips">
          {tips.map((tip, index) => (
            <div key={index}>
              <h1>{tip.header}</h1>
              <p>{tip.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Tips;
