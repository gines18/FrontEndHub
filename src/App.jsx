import React from "react";
import Hero from "./components/Hero";
// import Welcome from "./components/Welcome";
import CardContainer from "./components/CardsContainer";
import Footer from "./components/Footer";
import Buttons from "./components/Buttons";
import Menu from "./components/Menu";
import Info from "./components/Info";
import { component } from "./components/Data";
// import Box from './components/Scroll';
import Frontendhub from './components/Frontendhub'
// import Popup from "./components/Popup";
import News from './components/News'

function App() {
  return (
    <>
      <Menu/>
      <News />
      {/* <Popup /> */}
      {/* <Welcome/> */}
      <Hero />
      <Buttons />
      <Info component={component} />
      {/* <Box/> */}
      <CardContainer />
      <Frontendhub />
      <Footer />
    </>
  );
}

export default App;
