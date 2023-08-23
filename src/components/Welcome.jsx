import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Welcome() {
  const [color, setColor] = useState("black");

  useEffect(() => {
    setTimeout(() => {
      const colors = ["#fdf0d5", "#780000", "#003049", "#c1121f", "#669bbc"];
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
          id="font"
          className="framer-motion-element"
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
         <span id="home">Font</span> 
        </motion.p>

        <motion.p
          id="node-js"
          className="framer-motion-element"
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 3 }}
        >
          Node.js
        </motion.p>

        <motion.p
          id="html"
          className="framer-motion-element"
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 5 }}
        >
          HTML
        </motion.p>

        <motion.p
          id="css"
          className="framer-motion-element"
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 7 }}
        >
          CSS
        </motion.p>

        <motion.p
          id="FrontEnd"
          className="framer-motion-element"
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 6 }}
        >
          FrontEnd
        </motion.p>

        <motion.p
          id="photoeditor"
          className="framer-motion-element"
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 4 }}
        >
          Photo Editor
        </motion.p>

        <motion.p
          id="vscode"
          className="framer-motion-element"
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Visual Studio Code
        </motion.p>

        <motion.p
          style={{ color }}
          id="color"
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          Color
        </motion.p>

        <motion.p
          id="background"
          className="background-welcome"
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
        >
          Background
        </motion.p>

        <motion.p
          id="background-react"
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
        >
          React.js
        </motion.p>

        <motion.p
          id="javascript"
          initial={{  x: 1000 }}
          animate={{  x: 0 }}
          transition={{ duration: 4 }}
        >
          JavaScript
        </motion.p>
      </div>
    </div>
  );
}

export default Welcome;
