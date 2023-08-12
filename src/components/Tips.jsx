import React from "react";
import "./Styles.css";
import { motion } from "framer-motion";

const Tips = () => {
  return (
    <header>
    <motion.div
      className="hero-tips"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
    >
      <div className="image-tips"></div>
      <div className="welcome-tips">
        <h1>Fonts</h1>
        <p>Remember, fonts play a crucial role in shaping your website's visual appeal and user experience. By carefully selecting and implementing fonts, you can create a design that not only looks great but also enhances the overall usability of your site.




</p>
      </div>
      
    </motion.div>
    </header>
  );
};

export default Tips;
