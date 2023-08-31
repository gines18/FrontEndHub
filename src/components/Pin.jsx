import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // Make sure you have the correct import path

gsap.registerPlugin(ScrollTrigger);

function Pin() {
  useEffect(() => {
    const imageContainer = document.querySelector('.pin-container');
    const image = imageContainer.querySelector('img');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageContainer,
        start: 'top top',
        end: 'bottom bottom',
        pin: true,
        pinSpacing: false
      }
    });

    tl.fromTo(image, { opacity: 0, scale: 1.5 }, { opacity: 1, scale: 1, duration: 1 });
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div className="pin-container">
      <img className='pin' src="./beach.jpeg" alt="" />
    </div>
  );
}

export default Pin;
