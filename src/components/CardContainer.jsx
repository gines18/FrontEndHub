import React from "react";
import "./Styles.css";
import Cards from "./Cards.jsx";

import { motion } from "framer-motion";
import { colors, fonts, background, photoEditor } from "./Data";

const category = [
  {
    title: "Colors",
    cardText: <Cards photoData={colors} />,
  },
  {
    title: "Fonts",
    cardText: <Cards photoData={fonts} />,
  },
  {
    title: "Background",
    cardText: <Cards photoData={background} />,
  },
  {
    title: "Photo Editor",
    cardText: <Cards photoData={photoEditor} />,
  },
];

const CardContainer = () => {
  return (
    <motion.div
      className="card-container-title"
      initial={{ y: 2000 }}
      animate={{ y: 0 }}
      transition={{
        duration: 1,
        delay: 0.5,
      }}
    >
      {category.map((card, index) => (
        <motion.div key={index} className="card-item">
          <div className="title">
            <h1>{card.title}</h1>
          </div>
          <h1>{card.cardText}</h1>
         
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CardContainer;
