import React, { useState } from "react";
import "./App.css";
import Navigationbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Services from "./components/services";
import Work from "./components/work";
import ModalInfo from "./components/modalInfo";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [modal, setModal] = useState(false);
  const [projectInfo, setProject] = useState(0);
  return (
    <>
      {modal && (
        <ModalInfo
          setModal={setModal}
          modal={modal}
          projectInfo={projectInfo}
          setProject={setProject}
        />
      )}
      <Navigationbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Home darkTheme={darkTheme} />
      <About darkTheme={darkTheme} />
      <Skills darkTheme={darkTheme} />
      <Work darkTheme={darkTheme} setModal={setModal} modal={modal} />
      <Services darkTheme={darkTheme} />
      <Contact darkTheme={darkTheme} />
      <Footer darkTheme={darkTheme} />
    </>
  );
}

export default App;
