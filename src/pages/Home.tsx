import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';

function Home() {
  return (
    <Container>
      <div>Hi Hello Welcome</div>
    </Container>
  );
}

export default connect()(Home);
