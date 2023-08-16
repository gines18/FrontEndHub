import React from "react";
import "./Styles.css";
import Cards from "./Cards.jsx";

import Tips from "./Tips";


import { colors, fonts, background, photoEditor, photoEditorAI, goodByAI, usefulWebsites, certificates, miscellaneous } from "./Data";

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
  {
    title: "AI Photo Editor",
    cardText: <Cards cardData={photoEditorAI} />,
  },
  {
    title: "AI tools",
    cardText: <Cards cardData={goodByAI} />,
  },
  {
    title: "Useful websites",
    cardText: <Cards cardData={usefulWebsites} />,
  },
  {
    title: "Free Google certificates",
    cardText: <Cards cardData={certificates} />,
  },
  {
    title: "Miscellaneous",
    cardText: <Cards cardData={miscellaneous} />,
  },
];

const CardContainer = () => {
  return (
    <>
    
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

            {card.title === "Fonts" && <Tips />}
          </div>
        ))}
      </div>
    </>
  );
};

export default CardContainer;
