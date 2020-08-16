import React from "react";
import { Col, Button } from "react-bootstrap";

const ProjectImg = (props) => {
  return (
    <Col data-aos="zoom-out" className="pi-container" md={4} xs={6}>
      <img className="pi-img" src={props.source} alt="Project img" />
      <div className="img-after-hover">
        <Button
          variant="secondary"
          size="sm"
          outline="true"
          className="pi-btns btn-color"
          href={props.href}
        >
          {props.title}
        </Button>
      </div>
    </Col>
  );
};
export default ProjectImg;
