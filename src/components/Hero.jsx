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
      transition: { duration: 1,
      borderRadius: 2,
      delay: 1
      }
      },
    hidden: { opacity: 0, y: 10 },
    
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
        <div id="about" className="welcome">
          <h1>Welcome to Our Website</h1>
          <p>Your go-to destination for amazing content.</p>
        </div>
        <div className="image"></div>
      </motion.div>
    </header>
  );
};

export default Hero;
