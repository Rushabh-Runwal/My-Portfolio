import React from "react";

const SectionHeading = ({ title = "Section Heading" }) => {
  return (
    <div className="section-heading">
      <h1 data-aos="fade-right">{title}</h1>
      <hr data-aos="fade-left" />
    </div>
  );
};
export default SectionHeading;
