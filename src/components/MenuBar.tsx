import React from 'react';
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

function MenuBar() {
  return (
      <Navbar bg="light" expand="lg">
          <Navbar.Brand><Link to="/">Home</Link></Navbar.Brand>
          <Navbar.Brand><Link to="/Movie">Movie</Link></Navbar.Brand>
      </Navbar>
  );
}

export default MenuBar;
