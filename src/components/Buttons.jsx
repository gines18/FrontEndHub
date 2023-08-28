import React from "react";
import { scrollToSection } from "./Helpers";

const buttons = [
  {
    category: "Colors",
  },
  {
    category: "Fonts",
  },
  {
    category: "Background",
  },
  {
    category: "Photo Editor",
  },
  {
    category: "AI Photo Editor",
  },
  {
    category: "AI Tools",
  },
  {
    category: "Useful Websites",
  },
  {
    category: "Free Google Certificates",
  },
  {
    category: "Miscellaneous",
  },
  {
    category: "Boost Your Frontend Skills",
  },
  {
    category: "Code Editors",
  },
  {
    category: "For Entrepreneurs",
  },
  {
    category: "Coding Games",
  },
  {
    category: "MIT University",
  },
  {
    category: "Free Microsoft Certificates",
  },
  {
    category: "Get Remote Job",
  },
];

export default function Buttons() {
  return (
    <>
  
        <div id="button-container">
      {buttons.map((button, index) => (
        
          <p 
          key={index}
          onClick={() => scrollToSection(button.category)} id="button-category">{button.category}</p>
          ))}
          </div>
    </>
  );
}
