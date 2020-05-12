import React from 'react';
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

function MenuBar() {
  return (
      <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Navbar.Brand href="#home">Candy</Navbar.Brand>
          <Navbar.Brand href="#home">Games</Navbar.Brand>
          <Navbar.Brand href="#home">Lollipops</Navbar.Brand>

      </Navbar>
  );
}

export default MenuBar;
