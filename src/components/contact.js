import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import classes from "./contact.module.css";
import phoneImage from "../images/svg/phone1.svg";
import emailImage from "../images/svg/envelope.svg";
import locationImage from "../images/svg/location.svg";
import Spinner from "react-bootstrap/Spinner";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, updateSubmit] = useState(false);

  function handleOnchange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    updateSubmit(true);

    const formspreeEndpoint = `https://formspree.io/f/mwkdjdww`;
    await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
    updateSubmit(false);
  }

  return (
    <div className={classes.root} id="contact">
      <Container>
        <Row>
          <Col className={classes.heading}>
            <h5 className={classes.label}>Lets Talk</h5>
            <p className={classes.text}>
              Have a Project Idea? Feel Free to Contact me
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className={classes.poster}>
              <div className={classes.modal}>
                <div className={classes["icon-phone"]}>
                  <img src={phoneImage} alt="" height="45" />
                </div>
                <div className={classes.info}>
                  <h5>Call:</h5>
                  <span>(+254) 726500307</span>
                </div>
              </div>
              <div className={classes.modal}>
                <div className={classes["icon-email"]}>
                  <img src={emailImage} alt="" height="45" />
                </div>
                <div className={classes.info}>
                  <h5>Email:</h5>
                  <span>Samueldeya@gmail.com</span>
                </div>
              </div>
              <div className={classes.modal}>
                <div className={classes["icon-location"]}>
                  <img src={locationImage} alt="" height="40" />
                </div>
                <div className={classes.info}>
                  <h5>Location:</h5>
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <Form className={classes.form} onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleOnchange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleOnchange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Tell me about your project"
                  name="message"
                  value={formData.message}
                  onChange={handleOnchange}
                />
              </Form.Group>
              {isSubmitting ? (
                <Button variant="primary" disabled className={classes.btn}>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Loading...
                </Button>
              ) : (
                <Button variant="primary" type="submit" className={classes.btn}>
                  Send Message
                </Button>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
