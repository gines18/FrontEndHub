import React, { useLayoutEffect, useRef } from "react";
import { scrollToSection } from "./Helpers";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  {
    category: "Make Videos",
  },
  {
    category: "YouTube Programming",
  },
  {
    category: "Free Stanford Certificates",
  },
  {
    category: "Free AI CV Builder",
  },
  {
    category: "Free Azure Certificates",
  },
  {
    category: "Linkedin Courses",
  },
  {
    category: "Internships",
  },
];

export default function Buttons() {
  const scrollTriggerRef = useRef(null);

  useLayoutEffect(() => {
    scrollTriggerRef.current = ScrollTrigger.create({
      trigger: ".gallery",
      start: "top top",
      end: "bottom bottom",
      pin: ".right",
    });

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
    };
  }, []);

  const handleButtonClick = (category) => {
    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.refresh();
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
