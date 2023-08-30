gsap.registerPlugin(ScrollTrigger);

import React, {useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Info({ component }) {
  useEffect(() => {
    const animation = document.querySelector('#info-component-data')

    gsap.fromTo(animation.children, 
      {y:"+=100", opacity: 0}, 
      {y:0, opacity: 1, duration: 2.5, scrollTrigger: {
        trigger: animation,
        start: "top 70%",
        toggleActions: "play pause resume reset",
        
      } })
  }, []);


  return (
 
    <div id="info-component">
      {component.map((item, index) => (
        <div id="info-component-data" key={index}>
           <p id="info-text">{item.title}</p>
          <img id="info-img" src={item.imgSrc} alt="My Image" />
        </div>
      ))}
    </div>

  );
}

export default Info;
