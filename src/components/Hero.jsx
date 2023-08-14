import React from "react";
import "./Styles.css";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [ref, inView] = useInView();

  const variants = {
    visible: { 
      opacity: 1,
       y: 0,
      transition: { duration: 2,
      borderRadius: 5
      }
      },
    hidden: { opacity: 0, y: 20 },
    
  };

  return (
    <header>
      <motion.div
        className="hero"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
      >
        <div className="welcome">
          <h1>Welcome to Our Website</h1>
          <p>Your go-to destination for amazing content.</p>
        </div>
        <div className="image"></div>
      </motion.div>
    </header>
  );
};

export default Hero;
