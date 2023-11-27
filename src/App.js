import React, { useState } from "react";
import "./App.css";
import Navigationbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Services from "./components/services";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <>
      <Navigationbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Home darkTheme={darkTheme} />
      <About darkTheme={darkTheme} />
      <Skills darkTheme={darkTheme} />
      <Services darkTheme={darkTheme} />
      <Contact darkTheme={darkTheme} />
      <Footer darkTheme={darkTheme} />
    </>
  );
}

export default App;
