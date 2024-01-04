import React from "react";
import { animateScroll as scroll, Element } from "react-scroll";
import ResponsiveAppBar from "./components/navbar";
import Home from "./components/Home";
import Moon from "./components/Moon";
import Mario from "./components/mario";
import MoonSpace from "./components/moonspace";

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      smooth: "easeInOutQuad",
    });
  };

  return (
    <div className="canvas-container">
      <ResponsiveAppBar />
      <Element name="homeSection">
        <Home />
      </Element>
      <Element name="moonSection">
        <Moon />
      </Element>

      <Element name="marioSection">
        <Mario />
      </Element>
      <MoonSpace />

      <Element name="sliderSection">
        <Moon />
      </Element>
      <button onClick={scrollToTop}>Go to Top</button>
    </div>
  );
}

export default App;
