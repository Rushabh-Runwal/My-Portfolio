import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import {
  FaHackerrank,
  FaInstagramSquare,
  FaGithub,
  FaLinkedin,
  FaAngleDoubleUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <Container style={{ textAlign: "-webkit-center" }}>
        <a href="#Head">
          <div className="flex uparrow icon">
            <FaAngleDoubleUp />
          </div>
        </a>
        <br />
        <Row className="fa-icons-row">
          <Col xs={3}>
            <a href="https://www.linkedin.com/in/rushabh-runwal-3a7239193">
              <div className="flex icon">
                <FaLinkedin />
              </div>
            </a>
          </Col>
          <Col xs={3}>
            <a href="https://www.instagram.com/rushabh_runwal/">
              <div className="flex icon">
                <FaInstagramSquare />
              </div>
            </a>
          </Col>
          <Col xs={3}>
            <a href="https://github.com/Rushabh-Runwal?tab=repositories">
              <div className="flex icon">
                <FaGithub />
              </div>
            </a>
          </Col>
          <Col xs={3}>
            <a href="https://www.hackerrank.com/rushabh22runwal">
              <div className="flex icon">
                <FaHackerrank />
              </div>
            </a>
          </Col>
        </Row>
        <p
          style={{
            color: "white",
            fontWeight: "100",
            margin: "0",
            padding: "5px",
          }}
        >
          Rushabh <span style={{ color: "#67e6dc" }}>© 2020</span>
        </p>
      </Container>
    </footer>
  );
};
export default Footer;
/* <footer>
        <i classNameName="mdi mdi-chevron-double-up page-link" dest="home"></i>

        <div className="icon-wrap flex row">
          <a href="https://www.linkedin.com/in/mattwilliams85">
            <div className="flex icon" id="icon-2">
              <i className="mdi mdi-linkedin"></i>
            </div>
          </a>
          <a href="https://www.facebook.com/matthew.williams.351">
            <div className="flex icon" id="icon-3">
              <i className="mdi mdi-facebook"></i>
            </div>
          </a>
          <a href="https://instagram.com/infinite_edge/">
            <div className="flex icon" id="icon-4">
              <i className="mdi mdi-instagram"></i>
            </div>
          </a>
          <a href="http://codepen.io/matthewwilliams/">
            <div className="flex icon" id="icon-5">
              <i className="mdi mdi-codepen"></i>
            </div>
          </a>
        </div>
        <div className="info-box">
          <div className="footnote">
            MATTHEW WILLIAMS <span className="highlight">©2015</span>
          </div>
        </div>
      </footer> */
