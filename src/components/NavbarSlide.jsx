import React, { useState } from "react";

function NavbarSlide() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() {
    setIsVisible(!isVisible);
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      toggleVisibility(); 
    }
  };



  return (
    <>
        {isVisible && (
        <div id="nav-slide">
          <p onClick={() => scrollToSection("home")}>Home</p>
          <p onClick={() => scrollToSection("about")}>About</p>
          <p onClick={() => scrollToSection("contact")}>Contact</p>
        </div>
      )}
      <div id="button">
      
      <div id="nav-slide-button" onClick={toggleVisibility}>
    { !isVisible ? <button style={{ '--clr': '#39FF14' }}><span>Menu</span><i></i></button> : <button style={{ '--clr': '#39FF14' }}><span>Hide Menu</span><i></i></button>}
 
      </div>
      </div>
    </>
  );
}

export default NavbarSlide;
