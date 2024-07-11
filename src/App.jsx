import React from "react";
import {Routes, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Technologies from "./components/Technologies";
import Portfolio from "./Portfolio";
import Services from "./components/Services";
import Events from "./components/Events";
import Footer from "./components/Footer";
import About from "./components/About_Us/About";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Technologies />
      <Portfolio />
      <Services />
      <Events />
      <Footer />
      <About />
    </>
  );
}

export default App;
