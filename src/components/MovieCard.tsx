import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MovieCard() {
  return (
      <Card style={{ width: '18rem' }}>
          <Card.Body>
              <Card.Title>Movie Title</Card.Title>
              <Card.Text>
                  movie plot
              </Card.Text>
          </Card.Body>
      </Card>
  );
}

export default MovieCard;
