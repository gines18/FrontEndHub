import React from "react";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import CardContainer from "./components/CardsContainer";

import Footer from "./components/Footer";
import Buttons from "./components/Buttons";


function App() {
  return (
    <>

      <Welcome/>
      <Hero />
      <Buttons />
      <CardContainer />
      <Footer />
    </>
  );
}

export default App;
