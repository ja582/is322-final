import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Movie } from '../store/movies/types'
import {Link} from "react-router-dom";
var TextTruncate = require('react-text-truncate')

function MovieCard(props: Movie) {
  return (
    <Card className="text-left" style={{ margin: '0.75rem auto', textAlign: 'left' }}>
      <Card.Img variant="top" width="100%" src={`https://image.tmdb.org/t/p/w220_and_h330_face${props.poster_path}`} />
      <Card.Body>
        <Card.Title><Link to={`/movies/${props.id}`}>{props.title}</Link></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.release_date}</Card.Subtitle>
        <Card.Text>
          <TextTruncate
            line={1}
            element="span"
            truncateText="..."
            text={`${props.overview}`}
          />
        </Card.Text>
        <Card.Text>
          ★ {props.vote_average}/10
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
