import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function MenuBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        Movie Man
      </Navbar.Brand>
      <Nav.Link>
        <Link to="/">Home</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/search">Search</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/movies">Movies</Link>
      </Nav.Link>
    </Navbar>
  );
}

export default MenuBar;
