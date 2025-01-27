import React from "react";
import TabNavigation from "./components/TabNavigation";
import Home from "./pages/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import "./style/index.css";

function App() {
  return (
    <div
      className="relative  min-h-screen w-full overflow-hidden animated-gradient"
      style={{
        backgroundColor: "#0D1117",
      }}
    >
      {/* Navigation */}
      <TabNavigation />


        <div id="Home" className="pl-8 pr-8 pt-32 lg:pt-0">
          <Home />
        </div>
        <div id="About" className="pl-8 pr-8 pt-8">
          <AboutMe />
        </div>
        <div id="Projects" className="pl-8 pr-8 pt-8">
          <Projects />
        </div>
        <div id="Skills" className="pl-8 pr-8 pb-8">
          <Skills />
        </div>

      <div id="Contact" >
        <Footer />
      </div>
    </div>
  );
}

export default App;
