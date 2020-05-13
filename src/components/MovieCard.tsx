import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Movie } from '../store/movies/types'

function MovieCard(props: Movie) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Directed by Sofia Coppola</Card.Subtitle>
        <Card.Text>
          "Two lost souls visiting Tokyo -- the young, neglected wife of a photographer and a washed-up movie star shooting a TV commercial -- find an odd solace and pensive freedom to be real in each other's company, away from their lives in America."
        </Card.Text>
        <Card.Text>
          2003 1h 42min 7.4 Rating on IMDb
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
