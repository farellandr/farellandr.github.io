import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skill from "./components/skills/Skill";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer /> 
    </>
  );
}

export default App;
