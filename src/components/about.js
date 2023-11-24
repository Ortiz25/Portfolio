import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import imagep from "../images/portfolio1.jpg";
import classes from "./about.module.css";
import fileIcon from "../images/svg/document.svg";
import html5 from "../images/svg/html5.svg";
import js from "../images/svg/js.svg";
import css3 from "../images/svg/css3.svg";
import react from "../images/svg/react.svg";
import node from "../images/svg/node.svg";

function About() {
  return (
    <div className={classes.root} id="about">
      <Container>
        <Row>
          <Col md="6" className={classes.aboutImg}>
            <img src={html5} className={classes.icons} height="40" alt="" />
            <img src={node} className={classes.iconsnode} height="45" alt="" />
            <img src={js} className={classes.iconsjs} height="40" alt="" />
            <Image src={imagep} thumbnail fluid />

            <img src={css3} className={classes.icons} height="40" alt="" />
            <img
              src={react}
              className={classes.iconsreact}
              height="40"
              alt=""
            />
          </Col>
          <Col md="6" className={classes.fade}>
            <h5 className={classes.me}>About Me</h5>
            <h3>
              I am passionate about creating beautiful and functional websites
              that provide an excellent user experience
            </h3>
            <p>
              As a specialist in HTML, CSS and Javascript (React and Node js), I
              have a deep understanding of the core building blocks of modern
              web design.With a focus on accessibility and responsive design.I
              strive to deliver websites and web apps that look great and work
              seamlessly across all devices.
            </p>
            <Button>
              <Image src={fileIcon} height="25" className={classes.fileicon} />
              Download CV
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
