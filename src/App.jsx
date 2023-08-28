import React from "react";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import CardContainer from "./components/CardsContainer";

import Footer from "./components/Footer";
import Buttons from "./components/Buttons";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Menu/>
      <Welcome/>
      <Hero />
      <Buttons />
      <CardContainer />
      <Footer />
    </>
  );
}

export default App;
