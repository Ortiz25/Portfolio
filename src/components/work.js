import React from "react";
import classes from "./work.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Pic1 from "../images/app-pic1.PNG";

function Work({ darkTheme, setModal, modal }) {
  const darkStyle = darkTheme
    ? { backgroundColor: "#212529", color: "white", boarder: "none" }
    : { color: "black" };

  function handleClick() {
    setModal(!modal);
  }
  return (
    <div style={darkStyle} className={classes.root}>
      <Container id="work">
        <Row className={classes.heading}>
          <Col>
            <h4 className={classes["work-heading"]}>Work</h4>
            <h3>Recent Projects</h3>
          </Col>
        </Row>
        <Row>
          <Col className={classes.frame}>
            <div className={classes.card}>
              <div className={classes.area}>
                <span className={classes.overlay}></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  fill="currentColor"
                  className="bi bi-plus"
                  viewBox="0 0 16 16"
                  id={classes.btnGo}
                  onClick={handleClick}
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
                <img src={Pic1} alt="app" className={classes.Img} />
              </div>

              <div className={classes.text}>
                <h4>Hotspot App</h4>
                <h6 style={darkTheme ? { color: "white" } : { color: "black" }}>
                  Fullstack APP
                </h6>
              </div>
              <Button id={classes["action-btn"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                  onClick={handleClick}
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Work;
