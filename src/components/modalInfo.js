import React from "react";
import classes from "./modalInfo.module.css";
import Modal from "../ui/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

function ModalInfo({ setModal, modal, modalInfo, setModalInfo }) {
  function handleClick() {
    setModal(!modal);
  }
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <Modal setModal={setModal} modal={modal}>
      <Container>
        {modalInfo.map((info) => {
          return (
            <Row key={info.modalKey}>
              <Col md="6">
                <Carousel fade variant="primary" className={classes.carousel}>
                  {info.pics.map((pic) => {
                    return (
                      <Carousel.Item key={getRandomInt(1000)}>
                        <img src={pic} alt="app" className={classes.Img} />
                      </Carousel.Item>
                    );
                  })}
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
                  <h4>{info.title}</h4>
                  <hr />
                  <p> {info.description}</p>
                </div>

                <div className={classes.table}>
                  <table>
                    <tr>
                      <td>Type:</td>
                      <td>{info.tableInfo.type}</td>
                    </tr>
                    <tr>
                      <td>Stack:</td>
                      <td>{info.tableInfo.stack}</td>
                    </tr>
                    <tr>
                      <td>Radius Server & DB:</td>
                      <td>{info.tableInfo.radius}</td>
                    </tr>
                    <tr>
                      <td>Hosting:</td>
                      <td>{info.tableInfo.Hosting}</td>
                    </tr>
                    <tr>
                      <td>Live URL: </td>
                      <td>{info.tableInfo.Visit}</td>
                    </tr>
                  </table>
                </div>
              </Col>
            </Row>
          );
        })}
      </Container>
    </Modal>
  );
}

export default ModalInfo;
