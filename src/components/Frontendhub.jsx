import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Frontendhub() {

  useLayoutEffect(() => {
    const animation = document.getElementById("frontend");
    let ctx = gsap.context(() => {
      gsap.fromTo(
        animation.children,
        { y: "+=50", opacity: 0 },
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
    <div id='frontend'>
        <p className='gradient-text'>Frontendhub</p>
        </div>
  )
}

export default Frontendhub