import React from "react";
// import "../Scripts/One";n
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  window.onscroll = function () {
    window.scrollY >= 640
      ? document.querySelector(".navbar").classList.add("navbar-opacity")
      : document.querySelector(".navbar").classList.remove("navbar-opacity");
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      className="navbar-fixed"
      variant="dark"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          activeKey="#Head"
          onSelect={(selectedKey) => {}}
          className="mr-auto"
        >
          <Nav.Link active className="nav-link" href="#Head">
            HOME
          </Nav.Link>
          <Nav.Link className="nav-link" href="#About">
            ABOUT
          </Nav.Link>
          <Nav.Link className="nav-link" href="#Portfolio">
            PORTFOLIO
          </Nav.Link>
          <Nav.Link className="nav-link" href="#Contact">
            CONTACT
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
