import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button, Row, Col } from "reactstrap";
const Head = () => {
  return (
    <Jumbotron id="Head" className="header-Jumbotron">
      <Row>
        <Col md={6}>
          <h1 className="head-text">
            <span>Hello,</span>
            <br />
            <span>
              I'm{" "}
              <span style={{ color: "#08fdd8", fontWeight: "400" }}>
                Rushabh Runwal
              </span>
              ,
            </span>
            <br />
            <span>Software Engineer.</span>
            <br />
          </h1>
          <Button
            size="lg"
            href="#Contact"
            outline
            color="info"
            className="btn-color"
          >
            Contact Me
          </Button>
        </Col>
        <Col md={6}></Col>
      </Row>
    </Jumbotron>
  );
};
export default Head;
