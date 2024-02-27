import React from "react";
import classes from "./modalInfo.module.css";
import Modal from "../ui/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Pic1 from "../images/app-pic1.PNG";
import Pic2 from "../images/app-pic2.jpg";
import Pic3 from "../images/app-pic3.jpg";
import Pic4 from "../images/app-pic4.jpg";
import Pic5 from "../images/app-pic5.jpg";

function ModalInfo({ setModal, modal }) {
  function handleClick() {
    setModal(!modal);
  }
  return (
    <Modal setModal={setModal} modal={modal}>
      <Container>
        <Row>
          <Col md="6">
            <Carousel fade variant="primary" className={classes.carousel}>
              <Carousel.Item>
                <img src={Pic1} alt="app" className={classes.Img} />
              </Carousel.Item>
              <Carousel.Item>
                <img src={Pic2} alt="app" className={classes.Img} />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={Pic4}
                  alt="app"
                  className={classes.Img}
                  style={{ objectFit: "fill" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img src={Pic3} alt="app" className={classes.Img} />
              </Carousel.Item>
              <Carousel.Item>
                <img src={Pic5} alt="app" className={classes.Img} />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md="6" className={classes.column}>
            <span
              variant="outline-info"
              className={classes["action-btn"]}
              onClick={handleClick}
            >
              x
            </span>

            <div className={classes.text}>
              <h4>Hotspot Web-App Design</h4>
              <hr />
              <p>
                {" "}
                Built with a Reactjs frontend and a Nodejs backend. Integradable
                with with a Mikrotik router and Freeradius server to provide
                Authentication, Authorization and Accounting to. Hoptspot
                Clients.
              </p>
              <p>
                Once integrated with a Mikrotik Router hotspot clients earn
                bundles by watching short advertisments and use the earned
                bundles to go online
              </p>
            </div>

            <div className={classes.table}>
              <table>
                <tr>
                  <td>Type:</td>
                  <td>Webb-App</td>
                </tr>
                <tr>
                  <td>Stack:</td>
                  <td>MERN (React, Node, Express, MondoDB)</td>
                </tr>
                <tr>
                  <td>Radius Server & DB:</td>
                  <td>Freeradius & MYSQL</td>
                </tr>
                <tr>
                  <td>Hosting:</td>
                  <td>Digital Ocean (Ubuntu VPC)</td>
                </tr>
                <tr>
                  <td>Live URL: </td>
                  <td>https://livecrib.rent/</td>
                </tr>
              </table>
            </div>
          </Col>
        </Row>
      </Container>
    </Modal>
  );
}

export default ModalInfo;
