import React, { useRef } from "react"; // Import useRef
import "./Styles.css";
import Cards from "./Cards.jsx";
import Tips from "./Tips";


import { colors, fonts, background, photoEditor, photoEditorAI, goodByAI, usefulWebsites, certificates, miscellaneous, boostFrontEndSkills, codeEditors, entrepreneurs, game,mit, microsoft } from "./Data";

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
    title: "AI Tools",
    cardText: <Cards cardData={goodByAI} />,
  },
  {
    title: "Useful Websites",
    cardText: <Cards cardData={usefulWebsites} />,
  },
  {
    title: "Free Google Certificates",
    cardText: <Cards cardData={certificates} />,
  },
  {
    title: "Miscellaneous",
    cardText: <Cards cardData={miscellaneous} />,
  },
  {
    title: "Boost Your Frontend Skills",
    cardText: <Cards cardData={boostFrontEndSkills} />,
  },
  {
    title: "Code Editors",
    cardText: <Cards cardData={codeEditors} />,
  },
  {
    title: "For Entrepreneurs",
    cardText: <Cards cardData={entrepreneurs} />,
  },
  {
    title: "Coding Games",
    cardText: <Cards cardData={game} />,
  },
  {
    title: "MIT University",
    cardText: <Cards cardData={mit} />,
  },
  {
    title: "Free Microsoft Certificates",
    cardText: <Cards cardData={microsoft} />,
  },
];



const CardContainer = () => {
  return (
    <>
    
    <div
      className="card-container-title"
    >
        {category.map((card, index) => (
        
          <div key={index} className="card-item" id={card.title}>
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
