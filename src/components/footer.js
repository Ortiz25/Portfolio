import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import classes from "./footer.module.css";
import gitSVG from "../images/svg/github.svg";
import linkSVG from "../images/svg/linkedin.svg";

function Footer({ darkTheme }) {
  const darkStyle = darkTheme
    ? { backgroundColor: "#212529", color: "white" }
    : { backgroundColor: " #eef5ff" };

  const lightStyle = darkTheme ? { color: "white" } : { color: "black" };
  return (
    <Nav className={classes.root} style={darkStyle}>
      <Container fluid>
        <Row>
          <Col>
            <h2 className={classes.brand}>Samuel Deya</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <Nav.Link
                href="#home"
                className={classes.link}
                style={lightStyle}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={classes.link}
                style={lightStyle}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={classes.link}
                style={lightStyle}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#services"
                className={classes.link}
                style={lightStyle}
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={classes.link}
                style={lightStyle}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col className={classes.icons}>
            <div className={classes.links}>
              <a
                href="https://github.com/Ortiz25?tab=repositories&q=&type=public&language=&sort="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gitSVG} alt="" className={classes.git} />
              </a>
            </div>
            <div className={classes.links}>
              <a
                href="https://www.linkedin.com/in/samuel-deya-307b3171/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkSVG} alt="" className={classes.git} />
              </a>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col> &copy; copyright 2023. All Rights Reserved</Col>
        </Row>
      </Container>
    </Nav>
  );
}

export default Footer;
