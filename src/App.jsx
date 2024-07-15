import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "font-awesome/css/font-awesome.min.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Technologies from "./components/Technologies";
import Portfolio from "./components/Portfolio";
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
