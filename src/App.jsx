import React from "react";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import CardContainer from "./components/CardsContainer";
import NavbarSlide from "./components/NavbarSlide";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <NavbarSlide />
      <Welcome/>
      <Hero />
      <CardContainer />
      <Footer />
    </>
  );
}

export default App;
