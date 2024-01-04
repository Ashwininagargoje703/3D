import React, { useEffect, useState } from "react";
import { animateScroll as scroll, Element } from "react-scroll";
import ResponsiveAppBar from "./components/navbar";
import Home from "./components/Home";
import Moon from "./components/Moon";
import Mario from "./components/mario";
import MoonSpace from "./components/moonspace";
import Slider3d from "./components/Slider";

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
      <br />

      <Element name="Slider3dSection">
        <Slider3d />
      </Element>
      <br />
      <br />
      <br />

      <MoonSpace />
      {showScrollTop && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          Go to Top
        </button>
      )}
    </div>
  );
}

export default App;
