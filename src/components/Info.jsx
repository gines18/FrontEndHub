import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



 const component = [
  {
    title: <span> <span className="gradient-text">Crafting Engaging User Experiences  <br /> Through Frontend Web Development</span></span>,
    imgSrc: "./ilu3.jpeg",
  },
]

function Info() {
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
            // markers: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div id="info-component">
      {component.map((item, index) => (
        <div key={index}>
          <p id="nice-text">{item.title}</p>
          <img id="cool-img" src={item.imgSrc} alt="My Image" />
        </div>
      ))}
    </div>
  );
}

export default Info;
