import React from "react";

const buttons = [
  {
    category: "Color",
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
    category: "Photo Editor AI",
  },
  {
    category: "Good By AI",
  },
  {
    category: "Useful Websites",
  },
  {
    category: "Certificates",
  },
  {
    category: "Miscelleneous",
  },
  {
    category: "Boost Frontend Skills",
  },
  {
    category: "Code Editors",
  },
  {
    category: "Enterpreneurs",
  },
  {
    category: "Game",
  },
];

export default function Buttons() {
  return (
    <>
        <div id="button-container">
      {buttons.map((button) => (
          <p id="button-category">{button.category}</p>
          ))}
          </div>
    </>
  );
}
