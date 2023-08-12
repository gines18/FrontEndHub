import React, { useState } from "react";

function NavbarSlide() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <>
      {isVisible && (
        <div id="nav-slide">
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      )}
      <div id="nav-slide-button" onClick={toggleVisibility}>
    { !isVisible ? <button style={{ '--clr': '#39FF14' }}><span>Menu</span><i></i></button> : <button style={{ '--clr': '#39FF14' }}><span>Hide Menu</span><i></i></button>}
 
      </div>
    </>
  );
}

export default NavbarSlide;
