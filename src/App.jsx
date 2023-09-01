import React from "react";
import Hero from "./components/Hero";
// import Welcome from "./components/Welcome";
import CardContainer from "./components/CardsContainer";

import Footer from "./components/Footer";
import Buttons from "./components/Buttons";
import Menu from "./components/Menu";
import Info from "./components/Info";
import { component } from './components/Data';
// import Pin from "./components/Pin";
// import Box from "./components/Box";
function App() {
  return (
    <>
      <Menu/>
      {/* <Welcome/> */}
      <Hero />
      {/* <Pin /> */}
      <Buttons />
      {/* <Box /> */}
      <Info component={component}/>
      <CardContainer />
      <Footer />
    </>
  );
}

export default App;
