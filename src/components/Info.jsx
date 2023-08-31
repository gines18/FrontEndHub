import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Info({ component }) {


useLayoutEffect(() => {
    const animation = document.getElementById("info-component");
    let ctx = gsap.context(() => {
    gsap.fromTo(
      animation.children,
      { y: "+=100", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2.5,
        scrollTrigger: {
          trigger: animation,
          start: "top 70%",
        },
      }
    );
  });
    return () => ctx.revert();
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
