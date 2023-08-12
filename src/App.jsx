import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import CardContainer from "./components/CardsContainer";

function App() {
  return (
    <>
      <Navbar />
      <Welcome/>
      <Hero />
      <CardContainer />
    </>
  );
}

export default App;
