import React from "react";
import "./Styles.css";
import Colors from "./Colors.jsx";
import Background from "./Background.jsx";
import Fonts from "./Fonts";
import PhotoEditor from "./PhotoEditor";
import { motion } from "framer-motion"


const title = [
  {
    title: "Colors",
    cardText: <Colors />,
  },
  {
    title: "Background",
    cardText: <Background />,
  },
  {
    title: "Fonts",
    cardText: <Fonts />,
  },
  {
    title: "Photo Editor",
    cardText: <PhotoEditor />,
  },
];

const CardContainer = () => {
  return (
    <motion.div className="card-container-title"
    initial = {{ y: 2000}}
    animate = {{y: 0}}
    transition={{
      duration: 1,
     delay: 0.5
    }}


    >
      {title.map((card, index) => (
        <div key={index} className="card-item">
          <div className="title">
            <h1>{card.title}</h1>
          </div>
          <h1>{card.cardText}</h1>
          <div className="cards"></div>
        </div>
      ))}
    </motion.div>
  );
};

export default CardContainer;
