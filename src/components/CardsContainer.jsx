import React from "react";
import "./Styles.css";
import Cards from "./Cards.jsx";


import { colors, fonts, background, photoEditor } from "./Data";

const category = [
  {
    title: "Colors",
    cardText: <Cards cardData={colors} />,
  },
  {
    title: "Fonts",
    cardText: <Cards cardData={fonts} />,
  },
  {
    title: "Background",
    cardText: <Cards cardData={background} />,
  },
  {
    title: "Photo Editor",
    cardText: <Cards cardData={photoEditor} />,
  },
];

const CardContainer = () => {
  return (
    <div
      className="card-container-title"
  initial={{ opacity: 0 }}
    >
      {category.map((card, index) => (
        <div key={index} className="card-item">
          <div className="title">
            <h1>{card.title}</h1>
          </div>
          <h1>{card.cardText}</h1>
         
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
