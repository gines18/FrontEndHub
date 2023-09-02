import React, { useLayoutEffect, useState } from "react";
import { scrollToSection } from "./Helpers";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  const [scrollTriggerInstance, setScrollTriggerInstance] = useState(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      setScrollTriggerInstance(
        ScrollTrigger.create({
          trigger: ".gallery",
          start: "top top",
          end: "bottom bottom",
          pin: ".right",
          markers: true,
          onEnter: () => {
            if (scrollTriggerInstance) {
              scrollTriggerInstance.restart();
            }
          },
        })
      );
    });

    return () => {
      ctx.revert();
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
    };
  }, []);

  const handleButtonClick = (category) => {
    if (scrollTriggerInstance) {
      scrollTriggerInstance.kill();
    }
    scrollToSection(category);
  };

  return (
    <>
      <div id="button-container">
        {buttons.map((button, index) => (
          <p
            key={index}
            onClick={() => handleButtonClick(button.category)}
            id="button-category"
          >
            {button.category}
          </p>
        ))}
      </div>
    </>
  );
}
