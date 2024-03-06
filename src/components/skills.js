import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./skills.module.css";
import htmlImg from "../images/html.png";
import jsImg from "../images/js.png";
import nodeImg from "../images/node.png";
import gitImg from "../images/git.png";
import cssImg from "../images/css.jpeg";
import reactImg from "../images/react.jpeg";
import figmaImg from "../images/figma.png";
import Card from "../util/card";
import ubntImg from "../images/ubnt.png";
import ubuntuImg from "../images/ubuntu.jpg";
import mktImg from "../images/svg/mik.webp";
import mongoImg from "../images/mongo.png";
import mysqlImg from "../images/sq.png";
import wifiImg from "../images/svg/wifi6.webp";
import nginxImg from "../images/svg/nginx.webp";
import apachelImg from "../images/apache.jpg";
import openImg from "../images/openwrt.jpg";
import cambImg from "../images/cambium.jpg";
import wordImg from "../images/wordpress.png";
import ansibleImg from "../images/ansible.png";

function Skills({ darkTheme }) {
  const darkStyle = darkTheme
    ? {
        backgroundColor: "#212529",
        color: "white",
        boxShadow: "0px 1px 8px white",
      }
    : { color: "black" };
  return (
    <div style={darkStyle} className={classes.root}>
      <Container id="skills">
        <Row className={classes.heading}>
          <Col>
            <h4 className={classes.skills}>Skills</h4>
            <h2>Some of My Working Tools</h2>
          </Col>
        </Row>
        <Row>
          <Row>
            <Col md="4" className={classes["active-area"]}>
              <h3 className={classes.title}>Web Development</h3>
              <div className={classes.frame}>
                <Card>
                  <img src={htmlImg} alt="" className={classes["img_card"]} />
                  <h5>html</h5>
                </Card>
                <Card>
                  <img src={cssImg} alt="" className={classes["img_card"]} />
                  <h5>CSS</h5>
                </Card>
                <Card>
                  <img src={jsImg} alt="" className={classes["img_card"]} />
                  <h5>Javascript</h5>
                </Card>
                <Card>
                  <img src={reactImg} alt="" className={classes["img_card"]} />
                  <h5>React</h5>
                </Card>
                <Card>
                  <img src={nodeImg} alt="" className={classes["img_card"]} />
                  <h5>Node Js</h5>
                </Card>
                <Card>
                  <img src={gitImg} alt="" className={classes["img_card"]} />
                  <h5 className={classes.git}>Git</h5>
                </Card>
              </div>
            </Col>
            <Col md="4" className={classes["active-area"]}>
              <h3 className={classes.title}>UI/UX Design & CMS</h3>
              <Card>
                <img src={figmaImg} alt="" className={classes["img_card"]} />
                <h5>Figma</h5>
              </Card>
              <Card>
                <img src={wordImg} alt="" className={classes["img_card"]} />
                <h5>wordpress</h5>
              </Card>
            </Col>
            <Col md="4" className={classes["active-area"]}>
              <h3 className={classes.title}>Databases and Servers</h3>
              <div className={classes.frame}>
                <Card>
                  <img src={mongoImg} alt="" className={classes["img_card"]} />
                  <h6>Mongo DB</h6>
                </Card>
                <Card>
                  <img src={mysqlImg} alt="" className={classes["img_card"]} />
                  <h5 className={classes.h5}>Mysql</h5>
                </Card>
                <Card>
                  <img src={nginxImg} alt="" className={classes["img_card"]} />
                  <h5 className={classes.h5}>Nginx</h5>
                </Card>
                <Card>
                  <img src={ubuntuImg} alt="" className={classes["img_card"]} />
                  <h5>Servers</h5>
                </Card>
                <Card>
                  <img
                    src={apachelImg}
                    alt=""
                    className={classes["img_card"]}
                  />
                  <h5>Apache</h5>
                </Card>
                <Card>
                  <img
                    src={ansibleImg}
                    alt=""
                    className={classes["img_card"]}
                  />
                  <h5>Ansible</h5>
                </Card>
              </div>
            </Col>
          </Row>
        </Row>
        <Row>
          <Col className={classes["active-hardware"]}>
            <h3 className={classes.title}>Hardware Skills</h3>
            <div className={classes.hardware}>
              <div className={classes.card}>
                <img src={ubntImg} alt="" className={classes["img_hard"]} />
              </div>
              <div className={classes.card}>
                <img src={wifiImg} alt="" className={classes["img_hard"]} />
              </div>
              <div className={classes.card}>
                <img src={mktImg} alt="" className={classes["img_hard"]} />
              </div>
              <div className={classes.card}>
                <img src={openImg} alt="" className={classes["img_hard"]} />
              </div>
              <div className={classes.card}>
                <img src={cambImg} alt="" className={classes["img_hard"]} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
