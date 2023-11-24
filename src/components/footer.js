import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import classes from "./footer.module.css";
import gitSVG from "../images/svg/github.svg";
import linkSVG from "../images/svg/linkedin.svg";

function Footer() {
  return (
    <div className={classes.root}>
      <Container fluid>
        <Row>
          <Col>
            <h2 className={classes.brand}>Samuel Deya</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <Nav.Link href="#home" className={classes.link}>
                Home
              </Nav.Link>
              <Nav.Link href="#about" className={classes.link}>
                About
              </Nav.Link>
              <Nav.Link href="#skills" className={classes.link}>
                Skills
              </Nav.Link>
              <Nav.Link href="#services" className={classes.link}>
                Services
              </Nav.Link>
              <Nav.Link href="#contact" className={classes.link}>
                Contact
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col>
            <a
              href="https://github.com/Ortiz25?tab=repositories&q=&type=public&language=&sort="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitSVG} alt="" height="30" className={classes.git} />
            </a>
            <a
              href="https://www.linkedin.com/in/samuel-deya-307b3171/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkSVG} alt="" height="30" className={classes.git} />
            </a>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col> &copy; copyright 2023. All Rights Reserved</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
