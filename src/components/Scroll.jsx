import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Styles.css";

gsap.registerPlugin(ScrollTrigger);

function Box() {


  return (
    <>
      <div className="gallery">
        <div className="left">
          <div className="detailswrapper">
            <div className="details">
              <h1>Colors</h1>
            </div>
            <div className="details">
              <h1>Fonts</h1>
            </div>
            <div className="details">
              <h1>Background</h1>
            </div>
          </div>
        </div>
        <div className="right">
          <div class="photos"></div>
        </div>
      </div>
    </>
  );
}

export default Box;
