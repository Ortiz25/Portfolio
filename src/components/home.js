import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import profile from "../images/profile.jpg";
import classes from "./home.module.css";
import gitSVG from "../images/svg/github.svg";
import linkSVG from "../images/svg/linkedin.svg";
import Typewriter from "../util/type";
import { useSpring, animated } from "react-spring";

function Home({ darkTheme }) {
  const props = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(50px)" },
    config: { tension: 50, friction: 5 },
  });
  const darkStyle = darkTheme
    ? { backgroundColor: "#212529", color: "white" }
    : { color: "black" };
  return (
    <div className={classes.root} style={darkStyle}>
      <Container>
        <Row>
          <Col md="6" className={classes.intro}>
            <h2>
              Hello,
              <Typewriter text=" my name is" delay={100} />
            </h2>

            <span>
              <h1>
                <Typewriter text="Samuel Deya !" delay={200} />
              </h1>
              <h2 className={classes["typed-out"]}>
                A Web Developer and a Network Engineer
              </h2>
              <animated.p style={props}>
                I am a fullstack web developer and a Networks Engineer by
                training.
              </animated.p>
            </span>

            <Button variant="primary" className={classes.btn}>
              <a href="#contact">Hire Me</a>
            </Button>
            <div>
              <h4 className={classes.join}>Join ME :</h4>
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
                  <img
                    src={linkSVG}
                    alt=""
                    height="40"
                    className={classes.git}
                  />
                </a>
              </div>
            </div>
          </Col>
          <Col md="6" className={classes.profile}>
            <animated.div style={props}>
              <Image src={profile} roundedCircle fluid loading="laz" />
            </animated.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
