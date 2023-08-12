import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";

function Welcome() {



const [color, setColor] = useState('black');

useEffect(() => {

setTimeout(() => {

  const colors = ['#fdf0d5', '#780000', "#003049", '#c1121f', '#669bbc'];
  let i = 0;
  
  const interval = setInterval(() => {
    setColor(colors[i]);
    i = (i + 1) % colors.length; 
  }, 1000);

  return () => clearInterval(interval);
}, 1500);

}, []);



  return (
    <div id="welcome-container">
      <div id="welcome-text">

        <motion.p
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Font
        </motion.p>

        <motion.p
        style={{color}}
        id="color"
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          Color
        </motion.p>

        <motion.p
        id="background"
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
        >
          Background
        </motion.p>
      </div>

      <div id="welcome-img">
        <motion.img
          src="./fonts_welcome.png"
          alt=""
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src="colors_welcome.png"
          alt=""
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        />
        <motion.img
          src="./background_welcome.png"
          alt=""
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
        />
      </div>
    </div>
  );
}

export default Welcome;
