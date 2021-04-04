import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeading from "./SectionHeading";
import { IoIosRocket, IoMdBulb } from "react-icons/io";
import { GiRunningNinja } from "react-icons/gi";
import { FaAward } from "react-icons/fa";
// import ProgressBar from "react-bootstrap/ProgressBar";

import {
  FaPython,FaJava,FaReact,FaLinux,FaGithub,FaNode
} from "react-icons/fa"

import {
  DiMysql,DiJavascript,DiMongodb,DiTerminal
} from "react-icons/di"

import {SiFlask,SiCplusplus} from "react-icons/si"



import imgMe from "../images/me.png"
const About = () => {
  return (
    <Container fluid id="About">
      <SectionHeading title="ABOUT" />
      <Row>
        <Col data-aos="flip-right" md={3} xs={6} className="about-icons">
          <IoMdBulb className="about-fa-icons hexagon" />
          <h3>Creative</h3>
        </Col>
        <Col
          data-aos="flip-right"
          data-aos-delay="300"
          md={3}
          xs={6}
          className="about-icons"
        >
          <FaAward className="about-fa-icons  hexagon" />
          <h3>Aiming For Quality</h3>
        </Col>
        <Col
          data-aos="flip-right"
          data-aos-delay="450"
          md={3}
          xs={6}
          className="about-icons"
        >
          <GiRunningNinja className="about-fa-icons hexagon" />
          <h3>Wanna be Adept</h3>
        </Col>
        <Col
          data-aos="flip-right"
          data-aos-delay="600"
          md={3}
          xs={6}
          className="about-icons"
        >
          <IoIosRocket className="about-fa-icons hexagon" />
          <h3>Intuitive</h3>
        </Col>
      </Row>
      <Row className="about-row-two">
        <Col
          data-aos="slide-up"
          data-aos-duration="800"
          className="about-col-one"
          md={6}
          xs={12}
        >
          {/* <img src="http://findmatthew.com/img/me.png" alt="imgMy" /> */}
          <img src={imgMe} alt="imgMy" />
          <h3>About me</h3>
          <p>
            A third Year IT engineer Student From SCOE,Pune. With deep interests
            in modern day technology, researches and upcoming innovations.
          </p>
          <p>
            Well-organised person, problem solver, Everyday Learner with high
            attention to detail; Other interests includes: Traveling, Working out
            Treking, PC gaming, Reading
          </p>
          <p>
            Interested in the working on ambitious projects with like minded
            people.
          </p>
        </Col>

        <Col md={6} xs={12} data-aos="slide-right" data-aos-offset="0"  className="about-col-one col-algin-middle" >
          <h3>Skills</h3>
          <span className="skills-line line-middle" >
            <FaPython  data-aos="flip-right" className="about-fa-icons skills-icon hexagon"/>
            <DiJavascript className="about-fa-icons skills-icon hexagon"/>
            <FaJava className="about-fa-icons skills-icon hexagon"/>
            <SiCplusplus className="about-fa-icons skills-icon hexagon"/>
          </span>
          <span className="skills-line line-middle" >
            <FaReact className="about-fa-icons skills-icon hexagon"/>
            <SiFlask className="about-fa-icons skills-icon hexagon"/>
            <FaNode className="about-fa-icons skills-icon hexagon"/>
          </span>
          <span className="skills-line line-middle" >
            <DiMysql className="about-fa-icons skills-icon hexagon"/>
            <DiMongodb className="about-fa-icons skills-icon hexagon"/>
            <FaGithub className="about-fa-icons skills-icon hexagon"/>
            <FaLinux className="about-fa-icons skills-icon hexagon"/>
          </span>
        </Col>  
       </Row>
    </Container>
  );
};
export default About;


/*
       <Col md={6} xs={12}>
          <ul data-aos="slide-right" data-aos-offset="0" className="skill-sets">
            <li>
              <span>
                Java{" "}
                <ProgressBar
                  variant="custom"
                  animated
                  now={70}
                  label={`${70}%`}
                />
              </span>
            
            <li>
              <span>JavaScript </span>
              <ProgressBar
                variant="custom"
                animated
                now={55}
                label={`${55}%`}
              />
            
            <li>
              <span>React Js</span>
              <ProgressBar
                variant="custom"
                animated
                now={60}
                label={`${60}%`}
              />
            
            <li>
              <span>HTML </span>
              <ProgressBar
                variant="custom"
                animated
                now={60}
                label={`${60}%`}
              />
            
            <li>
              <span>CSS</span>
              <ProgressBar
                variant="custom"
                animated
                now={60}
                label={`${60}%`}
              />
            
            <li>
              <span>Node Js</span>
              <ProgressBar
                variant="custom"
                animated
                now={40}
                label={`${40}%`}
              />
            
            <li>
              <span>C++</span>
              <ProgressBar
                variant="custom"
                animated
                now={45}
                label={`${45}%`}
              />
            
            <li>
              <span>C programing</span>
              <ProgressBar
                variant="custom"
                animated
                now={40}
                label={`${40}%`}
              />
            
            <li>
              <span>
                Python{" "}
                <ProgressBar
                  variant="custom"
                  animated
                  now={50}
                  label={`${50}%`}
                />
              </span>
            
          </ul>
        </Col>
*/