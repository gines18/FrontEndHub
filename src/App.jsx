import React from "react";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import CardContainer from "./components/CardsContainer";
import NavbarSlide from "./components/NavbarSlide";

function App() {
  return (
    <>
      <NavbarSlide />
      <Welcome/>
      <Hero />
      <CardContainer />
    </>
  );
}

export default App;
