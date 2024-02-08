import React, {useEffect} from "react";
import Hero from "./components/Hero";
import CardContainer from "./components/CardsContainer";
import Footer from "./components/Footer";
import Buttons from "./components/Buttons";
import Menu from "./components/Menu";
import Info from "./components/Info";
import { component } from "./components/Data";
import Frontendhub from "./components/Frontendhub";
import News from "./components/News";
import Content from "./components/Content";

function App() {

  useEffect(() => {
    const originalTitle = document.title; // Save the original title
    let flashingInterval; // Declare the variable outside of useEffect

    // Function to update title when user leaves the page
    const updateTitleOnLeave = () => {
      flashingInterval = setInterval(() => {
        document.title = document.title === originalTitle ? "Come back soon!" : originalTitle;
      }, 1000); // Flash every 1 second
    };

    // Function to restore original title when user returns to the page
    const restoreOriginalTitle = () => {
      clearInterval(flashingInterval); // Stop flashing
      document.title = originalTitle; // Restore original title
    };

    // Add event listener to track when the user leaves the page
    window.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        updateTitleOnLeave(); // User left the page
      } else {
        restoreOriginalTitle(); // User returned to the page
      }
    });

    // Add event listener to track when the user focuses back on the window
    window.addEventListener('focus', restoreOriginalTitle);

    // Remove event listeners when component unmounts
    return () => {
      window.removeEventListener('visibilitychange', updateTitleOnLeave);
      window.removeEventListener('focus', restoreOriginalTitle);
      clearInterval(flashingInterval); // Stop flashing
      document.title = originalTitle; // Restore original title
    };

  }, []); // Run only once on component mount



  return (
<>
  <Menu />
  <Content />
  <Hero />
  <CardContainer>
    <Buttons />
  </CardContainer>
  <Info component={component} />
  <News />
  <Frontendhub />
  <Footer />
</>
  );
}

export default App;
