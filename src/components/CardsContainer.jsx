import React from "react"; // Import useRef
import "./Styles.css";
import Cards from "./Cards.jsx";
import Tips from "./Tips";
import {
  colors,
  fonts,
  background,
  photoEditor,
  photoEditorAI,
  goodByAI,
  usefulWebsites,
  certificates,
  miscellaneous,
  boostFrontEndSkills,
  codeEditors,
  entrepreneurs,
  game,
  mit,
  microsoft,
  job,
  videoWebsites,
  programmingChannels,
  stanford,
  resumeBuilders,
  azureCertifications,
  work,
  fontsUsage
} from "./Data";

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
  {
    title: "Get Remote Job",
    cardText: <Cards cardData={job} />,
  },
  {
    title: "Make Videos",
    cardText: <Cards cardData={videoWebsites} />,
  },
  {
    title: "YouTube Programming",
    cardText: <Cards cardData={programmingChannels} />,
  },
  {
    title: "Free Stanford Certificates",
    cardText: <Cards cardData={stanford} />,
  },
  {
    title: "Free AI CV Builder",
    cardText: <Cards cardData={resumeBuilders} />,
  },
  {
    title: "Free Azure Certificates",
    cardText: <Cards cardData={azureCertifications} />,
  },
 
];

const CardContainer = () => {
  return (
    <div className="card-container-title">
      {category.map((card, index) => (
        <div key={card.title} className="card-item" id={card.title}>
          <div className="title">
            <h1>{card.title}</h1>
          </div>
          <h1>{card.cardText}</h1>

          {card.title === "Fonts" ? <Tips tips={fontsUsage} /> : null}
          {card.title === "Free Microsoft Certificates" && <Tips tips={work} />}
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
