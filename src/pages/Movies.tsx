import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';

import MovieList from "../components/MovieList";

function Movies() {
  return (
    <Container>
      <MovieList />
    </Container>
  );
}

export default connect()(Movies);
