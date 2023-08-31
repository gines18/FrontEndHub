import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Box() {
  useLayoutEffect(() => {
    gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".wrapper",
        start: "top top",

        endTrigger: ".third-box",
        end: "bottom bottom",
        pin: ".box",
        markers: true,
      });
    });
  }, []);

  return (
    <>
      <div className="spacer">Spacer</div>
      <div className="wrapper">
        <div className="text-box">
          <div>one</div>
          <div className="box">
            <div>Box</div>
          </div>
        </div>

        <div className="second-box">
          <div>two</div>
          <div></div>
        </div>

        <div className="third-box">
          <div>three</div>
          <div></div>
        </div>
      </div>

      <div className="spacer">Spacer</div>
    </>
  );
}

export default Box;
