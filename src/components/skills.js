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

function Skills() {
  return (
    <Container id="skills">
      <Row className={classes.heading}>
        <Col>
          <h4 className={classes.skills}>Skills</h4>
          <h2>Some of My Working Tools</h2>
        </Col>
      </Row>
      <Row>
        <Row>
          <Col md="5" className={classes["active-area"]}>
            <h3 className={classes.title}>Web Development</h3>
            <Card>
              <img
                src={htmlImg}
                alt=""
                height="80"
                className={classes["img_card"]}
              />
              <h5>html</h5>
            </Card>
            <Card>
              <img
                src={cssImg}
                alt=""
                height="80"
                className={classes["img_card"]}
              />
              <h5>CSS</h5>
            </Card>
            <Card>
              <img
                src={jsImg}
                alt=""
                height="80"
                width="45"
                className={classes["img_card"]}
              />
              <h5>Javascript</h5>
            </Card>
            <Card>
              <img
                src={reactImg}
                alt=""
                height="80"
                className={classes["img_card"]}
              />
              <h5>React</h5>
            </Card>
            <Card>
              <img
                src={nodeImg}
                alt=""
                height="80"
                width="55"
                className={classes["img_card"]}
              />
              <h5>Node Js</h5>
            </Card>
            <Card>
              <img
                src={gitImg}
                alt=""
                height="80"
                className={classes["img_card"]}
              />
              <h5>git</h5>
            </Card>
          </Col>
          <Col md="3" className={classes["active-area"]}>
            <h3 className={classes.title}>UI/UX Design</h3>
            <Card>
              <img
                src={figmaImg}
                alt=""
                height="80"
                className={classes["img_card"]}
              />
              <h5>Figma</h5>
            </Card>
          </Col>
          <Col md="4" className={classes["active-area"]}>
            <h3 className={classes.title}>Databases and Servers</h3>
            <Card>
              <img
                src={mongoImg}
                alt=""
                height="80"
                className={classes["img_card"]}
              />
              <h5>Mongo DB</h5>
            </Card>
            <Card>
              <img
                src={mysqlImg}
                alt=""
                height="80"
                width="90"
                className={classes["img_card"]}
              />
              <h5>Mysql</h5>
            </Card>
            <Card>
              <img
                src={nginxImg}
                alt=""
                height="80"
                width="85"
                className={classes["img_card"]}
              />
              <h5>Nginx</h5>
            </Card>
            <Card>
              <img
                src={ubuntuImg}
                alt=""
                height="80"
                width="95"
                className={classes["img_card"]}
              />
              <h5>Servers</h5>
            </Card>
            <Card>
              <img
                src={apachelImg}
                alt=""
                height="80"
                className={classes["img_card"]}
              />
              <h5>Apache</h5>
            </Card>
          </Col>
        </Row>
      </Row>
      <Row>
        <Col className={classes["active-hardware"]}>
          <h3 className={classes.title}>Hardware Skills</h3>
          <div className={classes.hardware}>
            <Card>
              <img
                src={ubntImg}
                alt=""
                height="80"
                className={classes["img_card"]}
              />
            </Card>
            <Card>
              <img
                src={wifiImg}
                alt=""
                height="80"
                className={classes["img_card"]}
              />
            </Card>
            <Card>
              <img
                src={mktImg}
                alt=""
                height="80"
                className={classes["img_card"]}
              />
            </Card>
            <Card>
              <img
                src={openImg}
                alt=""
                height="80"
                className={classes["img_card"]}
              />
            </Card>
            <Card>
              <img
                src={cambImg}
                alt=""
                height="80"
                className={classes["img_card"]}
              />
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
