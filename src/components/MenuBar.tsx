import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

function MenuBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        Movie Man
      </Navbar.Brand>
      <Link to="/">Home</Link>
      <text>&nbsp;</text>
      <Link to="/search">Search</Link>
      <text>&nbsp;</text>
      <Link to="/movies">Movies</Link>
    </Navbar>
  );
}

export default MenuBar;
