import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import SectionHeading from "./SectionHeading";
const Contact = () => {
  return (
    <Container fluid id="Contact">
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="75"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="svgcolor-light"
      >
        <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
      </svg>
      <SectionHeading title="Get in Touch" />
      <p data-aos="fade-up">Have a question or want to work together?</p>
      <Form data-aos="fade-up" className="my-form">
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="Youe Name" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="Your e-mail" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" placeholder="Your Message" rows="3" />
        </Form.Group>
        <Button
          variant="secondary"
          size="sm"
          outline="true"
          className="submit-form btn-color"
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};
export default Contact;
