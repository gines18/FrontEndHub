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
  {
    category: "Earn Money",
  },
  {
    category: "Oxford (OHSC) Certificates",
  },
  {
    category: "AWS Cloude",
  },
  {
    category: "Books"
  }
];

export default function Buttons() {
  const scrollTriggerRef = useRef(null);

  useLayoutEffect(() => {
    scrollTriggerRef.current = ScrollTrigger.create({
    });

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
    };
  }, []);

function closeButtonsOnMobile() {
  const closeButtons = document.querySelector('.menu_left_mobile');
  closeButtons.style.display = 'none'
}


  const handleButtonClick = (category) => {
    scrollToSection(category);
    closeButtonsOnMobile();
    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.refresh();
    }
   
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
