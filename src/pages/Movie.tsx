import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';

function Movie() {
  return (
    <Container>
      Individual Movie
    </Container>
  );
}

export default connect()(Movie);
