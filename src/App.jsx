import React, { useEffect, useState } from "react";
import { animateScroll as scroll, Element } from "react-scroll";
import ResponsiveAppBar from "./components/navbar";
import Moon from "./components/Moon";
import Mario from "./components/mario";
import MoonSpace from "./components/moonspace";
import Slider3d from "./components/Slider";
import "./App.css";
import FirstSection from "./components/First/firstSection";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      // Adjust the scroll position (200 in this case) to determine when to show the button
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      smooth: "easeInOutQuad",
    });
  };

  return (
    <div className="app">
      <ResponsiveAppBar />
      <br />
      <br />
      <br />
      {/* <Element name="homeSection">
        <Home />
      </Element> */}
      <Element name="FirstSection">
        <FirstSection />
      </Element>
      <div className="home-container">
        <h1>Welcome to the 3D Metaverse Gaming Website!</h1>
      </div>
      <Element name="moonSection">
        <Moon />
      </Element>
      <br />
      <Element name="Slider3dSection">
        <Slider3d />
      </Element>
      <br />
      <br />
      <Element name="marioSection">
        <MoonSpace />
      </Element>
      <Mario />

      <Element name="aboutSection">
        <About />
      </Element>

      <Element name="contactSection">
        <Contact />
      </Element>
      {showScrollTop && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          Go to Top
        </button>
      )}
    </div>
  );
}

export default App;
