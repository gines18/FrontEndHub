import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Box() {

   
        useEffect(() => {
          ScrollTrigger.create({
            trigger: ".text-box",
            start: "top top",
           endTrigger: ".text-box:nth-child(3)",
            pin: ".box",
            markers: true
          });
        }, []);

  return (
    <>
      <div className="spacer">Spacer</div>
      <div className="text-box">
        <div>one</div>
        <div className="box">
          <div>Box</div>
        </div>
      </div>

      <div className="text-box">
        <div>two</div>
        <div></div>
      </div>

      <div className="text-box">
        <div>three</div>
        <div></div>
      </div>

      <div className="spacer">Spacer</div>
    </>
  );
}

export default Box;
