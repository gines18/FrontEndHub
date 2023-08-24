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
    category: "AI tools",
  },
  {
    category: "Useful websites",
  },
  {
    category: "Free Google certificates",
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
