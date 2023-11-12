import React from "react";
import Hero from "./components/Hero";
import CardContainer from "./components/CardsContainer";
import Footer from "./components/Footer";
import Buttons from "./components/Buttons";
import Menu from "./components/Menu";
import Info from "./components/Info";
import { component } from "./components/Data";
import Frontendhub from "./components/Frontendhub";
import News from "./components/News";
import Logo from "./components/Logo";
import Content from "./components/Content";

function App() {
  return (
<>
  <Menu />
  <Content />
  <Hero />
  <CardContainer>
    <Buttons />
  </CardContainer>
  <Info component={component} />
  <Logo />
  <News />
  <Frontendhub />
  <Footer />
</>
  );
}

export default App;
