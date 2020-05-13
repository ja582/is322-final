import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Movie } from '../store/movies/types'

function MovieCard(props: Movie) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.release_date}</Card.Subtitle>
        <Card.Text>
          {props.overview}
        </Card.Text>
        <Card.Text>
           {props.vote_average} Rating on IMDb
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
