import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import ReactJsTyping from "reactjs-typing-effect";
import { Button, Row, Col } from "reactstrap";


const Head = () => {
  const heading_list=['Programmer','Software Engineer']
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
            <span>
              <ReactJsTyping StringList={heading_list} speed={700}/>
            </span>
 
            {/* <span>Software Engineer.</span> */}
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
      <div>
        <a  href="#About">
          <span className="scrolldown"> </span>
        </a> 
      </div>
    </Jumbotron>

  );
};
export default Head;
