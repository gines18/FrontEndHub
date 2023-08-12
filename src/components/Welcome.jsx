import React from 'react'
import { motion } from "framer-motion";

function Welcome() {
  return (
    <div id="welcome-container">



    <div id='welcome-text'>
      
      
  <motion.p
        initial={{ opacity: 0, x: 1000 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
  
  
  >Color</motion.p>

  <motion.p
   initial={{ opacity: 0, x: 1000 }}
   animate={{ opacity: 1, x: 0 }}
   transition={{ duration: 2 }}

  
  
  >Font</motion.p>

  <motion.p
    initial={{ opacity: 0, x: 1000 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 3 }}
  
  
  >Background</motion.p>
      
      
      
      </div>




    <div id='welcome-img'>
        <motion.img src="./color3.png" alt="" 
        initial={{ opacity: 0, x: 1000 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}

        />
        <motion.img src="color4.png" alt="" 
             initial={{ opacity: 0, x: 1000 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 2 }}
        
        />
        <motion.img src="./color5.png" alt="" 
            initial={{ opacity: 0, x: 1000 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 3}}
        
        />
    </div>
    </div>
  )
}

export default Welcome