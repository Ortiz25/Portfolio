import React from "react";
import "./App.css";
import Navigationbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Services from "./components/services";

function App() {
  return (
    <>
      <Navigationbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
