import React from "react";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import CardContainer from "./components/CardsContainer";
import NavbarSlide from "./components/NavbarSlide";
import Footer from "./components/Footer";
import Buttons from "./components/Buttons";


function App() {
  return (
    <>
      <NavbarSlide />
      <Buttons />
      <Welcome/>
      <Hero />
      <CardContainer />
      <Footer />
    </>
  );
}

export default App;
