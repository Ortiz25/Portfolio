import React, { useEffect } from "react";
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
import { useSpring, animated } from "react-spring";
import cv from "../files/cv.pdf";

function About() {
  const [animationProps, set] = useSpring(() => ({
    opacity: 0,
    transform: "translateX(50px)",
  }));

  const onIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        set({ opacity: 1, transform: "translateX(0)" });
      } else {
        set({ opacity: 0, transform: "translateX(50px)" });
      }
    });
  };

  const observer = new IntersectionObserver(onIntersection, {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  });

  useEffect(() => {
    const target = document.getElementById("animated-element");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [observer]);
  return (
    <div className={classes.root} id="about">
      <Container>
        <Row>
          <Col md="6" className={classes.aboutImg}>
            <div className={classes["about-image"]}>
              <img src={html5} className={classes.icons} height="40" alt="" />
              <img
                src={node}
                className={classes.iconsnode}
                height="45"
                alt=""
              />
              <img src={js} className={classes.iconsjs} height="40" alt="" />
              <Image src={imagep} thumbnail fluid />

              <img src={css3} className={classes.icons} height="40" alt="" />
              <img
                src={react}
                className={classes.iconsreact}
                height="40"
                alt=""
              />
            </div>
          </Col>
          <Col md="6" className={classes.fade}>
            <animated.div id="animated-element" style={animationProps}>
              <div className={classes.me}>About Me</div>
              <h3>
                I am passionate about creating beautiful and functional websites
                that provide an excellent user experience.
              </h3>
              <p>
                As a specialist in HTML, CSS and Javascript (React and Node js),
                I have a deep understanding of the core building blocks of
                modern web design, with a focus on accessibility and responsive
                design.I strive to deliver websites and web apps that look great
                and work seamlessly across all devices.
              </p>
              <Button>
                <Image
                  src={fileIcon}
                  height="25"
                  className={classes.fileicon}
                />
                <a href={cv} download target="_blank">
                  Download CV
                </a>
              </Button>
            </animated.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
