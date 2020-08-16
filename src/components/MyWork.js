import React from "react";
import { Container, Row } from "react-bootstrap/";
import SectionHeading from "./SectionHeading";
import img1 from "../images/optimist- India.png";
import img2 from "../images/Employee-database.png";
import img3 from "../images/To-Do-List.png";
import img4 from "../images/simons-game.png";
import ProjectImg from "./ProjectImg";

const MyWork = () => {
  return (
    <Container style={{ backgroundColor: "#fff" }} fluid id="Portfolio">
      <SectionHeading title="Projects" />
      <Container>
        <Row>
          <ProjectImg
            href="https://github.com/Rushabh-Runwal/optimist-India"
            title="Optimist India"
            source={img1}
          />
          <ProjectImg
            title="Employee management System"
            source={img2}
            href="https://github.com/Rushabh-Runwal/Employee-Database-Management"
          />
          <ProjectImg
            title="Todo-list"
            source={img3}
            href="https://github.com/Rushabh-Runwal/todo-list"
          />
          <ProjectImg
            title="Smons Game"
            source={img4}
            href="https://github.com/Rushabh-Runwal/Simon-Game"
          />
          <ProjectImg
            title="Tic Tac Toe"
            source="https://user-images.githubusercontent.com/65080982/86284153-f33ae800-bbff-11ea-9ca1-820373191324.png"
            href="https://github.com/Rushabh-Runwal/Tic-Tac-Toe"
          />
          <ProjectImg
            href="https://github.com/Rushabh-Runwal/MyBlogWebsite"
            title="Blog Website"
            source="https://user-images.githubusercontent.com/65080982/86285778-d81da780-bc02-11ea-81e9-e3ba95050c7a.png"
          />
        </Row>
      </Container>
    </Container>
  );
};
export default MyWork;
