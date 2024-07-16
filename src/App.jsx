import React from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/font-awesome.min.css";
import "./assets/style.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Technologies from "./components/Technologies";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Events from "./components/Events";
import Footer from "./components/Footer";
import About from "./components/About_Us/About";
import OurServices from "./components/OurServices/OurServices";
import Training from "./components/Training/Training";
import ContactUs from "./components/ContactUs/ContactUs";

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
      <OurServices />
      <Training />
      <ContactUs />
    </>
  );
}

export default App;
