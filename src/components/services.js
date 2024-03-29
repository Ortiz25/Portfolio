import React, { useEffect } from "react";
import classes from "../components/services.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import codeImage from "../images/code.png";
import serverImage from "../images/servers.png";
import Stack from "react-bootstrap/Stack";
import engImage from "../images/engineering.png";
import { useSpring, animated } from "react-spring";

function Services() {
  const [animationProps, set] = useSpring(() => ({
    opacity: 0,
    transform: "translateX(-70px)",
  }));

  const onIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        set({ opacity: 1, transform: "translateX(0)" });
      } else {
        set({ opacity: 0, transform: "translateX(-70px)" });
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    });
    const target = document.getElementById("animated-element1");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <div className={classes.root} id="services">
      <Container>
        <Row>
          <Col md="6">
            <animated.div id="animated-element1" style={animationProps}>
              <h5 className={classes.heading}>My services:</h5>
              <h1>What I provide to my clients</h1>
              <p>
                I provide custom fullstack website designs to meet the specific
                needs and goals of each client. I ensure the websites/webapps I
                create are optimized for perfomance, scalability and
                accessibility.
                <br />I offer ongoing support and maintenance to ensure that my
                clients' are always up-to-date and functioning at their optimum
                best.I create reponsive designs that work seamlessly across all
                devices and screen sizes
              </p>
              <Button>
                <a href="#contact" style={{ color: "white" }}>
                  Let's Talk
                </a>
              </Button>
            </animated.div>
          </Col>
          <Col md="6">
            <Stack direction="horizontal" gap={4} className={classes.card}>
              <div className={classes["code_image"]}>
                <img src={codeImage} height="28" alt="" />
              </div>

              <div>
                <span className={classes["card_head"]}>
                  Website Development
                </span>
                <p className={classes["card_content"]}>
                  My website development services provide businesses with
                  custom-built websites that meet their unique needs and goals.
                </p>
              </div>
            </Stack>
            <Stack direction="horizontal" gap={4} className={classes.card}>
              <div className={classes["code_image"]}>
                <img src={serverImage} height="28" alt="" />
              </div>

              <div>
                <span className={classes["card_head"]}>
                  Deployment and Hosting
                </span>
                <p className={classes["card_content"]}>
                  My proficiency in ubuntu servers guarantees my client quick
                  deployment and maintenance with regards to remote hosting of
                  their web applications.
                </p>
              </div>
            </Stack>
            <Stack direction="horizontal" gap={4} className={classes.card}>
              <div className={classes["code_image"]}>
                <img src={engImage} height="28" alt="" />
              </div>

              <div>
                <span className={classes["card_head"]}>Network services</span>
                <p className={classes["card_content"]}>
                  From my years of experience in the Network Engineering Field,
                  I offer consultation services on how to plan, deploy and
                  maintain the highest level of QoS with regards to both wired
                  and wireless networks.
                </p>
              </div>
            </Stack>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
