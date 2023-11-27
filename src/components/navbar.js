import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import classes from "./navbar.module.css";
import sunImg from "../images/sun.png";
import moonImg from "../images/moon.png";

function Navigationbar({ darkTheme, setDarkTheme }) {
  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }
  return (
    <div className={classes.root} id="home">
      <Navbar
        expand={"md"}
        className="bg-body-tertiary mb-4 "
        fixed="top"
        collapseOnSelect
        id={classes.root}
        data-bs-theme={darkTheme ? "dark" : ""}
      >
        <Container>
          <Navbar.Brand href="#" className={classes.brand}>
            Samuel Deya
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${"md"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-$"{"md"}`}
            placement="end"
            data-bs-theme={darkTheme ? "dark" : ""}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"md"}`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className="justify-content-end flex-grow-1 pe-3"
                navbarScroll
                onSelect={(selectedKey, event) =>
                  event.target.classList.toggle("active")
                }
              >
                <Nav.Link href="#home" eventKey="home">
                  Home
                </Nav.Link>
                <Nav.Link href="#about" eventKey="about">
                  About
                </Nav.Link>
                <Nav.Link href="#skills" eventKey="skills">
                  Skills
                </Nav.Link>
                <Nav.Link href="#services" eventKey="services">
                  Services
                </Nav.Link>
                <Nav.Link href="#contact" eventKey="contact">
                  Contact
                </Nav.Link>
                <Nav.Link className={classes.btn} onClick={toggleTheme}>
                  {darkTheme ? (
                    <img
                      src={moonImg}
                      alt=""
                      height="20"
                      className={classes.moon}
                    />
                  ) : (
                    <img src={sunImg} alt="" height="25" />
                  )}
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigationbar;
