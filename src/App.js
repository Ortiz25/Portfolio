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
import { workInfo } from "../src/files/workinfo";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [modal, setModal] = useState(false);
  const [infos, setInfo] = useState(workInfo);
  const [modalInfo, setModalInfo] = useState(null);
  return (
    <>
      {modal && (
        <ModalInfo
          setModal={setModal}
          modal={modal}
          infos={infos}
          modalInfo={modalInfo}
          setModalInfo={setModalInfo}
        />
      )}
      <Navigationbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Home darkTheme={darkTheme} />
      <About darkTheme={darkTheme} />
      <Skills darkTheme={darkTheme} />
      <Work
        darkTheme={darkTheme}
        setModal={setModal}
        modalInfo={modalInfo}
        setModalInfo={setModalInfo}
        infos={infos}
      />
      <Services darkTheme={darkTheme} />
      <Contact darkTheme={darkTheme} />
      <Footer darkTheme={darkTheme} />
    </>
  );
}

export default App;
