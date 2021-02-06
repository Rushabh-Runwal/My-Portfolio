import React from "react";
import { Container, Row, Tab, Tabs } from "react-bootstrap/";
import {useState} from 'react';
import SectionHeading from "./SectionHeading";
import img1 from "../images/rushabhpavers_in.png"
import img2 from "../images/Will-it-rain.jpeg"
import img3 from "../images/NGO_dms.png"
import img4 from "../images/simons-game.png";
import img5 from "../images/Employee-database.png";
import img6 from "../images/To-Do-List.png";
import img7 from "../images/optimist- India.png";
import img8 from "../images/Tic-Tac-Toe.png";
import img9 from "../images/BlogWebsite.png";

import ProjectImg from "./ProjectImg";

const MyWork = () => {
  const [key, setKey] = useState('All');

  return (
    <Container style={{ backgroundColor: "#fff" }} fluid id="Portfolio">
      <SectionHeading title="Projects" />
      <Container>
        <Tabs
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="All" title="All">
            <Row>
            <ProjectImg
                href="https://www.rushabhpavers.in/"
                title="rushabhpavers.in"
                source={img1}
              />                        
              <ProjectImg
                href="https://github.com/Rushabh-Runwal/optimist-India"
                title="Will-it-Rain"
                source={img2}
              />
              <ProjectImg
                href="www.rushabhpavers.in"
                title="Donation Management System"
                source={img3}
              />                               
              <ProjectImg
                title="Employee management System"
                source={img5}
                href="https://github.com/Rushabh-Runwal/Employee-Database-Management"
              />
              <ProjectImg
                title="Todo-list"
                source={img6}
                href="https://github.com/Rushabh-Runwal/todo-list"
              />
              <ProjectImg
                title="Simons Game"
                source={img4}
                href="https://github.com/Rushabh-Runwal/Simon-Game"
              />       
              <ProjectImg
                href="https://github.com/Rushabh-Runwal/optimist-India"
                title="Optimist India"
                source={img7}
              />              
              <ProjectImg
                title="Tic Tac Toe"
                source={img8}
                href="https://github.com/Rushabh-Runwal/Tic-Tac-Toe"
              />
              <ProjectImg
                href="https://github.com/Rushabh-Runwal/MyBlogWebsite"
                title="Blog Website"
                source={img9}
              />
            </Row>
          </Tab>

          <Tab eventKey="ML" title="ML" >
          </Tab>

          <Tab eventKey="Python" title="Python" >  
          <Row>                    
              <ProjectImg
                href="https://github.com/Rushabh-Runwal/optimist-India"
                title="Will-it-Rain"
                source={img2}
              />
            </Row>          
          </Tab>

          <Tab eventKey="JavaScript" title="JS" >
          <Row>
            <ProjectImg
                  title="Todo-list"
                  source={img6}
                  href="https://github.com/Rushabh-Runwal/todo-list"
                />
                <ProjectImg
                  title="Simons Game"
                  source={img4}
                  href="https://github.com/Rushabh-Runwal/Simon-Game"
                />                 
                <ProjectImg
                  title="Tic Tac Toe"
                  source={img8}
                  href="https://github.com/Rushabh-Runwal/Tic-Tac-Toe"
                />
                <ProjectImg
                  href="https://github.com/Rushabh-Runwal/MyBlogWebsite"
                  title="Blog Website"
                  source={img9}
                />
          </Row>            
          </Tab>

          <Tab eventKey="Java" title="Java" >  
          <Row>
            <ProjectImg
                href="www.rushabhpavers.in"
                title="Donation Management System"
                source={img3}
              />                               
              <ProjectImg
                title="Employee management System"
                source={img5}
                href="https://github.com/Rushabh-Runwal/Employee-Database-Management"
              />          
          </Row>
          </Tab>

          <Tab eventKey="Websites" title="Websites" >  
          <Row>
            <ProjectImg
                href="https://www.rushabhpavers.in/"
                title="rushabhpavers.in"
                source={img1}
              />    
              <ProjectImg
                href="https://github.com/Rushabh-Runwal/optimist-India"
                title="Optimist India"
                source={img7}
              />       
          </Row>           
          </Tab>
        </Tabs>
      </Container>
    </Container>
  );
}

export default MyWork;
